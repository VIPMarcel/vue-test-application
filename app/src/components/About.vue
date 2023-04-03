<script setup>
import { ref, provide } from "vue";

const props = ref("Lukas");

import Child from "./Child.vue";
import { useData } from "../../../use/useComposible.js";

const { data, setName } = useData();

const changeIt = (data) => {
    props.value = data;
}

provide("propvalue", props);

</script>

<template>
  <div>
      <h1>{{ data.name }}</h1>
      <button @click="setName">Change Name to Johannes</button>
      <h2>About Template</h2>
      <Child :name="props" @change-string="changeIt" >
          <template v-slot:slot1>
              <p>Unser Slot Kontent</p>
          </template>
          <template #slot2>
              <p>Unser Slot</p>
          </template>
      </Child>
  </div>
</template>