<template>
  <AppProvider>
    <n-space m-50>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </AppProvider>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import AppProvider from '@/components/AppProvider/index.vue'
import { createDiscreteApi, useMessage } from 'naive-ui'

onMounted(() => {
  const { message } = createDiscreteApi(['message'])
  // const message = useMessage()
  // message.success('加载完成，Perfect~')
  // $loadingBar.start()
  // setTimeout(() => {
  //   $loadingBar.finish()
  message.success('加载完成，Perfect~')
  // window.$message.success('加载完成，Perfect~')
  // }, 500)
})
</script>
