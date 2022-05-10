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
  <div class="mx-auto max-w-md px-8 py-12">
    <img class="h-10" src="./assets/logo.svg" alt="Workcation" />
    <img
      class="mt-6 rounded-lg shadow-xl"
      src="./assets/beach-work.jpg"
      alt="Woman workcationing on the beach"
    />
    <h1 class="mt-6 text-2xl font-bold text-gray-900">
      You can work from anywhere.
      <span class="text-indigo-500"> Take advantage of it.</span>
    </h1>
    <p class="mt-2 text-gray-600">
      Workcation helps you find work-friendly rentals in beautiful locations so
      you can enjoy some nice weather even when you're not on vacation.
    </p>
    <div class="mt-4">
      <a
        class="inline-block rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg"
        href="#"
        >Book your escape</a
      >
    </div>
  </div>
</template>
