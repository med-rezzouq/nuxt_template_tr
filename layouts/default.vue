<template>
  <div class="relative font-sans">
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "~/layouts/components/Header";
import AppFooter from "~/layouts/components/Footer";
export default {
  components: { AppHeader, AppFooter },
};
</script>
<style></style>
