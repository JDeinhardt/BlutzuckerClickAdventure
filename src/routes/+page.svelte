<script lang="ts">
  import { getBodyParts } from "$lib";
  import type { BodyPart } from "$lib/types";

  const bodyParts: BodyPart[] = getBodyParts();
</script>

<div
  class="flex items-center content-center flex-col h-dvh justify-center text-6xl space-y-8"
>
  <h1 class="underline">DEV</h1>
  {#each bodyParts as part}
    <a href="/selected/?name={part.name}">{part.name}</a>
  {/each}
</div>
