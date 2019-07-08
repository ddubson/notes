---
title: Reading Files
type: docs
---
## Using Scanner

{{<highlight java>}}
Scanner scanner = new Scanner(MyClass.class.getClass().getResourceAsStream("/file.txt"));
while(scanner.hasNext()) {
    System.out.println(scanner.nextLine());
}
{{</highlight>}}

If file `file.txt` is on the classpath, this will use a classloader to create an InputStream to the file:

`this` can only be used if the context is non-static. If reading from a static method or context,
use `MyClass.class.getResourceAsStream(...)`
