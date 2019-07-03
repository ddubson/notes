---
title: Null Checking
type: docs
---

# Null Checking

## Field checks (Java 1.7+)

{{<highlight java>}}
public class Car {
    private final Engine engine;
    private final Transmission transmission;

    public Car(Engine engine, Transmission transmission) {
        this.engine = Objects.requireNonNull(engine, "Engine cannot be null");
        this.transmission = Objects.requireNonNull(transmission, "Transmission cannot be null");
    }

    ...
}
{{</highlight>}}

In JDK7, `Objects.requireNonNull` was introduced to be able to check if an object is null or not.
It can be used to fail fast when wiring up objects at runtime.
