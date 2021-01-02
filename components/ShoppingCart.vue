<template>
    <v-app>
        <v-content>
            <v-container style="background-color: darkgray" >
                <v-row align="center" justify="center">
                   <v-card class="pa-5" style="background-color: darkgray"  width="300px">
                      <div class="d-flex flex-row mb-1">
                          <h3 class="font-weight-light white--text">Alışveriş sepetiniz</h3>
                          <label style="width:90px"></label>
                          <v-icon color="white" >mdi-close</v-icon>
                      </div>
                      <p class="white--text">___________________________________</p>
                    <v-card class="d-flex flex-column">
                        <v-card style="background-color: darkgray"  v-for="post in box" :key="post.id">
                         <div class="d-flex flex-row">
                          <v-img height="120px" width="50px" :src="post.image"></v-img>
                          <label style="width:5px"></label>
                          <div  class="d-flex flex-column mt-5">
                              <h6 class="font-weight-light white--text">{{post.title}}</h6>
                              <h6 class="font-weight-light white--text">S</h6>
                              <div class="d-flex flex-row" style="height:17px; width:50px" >
                                 <v-btn class="white--text" style="height:15px;  min-width: 20px;padding:0 !important"  text>-</v-btn>
                               <label class="white--text" style="height:5px; width:5px;font-size: 0.8em !important"  >4</label>
                                <v-btn class="white--text" style="height:17px;  min-width: 20px;padding:0 !important" text>+</v-btn>
                              </div>
                          </div>
                           <v-btn class="white--text"  @click="deleteBtn()" style="height:15px;  min-width: 20px;padding:0 !important"  text>X</v-btn>
                          <h5 class="font-weight-light white--text mt-15">{{post.price}}TL</h5>
                      </div>
                    </v-card>
                    </v-card>                     
                      <div class="d-flex flex-column">
                            <p class="align-end white--text">___________________________________</p>
                            <div class="d-flex flex-row mb-5">
                                <h5 class="font-weight-light white--text">TOPLAM</h5>
                                <label style="width:150px"></label>
                                <h5 class="font-weight-light white--text"></h5>
                            </div>
                            <v-btn class="font-weight-light  rounded-0 white--text" style="background-color:brown; font-size:10px">SİPARİŞİ TAMAMLA → </v-btn>
                      </div>
                     
                   </v-card>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
import axios from "axios"
export default {

  computed:{
   box () {
     return this.$store.getters.getBox
  }
}, 
created(){
 this.$store.dispatch('firebaseGetBox')
},
methods:{
  deleteBtn(){
      axios.get("https://beykarakoy-default-rtdb.firebaseio.com/box.json")
            .then(response => {
                let data =response.data;
                let boxArray=[];   
                let name;             
                for(let key in data){
                    boxArray.push({id:key,name:key,...data[key]})           
                              
                }
                for(let key in boxArray){
                   
                   if(boxArray[key].id==this.$route.params.productId){
                       axios.delete("https://beykarakoy-default-rtdb.firebaseio.com/box/"+boxArray[key].name+".json")
                                
                   }
              
                }
             console.log(idInfo)
            })
  }
}

  }
</script>
