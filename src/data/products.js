const products =[
    {
      "id": 1,
      "name": "Eternal Love Diamond Ring",
      "price": 2999,
      "url": "/images/eternal-love-ring.jpg",
      "description": "A stunning diamond ring with a round cut and brilliant shine, set in 18k white gold.",
      "image": "/images/eternal-love-ring.jpg",
      "color": "white",
      "shape": "Emerald",
      "type": "ring",
      "metal": "18k White Gold",
      "gem": {
        "type": "diamond",
        "color": "H",
        "clarity": "VS1",
        "cut": "Emerald",
        "carat": 0.7
      },
      "tags": ["engagement", "classic", "timeless"],
      "categories": ["18k white gold", "diamond"]
    },
    {
      "id": 2,
      "name": "Elegant Pearl Necklace",
      "price": 1500,
      "url": "/images/elegant-pearl-necklace.jpg",
      "description": "A beautiful pearl necklace, elegant and timeless.",
      "image": "/images/elegant-pearl-necklace.jpg",
      "color": "white",
      "shape": "Round",
      "type": "necklace",
      "metal": "14k Gold",
      "gem": {
        "type": "pearl",
        "color": "White",
        "lustre": "High",
        "size": "10mm"
      },
      "tags": ["classic", "timeless", "pearl"],
      "categories": ["14k Gold", "pearl"]
    },
    {
      "id": 3,
      "name": "Vintage Ruby Engagement Ring",
      "price": 2200,
      "url": "/images/vintage-ruby-ring.jpg",
      "description": "A vintage-inspired ruby engagement ring with intricate designs, set in 18k yellow gold.",
      "image": "/images/vintage-ruby-ring.jpg",
      "color": "red",
      "shape": "Round",
      "type": "ring",
      "metal": "18k Yellow Gold",
      "gem": {
        "type": "ruby",
        "color": "Red",
        "clarity": "VS2",
        "cut": "Round",
        "carat": 1.2
      },
      "tags": ["engagement", "vintage", "classic"],
      "categories": ["18k Yellow Gold", "ruby"]
    },
    {
      "id": 4,
      "name": "Sapphire Drop Earrings",
      "price": 1800,
      "url": "/images/sapphire-drop-earrings.jpg",
      "description": "Elegant sapphire earrings with a teardrop shape, set in 14k white gold.",
      "image": "/images/sapphire-drop-earrings.jpg",
      "color": "blue",
      "shape": "Teardrop",
      "type": "earrings",
      "metal": "14k White Gold",
      "gem": {
        "type": "sapphire",
        "color": "Blue",
        "clarity": "VVS1",
        "cut": "Teardrop",
        "carat": 1.0
      },
      "tags": ["classic", "elegant", "gift"],
      "categories": ["14k White Gold", "sapphire"]
    },
    {
      "id": 5,
      "name": "Classic Gold Hoop Earrings",
      "price": 950,
      "url": "/images/gold-hoop-earrings.jpg",
      "description": "Simple yet classic gold hoop earrings in 14k yellow gold.",
      "image": "/images/gold-hoop-earrings.jpg",
      "color": "yellow",
      "shape": "Hoop",
      "type": "earrings",
      "metal": "14k Yellow Gold",
      "gem": {
        "type": "none",
        "color": "Gold",
        "clarity": "N/A",
        "cut": "N/A",
        "carat": "N/A"
      },
      "tags": ["classic", "everyday", "gold"],
      "categories": ["14k Yellow Gold"]
    },
    {
      "id": 6,
      "name": "Opal and Diamond Ring",
      "price": 3200,
      "url": "/images/opal-diamond-ring.jpg",
      "description": "A mesmerizing opal ring with diamond accents, set in platinum.",
      "image": "/images/opal-diamond-ring.jpg",
      "color": "multicolor",
      "shape": "Oval",
      "type": "ring",
      "metal": "Platinum",
      "gem": {
        "type": "opal",
        "color": "White with multicolor",
        "clarity": "N/A",
        "cut": "Oval",
        "carat": 1.0
      },
      "tags": ["classic", "unique", "opulent"],
      "categories": ["Platinum", "opal", "diamond"]
    },
    {
      "id": 7,
      "name": "Emerald Solitaire Ring",
      "price": 2700,
      "url": "/images/emerald-solitaire-ring.jpg",
      "description": "A solitaire emerald ring, set in 18k white gold.",
      "image": "/images/emerald-solitaire-ring.jpg",
      "color": "green",
      "shape": "Emerald",
      "type": "ring",
      "metal": "18k White Gold",
      "gem": {
        "type": "emerald",
        "color": "Green",
        "clarity": "VS1",
        "cut": "Emerald",
        "carat": 1.0
      },
      "tags": ["classic", "engagement", "elegant"],
      "categories": ["18k White Gold", "emerald"]
    },
    {
      "id": 8,
      "name": "Diamond Tennis Bracelet",
      "price": 3500,
      "url": "/images/diamond-tennis-bracelet.jpg",
      "description": "A luxurious diamond tennis bracelet, set in platinum.",
      "image": "/images/diamond-tennis-bracelet.jpg",
      "color": "white",
      "shape": "Round",
      "type": "bracelet",
      "metal": "Platinum",
      "gem": {
        "type": "diamond",
        "color": "D",
        "clarity": "VVS1",
        "cut": "Round",
        "carat": 5.0
      },
      "tags": ["luxury", "elegant", "classic"],
      "categories": ["Platinum", "diamond"]
    },
    {
      "id": 9,
      "name": "Ruby Stud Earrings",
      "price": 1500,
      "url": "/images/ruby-stud-earrings.jpg",
      "description": "Classic ruby stud earrings in 14k yellow gold.",
      "image": "/images/ruby-stud-earrings.jpg",
      "color": "red",
      "shape": "Round",
      "type": "earrings",
      "metal": "14k Yellow Gold",
      "gem": {
        "type": "ruby",
        "color": "Red",
        "clarity": "VS2",
        "cut": "Round",
        "carat": 0.5
      },
      "tags": ["classic", "luxury", "gift"],
      "categories": ["14k Yellow Gold", "ruby"]
    },
    {
      "id": 10,
      "name": "Platinum Diamond Pendant",
      "price": 4500,
      "url": "/images/platinum-diamond-pendant.jpg",
      "description": "A stunning diamond pendant, set in platinum.",
      "image": "/images/platinum-diamond-pendant.jpg",
      "color": "white",
      "shape": "Round",
      "type": "necklace",
      "metal": "Platinum",
      "gem": {
        "type": "diamond",
        "color": "G",
        "clarity": "VS1",
        "cut": "Round",
        "carat": 1.0
      },
      "tags": ["luxury", "elegant", "gift"],
      "categories": ["Platinum", "diamond"]
    },
    {
      "id": 11,
      "name": "Sapphire Solitaire Ring",
      "price": 2200,
      "url": "/images/sapphire-solitaire-ring.jpg",
      "description": "A stunning sapphire solitaire ring, set in 18k white gold.",
      "image": "/images/sapphire-solitaire-ring.jpg",
      "color": "blue",
      "shape": "Round",
      "type": "ring",
      "metal": "18k White Gold",
      "gem": {
        "type": "sapphire",
        "color": "Blue",
        "clarity": "VVS1",
        "cut": "Round",
        "carat": 1.0
      },
      "tags": ["classic", "engagement", "elegant"],
      "categories": ["18k White Gold", "sapphire"]
    },

  
]