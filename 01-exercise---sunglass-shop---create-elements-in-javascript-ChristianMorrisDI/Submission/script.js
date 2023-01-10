// products: an array of product objects
// look in ./products.js to see the data structure
import products from "./products.js";

/**
 *
 * @param {object} product - contains information for a single producy
 * @returns DOM element
 */
const getProductEl = (product) => {
  // TODO: change the following productEl variable to be a DOM element
  // use the product parameter to complete the information
  const productEl = document.createElement("li");
  productEl.classList.add("product-grid-item");

const imgEl = document.createElement("img");
imgEl.setAttribute("src", product.images[0]);
productEl.appendChild(imgEl);

const nameEL = document.createElement("h3");
nameEL.textContent = product.name;
productEl.appendChild(nameEL);

const descriptionEL = document.createElement("p");
descriptionEL.textContent = product.description;
productEl.appendChild(descriptionEL);

const buttonEL = document.createElement("button");
buttonEL.textContent = "Buy now";
productEl.appendChild(buttonEL);

  return productEl;
};



// The DOM element to append product elements into
const productsContainerEl = document.querySelector("#products");

// This example has been created for the first product
const product1 = getProductEl(products[0]);
productsContainerEl.appendChild(product1);

// TODO: Create and append the rest of the products (12 in total)

const product2 = getProductEl(products[1]);
productsContainerEl.appendChild(product2);

const product3 = getProductEl(products[2]);
productsContainerEl.appendChild(product3);

const product4 = getProductEl(products[3]);
productsContainerEl.appendChild(product4);

const product5 = getProductEl(products[4]);
productsContainerEl.appendChild(product5);

const product6 = getProductEl(products[5]);
productsContainerEl.appendChild(product6);

const product7 = getProductEl(products[6]);
productsContainerEl.appendChild(product7);

const product8 = getProductEl(products[7]);
productsContainerEl.appendChild(product8);

const product9 = getProductEl(products[8]);
productsContainerEl.appendChild(product9);

const product10 = getProductEl(products[9]);
productsContainerEl.appendChild(product10);

const product11 = getProductEl(products[10]);
productsContainerEl.appendChild(product11);

const product12 = getProductEl(products[11]);
productsContainerEl.appendChild(product12);





