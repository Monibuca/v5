package report

import (
	"fmt"
	"reflect"
	"slices"
	"strings"
	"testing"

	"m7s.live/v5/plugin/debug/pkg/profile"
)

// makeTestStacks generates a StackSet from a supplied list of samples.
func makeTestStacks(samples ...*profile.Sample) StackSet {
	prof := makeTestProfile(samples...)
	rpt := NewDefault(prof, Options{OutputFormat: Tree, CallTree: true})
	return rpt.Stacks()
}

func TestStacks(t *testing.T) {
	// See report_test.go for the functions available to use in tests.
	locs := clearLineAndColumn(testL)
	main, foo, bar, tee := locs[0], locs[1], locs[2], locs[3]

	// Also make some file-only locations to test file granularity.
	fileMain := makeFileLocation(main)
	fileFoo := makeFileLocation(foo)
	fileBar := makeFileLocation(bar)

	// stack holds an expected stack value found in StackSet.
	type stack struct {
		value int64
		names []string
	}
	makeStack := func(value int64, names ...string) stack {
		return stack{value, names}
	}

	for _, c := range []struct {
		name   string
		stacks StackSet
		expect []stack
	}{
		{
			"simple",
			makeTestStacks(
				testSample(100, bar, foo, main),
				testSample(200, tee, foo, main),
			),
			[]stack{
				makeStack(100, "0:root", "1:main", "2:foo", "3:bar"),
				makeStack(200, "0:root", "1:main", "2:foo", "4:tee"),
			},
		},
		{
			"recursion",
			makeTestStacks(
				testSample(100, bar, foo, foo, foo, main),
				testSample(200, bar, foo, foo, main),
			),
			[]stack{
				// Note: Recursive calls to foo have different source indices.
				makeStack(100, "0:root", "1:main", "2:foo", "2:foo", "2:foo", "3:bar"),
				makeStack(200, "0:root", "1:main", "2:foo", "2:foo", "3:bar"),
			},
		},
		{
			"files",
			makeTestStacks(
				testSample(100, fileFoo, fileMain),
				testSample(200, fileBar, fileMain),
			),
			[]stack{
				makeStack(100, "0:root", "1:dir/main", "2:dir/foo"),
				makeStack(200, "0:root", "1:dir/main", "3:dir/bar"),
			},
		},
	} {
		t.Run(c.name, func(t *testing.T) {
			var got []stack
			for _, s := range c.stacks.Stacks {
				stk := stack{
					value: s.Value,
					names: make([]string, len(s.Sources)),
				}
				for i, src := range s.Sources {
					stk.names[i] = fmt.Sprint(src, ":", c.stacks.Sources[src].FullName)
				}
				got = append(got, stk)
			}
			if !reflect.DeepEqual(c.expect, got) {
				t.Errorf("expecting source %+v, got %+v", c.expect, got)
			}
		})
	}
}

func TestStackSources(t *testing.T) {
	// See report_test.go for the functions available to use in tests.
	locs := clearLineAndColumn(testL)
	main, foo, bar, tee, inl := locs[0], locs[1], locs[2], locs[3], locs[5]

	type srcInfo struct {
		name    string
		self    int64
		inlined bool
	}

	source := func(stacks StackSet, name string) srcInfo {
		src := findSource(stacks, name)
		return srcInfo{src.FullName, src.Self, src.Inlined}
	}

	for _, c := range []struct {
		name   string
		stacks StackSet
		srcs   []srcInfo
	}{
		{
			"empty",
			makeTestStacks(),
			[]srcInfo{},
		},
		{
			"two-leaves",
			makeTestStacks(
				testSample(100, bar, foo, main),
				testSample(200, tee, bar, foo, main),
				testSample(1000, tee, main),
			),
			[]srcInfo{
				{"main", 0, false},
				{"bar", 100, false},
				{"foo", 0, false},
				{"tee", 1200, false},
			},
		},
		{
			"inlined",
			makeTestStacks(
				testSample(100, inl),
				testSample(200, inl),
			),
			[]srcInfo{
				// inl has bar->tee
				{"tee", 300, true},
			},
		},
		{
			"recursion",
			makeTestStacks(
				testSample(100, foo, foo, foo, main),
				testSample(100, foo, foo, main),
			),
			[]srcInfo{
				{"main", 0, false},
				{"foo", 200, false},
			},
		},
		{
			"flat",
			makeTestStacks(
				testSample(100, main),
				testSample(100, foo),
				testSample(100, bar),
				testSample(100, tee),
			),
			[]srcInfo{
				{"main", 100, false},
				{"bar", 100, false},
				{"foo", 100, false},
				{"tee", 100, false},
			},
		},
	} {
		t.Run(c.name, func(t *testing.T) {
			for _, expect := range c.srcs {
				got := source(c.stacks, expect.name)
				if !reflect.DeepEqual(expect, got) {
					t.Errorf("expecting source %+v, got %+v", expect, got)
				}
			}
		})
	}
}

func TestLegend(t *testing.T) {
	// See report_test.go for the functions available to use in tests.
	main, foo, bar, tee := testL[0], testL[1], testL[2], testL[3]
	stacks := makeTestStacks(
		testSample(100, bar, foo, main),
		testSample(200, tee, foo, main),
	)
	got := strings.Join(stacks.Legend(), "\n")
	expectStrings := []string{"Type: samples", "Showing nodes", "100% of 300 total"}
	for _, expect := range expectStrings {
		if !strings.Contains(got, expect) {
			t.Errorf("missing expected string %q in legend %q", expect, got)
		}
	}
}

func findSource(stacks StackSet, name string) StackSource {
	for _, src := range stacks.Sources {
		if src.FullName == name {
			return src
		}
	}
	return StackSource{}
}

// clearLineAndColumn drops line and column numbers to simplify tests that
// do not care about line and column numbers.
func clearLineAndColumn(locs []*profile.Location) []*profile.Location {
	result := make([]*profile.Location, len(locs))
	for i, loc := range locs {
		newLoc := *loc
		newLoc.Line = slices.Clone(loc.Line)
		for j := range newLoc.Line {
			newLoc.Line[j].Line = 0
			newLoc.Line[j].Column = 0
		}
		result[i] = &newLoc
	}
	return result
}

// makeFileLocation switches loc from function to file-granularity.
func makeFileLocation(loc *profile.Location) *profile.Location {
	result := *loc
	result.ID += 1000
	result.Line = slices.Clone(loc.Line)
	for i := range result.Line {
		fn := *result.Line[i].Function
		fn.Filename = "dir/" + fn.Name
		fn.Name = ""
		result.Line[i].Function = &fn
	}
	return &result
}
