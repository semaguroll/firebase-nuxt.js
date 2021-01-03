<template>
    <v-app>
        <div>
            Logged In 
            <span v-if="loggedIn">Yes</span>
            <span v-else>No</span>
        </div>
        <v-btn @click="signOut">Sign Out</v-btn>
    </v-app>
</template>
<script>
import firebase from "firebase/app"
import "firebase/auth"
export default {
    data(){
        return{
            loggedIn:false
        }
    },
    methods:{
        async signOut(){
            const data = await firebase.auth().signOut()            
                this.$router.push('/login')
        }
    },
    created(){
        firebase.auth().onAuthStateChanged(user =>{
            this.loggedIn= !!user;
        })
        
    }
}
</script>