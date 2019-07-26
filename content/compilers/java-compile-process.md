---
title: "Java Compile Process"
date: 2019-07-26T08:58:07-04:00
draft: false
---
Java Virtual Machine (JVM) is responsible for compiling java **source** files 
into **bytecode** files (`.class` suffix).

{{<highlight bash>}}
# Compile source into bytecode
javac HelloWorld.java 

# Run Bytecode in JVM, JIT compiler will compile down to native binary on demand
java HelloWorld
{{</highlight>}}

![java-compilation-1](/img/java-compilation-2.png)
![java-compilation-2](/img/java-compilation-1.png)

