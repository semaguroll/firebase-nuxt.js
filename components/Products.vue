<template>
   <v-app >
       <v-content>
         
            <v-container class="fill-height about" fluid>
                <v-row class="d-flex align-content-start flex-wrap" >
                   <v-col cols="12" align="center">
                    
                       <div >
                          <h1 class="font-weight-light" >{{name}}</h1>
                          <p>_____</p>
                       </div>
                       <div >
                          <v-card class="d-flex flex-wrap" width="900px">
                          
                             <v-card height="450px" width="300px" v-for="post in posts" :key="post.id"  class="ml-100 pa-4"  outlined >
                               <v-img :src="post.image"></v-img>
                               <!-- <v-btn @click="showDetail" class="font-weight-light" text text-small >{{post.title}} - {{post.price}}</v-btn>  -->
                              <nuxt-link tag="button" :to="{name:'products-productId',params:{productId:post.id}}" :key="post.id" >{{post.title}} - {{post.price}} TL</nuxt-link>
                               <h6 class="font-weight-light" text-small>BEY</h6>
                         </v-card>
                          </v-card>
                       </div>
                     
                   </v-col>
                </v-row>               
            </v-container>
       </v-content>
   </v-app>
</template>


<script>
import axios from "axios"

  export default {
   
    data () {
      return {
        name:"BERE",
        deneme:this.posts
      }
    },
    // methods:{
    //  showDetail(){
    //    this.$router.push("/products/"+ this.post.id)
    //  }},

    //  methods:{
    //  showDetail(deneme){
    //    axios.post("https://beykarakoy-default-rtdb.firebaseio.com/",deneme)
           
    //  }},

     computed:{
       posts () {
      return this.$store.getters.getPosts
  }
},
created(){
 this.$store.dispatch('firebaseGet')
}
  }
</script>