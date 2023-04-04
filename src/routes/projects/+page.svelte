<script lang="ts">
  import eugenioReina from '#/lib/images/eu-reina-laptop.png';
  import eugenio from '#/lib/images/eugenio.png';
</script>

<svelte:head>
  <title>Projects · Eugenio Sarritzu Abreu</title>
  <meta name="description" content="Portfolio of projects." />
  <meta property="og:title" content="Eugenio Sarritzu" />
  <meta property="og:description" content="Solutions Consultant & Software Developer." />
  <meta property="og:image" content={eugenio} />
</svelte:head>

<div class="relative flex w-full">
  <div class="flex flex-col">
    <h1 class="mx-auto mt-2 mb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 xs:mt-4 md:text-3xl">Projects</h1>
    <span class="mb-6 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300"
      >As I build and ship projects, I will link them in this page. In the meantime, here's a live look at how I'm spending my nights and weekends.
    </span>
    <div class="flex w-full justify-center">
      <img alt="Reina & me working hard." src={eugenioReina} decoding="async" class="h-auto w-[80vw] rounded-xl opacity-100 xs:w-[60vw] xl:w-[40vw]" />
    </div>
    <span class="mx-auto mb-6 !mt-3 text-sm text-gray-500 dark:text-zinc-400">Working hard with my secret assistant</span>
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
      Here are some of the ideas I want to turn into reality this year:
      <ul>
        <li>1. <span class="font-medium underline">This site</span>: continue developing my personal site & begin writing online in a blog format.</li>
        <li>2. <span class="font-medium underline">ChatCV</span>: chat with my resume & CV in a ChatGPT-type interface.</li>
        <li>
          3. <span class="font-medium underline">Personal Assistant</span>: create a GPT-4 based personal assistant that has up to date information about my
          technology stack of choice (e.g. Svelte, SvelteKit, TailwindCSS, ,TypeScript, etc.) to help me build side projects faster.
        </li>
        <li>
          4. <span class="font-medium underline">PuertoRico.ai</span>: allow people to explore the culture, history, and places of our incredible island using
          text-to-image and large language models.
        </li>
        <li>5. <span class="font-medium underline">Teaching</span>: develop ways to help others learn.</li>
      </ul>
    </span>
  </div>
</div>
