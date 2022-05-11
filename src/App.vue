<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue';
import DestinationCard from './components/DestinationCard.vue';

// const data = {
//   popularDestinations: [
//     {
//       city: 'Toronto',
//       averagePrice: 120,
//       propertyCount: 76,
//       imageUrl: '',
//       imageAlt: 'Toronto skyline',
//     },
//     {
//       city: 'Malibu',
//       averagePrice: 215,
//       propertyCount: 43,
//       imageUrl: '',
//       imageAlt: 'Cliff in Malibu',
//     },
//     {
//       city: 'Chicageo',
//       averagePrice: 130,
//       propertyCount: 115,
//       imageUrl: '',
//       imageAlt: 'Chicago skyline',
//     },
//   ],
// };
</script>

<template>
  <div class="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
    <div
      class="mx-auto max-w-md px-8 py-12 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2"
    >
      <div class="xl:max-w-xl">
        <img class="h-10" src="./assets/logo.svg" alt="Workcation" />
        <img
          class="mt-6 rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
          src="./assets/beach-work.jpg"
          alt="Woman workcationing on the beach"
        />
        <h1
          class="8 mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
        >
          You can work from anywhere.
          <br class="hidden lg:inline" />
          <span class="text-indigo-500"> Take advantage of it.</span>
        </h1>
        <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div class="mt-4 space-x-2 sm:mt-6">
          <a class="btn btn-primary" href="#">Book your escape</a>
          <a class="btn btn-secondary" href="#">Learn more</a>
        </div>
      </div>
    </div>
    <div class="relative hidden lg:block 2xl:col-span-3">
      <img
        class="absolute inset-0 h-full w-full object-cover object-center"
        src="./assets/beach-work.jpg"
        alt="Woman workcationing on the beach"
      />
    </div>
  </div>
</template>
