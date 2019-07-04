---
title: "Optimizations"
date: 2019-07-04T10:27:45-04:00
draft: false
---

## Load DispatcherServlet on App Start

DispatcherServlet is defined as:

> Central dispatcher for HTTP request handlers/controllers, e.g. for web UI controllers or HTTP-based
> remote service exporters. Dispatches to registered handlers for processing a web request, providing
> convenient mapping and exception handling facilities.

By default, Spring Boot lazily loads the dispatcher servlet on the first HTTP request.

In some cases, the lazy loading can affect user experience and even integration tests.

To switch to eager loading, add this to your Configuration class:

{{<highlight java>}}
@Bean
public static BeanFactoryPostProcessor beanFactoryPostProcessor() {  
    return new BeanFactoryPostProcessor() {
        @Override
        public void postProcessBeanFactory(
                ConfigurableListableBeanFactory beanFactory) throws BeansException {
            BeanDefinition bean = beanFactory.getBeanDefinition(
                    DispatcherServletAutoConfiguration.DEFAULT_DISPATCHER_SERVLET_REGISTRATION_BEAN_NAME);

            bean.getPropertyValues().add("loadOnStartup", 1);
        }
    };
}
{{</highlight>}}
