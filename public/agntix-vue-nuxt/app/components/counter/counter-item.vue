<template>
  <span v-if="noItag" ref="targetElement">{{ counted }}</span>
  <i v-else ref="targetElement">{{ counted }}</i>
</template>

<script setup lang="ts">

type CounterProps = {
  min: number
  max: number
  noItag?: boolean
  animateOnMount?: boolean
  resetOnExit?: boolean // Reset when element exits viewport
}

const props = withDefaults(defineProps<CounterProps>(), {
  noItag: false,
  animateOnMount: false, // Changed default to false for Intersection Observer
  resetOnExit: false
})

const counted = ref(props.min)
const targetElement = ref<HTMLElement | null>(null)
const animationStarted = ref(false)
let intervalRef: ReturnType<typeof setInterval> | null = null
let observer: IntersectionObserver | null = null

// Clear interval helper
const stopInterval = () => {
  if (intervalRef) {
    clearInterval(intervalRef)
    intervalRef = null
  }
}

// Reset counter
const resetCounter = () => {
  stopInterval()
  counted.value = props.min
  animationStarted.value = false
}

const startAnimation = () => {
  if (animationStarted.value) return
  animationStarted.value = true
  counted.value = props.min

  const increment = Math.max(1, Math.ceil(props.max / 20))
  const duration = 500 // total ms
  const steps = Math.ceil(props.max / increment)
  const intervalTime = Math.max(30, duration / steps)

  intervalRef = setInterval(() => {
    counted.value += increment
    if (counted.value >= props.max) {
      counted.value = props.max
      stopInterval()
    }
  }, intervalTime)
}

onMounted(() => {
  if (props.animateOnMount) {
    // Animate immediately on mount
    setTimeout(startAnimation, 50)
  } else if (targetElement.value) {
    // Use Intersection Observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible - start animation
            if (!animationStarted.value) {
              startAnimation()
            }
          } else if (props.resetOnExit) {
            // Element is not visible - reset if resetOnExit is true
            resetCounter()
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )
    
    observer.observe(targetElement.value)
  }
})

onBeforeUnmount(() => {
  stopInterval()
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>