import { writable } from "svelte/store";

export let count = writable(10)
export let messages = writable([])
export let TestStore = writable({})
export let MBTI_score = writable({})