<script>
	import '../app.postcss';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
</script>

<Header />
<div class="wrapper min-h-screen text-center flex items-center justify-center bg-orange-50"><slot/></div>
<Footer/>