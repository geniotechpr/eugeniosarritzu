<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import type { Preview } from '#/lib/types/custom-types';

  //Component animation on load
  let isComponentLoaded = false;

  // Generate a list of previews
  const previews: Preview[] = [
    {
      imgSource: 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738098/eugeniosarritzu.com/blog-preview_jyk4ol.jpg',
      title: 'Blog',
      description: "A place to write about things I've learned.",
      labelText: 'Coming Soon',
      labelClass: 'absolute bottom-0 left-0 rounded-md bg-pink-600 px-1.5 py-1.5 text-xs font-medium text-white shadow-sm'
    },
    {
      imgSource: 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738100/eugeniosarritzu.com/chatGPT_bsudmx.jpg',
      title: 'EuAssist',
      description: 'GPT-4 based assistant to build side projects faster.',
      labelText: 'Coming Soon',
      labelClass: 'absolute bottom-0 left-0 rounded-md bg-indigo-600 px-1.5 py-1.5 text-xs font-medium text-white shadow-sm'
    },
    {
      imgSource: 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738151/eugeniosarritzu.com/puertorico_pr6exp.jpg',
      title: 'puertorico.ai',
      description: 'Explore Puerto Rico using modern AI models.',
      labelText: 'Coming Soon',
      labelClass: 'absolute bottom-0 left-0 rounded-md bg-amber-600 px-1.5 py-1.5 text-xs font-medium text-white shadow-sm'
    }
  ];

  // On Component Mount, set up animations and return cleanup function for unmount
  onMount(() => {
    isComponentLoaded = true;
  });
</script>

{#if isComponentLoaded}
  {#key isComponentLoaded}
    <div class="mt-0" in:fly={{ delay: 150, duration: 200, x: 0, y: 50, opacity: 0, easing: sineIn }}>
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {#each previews as preview}
            <article
              class="relative isolate flex transform flex-col justify-end overflow-hidden rounded-2xl border-4 border-white bg-gray-900 px-8 pb-8 pt-80 transition duration-200 hover:scale-105 hover:border-sky-500 dark:border-zinc-900 dark:hover:border-sky-400 sm:pt-48 lg:pt-80"
            >
              <img src={preview.imgSource} alt="A preview of my project" class="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div class="relative w-full">
                <div class={preview.labelClass}>{preview.labelText}</div>
              </div>
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <span class="absolute inset-0" />
                {preview.title}
              </h3>
              <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <span class="mr-8">{preview.description}</span>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </div>
  {/key}
{/if}
