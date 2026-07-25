
interface UseIsDarkReturn {
  isDark: ComputedRef<boolean>;
}

export const useIsDark = (): UseIsDarkReturn => {
  const route = useRoute();
  
  const isDark = computed(() => {
    return route.path.startsWith('/dark');
  });
  
  return { isDark };
}