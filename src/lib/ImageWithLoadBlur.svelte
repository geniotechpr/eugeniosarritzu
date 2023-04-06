<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // Reduced image size for faster load - this will be blurred by CSS
  export let smallImage: string;
  // Original image size for full resolution
  export let originalImage: string;
  // Image alt text
  export let alt: string;
  // Class to apply to image container
  export let imageContainerSize: string;
  // Class to apply to image
  export let imageClass: string;

  //Component animation on load
  let isComponentLoaded = false;
  let isLoadingBlurVisible = true;

  function makeLoadingBlurInvisible() {
    isLoadingBlurVisible = false;
  }

  // On Component Mount, set up animations and return cleanup function for unmount
  onMount(() => {
    isComponentLoaded = true;
  });
</script>

<div class="flex w-full justify-center">
  <div class={'relative ' + imageContainerSize}>
    <div class="absolute inset-x-0 top-0 blur-sm">
      <img {alt} src={smallImage} decoding="async" class={imageClass} />
    </div>

    {#key isComponentLoaded}
      <div class="absolute inset-x-0 top-0" in:fade={{ delay: 0, duration: 200 }} on:introstart={makeLoadingBlurInvisible}>
        <img {alt} src={originalImage} decoding="async" loading="lazy" class={imageClass} />
      </div>
    {/key}
  </div>
</div>
