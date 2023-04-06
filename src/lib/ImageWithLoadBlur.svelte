<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Reduced image size for faster load - this will be blurred by CSS
  export let smallImage: string;
  // Original image size for full resolution
  export let originalImage: string;
  // Image alt text
  export let alt: string;
  // Class to apply to image - size is set here
  export let imageClass: string;

  //Component animation on load
  let isComponentLoaded = false;
  // On Component Mount, set up animations and return cleanup function for unmount
  onMount(() => {
    isComponentLoaded = true;
  });
</script>

{#if !isComponentLoaded}
  <div class="flex w-full justify-center blur-md">
    <img {alt} src={smallImage} decoding="async" loading="lazy" class={imageClass} />
  </div>
{/if}

{#key isComponentLoaded}
  <div class="flex w-full justify-center" in:fade={{ delay: 0, duration: 200 }}>
    <img {alt} src={originalImage} decoding="async" loading="lazy" class={imageClass} />
  </div>
{/key}
