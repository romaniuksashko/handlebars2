import products from "./products.json";
import template from "./products-template.hbs";

import sciences from "./sciences.json";
import stemplate from "./sciences-template.hbs";


// products
const productsListRef = document.querySelector(".products-list");

productsListRef.innerHTML = template({products});


// scientists
const sciencesListRef = document.querySelector(".sciences-list");

sciencesListRef.innerHTML = stemplate({sciences});
