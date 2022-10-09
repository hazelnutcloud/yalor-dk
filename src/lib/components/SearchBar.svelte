<script lang="ts">
  import Icon from "@iconify/svelte";

  let input: HTMLInputElement;

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "k" && e.ctrlKey) {
      input.focus()
    }
  }
</script>

<svelte:window on:keydown|preventDefault={handleKeydown} />

<div class="rounded-md flex w-full max-w-xs group focus-within:outline outline-1 px-3 bg-base-200">
  <Icon icon="carbon:search" class="w-8" />
  <input type="text" placeholder="Search" class="w-full p-3 focus:outline-none bg-transparent" bind:this={input} />
  <span class="flex gap-2 opacity-50">
    <kbd class="kbg">ctrl</kbd>
    <kbd class="kbg">k</kbd>
  </span>
</div>