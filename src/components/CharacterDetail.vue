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
	return 'grid grid-cols-1 md:grid-cols-4 py-2 gap-2'
}
function lessThanThreeElements(){
	return 'grid grid-cols-1 md:grid-cols-2 py-2 gap-2'
}
</script>

<template >
	<div
		class="w-10/12 text-center border-8 border-white rounded-lg shadow-md sm:p-8  m-auto mt-6" style="background: #6166B3"
	>
		<div v-if="!item" class="text-center">Loading...</div>
		<div v-else class="py-8">
			<h3 class="mb-2 text-3xl font-bold text-gray-50 ">{{ item.name }}</h3>
			<div class="flex flex-col items-center pb-10">
				<img class="w-64 h-64 rounded-full shadow-lg m-6 border-8 border-white" :src="item.imageUrl" :alt="item.name + ' image'" />
				<div class="w-8/12">
				<div v-if="item.allies.length" class="py-2 px-4">
					<p class="text-left text-xl text-red-100 font-bold">Allies</p>
					<div v-bind:class="(item.allies.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-green-300 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="ally  in item.allies"
					>
					<a :href="'https://www.google.com/search?q=' + ally.split(/(\s+)/).filter( e => e.trim().length > 1).join('+')" target="blank">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{ ally }}</h5>
						</a>
					</div>
					</div>
				</div>
				<div v-if="item.enemies.length" class="py-2 px-4">
					<p class="text-left text-xl text-red-100 font-bold">Enemies</p>
					<div v-bind:class="(item.enemies.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-red-300 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="enemy  in item.enemies"
					>
					<a :href="'https://www.google.com/search?q=' + enemy.split(/(\s+)/).filter( e => e.trim().length > 1).join('+')" target="blank">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ enemy }}</h5>
						</a>
					</div>
					</div>
				</div>
				<div v-if="item.films.length" class="py-2 px-4">
					<p class="text-left text-xl text-red-100 font-bold">Films</p>
					<div v-bind:class="(item.films.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-yellow-200 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="film  in item.films"
					>
					<a :href="'https://www.google.com/search?q=' + film.split(/(\s+)/).filter( e => e.trim().length > 1).join('+')" target="blank">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ film }}</h5>
						</a>
					</div>
					</div>
				</div>
				<div v-if="item.shortFilms.length" class="py-2 px-4">
					<p class="text-left text-xl text-red-100 font-bold">Short Films</p>
					<div v-bind:class="(item.shortFilms.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="block px-6 py-10 max-w-sm bg-red-600 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="film  in item.shortFilms"
					>
					<a :href="'https://www.google.com/search?q=' + film.split(/(\s+)/).filter( e => e.trim().length > 1).join('+')" target="blank">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ film }}</h5>
						</a>
					</div>
					</div>
				</div>
				<div v-if="item.tvShows.length" class="py-2 px-4">
					<p class="text-left text-xl text-red-100 font-bold">TV Shows</p>
					<div v-bind:class="(item.tvShows.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
						<div
						class="px-6 py-10 max-w-sm bg-green-500 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="show  in item.tvShows"
					>
					<a :href="'https://www.google.com/search?q=' + show.split(/(\s+)/).filter( e => e.trim().length > 1).join('+')" target="blank">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ show }}</h5>
						</a>
					</div>
					</div>
				</div>
				<div v-if="item.videoGames.length" class="py-2 px-4">
					<p class="text-left text-xl text-red-100 font-bold">Video Games</p>
					<div v-bind:class="(item.tvShows.length>3)?greaterThanThreeElements():lessThanThreeElements()" >
					<div
						class="block px-6 py-10 max-w-sm bg-purple-600 rounded-lg border border-gray-800 shadow-md hover:bg-gray-100"
						v-for="game  in item.videoGames"
					>
					<a :href="'https://www.google.com/search?q=' + game.split(/(\s+)/).filter( e => e.trim().length > 1).join('+')" target="blank">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ game }}</h5>
						</a>
					</div>
					</div>
				</div>
				</div>
				
			</div>
		</div>
	</div>
</template>