---
title: "Useful Enzyme"
date: 2019-07-04T10:48:01-04:00
draft: false
---

## Simulate Form Field Events

### Input - Set a Value

{{<highlight javascript>}}
const componentWrapper = mount(<MyComponent />);
componentWrapper.find("input").simulate('change', { target: { value: "valueToSet" }});
{{</highlight>}}

When attempting to simulate setting a value to a field, React will need a pair of `value` and `onChange` methods to be able to register the changes (controlled).

e.g.

{{<highlight html>}}
<textarea value={this.state.myValue} onChange={(e) => { this.setState({myValue: e.target.value}); }} />
{{</highlight>}}

