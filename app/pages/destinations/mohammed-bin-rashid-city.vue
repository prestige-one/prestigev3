<script setup lang="ts">
const localePath = useLocalePath();

await navigateTo(localePath("/destinations/meydan-city"), {
  redirectCode: 301,
  replace: true,
});
</script>
