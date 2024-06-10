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
  20,
  "Incluye impuesto País y percepción AFIP",
  true
);
const product29 = new Product(
  "002",
  "LAPTOP HP VICTUS GAMER 15-FB0128LA AMD RYZEN 5 8 GB NVIDIA GEFORCE RTX 3050 GPU (4 GB GDDR6 DEDICATED) 512 GB SSD 15.6 FHD 144HZ WINDOWS 11",
  "La HP Victus Gaming 15 Laptop está a la altura de los juegos más grandes y los mejores jugadores. Con procesador Intel® Core i-H, gráficos hasta NVIDIA® GeForce RTX™ 2050, WiFi6, SSD ultrarrápido y diseño sustentable, siente cómo tu juego se eleva hasta donde quieras.",
  3000,
  20,
  ["../public/hp-1.jpg", "../public/hp-2.jpg", "../public/hp-3.jpg"],
  ["black", "gray"],
  10,

  "Incluye impuesto País y percepción AFIP",
  true
);
const product15 = new Product(
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
  22,

  "Incluye impuesto País y percepción AFIP",
  false
);
const product11 = new Product(
  "004",
  "LAPTOP ACER NITRO AMD RYZEN 5 7535HS 8GB 512GB SSD 15.6` FHD IPS 144HZ RTX3050 4GB W11",
  "Domina el mundo del juego con la potencia combinada de un procesador AMD Ryzen™ serie 60001 y la tarjeta gráfica NVIDIA® GeForce RTX™ 3070 Ti (completamente optimizada para un MGP máximo). Configura tu laptop para conseguir la máxima velocidad y un gran almacenamiento con dos ranuras para unidades PCIe M.2 y una memoria RAM DDR5 48001 de hasta 32 GB.",
  4919,
  20,
  ["../public/acer-1.jpg", "../public/acer-2.jpg", "../public/acer-3.jpg"],
  ["black", "redvine"],
  11,

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
  18,

  "Incluye impuesto País y percepción AFIP",
  true
);
const product10 = new Product(
  "006",
  "LAPTOP ASUS G513RC-HN036W 15.6` AMD RYZEN 7 (6000 SERIES) 16GB 512GB SSD",
  "512GB M.2 NVMe PCIe 3.0 SSD, Video NVIDIA GeForce RTX 3050 Laptop GPU 4GB GDDR6, LAN GbE (RJ-45), WLAN Wi-Fi 6E (802.11ax) 2x2 + Bluetooth 5.2, Audio HD / Parlantes (2-Speakers) Dolby Atmos+ Microfono incorporados, Se incluye Camara Web FHD externa 1080@60FPS, Bateria 56WHrs / 4S1P / 4-cell Li-ion, Adaptador de poder ø6.0 / 200W AC Adapter / Output: 20V DC, 10A / Input: 100~240V AC, 50/60Hz universal, Color Eclipse Gray (Gris).Incluye Backpack (Mochila) / Mouse ROG Impact Gaming / Camara Externa FHD 1080P@60FPS Sistema Operativo Windows 11 Home, 64-bits en español.",
  4299,
  20,
  ["../public/asus-4.webp", "../public/asus-5.webp", "../public/asus-6.webp"],
  ["black", "bluesky"],
  50,

  "Incluye impuesto País y percepción AFIP",
  true
);
const product40 = new Product(
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
  30,
  "Incluye impuesto País y percepción AFIP",
  false
);
const product41 = new Product(
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
  40,
  "Incluye impuesto País y percepción AFIP"
);
const product42 = new Product(
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
  32,
  "Incluye impuesto País y percepción AFIP"
);
const product43 = new Product(
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
  28,
  "Incluye impuesto País y percepción AFIP",
  true
);
const product44 = new Product(
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
  8,
  "Incluye impuesto País y percepción AFIP"
);
const product45 = new Product(
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
  15,
  "Incluye impuesto País y percepción AFIP"
);
const product30 = new Product(
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
  20,
  "Incluye impuesto País y percepción AFIP"
);
const product31 = new Product(
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
  27,
  "Incluye impuesto País y percepción AFIP"
);
const product32 = new Product(
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
  14,
  "Incluye impuesto País y percepción AFIP"
);
const product33 = new Product(
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
  25,
  "Incluye impuesto País y percepción AFIP"
);
const product34 = new Product(
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
  34,
  "Incluye impuesto País y percepción AFIP"
);
const product35 = new Product(
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
  33,
  "Incluye impuesto País y percepción AFIP"
);
const product36 = new Product(
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
  40,
  "Incluye impuesto País y percepción AFIP"
);
const product37 = new Product(
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
  17,
  "Incluye impuesto País y percepción AFIP"
);
const product38 = new Product(
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
  26,
  "Incluye impuesto País y percepción AFIP"
);
const product39 = new Product(
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
  28,
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
  3,
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
  11,
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
  9,
  "Incluye impuesto País y percepción AFIP"
);
const product26 = new Product(
  "J1V2T50",
  "GoPro HE9",
  "Capture your adventures in stunning detail with the GoPro HERO9 Black. This action camera boasts 5K video recording and is waterproof, making it perfect for all your outdoor activities. The sleek black design adds a touch of style to your gear. With multiple shooting modes and advanced features, the HERO9 Black is a versatile tool for both professionals and enthusiasts. Share your experiences with the world through high-quality footage and photos. Whether you're diving into the ocean, skiing down the slopes, or simply exploring your surroundings, the GoPro HERO9 Black is your reliable companion.",
  3000,
  1,
  [
    "https://i.postimg.cc/8k6zXFrd/gopro2.png",
    "https://i.postimg.cc/WbcbB2MB/gopro12.png",
  ],
  ["Black"],
  21,
  "Incluye impuesto País y percepción AFIP"
);
const product27 = new Product(
  "G6Q6F41",
  "Tablet Lenovo M10 3ra Gen 4gb 64gb Wifi + Folio Case",
  "TABLET M10 3RA GEN 4GB 64GB LTE + FOLIO UNSONICT610 10.1 8MP WUXGA 5MP.",
  799,
  1,
  [
    "../public/tab-len1.avif",
    "../public/tab-len2.avif",
    "../public/tab-len3.avif"
  ],
  ["Black", "Silver"],
  21,
  "Incluye impuesto País y percepción AFIP"

  );
const product28 = new Product(
  "I2C3W82",
  "Nintendo SWITCH OLED White",
  "incluye Cargador ,mando manuaL ,Marca: NINTENDO Garantía del proveedor:1 año ,Información adicional: No Aplica, Número de certificación: 4902370548495,  Entradas USB:Sin entradas, Conectividad:WiFi/Bluetooth, Entradas HDMI:1.",
  2099,
  1,
  [
    "../public/swi-1.avif",
    "../public/swi-2.avif",
    "../public/swi-3.avif"
  ],
  ["Black", "White"],
  31,
  "Incluye impuesto País y percepción AFIP"

  );
 const product7 = new Product(
  "J2B6Z13",
  "Televisor 55| Lg Uhd 4k Thinq Ai 55ur7300psa (2023)",
  "LG UHD 55 UR7300 4K Smart TV con ThinQ AI (Inteligencia Artificial), 4K Procesador Inteligente α5 generación 6 (2023) Características especiales Panel: 4K UHD 4K Procesador Inteligente α5 generación 6 Sonido Ultra Surround LG ThinQ AI: Inteligencia Artificial Control Estándar.",
  1899,
  1,
  [
    "../public/lg-1.avif",
    "../public/lg-2.avif",
    "../public/lg-3.avif"
  ],
  ["Black", "Silver"],
  26,
  "Incluye impuesto País y percepción AFIP"

  );
  const product8 = new Product(
  "L2F2C44",
  "Bicicleta Eléctrica Plegable Litio Extraíble FL2 Negro",
  "Esta bicicleta eléctrica GreenLine posee una Velocidad Máxima de 25 km/h de acuerdo a ley, con una Autonomía de 25 - 35 km, lo cual te permite desplazarte de forma cómoda y segura, bien sea para ir a tu trabajo, colegio o de paseo. De la misma forma, con su excelente Motor de 240W y su Batería Litio de 36 voltios y 8 Amperes extraíble, tendrás el rendimiento requerido para llegar a tu destino sin problemas. Posee además frenos de disco en ambas ruedas para mayor seguridad y un sistema de 7 cambios marca SHIMANO te ofrece el equilibrio perfecto entre velocidad y control.",
  2750,
  1,
  [
    "../public/bici-1.avif",
    "../public/bici-2.avif",
    "../public/bici-3.avif"
  ],
  ["Black", "Silver"],
  24,
  "Incluye impuesto País y percepción AFIP"

  ); 
  const product9 = new Product(
  "H2A7C95",
  "Consola PS5 Digital Slim + Returnal +Ratchet & Clank",
  "¿Qué incluye?=Control inalámbrico SSD de 1 TB, unidad de disco4 2 pies de soporte horizontales Cable HDMI® Cable de alimentación de CA Cable USB, materiales impresos. SALA DE JUEGOS DE ASTRO(Juego preinstalado) Juego Digital (Voucher) - Returnal Juego Digital (Voucher) - Ratchet & Clank: Rift Apart Control inalámbrico SSD de 1 TB, unidad de disco4 2 pies de soporte horizontales Cable HDMI® Cable de alimentación de CA Cable USB, materiales impresos. SALA DE JUEGOS DE ASTRO(Juego preinstalado) Juego Digital (Voucher) - Returnal Juego Digital (Voucher) - Ratchet & Clank: Rift Apart Control inalámbrico SSD de 1 TB, unidad de disco4 2 pies de soporte horizontales Cable HDMI® Cable de alimentación de CA Cable USB, materiales impresos. SALA DE JUEGOS DE ASTRO(Juego preinstalado) Juego Digital (Voucher) - Returnal Juego Digital (Voucher) - Ratchet & Clank: Rift Apart .",
  2299,
  1,
  [
    "../public/ps5-1.avif",
    "../public/ps5-2.avif",
    "../public/ps5-3.avif"
  ],
  ["Black", "White"],
  5,
  "Incluye impuesto País y percepción AFIP"

  );
  const product6 = new Product(
  "P2V3C16",
  "Apple Watch Series 9 45mm",
  "Batería = Batería de iones de litio recargable integrada, GPS integrado = Sí, Medición de valores corporales = No, Memoria expandible = No, aplica Memoria interna = 64GB, Conexión Bluetooth = Sí, Conexión WiFi = Sí, Recepción de llamadas=Sí,  Resistente al agua = Resistencia al agua de 50 m (diseñado para nadar), Sistema operativo = Watch OS,  Sistema operativo compatible= IOS ,Procesador=Chip S9 SiP.",
  2499,
  1,
  [
    "../public/iwatch-1.avif",
    "../public/iwatch-2.avif",
    "../public/iwatch-3.avif"
  ],
  ["Black", "Blue"],
  12,
  "Incluye impuesto País y percepción AFIP"

  );
  const product4 = new Product(
  "G5D8A57",
  "Celular Galaxy S24 256GB",
  "Traducción en Vivo. La forma más fácil de comunicarse, La AI puede resumir sus grabaciones de voz, Redimensionar, retocar. Así de fácil. Un intérprete en tu bolsillo, Es grande, más grande y más rápido, Captura los detalles con la cámara, 50MP. Mega megapíxeles, Realiza fotografías a distancia. Incluso en la oscuridad, Acércate más con cada pellizco, Vapor Chamber más resistente.¡A jugar!, La batería para todo el día es más inteligente durante más tiempo, Nuestra pantalla móvil adaptable más brillante bajo el sol",
  4199,
  1,
  [
    "../public/galaxy-1.avif",
    "../public/galaxy-2.avif",
    "../public/galaxy-3.avif"
  ],
  ["Black", "Silver"],
  21,
  "Incluye impuesto País y percepción AFIP"

  );
  const product12 = new Product(
  "K2C3X58",
  "Apple Iphone 14 128gb",
  "Cámara posterior: Principal de 12 Mpx Ultra gran angular de 12 Mpx: Cámara frontal: 12MP Tamaño de la pantalla: 6.1 pulgadas  Memoria interna: 128GB Núcleos del procesador: No aplica Memoria expandible: No aplica Carga rápida: Sí Flash frontal: Sí Marca y modelo del procesador: Apple Chip A15 Bionic Velocidad del procesador: CPU de 6 núcleos (2 de rendimiento y 4 de eficiencia) GPU de 5 núcleos: Neural Engine de 16 núcleos: Memoria RAM: No aplica Batería: No aplica Memoria externa incluida: No Tipo de pantalla: Super Retina XDR Sistema operativo: IOS Lector de huella: No GPS integrado: Sí Conexión Bluetooth: Sí Resistente al agua: IP68 (Protegido contra inmersión) Conectividad: 5G Dual SIM: Doble SIM (Nano SIM y eSIM) Marca: Apple Sensores: Face ID Barómetro: Giroscopio de alto rango dinámico: Acelerómetro de fuerza g alta: Sensor de proximidad: Doble sensor de luz ambiental: Modelo: MPUF3BE/A Nombre comercial: Iphone 14 Tipo: Smartphones Alto: 14.67cm Ancho: 7.15cm Profundidad: 0.78cm Peso: 0.174kg Garantía del proveedor: 1 año Accesorios que incluye: Cable de USBC a conector Lightning Documentación: Número de certificación: No aplica Tasa de refresco: No aplica Versión conexión bluetooth: Bluetooth 5.3 Potencia de carga: No aplica.",
  4999,
  1,
  [
    "../public/iphone-1.avif",
    "../public/iphone-2.avif",
    "../public/iphone-3.avif"
  ],
  ["Midnight", "purple"],
  26,
  "Incluye impuesto País y percepción AFIP"

  );
  const product13 = new Product(
  "K8S2V39",
  "Audifonos Skullcandy Dime Chill Grey",
  "Audifonos Skullcandy Dime Chill Grey, bateria de larga duracion, hasta 28h de uso continuo, cancelacion de ruido, case de recarga de 8 horas, disponible en color blanco, azul y negro.",
  90,
  1,
  [
    "../public/skull-1.avif",
    "../public/skull-2.avif",
    "../public/skull-3.avif"
  ],
  ["Black", "White", "Blue"],
  12,
  "Incluye impuesto País y percepción AFIP"

  );
  const product14 = new Product(
  "C01EG20",
  "Parlante Jbl Charge 5 IP67 30 Watts Azul",
  "La última versión de la Serie Charge de JBL Charge 5 incluye topes de silicona y un llamativo logo de JBL, El altavoz combina una estructura resistente y duradera con un diseño elegante y audaz que se destacará en cualquier escenario. Versión de Bluetooth: 5.1 JBL Signature Pro Bass Radiators, Sonido Extra Bass Emblematico JBL Conecte de forma inalámbrica hasta 2 teléfonos inteligentes o tabletas y túrnense. Rendimiento de sonido increíble con audio rico y claro. Lleva la fiesta a cualquier lugar con 20 horas de musica Diseño con proteccion IP67 a prueba de agua y polvo Conecta varios JBL a la Vez compatibles con JBL PartyBoost para obtener un sonido lo suficientemente grande para cualquier público.",
  899,
  1,
  [
    "../public/jbl-1.avif",
    "../public/jbl-2.avif",
    "../public/jbl-3.avif"
  ],
  ["Black", "Silver"],
  47,
  "Incluye impuesto País y percepción AFIP"

  );
  const product3 = new Product(
  "D2L8B21",
  "Televisor Samsung Smart Tv 55| Crystal Uhd 4k Un55cu8000gxpe (nuevo)",
  "Tamaño de la pantalla: 55 Resolución: 4K Ultra HD Tecnología: CRYSTAL UHD Conexión Bluetooth: Si Entradas USB: 2 Smart TV: Si Entradas HDMI: 3 Control remoto incluido: Si Modelo: UN55CU8000GXPE Tipo: Televisores Entradas VGA: Sin entradas Entradas RCA: Sin entradas Entradas auxiliares de 3.5 mm: No incluye Entrada Internet: Sí Conexión WiFi: Si Android TV: No Peso: 21 2 kg: Profundidad: 22 |63/2:|57: 3D: No Lentes 3D incluidos: No Marca: Samsung Sistema operativo: Tizen Condición del producto: Nuevo.",
  799,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/19849001_01/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/19849001_02/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/19849001_03/w=800,h=800"
  ],
  ["Black", "Silver"],
  21,
  "Incluye impuesto País y percepción AFIP"

  );
  const product16 = new Product(
  "Ñ6R2N92",
  "Bicicleta Eléctrica Plegable Litio Extraíble Shimano 7 Aro20",
  "Bicicleta Eléctrica Plegable GreenLine FL2 NEGRO, Calidad y confianza para todos tus viajes ✅Plegable, batería extraíble, Litio 36V 8AH, ✅Autonomía 30 – 35 km , velocidad crucero, ✅Velocidad 25 km/h, sistema de cambios SHIMANO 7V, aro 20, faro LED, ✅Asiento regulable, claxon, luz freno y dos juego de llaves..",
  2750,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/128474520_01/w=1500,h=1500",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/128474520_02/w=1500,h=1500",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/128474520_04/w=1500,h=1500"
  ],
  ["Black", "Silver"],
  20,
  "Incluye impuesto País y percepción AFIP"

  );
  const product17 = new Product(
  "M5AV903",
  "Consola PS4 Slim 1TB Negro + 2 Mandos + Sports FC 24 Reacondicionada",
  "Garantía por la consola PS4 durante 12 meses. La garantía no incluye a los accesorios, solo consola PS4 No se acepta garantía por golpes..",
  1589,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/125827653_01/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/125827653_02/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/125827653_03/w=800,h=800"
  ],
  ["Black","Blue"],
  18,
  "Incluye impuesto País y percepción AFIP"

  );
  const product18 = new Product(
  "M7C9Z24",
  "Bicicleta Spinning Pro Bodytone Elite",
  "Tipo de resistencia: Magnética Niveles de resistencia: 8 Trabaja: Ejercita los músculos de las piernas trabaje glúteos y abdomen.: Información en pantalla: Computadora de 5 funciones: Scan Distancia: Calorías: Tiempo: Velocidad.: Peso máximo del usuario: 100KG Marca: BODYTONE ELITE Modelo: YQ2209 Tipo: Bicicletas de spinning Alto: 122 cm Ancho: 52 cm Largo: 130 cm Peso: 30 30 kg: Material: Acero Pantalla integrada: Sí Manubrio ajustable: Sí Pedales ajustables: Sí Porta botellas: No Ventilador integrado: No Asiento ajustable: Sí Piñón: Fijo Incluye armado: No Incluye ruedas: Sí ¿Qué incluye?: NO INCLUYE ACCESORIOS Hecho en: China  Garantía del proveedor: 6 MESES Requiere armado: Sí Información adicional: 1- Manillar ajustable 2- Asiento ajustable en altura 3- Tensión continua regulable 4- Tacos antideslizantes 5- Pedales ajustables Condicion del producto: Nuevo.",
  1899,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883145856_1/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883145856_2/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883145856_3/w=800,h=800"
  ],
  ["Black", "Silver"],
  53,
  "Incluye impuesto País y percepción AFIP"

  );
  const product19 = new Product(
  "Q8HVC85",
  "Termoventilador Calefactor Kendal KFH-18",
  "Al elegir Kendal, eliges calidad, rendimiento y un servicio personalizado. Estamos emocionados de expandir nuestra presencia a Perú y llevar la experiencia de climatización de Kendal a nuevos hogares. Descubre lo que la marca líder en climatización tiene para ofrecer y únete a la familia Kendal para disfrutar de un ambiente perfecto en tu hogar, sin importar las condiciones externas. Siempre con el Respaldo de Empresas Mar del Sur, Distribuidor Oficial en Perú y Chile.",
  99,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/129903177_1/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/5752962_2/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/5752962_3/w=800,h=800"
  ],
  ["White", "Silver"],
  30,
  "Incluye impuesto País y percepción AFIP"

  );
  const product20  = new Product(
  "B5E6B46",
  "Xiaomi Watch 2 Black Case With Black Tpu Strap",
  "Marca: XIAOMI Modelo: AC001XIA98 Tipo: Smartwatch Género: Unisex Tipo de pantalla: Digital Tamaño de la pantalla: 1.4 pulgadas Ajuste del brillo: Sí Alarma: Sí Batería: 65h (BT Version) GPS integrado: Sí Medición de valores corporales: Sí",
  799,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20214441_1/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20214441_2/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/20214441_3/w=800,h=800"
  ],
  ["Black", "Blue"],
  13,
  "Incluye impuesto País y percepción AFIP"

  );  
  const product2 = new Product(
  "D2T7G86",
  "Dormitorio Samay 2 Plazas + Cabecera + Sofá Cama + 2 Almohadas",
  "Nivel de confort: Intermedio Tamaño: 2 plazas Relleno: Espuma de alta densidad y panel de resortes bonell Incluye: 02 almohadas + sofá cama + cabecera Garantía: 4 años para colchón y 1 año para tarima",
  1020,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/42747931_1/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/42747931_2/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/42747931_3/w=800,h=800"
  ],
  ["Black", "White"],
  28,
  "Incluye impuesto País y percepción AFIP"

  );  
  const product21 = new Product(
  "A4W2U16",
  "Pantuflas para Niñas",
  "Material superior: Felpa Material de la suela: PVC (Planta de goma) Tipo de artículo: Pantuflas tipo zapatillas Altura del tacón:Plano (≤1 cm) Compatible con: Se adapta a la talla real, tome su talla normal. Material de la plantilla: PVC Número de modelo: Unicornio Temporada: Otoño / Invierno Ideales para la comodidad del hogar¡",
  50,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/130769622_01/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/130769622_02/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/130769622_03/w=800,h=800"
  ],
  ["Whiteblue", "Blue"],
  40,
  "Incluye impuesto País y percepción AFIP"

  );  
  const product22 = new Product(
  "Q2T7O16",
  "Sofá Gatsby 3 Cuerpos Tela",
  "Productos elegantes, sobrios y nobles, para entregar sofisticación a la cotidianidad, con una visión contemporánea, un diseño actual y diferenciado, sin perder atemporalidad.",
  2999,
  1,
  [
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/882728088_1/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/882728088_2/w=800,h=800",
    "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/882728088_4/w=800,h=800"
  ],
  ["Brown", "Gray"],
  47,
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
  product27,
  product28,
  product29,
  product30,
  product31,
  product32,
  product33,
  product34,
  product35,
  product36,
  product37,
  product38,
  product39,
  product40,
  product41,
  product42,
  product43,
  product44,
  product45
];

export default products;
