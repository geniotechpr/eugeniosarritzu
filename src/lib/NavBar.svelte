<script lang="ts">
  import homeIcon from '#/lib/heroicons/outline/homeIcon.svg';
  import squareStack3D from '#/lib/heroicons/outline/squareStack3D.svg';
  import storeFront from '#/lib/heroicons/outline/storeFront.svg';
  import pencilSquare from '#/lib/heroicons/outline/pencilSquare.svg';
  import sparkles from '#/lib/heroicons/outline/sparkles.svg';

  //TODO: Define a property here to pass from the page you are currently on to show the specific
  // element in the navbar as selected by applying a class conditionally

  //Continue here:
  // 1. Look up the tailwind cheat sheet to learn a little more about all the classes, particularly about flex
  // 2. Copy all the links/divs and start from scratch below in a new div and start applying classes as needed
  // 3. Center the icons with the text on the same line
</script>

<div class="relative bg-white">
  <div class="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
  <div class="relative z-20">
    <div class="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
      <div class="hidden md:flex md:flex-1 md:items-center">
        <nav class="flex space-x-10 text-base font-medium text-gray-600">
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <a href="#">
            <div class="hover:bg-blue-50">
              <img src={homeIcon} alt="Home" /> Home
            </div>
          </a>
          <a href="#">
            <div class="hover:text-gray-900">
              <img src={squareStack3D} alt="Projects" /> Projects
            </div>
          </a>
          <a href="#">
            <div class="hover:text-gray-900">
              <img src={storeFront} alt="Products" /> Products
            </div>
          </a>
          <a href="#">
            <div class="hover:text-gray-900">
              <img src={pencilSquare} alt="Blog" /> Blog
            </div>
          </a>
          <a href="#">
            <div class="hover:text-gray-900">
              <img src={sparkles} alt="About" /> About
            </div>
          </a>
        </nav>
      </div>
    </div>
  </div>
</div>
