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

<div class="h-screen flex items-center">
  <a class="border-black border-4 rounded-full absolute top-8 left-8" href="/">
    <img src={back_arrow} alt="Pfeil zurück" class="invert h-18" />
  </a>

  <img src={bodyPart?.img_src} alt="Blutbahn" class="h-[80%] ml-[8%]" />

  <!-- Speech bubble -->
  <div class="m-10">
    <h1 class="text-4xl font-bold underline underline-offset-4 mb-4">
      {bodyPart?.name}
    </h1>
    <h2 class="text-3xl">{displayed}</h2>
  </div>
</div>
