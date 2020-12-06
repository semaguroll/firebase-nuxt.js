
<template>
   <v-app>
          <v-navigation-drawer  v-model="drawer" right absolute   temporary   >
     <ShoppingCart/>
    </v-navigation-drawer>
      <v-card class="overflow-hidden">
    <v-app-bar height="120px" dark color="gray"  >
  
      <nuxt-link  to="/" tag="button" style="padding:0 !important" text> <v-img width="120px" height="80px" src="https://cdn.shopify.com/s/files/1/1432/5782/t/10/assets/logo.png?v=7023560698388380414"></v-img></nuxt-link >

     <label style="width:450px"></label>

                   <v-combobox class="styleDiv" width="50px" value="ÜST"></v-combobox>
                    <v-combobox class="styleDiv" value="ALT"></v-combobox>  
                    <v-combobox class="styleDiv" :items="menuitems" value="DİĞER"></v-combobox>   
                    <nuxt-link to="/newuser" tag="button" style="padding:0 !important" text > <v-icon>mdi-account</v-icon></nuxt-link> 
                     <nuxt-link  to="/products" tag="button" style="padding:0 !important" text > <v-icon>mdi-shopping</v-icon></nuxt-link>   
                     <v-btn   dark @click.stop="drawer = !drawer"  style="padding:0 !important" text  >  <v-icon>mdi-shopping</v-icon> </v-btn>
                 
                  
                  
                    <label style="width:50px"></label>
    </v-app-bar>
  </v-card>
     <Products :posts="fetchedPosts"/>
     
   </v-app>
</template>


<script>

import ShoppingCart from '@/components/ShoppingCart'
import Products from '@/components/Products.vue'
  export default {
    components:{
       ShoppingCart,
         Products
     
    },
      created(){
       this.$store.dispatch("setPosts",this.fetchedPosts)
  },
    data: () => ({
             menuitems: [
          'Cüzdan',
          'Gözlük',
          'Anahtarlık',          
          'Defter',                
          'Bere',
           ],    
           drawer: null,
            fetchedPosts : [
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

  }),
  
  }
</script>

