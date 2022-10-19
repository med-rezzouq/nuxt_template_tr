<template>
  <div
    class="flex flex-col items-center bg-[url('/images/bg.svg')] bg-indigo-bg bg-no-repeat"
  >
    <main class="py-6 lg:py-12 w-11/12 lg:max-w-7xl">
      <Testimonials />
      <projects />

      <services />

      <contact />
    </main>
  </div>
</template>

<script>
import Contact from "../layouts/components/Home/Contact.vue";
import Projects from "../layouts/components/Home/Projects.vue";
import Services from "../layouts/components/Home/Services.vue";
import Testimonials from "../layouts/components/Home/Testimonials.vue";
export default {
  components: { Testimonials, Projects, Services, Contact },
};
</script>

<style></style>
