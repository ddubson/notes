---
title: "Concepts"
date: 2019-07-17T13:19:15-04:00
draft: false
weight: 1
---
{{% notice info %}}
Supports one of the three major security goals: **Confidentiality**
{{% /notice %}}

**plaintext** - human readable information

**ciphertext** - non-human readable or interpretable information

**Encryption**- process of converting plaintext to ciphertext

**Decryption** - process of converting ciphertext to plaintext

Cryptography maintains the secrecy of data and also potentially the integrity of data (via hashing)

## Terms

**Cryptanalysis** - study of breaking encryption algorithms (attempting to decrypt ciphertext without the appropriate key)

**Code** - usually a concept that is a phrase/sentence (e.g. "Thunder" -> "Flash"); usually requires a codebook to interpret

**Cipher** - character-by-character representation of a text

**In-Band Key Exchange** - crypto keys are exchanged via the same medium as the intended message

**Out-of-Band Key Exchange** - crypto keys are exchange via separate medium as the indended message.

#### Data States

Data-at-Rest - data is in storage and not being accessed

Data-in-Flight - data is being transferred between two endpoints.

Data-in-Process - data is being processed by an application or some external running entity.

## Hashing

Hashing is part of cryptography but is not considered encryption.

Hashing is the process of creating a cryptographic fixed-length sum of an entity, aka **hash**

Hashes are static in length, independent of the input.

Hashing is a one-way process

![](/img/crypt-1.png)

## Cryptographic Components

Algorithms - mathematical constructs that define how plaintext is altered to become ciphertext, as well as how that 
process is reversed with decryption

Keys (cryptovariable) - used with an algorithm to perform encryption; are to be kept secret

* A key might be in the form of a password, PIN, etc.

Algorithms should be publicly available whereas keys should be kept private.

![](/img/crypt-2.png)

**Kerckhoff's Principle** - algorithm should not be kept secret but the key should be.

## Algorithm Types

### Block Algorithms

operates on a predefined size of group of bits, known as a block.

Block algorithms have various sizes they operate on, such as 16-, 64-, or 128-bit blocks

### Streaming Algorithms

operate on individual bits in an encryption stream

Tend to work much faster than block algorithms

### XOR Function

Block and Streaming algorithms both utilize XOR function on their respective groupings of bits (blocks or bits)

In a XOR function, each bit (either in a block or stream) is compared with the keystream (bits fed in by the key) and changed if it is exclusive.

The generated bits are the ciphertext.

In addition to XOR, algorithms may utilize more advanced functions to generate the ciphertext.

![](/img/crypt-3.png)

Algorithms use the concept of **rounds** - number of times to perform the encryption. (e.g. DES uses 16 rounds of encryption)

## Symmetric Cryptography

involves the use of a single key for encryption and decryption of information.

Symmetric keys are sometimes known as **session keys **or **secret keys **

Symmetric keys are usually used in one time use sessions or throwaway, on-demand communication

![](/img/crypt-4.png)

Pros:

* Very fast encryption and decryption process.

Cons:

* The more parties involved, the higher the risk the key becomes compromised.
* Key exchange is usually dangerous or insecure.

## Assymetric Cryptography (Public Key Cryptography)

Uses two different keys for encryption and decryption

Often called **public key** and **private key** (making up a **key pair)**

Public key can be shared freely with anyone

Private key is to be kept secret

What one key can encrypt, the other key can decrypt and vice versa

![](/img/pubkey-crypt-1.png)

Pros:

* Resolves issue with key exchange, since public keys can be freely shared

Cons:

* Computationally slow to generate keys
* Works well with only small amount of data


