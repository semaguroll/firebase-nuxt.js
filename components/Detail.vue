<template>
    <v-app>
        <v-content>
            <v-container>
                 <v-navigation-drawer  v-model="drawer" right absolute   temporary   >
     <ShoppingCart/>
    </v-navigation-drawer>
                <v-row align="center" justify="center">
                    <v-col align="right" justify="center" cols="12" sm="4">                           
                             <v-img class="mb-10" height="400"  width="300" :src="post.image"></v-img>
                             <v-img height="400" width="300" src="post.image"></v-img>                             
                    </v-col>
                    <v-card class="align-start" width="500px" height="800px" >
                       <v-col cols="12" sm="12">
                             <div class="d-flex flex-column text-center mt-15">
                                  <h6 class="font-weight-light">BEY</h6>
                                  <h3 class="font-weight-light">{{post.title}}</h3>
                                  <h1>{{$router.id}}</h1>
                                   <h5 class="font-weight-light">{{post.price}} TL</h5>
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
                                  <v-btn class="white--text rounded-0" @click.stop="drawer=!drawer" align="center" justify="center" width="120px" color="black">SEPETE EKLE</v-btn>
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

  export default {
  computed:{
        post(){
          return this.$store.state.fetchedPosts.find(post =>post.id === this.$route.params.productId)        
        }

  },
    data: () => ({
             
           drawer: null,
    
  }),
  
  }
</script>