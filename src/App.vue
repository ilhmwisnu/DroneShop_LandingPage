
<template>
  <!-- Header -->
  <header class="bg-slate-100 h-fit w-full lg:px-32 pt-11 pb-32">
    <nav class="flex flex-row justify-between content-center">
      <div class="flex items-center">
        <img class="mr-4" src="src\assets\Vector.png" alt="Logo" />
        <h1 class="font-medium">DroneshopID</h1>
      </div>
      <div class="hidden lg:flex items-center gap-x-8 xl:gap-x-14">
        <a class="font-medium" href="#">Home</a>
        <a class="font-medium" href="#">Gallery</a>
        <a class="font-medium" href="#">Products</a>
        <a class="font-medium" href="#">Review</a>
        <a class="font-medium" href="#">Support</a>
      </div>
      <div>
        <button class="px-4 py-2 font-medium">Sign In</button>
        <PrimaryBtn class="ml-2" text="Register" />
      </div>
    </nav>
    <div class="grid grid-cols-1 mt-36 md:grid-cols-2 grid-flow-row-dense">
      <div class="">
        <div
          class="
            bg-red-200
            flex flex-row
            items-center
            px-4
            py-2
            rounded-full
            w-fit
          "
        >
          <img class="mr-2" src="src\assets\tag 1.png" alt="" />
          <p class="text-red-500">GET 25% DISCOUNT</p>
        </div>
        <h2 class="text-7xl font-bold my-8">Representing Drone Light</h2>
        <p class="text-blue-900">
          Look up the sky and beautiful world with simple navigation. Just
          record and get a lot memories to share, lightly and fast like a
          lightning.
        </p>
        <PrimaryBtn class="mt-8" text="Get Now" />
      </div>
      <div class="">
        <img class="" src="src\assets\hero-image 5.png" alt="" />
      </div>
    </div>
  </header>
  <!-- Content 1 & 2 -->
  <section class="grid grid-cols-1 md:grid-cols-2">
    <content
      src="src\assets\ultra_light.png"
      title="Ultra Light"
      content="Drone move faster with weighing component under 200 g"
    />
    <content
      src="src\assets\best_resolution.png"
      title="Best Resolution"
      content="Take a beautiful view with best camera
up to 4K Camera Resolution"
    />
  </section>
  <!-- Benefit -->
  <section class="px-32 pt-24 pb-80 mb-64 bg-slate-100 text-center">
    <div>
      <h2 class="font-bold text-5xl">Why Drone Light?</h2>
      <p class="text-2xl mx-auto mt-8 w-3/5 text-blue-900">
        We provide a best self drone easy to use and operate. With auto pilot,
        the device will take a beautiful view for the best of flying operation.
      </p>
      <div class="flex flex-row w-3/5 mx-auto justify-between mt-16">
        <div class="text-center w-36">
          <h3 class="block text-4xl font-bold mb-4">4K</h3>
          <p class="text-xl text-blue-900">Camera Resolution</p>
        </div>
        <div class="text-center w-36">
          <h3 class="block text-4xl font-bold mb-4">2 TB</h3>
          <p class="text-xl text-blue-900">Storage Capacity</p>
        </div>
        <div class="text-center w-36">
          <h3 class="block text-4xl font-bold mb-4">60 m/s</h3>
          <p class="text-xl text-blue-900">Super Max Speed</p>
        </div>
        <div class="text-center w-36">
          <h3 class="block text-4xl font-bold mb-4">30 mins</h3>
          <p class="text-xl text-blue-900">Long Flight Time</p>
        </div>
      </div>
      <div class="relative bg-red-600">
        <img
          class="absolute top-16 left-1/2 transform -translate-x-1/2"
          src="src\assets\features_cut_bg.png"
          alt=""
        />
      </div>
    </div>
  </section>
  <!-- Video -->
  <section class="mx-32 pt-24 pb-20">
    <h2 class="w-1/2 font-bold text-5xl mx-auto text-center mb-16">
      4K video shot on our Drone Light
    </h2>
    <img src="src\assets\Mask Group.png" alt="" />
  </section>
  <!-- New Product -->
  <section class="px-32 pt-11 pb-16 text-center">
    <h2 class="font-bold text-5xl">New Products</h2>
    <p class="text-2xl mx-auto mt-8 w-3/5 text-blue-900">
      New innovation, best quality than before. make every moment flying
      operation become unforgettable.
    </p>
    <div class="flex flex-row mt-14 justify-between">
      <div v-for="drone in drones" :key="drone.name"  class="border border-gray-300 rounded-2xl p-4 w-80">
        <img
          class="rounded-2xl mb-6"
          :src="drone.src"
          alt=""
        />
        <h4 class="mb-3 text-2xl font-medium">{{drone.name}}</h4>
        <p class="mb-3 text-3xl font-bold">{{drone.price}}</p>
        <p class="px-4 mb-4">
          {{drone.desc}}
        </p>
        <PrimaryBtn class="mb-3" text="Get Now" />
      </div>
    </div>
  </section>
  <!-- Testimonial -->
  <section></section>
  <!-- Footer -->
  <footer></footer>
</template>

<script>
import PrimaryBtn from "./components/PrimaryBtn.vue";
import Content from "./components/Content.vue";
export default {
  components: { PrimaryBtn, Content },
  data() {
    return {
      drones: [
        {
          name: "Mini Drone",
          price: "Rp 999.999",
          src : "src\\assets\\mini_drone 1.png",
          desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
        },
        {
          name: "Drone Light",
          price: "Rp 999.999",
          src : "src\\assets\\drone_light 1.png",
          desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
        },
        {
          name: "Phantom Drone",
          price: "Rp 999.999",
          src : "src\\assets\\phantom_drone 1.png",
          desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
        },
      ],
    };
  },
};
</script>
