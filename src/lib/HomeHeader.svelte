<script lang="ts">
  import { onMount } from 'svelte';
  import ThrelteScene from '#/lib/ThrelteScene.svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';

  //Component animation on load
  let isComponentLoaded = false;

  // Set up flags
  let adjectiveIndex = 0;
  let adjective: string = '';
  $: currentAdjective = adjective;
  let initiateTransitionIntro = false;
  let isEmojiVisible = false;
  let isHelloTextVisible = false;

  // Text Animation
  interface Adjective {
    id: string;
    emoji: string;
  }
  const adjectives: Adjective[] = [
    {
      id: 'Solutions Consultant',
      emoji: '🕵🏻'
    },
    {
      id: 'Software Developer',
      emoji: '👨🏻‍💻'
    },
    {
      id: 'Curious Maker',
      emoji: '🛠️'
    },
    {
      id: 'Boricua',
      emoji: '🇵🇷'
    }
  ];

  function makeHelloTextVisible() {
    isHelloTextVisible = true;
  }

  function outroStart() {
    isEmojiVisible = false;
  }

  function outroEnd() {
    adjectiveIndex = (adjectiveIndex + 1) % adjectives.length;
    adjective = adjectives[adjectiveIndex].id;
    initiateTransitionIntro = true;
  }

  function introEnd() {
    initiateTransitionIntro = false;
    isEmojiVisible = true;
  }

  // Typewriter transition function
  function typewriter(node: HTMLElement, { speed = 1, delay = 0 }: { speed?: number; delay?: number } = {}) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent ?? '';
    const duration = text.length / (speed * 0.01);

    return {
      delay,
      duration,
      tick: (t: number) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
      stop
    };
  }

  // On Component Mount, set up animations and return cleanup function for unmount
  onMount(() => {
    isComponentLoaded = true;
    adjective = adjectives[adjectiveIndex].id;
    initiateTransitionIntro = true;

    return () => {
      initiateTransitionIntro = false;
    };
  });
</script>

{#key isComponentLoaded}
  <div class="flex justify-center" in:fly={{ delay: 150, duration: 200, x: 0, y: 50, opacity: 0, easing: sineIn }} on:introstart={makeHelloTextVisible}>
    <div class="flex flex-col justify-center">
      <div class="relative mt-2 h-12 w-full xs:mt-4">
        <div class="absolute inset-x-0 top-0">
          <div class="flex justify-around">
            <h1 class="mx-auto flex text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 md:text-3xl">
              {#each adjectives as adj}
                {#if initiateTransitionIntro && currentAdjective === adj.id}
                  <p in:typewriter={{ delay: 250 }} out:fly={{ delay: 1500 }} on:introend={introEnd} on:outrostart={outroStart} on:outroend={outroEnd}>
                    {adj.id}
                  </p>
                {/if}
                {#if isEmojiVisible && currentAdjective === adj.id}<span class="ml-1" out:fly={{ delay: 1500 }}>{adj.emoji}</span>{/if}
              {/each}
            </h1>
          </div>
        </div>
      </div>
      <div><ThrelteScene /></div>
      {#if isHelloTextVisible}
        <div class="mt-6 flex justify-around rounded bg-zinc-200/30 shadow-lg shadow-zinc-800/5 dark:bg-zinc-800/75">
          <span class=" mx-auto text-sm font-medium tracking-tight text-zinc-600 dark:text-zinc-400 xs:text-base">
            Hello! I'm Eugenio. Based in Raleigh, NC.
          </span>
        </div>
      {/if}
    </div>
  </div>
{/key}
