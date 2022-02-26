<script setup>
import { RouterLink, RouterView } from 'vue-router'
const props = defineProps({
  item: JSON
})
</script>

<template >
	<RouterLink :to="{ name: 'charachterDetail', params: {id: item._id }}">
  <div class="overflow-hidden relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 w-72 h-72 z-50 object-cover text-white mx-auto">
		<img v-bind:src="item.imageUrl" :alt="item.name + ' image'" class="object-cover h-72 w-72 "/>
		<div class="absolute p-3 flex flex-col w-full bg-gray-700">
			<span class="font-semibold capitalize" >{{item.name}}</span>
		</div>
	</div>
	</RouterLink>



</template>
