<script>
  import HomeHeader from '#/lib/HomeHeader.svelte';

  async function getData() {
    const response = await fetch('/api-hello');
    const data = await response.json();
    return data;
  }
</script>

<svelte:head>
  <title>Home · Eugenio Sarritzu Abreu</title>

  <!-- TODO: update this -->

  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <HomeHeader />
</section>

{#await getData()}
  <p>Loading...</p>
{:then data}
  <p>{JSON.stringify(data)}</p>
{/await}
