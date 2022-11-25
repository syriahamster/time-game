<script>
	import '/src/app.css';
</script>

<svelte:head>
	<title>연도 게임</title>
</svelte:head>

<main class="bg-white dark:bg-slate-800">
	<div class="flex flex-col h-screen p-4">
		<h2 class="service_title">연도 맞추기</h2>
		<br>
		<a href="/kor_history"><button class="btn">근현대 한국사</button></a>
		<a href="/kor_trand"><button class="btn">최신 트랜드</button></a>
		<a href="/world_history"><button class="btn">근현대 세계사</button></a>
	</div>
</main>

<style>
	
.service_title{
    font-size: 35px;
    font-weight: 700;
}
.btn {
	margin: 10px 10px;
}
</style>