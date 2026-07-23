interface UseMouseImageRevealReturn {
  handleMouseMove: (e: MouseEvent, selector: string) => void;
}

export function useMouseImageReveal(): UseMouseImageRevealReturn {
  const moveImage = (e: MouseEvent, item: HTMLElement) => {
    const contentElement = item.querySelector('.tp-award-box-left') as HTMLElement
    const revealElement = item.querySelector('.tp-award-reveal-img') as HTMLElement

    if (contentElement && revealElement) {
      const contentRect = contentElement.getBoundingClientRect()
      const x = e.clientX - contentRect.left
      const y = e.clientY - contentRect.top

      revealElement.style.transform = `translate(${x - revealElement.offsetWidth / 2}px, ${y - revealElement.offsetHeight / 2}px)`

    }
  }

  const handleMouseMove = (e: MouseEvent, selector: string) => {
    const target = e.currentTarget as HTMLElement
    const hoverItem = target.closest(selector) as HTMLElement
    if (hoverItem) {
      moveImage(e, hoverItem)
    }
  }

  return {
    handleMouseMove,
  }
}

