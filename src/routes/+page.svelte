<script>
  import HomeHeader from '#/lib/HomeHeader.svelte';

  /**
   * Example of calling an API endpoint hosted on a Vercel serverless function (python in this)
   * 
  async function getData() {
    const response = await fetch('/api-hello');
    const data = await response.text();
    console.log(data);
    return data;
  } */
</script>

<svelte:head>
  <title>Home · Eugenio Sarritzu Abreu</title>

  <!-- TODO: update this -->

  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- TODO: Use Tailwind UI component to highligh 2-3 blog posts & 2-3 projects in the homepage when you have that ready. -->
<div>
  <HomeHeader />
</div>
<div class="mt-12 text-center"><span>Maybe add a small intro message here & the tech stack / skills used to build this site.</span></div>

<!-- Example of using await block to make api call via getData() -->
<!--
{#await getData()}
  <p>Loading...</p>
{:then data}
  <p>{JSON.stringify(data)}</p>
{/await} -->
