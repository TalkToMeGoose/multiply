# Hand-wiring versus custom PCB

Updated 2026-10-17: the user has skipped the separate prototype, clarified that €60 is flexible, and expressed interest in learning PCB design with AI assistance. **Investigate the PCB route with a real delivered quote**; hand-wiring remains the fallback. Follow the [PCB learning plan](pcb-learning-plan.md). Original cost ranges below remain unquoted comparison estimates. A custom PCB helps alignment and repeatability; cap guidance, overtravel, and mechanical support still require design work.

## Practical comparison

All cost and time ranges below are estimates; the complete assumptions are in [the BOM](bom.md). Time is active work for a beginner after a working cap design, excluding unattended printing and shipping.

| Aspect | Hand-wired full matrix | One custom through-hole PCB |
| --- | --- | --- |
| Delivered whole-device budget | About €52.20–65.20 for consolidated purchases | About €75.20–107.20, including a provisional delivered PCB batch allowance |
| Extra prototype/staged-order cost | About €10–16 on the stated assumptions | Same reuse principle, plus any revised PCB batch |
| Switch support | Printed carrier positively locates and retains each body | Board locates the switches; several enclosure supports prevent board flex |
| Electrical work | Two electrical connections per switch, 18 matrix leads, insulated crossings | Four soldered legs per switch, plus matrix connector; copper traces do the routing |
| Approximate switch joints | At least 162, plus harness/interconnect joints | 324, plus connector joints; more joints, but easier repetitive work |
| Electrical assembly and checking | Roughly 6–10 hours | Roughly 2–4 hours after correct boards arrive |
| Mechanical assembly and labeling | Roughly 2–4 hours, common to both | Roughly 2–4 hours, common to both |
| Design overhead | Carrier/jig and clear row/column routing plan | Allow roughly 8–16 guided hours for first schematic, footprint checks, layout, and ordering review |
| Repair | Individual wires and switches accessible; wire fatigue possible | Clear trace paths and repeatable alignment; replacing a four-leg switch needs careful desoldering |
| Main risks | Wrong contact pairs, crossed nets, exposed intersections, wire strain, variable switch height | Wrong footprint, rotated contact pairs, wrong hole alignment, flex, and an unusable paid batch |

These are planning allowances, not guaranteed durations. Both approaches need a continuity check before USB power and a documented mapping test afterward.

## How to hand-wire economically

Use a rigid printed lower carrier with pockets for the exact switch bodies and access to their terminals. A removable retention plate holds switches against common height datums. This keeps wire joints out of the mechanical load path and lets the top guide plate align all caps.

Run row and column connections in separate insulated layers. Strip only connection points, sleeve any exposed crossing, and anchor the 18-wire harness so pulling it does not load switch terminals. Provide enough access to identify and replace a single switch. Check one complete row before wiring the next.

Cheap 6 mm switch leads are **not automatically compatible with standard 2.54 mm perfboard**: the selected supplier lists a 4.5 × 6.5 mm terminal pattern. Do not force 81 parts into a mismatched grid. Check the actual switch against the printed carrier or compatible drilled support before full assembly. A small standard pad board is still useful for connector interconnects.

## What the simplest PCB would contain

If chosen in a later budget revision, use a two-layer passive switch board with 81 through-hole switch footprints, an 18-pin matrix connection, and mounting holes. Retain the Pico and display as replaceable modules. No onboard USB connector, power regulator design, LEDs, per-key diodes, or assembly service is necessary for the agreed single-key behavior.

With 18 mm centers the switch centers span 144 mm; allowing for component edges, holes, and margins gives a board roughly 165–175 mm square. That estimate is larger than a 100 mm square promotional board. [JLCPCB's advertised starting prices](https://jlcpcb.com/) do not establish a cost for this layout or German delivery. Compare configured totals and batch minimums, including tax and transport; the €25–45 delivered batch allowance in the BOM remains unquoted.

Identical small tiles or row boards can be investigated if a real quote is substantially cheaper, but connectors, alignment, minimum order quantities, and wiring often consume the saving. Do not split the first design merely to chase an advertised PCB price.

## When to choose each

Choose hand-wiring if low cash cost matters most and a few evenings of careful repetitive work are acceptable. Choose a PCB if the full hand-wiring task is unappealing or a local/shared order produces an affordable actual quote. A PCB can be worth more than its material cost in saved frustration; it simply should be a decision based on measured final parts and a quote. It is not included in the current €54.80 plan.
