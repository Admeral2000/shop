let elProdList = document.querySelector(".product-list");
let elSearchinp = document.getElementById("search-product");
let elSearchBtn = document.querySelector(".search-btn");

document.addEventListener("DOMContentLoaded", async () => {
  let token = localStorage.getItem("access_token");
  if (token) {
    const data = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const { products } = await data.json();
    let elfrag = document.createDocumentFragment();
    products.forEach((product) => {
      let newLi = document.createElement("li");
      newLi.setAttribute("class", "list");

      let link = document.createElement("a");
      link.textContent = product.title;
      link.href = `/pages/single-product.html?product_id=${product.id}`;

      let newImg = document.createElement("img");

      newImg.setAttribute("src", product.thumbnail);
      newImg.setAttribute("class", "picture");

      newLi.append(newImg);
      newLi.append(link);
      elfrag.append(newLi);
    });
    elProdList.append(elfrag);
  }
});

let elSearchResult = document.querySelector(".search-result");

elSearchBtn.addEventListener("click", () => {
  let word = elSearchinp.value.toLowerCase();
  if (word !== "") {
    function searchProd() {
      fetch(`https://dummyjson.com/products/search?q=${word}`)
        .then((data) => data.json())
        .then((result) => {
          result.products.forEach((p) => {
            let elAnchor = document.createElement("a");
            elAnchor.textContent = p.title;
            elAnchor.href = `/pages/single-product.html?product_id=${p.id}`;

            elSearchResult.append(elAnchor);
          });
        });
      elSearchResult.innerHTML = "";
    }
    elSearchinp.value = "";
    searchProd();
  }
});

// kminchelle
// 0lelplR
