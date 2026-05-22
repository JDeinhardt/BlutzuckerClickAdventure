<script lang="ts">
  import { page } from "$app/state";
  import { getBodyPartByName } from "$lib";
  import back_arrow from "$lib/assets/arrow-back.svg";
  import { onMount } from "svelte";

  const name = page.url.searchParams.get("name");

  const organ = page.url.searchParams.get("organ")!;
  const bodyPart = getBodyPartByName(organ);

  const isLastPart = () => part >= bodyPart!.speach.length - 1;

  let displayed = $state("");
  let part = $state(0);

  let fullText = $derived(bodyPart!.speach[part]);

  const delay = 30;

  let disabled = $state(true);

  onMount(() => {
    typeWriter();
  });

  const typeWriter = () => {
    displayed = "";

    disabled = true;

    let i = 0;

    const interval = setInterval(() => {
      displayed += fullText[i];
      i++;

      if (i >= fullText.length) {
        clearInterval(interval);

        // nur aktivieren wenn weiterer part existiert
        disabled = part >= bodyPart!.speach.length - 1;
      }
    }, delay);
  };

  const goNextPart = () => {
    if (part >= bodyPart!.speach.length - 1) return;

    part++;

    fullText = bodyPart!.speach[part];

    typeWriter();
  };
</script>

<div class="h-dvh flex items-center justify-between">
  <a
    class="border-black border-4 rounded-full absolute top-4 left-4"
    href="/game?name={name}"
  >
    <img src={back_arrow} alt="Pfeil zurück" class="invert h-12" />
  </a>

  <img
    src={bodyPart?.img_src}
    alt={bodyPart?.name}
    class="h-[80%] w-auto ml-10 max-w-120 object-contain"
  />

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
      class={`text-xl font-semibold p-4 rounded-xl text-white mt-4 transition-colors ${
        disabled ? "bg-gray-500 cursor-not-allowed" : "bg-red-800"
      }`}
      onclick={goNextPart}
      {disabled}
    >
      {isLastPart() ? "Fertig" : "Weiter..."}
    </button>
  </div>
</div>
