<template>
    <div class="sidebar">
        <router-link to="/work" class="nav-link">$ Work Exp </router-link> <br>
        <router-link to="/work" class="nav-link">$ Side Proj </router-link> <br>
        <router-link to="/work" class="nav-link">$ Extracurr </router-link> <br>
        <router-link to="/work" class="nav-link">$ About </router-link> <br>
        <router-link to="/work" class="nav-link">$ Contact </router-link> <br>
    </div>
</template>

<script>
export default {
    name: 'NavigationMenu'
}
</script>

<style>
.sidebar {
    color: #efd9ce;
    background-color: #25283d;
    position: fixed;
    top: 0;
    right: 0;
    width: auto; 
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.nav-link {
    writing-mode: vertical-rl;
    font-family: 'Syne Mono';
    font-size: 150%;
    text-transform: uppercase;
    cursor: pointer;
}
</style>