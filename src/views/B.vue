<template>
  <div>
    <p>
      Page B
    </p>
    <button @click="toPageC">
      To Page C
    </button>
  </div>
</template>

<script>
import * as types from '../store/types';

export default {
  name: 'B',
  methods: {
    toPageC() {
      this.$router.push({
        name: 'C',
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'C') {
      this.$store.commit(types.DELETE_KEEP_ALIVE_COMPS, [from.name]);
    }
    next();
  },
};
</script>

<style>

</style>
