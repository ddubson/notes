---
title: "Crypto Algorithms"
date: 2019-07-17T13:14:37-04:00
draft: false
weight: 2
---
## Attributes

- **Algorithm**
- **Type** - symmetric, assymetric, etc.
- **Initialization Vector**- starting variable that can be used to mix in with cryptographic primitive; required to be 
random/pseudo-random; ensures that when plaintext is encrypted multiple times, every ciphertext output is different.
- **Key Size** - the length of the key used to encrypt/decrypt data. (e.g. 64-, 128-, 256-, 512-bit, etc.)
- **Mode** - defined method that determines how plaintext block is input and changed to produce ciphertext.

## Symmetric Algorithms

In **symmetric key algorithms**, the key used to encrypt data, is used to decrypt that same data.

### DES - Data Encryption Standard

Older, obsolete standard

Algorithm used in DES is called **Lucifer** (developed by IBM)

Operated on 64-bit blocks

* 8 bits were used for computational overhead
* 56 bit key size

DES uses 5 different modes

- **Electronic Code Book (ECB)** mode is simplest
  - Each 64-bit block will produce the same output for a given input (predictable)
- **Cipher Block Chaining** **(CBC)**
  - Stronger encryption due to Initialization Vector (IV) and XOR Function (less predictable)
- **Cipher Feedback (CFB)**
  - plaintext is divvied up into different bit-size segments and each output is fed back into process and used as IV 
  in subsequent block of plaintext.
- **Output Feedback (OFB)**
  - Similar to CFB but uses 64-bit IV that are fed back into process for each subsequent block of plaintext
- **Counter (CTR)** mode (fastest)
  - random 64-bit block is used as IV
  - incremented for every subsequent block by specific number or counter.

DES uses **16 rounds** for each mode.

### 3DES (Triple DES)

Later iteration of DES designed to fix problems in original standard.

3DES puts plaintext blocks through DES encryption 3 times.

Uses three 56-bit key bundles.

3DES uses Encrypt-Decrypt-Encrypt (EDE) method with 3 separate keys during the three stages.

### Advanced Encryption Standard (AES)

- Established in 2001 by NIST to be official encryption standard for U.S. Govt.
- Based on the **Rijndael Algorithm**
- Symmetric block cipher that can use block sizes of 128 bits with key sizes of 128, 192, 256 bits.
  - 10 rounds for 128-bit keys
  - 12 rounds for 192-bit keys
  - 14 rounds for 256-bit keys
- Can use different modes for encryption/decryption.
- Most attacks on AES are theoretical (side-channel attacks)

### Blowfish

- Block cipher created in 1993 (Bruce Schneier)
- Based on 64-bit blocks, with key sizes from 32 bits to 448 bits.
- Uses 16 rounds of encryption
- Susceptible to birthday attacks (in HTTPS context)
- Susceptible to collision attacks in CBC mode (SWEET32)

### TwoFish

* Replacement for Blowfish
* Symmetric block algorithm with 128-bit block size.
* Keys of 128-bit, 192-bit, or 256-bit keys.
* Uses 16 rounds of encryption.

### RC4

* Streaming cipher
* Invented by Ron Rivest
* Uses one round of encryption 
* Key sizes from 40 to 2048 bits in length.
* Most popular in wireless encryption
* Currently cryptographically vulnerable and is not recommended for use (RFC 7465 - RC4 eliminated from TLS)    

---

## Assymetric 

### RSA 

* Used to create a public-private key pair.
* Generates keys via factoring two very large prime number
* One round of encryption
* Key sizes from 1,024 to 4,096 bits.
* Defacto assymetric algorithm today

### Diffie-Hellman 

* aka D-H or DHE -- series of key exchange protocols and variants.
* D-H provides secure key exchange.
* Elliptic Curve Diffie-Hellman Exchange (ECDHE) is a variant of DHE based upon elliptic curve cryptography.

### PGP/GPG 

* PGP -&gt; Pretty Good Privacy - crypto application and protocol suite.
  * Can use both assymetric and symmetric keys for a wide variety of operations:
    * bulk encryption
    * data-at-rest encryption
    * key-pair generation
    * key exchange
* Uses "web of trust" instead of public key infrastructure (PKI)
* GPG is open source equivalent (Gnu Privacy Guard)

### Elliptic Curve Cryptography (ECC) 

* ECC is an assymetric method of cryptography based on algebraic structure of elliptic curves over finite fields.
* Applies to encryption and digital signatures.
* Widely implemented in smart phones

### ElGamal 

* Assymetric algorithm for digital signatures and encryption.
* Widely used in open standards, including PGP/GPG
* US Govt. Digital Signature Algorithm (DSA) is based on ElGamal signature scheme

## Hashing Algorithms

### Message Digest 5

* Developed by Ron Rivest in '91
* Generates a 128-bit hash, 32-hex long
* Replaced MD4
* Susceptible to colision attacks
* Should not be used in secure environments

### SHA

* Secure Hash Algorithm (SHA) - series of hash functions sponsored by NIST.
* SHA-1 is a 160-bit algorithm, producd 40 character hashes.
* SHA-2 is two separate algorithms
  * SHA-256
  * SHA-224
  * SHA-512
  * SHA-384
* SHA-3 - based on Keccak hashing function

---

## Data Storage Security

Most programs (at OS level or 3rd party) use **symmetric algorithms** to encrypt data at rest.

## Transport Encryption

SSL - uses both symmetric and assymetric algorithms in a hybrid combination to authenticate users and provide 
encrypted communications between server-client.

TLS - replacement for SSL;

## Wireless Encryption

Wired Equivalent Privacy (WEP) - uses RC4 streaming protocol. (obsolete, cryptographically broken)

Wi-Fi Protected Access (WPA) - supports RC4; improves in Temporal Key Integrity Protocol (TKIP) which 
dynamically encrypts every packet transmitted from a wireless device.

WPA2 - uses AES as encryption algorithm.

WPA and WPA2 use concept of pre-shared keys.
