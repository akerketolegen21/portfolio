<template>
    <div class="header">
      <!-- <router-link to="/work" class="nav-link">$ Work Exp</router-link> -->
      <router-link to="/" class="nav-link">$ Side Proj</router-link>
      <router-link to="/" class="nav-link">$ Extracurr</router-link>
      <router-link to="/" class="nav-link">$ About</router-link>
      <router-link to="/" class="nav-link">$ Contact</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavigationMenu',
  };
  </script>
  
  <style>
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px; /* Adjust the height as needed */
    color: #efd9ce;
  }
  
  .nav-link {
    font-family: 'Syne Mono';
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  
  .nav-link:hover {
    color: #e99c75;
    text-decoration: underline;
  }
  </style>