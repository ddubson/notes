---
title: "Fluentlenium"
weight: 1
---

# Setting up Fluentlenium with PhantomJS

This is a guide to help introduce Fluentlenium \(running with PhantomJS\) in a Spring Boot application project \(Gradle\)

#### Fetch Spring Boot test framework and utilities

**build.gradle**

{{<highlight groovy>}}
dependencies {
    testCompile 'org.springframework.boot:spring-boot-starter-test:{VERSION}.RELEASE'
}
{{</highlight>}}

#### Fetch Fluentlenium dependencies

**build.gradle**

{{<highlight groovy>}}
dependencies {
    testCompile 'org.fluentlenium:fluentlenium-junit:3.2.0'
    testCompile 'org.fluentlenium:fluentlenium-assertj:3.2.0'
    testCompile 'junit:junit:4.12'
    testCompile 'org.seleniumhq.selenium:selenium-remote-driver:2.53.1'
    testCompile 'xml-apis:xml-apis:1.4.01'
}
{{</highlight>}}

Sidenote: newer versions of`selenium-remote-driver`do not work with ghostdriver

#### Fetch the GhostDriver for interacting with PhantomJS

**build.gradle**

{{<highlight groovy>}}
repositories {
    maven { url 'https://jitpack.io' }
}
...
dependencies {
    testCompile 'com.github.detro:ghostdriver:2.0.0'
}
{{</highlight>}}

#### Install phantomjs via NPM

{{<highlight groovy>}}
npm init
npm i --save phantomjs-prebuilt
{{</highlight>}}

#### Create a simple Fluent test case

{{<highlight java>}}
import org.fluentlenium.adapter.junit.FluentTest;
import org.fluentlenium.core.annotation.Page;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = App.class,webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AppTest extends FluentTest {
    private String PHANTOMJS_LOG_LEVEL = "--webdriver-loglevel=WARN";
    private String PHANTOMJS_LOG_PATH = "--webdriver-logfile=logs/phantomjs.log";
    private String PHANTOMJS_BIN_PATH = "node_modules/phantomjs-prebuilt/bin/phantomjs";

    @LocalServerPort
    int serverPort;

    @Override
    public String getBaseUrl() {
        return "http://localhost:"+serverPort;
    }

    @Page
    HomePage homePage;

    @Override
    public WebDriver newWebDriver() {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, PHANTOMJS_BIN_PATH);
        capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_CLI_ARGS, new String[] { PHANTOMJS_LOG_LEVEL, PHANTOMJS_LOG_PATH });
        PhantomJSDriverService service = PhantomJSDriverService.createDefaultService(capabilities);
        return new PhantomJSDriver(service, capabilities);
    }

    @Test
    public void testHomePage() {
        homePage.go();
        assertTrue(homePage.find("html").present());
    }
}
{{</highlight>}}

Fluent Page

{{<highlight java>}}
import org.fluentlenium.core.FluentPage;
import org.fluentlenium.core.annotation.PageUrl;

@PageUrl("/")
public class HomePage extends FluentPage {
}
{{</highlight>}}
