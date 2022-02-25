<script setup>
import { ref, computed, watch } from 'vue'
import CharachterItem from './CharachterItem.vue';

const searchQuery = ref('')
let items = ref('')
const apiError = ref('')
let currentCount = ref('')
let nextPage = ref('')

const filteredCharachters = computed(() => {
	if (items.value) {
		return items.value.filter(item => {
			return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
		})
	}

})
async function fetchData(page) {
	console.log(page)
	items.value = null
	const res = await fetch(
		`https://api.disneyapi.dev/characters?page=${page}`
	)
	items.value = await res.json()
	console.log(items.value)
	nextPage.value = items.value.nextPage
	console.log(nextPage.value)
	let nextPageUrl = new URL(nextPage.value)
	nextPage.value = parseInt(nextPageUrl.searchParams.get("page"))
	currentCount.value = (nextPage.value - 2 ) * 50
	localStorage.setItem("pageNumber",nextPage.value - 1)
	items.value = items.value.data;
}

const savedPageNumber = localStorage.getItem('pageNumber')
if(savedPageNumber){
fetchData(savedPageNumber)
}
else{
fetchData(1)
}


</script>

<template>
	<div class="max-w-full">
		<div class="mb-6 px-4 pt-8 container mx-auto">
			<input
				v-model="searchQuery"
				placeholder="Filter by charachter"
				type="text"
				id="large-input"
				class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
		<section class="pt-8 px-4">
			<div class="container flex flex-wrap mx-auto">
				<div class="w-full p-2 rounded md:w-1/3" v-for="item  in filteredCharachters">
					<CharachterItem :item="item" />
				</div>
			</div>
		</section>
		<div class="flex flex-col items-center pt-6">
			<!-- Help text -->
			<span class="text-sm text-gray-100">
				Showing 
				<span class="font-semibold text-white">{{currentCount + 1}}</span> to
				<span class="font-semibold text-white">{{currentCount + 50}}</span> of
				<span class="font-semibold text-white">7500</span> Characters
			</span>
			<div class="inline-flex mt-2 xs:mt-0">
				<!-- Buttons -->
				<button
					class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					@click="fetchData(nextPage-2)"
				>
					<svg
						class="mr-2 w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					Prev
				</button>
				<button
					class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					@click="fetchData(nextPage)"
				>

					Next
					<svg
						class="ml-2 w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>
