<script lang="ts">
	import { getDescriptionFromRef, getNameFromRef } from '$lib/utils/helpers';
	import type { MetadataType } from '$lib/utils/types';

	export let ref: string;
	export let type: MetadataType;

	const description = getDescriptionFromRef(ref, type);
	const name = getNameFromRef(ref, type);
</script>

<div class="px-6 pb-4 bg-base-300 border-primary flex flex-col items-center rounded-xl shadow-lg">
	<div class="divider font-bold text-lg">{name}</div>
	{description}
</div>
