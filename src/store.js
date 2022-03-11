import { createStore } from "vuex";

const store = createStore({
    state (){
        return {
            likes : 50,
            좋아요버튼 : false,
            likecolor : 0,
            좋아요채우기 : false,
        }
    },

    mutations :{
        좋아요업(state){
            if (state.좋아요버튼 == false){
                state.likes++;
                state.좋아요버튼 = true;
            } else{
                state.likes--;
                state.좋아요버튼 = false;
            }
            
        },
        좋아요채우기(state){
            if (state.좋아요채우기 == false){
                state.likecolor++;
                state.좋아요채우기 = true;
            } else{
                state.likecolor--;
                state.좋아요채우기 = false;
            }
            
        },

    }

})

export default store;