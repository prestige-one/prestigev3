<template>
  <video ref="videoRef" playsinline loop muted>
    <source :src="props.videoUrl" type="video/mp4">
    {{ props.videoTag }}
  </video>
</template>

<script setup lang="ts">
interface Props {
  videoUrl: string
  videoTag?: string
}

const props = withDefaults(defineProps<Props>(), {
  videoTag: 'Your browser does not support the video tag.'
})

const { videoRef } = useAutoPlayVideo()
</script>
