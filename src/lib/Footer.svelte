<script lang="ts">
  import SocialMediaLogos from '#/lib/logos/SocialMediaLogos.svelte';
  import type { Social } from '#/lib/types/custom-types';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  const eugenio = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738143/eugeniosarritzu.com/eugenio_psvxke.png';

  const socials: Social[] = [
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/geniotechpr/'
    },
    {
      name: 'github',
      href: 'https://github.com/geniotechpr'
    },
    {
      name: 'repl',
      href: 'https://replit.com/@geniotechpr'
    }
  ];

  //Component animation on load
  let isComponentLoaded = false;
  // On Component Mount, set up animations and return cleanup function for unmount
  onMount(() => {
    isComponentLoaded = true;
  });
</script>

{#if isComponentLoaded}
  {#key isComponentLoaded}
    <footer id="contact" class="relative flex justify-center sm:px-8" in:fade={{ delay: 150, duration: 200 }}>
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="flex w-full justify-center border-t border-zinc-100 dark:border-zinc-700/40">
          <div class="mb-8 flex flex-col md:mb-10 lg:mb-16">
            <div
              class="mx-auto my-4 flex h-20 w-20 flex-col justify-center rounded-full bg-white/90 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10"
            >
              <img alt="Eugenio" src={eugenio} decoding="async" class="mx-auto h-[4.75rem] w-[4.75rem] rounded-full" />
            </div>
            <span class="mx-auto text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Eugenio Sarritzu Abreu</span>
            <span class="mx-auto text-base text-zinc-600 dark:text-zinc-400">@geniotechpr</span>
            <div class="my-8 flex justify-between px-12">
              {#each socials as social}
                <a
                  class="relative block px-3 py-2 transition hover:text-sky-500 dark:hover:text-sky-400"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialMediaLogos logo={social.name} classValue="mx-auto h-6 w-6 fill-zinc-500 hover:fill-sky-400 dark:hover:fill-sky-500" />
                </a>
              {/each}
            </div>
            <span class="mx-auto text-xs font-medium text-zinc-600 dark:text-zinc-400">© 2023 ESA</span>
          </div>
        </div>
      </div>
    </footer>
  {/key}
{/if}
