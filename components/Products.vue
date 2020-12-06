<template>
   <v-app>
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
                            <ProductBasic :post="post" v-for="post in posts" :key="post.id" />
                          </v-card>
                       </div>
                     
                   </v-col>
                </v-row>               
            </v-container>
       </v-content>
   </v-app>
</template>


<script>
import ProductBasic from '@/components/ProductBasic'
  export default {
    components:{
       ProductBasic
    },
    data () {
      return {
        name:"BERE"
      }
    },
    props:{
     posts:{ 
       required: true,
       
       }
    }
  }
</script>