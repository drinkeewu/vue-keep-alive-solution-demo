<template>
  <div id="app">
    <ul>
      <li
        v-for="item in menus"
        :key="`menu${item}}`"
        @click="goToPage(item)"
      >
        {{ item }}
      </li>
    </ul>
    <keep-alive :include="keepAliveComps">
      <router-view class="router-view"/>
    </keep-alive>
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */
import { mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      menus: ['A', 'D'],
    };
  },
  computed: {
    ...mapState(['keepAliveComps']),
  },
  methods: {
    goToPage(targetName) {
      const { name } = this.$route;
      name !== targetName && this.$router.push({
        name: targetName,
      });
    },
  },
};
</script>

<style>
#app {
  padding-top: 30px;
  display:flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  cursor: pointer;
}
.router-view {
  flex: 1
}


</style>
