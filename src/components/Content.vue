<template>
  <div class="relative w-full text-center ">
      <div  class="absolute top-14 right-7 left-7 sm:top-24 sm:right-12 sm:left-12 md:top-12 xl:top-32 xl:right-32 xl:left-32 ">
      <h5 class="text-5xl font-bold mb-8 text-white" >{{title}}</h5>
      <p class="text-white text-2xl">{{content}}</p>
      </div>
      <img class="w-full" :src="src">
    </div>
</template>

<script>
export default {
    props : ["title", "content", "src"]
}
</script>

<style>

</style>