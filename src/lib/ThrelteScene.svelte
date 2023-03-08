<script lang="ts">
  import * as Threlte from '@threlte/core';
  import * as Three from 'three';
  import test from '#/lib/images/mid-test.png';
</script>

<div class="mx-auto flex h-36 max-w-xs xs:h-48">
  <Threlte.Canvas>
    <!-- Camera -->
    <Threlte.PerspectiveCamera position={{ x: 20, y: 10, z: 20 }} fov={30}>
      <!-- Controls -->
      <Threlte.OrbitControls autoRotate />
    </Threlte.PerspectiveCamera>

    <!-- Lights the scene equally -->
    <Threlte.AmbientLight color="white" intensity={0.6} />

    <!-- Sphere -->
    <Threlte.Mesh
      geometry={new Three.BoxGeometry(10, 10, 10)}
      material={new Three.MeshStandardMaterial({ transparent: false, map: new Three.TextureLoader().load(test) })}
      position={{ y: 0.5 }}
      receiveShadow
      castShadow
    />
  </Threlte.Canvas>
</div>
