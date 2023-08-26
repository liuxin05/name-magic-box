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
          <div class="sex">
            <div
              v-for="(item, ind) in sexList"
              :class="item.type"
              :key="ind"
              @click="check(ind)"
            >
              <p v-if="item.check" :class="item.reclass" />
            </div>
          </div>
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
      sexList: [
        {
          check: false,
          type: 'men',
          reclass: 'check-men',
        },
        {
          check: false,
          type: 'women',
          reclass: 'check-women',
        }
      ]
    }
  },
  mounted () {
    // this.get()
    // let apiKey = '2WshDvM3a8682c1238af5a34f4eece5319e5a5637618bb7'
    // let url = 'https://api.apishop.net/common/BMI/getStandardWeightTable?apiKey=' + apiKey
    // this.$axios({
    //   method: 'get',
    //   url: url,
    //   params: {
    //     id: 1
    //   }
    // }).then((res) => {
    //   console.log(res.data)
    // })
  },
  methods: {
    onTap () {
      this.isFlag = true
    },
    check (ind) {
      console.log(ind, '%%%%%%%%%%')
      this.sexType = ind == 0 ? '男' : ind == 1 ? '女' : '' //标记   男=1  女=2
      console.log(this.sexType, '@###############')
      this.sexList.map((item) => {
        item.check = false
      })
      this.sexList[ind].check = true
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
      // this.$router.push(`/generateName`)
      this.$router.push({ path: '/generateName', query: { first_name: this.nameVal, is_new: 1, sex: this.sexType } })
    },
    get () {
      // let apiKey = '2WshDvM3a8682c1238af5a34f4eece5319e5a5637618bb7'
      // let url = 'http://127.0.0.1:8000/api/ask_question/?token=4huf8Q6yTmFUv5oVW29J&question=马&is_new=1'
      // let apiKey = '2WshDvM3a8682c1238af5a34f4eece5319e5a5637618bb7'
      // let url = 'https://api.apishop.net/common/BMI/getStandardWeightTable?apiKey=' + apiKey
      // this.axios.get(url)
      //   .then(res => {
      //     console.log(res)
      //     this.data = res.data
      //   })
      // ++++++++++++++++++++++++++++++++++++++++++++++++++++


    }
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
  height: 90%;
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
  width: 15rem;
  height: 2.5rem;
  background: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 1.5rem;
  top: 3.5rem;
  width: 15.5rem;
  height: 3rem;
  padding: 0.6rem 1rem;
  font-size: 0.7rem;
}
::-webkit-input-placeholder {
  /* WebKit browsers，webkit内核浏览器 */
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.7rem;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.7rem;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.7rem;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.7rem;
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
.men {
  background: url(../../assets/image/man_unchecked.png) no-repeat;
}
.women {
  background: url(../../assets/image/woman_unchecked.png) no-repeat;
}
.check-men {
  background: url(../../assets/image/man_checked.png) no-repeat;
}
.check-women {
  background: url(../../assets/image/woman_checked.png) no-repeat;
}
.men,
.check-men,
.women,
.check-women {
  width: 10rem;
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