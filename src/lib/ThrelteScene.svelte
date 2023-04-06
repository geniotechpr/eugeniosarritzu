<script lang="ts">
  import * as Threlte from '@threlte/core';
  import * as Three from 'three';
  import { onMount } from 'svelte';
  import { useTexture } from '@threlte/core';
  import { scale } from 'svelte/transition';

  //Component animation on load
  let isComponentLoaded = false;

  // Build texture, material, and geometry
  const imageForMap = 'https://res.cloudinary.com/dwfeklncf/image/upload/q_auto,f_auto,fl_lossy/v1680738132/eugeniosarritzu.com/eu-reina-home_e102zc.png';
  const map = useTexture(imageForMap);
  const material = new Three.MeshStandardMaterial({
    map: map,
    blending: Three.CustomBlending,
    blendEquation: Three.AddEquation, //default
    blendSrc: Three.SrcColorFactor,
    blendDst: Three.SrcColorFactor,
    color: 'white'
  });
  const geometry = new Three.BoxGeometry(10, 10, 10);

  onMount(() => {
    isComponentLoaded = true;
  });
</script>

{#key isComponentLoaded}
  <div class="mx-auto flex h-36 max-w-xs xs:h-60 xs:max-w-sm" in:scale={{ delay: 0, duration: 200 }}>
    <Threlte.Canvas>
      <!-- Camera -->
      <Threlte.PerspectiveCamera position={{ x: 20, y: 8, z: 20 }} fov={30}>
        <!-- Controls -->
        <Threlte.OrbitControls autoRotate />
      </Threlte.PerspectiveCamera>

      <!-- Lights the scene equally -->
      <Threlte.AmbientLight color="rgb(255,247,230)" intensity={1.1} />

      <!-- Cube -->
      <Threlte.Mesh {geometry} {material} position={{ y: 0.5 }} receiveShadow castShadow />
    </Threlte.Canvas>
  </div>
{/key}
