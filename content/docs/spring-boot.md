---
title: Spring Boot Notes
type: docs
---

# Spring Boot Notes

## Logging

### Turn off debug logs in Spring Boot testing

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">
    <statusListener class="ch.qos.logback.core.status.NopStatusListener" />

    ...
</configuration>
{{</highlight>}}

When a spring boot integration test runs, there are debug level logs that pop up
before the Spring Boot banner, here's a way to turn the DEBUG level logs off.

Add `src/main/resources/logback.xml` with the code on the right.

### Logback template

{{<highlight xml>}}
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">
    <!-- optional Nop status listener -->
    <statusListener class="ch.qos.logback.core.status.NopStatusListener" />

    <!-- console and file appenders -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <layout class="ch.qos.logback.classic.PatternLayout">
            <Pattern>%d{HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</Pattern>
        </layout>
    </appender>
    <appender name="FILE_APPENDER" class="ch.qos.logback.core.FileAppender">
        <file>logs/fs.log</file>
        <layout class="ch.qos.logback.classic.PatternLayout">
            <Pattern>%d{HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</Pattern>
        </layout>
    </appender>

    <!-- logger definitions -->
    <logger name="[package-path]" level="INFO">
        <appender-ref ref="STDOUT" />
        <appender-ref ref="FILE_APPENDER" />
    </logger>

    <!-- root level logger -->
    <root level="ERROR">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
{{</highlight>}}

Location of placement: `src/main/resources/` and `src/test/resources`
