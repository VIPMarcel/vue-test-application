<script setup>
import { ref } from "vue";

const props = ref("Lukas");

import Child from "./Child.vue";

const changeIt = (data) => {
    props.value = data;
}

</script>

<template>
  <div>
      <h2>About Template</h2>
      <Child :name="props" @change-string="changeIt"/>
  </div>
</template>