<script lang="ts">
	import Router from 'svelte-spa-router';
	import Home from './routes/Home.svelte';
	import Detail from './routes/Detail.svelte';
	import New from './routes/New.svelte';

	const routes = {
		'/': Home,
		'/todos/detail': Detail,
		'/todos/new': New,
	};
</script>

<main>
  <Router {routes}/>
</main>
