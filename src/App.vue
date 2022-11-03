<script setup>
import {useRouter,RouterView} from 'vue-router'

import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'


const router = useRouter()
const handlePagination = page =>{
    router.push({query:{page:page}})
}
</script>

<template>
  <div class="container">
            <TheHeader />
            
            <div class="tm-main-content">
                <section class="tm-margin-b-l">
                    <RouterView />
                    
                    <nav class="tm-gallery-nav">
                        <ul class="nav justify-content-center">

                            <li class="nav-item" @click="handlePagination(1)"><span class="nav-link active" >1</span></li>
                            <li class="nav-item" @click="handlePagination(2)" ><span class="nav-link">2</span></li>
                            <li class="nav-item" @click="handlePagination(3)"><span class="nav-link" >3</span></li>

                        </ul>
                    </nav>
                </section>
            </div>

            <TheFooter />   
        </div>
</template>

<style >


</style>

