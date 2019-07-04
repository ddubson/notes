---
title: "Flyway DB Migrations"
date: 2019-07-04T10:20:56-04:00
draft: false
---

## Spring Boot and Flyway caveats

When attempting to set up the initial application properties file, make sure to **NOT** specify the following

{{<highlight yaml>}}
flyway.url
flyway.user
flyway.password
{{</highlight>}}

IF you already have:

{{<highlight yaml>}}
spring.datasource.url
spring.datasource.username
{{</highlight>}}

If you do, it will create two data sources and will cause confusion! Only specify `spring.datasource.*`

