<template>
<v-app>
  <v-content>
  
      <v-row align="center" justify="center">
        <v-col cols="12" align="center" >
          <v-card class="elevation-12 d-flex align-center justify-center" color="#CFD8DC" height="100px" >
            <v-card class="d-flex align-center justify-center rounded-0" height="70px" width="400px">
              <v-row >
                <v-col cols="12 mt-3" sm="7">    
                
                    <v-text-field class="rounded-0 mt-4" v-model="eposta" :rules="epostaRules"  label="E-Posta" background-color="white" filled rounded dense/>            
                    
                </v-col>
                <v-col cols="12" sm="5">
                  <v-btn class="white--text rounded-0 mt-9"  color="black">ABONE OL!</v-btn>
                </v-col>
              </v-row> 
            </v-card>           
          </v-card>
        </v-col>
      </v-row>

  </v-content>
</v-app>
   
</template>
<script>
  export default {
    data: () => ({
      valid: true,      
     eposta: '',
      epostaRules:[
        v => !!v || 'E-posta giriniz.',
        v => /.+@.+\..+/.test(v) || 'E-posta geçersiz.',
      ]
    
    }) 

  }
</script>
<style>
.backgDiv{  
  background-color:black;
};
.colorDiv{
  height: 70px;
  width: 500px;
  background-color: white;
};

</style>