<script setup>
import  { ref, reactive, computed, watch } from "vue";

import { nameStore } from "../../store/store.js";

const store = nameStore();

let x = ref(10);
let string = ref("Hallo");

const state = reactive({
    count: 0,
    name: "Marcel"
});

const toDo = [
    { desc: "Programmieren", done: false },
    { desc: "Einkaufen", done: false },
    { desc: "Kochen", done: true }
];

const decrease = (value) => {
    state.count -= value;
}

const increase = (value) => {
    state.count += value;
}

// const largerThan = computed(() => {
//     if(state.count > 10) {
//         return "Größer als 10";
//     } else {
//         return "Kleiner als 10";
//     }
// });

watch(() => state.count, (newValue, oldValue) => {
  console.log(newValue, oldValue);
})

</script>

<template>
  <div>
      <button v-on:click="decrease(5)">Update --</button>
      <h2>Hallo Welt</h2>

      <p>{{ store.name }}</p>

      <p>{{ x }}</p>
      <button v-on:click="increase(5)">Update ++</button>
      <p>{{ string }}</p>
      <p>{{ state.count }}</p>
<!--      <p>{{ largerThan }}</p>-->
      <p v-if="state.count > 10">Größer</p>
      <p v-else>Kleiner</p>
      <input type="text" v-model="string">

      <hr />

      <div v-for="(item, index) in toDo" :key="item.desc">
          <p :class="{ 'todo-open': !item.done, 'todo-done': item.done }">
              {{ index + 1 }} : {{ item.desc }}
          </p>
      </div>
  </div>
</template>

<style>
.todo-open {
    background-color: darkred;
    color: white;
}

.todo-done {
    background-color: darkgreen;
    color: white;
}
</style>
