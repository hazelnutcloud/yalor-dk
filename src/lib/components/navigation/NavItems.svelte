<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<li>
	<a href="/builder" class="flex gap-4 py-4" class:bg-secondary={$page.routeId === 'builder'}
		><Icon icon="heroicons:sparkles-solid" class="scale-[2] ml-2" /><span
			class="lg:invisible group-hover:visible">Builder</span
		></a
	>
</li>
<li>
	<a href="/decks" class="flex gap-4 py-4" class:bg-secondary={$page.routeId === 'decks'}
		><Icon icon="bxs:carousel" class="scale-[1.7] ml-2" /><span
			class="lg:invisible group-hover:visible">Decks</span
		></a
	>
</li>
