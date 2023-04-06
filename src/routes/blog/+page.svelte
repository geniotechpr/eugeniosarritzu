<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';

  const reinaMeme = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738124/eugeniosarritzu.com/eu-reina-blog_rr49xl.png';
  const eugenio = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738148/eugeniosarritzu.com/euSquare_yrlclj.png';

  let isPageLoaded = false;
  onMount(() => {
    isPageLoaded = true;
  });
</script>

<svelte:head>
  <title>Blog · Eugenio Sarritzu Abreu</title>
  <meta name="description" content="A personal space to write online." />
  <meta property="og:title" content="Eugenio Sarritzu" />
  <meta property="og:description" content="Solutions Consultant & Software Developer." />
  <meta property="og:image" content={eugenio} />
</svelte:head>

{#key isPageLoaded}
  <div class="relative flex w-full" in:fly={{ delay: 150, duration: 200, x: 0, y: 50, opacity: 0, easing: sineIn }}>
    <div class="flex flex-col">
      <h1 class="mx-auto mb-6 mt-2 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 xs:mt-4 md:text-3xl">Posts</h1>
      <span class="mb-6 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        Soon, this will be a place where I share my perspective on things I've learned. In the meantime, it's just another chance to show off my domesticated
        fox.
      </span>
      <div class="flex w-full justify-center">
        <img alt="Reina & me." src={reinaMeme} decoding="async" class="h-auto w-[80vw] rounded-xl opacity-100 xs:w-[60vw] xl:w-[40vw]" />
      </div>
      <span class="mx-auto !mt-3 mb-6 text-sm text-gray-500 dark:text-zinc-400">This is a real domesticated fox</span>
      <span class="mb-1.5 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        Here are some topics I want to write about:
        <ul>
          <li>1. <span class="font-medium underline">My journey in tech</span>: a recap of my career and lessons learned.</li>
          <li>2. <span class="font-medium underline">Consuming vs. Creating</span>: spending less time online consuming and pushing myself to make things.</li>
          <li>
            3. <span class="font-medium underline">Overthinking, Overplanning, & Imposter Syndrome</span>: how simple things can be hard.
          </li>
          <li>4. <span class="font-medium underline">Artificial Intelligence</span>: what I've learned so far from others and from experiments of my own.</li>
          <li>5. <span class="font-medium underline">Current Tech Stack</span>: the technologies I chose to learn to build this site + other projects.</li>
        </ul>
      </span>
    </div>
  </div>
{/key}
