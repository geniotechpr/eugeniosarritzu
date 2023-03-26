<script lang="ts">
  import { blur } from 'svelte/transition';

  export let key: string;
  export let duration: number = 300;
</script>

{#key key}
  <div class="absolute inset-0" id="page-transition" in:blur={{ duration, delay: duration }} out:blur={{ duration }}>
    <slot />
  </div>
{/key}
