<script lang="ts">
  import Icon from "@iconify/svelte";

  let input: HTMLInputElement;

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "k" && e.ctrlKey) {
      e.preventDefault()
      input.focus()
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="rounded-2xl flex w-full max-w-xs group focus-within:outline outline-1 px-3 bg-base-200 items-center">
  <div class="w-8">
    <Icon icon="carbon:search" class="w-8" />
  </div>
  <input type="text" placeholder="Search" class="w-full p-2 focus:outline-none bg-transparent" bind:this={input} />
  <span class="gap-2 opacity-50 hidden lg:flex">
    <kbd class="kbg">ctrl</kbd>
    <kbd class="kbg">k</kbd>
  </span>
</div>