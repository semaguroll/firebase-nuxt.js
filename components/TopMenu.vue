<template>

  <v-card class="overflow-hidden">
    <v-app-bar height="120px" dark color="white"  >
       <v-navigation-drawer  v-model="drawer" right absolute   temporary   >
     <ShoppingCart/>
    </v-navigation-drawer> 
   <nuxt-link  to="/" tag="button" style="padding:0 !important" text> <v-img width="120px" height="80px" src="https://cdn.shopify.com/s/files/1/1432/5782/t/10/assets/logo.png?v=7023560698388380414"></v-img></nuxt-link >

     <label style="width:450px"></label>

                   <v-combobox class="styleDiv" width="50px" value="ÜST"></v-combobox>
                    <v-combobox class="styleDiv" value="ALT"></v-combobox>  
                    <v-combobox class="styleDiv" :items="menuitems" value="DİĞER"></v-combobox>   
                    <nuxt-link to="/newuser" tag="button" style="padding:0 !important" text > <v-icon>mdi-account</v-icon></nuxt-link> 
                     <nuxt-link  to="/products" tag="button" style="padding:0 !important" text > <v-icon>mdi-shopping</v-icon></nuxt-link>   
                     <v-btn  class="mt-4" dark @click.stop="drawer = !drawer"  style="padding:0 !important" text  >  <v-icon>mdi-shopping</v-icon> </v-btn>
                 
                  
                  
                    <label style="width:50px"></label>
    </v-app-bar>
  </v-card>
</template>

<script>
import ShoppingCart from '@/components/ShoppingCart'
  export default {
    components:{
       ShoppingCart,
     
    },
    data: () => ({
       menuitems: [
          'Cüzdan',
          'Gözlük',
          'Anahtarlık',          
          'Defter',
          'Bere'
        ],   
           drawer: null,
    
  }),
  methods:{
     toggle () {
        this.$nextTick(() => {
          
            this.menuitems = this.menuitems.slice()
          
        })
      },
    deneme(){
      if(value=="Bere"){
           this.$router.push("/products")
           return true
      }
      else{
        return false
      }
    }
  }
  }
</script>
