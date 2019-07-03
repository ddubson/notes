---
title: Spring Framework Notes
type: docs
---

# Application Events

## Listening for Application Start or Refresh

If needing to react to events right after the Spring container
has started or has been refreshed.

> v4.2+

{{<highlight java>}}
@Component
public class MyClass  {
    @EventListener
    public void handleContextRefresh(ContextRefreshedEvent event) {
      // do stuff
    }
}
{{</highlight>}}

> v4.2 and below

{{<highlight java>}}
@Component
public MyClass implements ApplicationListener<ContextRefreshedEvent> {
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
      // do stuff
    }
}
{{</highlight>}}
