import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop';
import axios from 'axios'
import firebase from "firebase/app"
import "firebase/auth"



Vue.use(Vuex)

const createStore = () => {

return new Vuex.Store({
    state: () => ({
        fetchedPosts:[],
        fetchedBox:[],
        auth: {
            user: null
          },
        loggedIn:false
    }),
    getters:{ //computed properties
        getPosts(state){
              return state.fetchedPosts.filter(post => post.stock >0)
        },
        getSite:(state)=>(id)=>{
            return state.fetchedPosts.find(post =>post.id === id)        
        },
        getBox(state){
            return state.fetchedBox.filter(box => box.id=!null)    
            
        },
       
        getUser(state) {
          return state.auth.user;
        },
        getAuth:(state)=>(logged)=>{
          state.loggedIn =logged 
          return logged
      },
       
    },
    actions:{
        
        // setPostss({commit}){
        //     //make the call
        //     //run setProducts mutation 
        //     shop.getPostss(posts =>{
        //         commit('setPosts',posts)
        //     })

        // },
      setUser({commit}, userData) {
        commit('setUser', userData)
      },
      setAuth({commit}, loggedIn) {
        commit('setAuth', loggedIn)
      },
      setAuthh:(state)=>(logged)=>{
        return state.loggedIn =logged 
    },
        firebaseGet(vuexContext){
            return axios.get("https://beykarakoy-default-rtdb.firebaseio.com/posts.json")
            .then(response => {
                let data =response.data;
                let postArray=[];                
                for(let key in data){
                   postArray.push({id:key,...data[key]})
                }
                vuexContext.commit("setPosts",postArray)
            })
        },
        firebaseGetBox(vuexContext){
            return axios.get("https://beykarakoy-default-rtdb.firebaseio.com/box.json")
            .then(response => {
                let data =response.data;
                let boxArray=[];                
                for(let key in data){
                    boxArray.push({id:key,...data[key]})
                }
                vuexContext.commit("setBox",boxArray)
            })
        },        
        // deleteBox(important){
        //     axios.get("https://beykarakoy-default-rtdb.firebaseio.com/box.json")
        //     .then(response => {
        //         let data =response.data;
        //         let boxArray=[];   
        //         let deneme;             
        //         for(let key in data){
        //             boxArray.push({id:key,...data[key]})
        //             deneme = boxArray.key[important]
        //         }
                 
        //         axios.delete("https://beykarakoy-default-rtdb.firebaseio.com/box/"+deneme+".json")
        //     })
        // }    
        

    },    
    mutations:{
        setPosts(state,posts){
            //update products
            state.fetchedPosts=posts
        },
        setBox(state,box){
            //update products
            state.fetchedBox=box
        },
        setAuth(state, data) {
          state.loggedIn = data;
        },
        setUser(state, userdata) {
          state.auth.user = userdata;
        },
    }
})}
export default createStore