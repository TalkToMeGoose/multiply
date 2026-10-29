# Project specification

Status: planning updated 2026-10-18. Requirements include the user's decisions to skip the separate prototype, explore PCB design with AI assistance, and use disposable AA batteries inside the finished shell. Proposed implementation defaults remain subject to final-part measurements.

## Purpose and priorities

Build a small, inexpensive physical multiplication table for a nine-year-old, for exploration and parent-guided learning. Priorities, in order: simple operation; low cost; reliable electronics and durable buttons; legibility and appearance; assembly and repair; compactness.

Cost reference: **about €60 including shipping**, with flexibility for clearly justified improvements. The user wants to prevent uncritical cost growth; no new maximum is agreed. Owned/borrowed tools and labor are excluded, and disposable cells are an additional operating cost. No separate prototype expenditure is planned. Use the [PCB learning plan](pcb-learning-plan.md) for the current route and the [hand-wired baseline](budget-60.md) for the earlier estimate.

## Required behavior

| Item | Requirement |
| --- | --- |
| Keys | 81 physical tactile buttons, in a square 9 × 9 grid |
| Order | Row 1: `1×1` through `1×9`; row 9: `9×1` through `9×9`. Row is the first factor; column is the second. |
| Labels | Each cap carries only its multiplication expression, clearly legible. |
| Display | One 2.4-inch color screen above the keys, used horizontally; Elecrow DLS22024B-NT is the current module recommendation, subject to actual-part checks. Waveshare 18366 is a fallback. |
| Equation | A press shows the complete equation on one line, e.g. `6 × 7 = 42`, using the multiplication sign `×`. |
| Array | Below the equation, show first-factor rows of second-factor neutral dots: `6 × 7` gives six rows of seven. Use consistent dot size/spacing and accommodate 9 × 9. Update with the equation. |
| Number colors | Each complete even number is blue; each complete odd number is orange. Determine parity separately for both factors and the product. |
| Operators | `×` and `=` are white or light gray. |
| Replacement | The next valid keypress immediately replaces the previous equation. |
| Interface | No modes, menus, reset control, animations, sounds, scores, achievements, or exercises. Shell decoration is separate from the learning display. |
| Power | Disposable alkaline AA batteries, usable away from the wall, with a hardware switch for controller and display. No charging circuit. Three cells plus a regulator are the proposed default; see [power plan](power.md). |

## Physical requirements

- Teal enclosure with rounded corners; neutral off-white or light-gray caps. The user accepted the equation/array mockup and wants decoration made as part of the shell print. Exact artwork and print-color method remain open; stickers are not the chosen shell-decoration method.
- Gentle rear-up tilt is under discussion. A fixed 5-degree wedge base is the proposed starting point, not yet an agreed dimension. Keep PCB and top/guide plate parallel and the front edge as low as the measured internal stack permits.
- Buttons provide tactile feedback; illumination is unnecessary.
- Caps remain retained during normal use. Guides, switch support, and overtravel protection withstand repeated pressing, including at cap edges.
- Protect the display edges, support the electronics, allow screw-open repair, and provide an underside battery hatch. Isolate the retained holder and contacts from PCB pins, screws and button-load supports.
- Prefer inexpensive tactile switches and printed parts over mechanical-keyboard components.

## Proposed operating defaults

- Blank black display after power-up, until the first valid press; keep the last equation and array after release. No welcome message or timeout.
- One key at a time. If multiple keys are detected, retain the last equation and accept new input after all keys are released. No multi-key feature is required.
- Aim for a visible response within **100 ms**, including debounce. This is a build acceptance target, not measured performance.
- Black background; provisional colors blue `#3399FF`, orange `#FF9900`, neutral `#E0E0E0`. Verify on the actual screen at normal desk distance.

## Acceptance of the complete build

1. Every key position maps to the correct factors and product; the complete device covers all 81 combinations.
2. `6 × 7 = 42` shows blue/orange/blue numbers; `9 × 9 = 81` shows three orange numbers, including both digits of `81`.
3. Every equation fits one line, with no clipping, stale digits, or misplaced operators. Validate the `×` glyph in the selected font. Every array has the correct row/column count, including 1 × 9, 9 × 1 and 9 × 9, and changes together with the equation without stale dots.
4. Single presses produce one event; a held key does not repeat; successive released-key presses replace promptly.
5. Caps return freely, resist lifting, and work at centers and corners. The support does not visibly flex under normal use.
6. A child can comfortably read the screen and labels and operate the buttons.
7. Operates from disposable AAs with no USB cable. Both Pico and backlight switch off in normal battery use; cells are replaceable through the underside hatch. Check startup with partly used cells, low-voltage stop, off-state current and runtime using final parts. Programming USB must not backfeed the regulator or disposable cells.

## Development boundary

Planning is followed by one complete 9 × 9 build; the separate 3 × 3 device has been skipped at the user's request. Fit and electrical checks occur during final assembly using the same purchased hardware. Final footprints, enclosure clearances, mounting holes, and travel stops still require the purchased components and measured print tolerances. A small cap/guide fit print is recommended before printing all caps; it is not a separate electronics build.
