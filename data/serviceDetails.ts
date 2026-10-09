export interface ServiceWorkflowStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  proTip: string;
}

export interface ServiceSymptomSolution {
  symptom: string;
  rootCause: string;
  engineeredSolution: string;
  recommendedHardware: string;
}

export interface ServiceToolItem {
  name: string;
  spec: string;
  purpose: string;
}

export interface ServiceTechnicalProfile {
  slug: string;
  overviewSummary: string;
  workflow: ServiceWorkflowStep[];
  symptoms: ServiceSymptomSolution[];
  professionalTools: ServiceToolItem[];
  compatibleMaterials: string[];
  hyderabadContext: {
    hotspots: string[];
    typicalResponseTime: string;
    seasonalAdvice: string;
  };
}

export const SERVICE_TECHNICAL_PROFILES: Record<string, ServiceTechnicalProfile> = {
  "door-repair-and-installation": {
    slug: "door-repair-and-installation",
    overviewSummary: "Our certified Hyderabad door carpenters resolve door scraping, swollen frames, loose hinges, and jammed locks using Stanley smoothing planes, digital plumb levels, and genuine Godrej/Europa hardware.",
    workflow: [
      {
        stepNumber: "01",
        title: "Laser Alignment & Gap Inspection",
        duration: "10-15 mins",
        description: "We inspect the door frame plumb, floor clearance, and hinge mortise pockets using a green-beam laser level to pinpoint where friction or sag occurs.",
        proTip: "Standard interior door clearance must be 4–6mm from finished floor tiles to prevent dragging."
      },
      {
        stepNumber: "02",
        title: "Planing & Edge Relining",
        duration: "25-35 mins",
        description: "Swollen edges or warped timber are planed down using micro-adjustable Stanley hand planes, followed by edge sealing to lock out future humidity.",
        proTip: "We only shave from the hinge rebate or bottom edge to preserve decorative veneer and laminate faces."
      },
      {
        stepNumber: "03",
        title: "Hardware Re-Anchoring & Mortising",
        duration: "20-30 mins",
        description: "Stripped hinge screw holes are plugged with hardwood dowels and PVA structural glue before driving 75mm stainless steel screws into masonry jambs.",
        proTip: "Rawl plugs in wooden frames fail; solid beech doweling creates a permanent new wood substrate."
      },
      {
        stepNumber: "04",
        title: "Latch Testing & 30-Day Guarantee",
        duration: "10 mins",
        description: "We test smooth one-click latching, deadbolt throwing, and soft closure. You receive a digital invoice backed by our 30-day rework warranty.",
        proTip: "Zero rattle test: door must close securely against weatherstripping without manual pushing."
      }
    ],
    symptoms: [
      {
        symptom: "Door drags on vitrified tiles after monsoon rains",
        rootCause: "Timber moisture absorption expands door width and height by 2–4mm, breaking floor clearance.",
        engineeredSolution: "Precision bottom edge planing with chamfered back relief and moisture-barrier clear seal.",
        recommendedHardware: "Concealed silicone bottom drop seal / heavy brass butt hinges"
      },
      {
        symptom: "Main door lock latch does not click into frame strike plate",
        rootCause: "Door hinge sag shifted the lock center line 3mm below the strike plate aperture.",
        engineeredSolution: "Hinge recalibration and strike plate vertical mortise adjustment with anti-friction strike box.",
        recommendedHardware: "Europa / Godrej 14-pin dimple key mortise latch body"
      },
      {
        symptom: "Top hinge screws constantly pull loose from wooden frame",
        rootCause: "Heavy teak door weight sheared soft fiber wall plugs inside pre-drilled masonry holes.",
        engineeredSolution: "Drilling out cavity, injecting cross-linked wood resin with hardwood anchor, and 3-inch steel screws.",
        recommendedHardware: "Grade 304 Stainless Steel 4\" × 3\" × 3mm ball-bearing hinges"
      },
      {
        symptom: "Sliding balcony door jumps track and makes grinding noise",
        rootCause: "Cracked nylon bottom rollers and accumulated construction dust inside aluminum bottom rail.",
        engineeredSolution: "Deep track degreasing, rail leveling, and twin tandem steel ball-bearing roller replacement.",
        recommendedHardware: "Heavy-duty 80kg rated tandem nylon/steel sliding rollers"
      }
    ],
    professionalTools: [
      { name: "Stanley No. 4 Smoothing Plane", spec: "High-carbon steel iron", purpose: "Micro-planing sticking door edges without veneer splintering" },
      { name: "Bosch Professional GLL 3-80 Laser", spec: "360° Green Beam", purpose: "Checking frame plumb and door hanging squareness" },
      { name: "DeWalt DCD796 Cordless Hammer Drill", spec: "18V XR Brushless 70Nm", purpose: "Fast frame anchoring into concrete lintels and brickwork" },
      { name: "Marples Split-Proof Wood Chisels", spec: "6mm to 32mm bevel edge", purpose: "Clean mortising for Godrej/Europa lock bodies and strike plates" }
    ],
    compatibleMaterials: ["Teak Wood (Burma/CP)", "Sheesham", "Moulded HDF Skin", "Commercial Flush Door", "BWP Marine Plywood"],
    hyderabadContext: {
      hotspots: ["Miyapur", "Kukatpally", "Gachibowli", "Kondapur", "Manikonda", "Secunderabad"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "In Hyderabad's July–September monsoon season, doors expand rapidly. We seal planed edges with clear polyurethane to stop repeated swelling."
    }
  },

  "wardrobe-and-cupboard-repair": {
    slug: "wardrobe-and-cupboard-repair",
    overviewSummary: "Expert repair of sliding wardrobe channels, hydraulic soft-close hinges, jammed drawers, and loose cupboard shelves across Hyderabad homes.",
    workflow: [
      {
        stepNumber: "01",
        title: "Load & Alignment Assessment",
        duration: "10 mins",
        description: "We test shutter travel, inspect top guide wheels, check bottom roller bearings, and identify hinge crank depth (0-crank, 8-crank, or 16-crank).",
        proTip: "Never spray WD-40 on nylon sliding wheels; it attracts wardrobe lint and degrades synthetic roller bearings."
      },
      {
        stepNumber: "02",
        title: "Roller & Track Recalibration",
        duration: "25-30 mins",
        description: "For sliding doors, shutters are unhooked, tracks cleaned, and height-adjusting tension screws set to ensure perfectly plumb overlapping.",
        proTip: "We set bottom roller height so the top guide pin sits precisely in the middle of the upper aluminum channel."
      },
      {
        stepNumber: "03",
        title: "Hydraulic Hinge Re-anchoring",
        duration: "20 mins",
        description: "Damaged particle board screw holes are repaired with stainless steel hinge repair plates and through-bolts to prevent future pull-out.",
        proTip: "Hinge repair plates spread clamping force over 60mm² of undamaged wood panel."
      },
      {
        stepNumber: "04",
        title: "Soft-Close Damper Tuning & Polish Wipe",
        duration: "15 mins",
        description: "Each hydraulic piston is tuned for gentle, silent closure. Drawer runners are aligned to glide effortlessly with full finger-tip control.",
        proTip: "All sliding tracks are lubricated with dry PTFE spray that repels fabric dust."
      }
    ],
    symptoms: [
      {
        symptom: "Sliding wardrobe door derailed or scrapes aluminum bottom rail",
        rootCause: "Height-adjustment screw loosened or nylon wheel sheared off from internal bearing race.",
        engineeredSolution: "Replace roller carriage with steel ball-bearing assembly and set positive anti-jump latch.",
        recommendedHardware: "Ebco / Hafele heavy sliding door roller kit with anti-jump guide"
      },
      {
        symptom: "Wardrobe shutter slams loudly instead of closing softly",
        rootCause: "Internal hydraulic cylinder oil seal leaked, losing fluid damping resistance.",
        engineeredSolution: "Direct replacement with clip-on soft-close hydraulic hinges with 105° opening angle.",
        recommendedHardware: "Hettich Sensys or Ebco Pro-Soft 3D adjustable hydraulic hinges"
      },
      {
        symptom: "Drawer falls off track or gets jammed midway when pulled",
        rootCause: "Telescopic runner ball bearings dislodged due to overloading or misaligned side clearances.",
        engineeredSolution: "Re-level drawer box and install 45mm full-extension heavy-load telescopic channels.",
        recommendedHardware: "Grade 201 Stainless Steel 45mm telescopic ball-bearing channels (35kg rated)"
      },
      {
        symptom: "Hinge screws ripped out of MDF/particle board wardrobe carcass",
        rootCause: "Core wood particle disintegration from repetitive shutter leverage and door weight.",
        engineeredSolution: "Reinforcement using CNC-perforated stainless steel hinge mounting repair bracket.",
        recommendedHardware: "Heavy 1.2mm SS304 hinge repair mounting plates with machine screws"
      }
    ],
    professionalTools: [
      { name: "Festool / DeWalt Hinge Boring Jig", spec: "35mm Forstner guide", purpose: "Cutting clean 35mm hinge cups in wardrobe shutters" },
      { name: "Digital Vernier Caliper", spec: "0.01mm accuracy", purpose: "Measuring exact channel gap tolerances and drawer clearances" },
      { name: "Bosch GSB 12V-30 Brushless Driver", spec: "Precision clutch 20+1", purpose: "Driving screws into particle board without stripping threads" },
      { name: "Long Spirit Level 600mm", spec: "Dual vial precision", purpose: "Leveling horizontal drawer channels and vertical wardrobe uprights" }
    ],
    compatibleMaterials: ["Pre-laminated Particle Board", "MDF", "Action TESA HDF", "Commercial Plywood", "Acrylic Finished Shutters"],
    hyderabadContext: {
      hotspots: ["Gachibowli", "Hitec City", "Kondapur", "Madhapur", "Jubilee Hills", "Banjara Hills"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "In modern IT corridor high-rises, dry AC air combined with humidity can loosen particle board fittings. Our hinge plates ensure zero recurrence."
    }
  },

  "furniture-assembly": {
    slug: "furniture-assembly",
    overviewSummary: "Flawless assembly of flat-pack and knock-down furniture from IKEA, Wakefit, Pepperfry, HomeTown, and Amazon with zero stripped screws and 30-day warranty.",
    workflow: [
      {
        stepNumber: "01",
        title: "Unboxing & Hardware Segregation",
        duration: "15 mins",
        description: "We lay protective floor mats, cross-verify parts against assembly blueprints, and sort cam-locks, dowels, bolts, and screws into magnetic trays.",
        proTip: "Counting hardware before assembly prevents discovering a missing fastener after half the frame is erected."
      },
      {
        stepNumber: "02",
        title: "Carcase & Structural Sub-Assembly",
        duration: "45-75 mins",
        description: "We assemble the main load-bearing skeleton using torque-limited drivers, ensuring all dowels seat flush and cam-locks turn 180° for full lock.",
        proTip: "We never use high-impact drills on IKEA particle board; clutch is capped at 3Nm to prevent core blow-outs."
      },
      {
        stepNumber: "03",
        title: "Hydraulic / Moving Mechanism Setup",
        duration: "30-45 mins",
        description: "For storage beds or sliding wardrobes, gas lift pistons are charged, bed slats locked into dampening sockets, and drawer slides squared.",
        proTip: "Gas pistons must be mounted rod-down to ensure internal seals stay lubricated during operation."
      },
      {
        stepNumber: "04",
        title: "Anti-Tip Wall Anchoring & Cleanup",
        duration: "15 mins",
        description: "Wardrobes, bookshelves, and high-chests are securely anchored into wall masonry to prevent tipping. Packaging is neatly bundled.",
        proTip: "Anti-tip tethering is critical for child and pet safety in multi-storey apartments."
      }
    ],
    symptoms: [
      {
        symptom: "Wobbly, creaky bed frame after self or amateur assembly",
        rootCause: "Cam-lock fasteners seated at an angle or center support legs not adjusted to touch the floor.",
        engineeredSolution: "Disassembly, reseating dowels, torquing cam-locks to 180°, and leveling center leg pads.",
        recommendedHardware: "M6/M8 hex connection bolts with anti-vibration spring washers"
      },
      {
        symptom: "Wardrobe doors have uneven gaps and scrape against each other",
        rootCause: "Hinges not tuned across 3D adjustment axes (depth, lateral overlap, and height).",
        engineeredSolution: "Precision 3-way screwdriver calibration until uniform 2mm shadow line is achieved.",
        recommendedHardware: "OEM clip-on 3D adjustable concealed hinges"
      },
      {
        symptom: "Hydraulic bed frame refuses to stay down or is impossible to lift",
        rootCause: "Incorrect gas spring rating (e.g., using 250N instead of 400N) or inverted strut installation.",
        engineeredSolution: "Installing correctly rated Newton gas springs matched to your mattress weight.",
        recommendedHardware: "Heavy-duty 350N–450N pneumatic gas lift cylinders"
      },
      {
        symptom: "Stripped screw holes in IKEA particle board side panels",
        rootCause: "Over-torquing during DIY installation with electric screwdrivers without clutch control.",
        engineeredSolution: "Inserting threaded brass expanding inserts (wood nuts) for rock-solid machine bolt fastening.",
        recommendedHardware: "M6 threaded brass wood inserts with matching high-tensile machine screws"
      }
    ],
    professionalTools: [
      { name: "Torque-Limiting Cordless Driver", spec: "Precision 0.5 to 5.0 Nm", purpose: "Driving fasteners into delicate engineered wood without stripping" },
      { name: "Full Hex / Allen Key & Torx Bit Set", spec: "S2 Alloy Steel 1.5mm to 10mm", purpose: "Handling IKEA, Pepperfry, and German furniture fasteners" },
      { name: "Non-Marring Rubber Mallet", spec: "Dead-blow 16oz", purpose: "Seating wooden dowels and joints without denting laminate finishes" },
      { name: "Floor Protection Drop Mats", spec: "Heavy-duty quilted canvas", purpose: "Preventing scratches on Italian marble and vitrified tiles during assembly" }
    ],
    compatibleMaterials: ["IKEA Honeycomb Board", "Wakefit Sheesham & Engineered Wood", "Pepperfry Hardwood", "Melamine Particle Board", "Powder-Coated Metal Frames"],
    hyderabadContext: {
      hotspots: ["Kondapur", "Gachibowli", "Hitec City", "Tellapur", "Nallagandla", "Banjara Hills"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "Residents in newly occupied Hyderabad flats often face delivery delays from online brands. Our carpenters arrive the exact day your boxes arrive."
    }
  },

  "decor-mirror-installation": {
    slug: "decor-mirror-installation",
    overviewSummary: "Secure, laser-level hanging of heavy mirrors, luxury art frames, wall clocks, and curtain rods into concrete, brick, and AAC blocks across Hyderabad.",
    workflow: [
      {
        stepNumber: "01",
        title: "Wall Substrate & Cable Scan",
        duration: "5-10 mins",
        description: "We use digital multi-scanners to locate concealed electrical conduits and pipes before marking drill locations.",
        proTip: "Never drill directly above or below electrical switchboards; conduits run vertically."
      },
      {
        stepNumber: "02",
        title: "Green Beam Laser Projection",
        duration: "10 mins",
        description: "A self-leveling 360° laser projects crisp crosslines, guaranteeing that mirrors and gallery walls are 100% horizontal.",
        proTip: "Eye-level standard: Center of artworks and mirrors should sit 57–60 inches from finished flooring."
      },
      {
        stepNumber: "03",
        title: "Dust-Free Hammer Drilling",
        duration: "15-20 mins",
        description: "SDS Plus rotary hammer with rubber vacuum collar captures 98% of concrete dust directly at the wall interface.",
        proTip: "Tile drilling uses spearhead tungsten bits with zero hammer action to prevent hairline tile fractures."
      },
      {
        stepNumber: "04",
        title: "Load Anchoring & Clean Handover",
        duration: "10 mins",
        description: "We fit genuine Fischer nylon plugs with high-shear screws, hang the item, and verify steady 20kg+ pull resistance.",
        proTip: "For mirrors over 15kg, we install interlocking aluminum French cleats for seismic stability."
      }
    ],
    symptoms: [
      {
        symptom: "Fear of heavy bathroom vanity mirror falling off tiles",
        rootCause: "Cheap plastic wall plugs failed to grip hollow voids behind vitrified bathroom tiles.",
        engineeredSolution: "Diamond tile coring with extended Fischer DuoPower anchors reaching structural masonry.",
        recommendedHardware: "Fischer DuoPower 8×65mm anchors with stainless steel screws"
      },
      {
        symptom: "Curtain rod brackets pulling out of concrete lintel",
        rootCause: "Repeated tugging on heavy blackout curtains loosened undersized 5mm plastic wall plugs.",
        engineeredSolution: "Upgrading to 8mm heavy-duty nylon expansion anchors with zinc-plated hex flange screws.",
        recommendedHardware: "8mm nylon heavy expansion plugs with 3-inch zinc screws"
      },
      {
        symptom: "Photo frames or multi-piece wall art hanging crookedly",
        rootCause: "Manual tape measuring errors on textured or uneven apartment walls.",
        engineeredSolution: "Projection of green-line laser grid for precision coordinate marking within 0.5mm.",
        recommendedHardware: "Heavy brass D-rings with stainless steel braided picture wire"
      },
      {
        symptom: "Tiles cracked or chipped during bathroom accessory drilling",
        rootCause: "Using rotary hammer mode on brittle vitrified or ceramic wall tiles.",
        engineeredSolution: "High-speed water-cooled diamond spear bit drilling in pure rotary mode without impact.",
        recommendedHardware: "Silicon gasket vibration dampers behind metal wall flanges"
      }
    ],
    professionalTools: [
      { name: "Bosch GLL 3-80 G Laser Level", spec: "Green laser ±0.2mm/m", purpose: "Projecting horizontal and vertical benchmark lines across room" },
      { name: "Bosch GMS 120 Wall Scanner", spec: "Metal, wire & wood detection up to 120mm", purpose: "Detecting concealed live electrical wires and water pipes before drilling" },
      { name: "Bosch GBH 2-26 DRE Rotary Hammer", spec: "800W 2.7 Joules SDS Plus", purpose: "Fast, clean drilling into 50MPa concrete walls" },
      { name: "Vacuum Dust Extraction Attachment", spec: "HEPA filtration rubber shroud", purpose: "Zero dust fall on bed linen, sofas, and floor tiles" }
    ],
    compatibleMaterials: ["Solid Concrete Shear Walls", "Red Clay Brick", "AAC Fly-Ash Blocks", "Drywall / Gypsum Partition", "Ceramic & Vitrified Tiles"],
    hyderabadContext: {
      hotspots: ["Jubilee Hills", "Banjara Hills", "Madhapur", "Financial District", "Kondapur", "Nanakramguda"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "High-rise apartments in Gachibowli & Financial District have dense M50 shear walls where cheap DIY drills burn out. Our industrial SDS drills drill in 5 seconds."
    }
  },

  "shelf-and-cabinet-installation": {
    slug: "shelf-and-cabinet-installation",
    overviewSummary: "Heavy-duty wall mounting of floating shelves, TV wall units, microwave brackets, bathroom vanity cabinets, and modular wall cubes across Hyderabad.",
    workflow: [
      {
        stepNumber: "01",
        title: "Load Rating & Stud/Masonry Scan",
        duration: "10 mins",
        description: "We determine whether the wall is solid concrete, hollow block, or drywall, and calculate required fastener shear strength.",
        proTip: "Never mount a 65-inch TV unit onto hollow AAC blocks without heavy-duty toggle anchors."
      },
      {
        stepNumber: "02",
        title: "Laser Leveling & Bracket Alignment",
        duration: "15 mins",
        description: "Green beam laser projects horizontal reference lines to ensure TV consoles and floating shelves align perfectly with flooring.",
        proTip: "Floating shelf bracket rods must have a 1.5° upward tilt to compensate for future book weight sag."
      },
      {
        stepNumber: "03",
        title: "Dust-Free High-Torque Anchoring",
        duration: "25-35 mins",
        description: "We drill with HEPA vacuum extraction and drive steel expansion sleeve anchors directly into structural masonry.",
        proTip: "We use chemical anchor capsules when installing heavy cabinets onto crumbly fly-ash block walls."
      },
      {
        stepNumber: "04",
        title: "Deflection Test & Cable Routing",
        duration: "15 mins",
        description: "We apply a 40kg downward proof load, verify zero deflection, route AV cables through grommets, and wipe down surfaces.",
        proTip: "Cable passthroughs are deburred to prevent HDMI and power cord insulation chafing."
      }
    ],
    symptoms: [
      {
        symptom: "Floating shelf sagging downwards and separating from wall",
        rootCause: "Internal bracket rod bent or wall anchor pulled 5mm out of soft plaster.",
        engineeredSolution: "Replacing with 12mm solid steel concealed floating rods with upward pre-camber angle.",
        recommendedHardware: "Heavy-duty 12mm × 140mm solid steel concealed floating shelf brackets"
      },
      {
        symptom: "TV console pulling away from hollow AAC block partition",
        rootCause: "Standard rawl plugs cannot expand inside hollow cellular lightweight concrete blocks.",
        engineeredSolution: "Installing Fischer heavy-duty metal spring toggle bolts or winged nylon frame plugs.",
        recommendedHardware: "Fischer DuoTec 10 toggle anchor or SXRL long-shaft frame anchors"
      },
      {
        symptom: "Bathroom vanity cabinet wobbling from water exposure",
        rootCause: "Moisture deteriorated wooden backing panel and loosened mounting screws.",
        engineeredSolution: "Replacing backing with BWP marine ply cleats and anchoring with stainless steel lag bolts.",
        recommendedHardware: "SS304 8mm × 75mm coach screws with nylon sleeve washers"
      },
      {
        symptom: "Microwave wall bracket flexing when oven door is opened",
        rootCause: "Cantilever arm leverage exceeded thin sheet-metal bracket capacity.",
        engineeredSolution: "Installing heavy 2mm triangular gusset steel support brackets anchored into masonry.",
        recommendedHardware: "Heavy-duty triangular gusset powder-coated steel shelf brackets (50kg rated)"
      }
    ],
    professionalTools: [
      { name: "SDS Plus Rotary Hammer", spec: "Carbide 4-cutter head bits", purpose: "Drilling clean, circular non-oval holes in reinforced concrete" },
      { name: "Concealed Shelf Jig Guide", spec: "Precision 12mm drill guide", purpose: "Drilling straight deep holes into wooden shelf back edges" },
      { name: "Digital Angle Finder", spec: "0.05° resolution", purpose: "Setting accurate 1.5° upward anti-sag angle on shelf rods" },
      { name: "Cordless Impact Wrench", spec: "120Nm torque", purpose: "Driving heavy coach bolts securely into masonry anchors" }
    ],
    compatibleMaterials: ["Solid Core Teak & Pine Shelves", "High-Gloss MDF TV Units", "Marine BWP Plywood", "Tempered Glass Shelves", "Powder-Coated Metal Brackets"],
    hyderabadContext: {
      hotspots: ["Kondapur", "Madhapur", "Gachibowli", "Miyapur", "Kukatpally", "Manikonda"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "In modern Hyderabad apartments with AAC fly ash block internal walls, standard plugs pull out easily. We carry specialized European cavity anchors for 100% safety."
    }
  },

  "modular-kitchen-cabinets": {
    slug: "modular-kitchen-cabinets",
    overviewSummary: "Precision repair of modular kitchen tandem boxes, soft-close hydraulic lift-ups, corner carousel baskets, and water-damaged sink cabinets across Hyderabad.",
    workflow: [
      {
        stepNumber: "01",
        title: "Tandem Box & Hardware Diagnostics",
        duration: "10 mins",
        description: "We inspect drawer glide tracks, test hydraulic lift-up pressure, check hinge cup seating, and evaluate moisture levels under the sink.",
        proTip: "Kitchen hardware failure is 80% caused by spice/liquid spillage gumming up ball-bearing grease."
      },
      {
        stepNumber: "02",
        title: "Track Cleaning & Bearing Flush",
        duration: "20-25 mins",
        description: "Tandem boxes are unclipped, runner channels degreased, and stainless steel ball-bearing races re-lubricated with high-viscosity synthetic grease.",
        proTip: "We only use food-grade non-toxic synthetic lubricants inside kitchen cabinet drawers."
      },
      {
        stepNumber: "03",
        title: "Hydraulic Lift-Up & Hinge Tuning",
        duration: "25 mins",
        description: "Bi-fold overhead shutters (Blum Aventos / Hafele Free Flap) are tuned via hex adjustment screws to stay open at any angle without falling.",
        proTip: "Tension must match door weight; unbalanced springs strain top cabinet hinges."
      },
      {
        stepNumber: "04",
        title: "Sink Cabinet Reinforcement & Seal",
        duration: "25 mins",
        description: "Swollen plywood near sink drains is reinforced with BWP marine ply patches and sealed with silicone to stop moisture infiltration.",
        proTip: "We install an aluminum foil protective drip mat on the floor of the sink carcass."
      }
    ],
    symptoms: [
      {
        symptom: "Heavy cutlery or thali tandem box sticks and scrapes cabinet bottom",
        rootCause: "Under-mount slide synchronization clip snapped or drawer front tilt screw drifted down.",
        engineeredSolution: "Front-bracket tilt recalibration and clip replacement on Blum/Hettich tandem runners.",
        recommendedHardware: "Blum Tandembox / Hettich InnoTech front fixing brackets and runner clips"
      },
      {
        symptom: "Overhead hydraulic lift-up flap door falls down on your head",
        rootCause: "Gas piston internal seal blown or mechanical spring tension adjuster set too weak.",
        engineeredSolution: "Tension recalibration or replacement with matching Newton-rated gas spring arms.",
        recommendedHardware: "Blum Aventos HK/HF lift mechanism or 120N–180N hydraulic gas arms"
      },
      {
        symptom: "Corner carousel or magic corner basket jammed midway",
        rootCause: "Center pivot bearing dislodged or guide roller jumped off the tracking rail.",
        engineeredSolution: "Re-leveling vertical center column, tightening pivot collar, and greasing tracks.",
        recommendedHardware: "Heavy-duty stainless steel 304 corner carousel pivot hardware"
      },
      {
        symptom: "Cabinet floor under kitchen sink swollen from RO filter or drain leak",
        rootCause: "Commercial particle board or normal ply absorbed water and bloated to double thickness.",
        engineeredSolution: "Removing rotted core, sistering 16mm BWP Marine Plywood, and applying waterproof foil.",
        recommendedHardware: "IS:710 Marine Grade 710 Plywood with aluminum moisture barrier sheet"
      }
    ],
    professionalTools: [
      { name: "PZ2 Pozidriv Precision Screwdrivers", spec: "German S2 Steel", purpose: "Adjusting European kitchen cabinet screws without rounding screw heads" },
      { name: "Blum Drawer Adjustment Gauge", spec: "Original calibration template", purpose: "Setting exact front gap and height on tandem drawers" },
      { name: "Cordless Rotary Multitool", spec: "Carbide plunge cut blade", purpose: "Trimming rotted cabinet wood under sink without removing entire granite countertop" },
      { name: "Food-Grade Synthetic Lubricant", spec: "Non-toxic PTFE grease", purpose: "Silencing kitchen drawer slides and corner baskets safely" }
    ],
    compatibleMaterials: ["BWP/BWR Marine Plywood (710 Grade)", "High-Gloss Acrylic Shutters", "PU Painted MDF", "Stainless Steel 304 Wire Baskets", "Quartz/Granite Counter Carcasses"],
    hyderabadContext: {
      hotspots: ["Miyapur", "Kukatpally", "Gachibowli", "Kondapur", "Manikonda", "Banjara Hills"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "In Hyderabad kitchens with RO water purifiers under the sink, minor valve drips ruin wood fast. We install aluminum drip pans during every sink repair."
    }
  },

  "furniture-assembly-and-repair": {
    slug: "furniture-assembly-and-repair",
    overviewSummary: "Heavy timber repair for squeaky beds, wobbly dining tables, broken chair legs, loose mortise joints, and hydraulic storage beds across Hyderabad.",
    workflow: [
      {
        stepNumber: "01",
        title: "Joint Stress & Deflection Inspection",
        duration: "10 mins",
        description: "We apply progressive manual load to identify whether squeaks originate from dry wood-on-wood friction, loose corner brackets, or sheared dowels.",
        proTip: "Bed squeaks are rarely in the headboard; 90% come from centre support beam deflection."
      },
      {
        stepNumber: "02",
        title: "Joint Disassembly & Old Glue Removal",
        duration: "20 mins",
        description: "Loose mortise and tenon joints are gently disassembled, and brittle crystallized legacy glue is scraped away to expose fresh wood fibers.",
        proTip: "New wood adhesive will not bond over old, dried animal or synthetic glue residue."
      },
      {
        stepNumber: "03",
        title: "Structural Reinforcement & Clamping",
        duration: "30-40 mins",
        description: "We inject high-tensile cross-linking PVA/polyurethane glue, fit steel L-brackets internally, and apply bar clamps under 200kg pressure.",
        proTip: "Steel corner brackets must be installed with diagonally staggered screws to prevent wood splitting."
      },
      {
        stepNumber: "04",
        title: "Anti-Squeak Isolation & Floor Glides",
        duration: "15 mins",
        description: "Felt friction dampeners are placed between bed slats and side rails. Heavy-duty felt glides are fitted to table legs to protect flooring.",
        proTip: "Paraffin wax rubbed along bed slat contact points completely silences timber squeaks."
      }
    ],
    symptoms: [
      {
        symptom: "King/queen wooden bed creaks and squeaks with every slight turn",
        rootCause: "Wooden slats rubbing against frame rails and loosened corner bracket lag bolts.",
        engineeredSolution: "Tightening corner bolts, adding center support legs, and installing rubber felt dampening strips.",
        recommendedHardware: "Heavy 3mm steel corner bed brackets with anti-vibration nylon locknuts"
      },
      {
        symptom: "Dining chair leg wobbles dangerously when seated",
        rootCause: "Mortise and tenon joint adhesive cracked from dynamic rocking and drag friction.",
        engineeredSolution: "Disassembling joint, injecting waterproof polyurethane structural adhesive, and clamping.",
        recommendedHardware: "Hardwood fluted dowels with Gorilla/Fevicol Marine structural adhesive"
      },
      {
        symptom: "Dining table top tilts or rocks unevenly on tile flooring",
        rootCause: "Uneven leg settlement, loose apron bolts, or warped hardwood stretcher.",
        engineeredSolution: "Planing bottom of offending leg and installing threaded micro-adjustable screw glides.",
        recommendedHardware: "M8 heavy-duty threaded leveling glides with brass inserts"
      },
      {
        symptom: "Bed storage hydraulic pump won't lift heavy mattress",
        rootCause: "Factory gas springs lost nitrogen pressure (down from 350N to under 100N).",
        engineeredSolution: "Replacement with pair of heavy-duty gas cylinders matched to mattress weight.",
        recommendedHardware: "Pneumatic 350N–450N heavy gas lift shock absorbers"
      }
    ],
    professionalTools: [
      { name: "Heavy Bar Clamps & F-Clamps", spec: "300kg clamping force 600mm", purpose: "Clamping glued wooden furniture joints under high pressure" },
      { name: "High-Tensile Structural Wood Adhesive", spec: "Cross-linking D3/D4 waterproof", purpose: "Creating bonds stronger than the surrounding timber grain" },
      { name: "Heavy Corner Angle Fasteners", spec: "3mm cold-rolled steel zinc plated", purpose: "Concealed internal bed frame and table corner reinforcement" },
      { name: "High-Density Adhesive Felt Pads", spec: "5mm heavy wool felt", purpose: "Eliminating floor drag marks and timber-on-timber friction squeaks" }
    ],
    compatibleMaterials: ["Solid Teak Wood", "Indian Rosewood (Sheesham)", "Rubberwood", "Engineered Board", "Plywood Sub-Structures"],
    hyderabadContext: {
      hotspots: ["Secunderabad", "Banjara Hills", "Jubilee Hills", "Kukatpally", "Miyapur", "Alwal"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "Traditional solid teak and sheesham dining sets expand in summer and contract in winter. We allow 2mm expansion clearance in internal joints."
    }
  },

  "general-woodwork-and-drilling": {
    slug: "general-woodwork-and-drilling",
    overviewSummary: "Heavy-duty dustless concrete drilling, wall plug anchoring, custom wood cutting, curtain pelmet resizing, and minor household carpentry across Hyderabad.",
    workflow: [
      {
        stepNumber: "01",
        title: "Substrate Density & Conduit Scan",
        duration: "5-10 mins",
        description: "We test wall hardness and run a digital wall scanner to verify zero hidden electrical cables or plastic water pipes behind the drill point.",
        proTip: "Hyderabad high-rise shear walls are M40/M50 grade pre-stressed concrete that dull ordinary drill bits in seconds."
      },
      {
        stepNumber: "02",
        title: "Dust-Free SDS Hammer Drilling",
        duration: "10-20 mins",
        description: "Using Bosch SDS Plus 4-cutter carbide hammer bits with industrial HEPA vacuum collars, we drill deep, perfectly circular holes with zero dust.",
        proTip: "A round, non-oval hole is essential for 100% expansion anchor holding power."
      },
      {
        stepNumber: "03",
        title: "Anchor Seating & High-Tensile Fastening",
        duration: "10-15 mins",
        description: "We hammer in genuine virgin nylon expansion wall plugs and drive zinc-coated corrosion-resistant screws to full seating torque.",
        proTip: "We discard cheap recycled PVC plugs that crack; genuine nylon plugs bend without snapping."
      },
      {
        stepNumber: "04",
        title: "Proof Load Verification & Clean Up",
        duration: "5 mins",
        description: "We test horizontal alignment with a digital level and apply manual proof weight before cleaning up any tiny stray particles.",
        proTip: "We leave your floor and furniture as spotless as we found them."
      }
    ],
    symptoms: [
      {
        symptom: "DIY drill bit smoking or stuck in high-rise apartment concrete wall",
        rootCause: "Standard rotary drill lacks impact energy to crush M50 aggregate stone in concrete shear walls.",
        engineeredSolution: "Using industrial 2.7 Joules SDS Plus pneumatic rotary hammer with 4-cutter carbide head.",
        recommendedHardware: "Bosch Plus-7X 4-cutter carbide drill bits"
      },
      {
        symptom: "Plastic wall plug spinning loosely inside oversized drill hole",
        rootCause: "Handheld drill wobble created an eccentric, oval hole larger than the plug diameter.",
        engineeredSolution: "Upgrading to next-gauge ribbed Fischer DuoPower anchor with twin material expansion wings.",
        recommendedHardware: "Fischer DuoPower 8×40 or 10×50 multi-substrate nylon plugs"
      },
      {
        symptom: "Wooden pelmet or curtain rod too long for window frame after shifting",
        rootCause: "New apartment window niche narrower than previous home dimensions.",
        engineeredSolution: "Precision circular saw cross-cutting with 60-tooth fine-finish blade and end-grain sealing.",
        recommendedHardware: "End-cap brackets and touch-up wood stain"
      },
      {
        symptom: "Heavy ceiling fan, swing (jhula), or punching bag needs ceiling mounting",
        rootCause: "Tensile pull load requires structural concrete mechanical anchor, not plastic plugs.",
        engineeredSolution: "Installing 12mm Grade 8.8 drop-in steel wedge anchor rated for 300kg dynamic load.",
        recommendedHardware: "M10/M12 Stainless Steel 304 heavy expansion wedge anchor bolts"
      }
    ],
    professionalTools: [
      { name: "Bosch GBH 2-26 DRE Rotary Hammer", spec: "800W 2.7J pneumatic impact", purpose: "Punching clean holes through toughest Hyderabad concrete in seconds" },
      { name: "Bosch Professional HEPA Vacuum System", spec: "Suction collar attachment", purpose: "Capturing 98% of dust right at the hole entrance" },
      { name: "DeWalt DCS391 Cordless Circular Saw", spec: "165mm 60-Tooth Carbide Blade", purpose: "Clean, splinter-free cuts on wooden boards, pelmets, and doors" },
      { name: "Green Beam Cross-Line Laser Level", spec: "Self-leveling ±0.2mm/m", purpose: "Guaranteeing laser-straight mounting of rods, shelves, and art" }
    ],
    compatibleMaterials: ["High-Rise Shear Concrete (M30-M50)", "Solid Red Brick", "Cellular AAC Blocks", "Hardwood Timber", "Plywood & MDF Panels"],
    hyderabadContext: {
      hotspots: ["Gachibowli", "Hitec City", "Tellapur", "Kondapur", "Nallagandla", "Financial District"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "In modern IT corridor high-rises, dust triggers sensitive smoke alarms. Our vacuum-attached hammer drills guarantee zero airborne dust alarms."
    }
  },

  "wood-polishing-and-refurbishing": {
    slug: "wood-polishing-and-refurbishing",
    overviewSummary: "Professional PU (Polyurethane), Melamine, French spirit polish, and scratch touch-up for main entrance doors, dining tables, and teak furniture across Hyderabad.",
    workflow: [
      {
        stepNumber: "01",
        title: "Surface Stripping & Defect Assessment",
        duration: "30-60 mins",
        description: "We inspect wood grain, test for previous silicone or wax coats, and strip old flaking varnish or yellowed lacquer down to natural wood.",
        proTip: "Stripping must be done with the grain direction to avoid cross-grain gouges."
      },
      {
        stepNumber: "02",
        title: "Color-Matched Grain Filling & Gouge Repair",
        duration: "45 mins",
        description: "Dents, scratches, and nail holes are filled with custom-tinted epoxy wood filler matched to natural timber tones (Teak, Walnut, Rosewood).",
        proTip: "We mix walnut and ochre pigments to match natural teak grain variations."
      },
      {
        stepNumber: "03",
        title: "Progressive Multi-Stage Sanding",
        duration: "60-90 mins",
        description: "Using random orbital sanders, we step through 80, 120, 220, and 400 grit papers until the surface feels like polished glass.",
        proTip: "Wiping with mineral spirits between grits raises loose wood whiskers for glass-smooth finishing."
      },
      {
        stepNumber: "04",
        title: "Multi-Coat PU / Melamine Application",
        duration: "90-120 mins",
        description: "We apply sealer basecoats followed by dual topcoats of matte, semi-gloss, or high-gloss PU with UV blockers and water resistance.",
        proTip: "Melamine dries to touch in 2 hours; full chemical cure takes 48 hours for maximum heat and scratch resistance."
      }
    ],
    symptoms: [
      {
        symptom: "White water rings and hot utensil heat marks on dining table",
        rootCause: "Trapped moisture beneath degraded NC lacquer or wax finish clouding the clear coat.",
        engineeredSolution: "Chemical moisture drawing, light sanding, and re-coating with heat-resistant PU.",
        recommendedHardware: "Asian Paints Acolac Melamine or Sirca Italian PU 2-pack finish"
      },
      {
        symptom: "Main door facing direct sun bleached dull and gray with hairline surface cracks",
        rootCause: "UV degradation and thermal cycling breaking down exterior single-pack varnish.",
        engineeredSolution: "Deep sanding, rich oil-based wood stain re-infusion, and 3 coats of Exterior PU with UV filters.",
        recommendedHardware: "Asian Paints Woodtech PU Exterior Gloss / Satin finish"
      },
      {
        symptom: "Deep pet scratches or key gouges exposing raw pale wood on furniture",
        rootCause: "Mechanical trauma penetrating through clear finish and stain into timber fiber.",
        engineeredSolution: "Steam grain swelling, tinted epoxy grain filler, touch-up stain, and localized clear blend.",
        recommendedHardware: "Konig wood touch-up grain markers and tinted epoxy filler"
      },
      {
        symptom: "Antique heirloom teak furniture looks dark, sticky, and grimy",
        rootCause: "Decades of dust blending with oxidized linseed oil and wax layers.",
        engineeredSolution: "Gentle chemical cleaning with mineral spirits and hand-rubbed traditional French Shellac polish.",
        recommendedHardware: "Pure dewaxed lemon shellac flakes with denatured alcohol"
      }
    ],
    professionalTools: [
      { name: "Festool / Mirka Random Orbital Sander", spec: "150mm with multi-hole dust extraction", purpose: "Vortex-free swirl-less surface preparation down to 400 grit" },
      { name: "HVLP Low-Over-Spray Spray Gun", spec: "1.4mm stainless steel nozzle", purpose: "Mirror-smooth atomization of PU and Melamine topcoats" },
      { name: "Digital Wood Moisture Meter", spec: "Pinless dual depth sensor", purpose: "Verifying wood has under 12% moisture before applying clear coats" },
      { name: "Dust-Free Masking & Drop Sheeting", spec: "Electrostatic cling film", purpose: "Protecting surrounding walls and flooring from overspray" }
    ],
    compatibleMaterials: ["Solid CP/Burma Teak", "Indian Rosewood (Sheesham)", "Natural Teak Veneer", "Oak & Walnut Veneer", "Pine & Rubberwood"],
    hyderabadContext: {
      hotspots: ["Banjara Hills", "Jubilee Hills", "Secunderabad", "Sainikpuri", "Himayatnagar", "Begumpet"],
      typicalResponseTime: "25–35 minutes",
      seasonalAdvice: "Never apply wood polish on rainy or overly humid days as moisture blush turns clear coats cloudy. We use climate-controlled heat lamps during humid spells."
    }
  }
};

export function getServiceTechnicalProfile(slug: string): ServiceTechnicalProfile | undefined {
  return SERVICE_TECHNICAL_PROFILES[slug];
}
