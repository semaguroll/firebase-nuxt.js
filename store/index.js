import Vuex from 'vuex'
import shop from '@/api/shop'

const createStore = () => {

return new Vuex.Store({
    state: () => ({
        fetchedPosts:[]
    }),
    getters:{ //computed properties
        getPosts(state){
              return state.fetchedPosts
              //products.filter(product => product.stock >0)
        },
        getSite:(state)=>(id)=>{
            return state.fetchedPosts.find(postt =>postt.id === id)        
        },

        detailPosts(state){           
            return state.cart.map($route =>{
                const postt =state.fetchedPosts.find(postt =>postt.id === cartItem.id)
                return{
                    title:postt.title,
                    price:postt.price,
                    image:postt.image,
                    stock:postt.stock
                }
            })
        }
    },
    actions:{
        setPosts(vuexContext,posts){
             //make the call  mutasyon
             //run setProducts mutation
          
             vuexContext.commit('setPosts',posts)
        }
        
    },
    mutations:{
        setPosts(state,posts){
            //update products
            state.fetchedPosts=posts
        }
    }

})}
export default createStore




