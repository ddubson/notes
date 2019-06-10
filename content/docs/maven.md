---
title: Maven Notes
type: docs
---

# Spring Boot Maven Plugin

## Entering Debug Mode

> via `pom.xml`

```xml
<project>
  ...
  <build>
    ...
    <plugins>
      ...
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        <version>2.0.0.BUILD-SNAPSHOT</version>
        <configuration>
          <jvmArguments>
            -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005
          </jvmArguments>
        </configuration>
        ...
      </plugin>
      ...
    </plugins>
    ...
  </build>
  ...
</project>
```

> via cmd line:

```xml
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=5005"
```
  
Navigating debug via JetBrains Intellij, create a 'remote' configuration:

![Maven debug](/img/maven-1.png)
