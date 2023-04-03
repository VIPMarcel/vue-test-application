<script setup>
import {ref} from "vue";

const name = "Sebastian";

const props = defineProps({
    name: {
        type: String,
        default: "Unbekannter User"
    }
});

const emit = defineEmits(["changeString"]);

const handleClick = () => {
    emit("changeString", name);
};
</script>

<template>
    <div>
        <h3>{{ props.name }}</h3>
        <button @click="handleClick">Username ändern</button>
    </div>
</template>