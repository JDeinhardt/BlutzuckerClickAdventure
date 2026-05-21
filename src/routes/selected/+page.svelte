<script lang="ts">
  import { page } from "$app/state";
  import { getBodyPartByName } from "$lib";
  import back_arrow from "$lib/assets/arrow-back.svg";
  import { onMount } from "svelte";

  const name = page.url.searchParams.get("name")!;
  const bodyPart = getBodyPartByName(name);

  let fullText = bodyPart!.speach[0];

  let displayed = $state("");

  const delay = Math.floor(Math.random() * (75 - 40 + 1)) + 40;

  onMount(() => {
    let i = 0;

    const interval = setInterval(() => {
      displayed += fullText[i];
      i++;

      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, delay);
  });
</script>

<div class="h-dvh flex items-center justify-between">
  <a class="border-black border-4 rounded-full absolute top-4 left-4" href="/">
    <img src={back_arrow} alt="Pfeil zurück" class="invert h-12" />
  </a>

  <img
    src={bodyPart?.img_src}
    alt="Blutbahn"
    class="h-[80%] w-auto ml-10 max-w-120 object-contain"
  />

  <!-- Speech bubble -->
  <div class="m-10 flex flex-col max-w-xl">
    <h1 class="text-4xl font-bold underline underline-offset-4 mb-4">
      {bodyPart?.name}
    </h1>

    <div class="relative">
      <h2 class="text-3xl invisible">
        {fullText}
      </h2>

      <h2 class="text-3xl absolute inset-0">
        {displayed}
      </h2>
    </div>

    <button
      class="text-xl font-semibold bg-red-800 p-4 rounded-xl text-white mt-4"
    >
      Weiter...
    </button>
  </div>
</div>
