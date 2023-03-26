<script lang="ts">
  import reinaMeme from '#/lib/images/eu-reina-blog.png';
</script>

<svelte:head>
  <title>Blog · Eugenio Sarritzu Abreu</title>

  <!-- TODO: update this -->

  <meta name="description" content="About this app" />
</svelte:head>

<div class="relative flex w-full">
  <div class="flex flex-col">
    <h1 class="mx-auto mt-2 mb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 xs:mt-4 md:text-3xl">Posts</h1>
    <span class="mx-auto mb-2 flex text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-300"> Under Construction...</span>
    <span class="mb-6 text-left text-base tracking-tight text-zinc-800 dark:text-zinc-300">
      Soon, this will be a place where I share my perspective on things I've learned. In the meantime, it's just another chance to show off my domesticated fox.
    </span>
    <div class="flex w-full justify-center">
      <img alt="Reina & me." src={reinaMeme} decoding="async" class="h-auto w-[80vw] rounded-xl opacity-100 xs:w-[60vw] xl:w-[40vw]" />
    </div>
    <span class="mx-auto mb-6 !mt-3 text-sm text-gray-500 dark:text-zinc-400">This is a real domesticated fox</span>
    <span class="mb-1.5 text-left text-base tracking-tight text-zinc-800 dark:text-zinc-300"> Here are some topics I want to write about: </span>
    <ul>
      <li>1. <span class="font-medium underline">My journey in tech</span>: a recap of my career journey and lessons learned.</li>
      <li>2. <span class="font-medium underline">Consuming vs. Creating</span>: spending less time online consuming and pushing myself to make things.</li>
      <li>
        3. <span class="font-medium underline">Overthinking, Overplanning, & Imposter Syndrome</span>: how simple things can be so hard inside our head.
      </li>
      <li>4. <span class="font-medium underline">Artificial Intelligence</span>: what I've learned so far from others and from experiments of my own.</li>
      <li>5. <span class="font-medium underline">Current Tech Stack</span>: the technologies I chose to learn to build this site + other projects.</li>
    </ul>
  </div>
</div>
