const phone = "https://fdn2.gsmarena.com/vv/pics";
const img = "https://images.unsplash.com/";
const apple = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is";

const mobile = `${img}photo-1511707171634-5f897ff02aa9?w=600`;
const watch = `${img}photo-1523275335684-37898b6baf30?w=600`;
const headphone = `${img}photo-1505740420928-5e560c06d30e?w=600`;
const headphone2 = `${img}photo-1546435770-a3e426bf472b?w=600`;
const earbuds = `${img}photo-1606220945770-b5b6c2c55bf1?w=600`;
const charger = `${img}photo-1583863788434-e58a36330cf0?w=600`;
const speaker = `${img}photo-1608043152269-423dbba4e7e1?w=600`;
const speaker2 = `${img}photo-1545454675-3531b543be5d?w=600`;

const products = [

  // Mobiles

  {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    price: 119900,
    rating: 4.8,
    category: "mobiles",
    image: `${phone}/apple/apple-iphone-16-pro-1.jpg`,
    description: "Premium smartphone with titanium design and advanced camera.",
    specifications: {
      Display: "6.3-inch OLED",
      Processor: "A18 Pro",
      Camera: "48MP",
      Network: "5G"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    price: 64999,
    rating: 4.7,
    category: "mobiles",
    image: `${phone}/samsung/samsung-galaxy-s24-5g-1.jpg`,
    description: "Premium Samsung smartphone with Galaxy AI.",
    specifications: {
      Display: "6.2-inch AMOLED",
      Battery: "4000 mAh",
      Camera: "50MP",
      Network: "5G"
    }
  },
  {
    id: 3,
    name: "OnePlus 13",
    brand: "OnePlus",
    price: 69999,
    rating: 4.6,
    category: "mobiles",
    image: `${phone}/oneplus/oneplus-13-1.jpg`,
    description: "Powerful flagship smartphone with fast charging.",
    specifications: {
      Display: "6.82-inch AMOLED",
      Processor: "Snapdragon 8 Elite",
      RAM: "12 GB",
      Storage: "256 GB",
      Battery: "6000 mAh",
      Charging: "100W",
      Network: "5G"
    }
  },
  {
    id: 4,
    name: "Google Pixel 9",
    brand: "Google",
    price: 74999,
    rating: 4.5,
    category: "mobiles",
    image: `${phone}/google/google-pixel-9-1.jpg`,
    description: "Google smartphone with advanced AI and photography.",
    specifications: {
      Display: "6.3-inch OLED",
      Processor: "Tensor G4",
      RAM: "12 GB",
      Battery: "4700 mAh"
    }
  },
  {
    id: 5,
    name: "Nothing Phone 2",
    brand: "Nothing",
    price: 34999,
    rating: 4.4,
    category: "mobiles",
    image: `${phone}/nothing/nothing-phone2-1.jpg`,
    description: "Stylish smartphone with transparent design.",
    specifications: {
      Display: "6.7-inch OLED",
      Processor: "Snapdragon 8+ Gen 1",
      Battery: "4700 mAh",
      Charging: "45W"
    }
  },

  // Mobile Accessories

  {
    id: 6,
    name: "Premium Mobile Cover",
    brand: "Royal",
    price: 499,
    rating: 4.3,
    category: "mobile-accessories",
    image: `${img}photo-1601784551446-20c9e07cdbdb?w=600`,
    description: "Stylish mobile cover for everyday phone protection.",
    specifications: {
      Type: "Back Cover",
      Usage: "Phone Protection"
    }
  },
  {
    id: 7,
    name: "Tempered Glass",
    brand: "Royal",
    price: 299,
    rating: 4.2,
    category: "mobile-accessories",
    image: mobile,
    description: "Protective glass for smartphone screens.",
    specifications: {
      Type: "Screen Protector",
      Usage: "Screen Protection"
    }
  },
  {
    id: 8,
    name: "Magnetic Phone Holder",
    brand: "Royal",
    price: 699,
    rating: 4.4,
    category: "mobile-accessories",
    image: mobile,
    description: "Convenient magnetic holder for smartphones.",
    specifications: {
      Type: "Magnetic Holder",
      Usage: "Hands-free Viewing"
    }
  },
  {
    id: 9,
    name: "Mobile Tripod",
    brand: "Royal",
    price: 999,
    rating: 4.5,
    category: "mobile-accessories",
    image: `${img}photo-1516035069371-29a1b244cc32?w=600`,
    description: "Mobile tripod for photography and video recording.",
    specifications: {
      Type: "Tripod",
      Usage: "Photography"
    }
  },
  {
    id: 10,
    name: "Selfie Stick",
    brand: "Royal",
    price: 799,
    rating: 4.2,
    category: "mobile-accessories",
    image: mobile,
    description: "Portable selfie stick for photos and travel videos.",
    specifications: {
      Type: "Selfie Stick",
      Usage: "Photography"
    }
  },
  {
    id: 11,
    name: "Gaming Trigger",
    brand: "Royal",
    price: 399,
    rating: 4.3,
    category: "mobile-accessories",
    image: `${img}photo-1600080972464-8e5f35f63d08?w=600`,
    description: "Mobile gaming accessory for convenient controls.",
    specifications: {
      Type: "Gaming Trigger",
      Usage: "Mobile Gaming"
    }
  },
  {
    id: 12,
    name: "Smart Watch PRO",
    brand: "Royal",
    price: 2999,
    rating: 4.6,
    category: "mobile-accessories",
    image: watch,
    description: "Premium smartwatch concept for everyday use.",
    specifications: {
      Type: "Smartwatch",
      Usage: "Daily Wear"
    }
  },
  {
    id: 13,
    name: "Mobile Cooling Fan",
    brand: "Royal",
    price: 1499,
    rating: 4.4,
    category: "mobile-accessories",
    image: mobile,
    description: "Cooling accessory for smartphone gaming.",
    specifications: {
      Type: "Cooling Fan",
      Usage: "Mobile Gaming"
    }
  },
  {
    id: 14,
    name: "Camera Lens Protector",
    brand: "Royal",
    price: 349,
    rating: 4.1,
    category: "mobile-accessories",
    image: mobile,
    description: "Protective accessory for smartphone camera lenses.",
    specifications: {
      Type: "Lens Protector",
      Usage: "Camera Protection"
    }
  },
  {
    id: 15,
    name: "Mobile Stand",
    brand: "Royal",
    price: 599,
    rating: 4.3,
    category: "mobile-accessories",
    image: mobile,
    description: "Mobile stand for video calls and entertainment.",
    specifications: {
      Type: "Mobile Stand",
      Usage: "Desktop Viewing"
    }
  },

  // Headphones and Earbuds

  {
    id: 16,
    name: "Royal Studio PRO",
    brand: "Royal",
    price: 2999,
    rating: 4.8,
    category: "headphones",
    image: headphone,
    description: "Premium headphones concept for music lovers.",
    specifications: {
      Type: "Over-ear Headphones",
      Usage: "Music"
    }
  },
  {
    id: 17,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 24999,
    rating: 4.9,
    category: "headphones",
    image: headphone2,
    description: "Premium wireless headphones with noise cancellation.",
    specifications: {
      Connectivity: "Bluetooth 5.2",
      Battery: "Up to 30 Hours with ANC",
      Driver: "30mm",
      "Noise Cancellation": "Active"
    }
  },
  {
    id: 18,
    name: "JBL Tune 770NC",
    brand: "JBL",
    price: 5999,
    rating: 4.5,
    category: "headphones",
    image: headphone2,
    description: "Wireless headphones with JBL Pure Bass Sound.",
    specifications: {
      Connectivity: "Bluetooth 5.3",
      Battery: "Up to 70 Hours without ANC",
      Driver: "40mm"
    }
  },
  {
    id: 19,
    name: "Boat Rockerz 450",
    brand: "Boat",
    price: 1499,
    rating: 4.3,
    category: "headphones",
    image: headphone,
    description: "Wireless headphones for everyday entertainment.",
    specifications: {
      Type: "On-ear Headphones",
      Connectivity: "Bluetooth",
      Driver: "40mm"
    }
  },
  {
    id: 20,
    name: "Beats Studio PRO",
    brand: "Beats",
    price: 29999,
    rating: 4.8,
    category: "headphones",
    image: `${apple}/MQTP3?wid=800&hei=800&fmt=jpeg`,
    description: "Premium headphones with immersive audio.",
    specifications: {
      Connectivity: "Bluetooth",
      Battery: "Up to 40 Hours without ANC",
      "Noise Cancellation": "Active"
    }
  },
  {
    id: 21,
    name: "Apple AirPods Pro",
    brand: "Apple",
    price: 24900,
    rating: 4.8,
    category: "headphones",
    image: `${apple}/MTJV3?wid=800&hei=800&fmt=jpeg`,
    description: "Apple wireless earbuds with immersive sound.",
    specifications: {
      Type: "Wireless Earbuds",
      "Noise Cancellation": "Active",
      "Charging Case": "Included"
    }
  },
  {
    id: 22,
    name: "Royal Buds PRO",
    brand: "Royal",
    price: 1999,
    rating: 4.5,
    category: "headphones",
    image: earbuds,
    description: "Compact earbuds concept for everyday listening.",
    specifications: {
      Type: "Earbuds",
      Usage: "Music and Calls"
    }
  },
  {
    id: 23,
    name: "OnePlus Buds 3",
    brand: "OnePlus",
    price: 5499,
    rating: 4.6,
    category: "headphones",
    image: earbuds,
    description: "Wireless earbuds with dual drivers and ANC.",
    specifications: {
      Connectivity: "Bluetooth 5.3",
      Battery: "Up to 44 Hours with Case, ANC Off",
      ANC: "Up to 49dB"
    }
  },
  {
    id: 24,
    name: "Realme Buds Air 6",
    brand: "Realme",
    price: 2999,
    rating: 4.4,
    category: "headphones",
    image: earbuds,
    description: "Wireless earbuds with powerful sound.",
    specifications: {
      Driver: "12.4mm",
      ANC: "Up to 50dB",
      Type: "Wireless Earbuds"
    }
  },
  {
    id: 25,
    name: "Samsung Galaxy Buds",
    brand: "Samsung",
    price: 9999,
    rating: 4.6,
    category: "headphones",
    image: earbuds,
    description: "Samsung earbuds for portable listening.",
    specifications: {
      Type: "Wireless Earbuds",
      Connectivity: "Bluetooth"
    }
  },
  {
    id: 26,
    name: "Noise Wireless Buds",
    brand: "Noise",
    price: 1299,
    rating: 4.2,
    category: "headphones",
    image: earbuds,
    description: "Compact wireless earbuds for daily use.",
    specifications: {
      Type: "Wireless Earbuds",
      Connectivity: "Bluetooth"
    }
  },
  {
    id: 27,
    name: "Boat Airdopes 141",
    brand: "Boat",
    price: 999,
    rating: 4.3,
    category: "headphones",
    image: earbuds,
    description: "Wireless earbuds for music and calls.",
    specifications: {
      Type: "Wireless Earbuds",
      Connectivity: "Bluetooth",
      "Charging Case": "Included"
    }
  },
  {
    id: 28,
    name: "Royal Gaming PRO",
    brand: "Royal",
    price: 3999,
    rating: 4.6,
    category: "headphones",
    image: headphone2,
    description: "Gaming headphones concept for entertainment.",
    specifications: {
      Type: "Gaming Headphones",
      Usage: "Gaming"
    }
  },
  {
    id: 29,
    name: "JBL Wireless Earbuds",
    brand: "JBL",
    price: 4499,
    rating: 4.5,
    category: "headphones",
    image: earbuds,
    description: "Portable wireless earbuds for music lovers.",
    specifications: {
      Type: "Wireless Earbuds",
      Connectivity: "Bluetooth"
    }
  },
  {
    id: 30,
    name: "Royal Bass Headphones",
    brand: "Royal",
    price: 2499,
    rating: 4.4,
    category: "headphones",
    image: headphone,
    description: "Bass-focused headphones concept for music.",
    specifications: {
      Type: "Headphones",
      Usage: "Entertainment"
    }
  },

  // Chargers

  {
    id: 31,
    name: "Royal 65W Fast Charger",
    brand: "Royal",
    price: 1499,
    rating: 4.6,
    category: "chargers",
    image: charger,
    description: "Fast charger concept for compatible devices.",
    specifications: {
      "Listed Power": "65W",
      Type: "Wall Charger"
    }
  },
  {
    id: 32,
    name: "Apple 20W Adapter",
    brand: "Apple",
    price: 1900,
    rating: 4.7,
    category: "chargers",
    image: `${apple}/MHJA3?wid=800&hei=800&fmt=jpeg`,
    description: "Apple USB-C power adapter.",
    specifications: {
      Power: "20W",
      Port: "USB Type-C"
    }
  },
  {
    id: 33,
    name: "OnePlus 100W Charger",
    brand: "OnePlus",
    price: 2999,
    rating: 4.6,
    category: "chargers",
    image: charger,
    description: "Fast charging adapter for compatible OnePlus phones.",
    specifications: {
      Power: "100W",
      Technology: "SUPERVOOC"
    }
  },
  {
    id: 34,
    name: "Royal Power Bank",
    brand: "Royal",
    price: 1799,
    rating: 4.4,
    category: "chargers",
    image: charger,
    description: "Portable charging accessory for travel.",
    specifications: {
      Type: "Power Bank",
      Usage: "Portable Charging"
    }
  },
  {
    id: 35,
    name: "Wireless Charging Pad",
    brand: "Royal",
    price: 1299,
    rating: 4.3,
    category: "chargers",
    image: charger,
    description: "Charging pad for compatible wireless charging devices.",
    specifications: {
      Type: "Charging Pad",
      Technology: "Wireless Charging"
    }
  },

  // Speakers

  {
    id: 36,
    name: "Royal Bass MAX",
    brand: "Royal",
    price: 3499,
    rating: 4.7,
    category: "speakers",
    image: speaker,
    description: "Premium speaker concept for music lovers.",
    specifications: {
      Type: "Speaker",
      Usage: "Music"
    }
  },
  {
    id: 37,
    name: "JBL Flip 6",
    brand: "JBL",
    price: 8999,
    rating: 4.8,
    category: "speakers",
    image: speaker2,
    description: "Portable JBL speaker with powerful sound.",
    specifications: {
      Power: "30W RMS",
      Battery: "Up to 12 Hours",
      Connectivity: "Bluetooth 5.1",
      "Water Resistance": "IP67"
    }
  },
  {
    id: 38,
    name: "JBL Charge 5",
    brand: "JBL",
    price: 12999,
    rating: 4.7,
    category: "speakers",
    image: speaker,
    description: "Portable Bluetooth speaker with built-in power bank.",
    specifications: {
      Power: "40W RMS",
      Battery: "Up to 20 Hours",
      "Water Resistance": "IP67"
    }
  },
  {
    id: 39,
    name: "Sony Wireless Speaker",
    brand: "Sony",
    price: 7999,
    rating: 4.6,
    category: "speakers",
    image: speaker2,
    description: "Wireless speaker for portable entertainment.",
    specifications: {
      Type: "Wireless Speaker",
      Connectivity: "Bluetooth"
    }
  },
  {
    id: 40,
    name: "Boat Stone 350",
    brand: "Boat",
    price: 1499,
    rating: 4.3,
    category: "speakers",
    image: speaker,
    description: "Compact portable Bluetooth speaker.",
    specifications: {
      Power: "10W",
      Connectivity: "Bluetooth",
      "Water Resistance": "IPX7"
    }
  },
  {
    id: 41,
    name: "Boat Stone 1200",
    brand: "Boat",
    price: 3499,
    rating: 4.5,
    category: "speakers",
    image: speaker2,
    description: "Portable speaker for music and entertainment.",
    specifications: {
      Power: "14W",
      Connectivity: "Bluetooth",
      "Water Resistance": "IPX7"
    }
  },
  {
    id: 42,
    name: "Marshall Emberton",
    brand: "Marshall",
    price: 14999,
    rating: 4.8,
    category: "speakers",
    image: speaker,
    description: "Premium portable speaker with classic Marshall design.",
    specifications: {
      Type: "Portable Speaker",
      Connectivity: "Bluetooth"
    }
  },
  {
    id: 43,
    name: "Bose SoundLink",
    brand: "Bose",
    price: 19999,
    rating: 4.9,
    category: "speakers",
    image: speaker2,
    description: "Premium portable speaker for music lovers.",
    specifications: {
      Type: "Portable Speaker",
      Connectivity: "Bluetooth"
    }
  },
  {
    id: 44,
    name: "Royal Mini Speaker",
    brand: "Royal",
    price: 999,
    rating: 4.2,
    category: "speakers",
    image: speaker,
    description: "Compact speaker concept for everyday entertainment.",
    specifications: {
      Type: "Mini Speaker",
      Usage: "Portable Music"
    }
  },
  {
    id: 45,
    name: "Royal Party Speaker",
    brand: "Royal",
    price: 6999,
    rating: 4.6,
    category: "speakers",
    image: speaker2,
    description: "Party speaker concept for gatherings.",
    specifications: {
      Type: "Party Speaker",
      Usage: "Entertainment"
    }
  },
  {
    id: 46,
    name: "Royal Soundbar PRO",
    brand: "Royal",
    price: 8999,
    rating: 4.7,
    category: "speakers",
    image: speaker,
    description: "Soundbar concept for home entertainment.",
    specifications: {
      Type: "Soundbar",
      Usage: "TV and Entertainment"
    }
  },
  {
    id: 47,
    name: "Royal Pocket Speaker",
    brand: "Royal",
    price: 799,
    rating: 4.2,
    category: "speakers",
    image: speaker2,
    description: "Compact pocket speaker concept for portable music.",
    specifications: {
      Type: "Pocket Speaker",
      Usage: "Portable Music"
    }
  }

];

const backupImages = {
  mobiles: mobile,
  "mobile-accessories": mobile,
  headphones: headphone,
  chargers: charger,
  speakers: speaker2
};

const finalProducts = products.map((product) => ({
  ...product,
  backupImage: backupImages[product.category]
}));

export default finalProducts;