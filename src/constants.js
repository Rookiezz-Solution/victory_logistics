import { CARGO_LOGISTICS, CONSULTING, CUSTOM_CLEARANCE, FREIGHT_FORWARDING, FREIGHT_FORWARDING_HERO,
   HERO_IMAGE_2,HERO_IMAGE_3,MULTIMODAL_TRANSPORT, OCEAN_FREIGHT, PACKAGING, RAIL_FREIGHT, SUPPLY_CHAIN,
   WAREHOUSE } from "./assets";

export const COMPANY_NAME = "Victory Logistics Service Pvt. Ltd";
export const CONTACT_PHONE_1 = "+91-9845 479 213";
export const CONTACT_PHONE_2 = "+91-80-4171 6357";
export const CONTACT_EMAIL_1 = "info@victorylogisticss.com";
export const CONTACT_EMAIL_2 = "prakash@victorylogisticss.com";
export const ADDRESS = "Maithreyi # 68/69, 3rd Cross, Amruthanagar, Near Saradha School, Bangalore – 560092";
export const ADDRESS_COORDINATES = { lat: 13.0707, lng: 77.6000 }; // Approximate coordinates for Amruthanagar, Bangalore
export const INSTAGRAM_URL = "https://www.instagram.com/victory_logistics/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61575756940577";
export const ROOKIEZZ_SOLUTIONS_URL = "https://www.rookiezzsolutions.com";
export const CIN_NUMBER = "U60232KA2020PTC137985";
export const INCORPORATION_DATE = "01 September 2020";
export const DIRECTORS = [
  { name: "PRAKASH BHANDARI", din: "08858520" }
];

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", isDropdown: true },
  { name: "Contact", path: "/contact" },
];

export const heroImages = [
  { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop", alt: "Victory Logistics - Global cargo shipping" },
  { src:  `${HERO_IMAGE_2}`, alt: "Victory Logistics - Air freight solutions" },
  { src: `${HERO_IMAGE_3}`, alt: "Victory Logistics - Road transportation network" },

];

export const services = [
  { 
    id: "freight-forwarding", 
    name: "Freight Forwarding", 
    icon: "Ship", 
    shortDescription: "Comprehensive international freight forwarding by air, sea, and land for timely, secure delivery.",
    description: "Global freight forwarding solutions ensuring your cargo reaches its destination efficiently and securely, whether by air, sea, or land.", 
    details: "Our Freight Forwarding services provide end-to-end management of your international shipments. We handle everything from cargo booking and documentation to customs clearance and final delivery. Leveraging our global network of partners and extensive industry experience, we offer tailored solutions for air, sea, and land transport. Whether you need to move small parcels or large-scale project cargo, we ensure your goods reach their destination efficiently and cost-effectively. We also offer real-time tracking and dedicated customer support to keep you informed throughout the shipping process. Our expertise includes handling various types of cargo, including perishables, hazardous materials, and oversized goods, with specialized care and compliance.",
    image: `${FREIGHT_FORWARDING_HERO}`,
    keyBenefits: ["Global Network Coverage", "Multimodal Options", "Real-time Tracking", "Documentation Expertise", "Cost-Effective Solutions"]
  },
  {
    id: "ocean-freight",
    name: "Ocean Freight",
    icon: "Anchor",
    shortDescription: "Global ocean freight services for FCL and LCL shipments, connecting you to major trade lanes.",
    description: "Comprehensive ocean freight solutions, including FCL and LCL, to connect your business to global markets with reliability and competitive rates.",
    details: "Our Ocean Freight services are the backbone of global trade, offering flexible and cost-efficient solutions for shipping goods worldwide. We provide both Full Container Load (FCL) and Less than Container Load (LCL) options, catering to businesses of all sizes. Victory Logistics partners with major shipping lines to secure competitive rates and ensure space availability on key trade routes. We manage all aspects of your ocean shipment, including documentation, port handling, customs clearance, and inland transportation. Specialized services for refrigerated cargo, hazardous materials, and break-bulk shipments are also available.",
    image: `${OCEAN_FREIGHT}`,
    keyBenefits: ["Global Reach", "FCL & LCL Options", "Competitive Rates", "Port-to-Door Service", "Specialized Cargo Handling"]
  },
  { 
    id: "customs-clearance", 
    name: "Customs Clearance", 
    icon: "FileText", 
    shortDescription: "Expert customs brokerage for swift, compliant, and hassle-free international shipment clearance.",
    description: "Streamlined customs clearance services to navigate complex regulations and ensure your shipments cross borders smoothly and without delay.", 
    details: "Navigating the complexities of customs regulations can be challenging. Our Customs Clearance services simplify this process for you. Our team of experienced customs brokers stays updated with the latest trade policies and regulations to ensure full compliance. We manage all necessary documentation, duty payments, and inspections, facilitating a smooth and timely clearance for both import and export shipments. Our goal is to minimize delays and avoid penalties, allowing your goods to move seamlessly across borders. We provide consultancy on tariff classifications, import/export restrictions, and trade agreements to optimize your customs processes.",
    image: `${CUSTOM_CLEARANCE}`,
    keyBenefits: ["Regulatory Compliance", "Reduced Delays", "Duty Optimization", "Expert Consultation", "Risk Management"]
  },
  { 
    id: "warehousing-distribution", 
    name: "Warehousing & Distribution", 
    icon: "Warehouse",
    shortDescription: "Secure, flexible warehousing and efficient distribution tailored to your inventory management needs.",
    description: "State-of-the-art warehousing facilities and optimized distribution networks to manage your inventory and ensure timely deliveries.", 
    details: "We offer state-of-the-art warehousing facilities and comprehensive distribution services to manage your inventory effectively. Our secure warehouses are equipped to handle various types of goods, with options for temperature control, bonded storage, and high-security zones. Services include inventory management, order picking and packing, kitting, labeling, cross-docking, and last-mile delivery. Our strategic warehouse locations and robust distribution network ensure your products are stored safely and delivered to your customers on time, optimizing your supply chain and reducing operational costs. We utilize advanced WMS for real-time visibility.",
    image: `${WAREHOUSE}`,
    keyBenefits: ["Secure Storage", "Inventory Management", "Order Fulfillment", "Strategic Locations", "Value-Added Services"]
  },
  { 
    id: "supply-chain-management", 
    name: "Supply Chain Management", 
    icon: "GitFork",
    shortDescription: "End-to-end supply chain solutions, optimizing flow from origin to destination for maximum efficiency.",
    description: "Holistic supply chain management to enhance visibility, reduce costs, and improve the overall efficiency of your logistics operations.", 
    details: "Our Supply Chain Management services provide a holistic approach to optimizing your logistics operations. We analyze your entire supply chain, from procurement and production to transportation and delivery, identifying areas for improvement. By implementing tailored strategies and leveraging advanced technology, we help you reduce costs, enhance efficiency, and improve visibility. Our services include demand forecasting, inventory optimization, vendor management, risk assessment, and performance monitoring, ensuring a resilient and agile supply chain that supports your business growth and adapts to market changes.",
    image: `${SUPPLY_CHAIN}`,
    keyBenefits: ["End-to-End Visibility", "Cost Reduction", "Efficiency Improvement", "Risk Mitigation", "Strategic Planning"]
  },
  { 
    id: "project-cargo-logistics", 
    name: "Project Cargo Logistics", 
    icon: "Truck",
    shortDescription: "Specialized handling for oversized, heavy-lift, or complex project cargo from planning to execution.",
    description: "Expert management of project cargo, including heavy-lift and oversized shipments, with meticulous planning and execution.", 
    details: "Transporting oversized, heavy, or high-value project cargo requires meticulous planning and specialized expertise. Our Project Cargo Logistics team has a proven track record of successfully managing complex shipments for various industries, including energy, construction, and manufacturing. We provide comprehensive solutions, including route surveys, feasibility studies, specialized equipment (cranes, heavy-duty trailers), and on-site coordination. From initial consultation to final delivery, we ensure your project cargo is handled safely, efficiently, and within budget, no matter the destination or complexity. We manage all permits and regulatory requirements.",
    image: `${CARGO_LOGISTICS}`,
    keyBenefits: ["Heavy-Lift Expertise", "Route Planning", "Specialized Equipment", "On-Site Coordination", "Turnkey Solutions"]
  },
  { 
    id: "multimodal-transport", 
    name: "Multimodal Transport", 
    icon: "Combine", 
    shortDescription: "Integrated transport solutions combining air, sea, rail, and road for optimal transit and costs.",
    description: "Seamlessly integrated multimodal transport solutions combining air, sea, rail, and road to optimize transit times and costs for your cargo.", 
    details: "Our Multimodal Transport services offer a flexible and efficient way to move your goods by combining different modes of transportation – air, sea, rail, and road. We design customized solutions that optimize transit times and reduce costs, managing the entire journey under a single contract and point of contact. This approach provides greater flexibility, reduces handling, and improves security for your cargo. Whether it's a combination of sea-air for speed and economy or rail-road for domestic distribution, we ensure a smooth and coordinated transit from origin to final destination, providing a truly integrated logistics experience.",
    image: `${MULTIMODAL_TRANSPORT}`,
    keyBenefits: ["Optimized Transit", "Cost Efficiency", "Reduced Handling", "Single Point of Contact", "Enhanced Security"]
  },
  {
    id: "rail-freight",
    name: "Rail Freight",
    icon: "TrainTrack",
    shortDescription: "Cost-effective and eco-friendly rail freight solutions for long-distance and bulk transportation.",
    description: "Reliable and sustainable rail freight services for efficient long-haul and bulk cargo transportation across extensive networks.",
    details: "Victory Logistics offers comprehensive Rail Freight services, providing a cost-effective and environmentally friendly alternative for transporting goods over long distances. Our rail solutions are ideal for bulk commodities, containerized cargo, and intermodal shipments. We leverage extensive rail networks and partnerships to ensure reliable transit times and competitive pricing. Services include FCL and LCL options, terminal handling, and last-mile connectivity via road. Rail freight is an excellent choice for reducing carbon footprint while maintaining supply chain efficiency, especially for inland transportation.",
    image: `${RAIL_FREIGHT}`,
    keyBenefits: ["Cost-Effective for Bulk", "Eco-Friendly", "Long-Distance Capability", "Reliable Schedules", "Intermodal Connectivity"]
  },
  {
    id: "packaging-consolidation",
    name: "Packaging & Consolidation",
    icon: "PackageSearch",
    shortDescription: "Professional packaging and cargo consolidation services to optimize space and ensure cargo safety.",
    description: "Expert packaging and consolidation services designed to protect your goods, optimize container space, and reduce shipping costs.",
    details: "Victory Logistics offers specialized Packaging & Consolidation services to enhance the safety and efficiency of your shipments. Our professional packaging solutions ensure your goods are protected during transit, using appropriate materials and techniques for various cargo types. Consolidation services allow multiple smaller shipments to be combined into a single container, significantly reducing costs for LCL shippers. We provide customized crating, palletizing, shrink-wrapping, and labeling services. Our strategically located consolidation hubs facilitate efficient cargo handling and faster transit times.",
    image: `${PACKAGING}`,
    keyBenefits: ["Cargo Protection", "Space Optimization", "Cost Savings (LCL)", "Customized Solutions", "Reduced Damage Risk"]
  },
  {
    id: "logistics-consulting",
    name: "Logistics Consulting",
    icon: "Brain",
    shortDescription: "Strategic logistics consulting to optimize your supply chain, improve efficiency, and reduce costs.",
    description: "Expert logistics consulting services to analyze, design, and implement strategies that enhance your supply chain performance and drive business growth.",
    details: "Our Logistics Consulting services provide businesses with strategic insights and actionable recommendations to optimize their supply chain operations. Our experienced consultants conduct thorough analyses of your current logistics processes, identifying inefficiencies, bottlenecks, and areas for improvement. We offer expertise in network design, inventory management, transportation strategy, technology integration, and regulatory compliance. By partnering with Victory Logistics, you gain access to industry best practices and innovative solutions tailored to your specific business needs, ultimately leading to reduced costs, improved service levels, and a more resilient supply chain.",
    image: `${CONSULTING}`,
    keyBenefits: ["Strategic Insights", "Process Optimization", "Technology Integration", "Performance Improvement", "Customized Strategies"]
  }
];

export const coreValues = [
  { title: "Customer Centricity", description: "Placing our customers at the heart of everything we do, ensuring their needs are met with utmost priority and care.", icon: "Users" },
  { title: "Integrity & Reliability", description: "Upholding the highest ethical standards, delivering on our promises with transparency and dependability.", icon: "ShieldCheck" },
  { title: "Innovation & Excellence", description: "Continuously improving and innovating to provide cutting-edge logistics solutions and superior service quality.", icon: "Lightbulb" },
  { title: "Global Collaboration", description: "Fostering strong partnerships worldwide to deliver seamless and comprehensive logistics services across borders.", icon: "Globe" },
  { title: "Sustainable Practices", description: "Committing to environmentally responsible logistics solutions that minimize our ecological footprint.", icon: "Leaf" },
];

export const milestones = [
  { year: "2020", description: "Victory Logistics Service Pvt. Ltd incorporated with a vision for modern logistics." },
  { year: "2021", description: "Established key partnerships and expanded initial service offerings, including customs brokerage." },
  { year: "2022", description: "Implemented advanced WMS and tracking technology, enhancing shipment visibility for clients." },
  { year: "2023", description: "Opened new branch office and warehousing facility to cater to growing demand in Western India." },
  { year: "2024", description: "Recognized for excellence in customer service and launched specialized project cargo division." },
  { year: "2025", description: "Expanded global network to over 50 countries and introduced sustainable logistics initiatives." },
];

export const testimonialsData = [
  {
    name: "Rohan Sharma",
    company: "CEO, Innovatech Ltd.",
    image: "man-smiling-portrait-professional-1",
    quote: "Victory Logistics has transformed our supply chain. Their efficiency and reliability are unmatched. Highly recommended for any business looking for top-tier logistics.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    company: "Supply Chain Manager, Fabrica Textiles",
    image: "woman-professional-portrait-smiling-1",
    quote: "The team at Victory Logistics is incredibly responsive and proactive. They handle our international shipments seamlessly, always keeping us informed.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Owner, BuildWell Construction",
    image: "construction-manager-hardhat-smiling-1",
    quote: "We've relied on Victory for our project cargo needs, and they've never disappointed. Their expertise in handling oversized shipments is exceptional.",
    rating: 5,
  },
  {
    name: "Sunita Krishnan",
    company: "Procurement Head, PharmaGlobal Corp",
    image: "woman-scientist-lab-coat-smiling",
    quote: "Their temperature-controlled warehousing and distribution services are critical for our pharmaceutical products. Victory Logistics maintains the highest standards.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    company: "Founder, E-Com Express",
    image: "young-entrepreneur-smiling-office",
    quote: "As an e-commerce business, fast and reliable fulfillment is key. Victory's warehousing and last-mile delivery have been a game-changer for us.",
    rating: 4,
  },
  {
    name: "Anjali Mehta",
    company: "Export Manager, Artisan Exports",
    image: "businesswoman-ethnic-wear-smiling",
    quote: "Customs clearance used to be a major headache. Victory Logistics made it so smooth and efficient. Their team is knowledgeable and always helpful.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    company: "Operations Director, AutoParts Inc.",
    image: "factory-manager-clipboard-smiling",
    quote: "Their supply chain consulting helped us identify significant cost savings and improve our overall logistics flow. True experts in their field.",
    rating: 5,
  },
  {
    name: "Deepa Verma",
    company: "Logistics Coordinator, AgriProduce Co.",
    image: "woman-farmer-smiling-field",
    quote: "Victory's multimodal transport solutions have been perfect for our agricultural exports, combining rail and sea effectively to reach distant markets.",
    rating: 4,
  },
  {
    name: "Karan Desai",
    company: "CFO, HeavyMachinery Ltd.",
    image: "businessman-suit-smiling-confident",
    quote: "For our project cargo, involving heavy machinery, Victory Logistics provided impeccable planning and execution. Their attention to detail is commendable.",
    rating: 5,
  },
  {
    name: "Nisha Agarwal",
    company: "Owner, Boutique Fashions",
    image: "fashion-designer-smiling-studio",
    quote: "Their packaging and consolidation services have saved us a lot on shipping smaller batches of apparel. Our goods always arrive in perfect condition.",
    rating: 5,
  }
];

export const VICTORY_LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/0c7efa7c-7dc4-4257-94f2-129b77780ae8/0e2405ae2c5d203a09bcc3c54171454f.png";
