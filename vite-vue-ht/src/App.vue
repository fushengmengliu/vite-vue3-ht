<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/home">HOME</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
    name: 'App',

}
</script>
