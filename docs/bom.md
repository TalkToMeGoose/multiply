# Provisional bill of materials

**Historical estimate:** this document and its CSV retain the 2026-10-08 plan. On 2026-10-15 the user decided to skip the separate prototype and target about €60 including shipping. Use the [current €54.80 spending plan](budget-60.md), with 90 switches and published shipping rates, for the next purchase discussion. Prototype orders below are no longer the recommended process.

Checked **2026-10-08**, for delivery to Germany. All amounts are EUR. **V** means the public product page displayed that price, including German VAT and excluding shipping. **E** means an engineering budget allowance, not a supplier quote. Availability reflects the page read, not reserved stock or a completed checkout.

## Recommended full hand-wired build

| Item / source | Purchase quantity | Unit / allowance | Line total | Evidence and assumptions |
| --- | ---: | ---: | ---: | --- |
| [Pico H, BerryBase RPI-PICO-H](https://www.berrybase.de/raspberry-pi-pico-rp2040-mikrocontroller-board-mit-headern) | 1 | €5.50 | €5.50 | V; headers fitted; page showed available |
| [Waveshare 17344 2-inch IPS, Welectron WS3-017344](https://www.welectron.com/Waveshare-17344-2inch-LCD-Module) | 1 | €10.90 | €10.90 | V; page showed 10+ in stock. Manufacturer lists an 8-wire cable in the package; confirm the supplied cable ends. |
| [6 × 6 × 4.3 mm switches, BerryBase KHT66PV43](https://www.berrybase.de/kurzhubtaster-vertikale-printmontage-6x6mm-h-4-3mm) | 100 | €0.13 | €13.00 | V unit price; 81 installed, 19 spare; page showed 100+ available. No assumed volume discount. |
| [Micro-USB data cable, BerryBase RPI-MUSB-1](https://www.berrybase.de/offizielles-raspberry-pi-micro-usb-kabel-rot-1-0m) | 1 | €1.80 | €1.80 | V; omit if a suitable data cable is already owned |
| Insulated wire, connector/jumper leads, small pad board | 1 allowance | €3–5 | €3–5 | E; printed carrier holds switches. Pad board is for interconnects, not a forced fit for switch legs. |
| Solder and insulating sleeve/heat-shrink | 1 allowance | €1–2 | €1–2 | E; allocated consumables. Buying full packs can cost more. |
| Teal and off-white printing material | roughly 0.25–0.40 kg combined | €6–10 | €6–10 | E; material used, modest allowance for test prints. Not two full spools or paid printing service. |
| Screws, nuts/spacers and simple feet | 1 allowance | €2–3 | €2–3 | E; sizes follow the actual module and enclosure |
| Adhesive labels and clear protective film | 1 allowance | €1–2 | €1–2 | E; shared sheets/film or existing supplies; ink/toner allocation included |
| Shipping from BerryBase and Welectron | 2 parcels, consolidated orders | €8–12 total | €8–12 | E; check baskets and delivery address. No assumed free-shipping threshold. |

The same line items are in [the editable CSV](../bom/provisional.csv). An estimate there is a total allowance for the stated lot, not a verified purchasable SKU.

| Budget calculation | Low | High |
| --- | ---: | ---: |
| Four verified-price electronics lines | €31.20 | €31.20 |
| Wire/interconnect allowance | €3.00 | €5.00 |
| Other consumables, print material, hardware, labels | €10.00 | €17.00 |
| **Full hand-wired materials** | **€44.20** | **€53.20** |
| Estimated shipping | €8.00 | €12.00 |
| **Consolidated delivered total** | **€52.20** | **€65.20** |

This makes the upper end of the target plausible. **€35 is not a supported all-new delivered budget** with these sources. Reserve some margin for reprints rather than spending the whole €65 on electronics.

## Alternatives and price traps

- [Pico 2 with headers, RPI-PICO2-H](https://www.berrybase.de/raspberry-pi-pico-2-rp2350-mikrocontroller-board-mit-headern): **V €6.50**, available on the page; adds €1.00.
- [Waveshare 18366 2.4-inch module](https://www.welectron.com/Waveshare-18366-24inch-LCD-Module): **V €12.90**, page showed 10+ in stock; adds €2.00. Uses an ILI9341 driver, not ST7789.
- [Reichelt TASTER 3301](https://www.reichelt.de/de/de/shop/produkt/kurzhubtaster_6x6mm_hoehe_4_3mm_12v_vertikal-27892): **V €0.20 each** with limited quantity shown; 100 would cost €20.00, adding €7.00 before any extra parcel. Useful fallback, not the budget baseline.
- [BerryBase 5.0 mm variant KHT66PV5](https://www.berrybase.de/kurzhubtaster-vertikale-printmontage-6x6mm-h-5-0mm): **V €0.09 listed, but the actual product page said unavailable**, despite category results showing stock. Excluded from the baseline. A height change also requires a different pusher/carrier setup.
- Generic lots advertised as “100 switches” may be cheaper, but no cheaper lot with confirmed matching dimensions and suitable documentation is selected. Mixed-height assortments are not 100 interchangeable keys.
- Ordering 90 of the recommended switch saves €1.30 and leaves nine spares. Keeping 100 is reasonable while the mechanism is untested.

## Prototype spending and reuse

Order **10 matching switches**, one Pico H, one actual chosen display, and a data cable. Those four lines total **€19.50** with the default display. Allow **E €5.50–10.00** for simple wiring, insulation, a small printed mechanism, fasteners, and labels: prototype materials **€25.00–29.50**, plus **E €8–12** postage = **€33.00–41.50** delivered.

The controller, display, cable, and surviving switches transfer to the full build. Do not add an entire prototype bill to the full-device bill. However, discarded prototype prints/labels/short wires may consume an additional **E €2–4**, and later parts orders another **E €8–12** postage. A two-stage project therefore budgets approximately **€62.20–81.20 delivered** on these assumptions. Local shared orders, borrowed sample switches, and existing cable/filament can reduce this without committing to an untested full design.

## PCB build allowance

Keep the €31.20 core electronics and €10–17 common consumables/printed parts. Replace the €3–5 hand-wiring allowance with **E €1–2** for short harnesses, then add **E €25–45 for the whole bare-PCB order delivered to Germany**, including intended VAT/transport allowance, plus €8–12 domestic component shipping. Result: **approximately €75.20–107.20 delivered** before prototype waste or a second PCB revision.

The PCB figure is **not a quote**. It assumes a simple roughly 165–175 mm square, two-layer board and a small manufacturing batch, all paid by this one build. Obtain a configured quote after pitch, footprint, mounting, order quantity, shipping, and tax handling are known. Do not divide the batch invoice by spare boards that nobody is buying. [JLCPCB](https://jlcpcb.com/) is one possible quotation source; its advertised starting price is not a price for this board. See [the comparison](build-options.md).

## Budget boundaries to confirm

The main estimate assumes a friend's printer and shared filament/sheets, charged at material used. It does not establish the University of Kassel's access rules or fees. Buying two new filament spools, label/film packs, full wire/solder packs, or paid printer time can materially increase cash outlay. A working USB source, soldering iron, basic hand tools, continuity meter, and caliper are assumed owned or borrowed. If not, list their actual cost separately before ordering. No adapter, battery, diodes, PCB, or keyboard switches are hidden in the base total.
