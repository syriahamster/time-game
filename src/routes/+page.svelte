<script>
	import '/src/app.css';

    //getting game_config json files
    const gameConfigs = import.meta.glob("/static/game_config/*.json",{'as':'raw'});
    // console.log(gameConfigs)
	let is_init_done = false
	let game_name_list = []
	let game_obj_list = []

    for (const configPath in gameConfigs) {
        // console.log(configPath)
        // console.log(gameConfigs[configPath])
		let gameConfObj
		let game_name = configPath.replace('/static/game_config/',"").replace('.json',"")
		game_name_list.push(game_name)
		gameConfigs[configPath]().then((res) => {
			gameConfObj = JSON.parse(res)
			gameConfObj.game_name = game_name
			// console.log(gameConfObj)
			game_obj_list.push(gameConfObj)
		});
    }
	is_init_done = true

</script>

<svelte:head>
	<title>타임 게임</title>
</svelte:head>

<main class="bg-white dark:bg-slate-800">
	<div class="flex flex-col h-screen p-4 items-center">
		<h2 class="service-title dark:text-white">타임 게임 메인</h2>
		<br>
		<hr>
		<div>
			<!-- <a href="/kor_history"><button class="btn">근현대 한국사</button></a> -->
			{#if is_init_done}
			<!-- {#each game_obj_list as {game_name, title}, i} -->
			<!-- <a href="/{game_name}"><button class="btn">{i}. {title}</button></a> -->
			{#each game_name_list as game_name, i}
				<a href="/{game_name}"><button class="btn">{i+1}. {game_name}</button></a>
				<!-- <span>{game_name}</span> -->
			{/each}

			<a href="/mbti_test"><button class="btn">mbti_test</button></a>
			
			{/if}
		</div>
	</div>
</main>

<style>
	
.service-title{
    font-size: 35px;
    font-weight: 700;
}
.btn {
	margin: 10px 10px;
}
</style>