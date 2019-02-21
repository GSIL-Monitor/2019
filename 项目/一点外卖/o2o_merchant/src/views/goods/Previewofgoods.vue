<template>
  <div class="previewofgoods container">
    <!-- 标题 -->
    <div class="subTitleTop">
      <span>商品类型</span>
    </div>
    <!-- 商品预览 -->
    <div class="goodImg">
      <h4>商品预览</h4>
      <div class="picture">
        <img :src="addForm.picture" alt="">
        <div class="text">
          <span>{{addForm.name}}<em>${{addForm.price}}</em></span>
          <p>{{addForm.intro}}</p>
        </div>
      </div>
      <div class="intro">
        <h5>商品介绍</h5>
        <p>{{addForm.description}}</p>
      </div>
    </div>
    <div class="back">
        <router-link  class="btn" :to="{name:'Goods'}">返回</router-link>
    </div>
  </div>
</template>

<script>
import { selectOneGoods } from '@/api/public.js'
export default {
  data () {
    return {
      //   表格数据
      id: '',
      addForm: {
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    // 商品查询
    selectOneGoods(this.id).then(res => {
      this.addForm = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.previewofgoods {
    height: 1301px;
    a {
        color: #666;
        font-size: 14px;
    }
    //   商品预览
    .goodImg {
        margin: 56px 250px;
        background-color: #fff9f9f9;
        > div,
        h4 {
            box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }
        h4 {
            height: 77px;
            line-height: 77px;
            font-size: 33px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            text-align: center;
        }
        .picture {
            margin: 18px 0;
            height: 607px;
            img {
                width: 620px;
                height: 420px;
            }
            .text {
                padding: 0 30px;
                span {
                    display: block;
                    color: #333;
                    font-size: 27px;
                    margin: 36px 0 26px;
                    em {
                        color: #ff4646;
                        float: right;
                    }
                }
                p {
                    font-size: 22px;
                    font-weight: 500;
                    color: rgba(102, 102, 102, 1);
                }
            }
        }
        .intro {
            height: 320px;
            margin-bottom: 18px;
            padding-top: 20px;
            h5 {
                text-align: center;
                font-size: 27px;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
            }
            p{
                text-indent: 16px;
                padding: 10px 20px;
                color: #666;
            }
        }
    }
    // 返回按钮
    .back {
        text-align: center;
        .btn {
            display: inline-block;
            color: #fff;
            font-size: 16px;
        }
    }
}
</style>
