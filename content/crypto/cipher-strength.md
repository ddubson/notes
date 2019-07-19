---
title: "Cipher Strength"
date: 2019-07-19T08:49:28-04:00
draft: false
---

## Key Stretching

Means of strengthening potentially weaker keys by "stretching" them to make them more resilient against crypto attacks.

Multiple rounds of encryption is an example of key stretching.

**Password-Based Key Derivation Function 2 (PBKDF2)**- method of key stretching and involves applying a password and 
a salt value using HMAC in multiple rounds of input plaintext.

**Bcrypt** - method that uses salts and multiple rounds, with Blowfish algorithm applied to the input text.

## Ephemeral Keys

One-time use keys, used once after generation, and then disposed. 

**Diffie-Hellman Key Exchange** protocol is an example of ephemeral key usage.

Ephemeral Diffie-Hellman (EDH) is the variation on Diffie-Hellman

## Perfect Forward Secrecy

Concept in Public Key Cryptography.

If one key is compromised, an attacker may try to determine the mathematical relationship and methods used between 
the generated and original keys.

One key cannot be compromised even if the original key that created it has been compromised.

Ephemeral keys help prevent key compromise and assure perfect forward secrecy.
