// Recipe database inspired by highly-rated recipes from Mob Kitchen, Ottolenghi,
// The Happy Pear, Salt Fat Acid Heat, Serious Eats, BBC Good Food, and Simple Home Edit.
// Nutritional values are per serving and approximate.

export const RECIPES = [
  // ─── LUNCHES ────────────────────────────────────────────────────────────────
  {
    id: "l001",
    name: "Smashed Cucumber & Peanut Noodles",
    meal: "lunch",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["vegetarian", "vegan", "quick", "highProtein"],
    tags: ["noodles", "asian", "cold"],
    cookTime: 15,
    prepTime: 10,
    image: "🥒",
    description: "Silky rice noodles tossed in a punchy sesame-peanut dressing with smashed cucumber, spring onion and chilli. Ready in 15 minutes.",
    ingredients: [
      { item: "rice noodles", qty: 100, unit: "g", perServing: true },
      { item: "cucumber", qty: 1, unit: "whole", perServing: false },
      { item: "peanut butter", qty: 3, unit: "tbsp", perServing: false },
      { item: "soy sauce", qty: 2, unit: "tbsp", perServing: false },
      { item: "sesame oil", qty: 1, unit: "tbsp", perServing: false },
      { item: "rice vinegar", qty: 1, unit: "tbsp", perServing: false },
      { item: "garlic cloves", qty: 2, unit: "whole", perServing: false },
      { item: "spring onions", qty: 3, unit: "whole", perServing: false },
      { item: "red chilli", qty: 1, unit: "whole", perServing: false },
      { item: "sesame seeds", qty: 1, unit: "tbsp", perServing: false },
      { item: "lime", qty: 1, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 420, protein: 14, carbs: 58, fat: 16, fibre: 4 },
    steps: [
      "Cook rice noodles per packet instructions, drain and rinse cold.",
      "Smash cucumber with a rolling pin, tear into chunks, salt and leave 5 mins then drain.",
      "Whisk peanut butter, soy sauce, sesame oil, rice vinegar, minced garlic and lime juice.",
      "Toss noodles and cucumber in dressing. Top with spring onion, chilli and sesame seeds."
    ]
  },
  {
    id: "l002",
    name: "Roasted Red Pepper & Tomato Soup",
    meal: "lunch",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["vegetarian", "vegan", "batchCook", "healthy"],
    tags: ["soup", "roasted", "warming"],
    cookTime: 35,
    prepTime: 10,
    image: "🫑",
    description: "Deep, smoky roasted pepper and tomato soup — perfect for batch cooking. Serve with crusty bread.",
    ingredients: [
      { item: "red peppers", qty: 4, unit: "whole", perServing: false },
      { item: "tinned chopped tomatoes", qty: 2, unit: "400g tins", perServing: false },
      { item: "onion", qty: 1, unit: "whole", perServing: false },
      { item: "garlic bulb", qty: 1, unit: "whole", perServing: false },
      { item: "vegetable stock", qty: 500, unit: "ml", perServing: false },
      { item: "smoked paprika", qty: 1, unit: "tsp", perServing: false },
      { item: "olive oil", qty: 2, unit: "tbsp", perServing: false },
      { item: "sourdough bread", qty: 2, unit: "slices", perServing: true },
    ],
    nutrition: { calories: 280, protein: 7, carbs: 42, fat: 9, fibre: 8 },
    steps: [
      "Halve peppers, place with garlic and onion on a tray, drizzle oil, roast at 200°C for 25 mins.",
      "Squeeze garlic from skins, blend all roasted veg with tomatoes, stock and paprika.",
      "Simmer 10 mins, season well. Serve with crusty sourdough."
    ]
  },
  {
    id: "l003",
    name: "Chicken Caesar Wrap",
    meal: "lunch",
    source: "BBC Good Food",
    sourceUrl: "https://www.bbcgoodfood.com",
    category: ["meat", "quick", "highProtein"],
    tags: ["wrap", "chicken", "salad"],
    cookTime: 15,
    prepTime: 10,
    image: "🌯",
    description: "Grilled chicken, crisp romaine, parmesan and a creamy Caesar dressing in a toasted flour tortilla.",
    ingredients: [
      { item: "chicken breast", qty: 150, unit: "g", perServing: true },
      { item: "flour tortillas", qty: 1, unit: "large", perServing: true },
      { item: "romaine lettuce", qty: 2, unit: "handfuls", perServing: true },
      { item: "parmesan", qty: 20, unit: "g", perServing: true },
      { item: "caesar dressing", qty: 2, unit: "tbsp", perServing: true },
      { item: "lemon", qty: 0.5, unit: "whole", perServing: true },
      { item: "olive oil", qty: 1, unit: "tbsp", perServing: false },
      { item: "garlic powder", qty: 0.5, unit: "tsp", perServing: false },
    ],
    nutrition: { calories: 490, protein: 42, carbs: 38, fat: 18, fibre: 3 },
    steps: [
      "Season chicken with garlic powder, salt and pepper. Pan-fry in olive oil 6–7 mins each side.",
      "Slice chicken, toss with lettuce, parmesan, dressing and lemon juice.",
      "Fill tortilla, fold and toast in a dry pan 1 min each side."
    ]
  },
  {
    id: "l004",
    name: "Spiced Lentil & Spinach Soup",
    meal: "lunch",
    source: "The Happy Pear",
    sourceUrl: "https://thehappypear.ie",
    category: ["vegetarian", "vegan", "batchCook", "highProtein", "healthy"],
    tags: ["soup", "lentils", "spiced"],
    cookTime: 30,
    prepTime: 10,
    image: "🍵",
    description: "Hearty red lentil soup loaded with spinach, cumin and coriander. A complete meal in a bowl.",
    ingredients: [
      { item: "red lentils", qty: 200, unit: "g", perServing: false },
      { item: "baby spinach", qty: 100, unit: "g", perServing: false },
      { item: "onion", qty: 1, unit: "whole", perServing: false },
      { item: "garlic cloves", qty: 3, unit: "whole", perServing: false },
      { item: "ground cumin", qty: 2, unit: "tsp", perServing: false },
      { item: "ground coriander", qty: 1, unit: "tsp", perServing: false },
      { item: "turmeric", qty: 0.5, unit: "tsp", perServing: false },
      { item: "vegetable stock", qty: 1, unit: "litre", perServing: false },
      { item: "tinned chopped tomatoes", qty: 1, unit: "400g tin", perServing: false },
      { item: "lemon", qty: 1, unit: "whole", perServing: false },
      { item: "olive oil", qty: 1, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 310, protein: 20, carbs: 48, fat: 4, fibre: 12 },
    steps: [
      "Sauté onion and garlic in oil until soft. Add spices and cook 1 min.",
      "Add lentils, tomatoes and stock. Simmer 20–25 mins until lentils are soft.",
      "Stir in spinach until wilted. Squeeze in lemon, season and serve."
    ]
  },
  {
    id: "l005",
    name: "Prawn Avocado Rice Bowl",
    meal: "lunch",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["fish", "quick", "highProtein", "healthy"],
    tags: ["bowl", "rice", "prawn"],
    cookTime: 20,
    prepTime: 10,
    image: "🍤",
    description: "Garlic-butter prawns over jasmine rice with sliced avocado, edamame and a soy-sesame drizzle.",
    ingredients: [
      { item: "raw king prawns", qty: 150, unit: "g", perServing: true },
      { item: "jasmine rice", qty: 80, unit: "g", perServing: true },
      { item: "avocado", qty: 0.5, unit: "whole", perServing: true },
      { item: "frozen edamame", qty: 60, unit: "g", perServing: true },
      { item: "butter", qty: 15, unit: "g", perServing: false },
      { item: "garlic cloves", qty: 2, unit: "whole", perServing: false },
      { item: "soy sauce", qty: 1, unit: "tbsp", perServing: false },
      { item: "sesame oil", qty: 1, unit: "tsp", perServing: false },
      { item: "spring onions", qty: 2, unit: "whole", perServing: false },
      { item: "sesame seeds", qty: 1, unit: "tsp", perServing: false },
    ],
    nutrition: { calories: 510, protein: 35, carbs: 52, fat: 18, fibre: 6 },
    steps: [
      "Cook rice per packet instructions. Blanch edamame 3 mins.",
      "Melt butter in pan, add garlic 30 secs, then prawns 2–3 mins until pink.",
      "Assemble bowl: rice base, prawns, avocado slices, edamame. Drizzle soy and sesame oil."
    ]
  },
  {
    id: "l006",
    name: "Greek Chicken Pita with Tzatziki",
    meal: "lunch",
    source: "Simple Home Edit",
    sourceUrl: "https://www.simplehomeedit.com",
    category: ["meat", "quick", "highProtein"],
    tags: ["pita", "greek", "chicken"],
    cookTime: 15,
    prepTime: 15,
    image: "🫓",
    description: "Oregano-marinated chicken thigh in warm pita with homemade tzatziki, tomato and red onion.",
    ingredients: [
      { item: "chicken thighs (boneless)", qty: 160, unit: "g", perServing: true },
      { item: "pita bread", qty: 1, unit: "whole", perServing: true },
      { item: "Greek yoghurt", qty: 3, unit: "tbsp", perServing: true },
      { item: "cucumber", qty: 0.25, unit: "whole", perServing: true },
      { item: "cherry tomatoes", qty: 5, unit: "whole", perServing: true },
      { item: "red onion", qty: 0.5, unit: "whole", perServing: false },
      { item: "dried oregano", qty: 1, unit: "tsp", perServing: false },
      { item: "garlic cloves", qty: 1, unit: "whole", perServing: false },
      { item: "lemon", qty: 0.5, unit: "whole", perServing: false },
      { item: "olive oil", qty: 1, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 520, protein: 38, carbs: 45, fat: 17, fibre: 4 },
    steps: [
      "Marinate chicken in oregano, lemon juice, garlic and olive oil for 10 mins (or overnight).",
      "Grill or pan-fry 6–7 mins each side. Rest and slice.",
      "Mix yoghurt, grated cucumber and garlic for tzatziki. Warm pita, fill and serve."
    ]
  },
  {
    id: "l007",
    name: "Halloumi & Roasted Veg Grain Bowl",
    meal: "lunch",
    source: "Ottolenghi / Simple Home Edit",
    sourceUrl: "https://www.simplehomeedit.com",
    category: ["vegetarian", "healthy", "highProtein"],
    tags: ["bowl", "grain", "halloumi"],
    cookTime: 30,
    prepTime: 10,
    image: "🧀",
    description: "Golden halloumi, roasted courgette and peppers over herby bulgur wheat with a lemon-tahini dressing.",
    ingredients: [
      { item: "halloumi", qty: 80, unit: "g", perServing: true },
      { item: "bulgur wheat", qty: 70, unit: "g", perServing: true },
      { item: "courgette", qty: 1, unit: "whole", perServing: false },
      { item: "red pepper", qty: 1, unit: "whole", perServing: false },
      { item: "tahini", qty: 1, unit: "tbsp", perServing: false },
      { item: "lemon", qty: 1, unit: "whole", perServing: false },
      { item: "flat-leaf parsley", qty: 1, unit: "handful", perServing: false },
      { item: "olive oil", qty: 2, unit: "tbsp", perServing: false },
      { item: "garlic cloves", qty: 1, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 540, protein: 28, carbs: 50, fat: 24, fibre: 7 },
    steps: [
      "Roast courgette and pepper chunks at 200°C for 20 mins with olive oil.",
      "Cook bulgur per packet. Stir in parsley and lemon zest.",
      "Fry halloumi slices in dry pan 2 mins each side until golden.",
      "Whisk tahini, lemon juice, garlic and water for dressing. Assemble bowls."
    ]
  },
  {
    id: "l008",
    name: "Tuna Niçoise Salad",
    meal: "lunch",
    source: "BBC Good Food",
    sourceUrl: "https://www.bbcgoodfood.com",
    category: ["fish", "healthy", "highProtein", "quick"],
    tags: ["salad", "tuna", "french"],
    cookTime: 15,
    prepTime: 10,
    image: "🐟",
    description: "Classic French salad with tuna steak, soft-boiled eggs, green beans, olives and a Dijon vinaigrette.",
    ingredients: [
      { item: "tuna steak", qty: 150, unit: "g", perServing: true },
      { item: "eggs", qty: 2, unit: "whole", perServing: true },
      { item: "green beans", qty: 80, unit: "g", perServing: true },
      { item: "cherry tomatoes", qty: 8, unit: "whole", perServing: true },
      { item: "black olives", qty: 10, unit: "whole", perServing: true },
      { item: "little gem lettuce", qty: 1, unit: "head", perServing: true },
      { item: "Dijon mustard", qty: 1, unit: "tsp", perServing: false },
      { item: "red wine vinegar", qty: 1, unit: "tbsp", perServing: false },
      { item: "olive oil", qty: 3, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 460, protein: 45, carbs: 12, fat: 26, fibre: 5 },
    steps: [
      "Boil eggs 6 mins, refresh in cold water and peel. Blanch green beans 3 mins.",
      "Sear tuna steak in hot pan 2 mins each side. Rest and slice.",
      "Whisk mustard, vinegar and olive oil. Assemble salad and drizzle dressing."
    ]
  },
  {
    id: "l009",
    name: "Black Bean & Sweet Potato Tacos",
    meal: "lunch",
    source: "The Happy Pear",
    sourceUrl: "https://thehappypear.ie",
    category: ["vegetarian", "vegan", "quick", "healthy"],
    tags: ["tacos", "mexican", "beans"],
    cookTime: 25,
    prepTime: 10,
    image: "🌮",
    description: "Smoky roasted sweet potato and spiced black beans in warm corn tortillas with avocado crema.",
    ingredients: [
      { item: "sweet potato", qty: 300, unit: "g", perServing: false },
      { item: "tinned black beans", qty: 1, unit: "400g tin", perServing: false },
      { item: "corn tortillas", qty: 2, unit: "whole", perServing: true },
      { item: "avocado", qty: 1, unit: "whole", perServing: false },
      { item: "lime", qty: 1, unit: "whole", perServing: false },
      { item: "smoked paprika", qty: 1, unit: "tsp", perServing: false },
      { item: "ground cumin", qty: 1, unit: "tsp", perServing: false },
      { item: "red onion", qty: 0.5, unit: "whole", perServing: false },
      { item: "coriander", qty: 1, unit: "handful", perServing: false },
    ],
    nutrition: { calories: 480, protein: 16, carbs: 72, fat: 14, fibre: 16 },
    steps: [
      "Cube sweet potato, toss with paprika and oil, roast 200°C for 20 mins.",
      "Season black beans with cumin, salt and lime juice. Heat in a pan.",
      "Mash avocado with lime juice and salt. Warm tortillas, fill and top with coriander."
    ]
  },
  {
    id: "l010",
    name: "Miso Glazed Salmon Soba Noodles",
    meal: "lunch",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["fish", "highProtein", "healthy", "quick"],
    tags: ["noodles", "salmon", "japanese"],
    cookTime: 20,
    prepTime: 10,
    image: "🍱",
    description: "Caramelised miso-glazed salmon served over soba noodles with pak choi and a ginger broth.",
    ingredients: [
      { item: "salmon fillet", qty: 150, unit: "g", perServing: true },
      { item: "soba noodles", qty: 90, unit: "g", perServing: true },
      { item: "pak choi", qty: 1, unit: "head", perServing: true },
      { item: "white miso paste", qty: 1, unit: "tbsp", perServing: false },
      { item: "mirin", qty: 1, unit: "tbsp", perServing: false },
      { item: "soy sauce", qty: 2, unit: "tbsp", perServing: false },
      { item: "fresh ginger", qty: 20, unit: "g", perServing: false },
      { item: "sesame oil", qty: 1, unit: "tsp", perServing: false },
      { item: "spring onions", qty: 2, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 530, protein: 40, carbs: 52, fat: 16, fibre: 4 },
    steps: [
      "Mix miso, mirin and soy for glaze. Coat salmon and bake 200°C for 12 mins.",
      "Cook soba noodles per packet. Blanch pak choi in noodle water last 2 mins.",
      "Simmer soy, ginger, sesame oil and 200ml water for broth. Serve salmon over noodles in broth."
    ]
  },
  {
    id: "l011",
    name: "Roast Chicken & Pesto Orzo",
    meal: "lunch",
    source: "Simple Home Edit",
    sourceUrl: "https://www.simplehomeedit.com",
    category: ["meat", "quick", "batchCook"],
    tags: ["pasta", "chicken", "pesto"],
    cookTime: 20,
    prepTime: 10,
    image: "🍝",
    description: "Leftover roast chicken tossed with orzo, homemade basil pesto, cherry tomatoes and pine nuts.",
    ingredients: [
      { item: "orzo pasta", qty: 80, unit: "g", perServing: true },
      { item: "cooked chicken breast", qty: 120, unit: "g", perServing: true },
      { item: "basil pesto", qty: 2, unit: "tbsp", perServing: true },
      { item: "cherry tomatoes", qty: 8, unit: "whole", perServing: true },
      { item: "pine nuts", qty: 1, unit: "tbsp", perServing: false },
      { item: "parmesan", qty: 20, unit: "g", perServing: false },
      { item: "lemon", qty: 0.5, unit: "whole", perServing: false },
      { item: "baby spinach", qty: 1, unit: "handful", perServing: false },
    ],
    nutrition: { calories: 560, protein: 38, carbs: 55, fat: 20, fibre: 4 },
    steps: [
      "Cook orzo in salted boiling water 8–9 mins, drain reserving a ladle of water.",
      "Toast pine nuts in dry pan. Halve tomatoes.",
      "Toss orzo with pesto, chicken, tomatoes, spinach and pasta water. Finish with parmesan."
    ]
  },
  {
    id: "l012",
    name: "Vibrant Beetroot & Feta Salad",
    meal: "lunch",
    source: "Ottolenghi",
    sourceUrl: "https://ottolenghi.co.uk",
    category: ["vegetarian", "healthy", "quick"],
    tags: ["salad", "beetroot", "feta"],
    cookTime: 5,
    prepTime: 10,
    image: "🫐",
    description: "Roasted beetroot, creamy feta, candied walnuts and peppery rocket with a honey-balsamic dressing.",
    ingredients: [
      { item: "pre-cooked beetroot", qty: 250, unit: "g", perServing: false },
      { item: "feta cheese", qty: 80, unit: "g", perServing: false },
      { item: "rocket", qty: 60, unit: "g", perServing: false },
      { item: "walnuts", qty: 30, unit: "g", perServing: false },
      { item: "balsamic vinegar", qty: 2, unit: "tbsp", perServing: false },
      { item: "honey", qty: 1, unit: "tsp", perServing: false },
      { item: "olive oil", qty: 2, unit: "tbsp", perServing: false },
      { item: "orange", qty: 0.5, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 390, protein: 14, carbs: 28, fat: 26, fibre: 5 },
    steps: [
      "Toast walnuts with honey and a pinch of salt in dry pan 3 mins.",
      "Whisk balsamic, olive oil, orange juice and season.",
      "Arrange rocket and beetroot, crumble feta, scatter walnuts and drizzle dressing."
    ]
  },
  {
    id: "l013",
    name: "Spicy Kimchi Fried Rice",
    meal: "lunch",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["vegetarian", "quick", "healthy"],
    tags: ["rice", "korean", "spicy"],
    cookTime: 15,
    prepTime: 5,
    image: "🍳",
    description: "Quick kimchi fried rice with a fried egg, spring onion and toasted sesame — great for leftover rice.",
    ingredients: [
      { item: "cooked rice (day-old)", qty: 200, unit: "g", perServing: true },
      { item: "kimchi", qty: 80, unit: "g", perServing: true },
      { item: "eggs", qty: 2, unit: "whole", perServing: true },
      { item: "soy sauce", qty: 1, unit: "tbsp", perServing: false },
      { item: "gochujang", qty: 1, unit: "tbsp", perServing: false },
      { item: "sesame oil", qty: 1, unit: "tsp", perServing: false },
      { item: "spring onions", qty: 2, unit: "whole", perServing: false },
      { item: "vegetable oil", qty: 1, unit: "tbsp", perServing: false },
      { item: "nori sheet", qty: 1, unit: "whole", perServing: true },
    ],
    nutrition: { calories: 420, protein: 18, carbs: 60, fat: 12, fibre: 3 },
    steps: [
      "Fry kimchi in oil 2 mins. Add rice and press down to crisp.",
      "Add gochujang and soy sauce, stir-fry 2 mins.",
      "Push rice aside, fry eggs sunny-side up. Drizzle sesame oil, top with spring onion and torn nori."
    ]
  },
  {
    id: "l014",
    name: "White Bean & Chorizo Stew",
    meal: "lunch",
    source: "Simple Home Edit",
    sourceUrl: "https://www.simplehomeedit.com",
    category: ["meat", "batchCook", "highProtein"],
    tags: ["stew", "chorizo", "beans"],
    cookTime: 30,
    prepTime: 10,
    image: "🥘",
    description: "Smoky Spanish-style white bean stew with cooking chorizo, tomatoes and wilted greens.",
    ingredients: [
      { item: "cooking chorizo", qty: 120, unit: "g", perServing: false },
      { item: "tinned white beans (cannellini)", qty: 2, unit: "400g tins", perServing: false },
      { item: "tinned chopped tomatoes", qty: 1, unit: "400g tin", perServing: false },
      { item: "cavolo nero / kale", qty: 100, unit: "g", perServing: false },
      { item: "onion", qty: 1, unit: "whole", perServing: false },
      { item: "garlic cloves", qty: 3, unit: "whole", perServing: false },
      { item: "smoked paprika", qty: 1, unit: "tsp", perServing: false },
      { item: "chicken stock", qty: 300, unit: "ml", perServing: false },
      { item: "crusty bread", qty: 2, unit: "slices", perServing: true },
    ],
    nutrition: { calories: 550, protein: 30, carbs: 56, fat: 20, fibre: 14 },
    steps: [
      "Slice chorizo, fry in pot until oil releases. Remove chorizo.",
      "Sauté onion and garlic in chorizo oil. Add paprika, tomatoes, beans and stock.",
      "Simmer 15 mins. Add greens and chorizo last 5 mins. Serve with crusty bread."
    ]
  },

  // ─── DINNERS ─────────────────────────────────────────────────────────────────
  {
    id: "d001",
    name: "Garlic Butter Chicken Thighs with Hasselback Potatoes",
    meal: "dinner",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["meat", "highProtein"],
    tags: ["chicken", "potatoes", "roast"],
    cookTime: 50,
    prepTime: 15,
    image: "🍗",
    description: "Juicy skin-on chicken thighs roasted in garlic butter alongside crispy hasselback potatoes and herby greens.",
    ingredients: [
      { item: "chicken thighs (skin-on)", qty: 2, unit: "whole", perServing: true },
      { item: "medium potatoes", qty: 2, unit: "whole", perServing: true },
      { item: "butter", qty: 40, unit: "g", perServing: false },
      { item: "garlic cloves", qty: 4, unit: "whole", perServing: false },
      { item: "fresh thyme", qty: 4, unit: "sprigs", perServing: false },
      { item: "tenderstem broccoli", qty: 100, unit: "g", perServing: true },
      { item: "lemon", qty: 1, unit: "whole", perServing: false },
      { item: "olive oil", qty: 1, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 680, protein: 44, carbs: 52, fat: 32, fibre: 6 },
    steps: [
      "Score potatoes thinly (not all the way through). Drizzle with oil, roast 200°C for 25 mins.",
      "Melt butter with crushed garlic and thyme. Baste potatoes, add chicken to tray.",
      "Roast further 25 mins until chicken skin is golden and crispy.",
      "Steam broccoli, squeeze lemon over everything and serve."
    ]
  },
  {
    id: "d002",
    name: "Prawn & Coconut Thai Green Curry",
    meal: "dinner",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["fish", "quick", "healthy"],
    tags: ["curry", "thai", "prawn"],
    cookTime: 25,
    prepTime: 10,
    image: "🍛",
    description: "Silky coconut Thai green curry with king prawns, aubergine and Thai basil over jasmine rice.",
    ingredients: [
      { item: "raw king prawns", qty: 200, unit: "g", perServing: false },
      { item: "coconut milk", qty: 1, unit: "400ml tin", perServing: false },
      { item: "Thai green curry paste", qty: 3, unit: "tbsp", perServing: false },
      { item: "jasmine rice", qty: 80, unit: "g", perServing: true },
      { item: "aubergine", qty: 1, unit: "whole", perServing: false },
      { item: "fish sauce", qty: 1, unit: "tbsp", perServing: false },
      { item: "palm sugar / brown sugar", qty: 1, unit: "tsp", perServing: false },
      { item: "Thai basil", qty: 1, unit: "handful", perServing: false },
      { item: "lime", qty: 1, unit: "whole", perServing: false },
      { item: "vegetable oil", qty: 1, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 590, protein: 35, carbs: 58, fat: 22, fibre: 5 },
    steps: [
      "Fry curry paste in oil 2 mins. Add cubed aubergine, cook 3 mins.",
      "Pour in coconut milk, fish sauce and sugar. Simmer 10 mins.",
      "Add prawns, cook 3–4 mins until pink. Stir in Thai basil and lime juice.",
      "Serve over jasmine rice."
    ]
  },
  {
    id: "d003",
    name: "Lamb Kofta with Flatbreads & Tzatziki",
    meal: "dinner",
    source: "Ottolenghi",
    sourceUrl: "https://ottolenghi.co.uk",
    category: ["meat", "highProtein"],
    tags: ["lamb", "middle-eastern", "grilled"],
    cookTime: 25,
    prepTime: 20,
    image: "🥙",
    description: "Spiced lamb kofta skewers with sumac, cumin and parsley, served in flatbreads with tzatziki and pickled red onion.",
    ingredients: [
      { item: "lamb mince", qty: 250, unit: "g", perServing: false },
      { item: "flatbreads", qty: 2, unit: "whole", perServing: false },
      { item: "Greek yoghurt", qty: 100, unit: "g", perServing: false },
      { item: "cucumber", qty: 0.5, unit: "whole", perServing: false },
      { item: "red onion", qty: 1, unit: "whole", perServing: false },
      { item: "ground cumin", qty: 1, unit: "tsp", perServing: false },
      { item: "ground coriander", qty: 1, unit: "tsp", perServing: false },
      { item: "sumac", qty: 1, unit: "tsp", perServing: false },
      { item: "flat-leaf parsley", qty: 1, unit: "handful", perServing: false },
      { item: "garlic cloves", qty: 2, unit: "whole", perServing: false },
      { item: "lemon", qty: 1, unit: "whole", perServing: false },
      { item: "red wine vinegar", qty: 1, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 640, protein: 38, carbs: 54, fat: 28, fibre: 4 },
    steps: [
      "Mix lamb with cumin, coriander, sumac, garlic and parsley. Shape onto skewers.",
      "Pickle onion in vinegar and pinch of sugar for 15 mins.",
      "Grill or griddle kofta 3–4 mins each side. Make tzatziki with yoghurt, grated cucumber and garlic.",
      "Warm flatbreads, load with kofta, tzatziki and pickled onion."
    ]
  },
  {
    id: "d004",
    name: "One-Pan Lemon Orzo with Salmon",
    meal: "dinner",
    source: "Simple Home Edit",
    sourceUrl: "https://www.simplehomeedit.com",
    category: ["fish", "quick", "healthy", "highProtein"],
    tags: ["salmon", "pasta", "one-pan"],
    cookTime: 25,
    prepTime: 5,
    image: "🐠",
    description: "Orzo cooked in one pan with lemon, dill, capers and nestled salmon fillets — minimal washing up!",
    ingredients: [
      { item: "salmon fillet", qty: 150, unit: "g", perServing: true },
      { item: "orzo pasta", qty: 75, unit: "g", perServing: true },
      { item: "chicken or fish stock", qty: 400, unit: "ml", perServing: false },
      { item: "capers", qty: 1, unit: "tbsp", perServing: false },
      { item: "lemon", qty: 1, unit: "whole", perServing: false },
      { item: "fresh dill", qty: 1, unit: "handful", perServing: false },
      { item: "garlic cloves", qty: 2, unit: "whole", perServing: false },
      { item: "parmesan", qty: 20, unit: "g", perServing: false },
      { item: "butter", qty: 15, unit: "g", perServing: false },
    ],
    nutrition: { calories: 560, protein: 42, carbs: 50, fat: 20, fibre: 3 },
    steps: [
      "Sauté garlic in butter. Add orzo and toast 1 min.",
      "Pour in stock, lemon zest and capers. Simmer 8 mins stirring.",
      "Nestle salmon fillets in orzo, cover and cook 6–8 mins. Finish with dill and parmesan."
    ]
  },
  {
    id: "d005",
    name: "Beef Tacos with Mango Salsa",
    meal: "dinner",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["meat", "quick", "highProtein"],
    tags: ["tacos", "beef", "mexican"],
    cookTime: 20,
    prepTime: 15,
    image: "🌮",
    description: "Spiced crispy beef mince tacos with fresh mango salsa, soured cream and pickled jalapeños.",
    ingredients: [
      { item: "beef mince (20% fat)", qty: 250, unit: "g", perServing: false },
      { item: "corn tortillas", qty: 3, unit: "whole", perServing: true },
      { item: "mango", qty: 1, unit: "whole", perServing: false },
      { item: "red onion", qty: 0.5, unit: "whole", perServing: false },
      { item: "coriander", qty: 1, unit: "handful", perServing: false },
      { item: "soured cream", qty: 3, unit: "tbsp", perServing: false },
      { item: "pickled jalapeños", qty: 1, unit: "tbsp", perServing: false },
      { item: "chilli powder", qty: 1, unit: "tsp", perServing: false },
      { item: "ground cumin", qty: 1, unit: "tsp", perServing: false },
      { item: "garlic powder", qty: 0.5, unit: "tsp", perServing: false },
      { item: "lime", qty: 1, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 650, protein: 35, carbs: 65, fat: 26, fibre: 7 },
    steps: [
      "Brown mince with spices until very crispy. Season well.",
      "Dice mango, red onion and coriander, squeeze lime for salsa.",
      "Warm tortillas, fill with beef, salsa, soured cream and jalapeños."
    ]
  },
  {
    id: "d006",
    name: "Mushroom & Walnut Bolognese",
    meal: "dinner",
    source: "The Happy Pear",
    sourceUrl: "https://thehappypear.ie",
    category: ["vegetarian", "vegan", "batchCook", "healthy"],
    tags: ["pasta", "bolognese", "mushroom"],
    cookTime: 45,
    prepTime: 15,
    image: "🍄",
    description: "A deeply savoury plant-based bolognese using blended mushrooms and walnuts, slow-cooked in red wine and tomatoes.",
    ingredients: [
      { item: "chestnut mushrooms", qty: 400, unit: "g", perServing: false },
      { item: "walnuts", qty: 80, unit: "g", perServing: false },
      { item: "tinned chopped tomatoes", qty: 2, unit: "400g tins", perServing: false },
      { item: "red wine", qty: 150, unit: "ml", perServing: false },
      { item: "spaghetti", qty: 80, unit: "g", perServing: true },
      { item: "onion", qty: 1, unit: "whole", perServing: false },
      { item: "carrot", qty: 1, unit: "whole", perServing: false },
      { item: "celery stalks", qty: 2, unit: "whole", perServing: false },
      { item: "garlic cloves", qty: 4, unit: "whole", perServing: false },
      { item: "tomato purée", qty: 2, unit: "tbsp", perServing: false },
      { item: "fresh thyme", qty: 3, unit: "sprigs", perServing: false },
      { item: "olive oil", qty: 2, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 570, protein: 20, carbs: 72, fat: 22, fibre: 10 },
    steps: [
      "Pulse mushrooms and walnuts in food processor until mince-like.",
      "Sauté onion, carrot and celery in oil 10 mins. Add garlic and purée.",
      "Add mushroom mixture, cook 10 mins until browned. Pour in wine and reduce.",
      "Add tomatoes and thyme, simmer 20 mins. Serve over spaghetti."
    ]
  },
  {
    id: "d007",
    name: "Crispy Skin Sea Bass with Salsa Verde",
    meal: "dinner",
    source: "Ottolenghi",
    sourceUrl: "https://ottolenghi.co.uk",
    category: ["fish", "healthy", "highProtein", "quick"],
    tags: ["seabass", "fish", "italian"],
    cookTime: 20,
    prepTime: 15,
    image: "🐟",
    description: "Pan-fried sea bass with glass-crispy skin, served with vibrant Italian salsa verde and crushed new potatoes.",
    ingredients: [
      { item: "sea bass fillets", qty: 2, unit: "whole", perServing: false },
      { item: "new potatoes", qty: 300, unit: "g", perServing: false },
      { item: "flat-leaf parsley", qty: 1, unit: "large handful", perServing: false },
      { item: "basil", qty: 0.5, unit: "handful", perServing: false },
      { item: "capers", qty: 2, unit: "tbsp", perServing: false },
      { item: "anchovies", qty: 3, unit: "whole", perServing: false },
      { item: "Dijon mustard", qty: 1, unit: "tsp", perServing: false },
      { item: "red wine vinegar", qty: 1, unit: "tbsp", perServing: false },
      { item: "olive oil", qty: 4, unit: "tbsp", perServing: false },
      { item: "garlic cloves", qty: 1, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 510, protein: 38, carbs: 34, fat: 24, fibre: 5 },
    steps: [
      "Boil potatoes until tender, crush with olive oil and season.",
      "Blend parsley, basil, capers, anchovies, mustard, vinegar and oil for salsa verde.",
      "Score fish skin, press flat in hot oiled pan skin-side down 4–5 mins, flip 1 min.",
      "Serve fish over potatoes, spoon salsa verde generously."
    ]
  },
  {
    id: "d008",
    name: "Sticky Pork Belly with Egg Fried Rice",
    meal: "dinner",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["meat", "batchCook"],
    tags: ["pork", "asian", "rice"],
    cookTime: 120,
    prepTime: 15,
    image: "🥩",
    description: "Melt-in-your-mouth slow-cooked pork belly glazed in hoisin and honey, served with wok-fried egg rice.",
    ingredients: [
      { item: "pork belly slices", qty: 600, unit: "g", perServing: false },
      { item: "hoisin sauce", qty: 3, unit: "tbsp", perServing: false },
      { item: "honey", qty: 2, unit: "tbsp", perServing: false },
      { item: "soy sauce", qty: 2, unit: "tbsp", perServing: false },
      { item: "five-spice powder", qty: 1, unit: "tsp", perServing: false },
      { item: "cooked rice (day-old)", qty: 200, unit: "g", perServing: true },
      { item: "eggs", qty: 3, unit: "whole", perServing: false },
      { item: "spring onions", qty: 3, unit: "whole", perServing: false },
      { item: "frozen peas", qty: 80, unit: "g", perServing: false },
      { item: "soy sauce", qty: 1, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 780, protein: 38, carbs: 58, fat: 40, fibre: 4 },
    steps: [
      "Mix hoisin, honey, soy and five-spice. Coat pork, roast 180°C for 1.5 hrs, basting every 30 mins.",
      "Crank to 220°C for final 15 mins to caramelise.",
      "Wok-fry cold rice with beaten eggs, peas and soy until piping hot. Top with spring onion."
    ]
  },
  {
    id: "d009",
    name: "Chickpea & Spinach Curry (Chana Palak)",
    meal: "dinner",
    source: "The Happy Pear",
    sourceUrl: "https://thehappypear.ie",
    category: ["vegetarian", "vegan", "batchCook", "highProtein", "healthy"],
    tags: ["curry", "indian", "chickpea"],
    cookTime: 30,
    prepTime: 10,
    image: "🌿",
    description: "Fragrant, protein-rich chickpea and spinach curry made in 30 minutes. Serve with naan or rice.",
    ingredients: [
      { item: "tinned chickpeas", qty: 2, unit: "400g tins", perServing: false },
      { item: "baby spinach", qty: 150, unit: "g", perServing: false },
      { item: "onion", qty: 1, unit: "whole", perServing: false },
      { item: "garlic cloves", qty: 3, unit: "whole", perServing: false },
      { item: "fresh ginger", qty: 20, unit: "g", perServing: false },
      { item: "tinned chopped tomatoes", qty: 1, unit: "400g tin", perServing: false },
      { item: "garam masala", qty: 2, unit: "tsp", perServing: false },
      { item: "ground turmeric", qty: 0.5, unit: "tsp", perServing: false },
      { item: "ground cumin", qty: 1, unit: "tsp", perServing: false },
      { item: "coconut milk", qty: 200, unit: "ml", perServing: false },
      { item: "basmati rice", qty: 80, unit: "g", perServing: true },
      { item: "naan bread", qty: 1, unit: "whole", perServing: true },
    ],
    nutrition: { calories: 520, protein: 22, carbs: 78, fat: 12, fibre: 16 },
    steps: [
      "Sauté onion until golden. Add garlic, ginger and spices, cook 2 mins.",
      "Add tomatoes and chickpeas. Simmer 15 mins.",
      "Stir in coconut milk and spinach until wilted. Serve with rice and naan."
    ]
  },
  {
    id: "d010",
    name: "Spaghetti Aglio e Olio with Chilli Prawns",
    meal: "dinner",
    source: "Ottolenghi inspired / Serious Eats",
    sourceUrl: "https://www.seriouseats.com",
    category: ["fish", "quick", "highProtein"],
    tags: ["pasta", "prawn", "italian"],
    cookTime: 20,
    prepTime: 5,
    image: "🍝",
    description: "Crispy garlic, chilli and parsley spaghetti topped with butter-basted prawns. Ready in 20 minutes.",
    ingredients: [
      { item: "spaghetti", qty: 80, unit: "g", perServing: true },
      { item: "raw king prawns", qty: 150, unit: "g", perServing: true },
      { item: "garlic cloves", qty: 5, unit: "whole", perServing: false },
      { item: "red chilli", qty: 1, unit: "whole", perServing: false },
      { item: "flat-leaf parsley", qty: 1, unit: "large handful", perServing: false },
      { item: "extra virgin olive oil", qty: 5, unit: "tbsp", perServing: false },
      { item: "butter", qty: 20, unit: "g", perServing: false },
      { item: "lemon", qty: 0.5, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 590, protein: 38, carbs: 62, fat: 22, fibre: 3 },
    steps: [
      "Cook spaghetti in very salted water. Reserve 2 ladles pasta water.",
      "Gently fry sliced garlic and chilli in generous olive oil until golden (not burnt).",
      "Add prawns, cook 2 mins. Toss in spaghetti with pasta water until silky.",
      "Remove from heat, add butter, parsley and lemon juice."
    ]
  },
  {
    id: "d011",
    name: "Roasted Butternut Squash Risotto",
    meal: "dinner",
    source: "Ottolenghi",
    sourceUrl: "https://ottolenghi.co.uk",
    category: ["vegetarian", "healthy", "batchCook"],
    tags: ["risotto", "squash", "italian"],
    cookTime: 50,
    prepTime: 15,
    image: "🎃",
    description: "Silky roasted butternut squash risotto with sage butter, toasted pumpkin seeds and parmesan.",
    ingredients: [
      { item: "butternut squash", qty: 600, unit: "g", perServing: false },
      { item: "arborio rice", qty: 150, unit: "g", perServing: false },
      { item: "vegetable stock", qty: 1, unit: "litre", perServing: false },
      { item: "onion", qty: 1, unit: "whole", perServing: false },
      { item: "garlic cloves", qty: 2, unit: "whole", perServing: false },
      { item: "parmesan", qty: 50, unit: "g", perServing: false },
      { item: "butter", qty: 40, unit: "g", perServing: false },
      { item: "dry white wine", qty: 150, unit: "ml", perServing: false },
      { item: "fresh sage", qty: 8, unit: "leaves", perServing: false },
      { item: "pumpkin seeds", qty: 2, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 580, protein: 18, carbs: 80, fat: 20, fibre: 8 },
    steps: [
      "Cube squash, roast at 200°C for 25 mins. Blitz half into purée.",
      "Sauté onion and garlic in butter. Toast rice 1 min, add wine.",
      "Add stock ladle by ladle stirring constantly for 18–20 mins.",
      "Stir in squash purée, cubed squash and parmesan. Fry sage in butter to crisp, scatter with pumpkin seeds."
    ]
  },
  {
    id: "d012",
    name: "Chicken Tikka Masala",
    meal: "dinner",
    source: "Simple Home Edit / BBC Good Food",
    sourceUrl: "https://www.simplehomeedit.com",
    category: ["meat", "batchCook", "highProtein"],
    tags: ["curry", "chicken", "indian"],
    cookTime: 40,
    prepTime: 20,
    image: "🍛",
    description: "The nation's favourite — proper tikka masala with tender yoghurt-marinated chicken in a rich tomato-cream sauce.",
    ingredients: [
      { item: "chicken breast", qty: 600, unit: "g", perServing: false },
      { item: "full-fat yoghurt", qty: 150, unit: "g", perServing: false },
      { item: "tinned chopped tomatoes", qty: 2, unit: "400g tins", perServing: false },
      { item: "double cream", qty: 100, unit: "ml", perServing: false },
      { item: "onion", qty: 2, unit: "whole", perServing: false },
      { item: "garlic cloves", qty: 4, unit: "whole", perServing: false },
      { item: "fresh ginger", qty: 30, unit: "g", perServing: false },
      { item: "tikka masala paste", qty: 3, unit: "tbsp", perServing: false },
      { item: "garam masala", qty: 1, unit: "tsp", perServing: false },
      { item: "basmati rice", qty: 80, unit: "g", perServing: true },
      { item: "naan bread", qty: 1, unit: "whole", perServing: true },
      { item: "coriander", qty: 1, unit: "handful", perServing: false },
    ],
    nutrition: { calories: 660, protein: 48, carbs: 72, fat: 22, fibre: 5 },
    steps: [
      "Marinate chicken in yoghurt and half the tikka paste for 30 mins (or overnight). Grill until charred.",
      "Sauté onions until deep golden. Add garlic, ginger and remaining paste.",
      "Add tomatoes, simmer 15 mins. Stir in cream and chicken.",
      "Simmer 10 mins. Garnish with coriander. Serve with rice and naan."
    ]
  },
  {
    id: "d013",
    name: "Teriyaki Salmon with Sesame Greens",
    meal: "dinner",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["fish", "quick", "healthy", "highProtein"],
    tags: ["salmon", "japanese", "healthy"],
    cookTime: 20,
    prepTime: 10,
    image: "🐡",
    description: "Sticky homemade teriyaki-glazed salmon fillet with sesame stir-fried pak choi and steamed rice.",
    ingredients: [
      { item: "salmon fillet", qty: 150, unit: "g", perServing: true },
      { item: "soy sauce", qty: 3, unit: "tbsp", perServing: false },
      { item: "mirin", qty: 2, unit: "tbsp", perServing: false },
      { item: "honey", qty: 1, unit: "tbsp", perServing: false },
      { item: "pak choi", qty: 2, unit: "heads", perServing: false },
      { item: "sesame oil", qty: 1, unit: "tbsp", perServing: false },
      { item: "sesame seeds", qty: 1, unit: "tbsp", perServing: false },
      { item: "jasmine rice", qty: 80, unit: "g", perServing: true },
      { item: "garlic cloves", qty: 2, unit: "whole", perServing: false },
    ],
    nutrition: { calories: 540, protein: 38, carbs: 55, fat: 18, fibre: 4 },
    steps: [
      "Mix soy, mirin and honey. Marinate salmon 10 mins.",
      "Pan-fry salmon skin-side up 3 mins, flip, pour remaining marinade and cook 3 mins until sticky.",
      "Stir-fry pak choi with garlic and sesame oil 3 mins. Serve with rice, scatter sesame seeds."
    ]
  },
  {
    id: "d014",
    name: "Slow Cooker Beef Chilli",
    meal: "dinner",
    source: "Simple Home Edit",
    sourceUrl: "https://www.simplehomeedit.com",
    category: ["meat", "batchCook", "highProtein"],
    tags: ["chilli", "beef", "mexican"],
    cookTime: 240,
    prepTime: 20,
    image: "🌶️",
    description: "Deep, smoky beef chilli slow-cooked for hours with dark chocolate, kidney beans and a hint of cinnamon.",
    ingredients: [
      { item: "beef mince", qty: 500, unit: "g", perServing: false },
      { item: "tinned kidney beans", qty: 2, unit: "400g tins", perServing: false },
      { item: "tinned chopped tomatoes", qty: 2, unit: "400g tins", perServing: false },
      { item: "beef stock", qty: 200, unit: "ml", perServing: false },
      { item: "dark chocolate", qty: 20, unit: "g", perServing: false },
      { item: "red onion", qty: 1, unit: "whole", perServing: false },
      { item: "garlic cloves", qty: 3, unit: "whole", perServing: false },
      { item: "chilli powder", qty: 2, unit: "tsp", perServing: false },
      { item: "smoked paprika", qty: 1, unit: "tsp", perServing: false },
      { item: "ground cumin", qty: 1, unit: "tsp", perServing: false },
      { item: "cinnamon", qty: 0.5, unit: "tsp", perServing: false },
      { item: "basmati rice", qty: 80, unit: "g", perServing: true },
      { item: "soured cream", qty: 2, unit: "tbsp", perServing: true },
    ],
    nutrition: { calories: 650, protein: 42, carbs: 70, fat: 22, fibre: 16 },
    steps: [
      "Brown mince with onion and garlic. Drain excess fat.",
      "Transfer to slow cooker with all other ingredients except chocolate.",
      "Cook on low 4–6 hrs. Stir in dark chocolate for last 30 mins.",
      "Serve over rice with soured cream."
    ]
  },
  {
    id: "d015",
    name: "Roast Vegetable & Feta Frittata",
    meal: "dinner",
    source: "BBC Good Food",
    sourceUrl: "https://www.bbcgoodfood.com",
    category: ["vegetarian", "quick", "healthy", "highProtein"],
    tags: ["frittata", "eggs", "mediterranean"],
    cookTime: 30,
    prepTime: 10,
    image: "🥚",
    description: "Oven-finished frittata packed with roasted courgette, peppers, feta and fresh herbs. Delicious hot or cold.",
    ingredients: [
      { item: "eggs", qty: 6, unit: "whole", perServing: false },
      { item: "feta cheese", qty: 100, unit: "g", perServing: false },
      { item: "courgette", qty: 1, unit: "whole", perServing: false },
      { item: "red pepper", qty: 1, unit: "whole", perServing: false },
      { item: "cherry tomatoes", qty: 10, unit: "whole", perServing: false },
      { item: "fresh basil", qty: 1, unit: "handful", perServing: false },
      { item: "olive oil", qty: 2, unit: "tbsp", perServing: false },
      { item: "double cream", qty: 50, unit: "ml", perServing: false },
    ],
    nutrition: { calories: 380, protein: 26, carbs: 10, fat: 28, fibre: 3 },
    steps: [
      "Roast courgette and pepper at 200°C for 15 mins.",
      "Whisk eggs with cream, season well.",
      "Add roasted veg to an ovenproof pan, pour egg mixture, crumble feta and scatter tomatoes.",
      "Cook on hob 2 mins, transfer to oven at 180°C for 12–15 mins until just set."
    ]
  },
  {
    id: "d016",
    name: "Lemon & Herb Roast Chicken",
    meal: "dinner",
    source: "Mob Kitchen",
    sourceUrl: "https://www.mob.co.uk",
    category: ["meat", "batchCook", "highProtein"],
    tags: ["chicken", "roast", "classic"],
    cookTime: 90,
    prepTime: 20,
    image: "🍗",
    description: "A foolproof whole roast chicken with herb butter under the skin, stuffed with lemon and garlic, served with roasting juices.",
    ingredients: [
      { item: "whole chicken", qty: 1.5, unit: "kg", perServing: false },
      { item: "butter", qty: 60, unit: "g", perServing: false },
      { item: "lemon", qty: 2, unit: "whole", perServing: false },
      { item: "garlic head", qty: 1, unit: "whole", perServing: false },
      { item: "fresh thyme", qty: 6, unit: "sprigs", perServing: false },
      { item: "fresh rosemary", qty: 3, unit: "sprigs", perServing: false },
      { item: "roasting potatoes", qty: 600, unit: "g", perServing: false },
      { item: "olive oil", qty: 3, unit: "tbsp", perServing: false },
    ],
    nutrition: { calories: 620, protein: 52, carbs: 38, fat: 28, fibre: 4 },
    steps: [
      "Mix softened butter with chopped herbs and lemon zest. Push under chicken skin.",
      "Stuff cavity with halved lemon and garlic head. Truss loosely.",
      "Roast at 200°C for 1 hr 20 mins, resting 15 mins before carving.",
      "Parboil potatoes, rough up edges, roast in chicken dripping until golden."
    ]
  },
];

export const CATEGORIES = [
  { id: "meat", label: "Meat", icon: "🥩", description: "Contains red meat or poultry" },
  { id: "fish", label: "Fish & Seafood", icon: "🐟", description: "Fish and seafood dishes" },
  { id: "vegetarian", label: "Vegetarian", icon: "🥦", description: "No meat or fish" },
  { id: "vegan", label: "Vegan", icon: "🌱", description: "No animal products" },
  { id: "quick", label: "Quick & Easy", icon: "⚡", description: "Ready in under 30 minutes" },
  { id: "batchCook", label: "Batch Cook", icon: "🫙", description: "Great for making in bulk" },
  { id: "highProtein", label: "High Protein", icon: "💪", description: "Over 30g protein per serving" },
  { id: "healthy", label: "Healthy", icon: "🥗", description: "Lighter, nutrient-dense meals" },
];

export const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function filterRecipes(recipes, filters, ingredientText, servings) {
  let filtered = [...recipes];

  // Category filters
  const activeCategories = Object.entries(filters).filter(([, v]) => v).map(([k]) => k);
  if (activeCategories.length > 0) {
    filtered = filtered.filter(r =>
      activeCategories.some(cat => r.category.includes(cat))
    );
  }

  // Ingredient filter
  if (ingredientText.trim()) {
    const userIngredients = ingredientText.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
    filtered = filtered.filter(r =>
      userIngredients.some(userIng =>
        r.ingredients.some(ri => ri.item.toLowerCase().includes(userIng))
      )
    );
  }

  return filtered;
}

export function generateWeekPlan(recipes, filters, ingredientText, servings) {
  const lunches = filterRecipes(recipes.filter(r => r.meal === 'lunch'), filters, ingredientText, servings);
  const dinners = filterRecipes(recipes.filter(r => r.meal === 'dinner'), filters, ingredientText, servings);

  const shuffled = arr => [...arr].sort(() => Math.random() - 0.5);
  const shuffledLunches = shuffled(lunches);
  const shuffledDinners = shuffled(dinners);

  return DAYS.map((day, i) => ({
    day,
    lunch: shuffledLunches[i % shuffledLunches.length] || null,
    dinner: shuffledDinners[i % shuffledDinners.length] || null,
  }));
}

export function buildShoppingList(weekPlan, servings) {
  const totals = {};

  weekPlan.forEach(({ lunch, dinner }) => {
    [lunch, dinner].forEach(recipe => {
      if (!recipe) return;
      recipe.ingredients.forEach(ing => {
        const key = ing.item.toLowerCase();
        const qty = ing.perServing ? ing.qty * servings : ing.qty;
        if (!totals[key]) {
          totals[key] = { item: ing.item, qty: 0, unit: ing.unit };
        }
        // If same unit, accumulate; otherwise list separately
        if (totals[key].unit === ing.unit) {
          totals[key].qty += qty;
        } else {
          const altKey = `${key}_${ing.unit}`;
          if (!totals[altKey]) {
            totals[altKey] = { item: ing.item, qty: 0, unit: ing.unit };
          }
          totals[altKey].qty += qty;
        }
      });
    });
  });

  const CATEGORIES_ORDER = [
    { label: "🥩 Meat & Fish", test: i => /chicken|beef|lamb|pork|prawn|salmon|tuna|sea bass|chorizo|mince|fish|anchov/.test(i) },
    { label: "🥛 Dairy & Eggs", test: i => /egg|butter|cream|yoghurt|milk|parmesan|feta|halloumi|cheese/.test(i) },
    { label: "🥦 Fresh Produce", test: i => /spinach|lettuce|rocket|kale|bok|pak choi|spring onion|coriander|parsley|basil|thyme|rosemary|dill|sage|chilli|ginger|lemon|lime|orange|avocado|tomato|cucumber|courgette|pepper|onion|beetroot|broccoli|bean|pea|mango|squash|potato|sweet potato|carrot|celery|mushroom|cabbage/.test(i) },
    { label: "🫙 Tinned & Jarred", test: i => /tinned|tin|beans|chickpea|lentil|tomato purée|pesto|kimchi|capers|olives|anchov|jalapeño|gochujang|miso|hoisin|fish sauce|soy|teriyaki|curry paste/.test(i) },
    { label: "🌾 Grains, Pasta & Rice", test: i => /rice|pasta|noodle|orzo|spaghetti|bulgur|arborio|couscous|oat|flour|bread|tortilla|pita|flatbread|naan/.test(i) },
    { label: "🫒 Oils, Condiments & Spices", test: i => /oil|vinegar|mustard|honey|sugar|salt|pepper|cumin|coriander|paprika|turmeric|masala|spice|sumac|five-spice|cinnamon|chocolate|wine|stock|mirin|tahini|sesame|pine nut|walnut|pumpkin seed/.test(i) },
  ];

  const grouped = {};
  CATEGORIES_ORDER.forEach(cat => { grouped[cat.label] = []; });
  grouped["🛒 Other"] = [];

  Object.values(totals).forEach(item => {
    const lower = item.item.toLowerCase();
    const cat = CATEGORIES_ORDER.find(c => c.test(lower));
    const label = cat ? cat.label : "🛒 Other";
    grouped[label].push(item);
  });

  return grouped;
}
