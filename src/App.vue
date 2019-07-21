<template>
  <div id="main">
    <div id="logo">
      <i class="fas fa-dna fa-4x"></i>
    </div>
    <div id="headermenu">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div id="usermenu"></div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

