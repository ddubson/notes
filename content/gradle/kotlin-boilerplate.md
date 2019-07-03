---
title: Gradle + Kotlin
type: docs
---

# Sample Gradle build templates

## Kotlin + Spring Boot

{{<highlight groovy>}}
plugins {
    id "org.springframework.boot" version "2.1.3.RELEASE"
    id "io.spring.dependency-management" version "1.0.6.RELEASE"
    id 'org.jetbrains.kotlin.jvm' version '1.3.21'
    id "org.jetbrains.kotlin.plugin.allopen" version "1.3.21"
    id "org.jetbrains.kotlin.plugin.spring" version "1.3.21"
}

repositories { mavenCentral() }

dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib-jre8"
    compile "org.jetbrains.kotlin:kotlin-reflect"
    compile "org.springframework.boot:spring-boot-starter"
}

compileKotlin { kotlinOptions { jvmTarget = "1.8" }}
compileTestKotlin { kotlinOptions { jvmTarget = "1.8" }}
{{</highlight>}}

## Kotlin + JUnit 5

{{<highlight groovy>}}
plugins {
    id "org.jetbrains.kotlin.jvm" version "1.3.11"
}

ext.junitVersion = "5.3.2"

repositories { mavenCentral() }

test { useJUnitPlatform() }

dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8"
    implementation "org.jetbrains.kotlin:kotlin-reflect"

    testImplementation "org.junit.jupiter:junit-jupiter-api:$junitVersion"
    testImplementation "org.junit.jupiter:junit-jupiter-params:$junitVersion"
    runtime "org.junit.jupiter:junit-jupiter-engine:$junitVersion"
}

compileKotlin { kotlinOptions { jvmTarget = "1.8" }}
compileTestKotlin { kotlinOptions { jvmTarget = "1.8" }}
{{</highlight>}}

## Kotlin, JUnit5, and Spek framework 

{{<highlight groovy>}}
plugins {
    id "org.jetbrains.kotlin.jvm" version "1.3.20"
}

ext.junitVersion = "5.3.2"
ext.spekVersion = "2.0.5"

apply plugin: "kotlin"

repositories { jcenter() }

test {
    useJUnitPlatform {
        includeEngines 'spek2'
    }
}

dependencies {
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8"
    implementation "org.jetbrains.kotlin:kotlin-reflect"

    testImplementation "org.junit.jupiter:junit-jupiter-api:$junitVersion"
    testImplementation "org.spekframework.spek2:spek-dsl-jvm:$spekVersion"
    testImplementation "org.spekframework.spek2:spek-runner-junit5:$spekVersion"
}

compileKotlin { kotlinOptions { jvmTarget = "1.8" } }
compileTestKotlin { kotlinOptions { jvmTarget = "1.8" } }
{{</highlight>}}

Example [here](https://github.com/ddubson/modular-monolith-reference-architecture/blob/master/build.gradle)
