import type { Ref } from 'vue';

interface UseEyeAnimationReturn {
  sectionRef: Ref<HTMLElement | null>;
}

export const useEyeAnimation = (): UseEyeAnimationReturn => {
  const sectionRef = ref<HTMLElement | null>(null)
  let isActive = false

  const eyeball = (e: MouseEvent) => {
    if (!isActive) return

    const eyes = document.querySelectorAll<HTMLElement>('.eye')
    eyes.forEach((eye) => {
      const rect = eye.getBoundingClientRect()
      const x = rect.left + eye.clientWidth / 3
      const y = rect.top + eye.clientHeight / 3

      const radian = Math.atan2(e.pageX - x, e.pageY - y)
      const rotation = radian * (180 / Math.PI) * -1 + 270

      eye.style.transform = `rotate(${rotation}deg)`
    })
  }

  const createObserver = () => {
    if (!sectionRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isActive = entry.isIntersecting
        })
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    )

    observer.observe(sectionRef.value)
    return observer
  }

  let observer: IntersectionObserver | undefined = undefined

  onMounted(() => {
    observer = createObserver()
    document.body.addEventListener('mousemove', eyeball)
  })

  onUnmounted(() => {
    if (observer && sectionRef.value) observer.unobserve(sectionRef.value)
    document.body.removeEventListener('mousemove', eyeball)
  })

  return { sectionRef }
}