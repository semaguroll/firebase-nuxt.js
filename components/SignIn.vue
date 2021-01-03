<template>
    <v-app>
        <div>
             Hoşgeldiniz
            <span v-if="loggedIn">{{dataa}}</span>
            <span v-else></span>
        </div>
        <v-btn @click="signOut">Sign Out</v-btn>
        <v-btn @click="anaSayfa">Ana Sayfa</v-btn>
    </v-app>
</template>
<script>
import firebase from "firebase/app"
import "firebase/auth"
export default {
    data(){
        return{
            loggedIn:false,
           
        }
    },
    methods:{
        async signOut(){
            const data = await firebase.auth().signOut()            
                this.$router.push('/login')
        },
        anaSayfa(){               
                this.$router.push('/')
        }
    },
      computed:{
       dataa () {
      return firebase.auth().currentUser.email
  }
},
    created(){
        firebase.auth().onAuthStateChanged(user =>{
            this.loggedIn= !!user;
        })
        
    }
    
}
</script>