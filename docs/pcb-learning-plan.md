# PCB design as part of the project

Updated **2026-10-17**. The user is interested in designing the PCB with AI assistance. Treat PCB design as the preferred direction to investigate, while retaining hand-wiring as a fallback. The earlier €60 target is a reference, not a hard ceiling: any extra expense should have a clear benefit and be assessed before purchase. The separate 3 × 3 prototype remains skipped.

Follow the [build order and dependencies](build-order.md) for the complete sequence. Rough enclosure design starts with the front layout, PCB placement and enclosure geometry develop together, and the full enclosure is printed after inspecting and checking the received board. Schematic work and software planning can proceed alongside component selection and delivery.

## Proposed board

Use one simple two-layer through-hole board for the 81-switch matrix. Keep the Pico and display as purchased modules. Investigate a socket for the header-equipped Pico on the same PCB: it could replace the 18-wire matrix harness, while keeping the controller removable. The display connects with its module cable.

The Pico socket is a proposal, not a locked footprint or pin assignment. Compare its placement, connector cost, USB access, and resulting board size against a passive switch board with an 18-line connector. Do not assume the earlier 165–175 mm square switch-only outline covers the module/socket variant.

Keep the circuit focused on the agreed behavior: 81 normally-open switches in nine rows and nine columns, USB power through the Pico, one SPI color display, and one-key operation. The design uses purchased modules rather than designing a microcontroller or power supply from individual chips.

## Learn and review in small steps

1. **Draw and understand one row in KiCad.** Trace a button from its row signal to its column signal and explain what a press changes. Then repeat the understood pattern for all nine rows. This is design work within the final device, not a separate physical prototype.
2. **Verify the component footprints.** Match switch contact pairs, leg positions, hole sizes, Pico socket orientation, and module mounting dimensions to reliable drawings and the actual purchased parts. Print a 1:1 footprint check before committing to the fabricated board.
3. **Lay out the board with the enclosure.** Agree key spacing, place switches and supports, reserve room for cap travel, and check the USB plug and display cable. Confirm the controller's exposed GPIO and SPI pin assignments against its official pinout.
4. **Route and check.** Connect copper traces to match the schematic, run electrical/design-rule checks, inspect the layout, and review the exported manufacturing files. AI can generate repetition and assist with checks; the learning comes from understanding and reviewing the decisions.
5. **Get the real delivered quote.** Compare full batch cost, VAT, shipping, and quantity. Show the complete revised device budget and the difference from hand-wiring before ordering.
6. **Assemble and bring up the final board.** Solder the through-hole parts, check continuity, and verify the matrix/display progressively with the purchased final components.

## Cost discipline

- The [€54.80 hand-wired plan](budget-60.md) remains the dated comparison baseline, with estimated printing/supplies. It is not the price of the proposed PCB build.
- PCB design in free KiCad does not require placing an order. Obtain an initial quote at the proposed outline and quantity before spending substantial time on final routing; refresh it once manufacturing files are ready.
- Track the net change: add the whole PCB batch, shipping/tax, sockets and connectors; subtract only wiring/support costs actually removed. Allow for the possibility of a revised board rather than assuming the first batch is guaranteed correct.
- An increase is justified if it buys useful design experience, reliable alignment, clearer assembly, or easier repair. Discuss a material increase against the complete device budget; no new maximum has been agreed.
- The earlier €25–45 delivered PCB batch figure was an unquoted planning allowance. Replace it with a configured supplier quote, not an advertised promotional minimum or a per-board fraction of unused spares.

## Immediate next design step

Create the first-row schematic and a rough front/board-placement sketch while confirming the exact switch and display module. The user selected the 2.4-inch equation/array direction; the current purchasing recommendation is Elecrow DLS22024B-NT from BerryBase, replacing the earlier Waveshare target. Check its actual viewing angle, header/mounts and fit; use the [updated order list](order-list.md). Then coordinate the final component purchase and physical measurements. Final routing and fabrication wait for verified footprints, a working cap mechanism, and agreed PCB/enclosure interfaces. Decoration is to be part of the shell print; gentle tilt remains under discussion.
