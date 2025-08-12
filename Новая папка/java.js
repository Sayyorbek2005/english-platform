const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
    }
];

const productList = document.querySelector(".product-list");
products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button class="but">submid</button>
    `;
    const but = document.createElement("but");
    but.className = "but";
    but.innerText = "";

    const button = card.querySelector(".but");
    button.addEventListener("click", function() {
        console.log("Product ID:", product.id, "product Name:", product.name, "Price:", product.price);
    });
    productList.appendChild(card);
    productList.appendChild(but);
});
