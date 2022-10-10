<script lang="ts">
	import Card from '$lib/components/lor-card/Card.svelte';
	import Tooltip from '$lib/components/lor-card/Tooltip.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.card}
	{@const card = data.card}
	<div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 w-full max-w-screen-lg p-8">
		<div class="lg:w-full max-w-xs w-56">
			<Card {card} showTooltips={'left'} />
		</div>

		<div class="w-full z-10">
			<div class="text-3xl font-bold">{card.name}</div>
			<div class="divider" />
      <div class="block lg:hidden">
        {#each card.keywordRefs as keywordRef}
          <Tooltip ref={keywordRef} type={"keywords"} />
        {/each}
      </div>
		</div>
	</div>
{:else}
	<div class="">Whoosh.. nothing here...</div>
{/if}
