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


const BOOKS_PER_PAGE = 8
const localBookstore = ref(bookstore)
const displayBooks   = ref(bookstore)

watch(
  () => route,
  () => {
    refreshBooksList()
  },
  { deep: true }
)

const refreshBooksList = ()=>{
    const {page} = route.query 
    const debut  = (page-1)*BOOKS_PER_PAGE
    const fin    = page*BOOKS_PER_PAGE

    displayBooks.value = localBookstore.value.slice(debut,fin)


}


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

