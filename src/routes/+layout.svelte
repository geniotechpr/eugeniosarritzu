<script lang="ts">
  import '#/app.css';
  import Header from '#/lib/Header.svelte';
  import Footer from '#/lib/Footer.svelte';
  import PageTransition from '#/lib/PageTransition.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  let isPageLoaded = false;

  // On Component Mount, set up load animation
  onMount(() => {
    isPageLoaded = true;
  });
  // Clean up workaround for transitions bug after navigating off the page
  afterNavigate(() => {
    setTimeout(() => {
      if (document?.querySelectorAll('body #page-transition').length > 1) {
        //this means that there's more than one page-transition element in the DOM. Removing the extra one.
        document?.querySelector('#page-transition')?.remove();
      }
    });
  });
</script>

<PageTransition key={data.url} duration={10}>
  <!-- Set main container area and its background color. This is the lowest in the stack (z-index) -->
  <div class="fixed inset-0 -z-50 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
    </div>
  </div>

  <!-- Main layout -->
  <div class="flex w-full flex-col justify-center">
    <!-- Header and main content controlled by same div(s) for spacing and alignment -->
    <div class="flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="mx-auto mt-6 flex w-full flex-col px-5 md:mt-10 md:px-8 lg:mt-12 lg:max-w-6xl lg:px-16">
          <!-- This component contains the mobile nav elements that are higher in the z-index. (modal & blurred effect) -->
          <Header />
          <main class="relative mb-16 flex flex-col">
            <div class="text-zinc-800 dark:text-zinc-300">
              <slot />
            </div>
          </main>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</PageTransition>
