import { createStore } from "vuex";
import postdata from "./assets/postdata";

const store = createStore({
    state (){
        return {
            a : 0,
            likes : [postdata[0].likes],
            좋아요버튼 : false,
            likecolor : 0,
            좋아요채우기 : false,
            포스팅카운트 : false,
        }
    },

    mutations :{
        좋아요업(state){
            if (state.좋아요버튼 == false){
                state.likes[state.a]++;
                state.좋아요버튼 = true;
            } else{
                state.likes[state.a]--;
                state.좋아요버튼 = false;
            }
           
            
        },
        좋아요색(state){
            if (state.좋아요채우기 == false){
                state.likecolor++;
                state.좋아요채우기 = true;
            } else{
                state.likecolor--;
                state.좋아요채우기 = false;
            }
            
        },
        포스팅업(state){
            if(state.포스팅카운트 == false){
                state.a++;
                state.포스팅카운트 = true;
            } else {
                state.a++;
                state.포스팅카운트 = false;
            }
        }

    }

})

export default store;