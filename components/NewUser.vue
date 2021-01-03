<template>
  <v-app>
    <v-content>
      <form @submit.prevent="pressed">
      <v-row align="center" justify="center">
        <v-col cols="12" align="center" justify="center">
          <v-card class="pa-5" height="600px" width="400px">
            <div class="text-center">
              <h2 class="font-weight-light mt-10">Yeni Hesap Oluştur!</h2>
              <p class="mb-10">______</p>
              <v-text-field   v-model="isim" :rules="isimRules" background-color="white" outlined dense label="Adınız" required />
              <v-text-field  v-model="soyisim" :rules="soyisimRules" background-color="white" outlined dense label="Soyadınız" required />
              <v-text-field type="email" v-model="eposta" :rules="epostaRules" background-color="white" outlined dense label="E-Posta" required />
              <v-text-field v-model="sifre" type="password" :rules="sifreRules" background-color="white" outlined dense label="Şifre" required/>
              <v-btn type="submit" style="fontSize:14px; background-color:black; color:white; round-0; width:350px; ">OLUŞTUR!</v-btn>
              <div class="d-flex flex-column mt-7">
                   <nuxt-link to="/" tag="button" style="text-transform:none; text-width-light" text small>Ana Sayfaya Geri Dön!</nuxt-link> 
                 
              </div>
             </div>
          </v-card> 
        </v-col>   
      </v-row>
      </form>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
 var firebaseConfig = {
    apiKey: "AIzaSyB1k1g2Mr4eAk3KezxVBFaRBE08SKrzZ6Q",
    authDomain: "beykarakoy.firebaseapp.com",
    databaseURL: "https://beykarakoy-default-rtdb.firebaseio.com",
    projectId: "beykarakoy",
    storageBucket: "beykarakoy.appspot.com",
    messagingSenderId: "445548646971",
    appId: "1:445548646971:web:0ea1f0540d827a093e021e",
    measurementId: "G-819VVNGDMH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default {
   methods:{
        async pressed(){
           const user= firebase.auth().createUserWithEmailAndPassword(this.eposta,this.sifre)           
           console.log(user)
            this.$router.push('/signin')
         }
    },

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
        v => (v && v.length >= 6) || 'Şifre 6 karakterden fazla olmalıdır.',
      ],
      isim: '',
      isimRules: [
        v => !!v || 'Adınızı giriniz.'
      ],
      soyisim: '',
      soyisimRules: [
        v => !!v || 'Soyadınızı giriniz.'
      ]      
    
    }),
   

  }
</script>
<style>
.centerDiv{
  margin-left:450px;
  margin-top: 30px; 
  
};
.hightDiv{
  height: 130px;
}
</style>
