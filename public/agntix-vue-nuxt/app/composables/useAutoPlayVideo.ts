import type { Ref } from 'vue';

interface UseAutoPlayVideoReturn {
  videoRef: Ref<HTMLVideoElement | null>;
  isPlaying: Ref<boolean>;
}

export function useAutoPlayVideo(): UseAutoPlayVideoReturn {
  const videoRef = ref<HTMLVideoElement | null>(null)
  const isPlaying = ref(false)

  onMounted(() => {
    const video = videoRef.value
    if (!video) return

    video.muted = true
    video.loop = true
    video.playsInline = true

    const handlePlay = () => (isPlaying.value = true)
    const handlePause = () => (isPlaying.value = false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    const playVideo = () => {
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Autoplay started successfully')
          })
          .catch(() => {
            console.log('Autoplay prevented, waiting for interaction')
            const handleInteraction = () => {
              video.play()
              document.removeEventListener('click', handleInteraction)
              document.removeEventListener('touchstart', handleInteraction)
            }
            document.addEventListener('click', handleInteraction)
            document.addEventListener('touchstart', handleInteraction)
          })
      }
    }

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    onBeforeUnmount(() => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      observer.disconnect()
    })
  })

  return {
    videoRef,
    isPlaying,
  }
}
