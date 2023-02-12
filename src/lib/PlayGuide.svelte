<script>
    import { fade, fly } from "svelte/transition";
    export let isShowPlayguide = false
    export let quizTitle
    export let quizIntro
    export let playDesc
</script>


<div class="custom-modal flex flex-col justify-center items-center" 
    in:fly={{delay:400, duration:500, opacity:0, y:-20}} 
    out:fly={{duration:500, opacity:0, y:-20}}>

    <h2 class="quizTitle m-2"> {quizTitle} </h2>

    <h4 class="quiz-intro m-2"> {@html quizIntro} </h4>

    <br>
    
    <div class="play-description m-2">
        {#each playDesc as descItem}
        
        <pre class="desc-item">{descItem}</pre>
        
        {/each}
    </div>
    
    <br>
    <button class="btn btn-info" on:click={() => {isShowPlayguide = !isShowPlayguide}}> 닫기 </button>

</div>

<div class="custom-modal-background" in:fade={{delay:0, duration:400}} out:fade={{delay:400, duration:300}}>
</div>

<style>
.custom-modal {
    padding : 7% 7%;
    background-color: rgba(50,50,50,0.85);
    color: #ffffff;
    /* display: none; */
    position: absolute;
    border-radius: 20px;
    top: 10%;
    left: 7%;
    width: 86%;
    height: auto;
    z-index: 1;
}
.custom-modal-background {
    background-color: rgba(20,20,20,0.7);
    /* display: none; */
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 80vh;
    z-index: 0;
}

.quizTitle {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
}

.quiz-intro {
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    width: 90%;
    margin : 0 5%;
}

.play-description {
    font-size: 12px;
    font-weight: 300;
    line-height: 30px;
    width: 100%;
}

.desc-item {
    line-break: inherit;
    white-space: pre-wrap;
}

</style>