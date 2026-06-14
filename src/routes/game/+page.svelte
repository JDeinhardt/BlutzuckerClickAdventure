<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { getBodyParts } from "$lib";
  import type { BodyPart } from "$lib/types";
  import back_arrow from "$lib/assets/arrow-back.svg";

  const bodyParts: BodyPart[] = getBodyParts();

  const name = page.url.searchParams.get("name");

  function selectOrgan(selectedOrgan: string) {
    goto(`/selected?name=${name}&organ=${selectedOrgan}`);
  }
</script>

<div class="flex items-center content-center flex-col h-full justify-center">
  <a class="border-white border-4 rounded-full absolute top-4 left-4" href="/">
    <img src={back_arrow} alt="Pfeil zurück" class="h-12" />
  </a>

  <h1 class="text-center text-6xl mb-8 underline">{name}</h1>

  <div class="flex justify-around w-250">
    <div class="relative h-125 w-50">
      <img src="/assets/human.svg" alt="human" class="h-full w-full" />

      <button id="leber" onclick={() => selectOrgan("leber")}>
        <img
          src="/assets/Leber.png"
          alt="Leber"
          class="absolute h-20 top-40 left-8"
        />
      </button>

      <button
        id="bauchspeicheldruese"
        onclick={() => selectOrgan("bauchspeicheldrüse")}
      >
        <img
          src="/assets/BSD.png"
          alt="Bauchspeicheldrüse"
          class="absolute h-16 top-48 left-18"
        />
      </button>

      <button id="zahn" onclick={() => selectOrgan("zahn")}>
        <img
          src="/assets/Zahn.png"
          alt="Zahn"
          class="absolute h-10 top-14 left-28"
        />
      </button>

      <button id="gehirn" onclick={() => selectOrgan("gehirn")}>
        <img
          src="/assets/Gehirn.png"
          alt="Gehirn"
          class="absolute h-20 top-0 left-14"
        />
      </button>

      <button id="blutbahn" onclick={() => selectOrgan("blutbahn")}>
        <img
          src="/assets/Blutbahn.png"
          alt="Blutbahn"
          class="absolute h-20 top-90 left-28"
        />
      </button>

      <button id="fettzellen" onclick={() => selectOrgan("fettgewebe")}>
        <img
          src="/assets/Fettzellen.png"
          alt="Fettzellen"
          class="absolute h-20 top-38 left-38"
        />
      </button>

      <button id="darm" onclick={() => selectOrgan("darm")}>
        <img
          src="/assets/Darm.png"
          alt="Darm"
          class="absolute h-26 top-58 left-11.5"
        />
      </button>

      <button id="herz" onclick={() => selectOrgan("herz")}>
        <img
          src="/assets/Herz.png"
          alt="Herz"
          class="absolute h-20 top-32 left-22"
        />
      </button>
    </div>
    <div
      class="flex flex-col space-y-4 justify-center border-white border-2 rounded-4xl p-8"
    >
      {#each bodyParts as part}
        <a
          href="/selected/?name={name}&organ={part.name}"
          title="play as {name}"
          class="text-4xl underline"
          >{part.name}
        </a>
      {/each}
    </div>
  </div>
</div>

<!-- {#each bodyParts as part}
    <a href="/selected/?name={part.name}">{part.name}</a>
  {/each} -->
