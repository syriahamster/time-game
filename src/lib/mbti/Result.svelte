<script>
	import { onMount } from "svelte";
    export let Answers
    export let TestData

    let calculateOrder = TestData.qtypes_order
    let mbtiPersonalities = TestData.personalities
    let userMBTI = "unknown"
    let userCharacter = {}

    const calculateMBTI = () => {
        let MBTI = ""
        for(let qtype of calculateOrder){
            let answer_arr = Answers[qtype]
            let characterType = getMostFrequentItem(answer_arr)
            MBTI += characterType
        }
        return MBTI
    }

    const getMostFrequentItem = (arr) => {
        let arrItems = {}
        let maxInfo = {"cnt":0, "item":null}

        arr.forEach(e => {
            arrItems[e] = !!arrItems[e] ? arrItems[e] + 1 : 1
        });

        console.log(arrItems)
        
        for (let [item, cnt] of Object.entries(arrItems)){
            if (cnt > maxInfo.cnt){
                maxInfo.cnt = cnt
                maxInfo.item = item
            } 
        }

        return maxInfo.item
    }

    onMount(() => {
        userMBTI = calculateMBTI()
        console.log(userMBTI)

        userCharacter = mbtiPersonalities[userMBTI]

    })

</script>

<div class="card justify-center items-center">
    MBTI : {userMBTI}
    <hr>
    {userCharacter.name}<br>
    {userCharacter.info}
</div>
