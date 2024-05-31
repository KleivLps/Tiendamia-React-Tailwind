// clase Producto
class Product {
  //constructor
  constructor(
    id,
    title,
    description,
    price,
    stock,
    images,
    colors,
    descuento,
    taxPolicy,
    onsale
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.colors = colors;
    this.descuento = descuento;
    this.taxPolicy = taxPolicy;
    this.onsale =onsale
  }
}

//instanciamos Los objetos
const product1 = new Product(
  "001",
  "MACBOOK PRO CHIP M3 RAM 8GB DISCO 512GB SSD 14 GRIS ESPACIAL",
  "El MacBook Pro de 14 pulgadas te sorprenderá con sus capacidades. La discreta batería que cabe en su delgada carcasa dura hasta 22 horas y el sistema de enfriamiento es tan efectivo que nunca tendrás que bajar la velocidad máxima. Combinado con los colores saturados de la pantalla Liquid Retina XDR , la cámara FaceTime HD y el micrófono de estudio es la computadora portátil APPLE más portátil y profesional .La MacBook Pro de 14 pulgadas avanza con M3, un chip increíblemente avanzado que brinda gran velocidad y capacidad. Con la mejor duración de batería de su clase. El Magic Keyboard te ayudará a escribir textos fantásticos: es cómodo, silencioso y preciso. Los atajos útiles harán que trabajar con él sea rápido e intuitivo. Desbloquear tu MacBook Pro es igual de fácil , simplemente toca el lector Touch ID para desbloquear o bloquear el dispositivo; no necesitas ninguna contraseña",
  9533,
  20,
  ["../mac-1.jpg", "../public/mac-2.jpg", "../public/mac-3.jpg"],
  ["gray", "white"],
  "20%off",
  "Incluye impuesto País y percepción AFIP",
  true
);
const product2 = new Product(
  "002",
  "LAPTOP HP VICTUS GAMER 15-FB0128LA AMD RYZEN 5 8 GB NVIDIA GEFORCE RTX 3050 GPU (4 GB GDDR6 DEDICATED) 512 GB SSD 15.6 FHD 144HZ WINDOWS 11",
  "La HP Victus Gaming 15 Laptop está a la altura de los juegos más grandes y los mejores jugadores. Con procesador Intel® Core i-H, gráficos hasta NVIDIA® GeForce RTX™ 2050, WiFi6, SSD ultrarrápido y diseño sustentable, siente cómo tu juego se eleva hasta donde quieras.",
  3000,
  20,
  ["../public/hp-1.jpg", "../public/hp-2.jpg", "../public/hp-3.jpg"],
  ["black", "gray"],
  "10%off",

  "Incluye impuesto País y percepción AFIP",
  true
);
const product3 = new Product(
  "003",
  "LAPTOP LENOVO LEGION 5 15ACH6, RYZEN 7-5800H, 16GB, 512GB SSD, RTX 3050 TI, 15.6″FHD, WIN11",
  "Marca: Lenovo Modelo: LEGION 5 15ACH6 Pantalla: 15.6 Pulgadas Resolución: FHD (1920 × 1080) – 120Hz Procesador: AMD Ryzen 7-5800H Gráficos: Nvidia GeForce RTX 3050 Ti 4GB Memoria RAM: 16GB DDR4 Almacenamiento: 512GB SSD Teclado: Español / Retroiluminado Sistema Operativo: Windows 11 Garantía: 1 año",
  4020,
  20,
  [
    "../public/lenovo-1.webp",
    "../public/lenovo-2.webp",
    "../public/lenovo-3.webp",
  ],
  ["black", "bluesky"],
  "22%off",

  "Incluye impuesto País y percepción AFIP",
  false
);
const product4 = new Product(
  "004",
  "LAPTOP ACER NITRO AMD RYZEN 5 7535HS 8GB 512GB SSD 15.6` FHD IPS 144HZ RTX3050 4GB W11",
  "Domina el mundo del juego con la potencia combinada de un procesador AMD Ryzen™ serie 60001 y la tarjeta gráfica NVIDIA® GeForce RTX™ 3070 Ti (completamente optimizada para un MGP máximo). Configura tu laptop para conseguir la máxima velocidad y un gran almacenamiento con dos ranuras para unidades PCIe M.2 y una memoria RAM DDR5 48001 de hasta 32 GB.",
  4919,
  20,
  ["../public/acer-1.jpg", "../public/acer-2.jpg", "../public/acer-3.jpg"],
  ["black", "redvine"],
  "11%off",

  "Incluye impuesto País y percepción AFIP"
  ,true
);
const product5 = new Product(
  "005",
  "LAPTOP GAMER ASUS AMD RYZEN 5 RTX 2050 8Gb RAM 512Gb SSD TUF GAMING A15 SERIE 7000 15.6",
  "La ASUS TUF Gaming A15 cuenta con todo lo que necesitas para derrotar a la competencia, como componentes de alto rendimiento enfriados por un sistema térmico con módulos anti polvo y durabilidad testeada bajo pruebas de grado militar.",
  2699,
  20,
  ["../public/asus-1.jpg", "../public/asus-2.jpg", "../public/asus-3.jpg"],
  ["black", "blue"],
  "18%off",

  "Incluye impuesto País y percepción AFIP",
  true
);
const product6 = new Product(
  "006",
  "LAPTOP ASUS G513RC-HN036W 15.6` AMD RYZEN 7 (6000 SERIES) 16GB 512GB SSD",
  "512GB M.2 NVMe PCIe 3.0 SSD, Video NVIDIA GeForce RTX 3050 Laptop GPU 4GB GDDR6, LAN GbE (RJ-45), WLAN Wi-Fi 6E (802.11ax) 2x2 + Bluetooth 5.2, Audio HD / Parlantes (2-Speakers) Dolby Atmos+ Microfono incorporados, Se incluye Camara Web FHD externa 1080@60FPS, Bateria 56WHrs / 4S1P / 4-cell Li-ion, Adaptador de poder ø6.0 / 200W AC Adapter / Output: 20V DC, 10A / Input: 100~240V AC, 50/60Hz universal, Color Eclipse Gray (Gris).Incluye Backpack (Mochila) / Mouse ROG Impact Gaming / Camara Externa FHD 1080P@60FPS Sistema Operativo Windows 11 Home, 64-bits en español.",
  4299,
  20,
  ["../public/asus-4.webp", "../public/asus-5.webp", "../public/asus-6.webp"],
  ["black", "bluesky"],
  "50%off",

  "Incluye impuesto País y percepción AFIP",
  true
);
const product7 = new Product(
  "Y7Z8A9",
  "Kindle Paperwhite",
  "Experience the joy of reading with the Kindle Paperwhite. This e-reader features a 6-inch high-resolution display with built-in lighting, providing a comfortable reading experience in any lighting conditions. With WiFi connectivity, you can easily access a vast library of books and other content. The sleek design and compact size make it perfect for on-the-go reading. Whether you're a bookworm or a casual reader, the Kindle Paperwhite offers a convenient and enjoyable way to indulge in your favorite literary adventures.",
  1000,
  2,
  [
    "https://i.postimg.cc/nzqG0FKH/kindle1.jpg",
    "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
  ],
  ["Black", "White"],
  "30%off",
  "Incluye impuesto País y percepción AFIP",
  false
);
const product8 = new Product(
  "Y7Z8A90",
  "Kindle PW Mini",
  "Experience the joy of reading with the Kindle Paperwhite. This e-reader features a 5-inch high-resolution display with built-in lighting, providing a comfortable reading experience in any lighting conditions. With WiFi connectivity, you can easily access a vast library of books and other content. The sleek design and compact size make it perfect for on-the-go reading. Whether you're a bookworm or a casual reader, the Kindle Paperwhite offers a convenient and enjoyable way to indulge in your favorite literary adventures.",
  500,
  2,
  [
    "https://i.postimg.cc/2ymFtsTn/kindle2.jpg",
    "https://i.postimg.cc/nzqG0FKH/kindle1.jpg",
  ],
  ["Black", "White"],
  "40%off",
  "Incluye impuesto País y percepción AFIP"
);
const product9 = new Product(
  "B1C2D3",
  "Bose SoundLink Revolve",
  "Elevate your audio experience with the Bose SoundLink Revolve Bluetooth speaker. Its sleek design and black color make it a stylish addition to any space. Enjoy 360-degree sound coverage, creating an immersive listening experience. With wireless connectivity, you can easily connect your devices and play your favorite music. The built-in rechargeable battery ensures hours of playback on a single charge. Whether you're hosting a party or enjoying a quiet evening at home, the Bose SoundLink Revolve delivers rich and clear audio that enhances every moment.",
  2000,
  1,
  [
    "https://i.postimg.cc/QM5P5rz3/bose1.jpg",
    "https://i.postimg.cc/JnLF52wB/bose2.jpg",
    "https://i.postimg.cc/wvQGfQH4/bose3.jpg",
  ],
  ["Black", "Silver"],
  "32%off",
  "Incluye impuesto País y percepción AFIP"
);
const product10 = new Product(
  "B1C2D30",
  "Bose SoundLink Terminator",
  "Elevate your audio experience with the Bose SoundLink Revolve Bluetooth speaker. Its sleek design and black color make it a stylish addition to any space. Enjoy 360-degree sound coverage, creating an immersive listening experience. With wireless connectivity, you can easily connect your devices and play your favorite music. The built-in rechargeable battery ensures hours of playback on a single charge. Whether you're hosting a party or enjoying a quiet evening at home, the Bose SoundLink Revolve delivers rich and clear audio that enhances every moment.",
  1000,
  1,
  [
    "https://i.postimg.cc/wvQGfQH4/bose3.jpg",
    "https://i.postimg.cc/QM5P5rz3/bose1.jpg",
    "https://i.postimg.cc/JnLF52wB/bose2.jpg",
  ],
  ["Black", "Silver"],
  "28%off",
  "Incluye impuesto País y percepción AFIP",
  true
);
const product11 = new Product(
  "A1B2C3",
  "MacBook Pro 13'4",
  "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
  5200,
  1,
  [
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Silver", "Space Gray"],
  "8%off",
  "Incluye impuesto País y percepción AFIP"
);
const product12 = new Product(
  "A1B2C30",
  "MacBook 12'",
  "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
  5000,
  1,
  [
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
  ],
  ["Silver", "Space Gray"],
  "15%off",
  "Incluye impuesto País y percepción AFIP"
);
const product13 = new Product(
  "D4E5F6",
  "MacBook Pro 15'4",
  "Unleash your productivity with the MacBook Pro 15'4. Boasting 8GB of RAM and 512GB of storage, this laptop is a powerhouse for multitasking and content creation. The silver and space gray colors add a touch of elegance to its design. The large Retina display provides a stunning visual experience for all your tasks, from graphic design to video editing. Whether you're a professional on the go or a creative individual working on intensive projects, the MacBook Pro 15'4 delivers the performance you need.",
  6200,
  2,
  [
    "https://i.postimg.cc/L5W4515D/note.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Silver", "Space Gray"],
  "20%off",
  "Incluye impuesto País y percepción AFIP"
);
const product14 = new Product(
  "D4E5F60",
  "MacBook Pro 17'",
  "Unleash your productivity with the MacBook Pro 15'4. Boasting 8GB of RAM and 512GB of storage, this laptop is a powerhouse for multitasking and content creation. The silver and space gray colors add a touch of elegance to its design. The large Retina display provides a stunning visual experience for all your tasks, from graphic design to video editing. Whether you're a professional on the go or a creative individual working on intensive projects, the MacBook Pro 15'4 delivers the performance you need.",
  9000,
  2,
  [
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
  ],
  ["Silver", "Space Gray"],
  "27%off",
  "Incluye impuesto País y percepción AFIP"
);
const product15 = new Product(
  "G7H8I9",
  "Lenovo",
  "Enhance your computing experience with the Lenovo 13'4 laptop. Featuring 8GB of RAM and 256GB of storage, this laptop offers a perfect balance of performance and portability. The sleek design, combined with the black and silver colors, adds a touch of sophistication. The 13'4 display provides crisp visuals for work or entertainment. With the latest technology and a compact form factor, the Lenovo laptop is an ideal choice for professionals and students alike.",
  3750,
  1,
  [
    "https://i.postimg.cc/L5W4515D/note.jpg",
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Black", "Silver"],
  "14%off",
  "Incluye impuesto País y percepción AFIP"
);
const product16 = new Product(
  "G7H8I90",
  "Lenovo",
  "Enhance your computing experience with the Lenovo 13'4 laptop. Featuring 8GB of RAM and 256GB of storage, this laptop offers a perfect balance of performance and portability. The sleek design, combined with the black and silver colors, adds a touch of sophistication. The 13'4 display provides crisp visuals for work or entertainment. With the latest technology and a compact form factor, the Lenovo laptop is an ideal choice for professionals and students alike.",
  4500,
  1,
  [
    "https://i.postimg.cc/HxGQcrcp/mock1.jpg",
    "https://i.postimg.cc/Y91Q1tYQ/mock2.jpg",
  ],
  ["Black", "Silver"],
  "25%off",
  "Incluye impuesto País y percepción AFIP"
);
const product17 = new Product(
  "J1K2L3",
  "Samsung Galaxy S21",
  "Unleash the power of innovation with the Samsung Galaxy S21 smartphone. With 128GB of storage and a sleek black color, this smartphone combines style with functionality. The advanced camera system captures stunning photos and videos, whether you're exploring nature or documenting everyday moments. The vibrant display and powerful processor provide a seamless and immersive user experience. Stay connected with high-speed connectivity and enjoy all the features and apps the Galaxy S21 has to offer. Elevate your mobile experience with this cutting-edge smartphone from Samsung.",
  4320,
  1,
  [
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/hvQWC348/galaxy2.jpg",
    "https://i.postimg.cc/j55rfSGF/galaxy3.jpg",
  ],
  ["Black", "Silver", "White"],
  "34%off",
  "Incluye impuesto País y percepción AFIP"
);
const product18 = new Product(
  "J1K2L30",
  "Samsung Galaxy S21 PRO",
  "Unleash the power of innovation with the Samsung Galaxy S21 smartphone. With 128GB of storage and a sleek black color, this smartphone combines style with functionality. The advanced camera system captures stunning photos and videos, whether you're exploring nature or documenting everyday moments. The vibrant display and powerful processor provide a seamless and immersive user experience. Stay connected with high-speed connectivity and enjoy all the features and apps the Galaxy S21 has to offer. Elevate your mobile experience with this cutting-edge smartphone from Samsung.",
  4200,
  1,
  [
    "https://i.postimg.cc/hvQWC348/galaxy2.jpg",
    "https://i.postimg.cc/Jn2C5W84/galaxy1.webp",
    "https://i.postimg.cc/j55rfSGF/galaxy3.jpg",
  ],
  ["Black", "Silver", "White"],
  "33%off",
  "Incluye impuesto País y percepción AFIP"
);
const product19 = new Product(
  "M4N5O6",
  "Apple Watch Series 6",
  "Embrace a healthier lifestyle with the Apple Watch Series 6. With a 44mm display, GPS functionality, and a sleek space gray color, this smartwatch is the perfect companion for your fitness journey. Track your workouts, monitor your health, and stay connected on the go. The high-resolution Retina display provides clear visuals, whether you're checking notifications or tracking your fitness goals. With a variety of customizable watch faces and bands, the Apple Watch Series 6 lets you express your personal style while enjoying the latest in wearable technology.",
  1300,
  1,
  [
    "https://i.postimg.cc/VstzWdJx/watch.jpg",
    "https://i.postimg.cc/3N278cM8/watch1.jpg",
  ],
  ["Space Gray", "Silver", "Gold"],
  "40%off",
  "Incluye impuesto País y percepción AFIP"
);
const product20 = new Product(
  "M4N5O60",
  "Apple Watch Series 5",
  "Embrace a healthier lifestyle with the Apple Watch Series 6. With a 44mm display, GPS functionality, and a sleek space gray color, this smartwatch is the perfect companion for your fitness journey. Track your workouts, monitor your health, and stay connected on the go. The high-resolution Retina display provides clear visuals, whether you're checking notifications or tracking your fitness goals. With a variety of customizable watch faces and bands, the Apple Watch Series 6 lets you express your personal style while enjoying the latest in wearable technology.",
  1100,
  1,
  [
    "https://i.postimg.cc/3N278cM8/watch1.jpg",
    "https://i.postimg.cc/VstzWdJx/watch.jpg",
  ],
  ["Space Gray", "Silver", "Gold"],
  "17%off",
  "Incluye impuesto País y percepción AFIP"
);
const product21 = new Product(
  "P7Q8R9",
  "iPad Pro 12.9",
  "The iPad Pro 12.9 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs.",
  4600,
  1,
  [
    "https://i.postimg.cc/kX8PKZpq/ipad.jpg",
    "https://i.postimg.cc/jqBrWKvM/ipad2.jpg",
  ],
  ["Silver", "Space Gray", "Gold"],
  "26%off",
  "Incluye impuesto País y percepción AFIP"
);
const product22 = new Product(
  "P7Q8R90",
  "iPad Pro 13",
  "The iPad Pro 13 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs.",
  3800,
  1,
  [
    "https://i.postimg.cc/jqBrWKvM/ipad2.jpg",
    "https://i.postimg.cc/kX8PKZpq/ipad.jpg",
  ],
  ["Silver", "Space Gray", "Gold"],
  "28%off",
  "Incluye impuesto País y percepción AFIP"
);
const product23 = new Product(
  "S1T2U3",
  "Sony WH-1000XM4",
  "Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
  250,
  1,
  [
    "https://i.postimg.cc/pVsHPznM/sony1.jpg",
    "https://i.postimg.cc/L58Fz6wW/sony1.webp",
    "https://i.postimg.cc/7ht8XryZ/sony2.jpg",
  ],
  ["Black", "Silver"],
  "3%off",
  "Incluye impuesto País y percepción AFIP"
);
const product24 = new Product(
  "S1T2U30",
  "Sony WH-1000",
  "Immerse yourself in the world of music with the Sony WH-1000XM4 wireless headphones. These over-ear headphones feature industry-leading noise cancellation technology, ensuring a premium listening experience in any environment. The sleek black color adds a touch of elegance. With multiple touch controls, you can easily manage your music playback and calls. The headphones are equipped with a powerful battery that provides hours of listening on a single charge. Whether you're commuting, traveling, or simply enjoying your favorite tunes at home, the Sony WH-1000XM4 delivers unparalleled sound quality and comfort.",
  200,
  1,
  [
    "https://i.postimg.cc/L58Fz6wW/sony1.webp",
    "https://i.postimg.cc/pVsHPznM/sony1.jpg",
    "https://i.postimg.cc/7ht8XryZ/sony2.jpg",
  ],
  ["Black", "Silver"],
  "11%off",
  "Incluye impuesto País y percepción AFIP"
);
const product25 = new Product(
  "V4W5X6",
  "GoPro HERO9 Black",
  "Capture your adventures in stunning detail with the GoPro HERO9 Black. This action camera boasts 5K video recording and is waterproof, making it perfect for all your outdoor activities. The sleek black design adds a touch of style to your gear. With multiple shooting modes and advanced features, the HERO9 Black is a versatile tool for both professionals and enthusiasts. Share your experiences with the world through high-quality footage and photos. Whether you're diving into the ocean, skiing down the slopes, or simply exploring your surroundings, the GoPro HERO9 Black is your reliable companion.",
  3400,
  1,
  [
    "https://i.postimg.cc/WbcbB2MB/gopro12.png",
    "https://i.postimg.cc/8k6zXFrd/gopro2.png",
  ],
  ["Black"],
  "9%off",
  "Incluye impuesto País y percepción AFIP"
);
const product26 = new Product(
  "V4W5X60",
  "GoPro HE9",
  "Capture your adventures in stunning detail with the GoPro HERO9 Black. This action camera boasts 5K video recording and is waterproof, making it perfect for all your outdoor activities. The sleek black design adds a touch of style to your gear. With multiple shooting modes and advanced features, the HERO9 Black is a versatile tool for both professionals and enthusiasts. Share your experiences with the world through high-quality footage and photos. Whether you're diving into the ocean, skiing down the slopes, or simply exploring your surroundings, the GoPro HERO9 Black is your reliable companion.",
  3000,
  1,
  [
    "https://i.postimg.cc/8k6zXFrd/gopro2.png",
    "https://i.postimg.cc/WbcbB2MB/gopro12.png",
  ],
  ["Black"],
  "21%off",
  "Incluye impuesto País y percepción AFIP"
);

//Creamos el array de los productos
const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
  product25,
  product26,
];

export default products;
