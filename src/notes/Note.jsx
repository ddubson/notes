import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const code = `Product product1 = Product.builder().tags(asList("tag1", "tag2")).build();
      Product product2 = Product.builder().tags(asList("tag2", "tag3")).build();
      List<Product> products = asList(product1, product2);
      List<String> listOfTags = products.stream()
                                  .flatMap(product -> product.getTags().stream())
                                  .collect(Collectors.toList());`;

export const Note = () => (
  <section>
    <p>
      Given you have a set of lists, if you want to combine all the lists into one big list, use <code>flatMap</code>.
    </p>
    <Highlight {...defaultProps} language="java" code={code}>

    </Highlight>
  </section>
);
