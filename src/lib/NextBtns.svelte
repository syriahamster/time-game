<script>
    import { fade } from 'svelte/transition';
    export let isAlive
    export let nextQuestion
    export let retry
    let url = "https://time-game.pages.dev/"
</script>

<div in:fade="{{delay:2400, duration:500}}">
    {#if isAlive()}
        <button class="btn btn-outline" on:click={() => nextQuestion()}
            >다음문제</button
        >

    {:else}
        <div>게임이 끝났습니다</div>
        <div>공유하기</div>
        <!-- share to twitter -->
        <div>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a
                href="https://twitter.com/intent/tweet?text=한국인 상식수준 측정기&url={url}"
                class="btn m-2"
                data-size="large"
                target="_blank"
                data-show-count="false">트위터로 공유하기</a>
        </div>
        <!-- share to facebook -->
        <div>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a
                href="https://www.facebook.com/sharer/sharer.php?u={url}"
                class="btn m-2"
                data-size="large"
                target="_blank"
                data-show-count="false">페이스북으로 공유하기</a>
        </div>
        <!-- share copy link -->
        <div>
            <button class="btn m-2" on:click={() => {
                navigator.clipboard.writeText(url)
                window.alert("링크가 복사되었습니다")
            }}>링크 복사하기</button>

            </div>

        <button class="btn btn-outline" on:click={() => retry()}
            >다시하기</button
        >
    {/if}
</div>