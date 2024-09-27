<script setup lang="ts"></script>

<template>
  <div>
    <h2>按钮</h2>

    <hr />
    <!-- <h3>类型</h3> -->

    <vl-button>Default</vl-button>
    <vl-button type="primary">primary</vl-button>
    <vl-button type="success">success</vl-button>
    <vl-button type="warn">warn</vl-button>
    <vl-button type="danger">danger</vl-button>
    <vl-button type="info">info</vl-button>

    <hr />
    <!-- <h3>Border</h3> -->

    <vl-button border>Default</vl-button>
    <vl-button border type="primary">primary</vl-button>
    <vl-button border type="success">success</vl-button>
    <vl-button border type="warn">warn</vl-button>
    <vl-button border type="danger">danger</vl-button>
    <vl-button border type="info">info</vl-button>

    <hr />
    <!-- <h3>flat</h3> -->
    <vl-button flat>Default</vl-button>
    <vl-button flat type="primary">primary</vl-button>
    <vl-button flat type="success">success</vl-button>
    <vl-button flat type="warn">warn</vl-button>
    <vl-button flat type="danger">danger</vl-button>
    <vl-button flat type="info">info</vl-button>

    <hr />
    <!-- <h3>text</h3> -->
    <vl-button text>Default</vl-button>
    <vl-button text type="primary">primary</vl-button>
    <vl-button text type="success">success</vl-button>
    <vl-button text type="warn">warn</vl-button>
    <vl-button text type="danger">danger</vl-button>
    <vl-button text type="info">info</vl-button>

    <hr />
    <!-- <h3>link</h3> -->
    <vl-button link>Default</vl-button>
    <vl-button link type="primary">primary</vl-button>
    <vl-button link type="success">success</vl-button>
    <vl-button link type="warn">warn</vl-button>
    <vl-button link type="danger">danger</vl-button>
    <vl-button link type="info">info</vl-button>

    <hr />
    <!-- <h3>Circle</h3> -->

    <vl-button circle type="primary">Home</vl-button>
    <vl-button circle type="success">Home</vl-button>
    <vl-button circle border type="primary">Home</vl-button>

    <hr />
    <!-- <h3>Square</h3> -->

    <vl-button square type="primary">首页</vl-button>
    <vl-button square type="success">首页</vl-button>
    <vl-button square border type="primary">Home</vl-button>

    <hr />
    <!-- <h3>Size</h3> -->
    <vl-button type="primary" size="xl">XLarge</vl-button>
    <vl-button type="primary" size="large">Lager</vl-button>
    <vl-button type="primary">Default</vl-button>
    <vl-button type="primary" size="small">Small</vl-button>
    <vl-button type="primary" size="mini">mini</vl-button>

    <hr />
    <!-- <h3>gradient</h3> -->
    <vl-button gradient type="primary">primary</vl-button>
    <vl-button gradient type="success">success</vl-button>
    <vl-button gradient type="warn">warn</vl-button>
    <vl-button gradient type="danger">Danger</vl-button>

    <hr />
    <!-- <h3>disabled</h3> -->
    <vl-button disabled gradient type="primary">primary</vl-button>
    <vl-button disabled type="primary">disabled</vl-button>
    <vl-button disabled border type="primary">disabled</vl-button>

    <hr />
    <!-- <h3>block</h3> -->
    <div style="width: 260px">
      <vl-button block gradient type="primary">primary</vl-button>
      <vl-button block gradient type="warn">warn</vl-button>
      <vl-button block gradient type="success" @click="handleClick">
        success
      </vl-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleClick = e => {
  console.log('clicked', e)
}
</script>
