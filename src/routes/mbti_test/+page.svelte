<script>
    import { page } from '$app/stores';
    import Main from '/src/lib/mbti/Main.svelte';
    import "/src/app.css";
    import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
    
    let is_init_done = false
    let TestData 
    let test_title = "loading.."
    let error_log = ""
    // let endpoint_name = $page.params.slug
    let endpoint_name = "mbti_form"
    console.log(endpoint_name)
    
    async function load_mbti_data(){
        try{
            const res = await fetch("/mbti_config/"+endpoint_name+".json")
            TestData = await res.json()
            test_title = TestData.title
            is_init_done = true
        } catch (err) {
            console.log(err)
            error_log = err
            test_title = "잘못된 접근입니다"
        }
    }

    onMount(() => {
        load_mbti_data();
	});

</script>

<svelte:head>
    <!-- <title>{test_title} - {$page.params.slug}</title> -->
    <title>{test_title}</title>
</svelte:head>

<main>
    <!-- dynamic page name : {$page.params.slug}<hr><br> -->

    <div class="card main-view">
        <div class="" in:fade="{{delay:200, duration:500}}">
            {#if is_init_done}
                <Main TestData={TestData}>
                </Main>
            {:else if error_log}
                {test_title} - {endpoint_name}
                <hr><br>
                error log -----
                <pre>{error_log}</pre>
            {:else}
                {test_title} - {endpoint_name}
            {/if}
        </div>
    </div>

</main>

<style>
    .main-view {
        width: 50%;
        min-width: 500px;
    }
    .card {
      margin: 10px;
      padding: 10px 20px;
      line-height: 40px;
      background-color: rgba(255, 255, 255, 0.1);
      transition: 1s;
    }
  </style>
