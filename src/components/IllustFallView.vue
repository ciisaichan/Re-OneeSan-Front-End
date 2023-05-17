<script setup lang="ts">
import {LazyImg, Waterfall} from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
import type {IllustCardArray} from '@/types'
import type {PropType} from "vue";

const props = defineProps({
    list: {
        type: Object as PropType<IllustCardArray>
    }
})

function handleImgClick(url: string) {
    window.open(url, '_blank')
}

</script>

<template>
    <Waterfall :list="list" :width="350" :gutter="0">
        <template #item="{ item }">
            <div class="card card-compact shadow-md m-3 rounded-lg overflow-hidden">
                <div class="overflow-hidden" @click="handleImgClick(item.originalImg)">
                    <LazyImg class="cursor-pointer transition-all duration-150 ease-linear hover:scale-105" :url="item.regularImg"/>
                </div>
                <div class="card-body">
                    <a :href="'https://www.pixiv.net/artworks/' + item.illustID" target="_blank" class="card-title">{{ item.title }}</a>
                    <p>作者：{{ item.artist }}</p>
                    <!-- p class="text-rose-500">！测试数据</p -->
                    <div class="card-actions justify-end">
                        <div v-for="(tag, index) in item.tags" :key="index" class="badge badge-outline">
                            {{ tag }}
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Waterfall>
</template>

<style scoped>

</style>