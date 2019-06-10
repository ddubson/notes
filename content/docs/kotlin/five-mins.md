---
title: In 5 minutes
type: docs
---

# Kotlin in 5 minutes

## Data Types

`val` -> immutable variable - can't be changed once set (same as final in Java)

`var` -> mutable variable - can be changed during its lifetime

## Functions and Lambdas

Unused variables can be replaced with _ (similar to Golang), e.g.:

`mapOfSomething.forEach { _, value -> ... }`

## Classes

All classes are final (cannot be extended), unless prefixed with open operator., e.g.

`open class Dog { ... }`

Implement an interface via the colon : operator, e.g.

`open class Dog : Animal { ... }`

Extend an existing class via color : operator but also call the super constructor, e.g.:

`class ShaggyDog(val hairColor: String) : Dog() { .. }`

Declare private variables in a class, e.g.:
```
class Dog {
    private val animal: Boolean = true
}
```

Constructor variables that are also private variables, e.g.:

```
class Dog(val hairColor: String) {

}
```

Entity classes (similar to POJOs in Java) can be simplified via data class (getters, setters not needed):

`data class Car(val type: String, val color: String)`
