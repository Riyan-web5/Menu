const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Fluffy, golden‑brown pancakes made with tangy buttermilk for extra lift and subtle acidity. Typically served stacked in threes or fours, brushed with melted butter, and crowned with pure maple syrup. Optional add‑ins like fresh berries or chocolate chips can be folded into the batter for bursts of sweetness. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `A classic “double” cheeseburger built the old‑school way: two flame‑grilled beef patties, American cheese slices melted between and on top, shredded iceberg lettuce, sliced tomato, crisp onions, dill pickle chips, and our tangy house “diner sauce.” All nestled in a soft, toasted sesame‑seed bun. `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `A colossal, over‑the‑top shake: rich vanilla ice cream blended thick with chocolate fudge swirls. Topped with a mountain of whipped cream, drizzles of hot caramel and chocolate sauce, cookie pieces, and a giant chocolate‑dipped waffle cone “horn.” Served in an oversized glass mug with extra straws for sharing.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `A homestyle plate combining two farm‑fresh eggs any style, thick‑cut smoked bacon or country sausage links, house‑made buttermilk biscuits, and a ladle of savory sausage gravy. Served with a side of seasoned home‑fried potatoes or grits. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `A breakfast mash‑up: two over‑easy eggs perched atop a crisp hash brown patty, smothered in peppery hollandaise sauce and sprinkled with chopped chives. Add‑ons can include pulled ham or smoked brisket for an extra protein punch.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `A protein lover’s fantasy: a towering stack of thin‑sliced, Applewood‑smoked bacon strips piled high on the plate. Served with a side of tangy maple mustard dipping sauce and optional accompaniments like scrambled eggs or buttermilk pancakes. `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Your quintessential all‑American meal: a juicy quarter‑pound cheeseburger with lettuce, tomato, onion, and pickles; shoestring fries; and a milkshake (vanilla, chocolate, or strawberry). Perfect for diners craving nostalgia.  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `A cozy “comfort in a bowl” entrée: creamy mac ’n’ cheese loaded with gooey cheddar and mozzarella, topped with crispy breadcrumb “crumbles,” and served alongside a warm, buttery garlic breadstick. Meant to lift spirits and stave off any quarantine blues.`,
  },
  {
    id: 10,
    title: "Steak Meal",
    category: "Dinner",
    price: 16.99,
    img: "./images/item-10.jpeg",
    desc: `A hearty main course featuring a tender 10–12 oz USDA choice sirloin or ribeye, seasoned and grilled to order. Accompanied by garlic‑herb butter melting on top, a side of rosemary‑seasoned roasted potatoes, and steamed seasonal vegetables (e.g., broccoli, carrots, zucchini).`,
  }
  
];
const SectionCenter = document.querySelector(".section-center");
const btncont = document.querySelector(".btn-container");


window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu);
  displaybuttons();
});

function displayMenuItems(menuItems){
     let displayMenu = menuItems.map(function(item){
   return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo">
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
     });
     displayMenu = displayMenu.join("");
     SectionCenter.innerHTML = displayMenu;
}
function displaybuttons(){
  const categories = menu.reduce(function(values, item){

       if(!values.includes(item.category)){
        values.push(item.category);
       }
        return values;
  }, ["all"]);

  const categorybtns = categories.map(function(category){
     return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join("");
  
 btncont.innerHTML = categorybtns ;

  const filterbtn = document.querySelectorAll(".filter-btn");

  filterbtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
     const category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function(GetmenuItem) {
      if(GetmenuItem.category === category){
        return GetmenuItem;
      }
    });
    if(category === "all"){
      displayMenuItems(menu);
    }
    else{
      displayMenuItems(menuCategory);
    }
    });
  });
}

console.log(displaybuttons);