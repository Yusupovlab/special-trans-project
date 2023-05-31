<template>
    <div class="header-menu ml-[90px]">
        <ul class="menu flex text-dark ">
            <li class="mr-14 cursor-pointer hover:text-brand duration-300" v-for= "item in menuItems" :key="item">{{ item.name }}</li>
            
        </ul>
    </div>
</template>
<script>
import menuList from "../menuList.js"
export default{
    data(){
        return{
            menuItems:menuList
        }
    }
}
</script>