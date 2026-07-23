/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Ref } from 'vue';

interface HoverEffectOptions {
  parent: HTMLElement
  intensity?: number
  speedIn?: number
  speedOut?: number
  easing?: string
  hover?: boolean
  image1: string
  image2: string
  displacementImage: string
  imagesRatio: number
}

interface UseHoverEffectTwoReturn {
  hoverEffectRef: Ref<any | null>;
}

export function useHoverEffectTwo(containerRef: Ref<HTMLElement | null>, imageSrc: string): UseHoverEffectTwoReturn {
  const hoverEffectRef = ref<any | null>(null)
  const eventListenersRef = ref<{ mouseEnter?: () => void; mouseLeave?: () => void }>({})

  const initHoverEffect = async () => {
    const container = containerRef.value as HTMLElement | null
    if (!container) return

    const firstImage = container.querySelector('img') as HTMLImageElement
    if (!firstImage) return

    const { default: HoverEffect } = await import('hover-effect')
    const src = imageSrc

    try {
      const options: HoverEffectOptions = {
        parent: container,
        intensity: 0.6,
        speedIn: 1,
        speedOut: 1,
        hover: false,
        image1: src,
        image2: src,
        displacementImage: '/img/fluid.jpg',
        imagesRatio: firstImage.height / firstImage.width,
      }

      hoverEffectRef.value = new HoverEffect(options)

      const hoverItem = container.closest('.tp--hover-item')
      if (!hoverItem) return

      eventListenersRef.value.mouseEnter = () => hoverEffectRef.value?.next()
      eventListenersRef.value.mouseLeave = () => hoverEffectRef.value?.previous()

      hoverItem.addEventListener('mouseenter', eventListenersRef.value.mouseEnter!)
      hoverItem.addEventListener('mouseleave', eventListenersRef.value.mouseLeave!)
    } catch (error) {
      console.error('Error initializing hover effect:', error)
    }
  }

  const cleanup = () => {
    const container = containerRef.value as HTMLElement | null
    const hoverItem = container?.closest('.tp--hover-item')
    if (hoverItem && eventListenersRef.value.mouseEnter && eventListenersRef.value.mouseLeave) {
      hoverItem.removeEventListener('mouseenter', eventListenersRef.value.mouseEnter)
      hoverItem.removeEventListener('mouseleave', eventListenersRef.value.mouseLeave)
    }

    try {
      hoverEffectRef.value?.destroy?.()
      hoverEffectRef.value = null
    } catch (error) {
      console.error('Error cleaning up hover effect:', error)
    }
  }

  onMounted(() => {
    const container = containerRef.value as HTMLElement | null
    const firstImage = container?.querySelector('img') as HTMLImageElement

    if (firstImage?.complete) {
      initHoverEffect()
    } else if (firstImage) {
      const handleLoad = () => initHoverEffect()
      firstImage.addEventListener('load', handleLoad)
      onBeforeUnmount(() => {
        firstImage.removeEventListener('load', handleLoad)
        cleanup()
      })
    }
  })

  onBeforeUnmount(cleanup)

  return { hoverEffectRef }
}
