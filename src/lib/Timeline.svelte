<script lang="ts">
  import type { TimelineBlock } from '#/lib/types/custom-types';

  export let blocks: TimelineBlock[] = [];
</script>

<div class="-mt-8 max-w-7xl px-6 lg:px-8">
  <div class="grid max-w-2xl grid-cols-1 gap-8 overflow-hidden">
    {#each blocks as block}
      <div>
        <time datetime="2021-08" class="flex items-center text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400">
          <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </svg>
          {block.date}
          <div class="absolute h-px w-1/2 -translate-x-full bg-gray-900/10 dark:bg-zinc-700 sm:-ml-4" aria-hidden="true" />
        </time>
        <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-zinc-300">{block.title}</p>
        <p class="mt-1 text-base leading-7 text-gray-600 dark:text-zinc-400">
          {block.description}
        </p>
      </div>
    {/each}
  </div>
</div>
