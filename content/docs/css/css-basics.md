---
title: Basics
type: docs
---

# CSS Basics

## Relational Selectors

`ul li`

- descendant selector
- matches nested `<li>`s

---

`ol > li`

- child selector
- matches `<li>`s in `<ol>` but not nested `<ul>`

---

`li.myClass + li`

- adjacent sibling (immediate `<li>` neighbor after the `<li>` that has myClass on it)

---

`li.myClass ~ li`

- general sibling selector
- all siblings following

https://plnkr.co/edit/SsytYXVJxof5J8ICcy8B?p=catalogue

---

## Attribute Selectors

`element[attribute]`

- select elements containing the named attribute

e.g.

`img[alt] {}`

`<img src="image.jpg" alt="accessible" />`

- matches any img with an `alt` attribute

### Older attribute selectors

`E[attr]`

- Element E that has attribute attr with any value

---

`E[attr="val"]`

- Element E with attribute with value 'val' (case-sensitive)

---

`E[attr|=val]`

- Element E whose attribute attr has value val or begins with `val-`

e.g.

`p[lang|="en"] {}` matches `<p lang="en-us"><p lang="en-uk">`

---

`E[attr~=val]`

- Element E with attribute attr has within its value the space separated full word `val`

`a[title~=more]` matches `<a title="want more info"/>`

---

`E[attr^=val]`

Element E with attribute attr starts with value `val`

e.g. `a[href^=mailto]`

---

`E[attr$=val]`

Element E with attribute attr ends with `val`

e.g. `a[href$=pdf]`

---

`E[attr*=val]`

Element E with attribute attr matches `val` anywhere within the attribute
