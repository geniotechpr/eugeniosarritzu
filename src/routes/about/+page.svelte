<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import Testimonial from '#/lib/Testimonial.svelte';
  import Timeline from '#/lib/Timeline.svelte';
  import type { TimelineBlock } from '#/lib/types/custom-types';

  const euPortrait = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738115/eugeniosarritzu.com/eu-portrait_qxgzva.png';
  const euMadre = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738102/eugeniosarritzu.com/eu-mami_iannhc.jpg';
  const eugenio = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738148/eugeniosarritzu.com/euSquare_yrlclj.png';

  const careerBlocks: TimelineBlock[] = [
    {
      date: 'Dec 2019',
      title: 'College Graduate',
      description: "Completed my bachelor's degree in Computer Science at NC State University."
    },
    {
      date: 'Aug 2020',
      title: 'Software Engineer',
      description: 'Contributed to the code base of the largest asset manager in the world, BlackRock.'
    },
    {
      date: 'Sept 2021',
      title: 'Freelance Developer',
      description: 'Worked on a variety of web development & software engineering projects.'
    },
    {
      date: 'May 2022',
      title: 'Technical Writer',
      description: 'Collaborated with scrum teams to create technical documentation for the technology organization at Abarca Health.'
    },
    {
      date: 'October 2022 - Present',
      title: 'Technical Solutions Consultant',
      description:
        'I work with prospects to understand their business problems and build PoC or MVP projects based on their needs with the goal of demonstrating the value of process automation built on the ProcessMaker platform.'
    }
  ];

  const testimonialText = "Eugenio is smart, personable, and a quick learner. He is great at communicating complex topics I don't understand.";
  const name = 'Belinda Abreu';
  const title = 'Unbiased Mother';

  let isPageLoaded = false;
  onMount(() => {
    isPageLoaded = true;
  });
</script>

<svelte:head>
  <title>About · Eugenio Sarritzu Abreu</title>
  <meta name="description" content="About me." />
  <meta property="og:title" content="Eugenio Sarritzu" />
  <meta property="og:description" content="Solutions Consultant & Software Developer." />
  <meta property="og:image" content={eugenio} />
</svelte:head>

{#key isPageLoaded}
  <div class="relative flex w-full" in:fly={{ delay: 150, duration: 200, x: 0, y: 50, opacity: 0, easing: sineIn }}>
    <div class="flex flex-col">
      <h1 class="mx-auto mb-6 mt-2 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 xs:mt-4 md:text-3xl">About</h1>
      <span class="mb-6 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        Hey! Thanks for checking out this page — my personal home on the internet. I'm a technical solutions consultant & full-stack software developer with a
        deep interest in people and technology. I'm currently based in Raleigh, NC but I was born and raised in Puerto Rico, where I also spend some of my time
        every year.
        <br /><br /> I'm passionate about using technology to solve problems and improve quality of life. I specialize in building Proof of Concept (PoC) and
        Minimum Viable Product (MVP) projects to demonstrate the value of a solution and bring an idea to life.
        <br /><br /> When not online, I enjoy hitting the gym, taking walks with my dog, traveling to a new place, and spending quality time with friends and family.
      </span>
      <div class="flex w-full justify-center">
        <img alt="A portrait of myself" src={euPortrait} decoding="async" class="h-auto w-[80vw] rounded-xl opacity-100 xs:w-[60vw] xl:w-[40vw]" />
      </div>
      <span class="mx-auto !mt-3 mb-6 text-sm text-gray-500 dark:text-zinc-400">Portrait from when I visited Las Vegas</span>
      <span class="text-leftt mb-6 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Context</span>
      <span class="mb-8 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        I have purposely tried different kinds of work to find what I enjoy doing the most. Today, as a solutions consultant & engineer I feel like I've found
        the type of role that I can see myself doing for a long time. I've discovered that it's very important for me to connect with people as part of my work.
        <br /><br /> I find fulfillment in using my technical skills to help people solve real problems. As an avid learner, this comes naturally for me — I
        spend
        <em>a lot</em> of my free time learning new skills to understand new ways of solving problems.
      </span>
      <span class="text-leftt mb-16 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Experience</span>
      <Timeline blocks={careerBlocks} />
      <Testimonial imagePath={euMadre} {testimonialText} {name} {title} />
      <span class="text-leftt mb-6 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Collaboration</span>
      <span class="mb-8 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        I'm open to collaborating on interesting projects or ideas. If you have a project that you'd like to discuss, please send me a direct message via <span
          class="text-sky-500 hover:text-sky-800"
          ><a href="https://www.linkedin.com/in/geniotechpr/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span
        >.
      </span>
      <span class="text-leftt mb-6 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Technology Stack</span>
      <span class="mb-3 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        This website is built using the technologies below. It is also <span
          class="underline decoration-zinc-500 decoration-2 underline-offset-4 hover:decoration-sky-500"
          ><a href="https://github.com/geniotechpr/eugeniosarritzu.com" target="_blank" rel="noopener noreferrer">open source via Github</a></span
        >.
      </span>
      <ul class="list-inside list-disc text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
        <li>Svelte → Component Framework</li>
        <li>TailwindCSS → Styling</li>
        <li>SvelteKit → Application Framework</li>
        <li>TypeScript → Client & Server Side Code</li>
        <li>Vercel → Deployment & Hosting</li>
      </ul>
    </div>
  </div>
{/key}
