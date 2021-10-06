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
          :label="$t('layout.index')"
        ></q-btn>
        <q-btn
          size="lg"
          flat
          :label="$t('layout.instance')"
        >
          <q-menu>
            <q-list style="min-width: 200px">
              <q-item
                clickable
                v-close-popup
                :to="{name: 'EmailMe'}"
              >
                <q-item-section>副本一</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'EmailMe'}"
              >
                <q-item-section>副本二</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'EmailMe'}"
              >
                <q-item-section>副本三</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'EmailMe'}"
              >
                <q-item-section>副本四</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          size="lg"
          flat
          :label="$t('layout.community')"
        >
          <q-menu>
            <q-list style="min-width: 200px">
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Community'}"
              >
                <q-item-section>Twitter</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Community'}"
              >
                <q-item-section>Discord</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Community'}"
              >
                <q-item-section>Telegram</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                :to="{name: 'Community'}"
              >
                <q-item-section>QQ</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          size="lg"
          flat
          :to="{name: 'Message'}"
          :label="$t('layout.message')"
        ></q-btn>
        <q-btn
          size="lg"
          flat
          :to="{name: 'About'}"
          :label="$t('layout.joinus')"
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
        :label="$t('layout.language')"
      >
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              @click="change2Chinese"
            >
              <q-item-section>中文</q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="change2English"
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
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'MainHeader',
  setup (props, context) {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      change2Chinese: () => {
        locale.value = 'zh-CN'
      },
      change2English: () => {
        locale.value = 'en-US'
      }
    }
  }
})
</script>
