<script setup lang="ts">
  const { signOut } = useAuth();
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile">
          My Profile
        </NuxtLink>
      </li>
      <li
        @click="signOut"
      >
        Sign Out
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    background-color: black;
    height: 10vh;
    width: 100%;
    padding: 30px 5rem 0px;
  }

  nav > ul {
    display: flex;
    gap: 20px;
    color: white;
    cursor: pointer;
  }

  nav > ul > li:last-of-type {
    margin-left: auto;
  }
</style>