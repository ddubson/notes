---
title: "Network Layers"
date: 2019-09-25T21:05:12-04:00
draft: false
---

Network protocols must address the following issues:

* **Flow control** - The generation of messages by the receiving system that instruct the sending system to speed up or 
slow down its transmission of data
* **Packet acknowledgment** - The transmission of a return message from the receiving system to the sending system to 
acknowledge the receipt of data
* **Error detection** - The use of codes by the sending system to verify that the data sent wasn't damaged during 
transmission
* **Error correction** - The retransmission of data that was lost or damaged during the initial transmission
* **Segmentation** - The division of long streams of data into smaller ones for more efficient transfer
* **Data encryption** - A function that uses cryptographic keys to protect data transmitted across a network
* **Data compression** - A method for reducing the size of data transmitted across a network by eliminating redundant 
information

**Open Systems Interconnections (OSI)** reference model - separation of protocols based on their functions (theoretical)

![](/img/osi-1.png)

![](/img/osi-2.png)

The **protocol data unit (PDU)** includes all the data being sent and the headers.

PDU grows as goes down the OSI stack and the final full form is sent to the receiving computer, where it is stripped 
down until the original message is left.

## Layers

### Application Layer (Layer 7)

The application layer, the top most layer on the OSI model, provides a means for users to actually access network 
resources. This is the only layer typically seen by end users, as it provides the interface that is the base for all 
of their network activities.

### Presentation Layer (Layer 6)

The Presentation layer transforms the data it receives into a format that can be read by the application layer. 
The data encoding and decoding done here depends on the application layer protocol that is sending or receiving the 
data. This layer also handles several forms of encryption and decryption used for securing data.

### Session Layer (Layer 5)

The session layer manages the dialog, or session between two computers; it establishes, manages, and terminates this 
connection among all communicating devices. The session layer is also responsible for establishing whether a connection 
is duplex or half-duplex and for gracefully closing a connection between hosts, rather than dropping it abruptly.

### Transport Layer (Layer 4)

The primary purpose of the transport layer is to provide reliable data transport services to lower layers. 
Through features including flow control, segmentation and desegmentation, and error control, the transport layer makes 
sure data gets from point to point error free. Because ensuring reliable data transportation can be extremely 
cumbersome, the OSI model devotes an entire layer to it. The transport layer provides its to both connection-oriented 
and connectionless protocols. Firewalls and proxy sewers operate at this layer.

### Network Layer (Layer 3)

The network layer is responsible for routing data between physical networks, and it is one of the most complex OSI 
layers. It is responsible for the logical addressing of network hosts (for example, through an IP address), 
and it also handles packet segmentation, protocol identification, and in some cases, error detection. 
Routers operate at this layer.

### Data Link Layer (Layer 2)

The data link layer provides a means of transporting data across a physical network. Its primary purpose is to provide 
an addressing scheme that can be used to identify physical devices and provide error-checking features to ensure data 
integrity. Bridges and switches are physical devices that operate at this layer.

### Physical Layer (Layer 1)

The Physical layer at the bottom of the OSI model is the physical medium through which network data is transferred. 
This layer defines the physical and electrical nature of all hardware used, including voltages, hubs, network adapters, 
repeaters, and cabling specifications. The physical layer establishes and terminates connections, provides a means of 
sharing communication resources, and converts signals from digital to analog and vice versa.
