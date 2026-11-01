export const PLAY_STORE_URL =
  "https://play.google.com/store/search?q=ASTRA%20iot%20Hub&c=apps&hl=en_IN";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/engineering-services", label: "Engineering Services" },
  { href: "/products", label: "Products" },
  { href: "/iot-hub", label: "ASTRA IoT Hub" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const CONTACT = {
  entity: "ASTRA e - Automation, Bengaluru, Karnataka, India",
  address:
    "472/7, 2nd & 3rd Flr, 20L RD, 4 blc, AVS, Ejipura, Balaji ARC, Koramangala VI Bk, (Near Koramangala Police Station), Bangalore South, Bangalore-560095, Karnataka, India",
  emails: ["info@astraeautomation.in"],
  phone: "+91-8308765999",
  phoneHref: "tel:+918308765999",
};

export const SOCIALS = [
  { label: "YouTube", href: "https://www.youtube.com/@ASTRA_Inc" },
  { label: "Instagram", href: "https://www.instagram.com/astra.blr" },
  { label: "X", href: "https://x.com/astrablr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/146615430/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592773529901" },
];

export const PILLARS = [
  {
    n: "01",
    title: "Hardware & PCB Design",
    tagline: "Turn concept into production-ready silicon.",
    intro: null,
    points: [
      "Schematic capture with multi-layer PCB layout",
      "DFM/DFT-ready architecture that eliminates costly re-spins",
      "Rapid hardware prototyping and validation",
      "Full production handoff (Gerbers, BOM, assembly data, pick-and-place files)",
    ],
    stack: null,
    cta: "Design with us",
  },
  {
    n: "02",
    title: "Firmware Development",
    tagline: "Smart firmware. Rock-solid performance.",
    intro: "The brain of the product, engineered for speed, edge security, and multi-year battery operation.",
    points: [
      "Bare-metal and RTOS firmware for STM32, ESP32, and ARM Cortex-M",
      "Communication over BLE, Wi-Fi, CAN, Modbus, SPI, I²C, and UART",
      "Low-power sleep profiling",
      "Secure bootloader and fail-safe over-the-air (OTA) updates",
    ],
    stack: ["STM32CubeIDE", "ESP-IDF", "FreeRTOS", "Zephyr", "Segger J-Link"],
    cta: "Power your product",
  },
  {
    n: "03",
    title: "Mobile App Development & Deployment",
    tagline: "Put your product in your customer’s pocket.",
    intro:
      "Intuitive Android and iOS applications that control hardware, stream live telemetry, and engage operators with real-time dynamic dashboards at their fingertips.",
    points: [
      "Seamless hardware provisioning over BLE and Wi-Fi",
      "Live sensor graphing",
      "Push notification threshold alarms",
      "Automated Play Store and App Store lifecycle management",
    ],
    stack: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase"],
    cta: "Build your app",
  },
  {
    n: "04",
    title: "IoT Cloud & MQTT Services",
    tagline: "Connect every device. Control everything.",
    intro: "Secure, highly available cloud infrastructure turning raw edge packets into actionable business intelligence.",
    points: [
      "High-throughput MQTT broker clustering",
      "TLS-secured fleet device authentication",
      "Time-series data storage and analytical dashboards",
      "Scalable deployment on AWS, Azure, Google Cloud, or dedicated private servers",
    ],
    stack: ["AWS IoT Core", "Azure IoT Hub", "Mosquitto", "EMQX", "Node-RED", "InfluxDB", "Grafana"],
    cta: "Go live with IoT",
  },
];
