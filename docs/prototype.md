# Simplest practical 3 × 3 prototype

**Superseded 2026-10-15:** the user has decided to skip the separate 3 × 3 device. No prototype order or enclosure is planned. The original build sequence below is retained for reference; apply its useful checks during the final 9 × 9 assembly. Follow the [current budget and build route](budget-60.md).

## Parts and scope

- One Pico H with headers and one **actual chosen final display**; default Waveshare 17344, 2-inch IPS.
- Ten identical KHT66PV43 switches: nine installed, one spare.
- Insulated leads, a small interconnect pad board if needed, USB data cable, and a borrowed continuity meter/caliper.
- A rigid printed switch carrier, top guide plate, nine simple retained off-white caps, and a minimal screw-open base supporting the Pico and display.
- Paper/adhesive labels `1×1` through `3×3`, protected with clear film on at least a few caps.

Use the 18 mm pitch proposed for the full board. The prototype has three row and three column connections; using a matrix now validates the topology that will scale. Direct wiring of nine independent switches would avoid matrix code only temporarily.

The nominal key-face span is `2 × 18 + 15 = 51 mm`. Allow roughly **75–85 × 115–135 × 22–28 mm** overall for display, wiring, and headers; measure actual connector clearance first. Do not optimize outer size before fit and feel work.

## Build sequence

1. **Measure and check one switch.** Record body, total actuator height, leg positions, internally connected terminal pairs, click movement, and return behavior. Check multiple samples for variation. Compare with the supplier drawing/listing.
2. **Validate the display separately.** Connect at 3.3 V following the exact module schematic and eventual wiring document. Verify backlight control, landscape orientation, color order, glyphs, and one-line rendering before adding switches. The Pico headers and included display lead should minimize soldering; confirm cable ends.
3. **Print one representative key mechanism first.** Test a guided cap, captive flange, rigid switch support, and an adjustable/shimmed stop. Check center and corner presses. Change dimensions until the cap releases freely without a permanently pressed switch.
4. **Build the nine-key carrier and matrix.** Keep the same cap geometry. Hand-solder only the needed electrical contacts, insulate crossings, and strain-relieve the harness. With power disconnected, check for shorts and each intended row/column closure.
5. **Load the simple application.** Scan and debounce, translate row/column to factors, update the five equation tokens, and keep the last equation after release. No development controls should remain exposed in the child's interface.
6. **Try it at a desk.** Check viewing distance, finger access, labels, force, cap friction, and cable placement with the intended user before building the larger board.

The 3 × 3 matrix naturally covers only factors 1–3. Test `6 × 7 = 42` and `9 × 9 = 81` through temporary developer rendering fixtures or a desktop test harness, removed from the delivered program. They are validation data, not extra device modes.

## Record these results

| Check | Pass condition |
| --- | --- |
| Mapping | Each of the nine labels gives exactly its matching equation; test all nine and both factor orders. |
| Debounce | Try at least 20 normal presses on each key: no duplicate or missed display changes. Include rapid alternating presses. |
| Holding/release | A held key does not repeat; releasing it preserves the equation; the next distinct single press replaces it. |
| Parity | `1 × 3 = 3`: all orange. `2 × 3 = 6`: blue/orange/blue. `2 × 2 = 4`: all blue. |
| Two-digit fixtures | `6 × 7 = 42` and `9 × 9 = 81` color the entire product correctly; switching from two-digit to one-digit results leaves no stale glyph. |
| Layout | All 81 factor/product combinations fit within the 320-pixel line when exercised in development. Operators remain neutral. |
| Response | Visible changes aim to occur within 100 ms. Slow-motion video can give a rough physical-press-to-display measurement; report measured or estimated status. |
| Multiple keys | Hold two keys and three rectangle-corner keys: no phantom equation. The device retains its last display and resumes after all release. |
| Mechanics | Repeated center/corner presses return freely; no rocking that misses actuation, cap lifting, rubbing, permanent actuation, or visibly flexing support. Try a few hundred presses on a representative cap as a screening check, not a lifetime claim. |
| Normal handling | Pick up and turn over the closed prototype: caps and electronics stay retained. Gentle cable movement does not reset the display or pull the Pico loose. |
| Labels/reading | Child can read the actual screen and labels at the desk; film edges stay clear of guides and survive rubbing/wiping trials. |
| Power | Record USB current if a meter is available and display 3.3 V supply stability; no intermittent resets. |

Write measurements, photos if useful, actual purchased SKUs, software versions, and pass/fail notes here when the prototype exists. Currently **none of these bench checks has been performed**.

## Gate for the full board

Proceed when the real screen is comfortable to read, nine caps work consistently, the matrix passes the checks, and the remaining spending is acceptable. Then select hand-wiring or a quoted PCB, lock pitch and support heights, and generate the 81-key files. If the cap mechanism is unreliable, solve that first; a larger PCB will not make a binding cap work.
