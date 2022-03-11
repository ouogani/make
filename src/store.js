import { createStore } from "vuex";

const store = createStore({
    state (){
        return {
            likes : 50,
            좋아요버튼 : false,
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

    }

})

export default store;