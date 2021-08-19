/* ------ JavaScript - Menu Page ------ */
const menu = [
  {
    id: 1,
    title: "Caramel Pancakes",
    category: "breakfast",
    price: 8,
    img: "./img/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 2,
    title: "Mega Burger",
    category: "lunch",
    price: 15,
    img: "./img/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 3,
    title: "Homer's Dream Shake",
    category: "shakes",
    price: 10,
    img: "./img/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 4,
    title: "Eggs & Beans",
    category: "breakfast",
    price: 9,
    img: "./img/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 5,
    title: "Whoopi Gold-Burger",
    category: "lunch",
    price: 16,
    img: "./img/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 6,
    title: "Chocolate Shake",
    category: "shakes",
    price: 7,
    img: "./img/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 7,
    title: "Kevin Bacon-Burger",
    category: "lunch",
    price: 16,
    img: "./img/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 8,
    title: "Scottish Wangus-Burger",
    category: "lunch",
    price: 18,
    img: "./img/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 9,
    title: "Social Distance Shake",
    category: "shakes",
    price: 12,
    img: "./img/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
  {
    id: 10,
    title: "Okinawan Butta-Niku",
    category: "dinner",
    price: 20,
    img: "./img/item-10.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laboriosam praesentium a soluta, harum architecto tempora in
        voluptate velit? Quisquam, necessitatibus.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// Load All Items.
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
        <img
          src=${item.img}
          class="photo"
          alt=${item.title}
        />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">£${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  //   console.log(displayMenu);
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // Fliter Items By Category.
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //   console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
