<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Container } from "@tsparticles/engine";
  import { tsParticles } from "@tsparticles/engine";
  import { loadSlim } from "@tsparticles/slim";

  let container: Container | undefined;

  onMount(async () => {
    await loadSlim(tsParticles);

    container = await tsParticles.load({
      id: "tsparticles",

      options: {
        detectRetina: true,

        fpsLimit: 60,

        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#180000",
          },
        },

        particles: {
          number: {
            value: 45,
          },

          color: {
            value: ["#ff0000", "#ff3d3d", "#ffffff"],
          },

          shape: {
            type: ["circle", "square"],
          },

          opacity: {
            value: 0.28,
          },

          size: {
            value: {
              min: 5,
              max: 16,
            },
          },

          move: {
            enable: true,

            speed: 0.45,

            direction: "none",

            random: true,

            straight: false,

            outModes: {
              default: "out",
            },
          },

          links: {
            enable: true,

            distance: 170,

            color: "#ff1a1a",

            opacity: 0.16,

            width: 1.5,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: false,
            },

            resize: {
              enable: true,
            },
          },
        },
      },
    });
  });

  onDestroy(() => {
    container?.destroy();
    container = undefined;
  });
</script>

<div id="tsparticles" aria-hidden="true"></div>

<style>
  #tsparticles {
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;

    z-index: -1;
  }
</style>
