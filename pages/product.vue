<template>
<v-form ref="form" v-model="valid" lazy-validation class="mt-10">
    <!--v-text-field v-model="productid" :counter="10" :rules="nameRules" outlined label="ชื่อสัตว์เลี้ยง" required></v-text-field!-->
    <v-text-field v-model="productid" label="ชื่อเจ้าของ" outlined required></v-text-field>
    <v-text-field v-model="productname" label="ชื่อสัตว์เลี้ยง" outlined required></v-text-field>
    <v-text-field v-model="phone" label="เบอร์โทรติดต่อ" type="number" :counter="10" outlined required></v-text-field>

    <v-select v-model="productType" :items="items" :rules="[v => !!v || 'Item is required']" label="พักกี่คืน" outlined required></v-select>

    <!--v-checkbox v-model="recommend" :rules="[v => !!v || 'You must agree to continue!']" label="สินค้าแนะนำ" required></v-checkbox!-->

    <v-btn :disabled="!valid" color="success" class="mr-4" to="/ProductList" @click="addProduct()">
        จอง
    </v-btn>

    <v-btn color="orange lighten-2" class="mr-4" to="/home" @click="home">
       Home
    </v-btn>

    <v-btn color="blue lighten-2" class="mr-4"  to="/ProductList" @click="productList">
        กดดูรายการจอง
    </v-btn>
    

</v-form>
</template>

<script>
import {db} from '@/plugins/firebaseDB.js'

export default {
    data: () => ({
        productid: '',
        productname: '',
        phone: '',
        productType: '',
        recommend: '',

        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
           '1 คืน',
           '2 คืน',
           '3 คืน',
           '4 คืน',
        ],
        checkbox: false,
    }),

    methods: {
        addProduct() {
            // ทดสอบการรับข้อมูล
            console.log(this.productid)
            console.log(this.productname)
            console.log(this.phone)
            console.log(this.productType)
            console.log(this.recommend)
           
            // ส่งข้อมูล --> Firbase
            // db.collection("product").add({
            db.collection("product").doc(this.productid).set({
                    productid: this.productid,
                    productname: this.productname,
                    phone: this.phone,
                    productType: this.productType,
                    recommend: this.recommend
                })
                .then(function (docRef) {
                    // console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        },

        update() {
            // ทดสอบการรับข้อมูล
            console.log(this.productid)
            console.log(this.productname)
            console.log(this.phone)
            console.log(this.productType)
            console.log(this.recommend)
           
            // ส่งข้อมูล --> Firbase
            // db.collection("product").add({
            db.collection("product").doc(this.productid).set({
                    productid: this.productid,
                    productname: this.productname,
                    phone: this.phone,
                    productType: this.productType,
                    recommend: this.recommend
                })
                .then(function (docRef) {
                    // console.log("Document written with ID: ", docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
        },
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}
</script>

<style>

</style>
