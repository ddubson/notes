---
title: "Useful Configurations"
date: 2019-07-03T17:11:04-04:00
draft: false
---

### Setting Source / Test Directories

With the `java` plugin applied, add:

{{<highlight groovy>}}
sourceSets {
    main.groovy.srcDir("src/main/java")
    test.java.srcDir("src/main/test")
}
{{</highlight>}}

Specify multiple directories:

{{<highlight groovy>}}
sourceSets {
    test.java.srcDirs("src/test/java", "src/integration-test/java")
}
{{</highlight>}}


