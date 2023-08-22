<template>
  <div class="choice-content"></div>
</template>
<script>
export default {
  methods: {
    onTap () {
      this.$router.push(`/choicePage`)
    }
  }
}
</script>
<style scoped>
.choice-content {
  max-width: 375px;
  height: 100vh;
  /* background: url("../../assets/image/bg_2.png") no-repeat;
  background-size: contain;
  background-position: center center; */
  background: black url(../../assets/image/bg_1.png) no-repeat center center;
  background-size: contain;
}
</style>