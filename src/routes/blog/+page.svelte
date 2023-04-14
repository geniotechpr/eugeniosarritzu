<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import ImageWithLoadBlur from '#/lib/ImageWithLoadBlur.svelte';
  import type { Blog } from '#/lib/types/custom-types';

  const reinaMeme = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738124/eugeniosarritzu.com/eu-reina-blog_rr49xl.png';
  const reinaMemeSmall =
    'https://res.cloudinary.com/dwfeklncf/image/upload/w_5,c_scale,q_auto,f_auto,fl_lossy/v1680738124/eugeniosarritzu.com/eu-reina-blog_rr49xl.png';
  const eugenio = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738148/eugeniosarritzu.com/euSquare_yrlclj.png';

  const posts: Blog[] = [
    {
      title: 'My journey in tech',
      description: ': a recap of my career and lessons learned.'
    },
    {
      title: 'Consuming vs. Creating',
      description: ': spending less time online consuming and pushing myself to make things.'
    },
    {
      title: 'Overthinking & Overplanning',
      description: ': how simple things can be hard.'
    },
    {
      title: 'Artificial Intelligence',
      description: ": what I've learned so far from others and from experiments of my own."
    },
    {
      title: 'Current Tech Stack',
      description: ': the technologies I chose to learn to build this site + other projects.'
    }
  ];

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
      <ImageWithLoadBlur
        alt="Reina & me working hard."
        smallImage={reinaMemeSmall}
        originalImage={reinaMeme}
        imageContainerSize="h-64 w-64 xs:h-72 xs:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem]"
        imageClass="w-full rounded-xl opacity-100"
      />
      <!--
      <div class="flex w-full justify-center">
        <img alt="Reina & me." src={reinaMeme} decoding="async" class="h-auto w-[80vw] rounded-xl opacity-100 xs:w-[60vw] xl:w-[40vw]" />
      </div> -->
      <span class="mx-auto !mt-3 mb-6 text-sm text-gray-500 dark:text-zinc-400">This is a real domesticated fox</span>
      <span class="mb-1.5 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        <p class="pb-3">Here are some topics I want to write about:</p>
        <ul class="list-inside list-decimal">
          {#each posts as post}
            <li class="mb-1"><span class="font-medium underline">{post.title}</span>{post.description}</li>
          {/each}
        </ul>
      </span>
    </div>
  </div>
{/key}
