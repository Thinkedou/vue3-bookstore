<script setup>
import {ref,computed,watch} from 'vue'
import {useRoute,useRouter} from 'vue-router'

import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import BooksCard from './components/BooksCard.vue'
import {bookstore} from './assets/js/bookstore'

console.log(bookstore)

const route  = useRoute()
const router = useRouter()


watch(
  () => route,
  (newValue, oldValue) => {


    refreshBooksList()


  },
  { deep: true }
)

const refreshBooksList = ()=>{
    console.log('on va refresh avec la page: ', route.query.page)
}

const localBookstore = ref(bookstore)

const displayBooks = computed(()=>{

    return localBookstore.value.slice(0,8)
})

const handlePagination = page =>{
    router.push({query:{page:page}})
}


</script>

<template>
  <div class="container">
            <TheHeader />
            
            <div class="tm-main-content">
                <section class="tm-margin-b-l">
                    <header>
                        <h2 class="tm-main-title">Welcome to our bookstore Page: {{route.query.page}}</h2>    
                    </header>
                    
                    <p>Shelf HTML template is provided by Tooplate. Please tell your friends about it. Thank you. Images are from Unsplash website. In tincidunt metus sed justo tincidunt sollicitudin. Curabitur magna tellus, condimentum vitae consectetur id, elementum sit amet erat.</p>
                    
                    <div class="tm-gallery">
                        <div class="row">
                            <BooksCard 
                                v-for="book in displayBooks"
                                :key="book.id"
                                :title="book.title"
                                :coverUrl="book.cover"
                            />
                        </div>   
                    </div>
                    
                    <nav class="tm-gallery-nav">
                        <ul class="nav justify-content-center">
                            <li class="nav-item" @click="handlePagination(1)"><span class="nav-link active" >1</span></li>
                            <li class="nav-item" @click="handlePagination(2)" ><span class="nav-link">2</span></li>
                            <li class="nav-item" @click="handlePagination(3)"><a class="nav-link" href="#">3</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">4</a></li>                    
                        </ul>
                    </nav>
                </section>
            </div>

            <TheFooter />   
        </div>
</template>

<style >


</style>

