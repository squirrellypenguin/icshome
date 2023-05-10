<template>
  <div class="container">
  <b-container >
    <div>
      <div>
        <h4>From humble beginnings</h4>
 
        <b-card-group deck>
       
          <b-card class="sign" style="max-width: 20rem;" img-src="https://res.cloudinary.com/duvzhauq9/image/upload/v1682514025/ICS_logo.png" img-top>
            <b-card-text>
               This is a member-owned and operated business focused on the arts and not profits which was founded in 1991 by a group of talented Champlain Island crafters offering quirky and beautiful products in Vermont.  The shop moved some before planting its flag on South Hero.
            </b-card-text>
          </b-card>
 
   
          <b-card class="sign"
            img-src="https://res.cloudinary.com/duvzhauq9/image/upload/v1682418874/craftshop/285932220_5349441058441565_3060271347053375612_n_byuhef.jpg"
            img-alt="Card image"
            img-bottom
          >
            <b-card-text>
             
              <b-overlay :show="show" class="d-inline-block" rounded="circle">
          <b-img thumbnail rounded="circle" fluid src="https://picsum.photos/200/200/?image=54" alt="Image 1"></b-img>
        </b-overlay>

              
            </b-card-text>
          </b-card>
        </b-card-group>
  
      </div>
      <div class="mt-4">
        
        <b-card 
        overlay
          img-src="https://res.cloudinary.com/duvzhauq9/image/upload/t_media_lib_thumb/v1682419099/craftshop/033019_4_of_14_dcdxnz.jpg"
          img-alt="Card image sign"
          img-left
          class="sign "
        >
          <b-card-text>
            The shop has grown into a must-see destination for Islanders and visitors alike. 
            Over twenty members now exhibit a wide-ranging array of unique crafts.
          </b-card-text>
        </b-card>
   
 
      </div>
    </div>
    </b-container>
       <b-overlay :show="show" rounded="circle">
      <b-card
      class="d-inline-block"
    overlay rounded="circle" thumbnail
    img-src="https://res.cloudinary.com/duvzhauq9/image/upload/c_limit,h_100,w_150/v1683658398/thread_gifi7f.jpg"
    img-alt="Bannershop"
    text-variant="white"
    title=""
    sub-title=""
  >
    <b-card-text>
            You will find a wonderous assortment of wares such as 
           fiber goods; 
           pottery; 
           fused glass; 
           jewelry;
           turned wood; 
           paintings; 
           candles; 
           lawn art.
    </b-card-text>
  </b-card>
        </b-overlay>
  </div>
</template>
