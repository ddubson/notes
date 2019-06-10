---
title: Spring Framework Notes
type: docs
---

# Application Events

## Listening for Application Start or Refresh

> v4.2+

```java
@Component
public class MyClass  {
    @EventListener
    public void handleContextRefresh(ContextRefreshedEvent event) {
      // do stuff
    }
}
```

> v4.2 and below

```java
@Component
public MyClass implements ApplicationListener<ContextRefreshedEvent> {
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
      // do stuff
    }
}
```

If needing to react to events right after the Spring container
has started or has been refreshed.
