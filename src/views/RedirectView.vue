<script setup>
import { useRouter } from 'vue-router';
const random_char = Math.random() * 7000 | 4703;
const router = useRouter();
router.push({ name: 'charachterDetail', params: {id: random_char }}) 
</script>

<template>
</template>
