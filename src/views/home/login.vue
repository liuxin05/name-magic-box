<template>
  <div class="login-content">
    <img
      src="../../assets/image/home_page_start.png"
      alt=""
      class="start-btn"
      @click="onTap()"
    />
    <div class="choose-block" v-if="isFlag">
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
    <a v-else href="https://beian.miit.gov.cn" class="a-link"
      >京ICP备18020971号-6</a
    >
  </div>
</template>
<script>
// import axios from 'axios'
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
    this.get()
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
      this.sexType = ind + 1 //标记   男=1  女=2
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
      this.$router.push(`/generateName`)
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
      // const AJAX = axios.create({
      //   timeout: 6000000,
      //   responseType: 'json',
      //   withCredentials: true, // 是否允许带cookie这些
      //   // headers: { 'Content-Type': 'application/json; charset=utf-8' }
      // })//http://140.143.140.160/api/ask_question/?token=xX3wb7Sq8DC7slCo5MBI
      // AJAX.get('http://140.143.140.160/api/ask_question/?token=4huf8Q6yTmFUv5oVW29J', { params: { question: 'ma', is_new: 1 } }).then(res => {
      //   console.log(res, '==================>')
      // })
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
  bottom: 11rem;
  right: 3rem;
  width: 6.6rem;
  height: 6.6rem;
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
  width: 30rem;
  height: 5rem;
  background: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 3rem;
  top: 7rem;
  width: 31rem;
  height: 6rem;
  padding: 1.5rem 2rem;
  font-size: 1.4rem;
}
::-webkit-input-placeholder {
  /* WebKit browsers，webkit内核浏览器 */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
}

.text {
  font-family: YRDZST;
  font-size: 1.8rem;
  font-weight: 400;
  /* text-decoration: underline; */
  line-height: 5rem;
  letter-spacing: rem;
  color: #ffffff;
  position: absolute;
  top: 15rem;
  left: 50%;
  transform: translate(-50%);
}
.sex {
  position: absolute;
  top: 24rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.5rem;
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
  width: 16rem;
  height: 21rem;
  background-size: contain;
}
.quick-btn {
  position: absolute;
  bottom: 10rem;
  left: 50%;
  transform: translate(-50%);
}
.a-link {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%);
  color: #000;
  font-size: 1.4rem;
}
</style>