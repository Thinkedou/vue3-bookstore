<script setup>
import {ref,watch} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {bookstore} from '../assets/js/bookstore'

import BooksCard from '../components/BooksCard.vue'
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


</script>

<template>
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
</template>
