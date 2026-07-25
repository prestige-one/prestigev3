export function useImageHoverReveal(): void {
  const moveImage = (e: MouseEvent, item: HTMLElement) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Second child (like children[1] in React code)
    const image = item.children[1] as HTMLElement | null;
    if (image) {
      image.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    const item = e.currentTarget as HTMLElement;
    if (item) {
      moveImage(e, item);
    }
  };

  onMounted(() => {
    const hoverItems = document.querySelectorAll<HTMLElement>('.hover-reveal-item');
    hoverItems.forEach((item) => {
      item.addEventListener('mousemove', handleMouseMove);
    });
  });

  onBeforeUnmount(() => {
    const hoverItems = document.querySelectorAll<HTMLElement>('.hover-reveal-item');
    hoverItems.forEach((item) => {
      item.removeEventListener('mousemove', handleMouseMove);
    });
  });
}
