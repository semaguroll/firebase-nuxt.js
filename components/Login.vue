<template>
  <v-app>
    <v-content>
      <v-row align="center" justify="center">
        <v-col cols="12" align="center" justify="center">
           <form @submit.prevent="pressed">
          <v-card class="pa-5" height="500px" width="400px">
            <div class="text-center">
              <h2 class="font-weight-light mt-10">Giriş</h2>
              <p class="mb-10">______</p>
             <v-text-field type="email" v-model="eposta" :rules="epostaRules" background-color="white" outlined dense label="E-Posta" required />
              <v-text-field  v-model="sifre" type="password" :rules="sifreRules" background-color="white" outlined dense label="Şifre" required/> 
             <nuxt-link to="/signin" type="submit" style="fontSize:14px; background-color:black; color:white; round-0; width:350px">GİRİŞ</nuxt-link>
              <div class="d-flex flex-column mt-7">
                <nuxt-link to="/newuser" tag="button" style="text-transform:none; text-width-light" text small>Yeni Üyelik</nuxt-link> 
                 <nuxt-link to="/" tag="button" style="text-transform:none; text-width-light" text small>Ana Sayfa</nuxt-link> 
                  <nuxt-link to="/" tag="button" style="text-transform:none; text-width-light" text small>Şifreyi Unuttum</nuxt-link> 
  
              </div>
             </div>
          </v-card> 
        </form>
        </v-col>   
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import firebase from "firebase/app"
import "firebase/auth"

  export default {
    // methods:{
    //     async pressed(){
    //        const user= firebase.auth().createUserWithEmailAndPassword(this.eposta,this.sifre)
    //        console.log(user)
    //      }
    // },
    data: () => ({
      valid: true,      
     eposta: '',
      epostaRules:[
        v => !!v || 'E-posta giriniz.',
        v => /.+@.+\..+/.test(v) || 'E-posta geçersiz.',
      ],
       sifre: '',
      sifreRules: [
        v => !!v || 'Şifre giriniz.',
        v => (v && v.length <= 8) || 'Şifre 8 karakterden fazla olmalıdır.',
      ]     
    }),
      }
</script>