const products = [
    // Casual Wear / Scents
    {
        id: 1,
        category: "casual",
        name: "Morning Dew",
        price: "$85.00",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
        description: "A fresh, invigorating scent that captures the essence of a crisp morning in a citrus grove."
    },
    {
        id: 2,
        category: "casual",
        name: "Sunny Orchard",
        price: "$78.00",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
        description: "Bask in the warmth of summer with notes of ripe peach and golden apricot."
    },
    {
        id: 3,
        category: "casual",
        name: "Linen Breeze",
        price: "$65.00",
        image: "https://images.unsplash.com/photo-1512201066735-96a67cbb2484?auto=format&fit=crop&w=800&q=80",
        description: "Clean, airy, and effortlessly light. The scent of sun-dried linen on a spring afternoon."
    },
    {
        id: 4,
        category: "casual",
        name: "Petal Soft",
        price: "$92.00",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&w=800&q=80",
        description: "A delicate whisper of rose petals and white tea for your daily grace."
    },
    
    // Formal Wear / Scents
    {
        id: 5,
        category: "formal",
        name: "Midnight Velvet",
        price: "$145.00",
        image: "https://images.unsplash.com/photo-1583467875263-d50dec37a88c?auto=format&fit=crop&w=800&q=80",
        description: "Deep, mysterious, and seductive. A rich blend of dark oud and crimson rose."
    },
    {
        id: 6,
        category: "formal",
        name: "Gold Opulence",
        price: "$160.00",
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
        description: "The ultimate evening statement. Warm amber and vanilla bourbon for a regal presence."
    },
    {
        id: 7,
        category: "formal",
        name: "Noir Gala",
        price: "$138.00",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
        description: "Sophistication in a bottle. Smoky incense meets spicy pink pepper."
    },
    {
        id: 8,
        category: "formal",
        name: "Royal Jasmine",
        price: "$155.00",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
        description: "A timeless classic for the most elegant occasions. Pure blooming jasmine."
    },

    // Jewelry
    {
        id: 9,
        category: "jewelry",
        name: "Elysian Necklace",
        price: "$290.00",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        description: "A gold-plated masterpiece featuring our signature floral emblem."
    },
    {
        id: 10,
        category: "jewelry",
        name: "Diamond Dust Studs",
        price: "$450.00",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        description: "Sparkling brilliance to complement your signature scent."
    },
    {
        id: 11,
        category: "jewelry",
        name: "Emerald Cuff",
        price: "$320.00",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
        description: "Intricately designed cuff with deep green emerald accents."
    },
    {
        id: 12,
        category: "jewelry",
        name: "Pearl Cascade",
        price: "$210.00",
        image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80",
        description: "Elegant freshwater pearls that capture the light with every move."
    },

    // Accessories
    {
        id: 13,
        category: "accessories",
        name: "Velvet Clutch",
        price: "$185.00",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
        description: "The perfect companion for your evening perfume. Luxurious velvet finish."
    },
    {
        id: 14,
        category: "accessories",
        name: "Silk Scarf",
        price: "$95.00",
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
        description: "Hand-painted silk scarf featuring botanical illustrations."
    },
    {
        id: 15,
        category: "accessories",
        name: "Aura Timepiece",
        price: "$350.00",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
        description: "A minimalist watch that embodies the Elysian aesthetic of timeless beauty."
    },
    {
        id: 16,
        category: "accessories",
        name: "Leather Travel Set",
        price: "$120.00",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        description: "Keep your favorite perfumes safe on the go with our premium leather case."
    }
];

if (typeof module !== 'undefined') {
    module.exports = products;
}
