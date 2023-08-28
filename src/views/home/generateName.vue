<template>
  <div class="generate-content">
    <div v-if="isLoading">
      <img
        src="../../assets/image/letter_card.png"
        alt=""
        class="letter-card"
      />
      <img
        src="../../assets/image/finger_mark.png"
        alt=""
        class="finger-mark"
      />
      <div class="loading-icon">
        <van-loading type="spinner" color="#fff" size="40" />
      </div>
    </div>
    <div v-else>
      <div class="for-example" v-if="resDataList && resDataList.length">
        {{ resDataList[0] }}
      </div>
      <div class="checked" v-if="resSencodList && resSencodList.length">
        <div class="name" v-for="(item, index) in resSencodList" :key="index">
          {{ item }}
        </div>
      </div>
      <!-- <div
        v-for="(item, index) in nameList"
        :key="index"
        @click="onCheckName(index)"
      >
        <div class="checked" v-if="item.check">
          <div class="mean">{{ item.name }}</div>
          <div class="bun-icon">
            <van-icon name="like" class="un-icon" color="#FFA3B9" size="1rem" />
          </div>
        </div>
        <div class="unchecked" v-else>
          <div class="un-name">{{ item.name }}</div>
          <div class="bun-icon">
            <van-icon
              name="like-o"
              class="un-icon"
              color="#FFA3B9"
              size="1rem"
            />
          </div>
        </div>
      </div> -->
      <div class="more-btn">
        <img
          src="../../assets/image/more_btn.png"
          alt=""
          class="more"
          @click="toAgainName()"
        />
        <!-- <van-button
          round
          type="info"
          icon="replay"
          color="#07c160"
          @click="toAgainName()"
        ></van-button> -->
      </div>
    </div>
    <van-overlay :show="isPayPopup" @click="show = false" :lock-scroll="false">
      <div class="wrapper" @click.stop>
        <!-- <div class="pay-popup"> </div>-->
        <img src="../../assets/image/pay_bg.png" alt="" class="pay-bg" />
        <img
          src="../../assets/image/pay_success.png"
          alt=""
          class="pay-success"
        />

        <img
          src="../../assets/image/pay_close.png"
          alt=""
          class="pay-close"
          @click="onSubmit()"
        />
      </div>
    </van-overlay>
  </div>
</template>
<script>
import axios from 'axios'
export default {

  data: () => {
    return {
      isLoading: true,
      show: true,
      nameList: [],
      resDataList: [],
      resSencodList: [],
      isPayPopup: false
    }
  },
  mounted () {
    let requestData = this.$route.query
    console.log(requestData, '查询条件')
    this.getMyData(requestData)
  },
  methods: {
    getMyData (requestData) {
      let token = localStorage.getItem('name_token') || ''
      const AJAX = axios.create({
        timeout: 6000000,
        responseType: 'json',
        //withCredentials: true, // 是否允许带cookie这些
        // headers: { 'Content-Type': 'application/json; charset=utf-8' }
      })
      AJAX.get('http://140.143.140.160/api/ask_question/', { params: { token: token, ...requestData } }).then(res => {
        console.log(res.data, '==================>返回数据')
        if (res.status == 200) {
          this.isLoading = false
          this.resDataList = res.data.data
          this.resSencodList = this.curtail(res.data.data)
          this.changeList(res.data.data)
          localStorage.setItem('resetting_name', false)
          // localStorage.setItem('name_token', res.data.token)
        }
      }).catch(() => {
        this.$toast('请求错误！')
        return
      })
    },
    onCheckName (ind) {
      console.log(ind, '%%%%%%%%%%')
      this.nameList.map((item) => {
        item.check = false
      })
      this.nameList[ind].check = true
    },
    changeList (data) {
      let fixArray = this.curtail(data)
      let rd = []
      // let flag
      fixArray.map(res => {
        // flag = res.split('(')
        // rd.push({ name: flag[0], mean: '(' + flag[1], check: false })
        rd.push({ name: res, check: false })
      })
      this.nameList = rd
      console.log(rd, 'iiiiiiii')
    },
    curtail (arr) {
      var firstArr = arr.slice(0)
      firstArr.splice(0, 1)
      return firstArr
    },
    onSubmit () {
      this.isPayPopup = !this.isPayPopup
    },
    toAgainName () {//重复起名一律重新选条件，那is_new就一直为1，没有为0的情况
      localStorage.setItem('resetting_name', true)
      this.$router.push({ path: '/index' })
    }
  }
}
</script>
<style scoped>
.generate-content {
  width: 100vw;
  min-height: 100vh;
  background: url(../../assets/image/bg_2.png) no-repeat;
  background-size: cover;
  padding: 1rem 0 0;
}
.checked {
  width: 90%;
  margin: 0rem auto 1rem;
  height: auto;
  padding: 1.5rem 1.25rem;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.4);
  flex-direction: column;
  color: white;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
.name {
  font-size: 1.1rem;
  font-weight: 400;
}
.mean {
  font-size: 1.1rem;
  padding: 0.75rem 0;
}
.unchecked {
  width: 90%;
  color: white;
  margin: 0rem auto 1rem;
  height: 4rem;
  padding: 0.8rem 1.25rem;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.for-example {
  padding: 0.8rem 1.25rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
}
.un-name {
  width: 75%;
  font-size: 1.1rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bun-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.more-btn {
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  height: 4rem;
  align-items: center;
}
.more {
  margin-right: 0.3rem;
  height: 4rem;
}

/* .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 100%;
  height: 100%;
  background-color: #fff;
} */
.letter-card {
  margin: 1rem 1.5rem;
  width: 10rem;
}
.finger-mark {
  display: block;
  margin: 2.5rem auto 1.5rem;
  width: 4rem;
}
.loading-icon {
  display: flex;
  justify-content: center;
}
/* .pay-popup {
  width: 80%;
  height: 55%;
  background: url(../../assets/image/pay_bg.png) no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
} */
.pay-bg {
  width: 80%;
  position: absolute;
}
.pay-close {
  width: 3rem;
  position: absolute;
  bottom: 2rem;
}
/deep/.van-popup {
  background-color: rgba(255, 255, 255, 0);
}
.pay-success {
  width: 60%;
  position: absolute;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  position: relative;
}
</style>