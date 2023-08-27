<template>
  <div class="login-content">
    <img
      src="../../assets/image/home_page_start.png"
      alt=""
      class="start-btn"
      @click="onTap()"
    />
    <van-popup
      v-model="isFlag"
      position="bottom"
      :style="{
        height: '90%',
        'border-top-left-radius': '40px',
        'border-top-right-radius': '40px',
      }"
      v-if="isFlag"
    >
      <div class="choose-block">
        <div class="choose-block-sex">
          <img
            src="../../assets/image/bg_1.png"
            alt=""
            class="choose-block-input-name"
          />
          <input
            type="text"
            class="input-your-name"
            placeholder="   请输入您的姓氏..."
            maxlength="3"
            v-model="nameVal"
          />
          <div class="text">请选择宝宝性别</div>
          <van-radio-group v-model="sexType" class="sex">
            <van-radio name="男">
              <template #icon="props">
                <img
                  class="img-icon"
                  :src="props.checked ? activeIconMan : inactiveIconManChecked"
                />
              </template>
            </van-radio>
            <van-radio name="女">
              <template #icon="props">
                <img
                  class="img-icon"
                  :src="
                    props.checked ? activeIconWoman : inactiveIconWomanChecked
                  "
                />
              </template>
            </van-radio>
          </van-radio-group>

          <img
            src="../../assets/image/return_name.png"
            alt=""
            class="quick-btn"
            @click="onBindName()"
          />
        </div>
      </div>
    </van-popup>

    <a v-else href="https://beian.miit.gov.cn" class="a-link"
      >京ICP备18020971号-6</a
    >
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isFlag: false,
      sexType: '',
      nameVal: '',
      activeIconMan: require('../../assets/image/man_checked.png'),
      inactiveIconManChecked: require('../../assets/image/man_unchecked.png'),
      activeIconWoman: require('../../assets/image/woman_checked.png'),
      inactiveIconWomanChecked: require('../../assets/image/woman_unchecked.png'),
      sexList: [],
      isFirstGiveName: null,
    }
  },
  mounted () {
    this.isFirstGiveName = this.$route.query.is_again
  },
  methods: {
    onTap () {
      this.isFlag = true
    },
    onBindName () {
      if (!this.nameVal) {
        this.$toast('请输入宝宝姓氏！')
        return
      }
      if (!this.sexType) {
        this.$toast('请选择宝宝性别！')
        return
      }
      let is_new = this.isFirstGiveName ? 0 : 1
      // this.$router.push(`/generateName`)
      this.$router.push({ path: '/generateName', query: { first_name: this.nameVal, is_new: is_new, sex: this.sexType } })
    },
  }
}
</script>
<style scoped>
.login-content {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/image/home_page.png") no-repeat;
  background-size: contain;
  position: relative;
}
.start-btn {
  position: fixed;
  bottom: 5.5rem;
  right: 1.5rem;
  width: 4rem;
  height: 4rem;
}
.choose-block {
  height: 100%;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.choose-block-sex {
  width: 100%;
  height: 100%;
  position: relative;
}
.choose-block-input-name {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: pink url("../../assets/image/bg_1.png"); */
}
.input-your-name {
  width: 85%;
  height: 2.5rem;
  background: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 1.8rem;
  top: 3.5rem;
  height: 4rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
}
::-webkit-input-placeholder {
  /* WebKit browsers，webkit内核浏览器 */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
}

.text {
  font-family: YRDZST;
  font-size: 0.9rem;
  font-weight: 400;
  /* text-decoration: underline; */
  line-height: 2.5rem;
  color: #ffffff;
  position: absolute;
  top: 7.5rem;
  left: 50%;
  transform: translate(-50%);
}
.sex {
  position: absolute;
  top: 12rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 1.25rem;
  box-sizing: border-box;
}
/deep/.van-radio {
  overflow: visible;
}

.img-icon {
  width: 9.5rem;
  height: 12.5rem;
  background-size: contain;
}
.quick-btn {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translate(-50%);
  height: 4rem;
}
.a-link {
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translate(-50%);
  color: #000;
  font-size: 0.7rem;
}
</style>