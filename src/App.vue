<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue';
import { defineComponent } from 'vue';
import DestinationCard from './components/DestinationCard.vue';

export default defineComponent({
  components: {
    DestinationCard,
  },
  data() {
    return {
      popularDestinations: [
        {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: '/toronto.png',
          imageAlt: 'Toronto skyline',
        },
        {
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: '/toronto.png',
          imageAlt: 'Cliff in Malibu',
        },
        {
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: '/toronto.png',
          imageAlt: 'Chicago skyline',
        },
      ],
    };
  },
});
</script>

<template>
  <div>
    <div class="grid bg-gray-100 lg:grid-cols-2 2xl:grid-cols-5">
      <div
        class="mx-auto max-w-md px-3 py-12 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2"
      >
        <div class="xl:max-w-xl">
          <img class="h-10" src="./assets/logo.svg" alt="Workcation" />
          <img
            class="mt-6 rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
            src="./assets/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
          <h1
            class="8 mt-6 font-headline text-2xl font-semibold tracking-tight text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere.
            <br class="hidden lg:inline" />
            <span class="text-brand"> Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div class="mt-4 flex flex-nowrap space-x-2 sm:mt-6">
            <a class="btn btn-primary" href="#">Book&nbsp;your&nbsp;escape</a>
            <a class="btn btn-secondary" href="#">Learn&nbsp;more</a>
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
    <div class="mx-auto max-w-md px-8 py-8 sm:max-w-xl lg:max-w-6xl lg:px-12">
      <h2 class="text-xl text-gray-900">Popular destinations</h2>
      <p class="mt-2 text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>
      <div class="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <DestinationCard
          v-for="destination in popularDestinations"
          :key="destination.city"
          :destination="destination"
        ></DestinationCard>
      </div>
    </div>
  </div>
</template>
