---
title: Basics
type: docs
---

Rule set structure:

{{<highlight css>}}
selector {
  property: value;
  property: value;
  property: value;
  property: value;
}
{{</highlight>}}

Three types of stylesheets:

1. Embedded
2. Inline
3. External

## Box Model

Box Model includes `margin`, `border`, `padding`, and content

e.g.

{{<highlight css>}}
.myclass {
  width: 300px;
  padding: 50px;
  margin: 50px;
  border: 10px;
}
{{</highlight>}}

{{% notice info %}}
Even though width is `300px`, the actual width of the container is width + padding + margin + border 
(in this case, `410px`)

`box-sizing: border-box` will include width+height of the border and the width+height of the 
padding in the width+height calculation   
{{% /notice %}}

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
