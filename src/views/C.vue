<template>
  <div>
    <p>
      Page C
    </p>
  </div>
</template>

<script>
import * as types from '../store/types';

export default {
  name: 'C',
  beforeRouteLeave(to, from, next) {
    if (to.name !== 'B') {
      this.$store.commit(types.DELETE_KEEP_ALIVE_COMPS, ['A', 'B']);
    }
    next();
  },
};
</script>

<style>

</style>
