<script lang="ts">
  import { onMount } from 'svelte';
  import { Rive, Layout, Fit, Alignment } from '@rive-app/canvas';
  import { fly } from 'svelte/transition';

  // Rive Animation
  let canvas: HTMLCanvasElement;
  let rive: Rive;

  // Text Animation
  const adjectives = ['Software Developer', 'Curious Learner', 'Resourceful Maker', 'Boricua'];
  let adjectiveIndex = 0;
  let adjective: string = '';
  $: currentAdjective = adjective;
  let initiateTransitionIntro = false;
  let isEmojiVisible = false;

  function outroStart() {
    isEmojiVisible = false;
  }

  function outroEnd() {
    adjectiveIndex = (adjectiveIndex + 1) % adjectives.length;
    adjective = adjectives[adjectiveIndex];
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
      }
    };
  }

  // On Component Mount, set up animations and return cleanup function for unmount
  onMount(() => {
    rive = new Rive({
      src: './src/lib/images/coder.riv',
      canvas: canvas,
      layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
      autoplay: true
    });
    adjective = adjectives[adjectiveIndex];
    initiateTransitionIntro = true;
    return () => {
      rive.cleanup();
    };
  });
</script>

<div class="flex justify-center">
  <div class="flex flex-col justify-center">
    <canvas class="mx-auto h-52 w-auto xs:h-72 md:h-96" width="1400" height="1000" bind:this={canvas} />
    <span class="mx-auto text-base font-medium tracking-tight text-zinc-800 dark:text-zinc-300">
      Hello! I'm Eugenio, a
      {#each adjectives as adj}
        {#if initiateTransitionIntro && currentAdjective === adj}
          <p transition:typewriter={{ delay: 1000 }} on:introend={introEnd} on:outrostart={outroStart} on:outroend={outroEnd}>{adj}</p>
        {/if}
      {/each}
      {#if isEmojiVisible && currentAdjective === 'Boricua'}<span out:fly={{ delay: 900 }}>🇵🇷</span>{/if}
    </span>
  </div>
</div>
