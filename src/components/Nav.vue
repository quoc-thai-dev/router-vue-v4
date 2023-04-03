<template>
    <nav class="nav">
        <router-link to="/">Overviews</router-link>
        <router-link :to="{name:'transaction-route'}">Transactions</router-link>
        <router-link :to="{name:'transaction-details-route'}">Transactions Detail</router-link>

        <router-link to="/students">Students</router-link>
        <router-link to="/">Reports</router-link>
        <router-link to="/">Settings</router-link>
    </nav>
</template>


<script>
    export default{
        name:'ComponentNav'
    }
</script>

<style lang="css">
.nav{
    font-size: 13px;
     display: flex;
     position: absolute;
     gap: 10px;
     top: 10px;
     left: 50%;
     transform: translateX(-50%);
}
.nav a{
    flex: 1;
    color: white;
    background-color: rgba(0, 2, 2, .7);
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    min-width: 120px;
}
.nav a.active-nav, .nav a:hover{
    background-color: purple;
}
</style>