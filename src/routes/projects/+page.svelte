<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import ImageWithLoadBlur from '#/lib/ImageWithLoadBlur.svelte';
  import type { Project } from '#/lib/types/custom-types';

  const eugenioReina = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738134/eugeniosarritzu.com/eu-reina-laptop_fo39vp.png';
  const eugenioReinaSmall =
    'https://res.cloudinary.com/dwfeklncf/image/upload/w_3,q_auto,f_auto,fl_lossy/v1680738134/eugeniosarritzu.com/eu-reina-laptop_fo39vp.png';
  const eugenio = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738148/eugeniosarritzu.com/euSquare_yrlclj.png';

  const projects: Project[] = [
    {
      title: 'This site',
      description: ': continue developing my personal site & begin writing online in a blog format.'
    },
    {
      title: 'EuAssist',
      description:
        ': create a GPT-4 based personal assistant that has up to date information about things I care about (e.g. Svelte, SvelteKit, TailwindCSS, TypeScript, etc.) to help me build side projects faster.'
    },
    {
      title: 'PuertoRico.ai',
      description: ': allow people to explore the culture, history, and places of our incredible island using text-to-image and large language models.'
    },
    {
      title: 'Teaching',
      description: ': develop ways to help others learn.'
    }
  ];

  let isPageLoaded = false;
  onMount(() => {
    isPageLoaded = true;
  });
</script>

<svelte:head>
  <title>Projects · Eugenio Sarritzu Abreu</title>
  <meta name="description" content="Portfolio of projects." />
  <meta property="og:title" content="Eugenio Sarritzu" />
  <meta property="og:description" content="Solutions Consultant & Software Developer." />
  <meta property="og:image" content={eugenio} />
</svelte:head>

{#key isPageLoaded}
  <div class="relative flex w-full" in:fly={{ delay: 150, duration: 200, x: 0, y: 50, opacity: 0, easing: sineIn }}>
    <div class="flex flex-col">
      <h1 class="mx-auto mb-6 mt-2 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 xs:mt-4 md:text-3xl">Projects</h1>
      <span class="mb-6 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300"
        >As I build and ship projects, I will link them in this page. In the meantime, here's a live look at how I'm spending my nights and weekends.
      </span>
      <ImageWithLoadBlur
        alt="Reina & me working hard."
        smallImage={eugenioReinaSmall}
        originalImage={eugenioReina}
        imageContainerSize="h-[21rem] w-64 xs:h-96 xs:w-72 md:h-[27rem] md:w-80 lg:h-[32rem] lg:w-96 xl:h-[36rem] xl:w-[27rem]"
        imageClass="w-full rounded-xl opacity-100"
      />
      <!--
      <div class="flex w-full justify-center">
        <img alt="Reina & me working hard." src={eugenioReina} decoding="async" class="h-auto w-[80vw] rounded-xl opacity-100 xs:w-[60vw] xl:w-[40vw]" />
      </div> -->
      <span class="mx-auto !mt-4 mb-6 text-sm text-gray-500 dark:text-zinc-400 xs:!mt-3">Working hard with my secret assistant</span>
      <span class="mx-auto mb-6 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        As many others who follow the technology industry, I am amazed by the modern wave of Artificial Intelligence. Since October 2022, I've spent countless
        hours on Twitter and YouTube learning about topics that spark my interests in the incredible world of AI.
      </span>
      <div class="mb-6 flex justify-around rounded bg-zinc-200/30 shadow-lg shadow-zinc-800/5 dark:bg-zinc-800/75">
        <span class="p-2 text-left text-base font-medium tracking-tight text-zinc-500 dark:text-zinc-400 xs:text-base">
          During the rest of 2023, I want to spend more of my time online <em>creating</em> instead of <em>consuming</em>.
        </span>
      </div>
      <span class="mb-1.5 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        <p class="pb-3">Here are some of the ideas I want to turn into reality this year:</p>
        <ul class="list-inside list-decimal">
          {#each projects as project}
            <li class="mb-1"><span class="font-medium underline">{project.title}</span>{project.description}</li>
          {/each}
        </ul>
      </span>
    </div>
  </div>
{/key}
