<template>
  <v-app>
    <v-app-bar app flat height="72">
      <v-toolbar-title>Spring Harbor</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="300">
      <v-sheet color="grey lighten-5" height="128" width="100%">
        <v-container>
          <v-btn block color="primary">Pay</v-btn>
        </v-container>
      </v-sheet>

      <v-list class="" shaped>
        <v-list-item
          v-for="n in elements"
          :key="n"
          link
          @click="$router.push({ name: n }).catch((err) => {})"
        >
          <v-list-item-content to="">
            <v-list-item-title>{{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer> </v-spacer>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
    elements: [
      "Home",
      "Calendar",
      "Projects",
      "Documents",
      "Talent",
      "Forms",
      "Board",
    ],
  }),
};
</script>
