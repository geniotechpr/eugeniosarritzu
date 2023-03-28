<script lang="ts">
  import MockTestimonial from '#/lib/MockTestimonial.svelte';
  import Timeline from '#/lib/Timeline.svelte';
  import euPortrait from '#/lib/images/eu-portrait.png';
  import type { TimelineBlock } from '#/lib/types/custom-types';

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
        'I work with clients to understand their unique needs for business process automation and build PoC or MVP projects based on their needs to demonstrate the value of solutions built on the processmaker platform.'
    }
  ];
</script>

<svelte:head>
  <title>About · Eugenio Sarritzu Abreu</title>

  <!-- TODO: update this -->

  <meta name="description" content="About this app" />
</svelte:head>

<div class="relative flex w-full">
  <div class="flex flex-col">
    <h1 class="mx-auto mt-2 mb-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300 xs:mt-4 md:text-3xl">About</h1>
    <span class="mb-6 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
      Hey! Thanks for checking out this page — this is my small corner on the internet. I'm a technical solutions consultant & full-stack software developer
      with a deep interest in people and technology.
      <br /><br /> I'm passionate about using technology to solve problems and improve quality of life. I specialize in building Proof of Concept (PoC) and
      Minimum Viable Product (MVP) projects to demonstrate the value of a solution and bring an idea to life.
      <br /><br /> When not online, I enjoy hitting the gym, taking walks with my dog, traveling to a new place, and spending quality time with friends and family.
    </span>
    <div class="flex w-full justify-center">
      <img alt="Reina & me." src={euPortrait} decoding="async" class="h-auto w-[80vw] rounded-xl opacity-100 xs:w-[60vw] xl:w-[40vw]" />
    </div>
    <span class="mx-auto mb-6 !mt-3 text-sm text-gray-500 dark:text-zinc-400">Portrait from when I visited Las Vegas</span>
    <span class="text-leftt mb-6 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Context</span>
    <span class="mb-8 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
      I have purposely tried different kinds of work to find what I enjoy doing the most. Today, as a solutions consultant/engineer I feel like I've found the
      type of role that I can see myself doing for a long time. I've discovered that it's very important for me to connect with people as part of my work.
      <br /><br /> I find fulfillment in using my technical skills to help people solve real problems. As an avid learner, this comes naturally for me — I spend
      <em>a lot</em> of my free time learning new skills to understand new ways of solving problems.
    </span>
    <span class="text-leftt mb-16 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Experience</span>
    <Timeline blocks={careerBlocks} />
    <MockTestimonial />
    <span class="text-leftt mb-6 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Bio</span>
    <span class="mb-8 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300"> Short bio goes here. </span>
    <span class="text-leftt mb-6 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">Contract Work</span>
    <span class="mb-8 text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300">
      I'm currently available for contract work. If you have a project that you'd like to discuss, please feel free to reach out to me via Twitter or LinkedIn.
    </span>
    <span class="text-leftt mb-6 flex text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300">About this site</span>
    <span class="text-left text-base font-medium tracking-tight text-zinc-600 dark:text-zinc-300"> Tech stack + mention it's open source </span>
  </div>
</div>
