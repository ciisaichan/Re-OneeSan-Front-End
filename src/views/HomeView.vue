<script setup lang="ts">
import IllustFallView from "@/components/IllustFallView.vue";
import {ref} from "vue";
import type {IllustCardArray} from "@/types";

const testList = ref<IllustCardArray>([
    {
        illustID: "61282267",
        title: "けものフレンズ",
        artist: "晴瀬ひろき",
        regularImg: "pixiv/img-master/img/2017/02/05/00/01/33/61282267_p0_master1200.jpg",
        originalImg: "https://i.pixiv.re/img-original/img/2017/02/05/00/01/33/61282267_p0.jpg",
        tags: ["けものフレンズ", "サーバル", "かばん", "逆光"]
    },
    {
        illustID: "67232472",
        title: "お正月",
        artist: "太もも",
        regularImg: "pixiv/img-master/img/2018/02/12/13/19/41/67232472_p0_master1200.jpg",
        originalImg: "https://i.pixiv.re/img-original/img/2018/02/12/13/19/41/67232472_p0.png",
        tags: ["アズールレーン", "ラフィー", "綾波"]
    },
    {
        illustID: "108189109",
        title: "パム",
        artist: "Fukuro袋子",
        regularImg: "pixiv/img-master/img/2023/05/17/00/30/07/108189109_p0_master1200.jpg",
        originalImg: "https://i.pixiv.re/img-original/img/2023/05/17/00/30/07/108189109_p0.jpg",
        tags: ["崩壊スターレイル", "黒スト", "巨乳", "帕姆"]
    },
])

</script>

<template>
    <IllustFallView :list="testList"/>
</template>
