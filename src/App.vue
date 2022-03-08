
<template>
  <!-- Header -->
  <header
    class="
      p-4
      pb-12
      bg-slate-100
      h-fit
      w-full
      sm:px-14
      lg:px-32 lg:pt-10 lg:pb-24
    "
  >
    <nav class="flex flex-row justify-between content-center lg:mb-24">
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
    <div class="flex flex-col-reverse mt-8 lg:flex-row">
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
          <p class="text-red-500 text-sm">GET 25% DISCOUNT</p>
        </div>
        <h2 class="text-7xl font-bold mt-4 mb-8">Representing Drone Light</h2>
        <p class="text-gray-600">
          Look up the sky and beautiful world with simple navigation. Just
          record and get a lot memories to share, lightly and fast like a
          lightning.
        </p>
        <PrimaryBtn class="mt-8" text="Get Now" />
      </div>
      <div class="my-10">
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
  <section
    class="p-4 pt-16 lg:px-32 lg:pt-24 pb-64 mb-64 bg-slate-100 text-center"
  >
    <div>
      <h2 class="font-bold text-5xl">Why Drone Light?</h2>
      <p class="text-2xl mx-auto mt-8 w-5/6 md:w-3/5 text-blue-900">
        We provide a best self drone easy to use and operate. With auto pilot,
        the device will take a beautiful view for the best of flying operation.
      </p>
      <div class="grid grid-cols-2 mt-10 p-10 gap-6 md:grid-cols-4">
        <div class="text-center w-auto">
          <h3 class="block text-4xl font-bold mb-4">4K</h3>
          <p class="text-xl text-blue-900">Camera Resolution</p>
        </div>
        <div class="text-center w-auto">
          <h3 class="block text-4xl font-bold mb-4">2 TB</h3>
          <p class="text-xl text-blue-900">Storage Capacity</p>
        </div>
        <div class="text-center w-auto">
          <h3 class="block text-4xl font-bold mb-4">60 m/s</h3>
          <p class="text-xl text-blue-900">Super Max Speed</p>
        </div>
        <div class="text-center w-auto">
          <h3 class="block text-4xl font-bold mb-4">30 mins</h3>
          <p class="text-xl text-blue-900">Long Flight Time</p>
        </div>
      </div>
      <div class="relative">
        <img
          class="
            absolute
            w-3/4
            top-10
            left-1/2
            transform
            -translate-x-1/2
            sm:max-w-fit
          "
          src="src\assets\features_cut_bg.png"
          alt=""
        />
      </div>
    </div>
  </section>
  <!-- Video -->
  <section class="px-4 pt-16 pb-20 sm:pt-32 sm:px-32">
    <h2
      class="
        w-11/12
        font-bold
        text-5xl
        mx-auto
        text-center
        mb-16
        md:w-3/4
        lg:w-6/12
      "
    >
      4K video shot on our Drone Light
    </h2>
    <img class="mx-auto" src="src\assets\Mask Group.png" alt="" />
  </section>
  <!-- New Product -->
  <section class="px-4 pt-11 pb-16 text-center sm:px-8 md:px-16 lg:px-32">
    <h2 class="font-bold mx-auto text-5xl sm:w-3/5">New Products</h2>
    <p class="text-2xl mx-auto mt-8 w-4/5 text-gray-700">
      New innovation, best quality than before. make every moment flying
      operation become unforgettable.
    </p>
    <div class="flex flex-col md:flex-row gap-6 md:gap-4 mt-14 justify-between">
      <div
        v-for="drone in drones"
        :key="drone.name"
        class="border border-gray-300 rounded-2xl p-4 w-80 mx-auto"
      >
        <img class="rounded-2xl mb-6" :src="drone.src" alt="" />
        <h4 class="mb-3 text-2xl font-medium">{{ drone.name }}</h4>
        <p class="mb-3 text-3xl font-bold">{{ drone.price }}</p>
        <p class="px-4 mb-4">
          {{ drone.desc }}
        </p>
        <PrimaryBtn class="mb-3" text="Get Now" />
      </div>
    </div>
  </section>
  <!-- Testimonial -->
  <section
    class="p-4 pb-16 text-center bg-slate-100 sm:px-10 md:px-16 lg:px-32"
  >
    <h2 class="pt-14 font-bold text-6xl mb-16">What Our “Pilots” Are Saying</h2>
    <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in testi"
        :key="item.name"
        class="bg-white rounded-xl p-6 text-left"
      >
        <p class="text-black text-base mb-7">{{ item.msg }}</p>
        <div class="flex flex-row items-center">
          <img :src="item.img" alt="" class="rounded-full mr-6" />
          <div class="flex flex-col">
            <p class="font-bold text-xl">{{ item.name }}</p>
            <p class="text-lgt">{{ item.job }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer
    class="
      grid grid-cols-2
      bg-slate-800
      p-4
      py-10
      items-center
      md:grid-cols-5 sm:px-10
      md:px-16
      lg:px-32
    "
  >
    <div class="text-white mx-auto  col-span-2">
      <div class="flex flex-col">
        <div class="flex flex-row place-items-center justify-center mb-2">
          <img class="scale-50" src="src\assets\Logo.png" alt="" />
          <h1 class="font-medium">DroneshopID</h1>
        </div>
        <p class="font-light text-white text-base mb-3 w-fit">
          Look up the sky and beautiful world easily.
        </p>
        <div class="flex flex-row justify-evenly">
          <img class="scale-75" src="src\assets\social-facebook.png" alt="" />
          <img class="scale-75" src="src\assets\social-instagram.png" alt="" />
          <img class="scale-75" src="src\assets\social-twitter.png" alt="" />
          <img class="scale-75" src="src\assets\social-youtube.png" alt="" />
        </div>
      </div>
    </div>
    <div class="text-white mx-auto">
      <ul>
        <li class="mb-3 font-bold">Explore</li>
        <li class="mb-3">Our Services</li>
        <li class="mb-3">Specification</li>
        <li class="mb-3">Refund</li>
        <li class="mb-3">Pricelist</li>
      </ul>
    </div>
    <div class="text-white mx-auto">
      <ul>
        <li class="mb-3 font-bold">Account</li>
        <li class="mb-3">My Account</li>
        <li class="mb-3">How-to Tutorials</li>
        <li class="mb-3">Top Benefit</li>
        <li class="mb-3">Moment</li>
      </ul>
    </div>
    <div class="text-white mx-auto col-span-1">
      <ul>
        <li class="mb-3 font-bold">Office</li>
        <li class="mb-3">+022 123 4567</li>
        <li class="mb-3">Bandung, Indonesia</li>
        <li class="mb-3">No. 2 (Autodrone)</li>
        <li class="mb-3">support@autodrone.id</li>
      </ul>
    </div>
  </footer>
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
          src: "src\\assets\\mini_drone 1.png",
          desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
        },
        {
          name: "Drone Light",
          price: "Rp 999.999",
          src: "src\\assets\\drone_light 1.png",
          desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
        },
        {
          name: "Phantom Drone",
          price: "Rp 999.999",
          src: "src\\assets\\phantom_drone 1.png",
          desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
        },
      ],
      testi: [
        {
          name: "Lukas Walker",
          img: "src\\assets\\Ellipse 56.png",
          msg: "“With high resolution camera,picture become clear and beautiful.It’s so easy to operate drone.”",
          job: "Content Creator",
        },
        {
          name: "Jessica Obrien",
          img: "src\\assets\\Ellipse 56-1.png",
          msg: "“Taking high view video become easy and faster. Battery perfomance really helping for making film.”",
          job: "Film Director",
        },
        {
          name: "Lisa Miller",
          img: "src\\assets\\Ellipse 56-2.png",
          msg: "“Making video content for my trip vlog so powerful and wonderful. Love the video quality.”",
          job: "Content Creator",
        },
      ],
    };
  },
};
</script>
