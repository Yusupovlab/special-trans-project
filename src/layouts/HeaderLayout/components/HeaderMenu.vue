<template>
    <div class="header-menu lg:ml-14 xl:ml-[90px] hidden lg:block">
        <ul class="menu flex text-dark ">
            <li class="2xl:mr-14 lg:mr-6 hover:text-brand lg:text-sm 2xl:text-lg cursor-pointer duration-300" v-for= "item in menuItems" :key="item">{{ item.name }}</li>
            
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