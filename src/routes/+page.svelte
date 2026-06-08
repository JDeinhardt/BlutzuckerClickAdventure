<script>
  import { goto } from "$app/navigation";

  let name = $state("");

  const start = () => {
    goto(name === "" ? `/game/?name=Hannes` : `/game/?name=${name}`);
  };
</script>

<div class="flex items-center content-center justify-center h-full">
  <div class="h-100 w-150 flex flex-col justify-center text-4xl">
    <label for="name" class="underline">Name eingeben:</label>
    <input
      name="name"
      type="text"
      placeholder="z.B. Hannes"
      class="border-white border-4 rounded-xl p-4 mt-4"
      bind:value={name}
    />
    <button
      class="bg-red-800 text-xl font-semibold p-4 rounded-xl text-white mt-4 transition-colors"
      onclick={start}>Entdeckungsreise Starten!</button
    >
  </div>
</div>
