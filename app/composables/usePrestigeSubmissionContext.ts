export function usePrestigeSubmissionContext() {
  const route = useRoute();

  function getSubmissionContext(currentProject?: string) {
    const projectMatch = route.path.match(/\/projects\/([^/?#]+)/i);

    return {
      currentUrl: import.meta.client ? window.location.href : route.fullPath,
      currentProject: currentProject?.trim() || (projectMatch?.[1] ? decodeURIComponent(projectMatch[1]) : ""),
    };
  }

  return { getSubmissionContext };
}
