<script setup>
import { useRoute } from 'vue-router';
const props = defineProps({
  item: JSON
})
const route = useRoute();  
const id = route.params.id;
</script>

<template >
<h1>Name: {{id}}</h1>
</template>
