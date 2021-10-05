<template>
  <q-page class="row justify-center items-center">
    <q-form
      ref="form"
      class="q-pa-md"
      style="min-width: 500px"
    >
      <div class="text-h3">即将上线</div>
      <div class="q-mt-md text-h5 text-grey">提交Email以收取最新消息！</div>
      <q-input
        class="q-mt-md"
        v-model="email"
        type="email"
        placeholder="0123456789@xxx.com"
        clearable
        lazy-rules
        :rules="[
          value => value && /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) || '请正确填写邮箱！'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="email"/>
        </template>
        <template v-slot:after>
          <q-btn
            type="submit"
            color="primary"
            label="通知我"
            @click="handleEmailMe"
          />
        </template>
      </q-input>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EmailMe',
  setup (props, context) {
    const form = ref()
    const email = ref()
    return {
      form,
      email,
      handleEmailMe: () => {
        form.value.validate().then(isSuccess => {
          if (isSuccess) {
            console.log(email.value)
          }
        })
      }
    }
  }
})
</script>
