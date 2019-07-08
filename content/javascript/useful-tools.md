---
title: Useful JS tools
type: docs
---
## Execution delay

Debounce - delay execution of a function by a specified timeout

Use case: executing a search based on input, but waiting until search term is fully fleshed out

Get [Lodash Debounce](https://www.npmjs.com/package/lodash.debounce)

{{<highlight javascript>}}
const doSearch = debounce(() => { searchFor(searchTerm); }, 500);
{{</highlight>}}
