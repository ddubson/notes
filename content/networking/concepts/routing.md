---
title: "Routing"
date: 2019-09-25T21:14:29-04:00
draft: false
---

**Forwarding Function** - actual transfer of packets from a router's incoming links to the appropriate outgoing links

![](/img/switching-1.png)

Four components of a router are:

* **Input Ports** - performs the physical layer functions of terminating an incoming physical link to a router;
  * data link layer function needed to inter-operate with the data link layer function at the remote side of the 
  incoming link
  * performs a lookup and forwarding function so that a packet forwarded into the switching fabric of the router 
  emerges at the appropriate output port.
  * Control packets are forwarded from an input port to the routing processor.
* **Switching Fabric** - connects the router's input ports to its output ports
  * completely contained within the router -- a network inside of a network router
* **Output Links** - stores the packets that have been forwarded to it through the switching fabric and then transmits 
the packets on the outgoing link.
  * performs the reverse data link layer and physical layer functionality of the input port.
* **Routing Processor** - executes the routing protocols, maintains the routing information and forwarding tables, and 
performs network management functions within the router.

## Input Ports

![](/img/switching-2.png)

The input port's line termination function and data link processing implement the physical and data link layers 
associated with an individual input link to the router

The lookup/forwarding module in the input port is central to the forwarding function of the router.

* This is where the router determines the output port to which an arriving packet will be forwarded via the switching 
fabric.
* The choice of the output port is made using the information contained in the forwarding table.
* A shadow copy of the forwarding table is typically stored at each input port and updated as needed, by the routing 
processor.

With local copies of the forwarding table, the forwarding decision can be made locally, at each input port, without 
invoking the centralized routing processor.

The decentralization forwarding avoids creating a bottleneck at a single point within the router.

It is desirable for the input port processing to be able to proceed at line speed - look up to be performed in less 
than the amount of time needed to receive a packet at the input port.

Technique to store the forwarding info a tree data structure

**Content Addressable Memories (CAMs)** - allows a 32-bit IP address to be presented to the CAM, which returns the 
content of the forwarding table entry for that address in constant time.

## Switching Fabric

Switching can be done in a number of ways:

* **Switching via Memory** - switching between input and output ports being done under direct control of the CPU 
(routing processor).
* **Switching via a bus** - input ports transfer a packet directly to the output port over a shared bus, without 
intervention by the routing processor.
* **Switching via an interconnection network** - crossbar switching in an interconnection network consisting of 2N 
buses that connect N input ports to N output ports.

## Output Ports

* Takes the packets that have been stored in the output port's memory and transmits them over the outgoing link.

Queuing and buffer management functionality is needed when the switch fabric delivers the packets to the output port 
at a rate that exceeds the output link rate.

**Where Does Queuing Occur?**

* Queuing can occur at both the input and output ports.
* When packets are dropped at the router, it is here where they are actually dropped (at the queues)
* Actual location of packet loss will depend on the traffic load, the relative speed of the S-Fabric, and the line 
speed.

Suppose that the input line speeds and output line speed are identical, and that there are N input ports and N output 
ports.

**Switching Fabric Speed** - the rate at which the S-fabric can move packets from input ports to output ports.

* If the S-fabric speed is at least n times as fast as the input line speed, then no queuing can occur at the input 
ports.

In the worst case, packets arriving at each of the n input ports will be destined to the same output port. 
In this case, in the time it takes to receive (or send) a single packet, N packets will arrive at this output port.

![](/img/switching-3.png)

![](/img/switching-4.png)

A consequence of output port queuing is that a packet scheduler at the output port must choose one packet among those 
queued for transmission

* might be done on a **FCFS basis scheduling** or more complex **Weighted Fair Queuing (WFQ)**
* If there's not enough memory to buffer an incoming packet, a decision must be made to either drop the arriving packet 
(drop-tail) or remove 1 or more already-queued packets to make room for the newly arrived packet.

Sometimes it is advantageous  to drop a packet before the buffer is full in order to provide a congestion signal to the 
sender.

**Random Early Detection (RED)** - active queue management algorithm - a weighted average is maintained for the length
of the output queue.

* if the queue length is less than a minimum threshold, `min(th)`, when a packet arrives, the packet is admitted to the 
queue.
* if the queue is full or the average queue length is greater than a max threshold (`max(th)`) when a packet arrives, 
the packet is marked or dropped.
* if the packet arrives to find an average queue length in the interval (`min(th)`, `max(th)`, the packet is marked or 
dropped with a probability that is typically some function of the average queue length, `min(th)`, and `max(th)`.
* If the switch fabric is not fast enough, queuing can take place at the input ports.
  * Consider a crossbar switching fabric and suppose
    * all links are identical
    * that one packet can be transferred from any one input port to a given output port in the same amount of time it 
    takes for a packet to be received on an input link
    * packets are moved from a given input queue to their desired output queue in an FCFS manner
  * Multiple packets can be transferred in parallel, as long as their output ports are different. If 2 packets at the 
  front of 2 input queues are destined for the same output queue, then one of the packets will be blocked and must wait 
  at the input queue.

**Head-Of-The-Line (HOL) blocking** - input queue switch - a queued packet in an input queue must wait for transfer 
through the fabric because it is blocked by another packet at the head of the line.

Due to HOL blocking, the input queue will grow to unbound length (increased packet loss)
