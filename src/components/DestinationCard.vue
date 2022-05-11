<script>
export default {
  props: ['destination'],
  // props: {
  //   destination: {
  //     type: Object,
  //     default() {
  //       return {
  //         city: 'Toronto',
  //         averagePrice: 120,
  //         propertyCount: 76,
  //         imageUrl: './assets/toronto.png',
  //         imageAlt: 'Toronto skyline',
  //       };
  //     },
  //   },
  // },
};
</script>

<template>
  <div class="flex items-center overflow-hidden rounded-lg bg-white shadow-lg">
    <img class="h-32 w-32 flex-shrink-0" src="" alt="" />
    <div class="px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">Toronto</h3>
      <p class="text-gray-600">$120 / night average</p>
      <div class="mt-4">
        <a
          href="#"
          class="text-indigo-500 hover:text-indigo-400"
          font-semibold
          text-sm
          >Explore 76 properties</a
        >
      </div>
    </div>
  </div>
</template>
