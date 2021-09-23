<template>
  <q-layout view="lHh lpR lff">
    <main-header/>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <main-footer/>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import MainFooter from 'layouts/MainFooter'
import MainHeader from 'layouts/MainHeader'

export default defineComponent({
  name: 'MainLayout',
  components: { MainHeader, MainFooter },
  setup () {
    return {}
  }
})
</script>
