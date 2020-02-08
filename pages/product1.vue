<template>
<v-form ref="form" v-model="valid1" lazy-validation class="mt-10">
    <!--v-text-field v-model="productid" :counter="10" :rules="nameRules" outlined label="ชื่อสัตว์เลี้ยง" required></v-text-field!-->
    <v-text-field v-model="productid1" label="ชื่อเจ้าของ" outlined required></v-text-field>
    <v-text-field v-model="productname1" label="ชื่อสัตว์เลี้ยง" outlined required></v-text-field>
    <v-text-field v-model="phone1" label="เบอร์โทรติดต่อ" type="number" :counter="10" outlined required></v-text-field>

    <v-select v-model="productType1" :items="items1" :rules="[v => !!v || 'Item is required']" label="พักกี่คืน" outlined required></v-select>

    <!--v-checkbox v-model="recommend" :rules="[v => !!v || 'You must agree to continue!']" label="สินค้าแนะนำ" required></v-checkbox!-->

    <v-btn :disabled="!valid1" color="success" class="mr-4"  to="/ProductList1" @click="addProduct1()">
        จอง
    </v-btn>

    <v-btn color="orange lighten-2" class="mr-4" to="/home1" @click="home">
       Home
    </v-btn>

    <v-btn color="blue lighten-2" class="mr-4"  to="/ProductList1" @click="productList1">
        กดดูรายการจอง
    </v-btn>
    

</v-form>
</template>

<script>
import {db} from '@/plugins/firebaseDB.js'

export default {
    data: () => ({
        productid1: '',
        productname1: '',
        phone1: '',
        productType1: '',
        recommend1: '',

        valid1: true,
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
        select1: null,
        items1: [
           '1 คืน',
           '2 คืน',
           '3 คืน',
           '4 คืน',
        ],
        checkbox: false,
    }),

    methods: {
        addProduct1() {
            // ทดสอบการรับข้อมูล
            console.log(this.productid1)
            console.log(this.productname1)
            console.log(this.phone1)
            console.log(this.productType1)
            console.log(this.recommend1)
           
            // ส่งข้อมูล --> Firbase
            // db.collection("product").add({
            db.collection("product1").doc(this.productid1).set({
                    productid1: this.productid1,
                    productname1: this.productname1,
                    phone1: this.phone1,
                    productType1: this.productType1,
                    recommend1: this.recommend1
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
            db.collection("product1").doc(this.productid).set({
                    productid1: this.productid1,
                    productname1: this.productname1,
                    phone1: this.phone1,
                    productType: this.productType1,
                    recommend1: this.recommend1
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
