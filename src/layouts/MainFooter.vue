<template>
  <q-footer class="bg-transparent text-black q-pa-lg q-gutter-y-md">
    <div class="row items-center">
      <div class="text-grey">{{ $t('layout.lastUpdate') }}{{ $d(new Date(buildTimestamp), 'long') }}</div>
      <q-space/>
      <div class="q-gutter-x-sm">
        <q-avatar
          class="cursor-pointer"
          size="lg"
          v-for="link in externalLinkList"
          :key="link.name"
          @click="window.open(link.link)"
        >
          <img
            :src="link.icon"
            :alt="link.name"
          >
        </q-avatar>
      </div>
    </div>
    <div class="row text-center">
      <div
        v-for="link in linkList"
        :key="link.label"
        class="col q-gutter-y-md"
      >
        <div
          class="text-h6"
        >{{ link.label }}
        </div>
        <div
          v-for="child in link.children"
          :key="child.label"
          class="text-grey cursor-pointer"
          @click="$router.push(child.link)"
        >{{ child.label }}
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent } from 'vue'

const externalLinkList = [
  {
    name: 'Logo1',
    link: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO1',
    icon: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO1'
  },
  {
    name: 'Logo2',
    link: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO2',
    icon: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO2'
  },
  {
    name: 'Logo3',
    link: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO3',
    icon: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO3'
  },
  {
    name: 'Logo4',
    link: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO4',
    icon: 'https://dummyimage.com/512x512/81A8F8/ffffff&text=LOGO4'
  }
]

const linkList = [
  {
    label: 'Players',
    children: [
      {
        label: 'Tutorial',
        link: { name: 'Index' }
      }
    ]
  },
  {
    label: 'EcoSystem',
    children: [
      {
        label: 'Davis Community',
        link: { name: 'Index' }
      },
      {
        label: 'Cooperation',
        link: { name: 'Index' }
      },
      {
        label: 'Solutions',
        link: { name: 'Index' }
      }
    ]
  },
  {
    label: 'About Davis',
    children: [
      {
        label: 'About Us',
        link: { name: 'Index' }
      },
      {
        label: 'Join Us',
        link: { name: 'Index' }
      },
      {
        label: 'Contributing',
        link: { name: 'Index' }
      },
      {
        label: 'Contact Us',
        link: { name: 'Index' }
      }
    ]
  },
  {
    label: 'FQAs',
    children: []
  }
]

const buildTimestamp = document.documentElement.dataset.buildTimstamp

export default defineComponent({
  name: 'MainFooter',
  setup (props, context) {
    return {
      externalLinkList,
      linkList,
      window,
      buildTimestamp
    }
  }
})
</script>
