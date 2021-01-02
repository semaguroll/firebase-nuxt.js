<template>
    <v-app>
        <div>
            Logged In 
            <span v-if="loggedIn">Yes</span>
            <span v-else>No</span>
        </div>
        <v-btn to="/login" @click="signOut">Sign Out</v-btn>
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
            console.log(data)
        }
    },
    created(){
        firebase.auth().onAuthStateChanged(user =>{
            this.loggedIn= !!user;
        })
    }
}
</script>