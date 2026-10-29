# Decisions before ordering

Updated **2026-10-18**. The separate 3 × 3 prototype is skipped. The user is interested in PCB design with AI assistance and has clarified that about €60 is a flexible cost reference. Disposable AAs are now the chosen power source, superseding the rechargeable proposal. Extra spending should have an explicit benefit; no new maximum or purchase is agreed. See the [PCB learning plan](pcb-learning-plan.md).

| ID | Decision | Suggested default | Alternative / consequence |
| --- | --- | --- | --- |
| D1 | Controller | **Pico H, €5.50**, headers already fitted | Pico 2 with headers, €6.50, gives more memory for €1 extra. Either is adequate; the original avoids needing the newer chip. |
| D2 | Display for the complete board | **2.4-inch rectangular color display with equation and neutral dot array**, accepted by the user. New module recommendation: Elecrow DLS22024B-NT (Ohne Touch), €7.50 at BerryBase. | Same active area/resolution/controller as the earlier Waveshare target, with a different 77.18 × 42.72 mm board and connector layout. Add the €1.80 jumper cable and consolidate into one shipment; see [order list](order-list.md). Verify actual viewing angle, font, maximum 9 × 9 array and mounting dimensions. The 2.25-inch bar mockup was considered but not selected. |
| D3 | Spending and full-board assembly approach | **Skip the separate prototype** (user decision). Investigate designing one PCB with AI assistance as the preferred direction. | About €60 is a guide, not a hard limit. Get a delivered PCB quote and explain the net cost increase; hand-wiring remains the fallback. |
| D4 | Switch/cap feel and grid spacing | **90 identical 6 × 6 × 4.3 mm KHT66PV43 switches**, guided 15 mm caps at an initial 18 mm pitch | 81 installed, nine spare. Measure a final switch and check one cap/guide fit before printing the whole set. Stock “6 mm” dimensions alone do not guarantee cap compatibility. |
| D5 | Printing access and label method | **Shared teal/off-white filament**, black adhesive labels under clear film, single-color printing per part | Confirm printer bed/nozzle, how material/access is charged, and availability of shared sheets/film. Paint-filled or two-color labels are alternatives if a small print sample proves preferable. Two full spools or paid access can exceed the allowance. |
| D6 | Shell decoration | **Decoration made as part of the shell printing**, per user choice | The space-themed mockup establishes a direction, not final artwork. Decide relief/inlay geometry, print orientation and available color-change method before slicing; do not assume automatic multicolor printing. |
| D7 | Case tilt | **Proposed: fixed 5-degree rear-up wedge**, pending agreement and a simple desk-height/reach check | A 230 mm top length adds about 20 mm rear elevation. The existing 26 mm thickness sketch would become roughly 26 mm front / 46 mm rear, before detailed stack design. Keep the key plate and PCB parallel. |
| D8 | Power and on/off | **User chose disposable AAs.** Propose three alkaline AAs, BH-331-3A holder, POL4941 5 V regulator and NIN-S22L rear slide switch. | Holder/regulator/switch subtotal €7.10; cells, protection/isolation and wiring remain unquoted. Replace cells via an underside hatch; no charger or charging socket. Review protection, low-voltage stop, startup and programming-USB isolation before PCB order. See [power plan](power.md). |

Current process: [PCB learning plan](pcb-learning-plan.md). Earlier prices and assumptions: [hand-wired baseline](budget-60.md). Mechanism and size assumptions: [architecture](architecture.md). Coordinate component purchases and manufacturing so actual footprint checks can happen before PCB fabrication; no separate nine-key device is planned.

## Recorded assumptions

| Assumption | Current status / revisit trigger |
| --- | --- |
| USB source, soldering iron and basic tools can be owned or borrowed | Brief confirms the iron only; check the cable, continuity meter, and caliper before ordering. |
| One key at a time is sufficient | Stated in brief. Revisit only if ordinary child use produces frustrating overlaps. |
| No per-key diodes or GPIO expanders needed | Based on the single-key requirement and Pico's available GPIO; verify scanning and multi-key rejection during assembly. |
| Boot blank, retain last equation, reject multi-key input until release | Proposed simple behavior; no extra interface elements. |
| Row is first factor; column is second | Fixed planning convention; use consistently for labels, wiring, and firmware. |
| Cheapest switches can be used at logic-level contact currents | Plausible for normally-open tactile contacts, but neither minimum contact current nor service life is verified for KHT66PV43. Validate real samples; prefer a documented replacement if intermittent. |
| Printed cap return can rely on switch spring | Test guide friction, return force, tolerances, and hard-press stops with actual samples. |
| Final form can fit a single MK4 bed | Initial calculated envelope fits when rotated; confirm final CAD and slicer footprint, including brim. |

## Agreed requirements

Keep the 9 × 9 table, one-line equations with a matching dot array below, blue even numbers, orange odd numbers, neutral operators/dots, disposable AA battery power, teal body, and neutral caps. The larger-screen decorated mockup is accepted, with the shell decoration printed into the part. Tilt is still a proposal. Skip the separate prototype. Final CAD/firmware implementation and component ordering have not begun.
