<template>
    <h1>
        Transactions
    </h1>
    <div v-for="trans in transactions" :key="trans.id">
        <!-- <router-link :to="`/transactions/${trans.id}`">{{ trans.name }}</router-link> -->
        <router-link :to="{
            name:'transaction-details-route',
            params:{id: trans.id}
        }">{{ trans.name }}</router-link>

        <div class="price"> Price : {{ trans.price }}</div>
    </div>
</template>

<script>
 export default {
    name:'TransactionPage',
    data(){
        return {
            transactions:[
                {
                    id:1,
                    name:"Thái",
                    price:12345,
                },
                {
                    id:2,
                    name:"Lành",
                    price:9999,
                },
                {
                    id:3,
                    name:"Lành ML",
                    price:1235
                }
            ]
        }
    }
 }
</script>