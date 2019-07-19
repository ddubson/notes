---
title: "Public Key Infrastructure"
date: 2019-07-19T08:51:06-04:00
draft: false
---
## Concepts

Amalgamation of multiple techniques, algorithms, and processes that **create and manage an infrastructure 
for managing digital certificates throughout their lifecycle.**

Lifecycle includes:

- Issuance of certificates
- Use of certificates
- Disposal of certificates

Digital Certificates are used to identify individuals, using crypto concepts.

## Keys, Algorithms, and Standards

PKI uses a confluence of assymetric and symmetric algorithms, as well as hashing algorithms (using concept of 
**hybrid cryptography**)

Using:

- assymetric algorithms solves for **key exchange**
- symmetric algorithms solve for **speed of encryption/decryption on large amount of data (**session keys can 
be encrypted via symmetric alg. but exchanged via assymetric methods)
- hybrid approach solves for **confidentiality**, but does not ensure authenticity or integrity or non-repudiation
- hashing algorithms solve for **authenticity, integrity, and non-repudiation**

### Algorithms

PKI algorithms include:

- Symmetric:
  - AES (Advanced Encryption Standard)
- Assymetric
  - RSA (Key Generation)
  - Diffie-Hellman (Key Exchange)
- Hashing
  - MD5
  - RIPEMD (RACE Integrity Primitives Evaluation Message Digest)
  - SHA (Secure Hash Algorithm)

### Standards

Standards govern the construction and formatting of digital certificates.

#### **X.509 Standard**

Managed by International Telecommunication Union - Telecommunication Standardization Sector (ITU-T))

X.509 describes:

- how certificates are constructed
- what information they contain
- what their uses are
- formatting
- processes involved with issuing certificates
- other processes involved in certificate lifecycle

#### PKCS (Public Key Cryptography Standards)

Managed and developed by RSA Security

PKCS describes certificate construction

**PKCS #7** file is a digital certificate used to sign or encrypt messages (e.g. email)

**PKCS #12** file contains public and private keys, encrypted for secure storage.

## PKI Services

### Key Generation and Exchange

Key generation is the act of creating a private and public key pair, which is issued to an individual based on 
confirmed identity.

RSA is the most popular key generation algorithm.

Key exchange is a process that assists in creation and secure exchange of symmetric keys (session keys) that are 
used for that communication session only.

After creation, public and private keys are used to encrypt/decrypt session keys once they are transmitted and 
received by both parties.

#### Non-Repudiation

Someone cannot deny that they took a particular action -- their identity is positively verified.

Non-repudiation in PKI is assured via the use of public/private keys.

#### Message Integrity

Using hashing algos like SHA-512, messages can be hashed to create unique fingerprints that can be checked 
before and after transmission.

Messages can be changed due to non-malicious causes like bad transmission mediums potentially dropping bits of data.

PKI hashes the message and encrypts both the message and the hash and transmits the payload.

#### Digital Signatures

A person encrypting a message with private key can let anyone with a public key decrypt it, so that leads to 
verifying that the origin of the message is the possessor of the private key.

## Digital Certificates

Simple electronic files that follow a format (X.509, PKCS)

Can have many different extensions (.cer, .pem)

Might have multiple types serving a specific function within PKI

Certificates contain a variety of information, including:

- Public Key 
- Identity of person
- Issuing Organization
- Valid Dates
- Functions for certificate

### Certificate Registration

Lifecycle begins when a user registers to receive a certificate.

Person must provide valid information and identification to the **Certificate Authority (CA)**

CA must authenticate the user's personal information

Valid forms of identification can be:

- Driver's License
- Birth Certificate
- Passport
- Photographs
- etc.

CA makes a decision to issue or deny a certificate

### Certificate Authority (CA)

Entity that controls and issues digital certificates.

- Creating (Generating)
- Renewing
- Suspending
- Revoking

Commercial organizations such as: VeriSign, Thawte, or Entrust

Organizations sometimes have internal CAs for use within the organization

CA also manages the certificate server, that produces the certificates and generates keys

Some CAs delegate registration function to Registration Authorities (RAs) - verify user identities

When a certificate is requested, the CA generates a **Certificate Signing Request (CSR)** - information that 
will be embedded in the digital certificate (pub key, org name, common name, etc.)

#### Certificate Servers

Orgs might manage their certificates with an array of servers.

At root, there is a **root CA Server** - issues its own self-signed certificate to itself or an external org 
issues one to it.

* Root CA servers usually generate certs only for subordinate CA servers

Subordinate servers perform various functions that CA servers are charged to do

root CA is taken offline once it has done its duties to subordinate servers

![](/assets/crypt-12315.png)

If root CA is compromised, all subordinate servers are considered compromised as well.

#### Certificate Revocation Lists

Certificate Revocation List (CRL) is a list published by CA that contains all certificates issued by the CA and revoked.

Used to check validity of certificates by external parties

**Online Certificate Security Protocol (OCSP)** - used to automate certificate validation, checking the status of 
cert seamless and transparent

#### Certificate Expiration, Suspension, Revocation

Certificates can and should naturally expire

Certificates can be suspended by a CA.

* Suspended certificate can be reinstated if needed

Certificates can be revoked by a CA

* Revoked certs cannot be reinstated

#### Key Escrow

Practice of maintaining private keys, by independent third parties.

Used for In cases of a user encrypting data then leaving the company

#### Trust Models

Private CAs may not generally be trusted outside the organization where the CA is.

Trust models were introduced between organizations to take advantage of each other's certificates.

Types:

- **Hierarchical Trust** - involves trust in digital certs within org boundaries. All subordinate and 
intermediate CA servers trust each other.
- **Cross-Trust** - between two different organizations.
  - Organizations have their own CAs and issuing servers.
  - Enables two organizations' root CA servers to trust each other.
- **Web-of-Trust** - often not used in PKI
  - found in smaller groups or orgs
  - no central issuing authority
  - not suitable for large groups.

