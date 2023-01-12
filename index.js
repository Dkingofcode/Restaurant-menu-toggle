// items 
  const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "eaters-collective-pLKgCsBOiw4-unsplash.jpg",
        desc: `I'm baby woke milkshakle wolf gang, i don't do nothing
        i don't want to do. I am fearless in facing any bad nanay who 
        tries to prove she's smarter `
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. `
    },
    {
        id: 3,
        title: "super crabs",
        category: "lunch",
        price: 13.99,
        img: "chad-montano--GFCYhoRe48-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 4,
        title: "vanilla cake",
        category: "dinner",
        price: 13.99,
        img: "chad-montano-lP5MCM6nZ5A-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 5,
        title: "chicken fillet",
        category: "lunch",
        price: 13.99,
        img: "luisa-brimble-vIm26fn_QKg-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 6,
        title: "soup froupe",
        category: "breakfast",
        price: 13.99,
        img: "jay-wennington-N_Y88TWmGwA-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 7,
        title: "strwberry pie",
        category: "breakfast",
        price: 13.99,
        img: "joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 8,
        title: "super crabs",
        category: "dinner",
        price: 13.99,
        img: "pablo-merchan-montes-MXovqM130UI-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 9,
        title: "lean gourd",
        category: "lunch",
        price: 13.99,
        img: "slashio-photography-ZG9ggI_pjFw-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 10,
        title: "bread burret ",
        category: "lunch",
        price: 13.99,
        img: "eaters-collective-pLKgCsBOiw4-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 11,
        title: "sour sweet",
        category: "dinner",
        price: 13.99,
        img: "anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 12,
        title: "fish fritte",
        category: "lunch",
        price: 13.99,
        img: "eiliv-aceron-uBigm8w_MpA-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 13,
        title: "super crabs",
        category: "dinner",
        price: 13.99,
        img: "luisana-zerpa-MJPr6nOdppw-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    },
    {
        id: 14,
        title: "super crabs",
        category: "breakfast",
        price: 13.99,
        img: "kobby-mendez-q54Oxq44MZs-unsplash.jpg",
        desc: `Vapourize the washed waves salvage the raw skin, as they are
        precious gems in time of gathering jiust looking at the reaper's hand
         magic. ` 
    }
  ]

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


// load items
window.addEventListener("DOMContentLoaded", function ()  {
    displayMenuItems(menu);
      displayMenuButtons();
    })



function displayMenuItems(menuItems){ 
    let displayMenu = menuItems.map(function (item) {
     // console.log(item);

      return ` <article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title} />
      <div class="item-info">
         <header>
             <h4>${item.title}</h4>
             <h4 class="price">${item.price}</h4>
         </header>
         <hr>
         <p class="item-text">${item.desc}</p>
      </div>
    </article> `;
   });
   displayMenu = displayMenu.join("");
     sectionCenter.innerHTML = displayMenu;
   console.log(displayMenu);
}




   function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if(!values.includes(item.category)){
            values.push(item.category);
        }  
        return values;
       }, ["all"]);
       //console.log(categories);
    
    
       const categoryBtns = categories.map(function (category) {
           return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
        }).join("");
        container.innerHTML = categoryBtns;
        const filterBtns = container.querySelectorAll(".filter-btn");
        
        // filter items
        filterBtns.forEach(function (btn) {
            btn.addEventListener("click", function (e)  {
                console.log("grates!")
                const category = e.currentTarget.dataset.id;
                const menuCategory = menu.filter( function(menuItem) {
                    if(menuItem.category === category);{
                        return menuItem;
                    }
                });
                
                // console.log(menuItem.category);
                if(category === "all"){
                    displayMenuItems(menu);
                } else{
                    displayMenuItems(menuCategory);
                }
            });
        })

   }

























