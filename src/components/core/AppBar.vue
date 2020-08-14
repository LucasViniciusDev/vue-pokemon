<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="success"
    dark
  >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title
      style="width: 300px"
      class="ml-0 pl-4"
    >
      <span class="hidden-sm-and-down">Vue Pokemon</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      icon
      large
    >
      <v-avatar
        size="32px"
        item
      >
        <v-img
          src="img/avatar.png"
          alt="Avatar"
        />
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CoreAppBar',

  computed: {
    ...mapGetters('app', ['getDrawer']),

    drawer: {
      get()  { return this.getDrawer },
      set(v) { this.setDrawer(v) }
    }
  },

  methods: {
    ...mapActions('app', ['setDrawer'])
  }
}
</script>

<style>

</style>
