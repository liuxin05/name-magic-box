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
        <van-loading type="spinner" color="#fff" size="50" />
      </div>
    </div>
    <div v-else>
      <div
        v-for="(item, index) in nameList"
        :key="index"
        @click="onCheckName(index)"
      >
        <div class="checked" v-if="item.check">
          <div class="name">{{ item.name }}</div>
          <div class="mean">{{ item.mean }}</div>
          <div class="bun-icon">
            <van-icon name="like" class="un-icon" color="#FFA3B9" size="20" />
          </div>
        </div>
        <div class="unchecked" v-else>
          <div class="un-name">{{ item.name }}</div>
          <div class="bun-icon">
            <van-icon name="like-o" class="un-icon" color="#FFA3B9" size="20" />
          </div>
        </div>
      </div>
      <div class="more-btn">
        <img src="../../assets/image/more_btn.png" alt="" class="more" />
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data: () => {
    return {
      isLoading: true,
      show: true,
      nameList: [
        {
          name: '张一',
          check: false,
          mean: '发货的时刻静静地思考回复靠的就是副科级时代华府可接受合肥会计的说法可接受的',
        }, {
          name: '张二',
          check: false,
          mean: '巨虎呼呼呼呼过一个月过一个月华府可接受合肥会计的说法可接受的',
        }, {
          name: '张三',
          check: false,
          mean: '稻田养鱼方法体验体验体验过关于过一个月可接受合肥会计的说法可接受的',
        }, {
          name: '张四',
          check: false,
          mean: '色让对方GV是以后不要不会可接受合肥会计的说法可接受的',
        }, {
          name: '张误',
          check: false,
          mean: '阿尔单元格沸腾鱼国有股急急急激烈的用途科级时代华府可接受合肥会计的说法可接受的',
        },
        // {
        //   name: '张66',
        //   check: false,
        //   mean: '加热我空间改名为品几个人级时代华府可接受合肥会计的说法可接受的',
        // }, {
        //   name: '张77',
        //   check: false,
        //   mean: '色摸排能进不回家；判空【判空【 华府可接受合肥会计的说法可接受的',
        // }, {
        //   name: '张88',
        //   check: false,
        //   mean: '吧是好地方拘泥的发件人 华府可接受合肥会计的说法可接受的',
        // }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
  methods: {
    // onTap () {
    //   this.$router.push(`/generatePage`)
    // },
    onCheckName (ind) {
      console.log(ind, '%%%%%%%%%%')
      this.nameList.map((item) => {
        item.check = false
      })
      this.nameList[ind].check = true
    },
  }
}
</script>
<style scoped>
.generate-content {
  width: 100vw;
  min-height: 100vh;
  background: url(../../assets/image/bg_2.png) no-repeat;
  background-size: cover;
  padding: 2rem 0 0;
}
.checked {
  width: 90%;
  margin: 0rem auto 2rem;
  height: auto;
  padding: 1.5rem 2.5rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.6);
  flex-direction: column;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  font-size: 2.5rem;
}
.mean {
  font-size: 1.8rem;
  padding: 1.5rem 0;
}
.unchecked {
  width: 90%;
  color: white;
  margin: 0rem auto 2rem;
  height: 8rem;
  padding: 1.5rem 2.5rem;
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.un-name {
  font-size: 2rem;
}
.bun-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.more-btn {
  display: flex;
  justify-content: center;
  margin-top: 7rem;
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
  margin: 2rem 3rem;
}
.finger-mark {
  display: block;
  margin: 5rem auto 3rem;
  width: 8rem;
}
.loading-icon {
  display: flex;
  justify-content: center;
}
</style>