<script>
	import NavItems from "./NavItems.svelte";

</script>
<aside class="hover:w-56 bg-base-200 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-4rem)] w-16 h-[calc(100vh-4rem)] transition-all hidden group lg:block">
  <ul class="menu [&>*]:group-hover:visible">
    <NavItems />
  </ul>
</aside>