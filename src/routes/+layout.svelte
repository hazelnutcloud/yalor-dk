<script lang="ts">
	import NavBar from '$lib/components/navigation/NavBar.svelte';
	import SideBar from '$lib/components/navigation/SideBar.svelte';
	import '../app.css';
</script>

<!-- <div class="w-full h-screen flex flex-col"> -->
	<div class="fixed top-0 left-0 w-full">
		<NavBar />
		<SideBar />
	</div>
	<!-- <div class="flex flex-1"> -->
		<div class="overflow-y-auto overflow-x-hidden h-[calc(100vh-4rem)] mt-16 flex flex-col items-center justify-center w-full">
			<slot />
		</div>
	<!-- </div> -->
<!-- </div> -->
