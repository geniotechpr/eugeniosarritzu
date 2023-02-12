<script lang="ts">
  import { page } from '$app/stores';

  import HomeIcon from '#/lib/heroicons/outline/HomeIcon.svelte';
  import SquareStack3D from '#/lib/heroicons/outline/SquareStack3D.svelte';
  import StoreFront from '#/lib/heroicons/outline/StoreFront.svelte';
  import PencilSquare from '#/lib/heroicons/outline/PencilSquare.svelte';
  import Sparkles from '#/lib/heroicons/outline/Sparkles.svelte';

  //TODO: Define a property here to pass from the page you are currently on to show the specific
  // element in the navbar as selected by applying a class conditionally

  //Continue here:
  // 1. Look up the tailwind cheat sheet to learn a little more about all the classes, particularly about flex
  // 2. Copy all the links/divs and start from scratch below in a new div and start applying classes as needed
  // 3. Center the icons with the text on the same line
</script>

<header>
  <div class="fixed top-0 left-0 z-20 hidden h-24 w-full bg-white bg-opacity-75 backdrop-blur-xl dark:hidden dark:bg-gray-900 md:block" />
  <div class="z-30 flex w-full justify-center dark:static dark:bg-gray-900 md:sticky md:top-6 md:my-12 dark:md:my-0 dark:md:py-12">
    <div class="inter interactable undefined flex w-full bg-white dark:border-gray-700 dark:bg-gray-800 md:w-auto md:rounded-full md:border md:shadow-sm">
      <nav class="flex text-base font-medium text-gray-600">
        <a href="/">
          <div class="flex space-x-2 py-4 px-5 hover:bg-blue-50">
            <HomeIcon /><span>Home</span>
          </div>
        </a>
        <a href="/projects">
          <div class="flex space-x-2 py-4 px-5 hover:bg-blue-50">
            <SquareStack3D /> <span>Projects</span>
          </div>
        </a>
        <a href="/products">
          <div class="flex space-x-2 py-4 px-5 hover:bg-blue-50">
            <StoreFront /> <span>Products</span>
          </div>
        </a>
        <a href="blog">
          <div class="flex space-x-2 py-4 px-5 hover:bg-blue-50">
            <PencilSquare /> <span>Blog</span>
          </div>
        </a>
        <a href="about">
          <div class="flex space-x-2 py-4 px-5 hover:bg-blue-50">
            <Sparkles /> <span>About</span>
          </div>
        </a>
      </nav>
    </div>
  </div>
</header>
