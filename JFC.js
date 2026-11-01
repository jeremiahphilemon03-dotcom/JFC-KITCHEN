const foodCategories = [
  {
    name: "Rice & Grain Dishes",
    items: [
      {
        name: "Jollof Rice",
        image: "images/Rice and Grain dishes/images (2).jpg",
        ingredients: "Tomatoes, bell peppers, onions, rice, stock, seasoning, vegetable oil.",
        method: "Blend the tomatoes, peppers, and onions; fry in oil with seasoning, add stock and rice, then simmer until the rice is tender and flavourful."
      },
      {
        name: "Fried Rice",
        image: "images/Rice and Grain dishes/images (3).jpg",
        ingredients: "Rice, mixed vegetables, carrots, peas, onions, curry, thyme, stock, protein of choice.",
        method: "Parboil the rice, then stir-fry vegetables and protein with curry and thyme before combining with the rice and stock until well mixed."
      },
      {
        name: "Ofada Rice",
        image: "images/Rice and Grain dishes/images (4).jpg",
        ingredients: "Ofada rice, assorted meat, palm oil, fresh peppers, locust beans, onions.",
        method: "Cook the rice until soft, then prepare a spicy palm-oil sauce with peppers, onions, meat, and locust beans before serving."
      },
      {
        name: "Tuwo Shinkafa",
        image: "images/Rice and Grain dishes/images (5).jpg",
        ingredients: "Rice, water, seasoning, vegetable oil, soup of choice.",
        method: "Cook rice until very soft, mash it until smooth and dough-like, then serve with a rich soup."
      },
      {
        name: "Coconut Rice",
        image: "images/Rice and Grain dishes/images (6).jpg",
        ingredients: "Rice, coconut milk, onions, peppers, thyme, bay leaves, seasoning.",
        method: "Cook the onions and peppers in oil, add coconut milk and seasoning, then simmer the rice in the mixture until fragrant and fully cooked."
      }
    ]
  },
  {
    name: "Swallows",
    items: [
      {
        name: "Pounded Yam",
        image: "images/Swallows/images (7).jpg",
        ingredients: "Yam, warm water, salt to taste.",
        method: "Boil the yam until very soft, then pound with warm water until smooth, elastic, and silky."
      },
      {
        name: "Eba",
        image: "images/Swallows/images (8).jpg",
        ingredients: "Garri, hot water, soup.",
        method: "Pour hot water over the garri gradually and stir until it turns into a smooth, stretchy dough."
      },
      {
        name: "Amala",
        image: "images/Swallows/images (9).jpg",
        ingredients: "Amala flour, hot water.",
        method: "Mix the amala flour with hot water in a bowl and stir continuously until it becomes smooth, dark, and glossy."
      },
      {
        name: "Fufu",
        image: "images/Swallows/images (10).jpg",
        ingredients: "Cassava or plantain, warm water.",
        method: "Cook the cassava or plantain until soft, then pound or mash it into a smooth, doughy swallow."
      },
      {
        name: "Semo",
        image: "images/Swallows/amala-onnthe-spot.jpeg",
        ingredients: "Semolina, hot water.",
        method: "Add warm water to the semolina gradually while stirring until it forms a soft, fluffy swallow."
      }
    ]
  },
  {
    name: "Soups",
    items: [
      {
        name: "Egusi Soup",
        image: "images/Soups/images (1).jpg",
        ingredients: "Egusi seeds, spinach or bitter leaf, stock, onions, peppers, meat, seasoning.",
        method: "Roast and grind the egusi, cook it in a rich stock with onions, peppers, and meat, then finish with leafy greens."
      },
      {
        name: "Efo Riro",
        image: "images/Soups/images (12).jpg",
        ingredients: "Spinach, palm oil, peppers, onions, meat, stock, seasoning.",
        method: "Cook the peppers and onions in palm oil, add stock and meat, then stir in the spinach until it softens and the soup thickens."
      },
      {
        name: "Ogbono Soup",
        image: "images/Soups/images (13).jpg",
        ingredients: "Ogbono powder, stock, onions, peppers, meat, seasoning.",
        method: "Blend the ogbono into the stock with peppers and meat, then simmer until it thickens into a rich, velvety soup."
      },
      {
        name: "Bitter Leaf Soup",
        image: "images/Soups/images (14).jpg",
        ingredients: "Bitter leaves, melon seed paste, stock, assorted meat, peppers, seasoning.",
        method: "Boil the bitter leaves and stock, add melon paste and spices, then simmer with meat until the soup turns deeply savoury."
      },
      {
        name: "Pepper Soup",
        image: "images/Soups/images (15).jpg",
        ingredients: "Meat or fish, fresh peppers, ginger, garlic, scent leaves, stock, seasoning.",
        method: "Simmer the meat with pepper, ginger, garlic, and seasoning until fragrant, then finish with scent leaves for a warming soup."
      }
    ]
  },
  {
    name: "Snacks",
    items: [
      {
        name: "Suya",
        image: "images/Snacks/images (16).jpg",
        ingredients: "Thinly sliced beef or chicken, suya spice, onions, oil.",
        method: "Marinate the meat with spice and oil, then grill or roast until smoky, lightly charred, and tender."
      },
      {
        name: "Kilishi",
        image: "images/Snacks/images (17).jpg",
        ingredients: "Dried meat, pepper mix, groundnut powder, spice blend.",
        method: "Season the meat with pepper and spice, dry thoroughly, then roast until crisp and savoury."
      },
      {
        name: "Akara",
        image: "images/Snacks/images (18).jpg",
        ingredients: "Beans, onions, peppers, salt, vegetable oil.",
        method: "Blend the beans until smooth, mix in onions and peppers, then fry spoonfuls until golden and crunchy outside."
      },
      {
        name: "Moi Moi",
        image: "images/Snacks/images (19).jpg",
        ingredients: "Beans, pepper, onion, crayfish, seasoning, oil.",
        method: "Blend the beans smooth, stir in seasoning and pepper, then steam in a warm container until firm and soft."
      },
      {
        name: "Puff Puff",
        image: "images/Snacks/images (20).jpg",
        ingredients: "Flour, yeast, sugar, salt, water, oil.",
        method: "Mix the batter, allow it to rise, then deep-fry until golden, puffed, and soft inside."
      },
      {
        name: "Chin Chin",
        image: "images/Snacks/images (21).jpg",
        ingredients: "Flour, sugar, milk, butter, egg, nutmeg, oil.",
        method: "Mix the dough, cut into tiny cubes, and fry until golden and crisp."
      }
    ]
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Zobo",
        image: "images/Drinks/images (22).jpg",
        ingredients: "Hibiscus leaves, ginger, pineapple peel, sugar, water.",
        method: "Steep the hibiscus and ginger with water, strain the mixture, add sweetener, and chill before serving."
      },
      {
        name: "Kunu",
        image: "images/Drinks/images (23).jpg",
        ingredients: "Millet or sorghum, ginger, dates, water, sugar.",
        method: "Grind the grains, strain the mixture, add ginger and sweetener, then chill and serve cold."
      },
      {
        name: "Palm Wine",
        image: "images/Drinks/images (24).jpg",
        ingredients: "Fresh palm sap, natural fermentation time.",
        method: "Collect the fresh sap and allow it to ferment naturally until it becomes a sweet, mildly alcoholic beverage."
      },
      {
        name: "Coca-Cola",
        image: "images/Drinks/images (25).jpg",
        ingredients: "Coca-Cola drink, ice.",
        method: "Serve chilled over ice for a bubbly refreshment that pairs with many meals."
      },
      {
        name: "Fanta",
        image: "images/Drinks/images (26).jpg",
        ingredients: "Fanta drink, ice.",
        method: "Pour over ice and serve cold for a sweet, fruity, fizzy burst."
      }
    ]
  }
];

function setFooterYear() {
  const yearEls = document.querySelectorAll("#year");
  const currentYear = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = currentYear;
  });
}

function renderGallery() {
  const galleryRoot = document.getElementById("gallery-grid");

  if (!galleryRoot) return;

  galleryRoot.innerHTML = foodCategories
    .flatMap((category) =>
      category.items.map(
        (item) => `
          <div class="col-md-6 col-lg-4">
            <article class="gallery-item">
              <img src="${item.image}" alt="${item.name}" />
              <div class="card-body">
                <h4 class="fw-bold mb-1">${item.name}</h4>
                <p class="mb-0 text-muted">${category.name}</p>
              </div>
            </article>
          </div>
        `
      )
    )
    .join("");
}

function renderRecipes() {
  const recipeRoot = document.getElementById("recipe-list");

  if (!recipeRoot) return;

  recipeRoot.innerHTML = foodCategories
    .map((category, index) => {
      const isOpen = index === 0 ? "show" : "";
      return `
        <div class="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
          <h2 class="accordion-header" id="heading-${index}">
            <button class="accordion-button ${index === 0 ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="collapse-${index}">
              ${category.name}
            </button>
          </h2>
          <div id="collapse-${index}" class="accordion-collapse collapse ${isOpen}" aria-labelledby="heading-${index}" data-bs-parent="#recipe-list">
            <div class="accordion-body">
              ${category.items
                .map(
                  (item) => `
                    <div class="mb-4 pb-3 border-bottom">
                      <h4 class="fw-bold mb-2">${item.name}</h4>
                      <p><strong>Ingredients:</strong> ${item.ingredients}</p>
                      <p><strong>Method:</strong> ${item.method}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function handleContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const messageBox = document.getElementById("formMessage");

    if (!name || !email || !message) {
      messageBox.textContent = "Please fill in all fields before sending your message.";
      messageBox.className = "mt-3 text-danger fw-semibold";
      return;
    }

    messageBox.textContent = `Thank you, ${name}! Your message has been received.`;
    messageBox.className = "mt-3 text-success fw-semibold";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setFooterYear();
  renderGallery();
  renderRecipes();
  handleContactForm();
});
