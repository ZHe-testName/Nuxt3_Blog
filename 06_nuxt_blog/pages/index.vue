<script setup lang="ts">
  const { supabase } = useSuperBase();
</script>

<template>
  <div>
    <div class="container">
      <AuthCard />
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 50%;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
</style>
