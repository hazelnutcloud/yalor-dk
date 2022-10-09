<script>
	import LogoButton from '../LogoButton.svelte';
	import ProfileButton from '../ProfileButton.svelte';
	import SearchBar from '../SearchBar.svelte';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
</script>

<header class="navbar bg-base-300 max-h-16 lg:gap-6 shadow-md lg:px-4 px-2 justify-between">
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current lg:hidden"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
		<LogoButton />
	</div>
	<div class="flex gap-4">
		<ThemeSwitcher />
		<SearchBar />
		<ProfileButton />
	</div>
</header>
