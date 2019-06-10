---
title: Optimizations
type: docs
---

# Optimizing

## Measuring Performance

Append `?react_perf` to url in development mode to be able to profile performance
via Chrome tools with a more in depth look into timings.

`react-addons-perf`

## Using PureComponent

`PureComponent` is a React Component that comes with pre-written compare logic in `shouldComponentUpdate` lifecycle method that checks for props and state equality. It prevents unnecessary re-rendering of components.

More here: https://60devs.com/pure-component-in-react.html

Use in conjunction with `immutability-helper` which makes sure the state object
is immutable when any given value is updated in it.
