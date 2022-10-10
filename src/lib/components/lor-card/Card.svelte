<script lang="ts">
	import type { Card } from '$lib/utils/types';
	import Icon from '@iconify/svelte';
	import Tooltip from './Tooltip.svelte';

	export let card: Card;
	export let showTooltips: 'left' | 'right' | undefined = undefined;
	export let showOpenInNew = false;
</script>

<div class="relative">
	<img
		src={card.assets[0].gameAbsolutePath}
		alt={card.name}
		class="peer drop-shadow-lg w-80 aspect-[680/1024]"
		tabindex="0"
	/>
	{#if showTooltips}
		<div
			class="absolute top-0 focus:opacity-100 focus:visible peer-hover:opacity-100 peer-hover:visible peer-focus:visible peer-focus:opacity-100 opacity-0 invisible transition-all w-80 lg:block"
			class:left-[calc(100%+1rem)]={showTooltips === 'right'}
			class:right-[calc(100%+1rem)]={showTooltips === 'left'}
			tabindex="0"
		>
			{#each card.keywordRefs as keywordRef}
				<Tooltip ref={keywordRef} type="keywords" />
			{/each}
		</div>
	{/if}
	<a href="/card/{card.cardCode}" class="absolute top-2 right-2 scale-[2]" class:lg:hidden={!showOpenInNew}>
		<Icon icon="fluent:window-new-24-filled" />
	</a>
</div>
