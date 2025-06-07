<template>
  <div>
    <CardSwap
      :images="[
        'https://i.pinimg.com/736x/e7/5b/e9/e75be96bf71556ed0cc45f43a614a278.jpg',
        'https://i.pinimg.com/736x/3d/26/0f/3d260f8cc3108574e6cde1e990c26a31.jpg',
        'https://i.pinimg.com/736x/58/46/b8/5846b83d72c2fcd337f0c5e0cc180f23.jpg',
      ]"
      :width="600"
      :height="400"
    />:
  </div>
</template>

<script>
import CardSwap from "../Component/CardSwap.vue";

export default {
  components: {
    CardSwap,
  },
};
</script>
