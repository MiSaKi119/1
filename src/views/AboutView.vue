<template>
  <div class="about">
    <el-container>
      <el-aside width="180px">
        <div class="aside-logo">
          <img src="../assets/Home-aside-Top.png" alt="" />
        </div>
        <el-menu default-active="1" active-text-color="#4c7cfb" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-menu-item :index="it.id" v-for="it in arr" :key="it.id">
            <span>{{ it.val }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="left">
            <h1>江苏传智播客教育科技股份有限公司</h1>
            <span>体验版</span>
          </div>
          <div class="right">
            <i style="color: white; margin: 0px 15px" class="el-icon-search"></i>

            <el-popover placement="top-start" width="120" trigger="hover">
              <div class="userbox-hov">
                <p @click="$router.go(0)">首页</p>
                <p @click="toLogin">退出登录</p>
              </div>

              <div slot="reference" style="display: flex; align-items: center" class="userbox">
                <img style="width: 22px" src="../assets/Home-header-img.png" alt="" />
                <span style="margin: 0px 5px">{{ userInfo.username }}</span>
                <i style="color: white" class="el-icon-arrow-down"></i>
              </div>
            </el-popover>
          </div>
        </el-header>
        <el-main>
          <div class="main-top-body">
            <img src="../assets/Home-main-user.png" alt="" />
            <div class="top-right">
              <p>早安，管理员，祝你开心每一天！</p>
              <p>管理员 | 传智播客-总裁办</p>
            </div>
          </div>
          <div class="box">
            <div class="left">
              <div class="Calendar">
                <h1 style="font-size: 24px; border-bottom: 1px solid #000">工作日历</h1>
                <el-calendar v-model="Calendar"> </el-calendar>
              </div>
            </div>

            <div class="right">
              <div class="process">
                <div class="top">
                  <span>流程申请</span>
                </div>
                <div class="Nav">
                  <div class="item" v-for="it in processArr" :key="it">
                    {{ it }}
                  </div>
                </div>
              </div>

              <div class="navigation">
                <div class="top">
                  <span>快速开始/便捷导航</span>
                </div>
                <div class="Nav">
                  <div class="item" v-for="it in navigationarr" :key="it">
                    {{ it }}
                  </div>
                </div>
              </div>

              <div class="HelpLinks">
                <div class="top">
                  <span>帮助链接</span>
                </div>
                <div class="Nav">
                  <div class="item"></div>
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeCookie } from "../util/js-cookie"
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          val: "首页"
        },
        {
          id: 2,
          val: "组织架构"
        },
        {
          id: 3,
          val: "员工"
        },
        {
          id: 5,
          val: "公司设置"
        },
        {
          id: 6,
          val: "权限设置"
        },
        {
          id: 7,
          val: "社保"
        },
        {
          id: 8,
          val: "考勤"
        },
        {
          id: 9,
          val: "工资"
        },
        {
          id: 10,
          val: "审批"
        }
      ],
      userInfo: {},
      visible: false,
      Calendar: new Date(),
      processArr: ["加班离职", "审批列表", "请假调休", "我的信息"],
      navigationarr: ["人事月报", "员工审核", "考勤查询", "组织架构", "考勤统计"],
      isCollapse: false
    }
  },
  created() {
    this.$http.post(process.env.VUE_APP_IDENT + "/sys/profile").then((res) => {
      this.$http.get(process.env.VUE_APP_IDENT + `/sys/user/${res.data.userId}?id=${res.data.userId}`).then((res) => {
        this.userInfo = res.data
        console.log(res.data)
      })
    })
  },

  methods: {
    toLogin() {
      removeCookie()
      this.$router.push("/")
    }
  }
}
</script>

<style lang="scss">
.el-header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4c7cfb;
  .left {
    color: #fff;
    line-height: 50px;
  }
  .left h1 {
    font-size: 18px;
    margin-left: 10px;
    cursor: text;
    float: left;
  }

  .left span {
    background: #84a9fe;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    border-radius: 10px;
    margin-left: 15px;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .userbox-hov {
    p {
      padding: 20px;
      border-bottom: 1px solid #ccc;
    }
  }
}

.el-aside {
  height: calc(100vh - 4px);
  background: url(../assets/Home-aside-bg.png) no-repeat 0 100%;
  background-color: #4c7cfb;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-left: 4px;
}

.aside-logo {
  width: 100%;
  text-align: center;
  img {
    margin-top: 10px;
  }
}

.el-menu-vertical-demo {
  background-color: #4c7cfb;
  .el-menu-item {
    color: white;
  }

  .el-menu-item:hover {
    color: #4c7cfb;
  }
}

.el-main {
  height: calc(100vh - 50px);
  background-color: #eef0f3;
  padding: 10px;
  .main-top-body {
    background-color: #fff;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 5px;
    height: 120px;
    img {
      width: 110px;
      border-radius: 50%;
      margin-left: 20px;
    }
    display: flex;
    .top-right {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p {
        font-size: 24px;
      }
      p:nth-child(2) {
        font-size: 20px;
      }
    }
  }
}

.box {
  .left {
    width: 600px;
    float: left;
  }
  .right {
    float: right;
    width: calc(100% - 600px);
  }
  .Calendar {
    width: 600px;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    h1 {
      padding-bottom: 20px;
    }
    .el-calendar {
      width: 100%;
      .el-calendar-day {
        height: 40px;
        text-align: center;
      }
      th:nth-child(6) {
        color: #fa7c4d;
      }

      th:nth-child(7) {
        color: #fa7c4d;
      }
    }
  }

  .process {
    padding: 25px 30px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    margin-left: 10px;
    transition: 0.3s;
    margin-bottom: 20px;

    .top {
      span {
        border-bottom: 4px solid #8a97f8;
        padding-bottom: 10px;
        font-size: 24px;
      }
    }

    .Nav {
      margin-top: 30px;
      .item {
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 137px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin: 0 15px 10px 0;
        font-size: 16px;
        float: left;
      }
    }
  }

  .navigation {
    padding: 25px 30px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    margin-left: 10px;
    transition: 0.3s;
    margin-bottom: 20px;

    .top {
      span {
        border-bottom: 4px solid #8a97f8;
        padding-bottom: 10px;
        font-size: 24px;
      }
    }

    .Nav {
      margin-top: 30px;
      .item {
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 137px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin: 0 15px 10px 0;
        font-size: 16px;
        float: left;
      }
    }
  }

  .HelpLinks {
    padding: 25px 30px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    margin-left: 10px;
    transition: 0.3s;
    margin-bottom: 20px;

    .top {
      span {
        border-bottom: 4px solid #8a97f8;
        padding-bottom: 10px;
        font-size: 24px;
      }
    }

    .Nav {
      margin-top: 30px;
    }
  }
}
</style>
