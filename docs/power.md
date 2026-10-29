# Disposable AA battery power

Updated **2026-10-18**. The user chose disposable AAs. This supersedes both the earlier USB-only plan and the subsequent internal-LiPo/USB-C charging proposal. No parts have been ordered. Exact wiring and manufacturing files are not released.

## Intended operation

- Three replaceable **1.5 V alkaline AA cells** in a retained internal holder are the proposed implementation; AA chemistry is the user decision, while cell count/regulator are engineering defaults to validate.
- A rear latching switch disconnects battery power ahead of the regulator, switching off both Pico and LCD/backlight without leaving the boost converter running.
- Replace cells through a screw-fastened hatch underneath, without opening the electronics compartment.
- No charging circuit or charging socket. Keep the Pico micro-USB port accessible for programming/service, initially through the screw-open base.

```mermaid
flowchart LR
    AA[3 alkaline AA cells] --> SW[Rear on/off switch]
    SW --> PROTECT[Reverse-polarity and current protection]
    PROTECT --> REG[5 V regulator]
    REG --> ISO[Reviewed supply isolation]
    ISO --> PICO[Pico VSYS]
    REG --> LCD[LCD supply]
    PICO -->|3.3 V signals| LCD
```

## Candidate parts and cost

| Part | Listed price | Notes |
| --- | ---: | --- |
| [BerryBase BH-331-3A: open 3-AA holder with 150 mm leads](https://www.berrybase.de/batteriehalter-fuer-3x-mignon-aa-r6-zellen-mit-150mm-anschlusskabel) | €0.85 | Retain inside the shell behind a separate battery hatch. Verify holder dimensions, mounting and wire exit with the actual part. |
| [BerryBase POL4941: Pololu U3V16F5 5 V boost regulator](https://www.berrybase.de/pololu-u3v16f5-5v-step-up-spannungsregler) | €5.90 | Candidate to supply the Pico and LCD as cell voltage falls. Manufacturer specifies 2.7 V minimum startup, so three cells are preferred over two for reliable restarting with partly used cells. |
| [BerryBase NIN-S22L: screw-mounted latching slide switch](https://www.berrybase.de/schiebeschalter-printmontage-on-on-2-stellig-35x12x8mm-gerade) | €0.35 | DPDT ON-ON; use common and one throw as on/off, with unused throw insulated. Listing gives 1 A at 24 V DC; verify mapping and mounting drawing. Approximate body 35.2 × 12.6 × 7.8 mm, slider height 6 mm. |
| Three alkaline AAs, insulated wiring, protection/isolation parts, and any connectors | Unquoted | Choose exact circuit parts before PCB release and update the complete order cost. |

Listed candidates total **€7.10**, versus €16.60 for the previous LiPo/charger pair before its switch. Added to the earlier €34.15 base-electronics/shipping subtotal, this is **€41.25**, assuming unchanged shipping and retaining the optional programming cable. With an owned programming cable it is **€39.45**. These are incomplete subtotals: cells, protection/isolation, wiring, PCB, printing, labels, fasteners and tools are excluded. Prices checked 18 October; availability is not reserved.

## Circuit and assembly checks

Sources: [Pololu manufacturer documentation](https://www.pololu.com/product/4941), [Pico datasheet](https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf), and the selected LCD schematic/specifications.

The regulator is approximately 13.1 × 8.1 × 3 mm. Its 1.6 A specification refers to input current, not a guaranteed 5 V output current at every battery voltage. It has no reverse-polarity or output-short protection: add suitable input protection and review current limiting/fusing rather than relying on the module alone. Its output can follow an input above 5 V, so this proposal is specifically for three alkaline cells, not four cells or higher-voltage substitutes. Verify output voltage and LCD compatibility with fresh cells.

Use an isolated VSYS supply arrangement for the Pico. USB programming must not feed current into the regulator output or disposable batteries. Review both USB and battery paths against the actual schematic; Pico USB can power the controller despite an open battery switch. Do not call the service USB arrangement a charger or promise that the battery switch cuts USB power. Normal user operation remains battery powered.

Check the actual LCD VCC and backlight requirements with 3.3 V logic, reliable startup with fresh and partly discharged cells, supply stability, matrix/display operation and off-state battery current. The regulator can keep running below its startup threshold; define an appropriate pack-level low-voltage stop before release, rather than using its 1.3 V running minimum as the endpoint for three cells. Confirm restart and cutoff behavior during final-parts checks. No separate electronics prototype is required.

## Enclosure and runtime

Secure the holder, insulate contacts and wiring from PCB legs and screws, provide strain relief, and keep cell access separate from button-load supports. Mark polarity and use a screw-fastened underside hatch. The earlier wedge heights are provisional; verify the holder and hatch fit before PCB fabrication and final enclosure printing.

Actual runtime is unknown until the complete load and battery behavior are measured. Aim for several hours of use; do not promise weeks or months from an unmeasured backlit display. Keep the agreed retain-last-equation behavior; no automatic display timeout is added by this power decision.
