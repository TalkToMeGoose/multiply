# Multiply!

A simple, AA-battery-powered multiplication board for a child: 81 tactile keys and one color display showing the equation and a matching dot array.

**Status: planning updated 18 October 2026.** The user has skipped the separate 3 × 3 prototype, is interested in designing a PCB with AI assistance, and has chosen disposable AA batteries. About €60 is a cost reference, not a hard ceiling; extra spending should have an explicit benefit and be checked against a real quote. Component choices and dimensions remain provisional.

## Recommended starting point

- Raspberry Pi Pico H with headers, a 2.4-inch SPI display (current recommendation: Elecrow DLS22024B-NT from BerryBase), and 90 identical 6 × 6 × 4.3 mm through-hole switches: 81 fitted, nine spare. The user accepted the equation/array screen direction; actual viewing angle and fit still need checking. The [current order list](docs/order-list.md) consolidates the electronics into one shipment.
- Investigate one through-hole PCB for the 9 × 9 switch matrix, with individually guided and retained caps. Hand-wiring remains a fallback.
- KiCad for the schematic and PCB, CircuitPython for firmware, OpenSCAD for mechanics, and Python/SVG for labels.
- Printed black labels under clear film on off-white caps. Teal enclosure with rounded corners and decoration made as part of the shell print. A rear power switch and underside battery hatch; no extra learning controls. A gentle 5-degree rear-up tilt is proposed, not yet agreed.
- Disposable alkaline AAs in an internal holder with a voltage regulator; see the [power plan](docs/power.md). Three cells are the proposed default. Settle protection, supply isolation, startup and holder placement before ordering the PCB.

Follow the [build order and dependencies](docs/build-order.md) and [PCB learning plan](docs/pcb-learning-plan.md). Design PCB placement and enclosure geometry together; final enclosure printing follows checks on the received board. The earlier [hand-wired spending plan](docs/budget-60.md) totals **€54.80** on its dated assumptions and remains a cost comparison, not a PCB-build quote. Shared filament, owned/borrowed tools remain assumptions; the historical USB-powered budget does not cover the current AA power system.

## Planning documents

| Document | Purpose |
| --- | --- |
| [Specification](docs/specification.md) | Required behavior, priorities, and acceptance criteria |
| [Current order list](docs/order-list.md) | Exact component quantities, supplier links, first-order cost and items to defer; checked 18 October |
| [AA battery power](docs/power.md) | Holder/regulator/switch candidates, replacement hatch, cost and checks before PCB fabrication |
| [Build order](docs/build-order.md) | Dependencies, parallel work, purchases, and enclosure/PCB coordination |
| [PCB learning plan](docs/pcb-learning-plan.md) | Current direction, learning steps, footprint checks, and quotation process |
| [Hand-wired cost baseline](docs/budget-60.md) | Earlier €54.80 comparison with dated prices and supply estimates |
| [Architecture](docs/architecture.md) | Component shortlist, matrix, software, cap mechanism, and size |
| [Original provisional BOM](docs/bom.md) | 8 October estimate retained for comparison; current plan linked above |
| [Original BOM data](bom/provisional.csv) | 8 October snapshot with 100 switches and estimated shipping |
| [Build comparison](docs/build-options.md) | Cost, soldering, effort, and repair trade-offs |
| [Earlier 3 × 3 plan](docs/prototype.md) | Superseded build plan; checks reusable for the final device |
| [Decisions](docs/decisions.md) | Accepted choices, remaining decisions and suggested defaults |

## Folder structure

```text
docs/              Requirements, planning, decisions, and later build notes
bom/               Purchasing data and later actual costs
hardware/          Wiring and later KiCad schematics/PCB sources
mechanical/        Later OpenSCAD sources and approved STL exports
firmware/          Later CircuitPython source and dependency versions
labels/            Later SVG templates and print instructions
tools/             Later label-generation and validation utilities
```

The project is hosted at [TalkToMeGoose/multiply](https://github.com/TalkToMeGoose/multiply), with development on `main`. Source documents are UTF-8; mechanical dimensions use millimeters and prices use EUR. When implementation begins, record the exact board, display revision, software versions, and measured switch dimensions alongside the files.
