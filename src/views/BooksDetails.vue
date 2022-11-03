<script setup>
import { bookstore } from '../assets/js/bookstore';
import {ref} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

console.log(route.params)

const {bookId} = route.params

const currentBook = ref({})
const bookFound   = ref(true)

currentBook.value = bookstore.find((book)=>book.id===bookId)

if(!currentBook.value){
  bookFound.value= false
}





</script>

<template>
  <section class="row tm-item-preview" v-if="bookFound">

      <div class="col-md-6 col-sm-12 mb-md-0 mb-5" >

          <img :src="'../src/assets/img/'+currentBook.cover" alt="Image" class="img-fluid tm-img-center-sm">
      </div>
      <div class="col-md-6 col-sm-12">
  
          <h2 class="tm-blue-text tm-margin-b-p">{{currentBook.title}}</h2>
          <p class="tm-margin-b-p">{{currentBook.author}}</p>
      </div>
  </section>
  <span v-else>Livre introuvable</span>
</template>
