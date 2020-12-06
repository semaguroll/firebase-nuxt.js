
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
          'Kalem',
          'Çorap',
          'Çanta',
          'Macbook Kılıfları',
          'Bere',
          'Ayakkabı'

        ],   
           drawer: null,
            fetchedPosts : [
    {id:1,title:"bere",price:100,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2268copy_1024x1024.jpg?v=1602688845"},
    {id:2,title:"çanta",price:89,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2260copy_1024x1024.jpg?v=1602689425"},
    {id:3,title:"t-shirt",price:40,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2247copy_1024x1024.jpg?v=1602752199"},
    {id:4,title:"ayakkabı",price:300,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2275copy_1024x1024.jpg?v=1602751858"},
    {id:5,title:"şort",price:110,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2213copy_1024x1024.jpg?v=1602688867"},
    {id:6,title:"gömlek",price:210,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2240copy_1024x1024.jpg?v=1602752143"},
    {id:7,title:"gözlük",price:150,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2256copy_1024x1024.jpg?v=1602752167"},
    {id:8,title:"eldiven",price:200,stock:20,image:"https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2223copy_1024x1024.jpg?v=1602752014"}
]
    
  }),
  
  }
</script>

