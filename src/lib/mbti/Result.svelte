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
            let character_type = getMostFrequentItem(answer_arr)
            MBTI += character_type
        }
        return MBTI
    }

    const getMostFrequentItem = (arr) => {
        let arr_items = {}
        let max_info = {"cnt":0, "item":null}

        arr.forEach(e => {
            arr_items[e] = !!arr_items[e] ? arr_items[e] + 1 : 1
        });

        console.log(arr_items)
        
        for (let [item, cnt] of Object.entries(arr_items)){
            if (cnt > max_info.cnt){
                max_info.cnt = cnt
                max_info.item = item
            } 
        }

        return max_info.item
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
