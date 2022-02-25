<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
let item = ref('');
async function fetchData() {
	item.value = null
	const res = await fetch(
		`https://api.disneyapi.dev/characters/${id}`
	)
	item.value = await res.json();
}

fetchData()

function greaterThanThreeElements(){
	return 'grid grid-cols-1 md:grid-cols-4 py-2 gap-y-2'
}
function lessThanThreeElements(){
	return 'grid grid-cols-1 md:grid-cols-2 py-2 gap-y-2'
}
</script>

<template >
	<div
		class="w-10/12 text-center :bg-gray-600 border-gray-400 rounded-lg border shadow-md sm:p-8  m-auto mt-6"
	>
		<div v-if="!item" class="text-center">Loading...</div>
		<div v-else class="py-8">
			<h3 class="mb-2 text-3xl font-bold text-gray-50 dark:text-white">{{ item.name }}</h3>
			<div class="flex flex-col items-center pb-10">
				<img class="w-64 h-64 rounded-full shadow-lg m-6" :src="item.imageUrl" :alt="item.name + ' image'" />
				<div class="w-8/12">
				<div v-if="item.allies.length" class="py-2 px-4">
					<p class="text-left">Allies</p>
					<div v-bind:class="(item.allies.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-yellow-500 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="ally  in item.allies"
					>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ ally }}</h5>
					</div>
					</div>
				</div>
				<div v-if="item.enemies.length" class="py-2 px-4">
					<p class="text-left">Enemies</p>
					<div v-bind:class="(item.enemies.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-yellow-500 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="enemy  in item.enemies"
					>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ enemy }}</h5>
					</div>
					</div>
				</div>
				<div v-if="item.films.length" class="py-2 px-4">
					<p class="text-left">Films</p>
					<div v-bind:class="(item.films.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-yellow-500 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="film  in item.films"
					>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ film }}</h5>
					</div>
					</div>
				</div>
				<div v-if="item.shortFilms.length" class="py-2">
					<p class="text-left">Short Films</p>
					<div v-bind:class="(item.shortFilms.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-red-600 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="film  in item.shortFilms"
					>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ film }}</h5>
					</div>
					</div>
				</div>
				<div v-if="item.tvShows.length" class="py-2 ">
					<p class="text-left">TV Shows</p>
					<div v-bind:class="(item.tvShows.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="px-6 py-10 max-w-sm bg-green-500 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="show  in item.tvShows"
					>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ show }}</h5>
					</div>
					</div>
				</div>
				<div v-if="item.videoGames.length" class="py-2">
					<p class="text-left">Video Games</p>
					<div v-bind:class="(item.tvShows.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
					<div
						class="block px-6 py-10 max-w-sm bg-purple-600 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="game  in item.videoGames"
					>
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ game }}</h5>
					</div>
					</div>
				</div>
				</div>
				
			</div>
		</div>
	</div>
</template>
