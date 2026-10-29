# Current component order list

Checked **2026-10-18**, for the accepted 2.4-inch equation/array design with printed shell decoration. Revised after finding a suitable Elecrow module at BerryBase: consolidate the electronics into one order. The 5-degree wedge is the current mechanical concept; no PCB manufacturing files or final shell geometry exist. This is a purchase recommendation, not a placed order or completed checkout.

**Power revision, 2026-10-18:** the user chose disposable AAs, superseding the LiPo/USB-C charging proposal. The €34.15 base list needs the AA power parts below. Holder/regulator/switch add €7.10; cells, protection/isolation and wiring are still unquoted. See the [power plan](power.md).

## Base electronics

| Supplier | Qty | Part | Unit price | Line total | Purpose |
| --- | ---: | --- | ---: | ---: | --- |
| BerryBase | 1 | [RPI-PICO-H: Pico H, RP2040, headers fitted](https://www.berrybase.de/raspberry-pi-pico-rp2040-mikrocontroller-board-mit-headern) | €5.50 | €5.50 | Controller; no separate programmer or pin-header set needed. |
| BerryBase | 90 | [KHT66PV43: normally-open through-hole tactile switch, 6 × 6 mm, 4.3 mm high](https://www.berrybase.de/kurzhubtaster-vertikale-printmontage-6x6mm-h-4-3mm) | €0.13 | €11.70 | 81 installed, nine spare. Use this exact height/variant. |
| BerryBase | 2 | [FEMH-1X40P: straight female socket strip, 1 × 40, 2.54 mm pitch](https://www.berrybase.de/buchsenleiste-1x-40-polig-rm-2-54-gerade) | €0.35 | €0.70 | Trim one 20-contact socket from each strip for the removable Pico. Do not expect two intact 20-contact sockets from one strip; ordinary female strips lose a contact when cut. |
| BerryBase | 1 | [PINH-1X20P: straight male header, 1 × 20, 2.54 mm pitch](https://www.berrybase.de/stiftleiste-1x-20-polig-rm-2-54-gerade) | €0.20 | €0.20 | Cut a section for the display-cable connection on the custom PCB; verify module header orientation and final footprint before fabrication. |
| BerryBase | 1 if needed | [RPI-MUSB-1: 1 m micro-USB data cable](https://www.berrybase.de/offizielles-raspberry-pi-micro-usb-kabel-rot-1-0m) | €1.80 | €1.80 | Power and programming. Reuse an owned data-capable cable if available. |
| BerryBase | 1 | [Elecrow DLS22024B-NT: 2.4-inch color SPI LCD module, ILI9341, **Ohne Touch**](https://www.berrybase.de/elecrow-2-4-zoll-tft-lcd-modul-320x240-pixel-spi-ili9341-tf-slot-microsd-arduino-stm32-3-3-5v) | €7.50 | €7.50 | New recommended module. 320 × 240 pixels and 48.96 × 36.72 mm landscape active area match the mockup. Board is 77.18 × 42.72 mm, with a different header/mounting arrangement from Waveshare. Listing includes the module only. |
| BerryBase | 1 | [DUPK-40-FF-20: 40-way separable female–female jumper cable, **0.20 m**](https://www.berrybase.de/40pin-jumper-dupont-kabel-female-female-trennbar) | €1.80 | €1.80 | Use eight conductors for the display; keep the rest as spares. Unlike the earlier Waveshare package, the Elecrow listing does not include a cable. |

Product prices include VAT as listed. At checking, the switch page in the browser showed 100+ immediately available at €0.13; a stale search/category result showed a smaller quantity. Use the product page/current checkout, not the stale category count. The Elecrow no-touch display listing showed two available; the 20 cm jumper cable was in stock. Stock is not reserved.

## Earlier base-electronics cost

| Calculation | Amount |
| --- | ---: |
| BerryBase items, including optional USB cable and display jumper cable | €29.20 |
| BerryBase published German DHL shipping | €4.95 |
| **Base-electronics total, excluding AA power parts** | **€34.15** |
| **If the USB data cable is reused** | **€32.35** |

Shipping evidence: [BerryBase](https://www.berrybase.de/versand-und-zahlungsbedingungen). Assumes delivery within Germany, ordinary parcel service, no discounts or payment fees. Final checkout controls. These totals exclude the custom PCB, printing, fasteners, labels and tools; they are not the finished-device cost. This is €8.55 less than the earlier two-supplier €42.70 list, after adding the required jumper cable.

The [Waveshare 18366](https://www.welectron.com/Waveshare-18366-24inch-LCD-Module) remains a fallback at the earlier checked €12.90 plus separate shipping, with its cable included. Neither module's exact viewing angle has been physically checked. Do not transfer mounting-hole coordinates, pin order, supply/backlight details or connector footprints between them. Elecrow specifies 3.3–5 V supply and 3.3 V signal levels; use 3.3 V GPIO and verify regulator/backlight requirements with the actual part and schematic. MISO, SD-card and touch connections are unnecessary for this device.

## Add for disposable AA power

| Qty | Candidate | Listed price |
| ---: | --- | ---: |
| 1 | [BH-331-3A: open three-AA holder with 150 mm leads](https://www.berrybase.de/batteriehalter-fuer-3x-mignon-aa-r6-zellen-mit-150mm-anschlusskabel) | €0.85 |
| 1 | [POL4941: Pololu U3V16F5 5 V boost regulator](https://www.berrybase.de/pololu-u3v16f5-5v-step-up-spannungsregler) | €5.90 |
| 1 | [NIN-S22L: screw-mounted DPDT latching slide switch](https://www.berrybase.de/schiebeschalter-printmontage-on-on-2-stellig-35x12x8mm-gerade) | €0.35 |
| 3 | 1.5 V alkaline AA cells | Unquoted; can buy locally |
| 1 set | Insulated wiring, protection/isolation components and any connectors; exact circuit to finalize | Unquoted |

Holder/regulator/switch subtotal **€7.10**; with the earlier base electronics, optional programming cable and assumed unchanged German shipping, **€41.25**, or **€39.45** with an owned programming cable. This is incomplete: cells, protection/isolation and wiring are excluded, as are PCB, printing, labels, fasteners and tools. Prices checked 18 October; stock is not reserved. Validate holder fit and regulator startup/current, add appropriate protection and review programming-USB isolation before PCB fabrication. The [power plan](power.md) records the details. Remove ADA6106 and LP-785060-J from the proposed order; no charger or USB-C charging cable is required.

## Arrange or borrow

- Soldering iron, suitable electronics solder, small cutters and a screwdriver.
- A multimeter with continuity mode; calipers for actual part and print measurements.
- A data-capable micro-USB cable and computer for Pico programming/service. Normal operation uses disposable AAs.
- Printer access and teal/off-white filament. Confirm the decoration process before buying additional colors or whole spools; engraving needs no additional color.
- Shared adhesive label stock and clear protective film, if retaining the current cap-label method.

## Wait for the design

- **Custom PCB:** first measure switches and socket/module parts, confirm the cap mechanism and display, then agree mounting holes and obtain a delivered manufacturing quote. The earlier €25–45 batch allowance was never a quote.
- **Screws, optional inserts and final feet:** choose exact sizes/counts with the enclosure and board holes; printed supports are part of the shell, not separate purchased spacers.
- **Power protection/isolation and wiring:** finalize the circuit and exact small components before the coordinated order. The proposed rear switch is listed above; check mounting and contacts. Verify startup and low-voltage behavior, complete Pico/LCD supply and programming-USB isolation before PCB fabrication.
- **Large enclosure print and 81-cap set:** wait for actual PCB inspection/fit checks. Keep the small cap/guide fit check within the final build; no separate electronics prototype.

Disposable alkaline AAs are the chosen power source. No touch display, additional controller, matrix diodes or GPIO expander is planned for the agreed single-key behavior. Follow [build order](build-order.md), [power plan](power.md) and [decisions](decisions.md).
