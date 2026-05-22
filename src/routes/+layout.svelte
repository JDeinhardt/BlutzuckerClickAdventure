<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.png";
  import BackgroundParticles from "$lib/components/BackgroundParticles.svelte";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="text-white h-dvh">
  <BackgroundParticles />
  {@render children()}
</div>
