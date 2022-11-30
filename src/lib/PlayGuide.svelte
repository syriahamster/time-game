<script>
    import { fade, fly } from "svelte/transition";
    export let is_show_playguide = false
    export let quiz_title
    export let quiz_intro
    export let play_desc
</script>


<div class="custom_modal flex flex-col justify-center items-center" 
    in:fly={{delay:400, duration:500, opacity:0, y:-20}} 
    out:fly={{duration:500, opacity:0, y:-20}}>

    <h2 class="quiz_title m-2"> {quiz_title} </h2>

    <h4 class="quiz_intro m-2"> {@html quiz_intro} </h4>

    <br>
    
    <div class="play_description m-2">
        {#each play_desc as desc_item}
        
        <pre class="desc_item">{desc_item}</pre>
        
        {/each}
    </div>
    
    <br>
    <button class="btn btn-info" on:click={() => {is_show_playguide = !is_show_playguide}}> 닫기 </button>

</div>

<div class="custom_modal-background" in:fade={{delay:0, duration:400}} out:fade={{delay:400, duration:300}}>
</div>

<style>
.custom_modal {
    padding : 50px 50px;
    background-color: rgba(50,50,50,0.85);
    color: #ffffff;
    /* display: none; */
    position: absolute;
    border-radius: 20px;
    top: 10%;
    left: 10%;
    width: 80%;
    height: auto;
    z-index: 1;
}
.custom_modal-background {
    background-color: rgba(20,20,20,0.7);
    /* display: none; */
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 80vh;
    z-index: 0;
}

.quiz_title {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
}

.quiz_intro {
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    width: 90%;
    margin : 0 5%;
}

.play_description {
    font-size: 12px;
    font-weight: 300;
    line-height: 30px;
    width: 100%;
}

.desc_item {
    line-break: inherit;
    white-space: pre-wrap;
}

</style>