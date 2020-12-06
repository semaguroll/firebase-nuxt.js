<template>
    <div>
        <v-card height="450px" width="300px" class="ml-100 pa-4"  outlined >
           <v-img :src="post.image"></v-img>
            <v-btn @click="showDetail" class="font-weight-light" text text-small >{{post.title}} - {{post.price}}</v-btn> 
         <!-- <nuxt-link :to="{name:'products-id',params:{id:post.id}}" :key="post.id" >{{post.title}} - {{post.price}}</nuxt-link>  -->
           <h6 class="font-weight-light" text-small>BEY</h6>
       </v-card>
    </div>
</template>
<script>

  export default {
   
    props:{
     post:{ 
       required: true,
    
       }
    },
   methods:{
     showDetail(){
       this.$router.push("/products/"+ this.post.id)
     }
   }
  }
</script>