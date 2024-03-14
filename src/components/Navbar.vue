<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <header>
        <nav class="flex items-center justify-between">
            <img class="size-20" src="../assets/to-do.png" alt="VueToDo Logo" />
            <ul class="flex pr-6 gap-4">
                <RouterLink to="/">Home</RouterLink>
            </ul>
        </nav>
    </header>
</template>