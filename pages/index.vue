  
<template>
<v-app>
      <v-navigation-drawer  v-model="drawer" right absolute   temporary   >
     <ShoppingCart/>
    </v-navigation-drawer>
  <v-carousel  hide-delimiter-background
      delimiter-icon="mdi-dot" :show-arrows="false">
    <v-carousel-item
     v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row>
                 <v-col>
                   <div class="d-flex flex-row mt-10">
                   <v-btn style="padding:0 !important" text> <v-img width="120px" height="80px" src="https://cdn.shopify.com/s/files/1/1432/5782/t/10/assets/logo.png?v=7023560698388380414"></v-img></v-btn>
                 <div style="width:600px"></div>
                    <v-combobox class="styleDiv" width="50px" value="ÜST"></v-combobox>
                    <v-combobox class="styleDiv" value="ALT"></v-combobox>  
                    <v-combobox class="styleDiv" :items="menuitems" value="DİĞER"></v-combobox>   
                    <nuxt-link to="/login" tag="button" style="padding:0 !important" text > <v-icon>mdi-account</v-icon></nuxt-link> 
                     <nuxt-link  to="/products" tag="button" style="padding:0 !important" text > <v-icon>mdi-shopping</v-icon></nuxt-link>   
                    <!-- <nuxt-link to="/box" tag="button" style="padding:0 !important" text > <v-icon>mdi-shopping</v-icon></nuxt-link>         -->
                 <v-btn  class="mt-4" dark @click.stop="drawer = !drawer"  style="padding:0 !important" text  >  <v-icon>mdi-shopping</v-icon> </v-btn>
                  
               
                    <label style="width:50px"></label>
                  </div>
                 </v-col>
               </v-row>
               <v-row align="top" justify="center" >
                 <v-col class="text-center" cols="12" >
                   <h6 class="font-weight-medium mb-2 black--text"> {{item.text1}}</h6>
                   <h1  class="display-1 white--text mb-4">{{item.text2}}</h1>
                   
                    <nuxt-link  to="/products" tag="button" style="background-color:white"  class="font-weight-light pa-2 font-size:15 rounded-0 black--text" >{{item.btntext}} </nuxt-link>
                 </v-col>
               </v-row>
    
    
    </v-carousel-item>
  </v-carousel>
   <Products />
   </v-app>
</template>

<script>
import Products from '@/components/Products.vue'
import ShoppingCart from '@/components/ShoppingCart'
  export default {
      components:{
       ShoppingCart,
       Products,
   

    },
  //    created(){
  //      this.$store.dispatch("setPosts",this.fetchedPosts)
  // },
    data() { return{
         menuitems: [
          'Cüzdan',
          'Gözlük',
          'Anahtarlık',          
          'Defter',                
          'Bere',
           ],    
      
         drawer: null,
      items: 
       [
          {
            src: '//cdn.shopify.com/s/files/1/1432/5782/t/10/assets/hero_slide_1.jpg?v=4170718084814245097',
            text1:"YENİ SEZONU KEŞFEDİN",
            text2:"SONBAHAR/KIŞ'20",
            btntext:"ALIŞVERİŞE BAŞLA →"
          },
          {
            src: '//cdn.shopify.com/s/files/1/1432/5782/t/10/assets/hero_slide_2.jpg?v=14740158159152495999',
            text1:"",
            text2:"",
            btntext:"BERELER İÇİN TIKLAYIN →"
          },
          
        
        ],
    }
  },
  }
</script>


