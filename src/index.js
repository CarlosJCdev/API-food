/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('.app');
//Agrego una internacionalización para los precios
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice;
};


//Web api--EJEMPLO CON PROMESAS
//Conectarnos al server
window.fetch(`${baseUrl}/api/avo`)
    //Procesar la respuesta y Convertirla en JSON
    .then((respuesta) => respuesta.json())
    //Prescentar y renderizar la info en le browser
    .then((respuestaJSON) => {
        const todoselementos = [];
        respuestaJSON.data.forEach((item) => {
            //Var que contendra todos los elemntos

            //Crear IMAGEN
            const imagen = document.createElement('img');
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = "imagen";
            //Crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "muy-grande";
            //Crear precio
            const price = document.createElement("div");
            price.textContent = formatPrice(item.price);
            price.className = "precio";

            const container = document.createElement("div");
            container.append(imagen, title, price);
            todoselementos.push(container);
        });
        appNode.append(...todoselementos);
    });




//-------------------------------------------------


//Web API--EJEMPLO CON fetch ASYNC/AWAIT
/*
async function fetchData() {
    const response = await fetch(url),
        data = await response.json(),
        allItems = [];

    data.data.forEach((item) => {
        // create image
        const image = document.createElement("img");
        // create title
        const title = document.createElement("h2");
        // create price
        const price = document.createElement("div");

        const container = document.createElement("div");
        container.append(image, title, price);

        allItems.push(container);
    });

    document.body.append(...allItems)
}

fetchData();
*/