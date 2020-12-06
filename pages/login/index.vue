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
     <Login/>
     
   </v-app>
</template>


<script>

export default {

  components: { 
   }
 }
</script>
<script>
import Login from '@/components/Login.vue'
import ShoppingCart from '@/components/ShoppingCart'
  export default {
    components:{
       ShoppingCart,
         Login
     
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
    
  }),
  
  }
</script>
