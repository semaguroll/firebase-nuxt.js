const _posts = [
  {id:1,title:"Bey Yün Bere Açık Kahve",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2268copy_1024x1024.jpg?v=1602688845"},
  {id:2,title:"Bey Yün Bere Açık Yeşil",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2260copy_1024x1024.jpg?v=1602689425"},
  {id:3,title:"Bey Yün Bere Somon ",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2247copy_1024x1024.jpg?v=1602752199"},
  {id:4,title:"Bey Yün Bere Gri ",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2275copy_1024x1024.jpg?v=1602751858"},
  {id:5,title:"Bey Yün Bere Açık Mavi ",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2213copy_1024x1024.jpg?v=1602688867"},
  {id:6,title:"Bey Yün Bere Kırmızı",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2240copy_1024x1024.jpg?v=1602752143"},
  {id:7,title:"Bey Yün Bere Sarı",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2256copy_1024x1024.jpg?v=1602752167"},
  {id:8,title:"Bey Yün Bere Koyu Yeşil",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2223copy_1024x1024.jpg?v=1602752014"},
   {id:9,title:"Bey Yün Bere Koyu Kahve",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2231copy_1024x1024.jpg?v=1602755362"},
    {id:10,title:"Bordo Kaşe Şapka",price:250,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/enes4_1024x1024.jpg?v=1606732609"}
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