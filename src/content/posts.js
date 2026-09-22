// All articles and case studies live here as plain data. To add new
// content: paste the text to Claude, or append a new object to this
// array yourself following the same shape.
//
// type: 'article' | 'case-study'
// section: which page's "Case Studies" section a case-study belongs to
//   ('built-environment' | 'social-policy')
// category: which topic an article is filed under — see CATEGORY_LABELS
// explainerGroup (Built Environment articles only): 'basics' | 'infrastructure'
//   — controls which section of the Built Environment page links to it
// kicker: optional one-line teaser shown under the title (both on cards
//   and the detail page)
// image: optional { url, alt, caption } — shown as the card thumbnail on
//   list pages and as a captioned hero image at the top of the full post
// body: array of content blocks. Each item is either:
//   - a plain string -> rendered as a paragraph
//   - { type: 'heading', text } -> rendered as a subheading
// takeaway: optional string, rendered as a highlighted "Key takeaway" box
// references: optional array of { text, url } -> rendered as a citation
//   list at the bottom of the article

export const CATEGORY_LABELS = {
  'engineering-explainers': 'Engineering Explainers',
  'social-policy': 'Social & Policy',
  'disaster-prep': 'Disaster Preparedness Guides',
  'research-summaries': 'Research Summaries',
  opinion: 'Opinion Pieces',
  'event-writeups': 'Community Event Write-Ups',
}

export const posts = [
  {
    slug: 'foundations',
    type: 'article',
    category: 'engineering-explainers',
    explainerGroup: 'basics',
    title: 'Foundations',
    kicker: 'Why the right foundation depends on the kind of water a site will face.',
    date: '2026-09-16',
    summary: 'Why the right foundation depends on the kind of water a site will face.',
    image: {
      url: 'https://images.unsplash.com/photo-1787641029577-79f190afdf5f?auto=format&fit=crop&w=1400&q=80',
      alt: 'A white house elevated on open pilings above a sandy beach',
      caption: 'An elevated home on open pilings — the accepted foundation type where waves and fast-moving water are possible.',
    },
    body: [
      'In a flood hazard area, a foundation must do far more than carry the weight of a building. Floodwater pushes laterally against walls, lifts structures through buoyancy, strikes them with waves and floating debris, and erodes the soil that supports them. For this reason, the Florida Building Code requires that pile and column foundations in coastal high hazard areas be designed to resist flotation, collapse, and lateral movement under wind and flood loads acting at the same time, and that designers account for scour and erosion under base flood conditions, including wave action (University of Florida Building Codes Enforcement, n.d.).',
      { type: 'heading', text: 'Closed versus open foundations' },
      'FEMA identifies several common ways to support an elevated building: fill, slab on grade, crawlspace, stemwall, solid wall, pier or column, and pile (FEMA, 2005). These fall into two broad families. Closed foundations, such as stemwalls and crawlspaces, form a continuous barrier around the space beneath the building. Open foundations, such as piles and columns, allow water and waves to pass underneath. Closed foundations can perform well where water rises slowly, but they present a large surface for moving water to push against and are vulnerable when the soil around their footings is scoured away.',
      { type: 'heading', text: 'Matching the foundation to the flood zone' },
      'Federal flood rules, local floodplain ordinances, and building codes all require homes in coastal high hazard areas (Zone V) to use open foundations (FEMA, 2013). Fill may not be used as structural support in Zone V or in Coastal A Zones (FEMA, 2008a), and the space below an elevated building must either be left free of obstructions or enclosed with breakaway walls. Federal regulations define a breakaway wall as a nonstructural wall intended to collapse under specified lateral loads without damaging the elevated building or its foundation (FEMA, 2021).',
      'The Coastal A Zone deserves special attention. It lies landward of Zone V but can still experience breaking waves of 1.5 feet or more during the base flood (FEMA, 2021). Since the 6th Edition of the Florida Building Code, buildings in Coastal A Zones must generally meet Zone V design standards, with limited exceptions such as stemwalls designed for wave loads, scour, and erosion (Monroe County, n.d.). This requirement reflects hard lessons: after Hurricane Katrina, FEMA documented conventional A Zone foundations failing in coastal areas and recommended open foundations designed for waves, high velocity flow, erosion, scour, and debris (FEMA, 2006).',
    ],
    takeaway:
      'A foundation choice should follow the hazard rather than habit. Where waves and fast-moving water are possible, open foundations anchored deep enough to survive scour are the accepted standard.',
    references: [
      { text: "Federal Emergency Management Agency. (2005). Home builder's guide to coastal construction: Technical fact sheet series (FEMA 499).", url: 'https://www.southernshores-nc.gov/media/4056' },
      { text: 'Federal Emergency Management Agency. (2006). Design and construction in Coastal A Zones (Hurricane Katrina Recovery Advisory).', url: 'https://www.fema.gov/pdf/rebuild/mat/coastal_a_zones.pdf' },
      { text: 'Federal Emergency Management Agency. (2008a). Free-of-obstruction requirements (NFIP Technical Bulletin 5).', url: 'https://www.fema.gov/sites/default/files/2020-07/fema_tb5_free_obstruction_requirements.pdf' },
      { text: 'Federal Emergency Management Agency. (2013). Foundation requirements and recommendations for elevated homes (Hurricane Sandy Recovery Fact Sheet).', url: 'https://www.fema.gov/sites/default/files/documents/fema_hurricane-sandy-recovery-fact-sheet.pdf' },
      { text: 'Federal Emergency Management Agency. (2021). Design and construction guidance for breakaway walls (NFIP Technical Bulletin 9).', url: 'https://www.fema.gov/sites/default/files/documents/fema_nfip-technical-bulletin-9-09292021.pdf' },
      { text: 'Monroe County, Florida. (n.d.). Building responsibly and requirements.', url: 'http://www.monroecounty-fl.gov/692/Building-Responsibly-Requirements' },
      { text: 'University of Florida Building Codes Enforcement. (n.d.). Zone V design certificate.', url: 'https://www.ehs.ufl.edu/wp-content/uploads/2024/03/Zone-V-Design-Certificate.pdf' },
    ],
  },
  {
    slug: 'elevation-requirements',
    type: 'article',
    category: 'engineering-explainers',
    explainerGroup: 'basics',
    title: 'Elevation Requirements',
    kicker: 'How high is high enough, and who decides.',
    date: '2026-09-16',
    summary: 'How high is high enough, and who decides.',
    image: {
      url: 'https://images.unsplash.com/photo-1783409608821-ff02bdb4fc9e?auto=format&fit=crop&w=1400&q=80',
      alt: 'A corrugated metal building on tall stilts high above dark water',
      caption: 'A structure built well above the surrounding water line. Florida code requires the lowest floor to sit at least one foot above the base flood elevation.',
    },
    body: [
      'Elevation is the most direct way to keep floodwater out of living space. The regulatory benchmark is the base flood elevation (BFE): the height that the flood with a 1 percent chance of being equaled or exceeded in any given year is expected to reach, measured against a vertical datum such as the North American Vertical Datum of 1988 (FEMA, 2021). This event is often called the "100-year flood," a name that misleads many homeowners. A 1 percent annual chance does not mean one flood per century. Over the 30-year life of a typical mortgage, the probability of experiencing at least one such flood is roughly 26 percent (calculated as 1 minus 0.99 raised to the 30th power).',
      { type: 'heading', text: "Florida's standard: BFE plus freeboard" },
      "The Florida Building Code goes beyond the federal minimum. Since the 6th Edition, the residential code has required the lowest floor in A Zones, and the bottom of the lowest horizontal structural member in V Zones and Coastal A Zones, to sit at least one foot above the BFE (Monroe County, n.d.). That additional height is called freeboard, and it applies in all flood hazard areas (Building a Safer Florida, 2017). Freeboard acts as a margin of safety against uncertainty in flood maps, wave effects that maps may not capture, and future sea level rise. Local governments can adopt stricter rules. Key Biscayne, for example, requires critical facilities to be elevated to the 500-year flood elevation plus one foot, or the Florida Building Code minimum, whichever is applicable (Village of Key Biscayne, n.d.).",
      { type: 'heading', text: 'What counts as the "lowest floor"' },
      'The code defines the lowest floor as the lowest floor of the lowest enclosed area, including a basement. An unfinished, flood-resistant enclosure used only for parking, building access, or limited storage is excluded (Florida Building Commission, 2023). Basements, meaning areas below grade on all sides, are not permitted in flood hazard areas (Building a Safer Florida, 2017). Enclosures below the elevated floor must include flood openings so that water can enter and exit freely, which equalizes pressure on the walls (Florida Division of Emergency Management, 2024). Mechanical, electrical, and plumbing equipment such as air conditioning units and water heaters must also be elevated to the required level (Pinellas County, 2024).',
      { type: 'heading', text: 'Proving compliance' },
      'Elevation is verified, not assumed. A licensed surveyor or registered design professional must prepare and seal documentation of the required elevations (Florida Building Commission, 2023). Many jurisdictions require an elevation certificate once the lowest floor is set, before vertical construction continues, and another at completion (Pinellas County, 2024).',
    ],
    takeaway:
      'In Florida, the minimum target is BFE plus one foot. Anything below that line should be limited to parking, access, or storage and built to get wet.',
    references: [
      { text: 'Building a Safer Florida. (2017). Flood resistant construction and the 6th Edition Florida Building Code.', url: 'https://www.floridabuilding.org/fbc/thecode/2017-6edition/basf_2017_flood_061217.pdf' },
      { text: 'Federal Emergency Management Agency. (2021). Design and construction guidance for breakaway walls (NFIP Technical Bulletin 9).', url: 'https://www.fema.gov/sites/default/files/documents/fema_nfip-technical-bulletin-9-09292021.pdf' },
      { text: 'Florida Building Commission. (2023). Florida Building Code, Residential (8th ed.), Section R322 [Excerpt compiled by Palm Beach County].', url: 'https://discover.pbc.gov/pzb/building/PDF/Flood/Requirements.pdf' },
      { text: 'Florida Division of Emergency Management. (2024). Guidance: Slabs, lowest floors, and flood openings.', url: 'https://www.floridadisaster.org/globalassets/fdem-ofm-guidance_slabs-floors-openings_1-2024.pdf' },
      { text: 'Monroe County, Florida. (n.d.). Building responsibly and requirements.', url: 'http://www.monroecounty-fl.gov/692/Building-Responsibly-Requirements' },
      { text: 'Pinellas County. (2024). Application for construction in a floodplain.', url: 'https://pinellas.gov/wp-content/uploads/2024/10/Application-for-Construction-in-Floodplain_20240522_Fillable.pdf' },
      { text: 'Village of Key Biscayne. (n.d.). Code of ordinances, Chapter 10, Article III: Flood resistant development. Municode Library.', url: 'https://library.municode.com/fl/key_biscayne/codes/code_of_ordinances?nodeId=PTIICO_CH10FLMA_ARTIIIFLREDE_DIV1BUST' },
    ],
  },
  {
    slug: 'drainage-design',
    type: 'article',
    category: 'engineering-explainers',
    explainerGroup: 'basics',
    title: 'Drainage Design',
    kicker: 'Moving rain off the land in one of the flattest, wettest places in the country.',
    date: '2026-09-16',
    summary: 'Moving rain off the land in one of the flattest, wettest places in the country.',
    image: {
      url: 'https://images.unsplash.com/photo-1775986351678-c3085a922c6f?auto=format&fit=crop&w=1400&q=80',
      alt: 'A concrete-lined drainage canal under a cloudy sky',
      caption: "A concrete drainage canal — part of the layered network that moves rainfall off South Florida's flat, low-lying land.",
    },
    body: [
      'South Florida drains through a layered, interconnected network. At the top is the regional Central and Southern Florida (C&SF) Project, operated by the South Florida Water Management District (SFWMD). This primary system of canals and natural waterways connects to community drainage districts and hundreds of neighborhood systems, which means flood control is a shared responsibility among the District, counties, cities, local drainage districts, homeowners associations, and residents (SFWMD, n.d.). The regional system alone includes more than 2,175 miles of canals, more than 2,130 miles of levees, over 936 water control structures, and 98 pump stations, much of it more than 60 years old (SFWMD, 2025).',
      { type: 'heading', text: 'Designing for a storm that has not happened yet' },
      'Engineers size drainage systems around a "design storm," a rainfall event of a specified depth, duration, and annual probability. The C&SF Project was designed to handle 7 to 12 inches of rain over 24 hours, roughly a 1-in-25-year event, implying an annual flood risk below 4 percent in the areas it serves (SFWMD, 2025). At the site scale, Florida permits generally require that peak discharge after development not exceed peak discharge before development. Regulators have noted a weakness in designing only for a single large storm: a pond sized to control the 25-year peak may leave the more frequent 2-, 5-, and 10-year events uncontrolled, which accelerates stream erosion downstream (Northwest Florida Water Management District, 2013).',
      { type: 'heading', text: 'The hidden variable: groundwater' },
      'Drainage in South Florida is shaped as much by what lies underground as by what falls from the sky. The region sits on the porous, highly permeable Biscayne aquifer, and its low topography leaves little room between the land surface and the water table (Decker, 2022). The unsaturated soil above the water table acts as a sponge that absorbs rainfall. As seas rise, groundwater rises with them, shrinking that sponge and increasing the likelihood of flooding from ordinary rain. Rising seas can also reduce the ability of coastal gravity structures to discharge inland water to tide (Decker, 2022). In a U.S. Geological Survey model of Broward County, a scenario with mean sea level 3.0 feet above the 1988 vertical datum added about 37 square miles of land where wet season groundwater sits within 2 feet of the surface, and about 23 square miles of newly inundated area, compared with historical conditions (Decker, 2022).',
      { type: 'heading', text: 'A system under strain' },
      'Nationally, the American Society of Civil Engineers gave stormwater infrastructure a D in its 2025 Report Card, the same grade it received at its 2021 debut (ASCE, 2025a). For South Florida, the lesson is that drainage design can no longer assume a fixed sea level. Future designs must account for higher tailwater, higher groundwater, and more intense rainfall, and they increasingly rely on pumping, storage, and raised grades where gravity alone no longer works.',
    ],
    takeaway:
      'In South Florida, the water table is part of the drainage system. When it rises, every pipe, pond, and canal loses capacity.',
    references: [
      { text: 'American Society of Civil Engineers. (2025a, April 9). Infrastructure report card numbers are telling; what do they say about your sector? Civil Engineering Source.', url: 'https://www.asce.org/publications-and-news/civil-engineering-source/article/2025/04/09/infrastructure-report-card-numbers-are-telling-what-do-they-say-about-your-sector' },
      { text: 'Decker, J. D. (Ed.). (2022). Drainage infrastructure and groundwater system response to changes in sea level and precipitation, Broward County, Florida (Scientific Investigations Report 2022-5074). U.S. Geological Survey.', url: 'https://doi.org/10.3133/sir20225074' },
      { text: "Northwest Florida Water Management District. (2013). Environmental resource permit applicant's handbook, Volume II.", url: 'https://flrules.org/gateway/readRefFile.asp?refId=3172' },
      { text: 'South Florida Water Management District. (n.d.). Flood control.', url: 'https://www.sfwmd.gov/our-work/flood-control' },
      { text: 'South Florida Water Management District. (2025). 2025 consolidated annual report on flood resiliency.', url: 'https://www.sfwmd.gov/sites/default/files/documents/2025_Consolidated_Annual_Report_On_Flood_Resiliency.pdf' },
    ],
  },
  {
    slug: 'resilient-materials',
    type: 'article',
    category: 'engineering-explainers',
    explainerGroup: 'basics',
    title: 'Resilient Materials',
    kicker: 'Building the parts that will get wet so they survive getting wet.',
    date: '2026-09-16',
    summary: 'Building the parts that will get wet so they survive getting wet.',
    image: {
      url: 'https://images.unsplash.com/photo-1764856601179-dfeca7b37e4c?auto=format&fit=crop&w=1400&q=80',
      alt: 'Construction workers pouring concrete with a wheelbarrow',
      caption: 'Materials used below the base flood elevation must be able to survive direct, prolonged contact with floodwater and still be reusable.',
    },
    body: [
      'Flood-resilient design begins with an honest assumption: everything below the required flood elevation will eventually be submerged. Federal rules therefore require that all construction below the BFE use flood damage-resistant materials (FEMA, 2008b). The Florida Building Code applies the same principle to flooring, interior and exterior walls, and wall coverings installed below the required elevation (Florida Building Commission, 2023). A material qualifies when it can withstand direct and prolonged contact with floodwater and then be cleaned and returned to use, rather than removed and replaced.',
      { type: 'heading', text: 'How materials are rated' },
      "For years, FEMA's Technical Bulletin 2 sorted materials into five classes, with Classes 4 and 5 considered acceptable below the BFE and Classes 1 through 3 considered unacceptable (Reduce Flood Risk, 2022). The January 2025 revision simplified this system into two ratings, acceptable and unacceptable, to align with current ASTM standards (FEMA, 2025). Examples of highly flood-resistant materials include clay tile, stone, or brick set with waterproof mortar; solid vinyl flooring installed with chemical-set adhesives; stained concrete; terrazzo; decay-resistant or pressure-treated wood; and rigid closed-cell foam insulation (Reduce Flood Risk, 2022). Materials that absorb water and hold moisture, such as standard paper-faced gypsum board, carpet, and fiberglass batt insulation, generally do not qualify (FEMA, 2008b).",
      { type: 'heading', text: 'Context matters' },
      "A material's rating depends on how it is used. Standard solid dimension lumber, for instance, is acceptable for structural use below the BFE but unacceptable as finish or trim, and local codes may further require preservative-treated or decay-resistant wood (FEMA, 2021a). FEMA also cautions that the chemistry of local floodwater matters, so designers should consider likely contaminants, and that local or state requirements stricter than federal guidance take precedence (FEMA, 2021b). Installation is equally important: a flood-resistant finish laid over a damage-prone substrate may fail, so vulnerable underlying materials should be removed first (Reduce Flood Risk, 2022).",
      { type: 'heading', text: 'Coastal and floodproofed buildings' },
      "In coastal South Florida and the Caribbean, saltwater and salt-laden air corrode metal connectors that hold buildings together, a risk FEMA addresses in its technical bulletin on corrosion protection for metal connectors in coastal areas (FEMA, 2021c). For nonresidential buildings that are dry floodproofed to keep water out, FEMA recommends using flood-resistant materials on the interior up to the floodproofing level anyway, because floodwaters can exceed design levels and a resistant interior speeds recovery (FEMA, 2025).",
    ],
    takeaway:
      'The goal is not a building that never gets wet. It is a building whose lower levels can be hosed out, dried, and reoccupied quickly.',
    references: [
      { text: 'Federal Emergency Management Agency. (2008b). Flood damage-resistant materials requirements for buildings located in special flood hazard areas (NFIP Technical Bulletin 2).', url: 'https://www.fema.gov/sites/default/files/2020-07/fema_tb_2_flood_damage-resistant_materials_requirements.txt' },
      { text: 'Federal Emergency Management Agency. (2021a, November 16). Is standard (untreated), solid dimension lumber flood damage-resistant as defined by the NFIP?', url: 'https://www.fema.gov/node/standard-untreated-solid-dimension-lumber-flood-damage-resistant-defined-national-flood' },
      { text: 'Federal Emergency Management Agency. (2021b). Where can I find a list of materials compliant with NFIP regulations for use below the base flood elevation?', url: 'https://www.fema.gov/node/where-can-i-find-list-materials-compliant-national-flood-insurance-program-nfip-regulations' },
      { text: 'Federal Emergency Management Agency. (2021c). Design and construction guidance for breakaway walls (NFIP Technical Bulletin 9; see reference to Technical Bulletin 8, Corrosion protection for metal connectors in coastal areas).', url: 'https://www.fema.gov/sites/default/files/documents/fema_nfip-technical-bulletin-9-09292021.pdf' },
      { text: 'Federal Emergency Management Agency. (2025). Flood damage-resistant materials requirements for buildings located in special flood hazard areas (NFIP Technical Bulletin 2).', url: 'https://www.fema.gov/sites/default/files/documents/fema_tb_2_flood_damage-resistant_materials_requirements_01-22-2025.pdf' },
      { text: 'Florida Building Commission. (2023). Florida Building Code, Residential (8th ed.), Section R322 [Excerpt compiled by Palm Beach County].', url: 'https://discover.pbc.gov/pzb/building/PDF/Flood/Requirements.pdf' },
      { text: 'Reduce Flood Risk. (2022, May 12). Installation of flood damage-resistant materials.', url: 'https://www.reducefloodrisk.org/mitigation/installation-of-flood-damage-resistant-materials/' },
    ],
  },
  {
    slug: 'levees',
    type: 'article',
    category: 'engineering-explainers',
    explainerGroup: 'infrastructure',
    title: 'Levees',
    kicker: 'Barriers that reduce flood risk, and why "reduce" is the key word.',
    date: '2026-09-16',
    summary: 'Barriers that reduce flood risk, and why "reduce" is the key word.',
    image: {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Herbert_Hoover_Dike_Construction_1968_3_of_3.jpg',
      alt: 'A water control structure on the Herbert Hoover Dike during 1968 rehabilitation work',
      caption:
        "The Herbert Hoover Dike's water control structure at Canal Point, Florida, during 1968 U.S. Army Corps of Engineers rehabilitation work. (Public domain, U.S. Army Corps of Engineers.)",
    },
    body: [
      'A levee is a human-made barrier, usually an earthen embankment, built to reduce how often floodwater reaches part of a floodplain (U.S. Army, 2024). Across the United States, roughly 25,000 miles of levees reduce risk to more than 17 million people and over $2 trillion in property (U.S. Army Corps of Engineers [USACE], n.d.). The true total is uncertain: the National Levee Database lists nearly 7,000 levee systems, but one estimate suggests there may be as many as 100,000 miles of nonfederal levees nationwide (ASCE, 2025b). In its 2025 Report Card, ASCE raised the national levee grade from a D to a D+, an improvement that still signals serious deficiencies (ASCE, 2025a).',
      { type: 'heading', text: 'How levees fail' },
      'The risk a levee poses depends on three factors: the flood hazard, how the levee performs both before and after it is overtopped, and the consequences for whatever lies behind it (Congressional Research Service [CRS], 2017). The most familiar failure is overtopping, when water rises above the crest and flows over the embankment. During Hurricane Katrina, investigators found that water cascading over New Orleans floodwalls carved deep trenches on their landward side, removing the soil support that held the walls upright against the flood (Seed, 2005). Water can also defeat a levee without ever reaching the top. Seepage through or beneath an earthen embankment can carry soil particles away in a process called piping or internal erosion, gradually hollowing the structure from within (New Jersey Office of Emergency Management, 2019).',
      { type: 'heading', text: 'Residual risk' },
      'No levee provides complete protection (New Jersey Office of Emergency Management, 2019). The flood risk that remains behind a levee is called residual risk, and it is easy to underestimate because it is rarely visible on maps. Although levees appear on FEMA\'s Flood Insurance Rate Maps, legislation that would require those maps to identify residual risk behind levees has not been enacted (CRS, 2023). Residents behind a levee should still consider flood insurance and evacuation planning.',
      { type: 'heading', text: 'A Florida case study: the Herbert Hoover Dike' },
      "Florida's most consequential levee surrounds Lake Okeechobee. Hurricane storm tides overtopped the lake's original dike in 1926 and 1928, destroying homes and killing more than 2,500 people (WGCU, 2023). The modern Herbert Hoover Dike is a 143-mile earthen structure that encircles nearly the entire 730-square-mile lake (USACE, 2023). After being widely regarded as one of the nation's more at-risk structures, it underwent an 18-year, $1.5 billion rehabilitation that finished in January 2023, three years ahead of schedule (WGCU, 2023). The work included 56 miles of concrete cutoff walls, two to three feet thick and about 70 feet deep, built through the embankment into the ground beneath it to block seepage, along with 28 new water control structures replacing aging culverts (Lake Okeechobee News, 2023).",
    ],
    takeaway:
      'Levees buy time and lower the odds of flooding, but they do not eliminate risk. Their condition, maintenance, and the planning of the community behind them all matter.',
    references: [
      { text: 'American Society of Civil Engineers. (2025a, April 9). Infrastructure report card numbers are telling; what do they say about your sector? Civil Engineering Source.', url: 'https://www.asce.org/publications-and-news/civil-engineering-source/article/2025/04/09/infrastructure-report-card-numbers-are-telling-what-do-they-say-about-your-sector' },
      { text: "American Society of Civil Engineers. (2025b). Levees. 2025 Report Card for America's Infrastructure.", url: 'https://infrastructurereportcard.org/cat-item/levees-infrastructure/' },
      { text: 'Congressional Research Service. (2017). Levee safety and risk: Status and considerations (IF10788).', url: 'https://www.everycrsreport.com/reports/IF10788.html' },
      { text: 'Congressional Research Service. (2023). Nonfederal levee safety: Primer, status, and considerations (IF12404).', url: 'https://www.congress.gov/crs-product/IF12404' },
      { text: 'Lake Okeechobee News. (2023, January 25). Herbert Hoover Dike rehabilitation complete.', url: 'https://lakeonews.com/okeechobee/stories/herbert-hoover-dike-rehabilitation-complete,53422' },
      { text: 'New Jersey Office of Emergency Management. (2019). State hazard mitigation plan, Section 5.3: Dam and levee failure.', url: 'https://www.nj.gov/njoem/mitigation/pdf/2019/mit2019_section5-3_Dam_Levee.pdf' },
      { text: 'Seed, R. B. (2005, November 2). [Testimony on preliminary findings regarding New Orleans levee failures]. U.S. Senate Committee on Homeland Security and Governmental Affairs.', url: 'https://www.hsgac.senate.gov/wp-content/uploads/imo/media/doc/110205Seed.pdf' },
      { text: 'U.S. Army. (2024, June 20). National Levee Database, the resource you may not know you need.', url: 'https://www.army.mil/article/276211/national_levee_database_the_resource_you_may_not_know_you_need' },
      { text: 'U.S. Army Corps of Engineers. (n.d.). Managing levees. National Levee Database.', url: 'https://nld.usace.army.mil/levee-basics/managing-levees/' },
      { text: 'U.S. Army Corps of Engineers. (2023, January 25). USACE celebrates completion of the Herbert Hoover Dike restoration project.', url: 'https://www.saj.usace.army.mil/Media/News-Stories/Article/3278249/usace-celebrates-completion-of-the-herbert-hoover-dike-restoration-project/' },
      { text: 'WGCU. (2023, January 26). After 18 years and $1.5B, Herbert Hoover dike repair done at Lake O.', url: 'https://www.wgcu.org/section/environment/2023-01-26/after-18-years-and-1-5b-herbert-hoover-dike-repair-done-at-lake-o' },
    ],
  },
  {
    slug: 'pump-stations',
    type: 'article',
    category: 'engineering-explainers',
    explainerGroup: 'infrastructure',
    title: 'Pump Stations',
    kicker: 'What happens when gravity is no longer enough.',
    date: '2026-09-16',
    summary: 'What happens when gravity is no longer enough.',
    image: {
      url: 'https://images.unsplash.com/photo-1693463735697-73df1f35930d?auto=format&fit=crop&w=1400&q=80',
      alt: 'Industrial pipes and valves used in water pumping systems',
      caption: "When gravity can no longer drain a flooded street, pump stations mechanically lift water over the obstacle and discharge it downstream.",
    },
    body: [
      'Most drainage systems rely on gravity: water flows downhill from streets to pipes to canals to the sea. That arrangement only works while the outlet sits lower than the water being drained. In a landscape as flat as South Florida, a high tide, a storm surge, or a full canal can erase that difference in elevation and stop drainage entirely. Sea level rise makes this more common. Modeling by the U.S. Geological Survey found that when rising seas surpass the control elevations of gravity-driven coastal structures, water backs up in the connected canals and raises groundwater levels that can spread inland (Decker, 2022). Pump stations solve this problem by mechanically lifting water over the obstacle and discharging it downstream.',
      { type: 'heading', text: 'Regional scale: moving rivers of water' },
      'SFWMD operates 98 pump stations as part of the regional flood control system (SFWMD, 2025). One of the oldest and most powerful is S-5A in western Palm Beach County, built by the U.S. Army Corps of Engineers and handed to the District in 1955 (SFWMD, 2021). When commissioned, it was the largest pump station in the world, and its six pumps provide a combined capacity of 4,800 cubic feet per second (PC Construction, 2022), which is roughly 3.1 billion gallons per day. That volume protects the surrounding basin from flooding and helps move excess water out of the Lake Okeechobee region (Florida Department of Environmental Protection, 2018).',
      { type: 'heading', text: 'Neighborhood scale: Miami Beach' },
      'Miami Beach offers a closely watched example of local pumping. The city has pursued a program of roughly $400 million that pairs new stormwater pumps with raised roads, with plans for about 80 pump stations citywide (First Street Foundation, n.d.). A single station illustrates the engineering involved: the 19th Street pump station, serving a 110-acre drainage basin around the Convention Center, uses four axial pumps rated at 20,000 gallons per minute each, for a total of 80,000 gallons per minute (WSP, 2022).',
      { type: 'heading', text: 'Limitations and tradeoffs' },
      'Pumps introduce vulnerabilities that gravity systems do not. They need power, fuel, and continual maintenance. In 2017, Tropical Depression Emily dropped about five inches of rain on Miami Beach, roughly double what the new pumps were designed for, and a power outage shut them down; since then, backup generators have become more common in pump projects (Governing, 2021). Pumping also has environmental consequences, because the city\'s stormwater system discharges runoff directly into Biscayne Bay (Phys.org, 2022). Finally, pumping and road raising can shift water onto lower private property, which has led to lawsuits and disputes over who is responsible for managing runoff (Governing, 2021).',
    ],
    takeaway:
      'Pump stations keep low-lying communities dry when gravity fails, but they are only as reliable as their power supply, maintenance, and design capacity.',
    references: [
      { text: 'Decker, J. D. (Ed.). (2022). Drainage infrastructure and groundwater system response to changes in sea level and precipitation, Broward County, Florida (Scientific Investigations Report 2022-5074). U.S. Geological Survey.', url: 'https://doi.org/10.3133/sir20225074' },
      { text: 'First Street Foundation. (n.d.). Elevate roads and bridges above flood level.', url: 'https://help.firststreet.org/hc/en-us/articles/360051425073-Elevate-roads-and-bridges-above-flood-level' },
      { text: 'Florida Department of Environmental Protection. (2018). Everglades Forever Act watershed consolidated permit.', url: 'https://floridadep.gov/sites/default/files/2018-01-31_Watershed%20EFA_Consolidated%20Permit_0.pdf' },
      { text: 'Governing. (2021, October 28). Miami Beach lifts roads due to sea rise, floods nearby homes.', url: 'https://www.governing.com/community/miami-beach-lifts-roads-due-to-sea-rise-floods-nearby-homes' },
      { text: 'PC Construction. (2022, June 3). Pump Station S-5A project reaches major milestone.', url: 'https://pcconstruction.com/news/pump-station-s-5a-project-reaches-major-milestone/' },
      { text: "Phys.org. (2022, March 15). Miami Beach's latest road-raising squabble: Who gets swamped by the flood waters?", url: 'https://phys.org/news/2022-03-miami-beach-latest-road-raising-squabble.html' },
      { text: 'South Florida Water Management District. (2021, June 30). Learn the unique backstory of the engines in the S-5A pump station.', url: 'https://www.sfwmd.gov/news-events/news/learn-unique-backstory-engines-s-5a-pump-station' },
      { text: 'South Florida Water Management District. (2025). 2025 consolidated annual report on flood resiliency.', url: 'https://www.sfwmd.gov/sites/default/files/documents/2025_Consolidated_Annual_Report_On_Flood_Resiliency.pdf' },
      { text: 'WSP. (2022, August 24). 19th Street pump station.', url: 'https://www.wsp.com/en-us/projects/19th-street-pump-station' },
    ],
  },
  {
    slug: 'retention-systems',
    type: 'article',
    category: 'engineering-explainers',
    explainerGroup: 'infrastructure',
    title: 'Retention Systems',
    kicker: 'The ponds behind every Florida subdivision, and the work they quietly do.',
    date: '2026-09-16',
    summary: 'The ponds behind every Florida subdivision, and the work they quietly do.',
    image: {
      url: 'https://images.unsplash.com/photo-1785301694816-cf07462b4dae?auto=format&fit=crop&w=1400&q=80',
      alt: 'Aerial view of a stormwater pond bordering a suburban neighborhood',
      caption: "A stormwater pond bordering a residential development — Florida's primary tool for controlling runoff from new construction.",
    },
    body: [
      'When land is developed, roofs and pavement replace soil and vegetation, so more rain runs off, and it runs off faster. Stormwater ponds are Florida\'s primary answer to that change. They are typically designed to hold post-development runoff to pre-development conditions, either by storing and slowly releasing the extra runoff or by letting it soak into the ground, and to remove pollutants through settling and biological uptake (Davtalab et al., 2020).',
      { type: 'heading', text: 'Retention versus detention' },
      'The two terms describe different strategies. A retention system stores a required treatment volume and recovers that storage through percolation into the soil or evaporation over several days. A detention system stores the volume temporarily and releases it to surface water through a control structure with a small bleed-down opening (Davtalab et al., 2020). In practice, a dry retention area holds stormwater and drains by percolation over about 72 hours, with an overflow for storms larger than its design. A wet detention pond, the most recognizable type, keeps a permanent pool below its outlet so that sediment and attached pollutants can settle out, often aided by vegetation planted along the edges (St. Johns River Water Management District, 2025).',
      { type: 'heading', text: 'How ponds are sized' },
      "Florida's five water management districts have historically applied somewhat different sizing rules. A statewide review found that treatment volumes and recovery times varied by district; SFWMD, for example, generally required treatment of the first half inch of runoff and recovery of half the treatment volume within 24 hours (Florida Stormwater Association, 2007). In 2024, the state moved toward a more uniform, performance-based standard. Senate Bill 7040, signed on June 28, 2024, ratified the Statewide Stormwater Rule, which requires system owners to estimate long-term maintenance costs, certify their financial ability to maintain the system, and follow regular inspection and reporting schedules (Florida Department of Environmental Protection [FDEP], n.d.-a). Applications deemed complete after December 28, 2025, must meet the new nutrient treatment standards (FDEP, n.d.-b), which require nearly all sites to demonstrate a net improvement in total nitrogen, total phosphorus, and total suspended solids, regardless of whether the receiving water is already impaired (SCS Engineers, 2026).",
      { type: 'heading', text: 'The groundwater problem' },
      "Retention ponds depend on dry soil beneath them. A peer-reviewed study of a retention pond near Tampa Bay found that sea level rise could raise the pond's seasonal high water level by up to 40 centimeters by 2060. Under those conditions, the pond failed to recover its treatment volume within the required 72 hours, its reliability fell from over 99 percent to 54 percent, its peak outflow during the 25-year design storm rose by about 47 percent, and the volume it discharged more than doubled (Davtalab et al., 2020). Adding 30 centimeters of fill to raise the site restored reliability to about 98 percent, suggesting that forward-looking design can offset much of the problem if it is considered from the start (Davtalab et al., 2020).",
    ],
    takeaway:
      'Stormwater ponds control both flooding and pollution, but they were designed for yesterday\'s water table. As groundwater rises, many will need to be rethought.',
    references: [
      { text: 'Davtalab, R., Mirchi, A., Harris, R. J., Troilo, M. X., & Madani, K. (2020). Sea level rise effect on groundwater rise and stormwater retention pond reliability. Water, 12(4), 1129.', url: 'https://doi.org/10.3390/w12041129' },
      { text: 'Florida Department of Environmental Protection. (n.d.-a). ERP stormwater resource center.', url: 'https://floridadep.gov/water/engineering-hydrology-geology/content/erp-stormwater-resource-center' },
      { text: 'Florida Department of Environmental Protection. (n.d.-b). Frequently asked ERP stormwater questions.', url: 'https://floridadep.gov/water/engineering-hydrology-geology/content/frequently-asked-erp-stormwater-questions' },
      { text: 'Florida Stormwater Association. (2007). Evaluation of current stormwater design criteria within the State of Florida.', url: 'https://www.florida-stormwater.org/assets/MemberServices/Advocacy/Final%20Report%20-%20SW%20Design%20Criteria-June07.pdf' },
      { text: "SCS Engineers. (2026, January 13). Florida stormwater regulations: What's changing under SB 7040.", url: 'https://www.scsengineers.com/florida-stormwater-regulations-whats-changing-under-sb-7040/' },
      { text: 'St. Johns River Water Management District. (2025). Stormwater systems and how they work.', url: 'https://www.sjrwmd.com/hoa-resources/stormwater-systems/' },
    ],
  },
]

export function getArticles() {
  return posts
    .filter((p) => p.type === 'article')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getCaseStudies(section) {
  return posts
    .filter((p) => p.type === 'case-study' && p.section === section)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getExplainers(explainerGroup) {
  return posts.filter((p) => p.type === 'article' && p.explainerGroup === explainerGroup)
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}
