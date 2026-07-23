/* eslint-disable @typescript-eslint/no-invalid-void-type */
import type { Ref } from 'vue';

/**
 * Utility: Preload background images
 */
const preloadImages = (selector: string): Promise<void> => {
  return new Promise((resolve) => {
    const elements = document.querySelectorAll(selector)
    let loaded = 0

    if (elements.length === 0) {
      resolve()
      return
    }

    const imageLoaded = () => {
      loaded++
      if (loaded === elements.length) {
        resolve()
      }
    }

    elements.forEach((el) => {
      const element = el as HTMLElement
      const bgImage = window.getComputedStyle(element).backgroundImage
      const urlMatch = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/)
      
      if (urlMatch && urlMatch[1]) {
        const img = new Image()
        img.onload = imageLoaded
        img.onerror = imageLoaded
        img.src = urlMatch[1]
      } else {
        imageLoaded()
      }
    })
  })
}

const NEXT = 1
const PREV = -1

interface UseSkewSliderReturn {
  sliderRef: Ref<HTMLDivElement | null>;
  slideNumberRef: Ref<HTMLSpanElement | null>;
  next: () => Promise<boolean | void>;
  prev: () => Promise<boolean | void>;
}

export function useSkewSlider(): UseSkewSliderReturn {
  const sliderRef = ref<HTMLDivElement | null>(null)
  const slideNumberRef = ref<HTMLSpanElement | null>(null)

  const currentSlide = ref(0)
  const isAnimating = ref(false)
  const slidesTotal = ref(0)

  const addLeadingZero = (num: number) => (num < 10 ? `0${num}` : `${num}`)

  const updateSlideNumber = () => {
    if (slideNumberRef.value) {
      slideNumberRef.value.innerHTML = addLeadingZero(currentSlide.value + 1)
    }
  }

  const navigate = async (direction: number) => {
    const { gsap } = await import('gsap')
    if (!sliderRef.value || isAnimating.value) return false
    isAnimating.value = true

    const slides = sliderRef.value.querySelectorAll('.slide')
    const slidesInner = Array.from(slides).map((item) =>
      item.querySelector('.slide__img')
    )

    const previous = currentSlide.value
    currentSlide.value =
      direction === 1
        ? currentSlide.value < slidesTotal.value - 1
          ? currentSlide.value + 1
          : 0
        : currentSlide.value > 0
        ? currentSlide.value - 1
        : slidesTotal.value - 1

    updateSlideNumber()

    const currentSlideEl = slides[previous] as HTMLElement
    const upcomingSlide = slides[currentSlide.value] as HTMLElement
    const upcomingInner = slidesInner[currentSlide.value] as HTMLElement

    gsap
      .timeline({
        defaults: { duration: 1.2, ease: 'power3.inOut' },
        onStart: () => {
          upcomingSlide.classList.add('slide--current')
          gsap.set(upcomingSlide, { zIndex: 10 })
        },
        onComplete: () => {
          currentSlideEl.classList.remove('slide--current')
          gsap.set(upcomingSlide, { zIndex: 1 })
          isAnimating.value = false
        },
      })
      .addLabel('start', 0)
      .to(
        currentSlideEl,
        {
          yPercent: -direction * 100,
        },
        'start'
      )
      .fromTo(
        upcomingSlide,
        {
          yPercent: 0,
          autoAlpha: 0,
          rotationX: 140,
          scale: 0.1,
          z: -1000,
        },
        {
          autoAlpha: 1,
          rotationX: 0,
          z: 0,
          scale: 1,
        },
        'start+=0.1'
      )
      .fromTo(
        upcomingInner,
        {
          scale: 1.8,
        },
        {
          scale: 1,
        },
        'start+=0.17'
      )
  }

  const next = () => navigate(NEXT)
  const prev = () => navigate(PREV)

  onMounted(async() => {
    if (!sliderRef.value) return
    const { gsap } = await import('gsap')
    const { Observer } = await import('gsap/all')
    
    gsap.registerPlugin(Observer)
    const slides = sliderRef.value.querySelectorAll('.slide')
    if (slides.length === 0) {
      console.error('Slides not found!')
      return
    }

    slidesTotal.value = slides.length
    slides[0]?.classList.add('slide--current')

    // Initialize slide number display
    updateSlideNumber()

    // preload images
    preloadImages('.slide__img').then(() => {
      document.body.classList.remove('loading')
      
      // Show navigation and pagination after preload
      if (sliderRef.value) {
        const nav = sliderRef.value.querySelector('.skew-slider-arrow')
        const pagination = sliderRef.value.querySelector('.slides-numbers-wrap')
        const social = sliderRef.value.querySelector('.tp-portfolio-slider__social')
        const copyright = sliderRef.value.querySelector('.tp-portfolio-slider__copyright')
        
        if (nav) gsap.to(nav, { autoAlpha: 1, duration: 0.5 })
        if (pagination) gsap.to(pagination, { autoAlpha: 1, duration: 0.5 })
        if (social) gsap.to(social, { autoAlpha: 1, duration: 0.5 })
        if (copyright) gsap.to(copyright, { autoAlpha: 1, duration: 0.5 })
      }
    })

    // attach GSAP observer
    const observer = Observer.create({
      type: 'wheel,touch,pointer',
      onDown: () => prev(),
      onUp: () => next(),
      wheelSpeed: -1,
      tolerance: 10,
    })

    onBeforeUnmount(() => {
      observer.kill()
    })
  })

  return {
    sliderRef,
    slideNumberRef,
    next,
    prev,
  }
}
