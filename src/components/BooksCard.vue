<script setup>
const props = defineProps({
    title:{
        type:String
    },
    coverUrl:{
        type:String
    }
})
</script>

<template>
  <figure class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
        <div class="tm-gallery-item-overlay">
            <img :src="'src/assets/img/'+coverUrl" alt="Image" class="img-fluid tm-img-center">
        </div>
        <p class="tm-figcaption">{{title}}</p>
</figure>
</template>

<style scoped>

</style>
