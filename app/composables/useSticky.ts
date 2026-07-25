
interface UseStickyReturn {
  isSticky: Ref<boolean>;
}

export function useSticky(offset: number = 20): UseStickyReturn {
  const isSticky = ref<boolean>(false);
  const handleSticky = (): void => {
    if (window.scrollY > offset) {
      isSticky.value = true;
    } else {
      isSticky.value = false;
    }
  }
  onMounted(() => window.addEventListener("scroll", handleSticky));
  onUnmounted(() => window.removeEventListener("scroll", handleSticky));
  return { isSticky }
}