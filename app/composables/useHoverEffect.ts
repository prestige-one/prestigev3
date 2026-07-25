/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentPublicInstance } from 'vue';

type VNodeRef = Element | ComponentPublicInstance | null;

interface UseHoverEffectReturn {
  addToRefs: (el: VNodeRef) => void;
}

export function useHoverEffect(): UseHoverEffectReturn {
  const hoverItemsRef = ref<any>([])
  const animationsRef = ref<any[]>([])

  const initializeHoverEffects = async () => {
    try {
      const { default: HoverEffect } = await import('hover-effect')

      hoverItemsRef.value.forEach((item:any) => {
        const hoverImg = item.querySelector('.tp--hover-img') as HTMLElement
        const img = item.querySelector('img') as HTMLImageElement

        if (!hoverImg || !img) return

        const animation = new HoverEffect({
          parent: hoverImg,
          intensity: parseFloat(hoverImg.dataset.intensity || '0.6'),
          speedIn: parseFloat(hoverImg.dataset.speedin || '1'),
          speedOut: parseFloat(hoverImg.dataset.speedout || '1'),
          easing: hoverImg.dataset.easing,
          image1: img.src,
          image2: img.src,
          displacementImage: hoverImg.dataset.displacement || '',
          imagesRatio: img.naturalHeight / img.naturalWidth,
          hover: false,
        })

        animationsRef.value.push(animation)

        const parentItem = item.closest('.tp--hover-item')
        if (parentItem) {
          parentItem.addEventListener('mouseenter', () => animation.next())
          parentItem.addEventListener('mouseleave', () => animation.previous())
        }
      })
    } catch (error) {
      console.error('Error initializing hover effects:', error)
    }
  }

  onMounted(() => {
    const images = Array.from(document.querySelectorAll('.tp--hover-img img')) as HTMLImageElement[]

    const imageLoadPromises = images.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            img.addEventListener('load', () => resolve())
          })
    )

    Promise.all(imageLoadPromises)
      .then(initializeHoverEffects)
      .catch(console.error)
  })

  onBeforeUnmount(() => {
    animationsRef.value.forEach((animation) => {
      try {
        animation.destroy?.()
      } catch (error) {
        console.warn('Error cleaning up hover effect:', error)
      }
    })
    animationsRef.value = []
  })

  // Vue way to bind refs in v-for
  const addToRefs = (el: VNodeRef) => {
    if (el && el instanceof HTMLElement && !hoverItemsRef.value.includes(el)) {
      hoverItemsRef.value.push(el)
    }
  }

  return { addToRefs }
}
