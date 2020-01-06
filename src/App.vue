<template>
  <div>
    <nav-bar></nav-bar>
    <NotificationContainer></NotificationContainer>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import NotificationContainer from './components/NotificationContainer'

export default {
  components: { NavBar, NotificationContainer }
}
</script>

<style lang="scss">
@import 'assets/styles/global';
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
