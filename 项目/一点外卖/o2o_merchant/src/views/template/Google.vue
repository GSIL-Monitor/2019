<template>
    <div id="vue">
        <div>
            <input type="text" id="searchText" v-mode="searchText">
            <button @click="searchTextFn()">查询</button>
        </div>
        <div id="map"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
