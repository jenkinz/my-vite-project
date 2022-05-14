<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    destination: {
      type: Object,
      default() {
        return {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: '/toronto.png',
          imageAlt: 'Toronto skyline',
        };
      },
    },
  },
});
</script>

<template>
  <div class="flex items-center overflow-hidden rounded-lg bg-white shadow-lg">
    <img
      class="h-32 w-32 flex-shrink-0"
      :src="destination.imageUrl"
      :alt="destination.imageAlt"
    />
    <div class="flex-shrink-0 px-6 py-4">
      <h3 class="text-lg font-semibold text-gray-800">
        {{ destination.city }}
      </h3>
      <p class="text-gray-600">
        ${{ destination.averagePrice }} / night average
      </p>
      <div class="mt-4">
        <a
          href="#"
          class="text-brand-dark hover:text-brand"
          font-semibold
          text-sm
          >Explore {{ destination.propertyCount }} properties</a
        >
      </div>
    </div>
  </div>
</template>
