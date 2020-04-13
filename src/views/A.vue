<template>
  <div>
    <p>
      Page A
    </p>
    <button @click="toPageB">
      To Page B
    </button>
  </div>
</template>

<script>
import * as types from '../store/types';

export default {
  name: 'A',
  methods: {
    toPageB() {
      this.$router.push({
        name: 'B',
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'B') {
      this.$store.commit(types.DELETE_KEEP_ALIVE_COMPS, [from.name]);
    }
    next();
  },
};
</script>

<style>

</style>
