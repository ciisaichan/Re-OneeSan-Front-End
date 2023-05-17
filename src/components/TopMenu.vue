<script lang="ts" setup>
import {ref} from 'vue';
import type {TopBoxInfo} from '@/types'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/24/solid'

const menuBoxMode = ref<string>('tag-search');
const menuBoxStr = ref<string>('');

const emits = defineEmits({
    boxButtonClick: null,
});

function handleBoxButton() {
    const boxinfo: TopBoxInfo = {BoxMode: menuBoxMode.value, BoxStr: menuBoxStr.value};
    emits('boxButtonClick', boxinfo);
}

</script>

<template>
    <header class="top-menu">
        <div class="navbar z-10 fixed bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-lg">
            <div class="navbar-start">
                <a href="/" class="btn btn-ghost normal-case text-xl">
                    <span class="font-light">Re:</span>
                    <span class="font-medium">OneeSan</span>
                </a>
            </div>
            <div class="navbar-center w-3/12">
                <div class="input-group">
                    <select v-model="menuBoxMode" class="top-menu-select select select-sm select-bordered">
                        <option value="tag-search">标签搜索</option>
                        <option value="add-illust">添加插画</option>
                    </select>
                    <input v-model="menuBoxStr" type="text" :placeholder="menuBoxMode == 'tag-search' ? '日语标签 多个用空格分隔' : 'Pixiv插画链接或ID'"
                           class="top-menu-input input input-sm input-bordered border-l-0 w-full"/>
                    <button @click="handleBoxButton" class="top-menu-btn btn btn-sm btn-square">
                        <MagnifyingGlassIcon v-if="menuBoxMode === 'tag-search'" class="w-5 h-5"/>
                        <PlusIcon v-else-if="menuBoxMode === 'add-illust'" class="w-5 h-5"/>
                    </button>
                </div>

            </div>
            <div class="navbar-end">
                <ul class="menu menu-horizontal px-1">
                    <li><a href="/api">API</a></li>
                    <li><a href="#github">GitHub</a></li>
                    <li><a href="/about">关于</a></li>
                </ul>
            </div>
        </div>
        <!--div class="flex flex-nowrap justify-between w-full items-center">
            <div class="menu-logo block text-center text-2xl pl-5 no-underline ">
                <span class="font-light">Re:</span>
                <span class="font-medium">OneeSan</span>
            </div>
            <div class="top-menu-box flex flex-nowrap flex-initial w-1/4">
                <div class="top-menu-select flex-none">
                    <a-select v-model:value="menuBoxMode">
                        <a-select-option value="tag-search">搜索标签</a-select-option>
                        <a-select-option value="add-illust">添加插画</a-select-option>
                    </a-select>
                </div>
                <div class="top-menu-input flex-grow">
                    <a-input v-model:value="value6"
                             :placeholder="menuBoxMode == 'tag-search' ? '日语标签 多个用空格分割' : 'Pixiv插画链接或ID'"
                    />
                </div>
                <div class="top-menu-btn flex-none">
                    <a-button @click="handleBoxButton(menuBoxMode,value6)">
                        <template v-if="menuBoxMode === 'tag-search'" #icon>
                            <SearchOutlined/>
                        </template>
                        <template v-else-if="menuBoxMode === 'add-illust'" #icon>
                            <PlusOutlined/>
                        </template>
                    </a-button>
                </div>

            </div>
            <div>
                <ul class="menu-body list-none m-0 p-0 overflow-hidden">
                    <li class="menu-item"><a href="#api">API</a></li>
                    <li class="menu-item"><a href="#github">GitHub</a></li>
                    <li class="menu-item"><a href="#about">关于</a></li>
                </ul>
            </div>
        </div-->
    </header>
</template>

<style scoped>

</style>