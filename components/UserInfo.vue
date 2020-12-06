<template>
    <v-app>
        <v-content>
            <v-container class="fill-height about" fluid>
                <div class="d-flex flex-row "> 
                <v-card class="pl-5 pr-5" width="600px" height="840px">                   
                  <div class="d-flex flex-row">
                     <v-btn  class="brown--text topDiv" text>Sepetim ᐳ</v-btn>
                     <v-btn  class=" topDiv" text>Müşteri Bilgileri ᐳ</v-btn>
                     <v-btn class=" topDiv"  text>Gönderim Şekli ᐳ</v-btn>
                     <v-btn  class="topDiv" text>Ödeme Şekli ᐳ</v-btn>
                     <v-btn  class="topDiv" text>Siparişi İncele ᐳ</v-btn>
                  </div>
                  <div class="d-flex flex-row mt-2">
                      <h4 class="font-weight-medium">İletişim Bilgileri</h4>
                      <label style="width:290px"/>
                      <h6 class="font-weight-small">Hesabın var mı? </h6>
                       <v-btn class="brown--text varDiv" text-small text>Giriş</v-btn>
                  </div>                  
                  <div class="d-flex flex-column mt-3">                    
                      <v-text-field tile outlined dense label="E-Posta"></v-text-field>
                      <v-checkbox  color="brown" label="Beni haberlerden ve özel tekliflerden haberdar et"></v-checkbox>
                      <p>Gönderim adresi</p>
                  </div>
                  <div class="d-flex flex-row mt-1">
                      <v-text-field class="mr-1" tile outlined dense label="İsim"></v-text-field>
                      <v-text-field tile outlined dense label="Soyad"></v-text-field>
                  </div>
                  <div class="d-flex flex-column ">                    
                      <v-text-field tile outlined dense label="Firma(opsiyonel)"></v-text-field>
                      <v-text-field tile outlined dense label="Adres"></v-text-field>
                      <v-text-field tile outlined dense label="Apt.no,Daire,vb."></v-text-field>                     
                  </div>
                  <div class="d-flex flex-row ">
                      <v-text-field class="mr-1" tile outlined dense label="İlçe"></v-text-field>
                      <v-text-field tile outlined dense label="Şehir"></v-text-field>
                  </div>
                  <div class="d-flex flex-column">
                       <v-combobox outlined dense value="Türkiye" label="Ülke"></v-combobox>
                       <v-text-field tile outlined dense label="Telefon numarası" append-icon="mdi-alert-circle"></v-text-field>
                       <v-checkbox color="brown" label="Bir sonkaki sefer için bilgileri sakla"></v-checkbox>
                  </div>                 
                  <div class="d-flex flex-row " >
                    <v-btn class="brown--text btnDiv" style=" font-weight:bold;" text>ᐸ Sepete geri dön </v-btn>
                    <div style="width:240px"></div>
                    <v-btn class="btnDiv" style="background-color:black;  font-weight:lighter; height:50px; color:white;">Gönderim şeklini seç</v-btn>
                  </div>
                </v-card >
                <v-card class="pa-5" width="400px" height="840px">
                  <div class="d-flex flex-row ">
                      <v-card>
                         <v-img width="50px" height="60px" src="https://cdn.shopify.com/s/files/1/1432/5782/products/BeyKarakoy2268copy_1024x1024.jpg?v=1602688845"></v-img>                      
                      </v-card>
                      <div class="d-flex flex-column ml-5">
                      <h6>Açık Yeşil Sweatshirt</h6>
                      <h6>S</h6>
                      </div>
                      <label style="width:100px"></label>
                      <p>490.00TL</p>
                  </div>               
                  <div>
                      <p class="gray--text">________________________________________________</p>
                      <div class="d-flex flex-row ">
                           <v-text-field class="mr-5" outlined dense label="İndirim"></v-text-field>                        
                           <v-btn style=" background-color:dimgrey" class="topDiv white--text">Uygula</v-btn>
                       </div>
                       <p class="gray--text">________________________________________________</p>
                       <div class="d-flex flex-row ">
                           <h5>Toplam</h5>  
                           <label style="width:240px"></label>                      
                           <h5>490.00TL</h5>
                       </div>
                       <div class="d-flex flex-row ">
                           <h5 class="gray--text">Kargo</h5> 
                           <label style="width:130px"></label>                            
                           <h5>Bir sonraki adımda hesaplanır</h5>
                       </div>
                       <p class="gray--text">________________________________________________</p>
                       <div class="d-flex flex-row ">
                           <h5 class="gray--text">Toplam</h5> 
                           <label style="width:250px"></label>                            
                           <p>490.00TL</p>
                       </div>
                  </div>
                </v-card>
                </div>
            </v-container>
        </v-content>
    </v-app>
</template>


<style lang="css" scoped>
.topDiv{
   font-size: 0.8rem;
   text-transform: none;
   font-weight:normal;
   padding:0 !important;
   
};
</style>

<style lang="css" scoped>
.varDiv{
   font-size: 0.7rem;
   text-transform: none;
   font-weight:bold;
   max-width: 1rem !important;
   max-height: 1rem;
   padding:0 !important;
};
</style>
<style lang="css" scoped>
.btnDiv{
   font-size: 0.8rem;
   text-transform: none;
  
}
</style>



