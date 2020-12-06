const _posts = [
    {id:1,title:"bere",price:100,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2268copy_1024x1024.jpg?v=1602688845"},
    {id:2,title:"çanta",price:89,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2260copy_1024x1024.jpg?v=1602689425"},
    {id:3,title:"t-shirt",price:40,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2247copy_1024x1024.jpg?v=1602752199"},
    {id:4,title:"ayakkabı",price:300,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2275copy_1024x1024.jpg?v=1602751858"},
    {id:5,title:"şort",price:110,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2213copy_1024x1024.jpg?v=1602688867"},
    {id:6,title:"gömlek",price:210,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2240copy_1024x1024.jpg?v=1602752143"},
    {id:7,title:"gözlük",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2256copy_1024x1024.jpg?v=1602752167"},
    {id:8,title:"eldiven",price:200,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2223copy_1024x1024.jpg?v=1602752014"}
]


export default {
    getProducts (cb) {
      setTimeout(() => cb(_posts), 100)
    },
  
    buyProducts (posts, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.webdriver)
          ? cb()
          : errorCb()
      }, 100)
    }
  }