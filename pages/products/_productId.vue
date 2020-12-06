<template>
    <v-app>
        <v-content>
            <v-container>
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
                <v-row align="center" justify="center">
                    <v-col align="right" justify="center" cols="12" sm="4">                           
                             <v-img class="mb-10" height="400"  width="300" src="https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy0040copy_1024x1024.jpg?v=1602665691"></v-img>
                             <v-img height="400" width="300" src="https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy0040copy_1024x1024.jpg?v=1602665691"></v-img>                             
                    </v-col>
                    <v-card class="align-start" width="500px" height="800px" >
                       <v-col cols="12" sm="12">
                             <div class="d-flex flex-column text-center mt-15">
                                  <h6 class="font-weight-light">BEY</h6>
                                  <h3 class="font-weight-light"> SWEAT</h3>
                                  <h1>{{$route.params.productId}}</h1>
                                   <h5 class="font-weight-light">490.00TL</h5>
                                   <p>_________</p>
                                   <h6 class="font-weight-light mb-1">Size</h6>
                                   <div class="d-flex flex-row">    
                                     <label style="width:170px"></label>  
                                                              
                                      <v-btn text x-small>S</v-btn>
                                      <v-btn text x-small>M</v-btn>
                                      <v-btn text x-small>L</v-btn>
                                      <v-btn text x-small>XL</v-btn>
                                   </div>                                
                             </div>
                              <div class="text-center mt-5">
                                  <v-btn class="white--text rounded-0  " align="center" justify="center" width="120px" color="black">SEPETE EKLE</v-btn>
                             </div>                          
                             <div class="d-flex flex-column text-left mt-10 ml-10">
                                    <h6 class="font-weight-light">• %100 Pamuk</h6>  
                                    <h6 class="font-weight-light">• Fit kesim</h6>   
                                    <h6 class="font-weight-light">• Renk: Nefti Yeşil</h6>   
                                    <h6 class="font-weight-light">• Model 182 cm, beden M</h6>                                  
                             </div>
                             <div class="text-center mt-10 ml-10">
                                  <h6 class="font-weight-light">Satın alacağınız üründen memnun kalacağınıza eminiz. Ancak memnun kalmadığınız takdirde değişim veya tam iade yapabilirsiniz.</h6>                        
                             </div>
                       </v-col>
                    </v-card>
                </v-row>                
            </v-container>
        </v-content>
    </v-app>
</template>

 
<script>
import NewUser from '@/components/NewUser.vue'
import ShoppingCart from '@/components/ShoppingCart'
  export default {
    components:{
       ShoppingCart,
         NewUser
     
    },
      computed:{
        post(){
         this.$store.getters.getSite(this.$route.params.productId)
           
        }

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
