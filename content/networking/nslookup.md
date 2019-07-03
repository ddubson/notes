---
title: "nslookup Notes"
weight: 1
# bookFlatSection: false
# bookShowToC: true
---

# nslookup recipes

Basic lookup

{{<highlight bash>}}
nslookup [hostname]
{{</highlight>}}

Basic lookup using a specific DNS server

{{<highlight bash>}}
nslookup [hostname] [dns-server]
{{</highlight>}}

Specific DNS query

e.g. MX \(Mail\)

{{<highlight bash>}}
nslookup -query=mx [hostname]
{{</highlight>}}
