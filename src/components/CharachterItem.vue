<script setup>
import { RouterLink, RouterView } from 'vue-router'
const props = defineProps({
  item: JSON
})
</script>

<template >
	<div class="max-w-sm  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
		<RouterLink :to="{ path: '/character/'+ this.item.name}" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
        <img class="p-8 rounded-t-lg" :src="item.image" alt="product image" />
    <div class="px-5 pb-5">
        <a href="">
            <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{{item.name}}</h3>
        </a>
    </div>
	</RouterLink>
</div>
</template>
