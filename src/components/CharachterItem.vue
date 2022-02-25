<script setup>
import { RouterLink, RouterView } from 'vue-router'
const props = defineProps({
  item: JSON
})
</script>

<template >

<div class="max-w-sm  rounded-lg border shadow-md border-gray-700 m-auto py-5" style="background: #892CDC;">
	<RouterLink :to="{ name: 'charachterDetail', params: {id: item._id }}">
    <div class="flex flex-col items-center">
        <img class="m-3 w-24 h-24 rounded-full shadow-lg" v-bind:src="item.imageUrl" :alt="item.name + ' image'"/>
        <h3 class="mb-1 text-xl font-medium text-white">{{item.name}}</h3>
    </div>
	</RouterLink>
</div>


</template>
