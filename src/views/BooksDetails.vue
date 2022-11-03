<script setup>

import {useRoute} from 'vue-router'

const route = useRoute()

console.log(route.params)




</script>

<template>
  <section class="row tm-item-preview">
      <div class="col-md-6 col-sm-12 mb-md-0 mb-5">
          <img src="../assets/img/image-05-preview.jpg" alt="Image" class="img-fluid tm-img-center-sm">
      </div>
      <div class="col-md-6 col-sm-12">
          <h2 class="tm-blue-text tm-margin-b-p">Mauris cursus turpis {{route.params.bookId}}</h2>
          <p class="tm-margin-b-p">author</p>

      </div>
  </section>
</template>
