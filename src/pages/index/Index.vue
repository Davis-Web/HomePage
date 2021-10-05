<template>
  <q-page>
    <q-carousel
      v-model="slide"
      style="min-height: 50vh"
      autoplay
      animated
      arrows
      navigation
      infinite
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      prev-icon="arrow_back_ios"
      next-icon="arrow_forward_ios"
      control-type="flat"
    >
      <q-carousel-slide
        v-for="(item, index) in carouselImageList"
        :key="index"
        :name="index"
        :img-src="item.url"
      />
    </q-carousel>

    <div
      class="q-gutter-y-xl text-center"
      style="margin: 100px 30vw"
    >
      <div class="text-h1">{{ t('welcome') }}</div>
      <div class="text-h6 text-grey">The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy
        dog.The quick
        brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the
        lazy dog.The quick brown fox jumps over the lazy dog.
      </div>
    </div>

    <div
      v-for="(item, index) in contentList"
      :key="item.title"
      class="row"
      :style="[{'background-color': item.backgroundColor}, {'flex-direction': index % 2 === 0 ? 'row' : 'row-reverse'}]"
    >
      <div
        class="col"
        style="margin: 100px"
      >
        <q-img :src="item.imgUrl"></q-img>
      </div>
      <div
        class="col flex justify-center items-center"
        style="margin: 100px"
      >
        <div class="q-gutter-y-lg">
          <div class="text-h2">{{ item.title }}</div>
          <div class="text-h5 text-grey">{{ item.content }}</div>
          <q-btn
            class="text-left"
            color="primary"
            size="lg"
            flat
            :to="item.moreLink"
          >More
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const carouselImageList = [
  {
    url: 'https://dummyimage.com/1920x540/CCFCFF/3C3C3C&text=IMAGE1'
  },
  {
    url: 'https://dummyimage.com/1920x540/FFE3D3/3C3C3C&text=IMAGE2'
  },
  {
    url: 'https://dummyimage.com/1920x540/E1FEFA/3C3C3C&text=IMAGE3'
  },
  {
    url: 'https://dummyimage.com/1920x540/FFE5F9/3C3C3C&text=IMAGE4'
  },
  {
    url: 'https://dummyimage.com/1920x540/E8E8FC/3C3C3C&text=IMAGE5'
  }
]

const contentList = [
  {
    title: 'Title1',
    content: 'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.',
    moreLink: { name: 'Index' },
    imgUrl: 'https://dummyimage.com/800x600/81A8C8/FFFFFF&text=IMAGE1',
    backgroundColor: '#CCFCFF'
  },
  {
    title: 'Title2',
    content: 'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.',
    moreLink: { name: 'Index' },
    imgUrl: 'https://dummyimage.com/800x600/81A8C8/FFFFFF&text=IMAGE2',
    backgroundColor: '#FFE3D3'
  },
  {
    title: 'Title3',
    content: 'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.',
    moreLink: { name: 'Index' },
    imgUrl: 'https://dummyimage.com/800x600/81A8C8/FFFFFF&text=IMAGE3',
    backgroundColor: '#E1FEFA'
  },
  {
    title: 'Title4',
    content: 'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.',
    moreLink: { name: 'Index' },
    imgUrl: 'https://dummyimage.com/800x600/81A8C8/FFFFFF&text=IMAGE4',
    backgroundColor: '#FFE5F9'
  },
  {
    title: 'Title5',
    content: 'The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.',
    moreLink: { name: 'Index' },
    imgUrl: 'https://dummyimage.com/800x600/81A8C8/FFFFFF&text=IMAGE5',
    backgroundColor: '#E8E8FC'
  }
]

export default defineComponent({
  name: 'PageIndex',
  setup () {
    const { t } = useI18n()
    const slide = ref(1)
    return {
      t,
      slide,
      carouselImageList,
      contentList
    }
  }
})
</script>
