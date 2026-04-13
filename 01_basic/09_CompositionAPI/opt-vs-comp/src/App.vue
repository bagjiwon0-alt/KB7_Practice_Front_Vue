<template>
  <div>
    <Calc />
    <hr />
    <Composition />
    <hr />
    <Options />
  </div>
</template>

<script>
import Options from './components/Options.vue';
import Composition from './components/Composition.vue';
import Calc from './components/Calc.vue';
export default {
  components: { Options, Composition, Calc },
  name: 'App',
};
</script>
