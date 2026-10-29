# One complete build for about €60

**Comparison baseline, not the current PCB budget:** on 2026-10-17 the user clarified that €60 is flexible and expressed interest in PCB design with AI assistance. Retain the dated estimate below for comparison; follow the [PCB learning plan](pcb-learning-plan.md) before committing to manufacturing costs.

Updated **2026-10-15**. The user has decided to skip the separate 3 × 3 prototype. The working budget is now **about €60 including German delivery**, with owned/borrowed tools and a USB power source. This plan keeps all 81 keys, the color display, and the original interface.

## Recommended purchase plan

Make one component order from each of two suppliers, with no later prototype-to-final order. The hand-wired matrix and a simple printed enclosure are the proposed budget route; no custom PCB is included.

| Item | Planned spend | Evidence |
| --- | ---: | --- |
| Pico H with headers | €5.50 | Verified listing: [BerryBase RPI-PICO-H](https://www.berrybase.de/raspberry-pi-pico-rp2040-mikrocontroller-board-mit-headern); available on page |
| 2-inch IPS color display | €10.90 | Verified listing: [Welectron Waveshare 17344](https://www.welectron.com/Waveshare-17344-2inch-LCD-Module); 10+ shown available |
| 90 identical 6 × 6 × 4.3 mm switches | €11.70 | 90 × verified €0.13: [BerryBase KHT66PV43](https://www.berrybase.de/kurzhubtaster-vertikale-printmontage-6x6mm-h-4-3mm); 81 installed and nine spare |
| USB data cable | €1.80 | Verified listing: [BerryBase RPI-MUSB-1](https://www.berrybase.de/offizielles-raspberry-pi-micro-usb-kabel-rot-1-0m); remove if already owned |
| Wire, leads and a small interconnect pad board if needed | €4.00 | Estimate / spending target; select these within the same component orders |
| Solder and insulation used | €1.00 | Estimate; use owned/borrowed supplies or allocated shared packs |
| Printed enclosure, carrier, and caps | €7.00 | Estimate; shared filament charged by material used, including a small fit check |
| Screws/spacers/feet | €2.00 | Estimate; simple fastening, no insert assortment required |
| Labels and clear protective film/tape | €1.00 | Estimate; shared sheet/film and ordinary black printing |
| German shipping: BerryBase + Welectron | €9.90 | Published standard rates: [BerryBase €4.95](https://www.berrybase.de/versand-und-zahlungsbedingungen) + [Welectron €4.95](https://www.welectron.com/Zahlung-und-Versand); final checkout still controls |
| **Planned total** | **€54.80** | Mix of verified listings and explicitly estimated supplies |
| **Remaining below €60** | **€5.20** | Reserve for print mass or minor supplies; not a required purchase |

The electronics/cable subtotal is €29.90, the remaining materials allowance €15.00, and published shipping €9.90. Prices include VAT where the product pages state it. This is a feasible spending plan, **not a guaranteed completed basket or manufacturing quote**. Do not place an order on the assumption that the unselected supply allowances are fixed prices.

## Where the savings come from

1. **One final device, with consolidated orders.** Avoid a separate small enclosure and repeated component shipping. The earlier prototype's Pico, display, cable and switches would have transferred to the final device, so skipping it does not save its entire advertised bill.
2. **Hand-wire the matrix.** Avoid a custom board batch and its transport. Plan several evenings of wiring and continuity checks; the trade-off is labor.
3. **Buy 90 switches rather than 100.** This saves €1.30 and still leaves nine spares. Buying exactly 81 saves only another €1.17 and leaves none, so it is less attractive.
4. **Use the friend's existing filament.** Keep teal and neutral caps if those colors are available; otherwise choosing an existing close color is cheaper than buying full spools. The €7 is for material used, not whole spools or a paid printing service.
5. **Keep the case and labels simple.** Use guided, retained caps and a rigid switch carrier, with ordinary screws and black labels protected by clear film/tape. Avoid multicolor-printing equipment, decorative parts, and purchased keyboard caps.
6. **Reuse the USB data cable and supplies where available.** An owned cable reduces this plan to €53.00. Shared postage with a friend's existing order can save one parcel charge, but no such saving is assumed in €54.80.

Keep the 2-inch screen. The budget does not require reducing readability. A Pico without headers would save little and add soldering work. A currently listed €0.09 5 mm switch remains unavailable on its product page, so it is not used in the budget.

## Build checks within the final assembly

There is no separate nine-key device to build or buy. After the final parts arrive, measure a switch and the display/connector before generating the final housing. Print one cap and a small guide section before printing all 81; if it fits, that cap becomes part of the final set. This uses the purchased final hardware and a few grams of filament rather than a second electronics build.

Check the final display on the bench and wire/check rows progressively as part of assembling the complete device. Apply the mapping, parity, debounce, multi-key, cap-return, and reading checks from the old [prototype checklist](prototype.md) to the finished board. These checks are not an extra device or purchasing phase.

## Conditions for staying below €60

- Printer access and suitable shared filament are available at roughly the allowance; no full spools are required.
- A suitable USB power source, tools, and a continuity meter can be owned or borrowed.
- Wire, screws and labeling supplies fit the allowance or can be shared without another parcel.
- The final baskets plus actual printing/supplies stay within €60. Keep the €5.20 reserve instead of adding extras.

If printer fees or two full spools must be purchased, this budget is not established. Resolve that expense before ordering electronics; changing to a much smaller screen will not automatically cover it.
