<script>
    import { fade } from 'svelte/transition';
    export let isAlive
    export let nextQuestion
    export let retry
    export let score
    export let score_level

    let url = "https://time-game.pages.dev/"
</script>

<div in:fade="{{delay:2400, duration:500}}">
    {#if isAlive()}
        <button class="btn btn-outline dark:text-white" on:click={() => nextQuestion()}
            >다음문제</button
        >
    {:else}
        <div class="w-full flex flex-col justify-center items-center">
            <div class="font-bold">게임이 끝났습니다</div>
            <br>
            <div class="font-bold text-center">게임결과 당신의 레벨은 <br>"{score_level}"로 측정되었습니다.</div>
            <br>
            <div class="font-bold">게임 공유하기</div>
            <!-- share copy link -->
            
            <div class="button_group">
                <button class="btn mb-2 gap-2" on:click={() => {
                    navigator.clipboard.writeText(url)
                    window.alert("링크가 복사되었습니다")
                }}>
                <i class="fa-solid fa-share-nodes"></i>
                링크 복사</button>
            <!-- share to twitter -->
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a
                    href={`https://twitter.com/intent/tweet?text=포인트 ${score}을 획득했습니다! \n당신은 맞출 수 있나요?&url=${url}`}
                    class="btn mb-2 gap-2"
                    data-size="large"
                    target="_blank"
                    data-show-count="false">
                    <i class="fa-brands fa-twitter"></i>
                <!-- <img src="/twittericon.png" alt="twitter" width="20px"/> -->
                    <!-- <span>
                        트위터로 공유하기
                    </span> -->
                </a>
            <!-- share to facebook -->
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a
                    href="https://www.facebook.com/sharer/sharer.php?u={url}"
                    class="btn mb-2 gap-2"
                    data-size="large"
                    target="_blank"
                    data-show-count="false">
                    <i class="fa-brands fa-facebook"></i>
                    <!-- 페이스북으로 공유하기</a> -->
                    </a>
            </div>
            <!-- <br> -->
            <div class="button_group">
                <button class="btn btn-warning " on:click={() => retry()}
                    >게임 다시하기</button>
                <a href="/kor_history"><button class="btn btn-primary">다른 게임 보기</button></a>
            </div>
            <!-- <br> -->
        </div>

    {/if}
</div>

<style>
.button_group {
    margin: 10px 10px;
}
</style>