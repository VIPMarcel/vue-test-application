<script setup>
import { ref, inject, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated } from "vue";
import  { nameStore } from "../../store/store.js";

const store = nameStore();
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

const vorname = inject("propvalue");

//  z.B. Daten aus API laden
onBeforeMount(() => {
    console.log("onBeforeMount");
});

onMounted(() => {
    console.log("onMounted");
});

onBeforeUnmount(() => {
    console.log("onBeforeUnmount");
});

//  z.B. Daten aus lokal Speicher löschen
onUnmounted(() => {
    console.log("onUnmounted");
});

onBeforeUpdate(() => {
    console.log("onBeforeUpdate");
});

onUpdated(() => {
    console.log("onUpdated");
});
</script>

<template>
    <div>
        <h3>{{ props.name }}</h3>
        <p>{{ vorname }}</p>

        <p>{{ store.name }}</p>
        <p>{{ store.age }}</p>
        <button @click="store.increaseAge">Herbert älter machen</button>
        <slot name="slot1"></slot>
        <button @click="handleClick">Username ändern</button>
        <slot name="slot2"></slot>
    </div>
</template>