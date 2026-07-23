import { ref, onMounted, onBeforeUnmount, type Ref } from "vue"

interface UseTabIndicatorReturn {
  markerRef: Ref<HTMLElement | null>;
}

export function useTabIndicator(): UseTabIndicatorReturn {
  const markerRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (typeof window === "undefined" || !markerRef.value) return

    const marker = markerRef.value
    const tabButtons = document.querySelectorAll<HTMLButtonElement>(
      ".tp-marker-tab ul li button"
    )

    const updateIndicator = (target: HTMLElement) => {
      if (!target) return
      const width = target.offsetWidth
      marker.style.left = `${target.offsetLeft}px`
      marker.style.width = `${width}px`
      marker.style.display = "block"
    }

    // initialize with active tab
    const activeTab = document.querySelector<HTMLButtonElement>(
      ".tp-marker-tab ul li button.active"
    )
    if (activeTab) {
      const width = activeTab.offsetWidth
      marker.style.display = "block"
      marker.style.width = `${width}px`
      marker.style.left = `${activeTab.offsetLeft}px`
    }

    // click handler
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      updateIndicator(target)
    }

    tabButtons.forEach((button) => {
      button.addEventListener("click", handleClick)
    })

    onBeforeUnmount(() => {
      tabButtons.forEach((button) => {
        button.removeEventListener("click", handleClick)
      })
    })
  })

  return { markerRef }
}
