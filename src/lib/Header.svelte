<script lang="ts">
  import OutlineIcons from '#/lib/heroicons/OutlineIcons.svelte';
  import { onMount } from 'svelte';
  import { createMenu } from 'svelte-headlessui';
  import { fly, fade } from 'svelte/transition';
  import { quintOut, quintIn } from 'svelte/easing';
  import type { Route } from '#/lib/types/custom-types';

  //Component animation on load
  let isComponentLoaded = false;

  const eugenio = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738143/eugeniosarritzu.com/eugenio_psvxke.png';

  // Define routes for navigation menu
  const routes: Route[] = [
    {
      name: 'Projects',
      href: '/projects'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ];

  // Get custom store to manage state of dropdown menu (mobile)
  const menu = createMenu({ expanded: false });
  // Reactive declaration that controls showing/hiding of the mobile menu
  $: showMobileMenu = $menu.expanded;

  function onSelect(e: Event) {
    console.log('select', (e as CustomEvent).detail);
  }

  // indicates if we're in dark mode or not
  let dark: boolean;

  onMount(() => {
    isComponentLoaded = true;
    // use the existence of the dark class on the html element for the initial value
    dark = document.documentElement.classList.contains('dark');
    // listen for changes so we auto-adjust based on system settings
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    matcher.addEventListener('change', handleChange);

    return () => matcher.removeEventListener('change', handleChange);
  });
  function handleChange({ matches: dark }: MediaQueryListEvent) {
    // only set if we haven't overridden the theme
    if (!localStorage.theme) {
      setMode(dark);
    }
  }
  function toggleDarkMode() {
    setMode(!dark);
  }
  function setMode(value: boolean) {
    dark = value;
    // update page styling
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // store the theme as a local override
    localStorage.theme = dark ? 'dark' : 'light';
    // if the toggled-to theme matches the system defined theme, clear the local override
    // this effectively provides a way to override or revert to "automatic" setting mode
    if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
      localStorage.removeItem('theme');
    }
  }
</script>

<svelte:head>
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <!-- set dark mode class based on user preference / device settings (in head to avoid FOUC: flash of unstyled content) -->
  <script>
    if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

{#key isComponentLoaded}
  <header class="relative flex flex-col" in:fade={{ delay: 25, duration: 200 }}>
    <!-- Navigation bar -->
    <div class="top-0 z-10 h-16">
      <div class="flex justify-between">
        <div
          class="flex h-12 w-12 justify-around rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:ring-zinc-200 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        >
          <a aria-label="Home" class="block" href="/">
            <img alt="Eugenio" src={eugenio} decoding="async" class="mt-0.5 h-11 w-11 rounded-full" style="color: transparent;" />
          </a>
        </div>
        <div class="flex flex-col">
          <!-- Mobile Nav Dropdown Button Starts -->
          <div class="xs:hidden">
            <button
              use:menu.button
              type="button"
              aria-label="Toggle Mobile Menu"
              class="rounded-full bg-white/90 px-3 py-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <OutlineIcons icon="rocket-launch" classValue="h-6 w-6 stroke-zinc-500" />
            </button>
          </div>
          <!-- Mobile Nav Dropdown Button Ends -->
          <nav class="hidden xs:block">
            <ul
              class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur hover:ring-zinc-200 dark:bg-zinc-800/90 dark:text-zinc-300 dark:ring-white/10 dark:hover:ring-zinc-700 lg:text-base"
            >
              {#each routes as route}
                <li><a class="relative block px-3 py-2 transition hover:text-sky-500 dark:hover:text-sky-400" href={route.href}>{route.name}</a></li>
              {/each}
            </ul>
          </nav>
        </div>
        <div class="hidden xs:flex">
          <button
            type="button"
            aria-label="Toggle dark mode"
            class="group rounded-full bg-white/90 px-3 py-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:ring-zinc-200 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            on:click={toggleDarkMode}
          >
            <OutlineIcons icon="light-theme-icon" classValue="h-6 w-6 fill-none stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:hidden" />
            <OutlineIcons icon="dark-theme-icon" classValue="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block" />
          </button>
        </div>
      </div>
      <!-- Mobile Menu Starts  -->
      {#if showMobileMenu}
        <!-- This is the blur section for mobile menu. -->
        <div class="fixed inset-0 z-10 w-screen bg-zinc-800/40 backdrop-blur dark:bg-black/60" aria-hidden="true" />
        <div
          use:menu.items
          in:fly={{ duration: 200, x: 0, y: 50, opacity: 0.5, easing: quintOut }}
          out:fly={{ duration: 200, x: 0, y: 50, opacity: 0.5, easing: quintIn }}
          class="fixed inset-x-3 top-6 z-20 origin-top rounded-2xl bg-white px-6 pb-6 pt-12 text-base font-medium text-zinc-800 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-500/20 xs:hidden"
          tabindex="-1"
        >
          <div class="flex flex-col">
            <div class="absolute right-2 top-2">
              <button
                type="button"
                aria-label="Toggle close"
                class="group rounded-full bg-white/90 px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:ring-zinc-200 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                on:click={menu.close}
              >
                <OutlineIcons icon="x-mark" classValue="h-6 w-6 fill-none stroke-zinc-500 transition dark:stroke-zinc-500" />
              </button>
            </div>
            <div class="absolute right-2 top-16">
              <button
                type="button"
                aria-label="Toggle dark mode"
                class="group rounded-full bg-white/90 px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:ring-zinc-200 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                on:click={toggleDarkMode}
              >
                <OutlineIcons icon="light-theme-icon" classValue="h-6 w-6 fill-none stroke-zinc-500 transition dark:hidden" />
                <OutlineIcons icon="dark-theme-icon" classValue="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block" />
              </button>
            </div>
            <div class="space-y-4">
              {#each routes as route}
                <a use:menu.item class="block leading-7 tracking-tight" href={route.href}>{route.name}</a>
              {/each}
            </div>
          </div>
        </div>
      {/if}
      <!-- Mobile Menu Ends -->
    </div>
  </header>
{/key}
