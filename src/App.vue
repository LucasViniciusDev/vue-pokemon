<template>
  <v-app>
    
    <CoreAppBar />
    <CoreDrawer />


    <v-container>
      <v-main>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: 
  {
    CoreAppBar: () => import('./components/core/AppBar'),
    CoreDrawer: () => import('./components/core/Drawer')
  }

}
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
