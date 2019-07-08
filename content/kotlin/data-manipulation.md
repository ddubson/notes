---
title: "Data Manipulation"
date: 2019-07-04T10:29:46-04:00
draft: false
---
Count occurrences of items in a list

{{<highlight kotlin>}}
input.toList().asSequence().groupingBy { it }.eachCount()
{{</highlight>}}
