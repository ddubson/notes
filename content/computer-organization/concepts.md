---
title: "Concepts"
date: 2019-08-02T13:26:16-04:00
draft: false
---

## CPU Design

* A CPU consists of the following components:
  * Clock - synchronizes internal operations of CPU with other system components
  * Control Unit (CU) - coordinates the sequencing of steps involved in executing machine instructions
  * Arithmetic Logic Unit (ALU) - performs arithmetic operations (add, sub) as well as logical operations (and, or, not)
* CPU is attached to the motherboard via pins that are connected to the data bus, control bus, and address bus.
* Memory Storage Unit is where instructions are held while a computer program is running.
  * Receives requests for data from the CPU, transfers data from RAM to CPU, and transfers data from CPU into memory
* A Bus is a group of parallel wires that transfer data from one part of the computer to another
  * A computer system usually consists of three separate buses
    * Data Bus - transfers instructions and data between CPU and RAM
    * Control Bus - uses binary signals to sync actions of all devices attached to the system bus.
    * Address Bus - holds addresses of instructions and data when the currently executing instruction transfers data between CPU and memory
  * PCI bus is an example

### Clock

* Clocks synchronize the CPU and the system bus, pulsing at a constant rate.
* Unit of time for machine instructions is a machine cycle (or clock cycle)
* Clock cycle is the time required for one complete clock pulse

![](/img/cpu-1.png)

* Duration of clock cycle is the reciprocal of clock's speed (oscillations per second)
  * e.g. clock that oscillates 1 billion times per second (1GHz) produces a cycle with duration of 1 nanosecond (1 billionth of a second)
* Instructions requiring memory access often have empty clock cycles called **wait states** - sync between CPU, memory, and system bus

### Instruction Execution Cycle

* Execution of a single machine instruction can be divided into a sequence of individual operations called **instruction execution cycle**
* Before execution, entire program is loaded into memory
* **Instruction Pointer** (EIP in x86) holds the address of the next instruction. (aka Program Counter)
* **Instruction queue** holds a group of instructions about to be executed.
* Executing a machine instruction involves three basic steps:
  * **Fetch**- control unit fetches the instruction from instruction queue and increments the instruction pointer (IP)
  * **Decode**- control unit decodes the instruction's function to determine what the instruction will do.
    * Instruction's input operands are passed to the ALU, and signals are sent to ALU indicating the instruction to be performed.
  * **Execute**- ALU executes the instruction used the named registers and internal registers as operands
    * Sends the output to named registers and/or memory.
    * ALU updates status flags providing information about the processor state.
* Two more steps are required when instructions uses a memory operand:
  * **Fetch Operand** - if instruction contains operand, the CU uses a read operation to retrieve the operand and copy it to internal registers. Internal registers are not visible to user programs.
  * **Store Output Operand** - if the output operand is in memory, the control unit uses a write operation to store the data.

Pseudocode for a machine instruction steps:

{{<highlight markdown>}}
loop
    fetch next instruction
    advance the instruction pointer (IP)
    decode the instruction
    if memory operand needed, read value from memory
    execute the instruction
    if result is memory operand, write result to memory
continue loop
{{</highlight>}}
