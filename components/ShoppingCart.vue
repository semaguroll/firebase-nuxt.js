<template>
    <v-app>
        <v-content>
            <v-container style="background-color: darkgray" >
                <v-row align="center" justify="center">
                   <v-card class="pa-5" style="background-color: darkgray" height="550px" width="300px">
                      <div class="d-flex flex-row mb-1">
                          <h3 class="font-weight-light white--text">Alışveriş sepetiniz</h3>
                          <label style="width:90px"></label>
                          <v-icon color="white" >mdi-close</v-icon>
                      </div>
                      <p class="white--text">___________________________________</p>
                    
                      <div style="height:300px"></div>
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