<script setup lang="ts">
const localePath = useLocalePath();

await navigateTo(
  localePath("/industry-news/prestige-one-launches-the-waterway-by-prestige-one-in-meydan-city"),
  { redirectCode: 301, replace: true },
);
</script>
