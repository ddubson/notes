---
title: Java - Streams
type: docs
---

# Streams (Java 1.8+)

## Flatten list of lists

```java
Product product1 = Product.builder().tags(asList("tag1", "tag2")).build();
Product product2 = Product.builder().tags(asList("tag2", "tag3")).build();
List<Product> products = asList(product1, product2);
List<String> listOfTags = products.stream()
                            .flatMap(product -> product.getTags().stream())
                            .collect(Collectors.toList());
```

Given you have a set of lists, if you want to combine all the lists into one big list, use `flatMap`.

## Merge two lists

```java
List<Integer> listOfOdds = asList(1,3,5,7,9);
List<Integer> listOfEvens = asList(2,4,6,8,10);
List<Integer> listOfAll = Stream.concat(
                            listOfOdds.stream(),
                            listOfEvens.stream()
                          ).collect(Collectors.toList());
```

Given two lists, to merge them into one list, use `Stream.concat`
