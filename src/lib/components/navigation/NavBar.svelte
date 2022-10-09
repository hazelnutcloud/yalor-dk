<script>
	import LogoButton from '../LogoButton.svelte';
	import ProfileButton from '../ProfileButton.svelte';
	import SearchBar from '../SearchBar.svelte';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
</script>

<header class="navbar bg-base-300 max-h-16 gap-6 shadow-md px-4">
	<LogoButton />
	<div class="flex-1" />
	<ThemeSwitcher />
	<SearchBar />
	<ProfileButton />
</header>
