<script setup>
import { ref, computed, watch } from 'vue'
import CharachterItem from './CharachterItem.vue';

const searchQuery = ref('')
let items = ref('')
const apiError = ref('')

const filteredCharachters = computed(() => {
	if(items.value){
		return items.value.filter(item => {
			return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
		})
	}
	
})
async function fetchData() {
	items.value = null
	const res = await fetch(
		`https://api.disneyapi.dev/characters`
	)
	items.value = await res.json();
	items.value = items.value.data;
}

fetchData()

</script>

<template>
	<div class="mb-6 px-8 pt-8">
		<input
			v-model="searchQuery"
			placeholder="Search by charachter"
			type="text"
			id="large-input"
			class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		/>
	</div>
	<section class="pt-8 px-4">
		<div class="flex flex-wrap">
			<div class="md:w-1/3 px-4 mb-8" v-for="item  in filteredCharachters">
				<CharachterItem :item="item" />
			</div>
		</div>
	</section>
</template>
