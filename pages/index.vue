<template>
  <div class="container">
    <div>
   <!--img class="bg"
        id="comp-jy5t44mmimgimage"
        style="object-position:100% 100%;width:1700px;height:500px;object-fit:cover"
        alt="Logo Catanddog.png"
        data-type="image"
        itemprop="image"
        src="https://f.ptcdn.info/132/057/000/p7bwr19a7U3lVKQ8Imm-o.jpg"
        data-src
      /-->
      
      <!--br><img
        id="comp-jy5t44mmimgimage"
        style="object-position:50% 50%;width:262px;height:254px;object-fit:cover"
        alt="Logo Catanddog.png"
        data-type="image"
        itemprop="image"
        src="https://static.wixstatic.com/media/d75b14_e3bffcd773f6463eac098169e59e2212~mv2.png/v1/fill/w_328,h_318,al_c,q_80,usm_0.66_1.00_0.01/Logo%20Catanddog.webp"
        data-src
      /-->
      <img src="https://static.wixstatic.com/media/d75b14_e3bffcd773f6463eac098169e59e2212~mv2.png/v1/fill/w_328,h_318,al_c,q_80,usm_0.66_1.00_0.01/Logo%20Catanddog.webp" alt="">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">Home</b-navbar-brand>
           <!--b-navbar-brand href="#">แมว</b-navbar-brand>
            <b-navbar-brand href="#">สุนัข</b-navbar-brand>
             <b-navbar-brand href="#"></b-navbar-brand -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <!-- <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form> -->

              <!-- <b-nav-item-dropdown text="Lang" right> -->
                <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown> -->

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                   <b-navbar-brand href="#">ติดต่อ</b-navbar-brand>
                  <!-- <em>User</em> -->
                </template>
                <!-- <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
              </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
      </div>
      <br />
      <div>
        <b-card-text>Cat and Dog ยินดีต้อนรับท่าน สามารถรับชมรายละเอียดห้องพักน้องแมว หรือน้องหมาโดยการกดที่ภาพด้านล่างนี้</b-card-text>

      </div><br>
       <v-btn color="blue lighten-2" class="mr-4"  to="/home" @click="สำหรับน้องแมว">
        สำหรับน้องแมวคลิกเลย
    </v-btn>
    <v-btn color="blue lighten-2" class="mr-4"  to="/home1" @click="สำหรับน้องหมา">
        สำหรับน้องหมาคลิกเลย
    </v-btn>
      <!-- <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">แมว</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">สุนัข</a>
      </div>-->
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.bg{
  width: 100%;
}

</style>
