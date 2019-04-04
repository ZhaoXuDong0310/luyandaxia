import {
<<<<<<< HEAD
    LIVE_DETAIL,
    USER_TOKEN,
    DEL_TOKEN,
    VIDEO_URL,
    ORDER_LIST,
} from './mutation-types'

import {
    reqLiveData ,
    reqOrderList
=======
  EDITADD,
  LIVE_DETAIL,
  USER_TOKEN,
  DEL_TOKEN,
  VIDEO_URL,
  PROJECT_DETAIL,
} from './mutation-types'

import {
  reqLiveData,
  reqProjectData
>>>>>>> master
} from '../api'

export default {

  // 获取商家列表的异步action
  async getliveData({commit, state},id) {
    
    let token = state.Authorization
    // 1. 发送异步ajax请求
    const result = await reqLiveData(token,id)  // {code: 0, data: shops}
    // 2. 根据结果提交mutation
    if (result.code === 200) {
      const detail = result.data
      //const url = detail.url_content
      commit(LIVE_DETAIL, {detail})  // action提交给mutation的是包含数据的对象, 而不数据本身
      //commit(URL_CONTENT,{url})  //对直播详情介绍url进行复制
      var video={}
      if(detail.status === 1)
      {
        video = {
          mp4:'',
          rtmp:detail.video,
          m3u8:'',
          flv:detail.video.replace("rtmp","http")+".flv",
        }
      }else{
        video = {
          mp4:detail.video,
          rtmp:'',
          m3u8:'',
          flv:'',
        }
      }
      //console.log(video)
      commit(VIDEO_URL, {video})  
    }else{
        console.log(result.msg);
    }
  },
  
  // 保存user的同步action
  setUserData({commit}, user) {
    commit(USER_TOKEN, {user})
  },

  del_token({commit}){
    commit(DEL_TOKEN)
  },

<<<<<<< HEAD
    del_token({commit}){
      commit(DEL_TOKEN)
      
    },
   // 获取订单列表
  async getOrders({commit},data){
      let token = data.token
      let status = data.status
      let page = data.page
      const result = await reqOrderList(token,status,page)
    if(result.code === 200){
      const detail = result.data
      commit(ORDER_LIST,{detail})
    } else {
      console.log(result.msg);
    }
  }
=======
  seteditadd({commit},editadd){
    commit(EDITADD,{editadd})
  },
  async projectData({commit, state},id){
    //获取token
    let token = state.Authorization
    //发送异步请求
    const result = await reqProjectData(token,id)
    if (result.code === 200) {
      const prodetail = result.data
      console.log("result",prodetail)
      console.log("info",prodetail.info)
      commit(PROJECT_DETAIL, prodetail) //提交给mutation
    }else{
      console.log(result.msg)
    }
  },
>>>>>>> master

}
