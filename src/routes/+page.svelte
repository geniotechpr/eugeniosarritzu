<script>
  import HomeHeader from '#/lib/HomeHeader.svelte';
  import HomePreview from '#/lib/HomePreview.svelte';

  const eugenio = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738148/eugeniosarritzu.com/euSquare_yrlclj.png';
</script>

<svelte:head>
  <title>Home · Eugenio Sarritzu Abreu</title>
  <meta name="description" content="Solutions Consultant & Software Developer." />
  <meta property="og:title" content="Eugenio Sarritzu" />
  <meta property="og:description" content="Solutions Consultant & Software Developer." />
  <meta property="og:image" content={eugenio} />
</svelte:head>

<div class="flex-col">
  <HomeHeader />
  <HomePreview />
</div>

<!--
  /**
   * Example of calling an API endpoint hosted on a Vercel serverless function (python in this case, deployed in a separate project/repo) after 
   * setting it up in vercel.json config file. To see an example of the previously configured vercel.json file, see previous commits. Also 
   * relevant for this to work is vite.config.js file, which is configured to proxy requests to /api-hello to the vercel serverless function.
   * See previous commits for an example as well. 
   *
   * Note that this function belongs in the <script> tag, not here. 
   *
   *  
  async function getData() {
    const response = await fetch('/api-hello');
    const data = await response.text();
    console.log(data);
    return data;
  } */ -->

<!-- Example of using await block to make api call via getData() 
{#await getData()}
  <p>Loading...</p>
{:then data}
  <p>{JSON.stringify(data)}</p>
{/await} -->
