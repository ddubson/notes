---
title: Testing Concepts
type: docs
---

## Unit Testing

`SUT` - System Under Test

`CUT` - Class Under Test

Unit - Unit of Work / Use Case

A `unit of work` is the sum of actions that take place between the invocation of a public method in the SUT and a single noticeable end result by a test of that system.

An end result can be observed without looking at the internal state of the system and only through its public APIs and behavior

An end result is any of:

- A return value of the function
- A noticeable change to the state or behavior of the system before/after invocation, without interrogating the internal state.
- Call to a 3rd-party system over which test has no control, and that 3rd-party system does not return any value or value is ignored.

A unit of work means that it can span as little as a single method and up to multiple classes and functions to achieve purpose.

A `unit test` is an automated piece of code that invokes a unit of work being tested, and then checks some assumptions about a single end result of that unit. It can be written and run quickly, it is trustworthy, readable, and maintainable. It is consistent in its end results as long as production code has not changed.

## Good Unit Tests

It should be:

- Automated and repeatable
- Easy to implement
- Relevant tomorrow

It should:

- run quickly
- Run at push of a button
- be idempotent - consistent in its results on every run
- full control of the Unit under test
- be fully isolated

When it fails, should be easy to detect what the issue is

A `regression` is 1+ units of work that once worked, but now don't

`Refactoring` means changing a piece of code without changing its functionality -- aiming to make it easier to maintain, read, debug, etc.

## Conventions

The convention of a test case:

(unitOfWorkName)_(ScenarioUnderTest)_(ExpectedBehavior)

**Unit of Work Name** - name of method or group of methods or classes being tested

**Scenario** - conditions under which the unit is tested

**Expected Behavior** - what you expect the tested method to do under the specified conditions.

The test has to read effortlessly

## Test Phases

- **Arrange** objects
- **Act** on an object
- **Assert** is something is as expected

## Set up and Tear Down

You almost never use `tearDown` methods in a unit test - if you do, it usually indicates it is at the integration test level

## Types of Testing

### Value-based Testing

Exercising the SUT and checking the validity of the return value

### State-based Testing

also called State Verification, determines whether the exercised method worked correctly by examining the changed behavior of the SUT and its collaborators (dependencies) after the method is exercised.

### Interaction Testing

Checking whether an object calls other objects correctly

## Test Doubles

External Dependency is an object in your system that your SUT interacts with and over which you have no control

### Stubs

A `stub` is a controllable replacement for an existing dependency (or collaborator) in the system. By using a stub, you can test your code without dealing with the dependency directly.

`seams` are places in your code where you can plug in different functionality, such as stub classes, adding a constructor parameter, adding a public settable property, etc.

a `fake` is a generic term used to describe a stub or mock object.

**Wide Faking** - ability to fake multiple methods at once

## Integration Tests

An `integration test` is test that exercises unit of work without having full control over all of it and using one or more of its real dependencies, i.e. time, network, database, threads, random number generators, etc.

Integration Test qualities:

- are not as fast as unit tests
- use one or more real dependencies of the units under test

e.g. test uses the real file system or database to perform its work.
