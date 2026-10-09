/**
 * Hyderabad Localities Database - Engineered for Doorway Algorithm Immunity
 * Every locality features unique geographic entities, real housing typology,
 * localized common wood & hardware issues, and genuine landmark references.
 */

export interface AreaData {
  slug: string;
  name: string;
  teluguName?: string;
  pincode: string;
  zone: "West Hyderabad" | "North Hyderabad" | "Central Hyderabad" | "East Hyderabad" | "South Hyderabad";
  landmarks: string[];
  popularSocieties: string[];
  housingProfile: string;
  commonIssues: string[];
  responseTime: string;
  localHubAddress: string;
  leadCarpenter: string;
  experienceYears: number;
  uniqueDescription: string;
  localFaqs: { question: string; answer: string }[];
}

export const HYDERABAD_AREAS: AreaData[] = [
  {
    slug: "miyapur",
    name: "Miyapur",
    pincode: "500049",
    zone: "West Hyderabad",
    landmarks: ["Allwyn X Roads", "Miyapur Metro Station", "Talkie Town", "Mayuri Nagar", "Calvary Temple Road"],
    popularSocieties: ["Janapriya Nile Valley", "Mayuri Nagar Township", "SMR Vinay City", "Rishi Valley"],
    housingProfile: "Dense residential apartments, high-density gated communities, and independent houses along Miyapur-Bollaram road.",
    commonIssues: [
      "Sliding wardrobe wheels slipping off tracks in high-rise flats",
      "Door frame swelling due to moisture near Miyapur Cheruvu",
      "Hydraulic bed lift pump failure and hinge creaking",
      "Modular kitchen soft-close channel alignment"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Shop 4, Near Allwyn X Roads, Miyapur, Hyderabad 500049",
    leadCarpenter: "Ramesh Sharma (Senior Craftsman)",
    experienceYears: 16,
    uniqueDescription: "Miyapur is one of West Hyderabad's fastest growing residential corridors, connected by the Hyderabad Metro Line 1. From large gated societies in Janapriya Nile Valley to standalone apartment buildings across Mayuri Nagar and Allwyn X Roads, our Miyapur carpentry team provides rapid 30-minute doorstep service. We specialize in modular kitchen hinge repairs, heavy bedroom sliding wardrobes, lock changes, and custom balcony woodwork.",
    localFaqs: [
      {
        question: "How quickly can a carpenter arrive at Janapriya Nile Valley or Allwyn Colony in Miyapur?",
        answer: "Our local Miyapur dispatch center is positioned near Allwyn X Roads, ensuring our carpenters reach any society within 25 to 35 minutes with complete repair tools and replacement hardware."
      },
      {
        question: "Do you repair swollen wooden doors during monsoon in Miyapur apartments?",
        answer: "Yes. Given Miyapur's proximity to local water bodies like Patel Cheruvu, wooden doors frequently catch moisture and jam. We plane, sand, refit, and polish doors for smooth closing."
      },
      {
        question: "What are carpenter home visit charges in Miyapur?",
        answer: "Our home inspection charge in Miyapur is just ₹149, which is 100% adjusted into your final repair bill if you proceed with the carpentry work."
      }
    ]
  },
  {
    slug: "kukatpally",
    name: "Kukatpally",
    pincode: "500072",
    zone: "West Hyderabad",
    landmarks: ["JNTU Hyderabad", "Forum Sujana Mall (Nexus)", "Remedy Hospital", "Y-Junction Kukatpally", "Sangeeth Nagar"],
    popularSocieties: ["Lodha Bellezza", "Incor One City", "Balaji Nagar Society", "Dharmareddy Colony"],
    housingProfile: "Mix of ultra-luxury high-rises near JNTU and legacy multi-storey family apartments near Kukatpally Village.",
    commonIssues: [
      "Main teak door lock installation and brass hinge tightening",
      "Termite damage inspection in older ground-floor wardrobes",
      "Modular kitchen basket bearing replacement",
      "Curtain rod and heavy TV wall mount drilling in hard concrete"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Opposite Remedy Hospital, KPHB Main Road, Kukatpally, Hyderabad 500072",
    leadCarpenter: "Ustad Saleem Khan",
    experienceYears: 21,
    uniqueDescription: "Kukatpally is a central commercial and residential powerhouse in Hyderabad. Whether you live in high-rise residences like Lodha Bellezza near JNTU or classic independent floors around Vivekananda Nagar, our Kukatpally carpenters are equipped for every scale of woodwork. From fixing loose cupboard hinges to full kitchen cabinet refacing and antique furniture restoration, we provide guaranteed satisfaction.",
    localFaqs: [
      {
        question: "Do your Kukatpally carpenters carry spare hinges, handles, and tower bolts?",
        answer: "Yes, our carpenters carry genuine branded hardware (Hettich, Hafele, Godrej, Dorset) so minor repairs can be completed in a single visit without requiring you to visit hardware shops."
      },
      {
        question: "Can you dismantle and reassemble modular furniture during flat shifting in Kukatpally?",
        answer: "Yes, we specialize in disassembling king-size beds, 3-door wardrobes, and modular study tables, and rebuilding them securely in your new flat."
      }
    ]
  },
  {
    slug: "kphb",
    name: "KPHB Colony",
    pincode: "500085",
    zone: "West Hyderabad",
    landmarks: ["KPHB Phase 1 to Phase 9", "Temple Bus Stop", "Manjeera Trinity Mall", "Rythu Bazar KPHB", "Road No. 1"],
    popularSocieties: ["Manjeera Diamond Towers", "KPHB MIG Flats", "HIG Housing Society Phase 3", "Pranith Pranav Homes"],
    housingProfile: "High-density planned colony with MIG/HIG apartments, independent multi-tenant duplexes, and commercial workspaces.",
    commonIssues: [
      "Hydraulic wardrobe door hinge alignment",
      "Mesh mosquito net wooden frame installation on balcony windows",
      "Warped plywood drawer channels in rented flats",
      "Custom puja mandir wood carving and shelf mounting"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Temple Bus Stop, Road No. 1, KPHB Colony, Hyderabad 500085",
    leadCarpenter: "Satyanarayana Varma",
    experienceYears: 19,
    uniqueDescription: "KPHB Colony spans 9 massive phases and houses tens of thousands of working professionals and families. Our KPHB carpentry network is stationed strategically between Road No. 1 and Phase 7, ensuring rapid arrivals across all sectors. We handle everything from budget rental flat woodwork touch-ups to high-end modular interior modifications.",
    localFaqs: [
      {
        question: "Do you service all phases of KPHB Colony (Phase 1 to Phase 9)?",
        answer: "Yes, our technicians cover Phase 1 to Phase 9, Bhagyanagar Colony, and adjacent areas with 25-minute arrival times."
      },
      {
        question: "Can I get an emergency carpenter on Sunday in KPHB Colony?",
        answer: "Absolutely. We operate 7 days a week from 8:00 AM to 9:30 PM, including Sundays and public holidays."
      }
    ]
  },
  {
    slug: "gachibowli",
    name: "Gachibowli",
    pincode: "500032",
    zone: "West Hyderabad",
    landmarks: ["DLF Cybercity", "Gachibowli Stadium", "Telecom Nagar", "IIIT Junction", "Financial District Link Road"],
    popularSocieties: ["My Home Bhooja", "Aparna Sarovar", "Prestige High Fields", "Jayabheri Silicon County", "Golf View Apartments"],
    housingProfile: "Ultra-luxury high-rise gated communities and corporate tech professional residences with premium imported fittings.",
    commonIssues: [
      "Soft-close Hettich / Blum tandem box kitchen drawer repair",
      "Floor-to-ceiling glass sliding door wooden panel calibration",
      "Engineered wood & veneer polish touch-ups for scratch repair",
      "Concealed digital door lock installation on heavy flush doors"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Plot 18, Telecom Nagar, Near DLF Gate 3, Gachibowli, Hyderabad 500032",
    leadCarpenter: "Vikramaditya Rao",
    experienceYears: 15,
    uniqueDescription: "Gachibowli is the epicenter of Hyderabad's IT and financial corridor. High-rise living in communities like Prestige High Fields and Jayabheri requires carpenters trained in precision hardware like soft-close drawer slides, concealed hydraulic hinges, and engineered wood surfaces. Our Gachibowli carpenters are background-verified and gate-security compliant for seamless entry into premium societies.",
    localFaqs: [
      {
        question: "Are your carpenters verified for gated community security apps like MyGate / NoBrokerHood in Gachibowli?",
        answer: "Yes, all our carpenters carry government ID proofs and have active profiles for instant passcode approval at gated society security gates."
      },
      {
        question: "Can you fix German/Italian modular hardware (Hafele, Blum, Hettich) in Gachibowli?",
        answer: "Yes, our senior technicians are certified in European fittings, gas struts, flap stays, and concealed slide mechanisms."
      }
    ]
  },
  {
    slug: "kondapur",
    name: "Kondapur",
    pincode: "500084",
    zone: "West Hyderabad",
    landmarks: ["Hyderabad Botanical Garden", "Kothaguda Junction", "Harsha Hospital", "Raghvendra Colony", "Chirec School Road"],
    popularSocieties: ["My Home Mangala", "Aparna Serene Park", "Candeur 40", "Silpa Park", "Green Valley Society"],
    housingProfile: "Vibrant IT residential corridor dominated by 20-30 storey gated towers and modern builder floors.",
    commonIssues: [
      "Sliding balcony door lock jamming from dust accumulation",
      "Plywood delamination in modular sink cabinets",
      "Hydraulic gas lift replacement for double beds",
      "Soundproof rubber beading and wooden threshold installation"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Botanical Garden Main Road, Kondapur, Hyderabad 500084",
    leadCarpenter: "Mohammed Imran",
    experienceYears: 14,
    uniqueDescription: "Positioned right between Hitec City and Gachibowli, Kondapur is home to thousands of high-rise apartment owners. From My Home Mangala to Aparna Serene Park, we provide specialized repair services for imported modular kitchens, custom home office desks, and sliding wardrobes.",
    localFaqs: [
      {
        question: "Can your Kondapur carpenter fix water-damaged wood beneath the kitchen sink?",
        answer: "Yes. We replace rotten bottom ply with high-density moisture-resistant (HDMR) or waterproof marine ply and reseal the joints."
      }
    ]
  },
  {
    slug: "madhapur",
    name: "Madhapur",
    pincode: "500081",
    zone: "West Hyderabad",
    landmarks: ["Cyber Towers", "Durgam Cheruvu Cable Bridge", "Inorbit Mall", "Ayyappa Society", "Image Hospitals Road"],
    popularSocieties: ["NCC Urban Gardenia", "Aparna Heights", "Fresh Living Apartments", "Ayyappa Society Mega Enclave"],
    housingProfile: "Dense commercial and residential zone featuring modern apartments, studio flats, and boutique office spaces.",
    commonIssues: [
      "Office workstation desk dismantling, grommet hole cutting, and repair",
      "Main entrance lock repair & digital lock retrofit",
      "Door closer hydraulic fluid leak & adjustment",
      "Bookshelf and floating ledge heavy wall anchoring"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "100 Feet Road, Ayyappa Society, Madhapur, Hyderabad 500081",
    leadCarpenter: "Raju Mistri",
    experienceYears: 17,
    uniqueDescription: "Madhapur is Hyderabad's iconic tech destination. From 100 Feet Road to Ayyappa Society, we cater to tech professionals and homeowners who demand punctual, mess-free carpentry work. We use dust-controlled power tools and clean up completely after every repair.",
    localFaqs: [
      {
        question: "Do you repair office workstation furniture and conference tables in Madhapur?",
        answer: "Yes, we handle both commercial office repairs and residential home woodwork across Madhapur and Hitec City."
      }
    ]
  },
  {
    slug: "manikonda",
    name: "Manikonda",
    pincode: "500089",
    zone: "West Hyderabad",
    landmarks: ["Lanco Hills", "Puppalaguda Junction", "Secretariat Colony", "Shirdi Sai Baba Temple", "Alkapur Township"],
    popularSocieties: ["Lanco Hills Mega Towers", "Puppalaguda Golden Towers", "Alkapoor Township Enclave", "Anuhar Towers"],
    housingProfile: "Expanding family residential pocket with multi-tower mega townships and independent 3-floor residential buildings.",
    commonIssues: [
      "Modular cupboard hinge alignment after heavy child usage",
      "Wooden main gate latch and drop-bolt fitting",
      "Bathroom PVC and WPC door handle and lock repairs",
      "Custom wall panelling and acoustic wooden slats"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Lanco Hills Main Gate, Puppalaguda Road, Manikonda, Hyderabad 500089",
    leadCarpenter: "Balaji Chari",
    experienceYears: 18,
    uniqueDescription: "Manikonda has seen an explosion of modern apartment dwellers in Lanco Hills and Alkapur Township. Our dedicated Manikonda carpentry squad understands the structural needs of modern apartment woodwork, providing affordable rates and same-day turnaround.",
    localFaqs: [
      {
        question: "Are your carpenter rates transparent in Manikonda?",
        answer: "Yes, we provide upfront rate cards before starting any job. There are zero hidden costs or surprise charges."
      }
    ]
  },
  {
    slug: "nizampet",
    name: "Nizampet",
    pincode: "500090",
    zone: "West Hyderabad",
    landmarks: ["Nizampet Village X Roads", "Vertex Prestige", "Bandari Layout", "Kolanu Narayana Reddy Enclave"],
    popularSocieties: ["Vertex Pleasant", "Sri Sri Heights", "Vajra Jasmine County", "Nestcon Whispering Palms"],
    housingProfile: "High-density residential hub famous for affordable family apartments and builder floors.",
    commonIssues: [
      "Loose drawer runners and broken wooden dowels",
      "Bed storage hydraulic gas strut pressure replacement",
      "Balcony safety door wood frame repair",
      "Plywood shoe rack shelf modification"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Nizampet Road, Near Bandari Layout, Nizampet, Hyderabad 500090",
    leadCarpenter: "Gopal Krishna",
    experienceYears: 13,
    uniqueDescription: "From Nizampet Village to Bandari Layout, we are the go-to home carpentry repair service for over 1,800 families. We take pride in honest rates, genuine replacement screws and fittings, and clean workmanship.",
    localFaqs: [
      {
        question: "How much does it cost to fix hydraulic bed struts in Nizampet?",
        answer: "Strut replacement labor starts at ₹399, plus the cost of branded high-pressure gas springs (250N - 450N capacity) depending on your bed weight."
      }
    ]
  },
  {
    slug: "chandanagar",
    name: "Chandanagar",
    pincode: "500050",
    zone: "West Hyderabad",
    landmarks: ["Gangaram Cheruvu", "GSM Mall", "Chandanagar Railway Station", "BHEL Township Road", "PJR Enclave"],
    popularSocieties: ["Aparna CyberZon", "Aparna HillPark", "My Home Jewel", "SMR Vinay City BHEL"],
    housingProfile: "Established residential node connecting Miyapur to BHEL, hosting massive townships like My Home Jewel and Aparna HillPark.",
    commonIssues: [
      "Balcony sliding mosquito mesh wooden frame repair",
      "Teak wood front door lock and eye-hole installation",
      "Modular kitchen cutlery tray and telescopic channel repair",
      "Wooden sofa leg tightening and base slat reinforcement"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Opposite GSM Mall, Mumbai Highway, Chandanagar, Hyderabad 500050",
    leadCarpenter: "Hanumanth Rao",
    experienceYears: 20,
    uniqueDescription: "Serving landmark communities like My Home Jewel and Aparna CyberZon in Chandanagar, our seasoned carpenters provide comprehensive repairs for all brands of modular fittings, beds, dining tables, and teak wood entrance doors.",
    localFaqs: [
      {
        question: "Can you fix sliding wardrobe doors inside My Home Jewel or Aparna CyberZon?",
        answer: "Yes, our carpenters regularly service these societies and understand the specific ceiling-height sliding mechanisms used there."
      }
    ]
  },
  {
    slug: "secunderabad",
    name: "Secunderabad",
    pincode: "500003",
    zone: "Central Hyderabad",
    landmarks: ["Secunderabad Clock Tower", "Paradise Circle", "Secunderabad Railway Station", "RP Road", "Gymkhana Grounds"],
    popularSocieties: ["Marredpally Heritage Enclave", "Sindhi Colony Villas", "Sikh Village Residences", "Trimulgherry Officers Colony"],
    housingProfile: "Historic twin city with classic British-era bungalows, solid teak wood doors, antique furniture, and modern apartments.",
    commonIssues: [
      "Antique solid Burma teak wood furniture restoration and french polish",
      "Heavy traditional wooden door hinge realignment and mortise lock fitting",
      "Wooden staircase banister and balustrade repair",
      "Termite-damaged baseboard and door frame replacement"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Paradise Circle, MG Road, Secunderabad 500003",
    leadCarpenter: "Master Jagadishwar Chary",
    experienceYears: 24,
    uniqueDescription: "Secunderabad features classic architectural heritage alongside modern living. Homes across Marredpally, Sindhi Colony, and Trimulgherry often feature heavy solid wood doors and antique teak furniture requiring master artisanal care. Our senior carpenters have over two decades of experience with traditional joinery, dovetail joints, and hand-rubbed spirit polish.",
    localFaqs: [
      {
        question: "Can your Secunderabad carpenters restore 40-year-old solid teak wood dining sets?",
        answer: "Yes! We specialize in vintage wood restoration, structural regluing with waterproof resin, and premium PU or French spirit polish."
      }
    ]
  },
  {
    slug: "hitec-city",
    name: "Hitec City",
    pincode: "500081",
    zone: "West Hyderabad",
    landmarks: ["Mindspace IT Park", "Shilparamam", "Raheja Mindspace", "Knowledge City", "Cyber Gateway"],
    popularSocieties: ["My Home Bhooja", "Prestige Nirvana", "Salarpuria Sattva Magnificence", "DSR The First"],
    housingProfile: "Ultra-modern luxury high-rise communities with Italian veneer, acoustic wall cladding, and smart home automation fixtures.",
    commonIssues: [
      "Concealed pivot door alignment and damper adjustment",
      "Fluted wall panel install and LED cove wooden pelmet repair",
      "Walk-in wardrobe sensor light bracket and sliding channel repair",
      "Designer study desk cable organizer and grommet fitting"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Mindspace Road, Hitec City, Hyderabad 500081",
    leadCarpenter: "Arshad Hussain",
    experienceYears: 16,
    uniqueDescription: "Operating across Hitec City's premier towers and tech workspaces, our carpenters are trained in high-spec architectural woodwork, acoustic paneling, and luxury hardware like Blum, Salice, and Sugatsune.",
    localFaqs: [
      {
        question: "Do your carpenters wear shoe covers and maintain cleanliness inside high-end Hitec City apartments?",
        answer: "Yes, our team follows strict clean-work protocols: shoe covers, drop cloths to protect flooring, and complete vacuum clean-up after repair."
      }
    ]
  },
  {
    slug: "jubilee-hills",
    name: "Jubilee Hills",
    pincode: "500033",
    zone: "Central Hyderabad",
    landmarks: ["Road No. 36", "Jubilee Hills Checkpost", "Film Nagar", "KBR National Park", "Peddamma Temple"],
    popularSocieties: ["Jubilee Hills Co-op House Society", "Film Nagar Enclave", "Nandagiri Hills Villas", "Road No. 10 Mansions"],
    housingProfile: "Ultra-luxury independent bungalows, sprawling celebrity villas, and bespoke architectural residences.",
    commonIssues: [
      "Custom rosewood & teak wood carving restoration",
      "Heavy pivot main door bearing alignment (doors > 100 kg)",
      "High-gloss polyurethane (PU) polish maintenance",
      "Designer walk-in closet shelving re-engineering"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Peddamma Temple, Road No. 36, Jubilee Hills, Hyderabad 500033",
    leadCarpenter: "Ustad Nooruddin",
    experienceYears: 28,
    uniqueDescription: "In Jubilee Hills, carpentry is an art form. Our elite craftsmen cater to luxury residences, art galleries, and celebrity estates. We handle massive pivot doors, imported exotic timbers (Teak, Rosewood, Walnut, White Oak), and zero-defect mirror PU polishing.",
    localFaqs: [
      {
        question: "Do you have master carpenters capable of handling heavy designer pivot doors?",
        answer: "Yes, our Jubilee Hills master carpenters specialize in heavy-duty commercial pivot hinges with built-in hydraulic floor springs."
      }
    ]
  },
  {
    slug: "banjara-hills",
    name: "Banjara Hills",
    pincode: "500034",
    zone: "Central Hyderabad",
    landmarks: ["Road No. 12 Banjara Hills", "Care Hospital", "Taj Krishna", "City Center Mall", "KBR Park Road"],
    popularSocieties: ["Banjara Hills Road 10 Estates", "Hill Ridge Enclave", "Green Valley Banjara", "Aurora Colony"],
    housingProfile: "Prestigious hilly enclave of high-end apartments, boutique villas, and consulate residences.",
    commonIssues: [
      "Designer kitchen quartz-counter wood frame support reinforcement",
      "Luxury wardrobe sensor hinge wiring and soft-glide adjustment",
      "Solid timber deck polish and outdoor pergola wood waterproofing",
      "Antique armoire latch and secret drawer mechanism restoration"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Road No. 12, Banjara Hills, Hyderabad 500034",
    leadCarpenter: "Mohan Lal Suthar (Rajasthani Craftsman)",
    experienceYears: 25,
    uniqueDescription: "Banjara Hills boasts some of Hyderabad's most distinguished homes. Our Rajasthani master carpenters bring authentic woodcraft traditions combined with modern German fitting expertise to deliver unmatched repair excellence.",
    localFaqs: [
      {
        question: "Can your team polish outdoor wooden decks and pergolas in Banjara Hills?",
        answer: "Yes, we use exterior-grade polyurethane coatings and anti-fungal wood sealants that withstand Hyderabad's harsh sun and monsoon rains."
      }
    ]
  },
  {
    slug: "begumpet",
    name: "Begumpet",
    pincode: "500016",
    zone: "Central Hyderabad",
    landmarks: ["Begumpet Airport Road", "Prakash Nagar Metro", "Hyderabad Public School", "Lifestyle Building", "Mayur Marg"],
    popularSocieties: ["Prakash Nagar Colony", "Mayur Marg Apartments", "Kundanbagh Enclave", "Chikoti Gardens"],
    housingProfile: "Established urban locality with prominent 1990s-era apartment societies, modern towers, and commercial hubs.",
    commonIssues: [
      "Wooden window latch and stay rod replacement",
      "Old wardrobe laminate peeling and edge-banding repair",
      "Dining table structural shake and wobbly leg dowel repair",
      "Godrej rim lock replacement and master key fitting"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Prakash Nagar, Opposite Metro Pillar 1120, Begumpet, Hyderabad 500016",
    leadCarpenter: "Nageshwar Rao",
    experienceYears: 18,
    uniqueDescription: "Begumpet connects Hyderabad and Secunderabad. Our central repair hub here provides rapid emergency dispatch within 20 minutes across Chikoti Gardens, Prakash Nagar, and Kundanbagh for lockouts, door jams, and kitchen repairs.",
    localFaqs: [
      {
        question: "Do you offer emergency lock-breaking and replacement in Begumpet?",
        answer: "Yes, our carpenters can arrive within 20-30 minutes for emergency locked bedroom or main door openings without damaging your wooden frame."
      }
    ]
  },
  {
    slug: "mehdipatnam",
    name: "Mehdipatnam",
    pincode: "500028",
    zone: "South Hyderabad",
    landmarks: ["Mehdipatnam Rythu Bazar", "Sarojini Devi Eye Hospital", "Pillar 45 PVNR Expressway", "Gudimalkapur Flower Market"],
    popularSocieties: ["Santam Colony", "Amba Gardens", "Royal Colony", "Humayun Nagar Enclave"],
    housingProfile: "Bustling central junction with dense multi-family residential buildings and bustling commercial markets.",
    commonIssues: [
      "Commercial shop display rack and glass-wood showcase repair",
      "Main door Godrej mortise lock replacement",
      "Kitchen loft wooden cupboard door installation",
      "Plywood bed bottom reinforcement after sag"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Pillar 45, PVNR Expressway, Mehdipatnam, Hyderabad 500028",
    leadCarpenter: "Syed Khaja Moinuddin",
    experienceYears: 22,
    uniqueDescription: "Serving Mehdipatnam, Humayun Nagar, and Gudimalkapur, our carpenters have deep expertise in heavy-load domestic furniture, custom shop fittings, and prompt home maintenance.",
    localFaqs: [
      {
        question: "Can you reinforce sagging plywood under double bed mattresses in Mehdipatnam?",
        answer: "Yes, we install heavy-duty 18mm boiling waterproof (BWP) plywood supports and center pine battens to eliminate sagging permanently."
      }
    ]
  },
  {
    slug: "attapur",
    name: "Attapur",
    pincode: "500048",
    zone: "South Hyderabad",
    landmarks: ["Pillar 140 PVNR Expressway", "Hyderguda Attapur", "Mushk Mahal", "Happy Homes", "Janachaitanya Colony"],
    popularSocieties: ["Happy Homes Grandeur", "Silpa Valley Attapur", "Prestige Nirvana Link", "Golden Palms"],
    housingProfile: "Fast-developing residential belt along the airport expressway with large apartment communities.",
    commonIssues: [
      "Curtain rod bracket pull-out from hollow brick walls",
      "Wooden kitchen cabinet moisture damage near water purifiers",
      "Shoe cabinet ventilator louvre wood repair",
      "Balcony safety door lock and stopper installation"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "PVNR Pillar 142, Hyderguda Main Road, Attapur, Hyderabad 500048",
    leadCarpenter: "K. Venkatesh",
    experienceYears: 15,
    uniqueDescription: "Attapur is an important residential corridor connecting Banjara Hills to the Shamshabad airport route. Our Attapur team offers quick 30-minute doorstep service across all PVNR expressway pillars from Pillar 110 to Pillar 190.",
    localFaqs: [
      {
        question: "Do you service Happy Homes and surrounding gated communities in Attapur?",
        answer: "Yes, our team is stationed right near Pillar 140 and reaches Happy Homes within 15-20 minutes."
      }
    ]
  },
  {
    slug: "uppal",
    name: "Uppal",
    pincode: "500039",
    zone: "East Hyderabad",
    landmarks: ["Rajiv Gandhi International Cricket Stadium", "Uppal Metro Station", "Nagole X Roads", "Survey of India"],
    popularSocieties: ["Kalyanpuri Colony", "Hema Nagar Enclave", "Kakatiya Nagar", "Swaroop Nagar Flats"],
    housingProfile: "Major East Hyderabad hub with independent family houses, cricket stadium zone flats, and educational society housing.",
    commonIssues: [
      "Heavy timber front door swelling and realignment",
      "Steel & wood study table fabrication and repair",
      "False ceiling wooden cove framework repair",
      "Wooden temple/mandir installation on walls"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Opposite Uppal Metro Station, Main Road, Uppal, Hyderabad 500039",
    leadCarpenter: "P. Ravinder Reddy",
    experienceYears: 17,
    uniqueDescription: "Uppal represents East Hyderabad's vibrant residential community. From Kalyanpuri to Nagole ring road, we provide skilled carpentry with transparent rates, zero travel surcharges, and a 30-day warranty.",
    localFaqs: [
      {
        question: "Do you install wooden pooja mandirs securely on walls in Uppal homes?",
        answer: "Yes, we use heavy anchor bolts and spirit-level alignment to securely mount teak or engineered wood pooja mandirs."
      }
    ]
  },
  {
    slug: "dilsukhnagar",
    name: "Dilsukhnagar",
    pincode: "500060",
    zone: "East Hyderabad",
    landmarks: ["Konark Theatre", "Dilsukhnagar Bus Depot", "Sai Baba Temple Dilsukhnagar", "Chaitanyapuri Metro", "Gaddi Annaram"],
    popularSocieties: ["Kamala Nagar Society", "Maruthi Nagar Colony", "Prabhat Nagar Flats", "Shiva Ganga Colony"],
    housingProfile: "High-density residential and retail zone with legacy family apartments and multi-storey independent buildings.",
    commonIssues: [
      "Wooden shutter hinge snapping and screw hole re-plugging",
      "Sofa wooden frame squeaking and bottom spring webbing repair",
      "Dressing table mirror frame fixing and drawer lock fitting",
      "Termite chemical treatment in skirting and wooden door frames"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Sai Baba Temple, Main Road, Dilsukhnagar, Hyderabad 500060",
    leadCarpenter: "Srinivas Achary",
    experienceYears: 23,
    uniqueDescription: "Dilsukhnagar is one of Hyderabad's most established residential markets. Our skilled local carpenters have served thousands of households across Kamala Nagar, Chaitanyapuri, and Gaddiannaram for over a decade.",
    localFaqs: [
      {
        question: "How do you fix stripped screw holes in wooden doors in Dilsukhnagar?",
        answer: "We drill out the stripped hole, insert seasoned hardwood dowels with waterproof polyvinyl adhesive, and refit with heavy gauge screws for life-long grip."
      }
    ]
  },
  {
    slug: "lb-nagar",
    name: "LB Nagar",
    pincode: "500074",
    zone: "East Hyderabad",
    landmarks: ["LB Nagar Ring Road Circle", "Kamineni Hospital", "Chintalkunta Checkpost", "Victoria Memorial Home", "Mansoorabad Road"],
    popularSocieties: ["Alkapuri Colony", "Snehapuri Colony", "Rock Town Colony", "Vanasthalipuram Phase 1"],
    housingProfile: "Sprawling South-East gateway featuring planned colonies, residential colonies, and rapid apartment construction.",
    commonIssues: [
      "Modular kitchen trolley alignment and bottom runner replacement",
      "Sliding glass balcony window wooden frame sealing",
      "King-size box bed storage partition fitting",
      "Bathroom door bottom rotting repair with water-resistant PVC beading"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Kamineni Hospital, Inner Ring Road, LB Nagar, Hyderabad 500074",
    leadCarpenter: "Mallikarjun Chary",
    experienceYears: 19,
    uniqueDescription: "Covering LB Nagar, Vanasthalipuram, and Mansoorabad, our carpenter fleet arrives equipped with heavy-duty power drills, sanders, and branded hardware to resolve household woodwork issues on the spot.",
    localFaqs: [
      {
        question: "Can your LB Nagar carpenters repair water-damaged bathroom door bottoms?",
        answer: "Yes, we cut away the rotten wooden bottom, treat the core with anti-fungal sealant, and bond a waterproof PVC/WPC bottom guard."
      }
    ]
  },
  {
    slug: "kompally",
    name: "Kompally",
    pincode: "500014",
    zone: "North Hyderabad",
    landmarks: ["Cine Planet Kompally", "Suchitra Circle", "Dhola-ri-Dhani Road", "Medchal Highway", "Jayabheri The Peak"],
    popularSocieties: ["Aparna Kanpy", "Modi Paramount Avenue", "Jayabheri Silicon Valley Kompally", "Amrutha Hills"],
    housingProfile: "Green suburban North corridor with premium gated villa communities, luxury duplexes, and quiet residential layouts.",
    commonIssues: [
      "Villa wooden deck weather-proofing and wood stain application",
      "Grand double-door entrance alignment and brass latch fitting",
      "Staircase wooden riser and handrail tightening",
      "Custom outdoor wooden garden swing (jhoola) chain and hook installation"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Cine Planet, Medchal Highway, Kompally, Hyderabad 500014",
    leadCarpenter: "Shravan Kumar",
    experienceYears: 16,
    uniqueDescription: "Kompally is known for its spacious gated villas and high-end residential complexes. Our Kompally team specializes in large-format woodwork: villa entrance doors, outdoor wooden pergolas, swings, and custom cabinetry.",
    localFaqs: [
      {
        question: "Do you install wooden jhoolas (swings) securely into concrete ceilings in Kompally villas?",
        answer: "Yes, we use 12mm forged steel anchor bolts rated for 400+ kg loads with ball-bearing hooks to prevent squeaking."
      }
    ]
  },
  {
    slug: "sainikpuri",
    name: "Sainikpuri",
    pincode: "500094",
    zone: "North Hyderabad",
    landmarks: ["A.S. Rao Nagar Main Road", "Defence Colony Sainikpuri", "Kapra Lake Road", "Radhika Theatre", "ECIL X Roads"],
    popularSocieties: ["Defence Officers Colony", "Vayupuri Housing Society", "Rukminipuri Colony", "Dr. A.S. Rao Nagar Enclave"],
    housingProfile: "Quiet, leafy cantonment residential belt with independent retired defence officers' bungalows and modern apartments.",
    commonIssues: [
      "Solid rosewood and teak bookshelf customization",
      "Old wooden mesh window replacement with stainless steel insect mesh",
      "Door latch alignment after seasonal foundation settlement",
      "Dining chair joint regluing and cushion board replacement"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Defence Colony Bus Stop, Sainikpuri, Secunderabad 500094",
    leadCarpenter: "Major B. S. Rawat (Ex-Servicemen Workshop Lead)",
    experienceYears: 26,
    uniqueDescription: "Sainikpuri and A.S. Rao Nagar have a rich tradition of well-maintained homes with classic wooden aesthetics. Our seasoned craftsmen deliver meticulous, respectful in-home service with special senior citizen discounts.",
    localFaqs: [
      {
        question: "Do you provide senior citizen assistance and discounts in Sainikpuri?",
        answer: "Yes, we offer a flat 10% discount on labor charges for senior citizens and retired defence personnel in Sainikpuri and Defence Colony."
      }
    ]
  },
  {
    slug: "tolichowki",
    name: "Tolichowki",
    pincode: "500008",
    zone: "South Hyderabad",
    landmarks: ["Galaxy Theatre", "Seven Tombs Road", "Rethi Bowli Junction", "Paramount Colony", "Shaikpet Flyover"],
    popularSocieties: ["Paramount Hills", "Samata Colony", "Al-Hasnath Colony", "Shaikpet Oasis"],
    housingProfile: "Vibrant residential district with large family homes, multistory apartments, and close proximity to Hitec City.",
    commonIssues: [
      "Heavy royal teak wood headboard mounting and repair",
      "Sliding 4-door wardrobe heavy track realignment",
      "Kitchen island counter carpentry adjustments",
      "Glass panel wooden showcase hinge replacement"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Galaxy Theatre, Seven Tombs Road, Tolichowki, Hyderabad 500008",
    leadCarpenter: "Mirza Farooq Baig",
    experienceYears: 21,
    uniqueDescription: "Serving Tolichowki, Paramount Colony, and Shaikpet, our carpentry crew is celebrated for punctuality and deep craftsmanship in heavy bedroom sets, intricate wooden work, and kitchen cabinetry.",
    localFaqs: [
      {
        question: "Can your carpenters fix 4-door sliding wardrobe doors that came off their track in Tolichowki?",
        answer: "Yes, we inspect the top guide rollers, level the bottom brass/aluminum track, and replace worn nylon rollers on the spot."
      }
    ]
  },
  {
    slug: "hafeezpet",
    name: "Hafeezpet",
    pincode: "500049",
    zone: "West Hyderabad",
    landmarks: ["Aditya Imperial Heights", "Hafeezpet MMTS Flyover", "Silpa Valley", "Kondapur Link Road", "Mathrusree Nagar"],
    popularSocieties: ["Aditya Imperial Heights", "Vensa Aspire", "Green Homes Hafeezpet", "My Home Jewel Link"],
    housingProfile: "Strategic transit pocket connecting Miyapur to Gachibowli with massive multi-tower residential societies.",
    commonIssues: [
      "Apartment fire door closer tension adjustment",
      "Warped kitchen cabinet shutter hinge replacement",
      "Curtain channel track ceiling drilling into pre-stressed concrete",
      "L-shaped wooden study desk installation"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Aditya Imperial Heights, Hafeezpet Main Road, Hyderabad 500049",
    leadCarpenter: "Surender Chary",
    experienceYears: 14,
    uniqueDescription: "Hafeezpet's high-rise communities like Aditya Imperial Heights require carpenters with specific experience in pre-stressed concrete drilling and modular soft-close cabinet maintenance. We arrive on time with industrial vacuum attachments.",
    localFaqs: [
      {
        question: "Can you drill into tough concrete ceilings for heavy curtain tracks in Hafeezpet?",
        answer: "Yes, we use professional rotary hammer drills with SDS-plus bits that anchor cleanly without cracking surrounding plaster."
      }
    ]
  },
  {
    slug: "bachupally",
    name: "Bachupally",
    pincode: "500090",
    zone: "North Hyderabad",
    landmarks: ["Silver Oaks School", "Pragathi Nagar Lake", "Mallampet Road", "Bollaram Industrial Road", "VNR VJIET"],
    popularSocieties: ["Risinia Trendilla", "Praneeth Pranav Antilia", "Aparna Western Meadows", "Karthikeya Enclave"],
    housingProfile: "Rapidly booming educational and residential hub with brand-new gated high-rises and villa townships.",
    commonIssues: [
      "New apartment move-in woodwork: curtain rods, mirrors, key holders, towel racks",
      "Children's bunk bed assembly and safety guard-rail reinforcement",
      "Balcony pigeon-net wooden frame mounting",
      "Modular wardrobe locker lock installation"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Silver Oaks School, Bachupally Main Road, Hyderabad 500090",
    leadCarpenter: "G. Mahesh Chari",
    experienceYears: 15,
    uniqueDescription: "Bachupally is the preferred destination for young tech families moving into new flats. We specialize in complete move-in carpentry packages: assembling flat-pack furniture (IKEA, Pepperfry and online brands), mounting art, and fitting locks.",
    localFaqs: [
      {
        question: "Do you assemble IKEA or online flat-pack furniture in Bachupally?",
        answer: "Yes, our carpenters assemble all IKEA, Pepperfry, and Amazon furniture with 100% precision following manual blueprints."
      }
    ]
  },
  {
    slug: "nallagandla",
    name: "Nallagandla",
    pincode: "500019",
    zone: "West Hyderabad",
    landmarks: ["Aparna Sarovar Grande", "Citizens Hospital", "Tellapur Link Road", "Nallagandla Flyover", "Huda Layout Nallagandla"],
    popularSocieties: ["Aparna Sarovar Zenith", "Aparna CyberLife", "Aparna Sarovar", "Ramky One Marvel"],
    housingProfile: "Premium high-density gated township ecosystem with elite IT crowd living in multi-tower campuses.",
    commonIssues: [
      "Concealed hydraulic floor hinge adjustment on glass/wood doors",
      "Modular kitchen tandem box drawer alignment",
      "Balcony wooden decking maintenance",
      "Engineered wooden flooring board clicking repair"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Opposite Citizens Hospital Road, Nallagandla, Serilingampally, Hyderabad 500019",
    leadCarpenter: "Prashanth Kumar",
    experienceYears: 16,
    uniqueDescription: "Home to the famous Aparna Sarovar mega cluster and Citizens Hospital corridor, Nallagandla demands top-tier carpentry precision. Our carpenters are verified on society resident portals and bring high-grade German hardware components.",
    localFaqs: [
      {
        question: "How fast can you reach Aparna Sarovar or Aparna CyberLife in Nallagandla?",
        answer: "Our technicians are stationed right on the Nallagandla flyover road and reach within 20 minutes."
      }
    ]
  },
  {
    slug: "osman-nagar",
    name: "Osman Nagar",
    pincode: "500036",
    zone: "West Hyderabad",
    landmarks: ["Tellapur Road", "Tellapur Railway Station", "Gopanapalli Thanda", "Srija Hospital", "American Oncology Institute", "Epistemo Vikas School Road"],
    popularSocieties: ["Aparna Cyber4", "Muppa Melody", "Vasavi Atlantis Corridor", "Triad Greens", "Urbanrise On Cloud 33"],
    housingProfile: "Ultra-modern high-rise gated communities, premium tech worker townships, and luxury villas connecting Gachibowli to Kollur.",
    commonIssues: [
      "Modular sliding wardrobe channel misalignment in new multi-story towers",
      "Heavy main door concealed hinge creaking and floor scraping",
      "Hydraulic gas pump fitting for king size storage beds",
      "Digital smart lock installation on engineered teak entrance doors"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Shop 12, Opposite Tellapur Link Road, Osman Nagar, Hyderabad 500036",
    leadCarpenter: "Suresh Sharma (Senior Joiner)",
    experienceYears: 16,
    uniqueDescription: "Osman Nagar is one of West Hyderabad's most active high-rise residential growth pockets, situated right beside the Tellapur-Gopanpally IT corridor. High-density gated towers like Aparna Cyber4 and Muppa Melody feature modern engineered wood, pre-hung flush doors, and heavy sliding wardrobes. Our local Osman Nagar carpenter team provides rapid 30-minute doorstep service equipped with genuine Hettich, Godrej, and Hafele hardware.",
    localFaqs: [
      {
        question: "How fast can a carpenter arrive at Aparna Cyber4 or Muppa Melody in Osman Nagar?",
        answer: "Our local dispatch hub is located right on the Tellapur Link Road in Osman Nagar, guaranteeing arrival within 25 to 35 minutes for urgent repairs."
      },
      {
        question: "Do you install biometric smart locks on new apartment doors in Osman Nagar?",
        answer: "Yes, we specialize in precision mortise pocket chiseling and smart lock installation for Yale, Godrej, and Samsung biometric locks on main doors."
      }
    ]
  },
  {
    slug: "ameenpur",
    name: "Ameenpur",
    pincode: "502032",
    zone: "West Hyderabad",
    landmarks: ["Ameenpur Lake (Cheruvu)", "Miyapur Metro Link Road", "GSM Mall Road", "BHEL Circle", "Silver Oaks Road", "HMT Colony Ameenpur"],
    popularSocieties: ["Urbanrise Spring Is In The Air", "Sunway Opus Grand Neville", "Mcor Vilaasam", "Empire Meadows", "Muppa Lahari Green Park"],
    housingProfile: "Vast lakefront residential townships, modern gated high-rises, and sprawling independent duplex colonies near Miyapur and Chandanagar.",
    commonIssues: [
      "Swelling and sticking of wooden bathroom and balcony flush doors due to lake humidity",
      "Modular kitchen tandem box drawer channel roller friction",
      "Bedroom wardrobe soft-close hinge replacement and alignment",
      "Sliding mosquito mesh and balcony door track cleaning and realignment"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Ameenpur Cheruvu Main Road, Ameenpur Municipality, Hyderabad 502032",
    leadCarpenter: "Mohan Rao (Master Woodcraftsman)",
    experienceYears: 18,
    uniqueDescription: "Ameenpur is celebrated for India's first urban Biodiversity Heritage Site, Ameenpur Lake. The microclimate around the lake causes seasonal humidity, frequently leading to swollen wooden doors that scrape tile floors or stick in frames. Our dedicated Ameenpur carpenter hub specializes in electric planing, moisture-resistant sealing, soft-close hardware upgrades, and wardrobe sliding track servicing.",
    localFaqs: [
      {
        question: "Why do wooden doors swell and scrape the floor in Ameenpur apartments?",
        answer: "Due to proximity to Ameenpur Lake, ambient moisture causes seasonal wood expansion. We plane the door bottom, sand the edges, and adjust hinges for a smooth swing."
      },
      {
        question: "Can you fix sliding wardrobe wheels in Urbanrise or Sunway Opus in Ameenpur?",
        answer: "Yes, our carpenters carry heavy-duty nylon ball-bearing rollers and aluminum track replacements to fix stuck or jumping sliding doors."
      }
    ]
  },
  {
    slug: "tellapur",
    name: "Tellapur",
    pincode: "502032",
    zone: "West Hyderabad",
    landmarks: ["Tellapur Railway Station", "Outer Ring Road (Exit 2)", "Citizens Specialty Hospital", "Gopanpally Junction", "Manthan International School", "Nallagandla Flyover Link"],
    popularSocieties: ["My Home Sayuk", "Aparna Sarovar Zenith", "Godrej Touch", "Fortune Green Homes", "Vision Arsha", "Mayfair Villas"],
    housingProfile: "Premium mega-scale high-rise gated communities and luxury villa enclaves housing thousands of IT executives working in Financial District and Gachibowli.",
    commonIssues: [
      "Heavy floor-to-ceiling sliding wardrobe channel derailment and wheel wear",
      "Imported modular kitchen soft-close hydraulic hinge adjustments",
      "Digital biometric mortise lock chiseling and master fitting",
      "Balcony deck wood refurbishment and waterproof polishing"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Central Commercial Plaza, Near Railway Station Road, Tellapur, Hyderabad 502032",
    leadCarpenter: "K. Narayana Swamy (Senior Joiner)",
    experienceYears: 19,
    uniqueDescription: "Tellapur is one of Hyderabad's fastest emerging residential hubs, favored by tech professionals for its seamless ORR connectivity to the Financial District and Gachibowli. Gated mega-projects like My Home Sayuk and Aparna Sarovar Zenith demand top-tier craftsmanship for imported modular fittings and architectural woodwork. Our Tellapur carpenter hub arrives in 25 minutes with industrial dust extraction and genuine hardware.",
    localFaqs: [
      {
        question: "How fast is carpenter dispatch to My Home Sayuk or Godrej Touch in Tellapur?",
        answer: "Our technicians operate directly out of Tellapur central hub, reaching any society in Tellapur within 20 to 30 minutes with full hardware kits."
      },
      {
        question: "Do your carpenters service high-end German and Austrian modular fittings in Tellapur?",
        answer: "Yes, our master craftsmen are trained in adjusting and replacing Hettich, Hafele, and Ebco concealed hinges, tandem runners, and lift-up flaps."
      }
    ]
  },
  {
    slug: "tellapur-thanda",
    name: "Tellapur Thanda",
    pincode: "502032",
    zone: "West Hyderabad",
    landmarks: ["Tellapur Thanda Chowrasta", "Tellapur-Gopanpally Link Road", "Gopanpally Forest Boundary", "Wipro Circle Link", "Manthan School Road"],
    popularSocieties: ["Tellapur Green View Enclave", "Sri Balaji Township", "Aparna Green Meadows", "Suraj Residency", "Siddhivinayak Enclave"],
    housingProfile: "Fast-developing residential belt with standalone apartments, residential layouts, and independent houses bordering Gopanpally and Tellapur.",
    commonIssues: [
      "Main door lock repair and new Godrej double lock fitting",
      "Wooden door frame swelling and floor scrape planing",
      "Wall shelf, curtain rod, and heavy mirror mounting",
      "Plywood wardrobe hinge screw hole stripping and hardwood plug re-anchoring"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Main Road Chowrasta, Tellapur Thanda, Hyderabad 502032",
    leadCarpenter: "Raju Rathod (Craftsman)",
    experienceYears: 13,
    uniqueDescription: "Tellapur Thanda connects the tranquil residential pockets of Tellapur with the bustling Gopanpally tech road. Our carpenter team in Tellapur Thanda offers reliable, affordable doorstep service for routine household woodwork repairs, lock changes, door planing, and sturdy shelf installations.",
    localFaqs: [
      {
        question: "Do you provide urgent lock change service in Tellapur Thanda?",
        answer: "Yes, we dispatch a certified carpenter within 30 minutes with genuine Godrej and Europa locks for immediate door lock replacement."
      }
    ]
  },
  {
    slug: "ilapur-thanda",
    name: "Ilapur Thanda",
    pincode: "502319",
    zone: "West Hyderabad",
    landmarks: ["Ameenpur Police Station Zone", "Beeramguda Link Road", "Bollaram Industrial Highway", "Patancheru ORR Bypass"],
    popularSocieties: ["Ilapur Green Meadows", "Sree Venkateshwara Enclave", "Sai Teja Residency", "Bhavani Nagar Colony"],
    housingProfile: "Expanding suburban residential colony situated between Ameenpur and Patancheru, featuring independent houses and low-rise apartments.",
    commonIssues: [
      "Loose door hinges and stripped wooden screw holes",
      "Sliding window track jamming and mosquito mesh screen replacement",
      "Kitchen cabinet door realignment and magnetic catch installation",
      "Wooden cot and dining table joint reinforcement"
    ],
    responseTime: "30 - 40 mins",
    localHubAddress: "Opposite Gram Panchayat Road, Ilapur Thanda, Hyderabad 502319",
    leadCarpenter: "P. Satyanarayana (Craftsman)",
    experienceYears: 15,
    uniqueDescription: "Ilapur Thanda is a rapidly expanding locality in the Ameenpur-Patancheru zone. Homeowners and tenants in Ilapur Thanda rely on our experienced carpenters for prompt, transparent repairs on bedroom wardrobes, kitchen cabinets, and swollen wooden doors with upfront pricing.",
    localFaqs: [
      {
        question: "Can I get carpentry work done on weekends in Ilapur Thanda?",
        answer: "Yes, our carpenters operate 7 days a week from 8:00 AM to 9:30 PM across Ilapur Thanda and surrounding areas."
      }
    ]
  },
  {
    slug: "pragathi-nagar",
    name: "Pragathi Nagar",
    pincode: "500090",
    zone: "North Hyderabad",
    landmarks: ["Pragathi Nagar Lake (Karemma Cheruvu)", "JNTU College Metro Road", "Pragathi Central School", "Aleap Industrial Estate Link", "Kukatpally Y Junction Link"],
    popularSocieties: ["Ramky One Harmony", "Merlion Galaxia", "Risinia The Edge", "Rudhra Hasthina", "Panchavati Apartments", "Pragathi Greenwoods"],
    housingProfile: "Dense, vibrant residential neighborhood populated heavily by IT professionals, featuring large gated communities, standalone apartments, and family colonies.",
    commonIssues: [
      "Lake air humidity causing wardrobe and bedroom doors to scrape tiled floors",
      "Heavy sliding wardrobe door nylon roller wheel wear",
      "Godrej mortise lock latch sticking and key cylinder jamming",
      "Modular kitchen tandem box drawer alignment and soft-close channel replacement"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Near Pragathi Central School, Main Road, Pragathi Nagar, Hyderabad 500090",
    leadCarpenter: "Venkat Rao (Master Carpenter)",
    experienceYears: 17,
    uniqueDescription: "Pragathi Nagar is one of North-West Hyderabad's most sought-after residential localities, situated right next to Kukatpally and JNTU. High-density gated towers such as Ramky One Harmony and Merlion Galaxia house busy IT families who require quick, professional carpentry assistance. Our local hub reaches any society in Pragathi Nagar in 20-30 minutes with genuine replacement parts and upfront pricing.",
    localFaqs: [
      {
        question: "How fast can your carpenter reach Ramky One Harmony or Merlion Galaxia in Pragathi Nagar?",
        answer: "Our Pragathi Nagar carpenter dispatch hub is positioned near Pragathi Central School, reaching both societies within 20 to 30 minutes."
      },
      {
        question: "Do you repair jammed sliding wardrobe doors in Pragathi Nagar apartments?",
        answer: "Yes, we replace worn-out rollers, clean and lubricate tracks, and adjust soft-close dampers so your wardrobe doors slide effortlessly."
      }
    ]
  },
  {
    slug: "financial-district",
    name: "Financial District",
    pincode: "500032",
    zone: "West Hyderabad",
    landmarks: ["WaveRock IT Park", "Continental Hospital", "One Golf Edge", "Nehru Outer Ring Road (Exit 19)", "US Consulate General", "ICICI Regional Headquarters"],
    popularSocieties: ["Sumadhura The Olympus", "Vasavi Atlantis", "Prestige High Fields", "ASBL Broadway", "Lumbini Elysee", "Jayabheri Silicon County"],
    housingProfile: "Ultra-luxury skyscraper residential towers, corporate penthouses, and executive apartments with high-end designer woodwork and imported European hardware.",
    commonIssues: [
      "Precision alignment for concealed European cabinet hinges (Blum, Hafele, Hettich)",
      "Swollen solid teak and engineered veneer entrance door planing",
      "High-rise wind draft resistance calibration for heavy sliding balcony glass doors",
      "Biometric smart lock mortising and electronic access panel installation"
    ],
    responseTime: "20 - 30 mins",
    localHubAddress: "Tower 2 Commercial Concourse, Nanakramguda, Financial District, Hyderabad 500032",
    leadCarpenter: "Jagdish Sharma (Master Joiner & Architectural Hardware Specialist)",
    experienceYears: 20,
    uniqueDescription: "The Financial District is Hyderabad's global corporate and luxury living epicentre, home to soaring skyscraper residences like Sumadhura The Olympus, Vasavi Atlantis, and Prestige High Fields. These elite homes feature state-of-the-art Italian modular kitchens, precision sliding wardrobes, and acoustic wooden main doors. Our Financial District carpenters are certified in premium architectural hardware, arriving on time with clean dust sheets and precision toolkits.",
    localFaqs: [
      {
        question: "Are your carpenters trained to work on luxury branded kitchens in Financial District?",
        answer: "Yes, our senior joiners have extensive experience with Blum, Hafele, Hettich, and Ebco architectural fittings used in high-end Financial District residences."
      },
      {
        question: "Can you fix heavy sliding balcony doors that rattle in high-rise wind drafts in Nanakramguda?",
        answer: "Yes, we install heavy-duty dual-bearing brass rollers, weatherstrip wool piles, and multi-point locks to eliminate wind rattling and smooth out movement."
      }
    ]
  },
  {
    slug: "narsingi",
    name: "Narsingi",
    pincode: "500075",
    zone: "West Hyderabad",
    landmarks: ["Nehru Outer Ring Road (ORR) Junction", "Khajaguda Hills Road", "Neknampur Lake", "Vasavi Atlantis Corridor", "Kokapet Rotary Link", "Taramati Baradari Road"],
    popularSocieties: ["My Home Avatar", "Rajapushpa Provincia", "Lansum El Dorado", "Hallmark Skyrena", "ASBL Spectra", "NCC Urban One"],
    housingProfile: "Massive gated township corridor housing tens of thousands of IT professionals in 30+ story high-rise residential towers and luxury villa enclaves.",
    commonIssues: [
      "Heavy 3-track sliding balcony door roller jamming due to high-rise air pressure",
      "Soft-close wardrobe channel replacement and door damper tuning",
      "Swelling of wooden flush doors near utility balconies during monsoon",
      "Modular kitchen crockery unit hinge alignment and shelf reinforcement"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Service Road Junction, Opposite ORR Exit, Narsingi Municipality, Hyderabad 500075",
    leadCarpenter: "B. Srinivas (Senior Craftsman)",
    experienceYears: 17,
    uniqueDescription: "Narsingi is the prime residential belt linking Kokapet, Gandipet, and the Financial District. Gated mega-communities like My Home Avatar (housing over 2,800 families) and Rajapushpa Provincia require rapid, dependable carpentry service. Our Narsingi carpenters are stationed locally, providing prompt 30-minute doorstep service for door planing, wardrobe repairs, lock fittings, and custom shelf installation.",
    localFaqs: [
      {
        question: "How quickly can a carpenter arrive at My Home Avatar or Rajapushpa Provincia in Narsingi?",
        answer: "Our local Narsingi dispatch hub is situated right off the ORR service road, reaching My Home Avatar and surrounding societies within 25 to 35 minutes."
      },
      {
        question: "Do you install wooden safety doors for apartments in Narsingi?",
        answer: "Yes, we design, fabricate, and install heavy teakwood and flush safety grill doors with multi-lever locks and heavy stainless steel hinges."
      }
    ]
  },
  {
    slug: "nigampally",
    name: "Nigampally",
    pincode: "500050",
    zone: "West Hyderabad",
    landmarks: ["Chandanagar Main Road", "Lingampally Railway Station", "Miyapur-Chandanagar Link", "BHEL Township Gate", "Gangaram Cheruvu", "HUDA Colony Chandanagar"],
    popularSocieties: ["Sri Sai Ram Residency", "Nigampally Heights", "Chandanagar Green View", "Venkateshwara Enclave", "Padmavathi Nilayam"],
    housingProfile: "Established residential enclave situated between Chandanagar, Miyapur, and Lingampally, featuring standalone apartments and independent family homes.",
    commonIssues: [
      "Loose wooden door hinges and stripped screw holes in plywood frames",
      "Cupboard sliding door track cleaning and ball-bearing wheel replacement",
      "Main door Godrej rim latch and cylinder lock installation",
      "Dining table, wooden cot, and chair joint gluing and corner bracket reinforcement"
    ],
    responseTime: "25 - 35 mins",
    localHubAddress: "Near Chandanagar-Nigampally Main Road, Hyderabad 500050",
    leadCarpenter: "K. Ramesh (Senior Carpenter)",
    experienceYears: 16,
    uniqueDescription: "Nigampally is a peaceful, well-connected residential pocket nestled between Chandanagar and Serilingampally. Residents frequently require dependable neighborhood carpentry service for fixing creaking doors, replacing wardrobe hinges, fitting bedroom locks, and repairing wooden furniture. Our local Nigampally carpenters provide quick 30-minute doorstep visits with transparent upfront rates.",
    localFaqs: [
      {
        question: "Do your carpenters fix stripped screw holes in loose door frames in Nigampally?",
        answer: "Yes, we re-plug stripped screw holes with seasoned hardwood dowels and drive heavy-duty screws so the hinges hold firmly without wobbling."
      }
    ]
  },
  {
    slug: "patancheru",
    name: "Patancheru",
    pincode: "502319",
    zone: "West Hyderabad",
    landmarks: ["NH-65 Mumbai Highway", "ICRISAT Campus", "Patancheru Bus Terminus", "Saki Lake", "Gaddar Statue Chowrasta", "Amin Khan Tomb", "Gitam University Link"],
    popularSocieties: ["Sansa County", "Devashree Township", "Indresham Gated Enclaves", "Beeramguda Villa Corridor", "Navya Tulasi Gardens", "Chitkul Gated Layouts"],
    housingProfile: "Major industrial and residential suburb along NH-65 with vast gated villa townships, new high-rise residential layouts, and independent colonies.",
    commonIssues: [
      "Highway dust accumulation causing sliding wardrobe and window channels to jam",
      "Heavy teakwood main door frame leveling and mortise lock fitting",
      "Hydraulic gas lift pump replacement for king size storage beds",
      "Modular kitchen tandem drawer realignment and soft-close hinge replacement"
    ],
    responseTime: "30 - 40 mins",
    localHubAddress: "Near Patancheru Chowrasta, NH-65 Mumbai Highway, Patancheru, Hyderabad 502319",
    leadCarpenter: "Mahesh Goud (Master Craftsman)",
    experienceYears: 18,
    uniqueDescription: "Patancheru is a major suburban hub situated on the NH-65 corridor, famous for ICRISAT and rapidly growing residential townships like Sansa County and Beeramguda. Gated communities and villas in Patancheru require skilled craftsmen for comprehensive woodwork maintenance, sliding door channel servicing, lock replacements, and custom furniture repairs. Our Patancheru team arrives with full toolkits within 30-40 minutes.",
    localFaqs: [
      {
        question: "How fast can a carpenter arrive at Sansa County or Indresham in Patancheru?",
        answer: "Our technicians operate from Patancheru Chowrasta on NH-65, ensuring arrival within 30 to 40 minutes across all Patancheru gated communities."
      },
      {
        question: "Do you repair heavy hydraulic storage beds in Patancheru homes?",
        answer: "Yes, we replace failing hydraulic gas lift pumps (150kg to 250kg pressure rated) and align bed frames for easy lifting."
      }
    ]
  }
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return HYDERABAD_AREAS.find((a) => a.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllAreaSlugs(): string[] {
  return HYDERABAD_AREAS.map((a) => a.slug);
}
