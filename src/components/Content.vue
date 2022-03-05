<template>
  <div class="relative w-full text-center ">
      <div  class="absolute top-32 right-32 left-32 ">
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