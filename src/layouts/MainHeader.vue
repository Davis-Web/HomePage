<template>
  <q-header
    class="bg-primary text-white q-pa-md"
    bordered
  >
    <q-toolbar>
      <q-toolbar-title class="q-gutter-x-lg">
        <q-avatar>
          <img
            src="https://dummyimage.com/512x512/ffffff/81A8F8&text=LOGO"
            alt="Logo"
          >
        </q-avatar>
        <q-btn
          size="lg"
          flat
          :to="{name: 'Index'}"
          label="首页"
        ></q-btn>
        <q-btn
          size="lg"
          flat
          label="副本"
        >
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Instance'}"
              >
                <q-item-section>副本1</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Instance'}"
              >
                <q-item-section>副本2</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          size="lg"
          flat
          label="社区"
        >
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Community'}"
              >
                <q-item-section>社区1</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Community'}"
              >
                <q-item-section>社区2</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          size="lg"
          flat
          :to="{name: 'Message'}"
          label="消息"
        ></q-btn>
        <q-btn
          size="lg"
          flat
          :to="{name: 'About'}"
          label="加入我们"
        ></q-btn>
      </q-toolbar-title>
      <q-space/>
      <q-btn
        size="lg"
        flat
        icon="light_mode"
      ></q-btn>
      <q-btn
        size="lg"
        icon="language"
        flat
        label="语言"
      >
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
            >
              <q-item-section>中文</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
            >
              <q-item-section>English</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainHeader',
  setup (props, context) {

    return {}
  }
})
</script>
