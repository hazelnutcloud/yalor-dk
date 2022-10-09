<script lang="ts">
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import NavItems from '$lib/components/navigation/NavItems.svelte';
	import SideBar from '$lib/components/navigation/SideBar.svelte';
	import '../app.css';
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<div class="fixed top-0 left-0 w-full">
			<NavBar />
			<SideBar />
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
			<NavItems />
		</ul>
	</div>
</div>
