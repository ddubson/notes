---
title: Security
type: docs
---
## Hash Functions

[Java Secure Coding Practices](https://www.securecoding.cert.org/confluence/display/java/Security:+Introduction)

[Hashing Passwords with Java](https://www.securecoding.cert.org/confluence/display/java/MSC62-J.+Store+passwords+using+a+hash+function)

#### Cryptographic Hash Functions

| Lean On...                         | Avoid... (birthday, collision attacks, crypto-broken) |
| :---                               | :--- |
| SHA-2 (> 256)                      | MD5 |
| SHA-3                              | SHA1 |
| PBKDF2WithHmacSHA1                 | - |
| PBKDF2WithHmacSHA512               | - |
| Bcrypt \(std. in Spring Security\) | - |
