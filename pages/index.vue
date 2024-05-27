<template>
    <div>
      <h3>This is index page</h3>
      <NuxtLink to="/about">to About</NuxtLink>
      <hr>

      <h3>资源assets</h3>
      <img class="w-40" src="/icon/icon_back.png" alt="">
      <hr>
      <div>
        <h3>pinia store</h3>
        <p>count: {{ store.count }}</p>
        <p>double: {{ store.double }}</p>
        <a-button type="primary" @click="store.increment()"> Add+ </a-button>

      </div>

      <hr>
      <div>
        <h3>vue use</h3>
        <span>test actions</span>
        <p>useMouse: x:{{ x }}, y:{{ y }}</p>
      </div>
      <hr>

    </div>
  </template>

<script lang="ts" setup>
import{useStore} from '~/store/index'

const store = useStore()

const { x, y } = useMouse()

const value = ref('')

</script>
