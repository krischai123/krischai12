<template>
  <v-content>
    <section>
      <v-parallax
        src="https://wallpaper.campus-star.com/app/uploads/2016/01/cat-1154572.jpg"
        height="600"
      >
        <v-layout column align-center justify-center class="White--text">
          <img
            src="https://static.wixstatic.com/media/d75b14_e3bffcd773f6463eac098169e59e2212~mv2.png/v1/fill/w_328,h_318,al_c,q_80,usm_0.66_1.00_0.01/Logo%20Catanddog.webp"
            alt="Vuetify.js"
            height="300"
          />
          <h1 class="White--text mb-2 display-1 text-center">Hotel for cats</h1>
          <!-- <div class="subheading mb-4 text-center">Welcome</div> -->
          <v-btn
            class="mt-12"
            color="blue lighten-2"
            dark
            large
            href="/product"
          >จองห้องพักสำหรับน้องแมว</v-btn>
          <v-btn
            class="mt-12"
            color="blue lighten-2"
            dark
            large
            href="/productList"
          >รายการจองห่องพักน้องแมว</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-12" align-center>
        <v-flex xs12 sm4 class="my-4">
          <div class="text-center">
            <h2 class="headline">Cat Hotel</h2>
            <!-- <span class="subheading">Cras facilisis mi vitae nunc</span> -->
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-palette</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center" to="/home">ชมห้องพักของน้องแมว</div>
                  </v-card-title>
                  <v-card-text>
                    สวัสดีครับ ลูกค้าสามารถเลือกชม แบบห้องให้น้องๆได้เลยนะครับ ไม่ว่าจะเป็นแบบพัก 1 คืน 2 คืน 3 คืน 4 คืน ทางเราก็มีบริการครับ
                    <nuxt-link to>คลิก</nuxt-link>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">สิ่งอำนวยความสะดวก</div>
                  </v-card-title>
                  <v-card-text>
                    ทางร้านเรายังมี สิ่งอำนวยความสะดวก ชามใส่อาหาร กระบะทราย(ลูกค้าต้องนำทรายมาเอง) ที่ลับเล็บ น้ำพุแมว(PETKIT) ใช้น้ำกรองเช่นเดียวกับที่คนดื่ม ห้องปรับอากาศ อัพเดทรูปน้องเหมียวส่งทางไลน์ทุกวัน ใช้ดนตรีในการบำบัดความเครียดให้กับน้องแมว น้องแมวมีเวลาในการฟังเพลงเพื่อผ่อนคลาย วันละ 1-2 ชม.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card flat class="transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-center">บริการเสริม</div>
                  </v-card-title>
                  <v-card-text class="text-center">
                    COMING SOON
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax
        src="https://wallpaper.campus-star.com/app/uploads/2016/01/cat-1154572.jpg"
        height="380"
      >
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">บริการจากจริงใจ และใจจริง</div>
          <em>แมวของท่านจะปลอดภัย เพราะเราดูแลเอาใจใส่เป็นอย่างดี</em>
          <v-btn
            class="mt-12"
            color="blue lighten-2"
            dark
            large
            href="/"
          >หน้าแรก</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-12">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Cat And Dog Hotel Info</div>
              </v-card-title>
              <v-card-text>
                โรงแรมที่เกิดจากความรักและความเป็นห่วงน้องแมว 
                อยากให้คนที่ต้องเดินทาง หรือมีธุระได้มีที่ฝากน้องแมวแบบอุ่นใจได้ 
                โรงแรมเราจึงบริการด้วยความรักและทำทุกอย่างให้น้องแมวมีความสุข 
                ตลอดระยะเวลาที่อาศัยอยู่ที่โรงแรม 
                ภายใต้มาตราฐานที่ได้รับการรับรองจากสถานบันภายนอกทั้งในเรื่องความสะอาด 
                พนักงาน และอุปกรณ์ที่ใช้ภายในโรงแรม เราดำเนินธุระกิจโดยคำนึงถึงผู้มีส่วนได้เสียอย่าเท่าเทียม 
                ไม่ว่าจะเป็นสวัสดิการของพนักงาน ผู้ถือหุ้น และสิ่งที่ลืมไม่ได้เลยคือ สังคม 
                เราได้มีการแบ่งปันคืนสู่สังคมผ่านโครงการรักษ์แมว ปันน้ำใจให้แมวจร เพราะเราเชื่อว่าสังคมจะน่าอยู่ถ้าทุกคนรู้จักการแบ่งปัน
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">ติดต่อเรา</div>
              </v-card-title>
              <v-card-text>ลูกค้าสามารถติดต่อเราได้ทางช่องทางด้านล่างนี้ได้เลย</v-card-text>
              <v-list class="transparent">
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>053-555123</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>เชียงใหม่</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>cat_dog@gmail.com</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>