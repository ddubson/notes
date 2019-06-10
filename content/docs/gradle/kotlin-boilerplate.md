---
title: Gradle + Kotlin
type: docs
---

# Sample Gradle build templates

## Kotlin with Spring Boot

```groovy
buildscript {
    ext.springBootVersion = "[SPRING-BOOT-VERSION]"
    ext.kotlinVersion = "[KOTLIN-VERSION]"

    repositories { mavenCentral() }

    dependencies {
        classpath "org.springframework.boot:spring-boot-gradle-plugin:$springBootVersion"
        classpath "org.jetbrains.kotlin:kotlin-allopen:$kotlinVersion"
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
    }
}

repositories { mavenCentral() }

apply plugin: 'kotlin'
apply plugin: 'kotlin-spring'
apply plugin: 'org.springframework.boot'

dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib-jre8:$kotlinVersion"
    compile "org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion"
    compile "org.springframework.boot:spring-boot-starter:$springBootVersion"
}

compileKotlin { kotlinOptions { jvmTarget = "1.8" }}
compileTestKotlin { kotlinOptions { jvmTarget = "1.8" }}
```

## JUnit 5 + Spek framework

```groovy
buildscript {
    ext {
        kotlinVersion = "1.1.4-3"
        spekVersion = "1.1.4"
        junitVersion = "5.0.0"
        junitPlatformVersion = "1.0.0-RC3"
    }

    repositories { mavenCentral() }

    dependencies {
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
        classpath "org.junit.platform:junit-platform-gradle-plugin:$junitPlatformVersion"
    }
}

apply plugin: "kotlin"
apply plugin: 'org.junit.platform.gradle.plugin'

version '1.0'
sourceCompatibility = 1.8
targetCompatibility = 1.8

junitPlatform {
    filters { engines { include 'spek' } }
}

repositories { mavenCentral() }

dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib-jre8:$kotlinVersion"
    compile "org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion"

    testCompile "org.junit.jupiter:junit-jupiter-api:$junitVersion"
    testCompile "org.junit.platform:junit-platform-runner:$junitPlatformVersion"
    testRuntime "org.junit.platform:junit-platform-console:$junitPlatformVersion"

    testCompile ("org.jetbrains.spek:spek-api:$spekVersion") {
        exclude group: 'org.jetbrains.kotlin'
    }

    testRuntime ("org.jetbrains.spek:spek-junit-platform-engine:$spekVersion") {
        exclude group: 'org.junit.platform'
        exclude group: 'org.jetbrains.kotlin'
    }
}
```

## JUnit 5

```groovy
buildscript {
    ext.kotlinVersion = "[KOTLIN_VERSION]"
    ext.junitVersion = "5.0.0"
    ext.junitPlatformVersion = "1.0.0"

    repositories { mavenCentral() }

    dependencies {
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"
        classpath "org.junit.platform:junit-platform-gradle-plugin:$junitPlatformVersion"
    }
}

repositories { mavenCentral() }

apply plugin: 'kotlin'
apply plugin: 'org.junit.platform.gradle.plugin'

dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib-jre8:$kotlinVersion"
    compile "org.jetbrains.kotlin:kotlin-reflect:$kotlinVersion"

    testCompile "org.junit.jupiter:junit-jupiter-api:$junitVersion"
    runtime "org.junit.jupiter:junit-jupiter-engine:$junitVersion"
    runtime "org.junit.platform:junit-platform-console:$junitPlatformVersion"
}

apply from: "junit5.gradle"

compileKotlin { kotlinOptions { jvmTarget = "1.8" }}
compileTestKotlin { kotlinOptions { jvmTarget = "1.8" }}
```
