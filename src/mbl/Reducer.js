export const reducer = (state,action)=>{
    if(action.type==="REMOVE_ITEM"){
        return {...state,
        data:state.data.filter((curElem)=>{
            return curElem.id !==action.payload
        })
        }

    }
    if(action.type==="CLEAR_CART"){
        return {...state,
        data:[]}
    }
    if(action.type==="INCREMENT"){
        let updateCart=state.data.map((curElem)=>{
            if(curElem.id===action.payload){
                return{...curElem,
                    quantity:curElem.quantity+1}
            }

            return curElem;
        })
        return {
            ...state,data:updateCart
        }
    }
    if(action.type==="DECREMENT"){
        let updateCart=state.data.map((curElem)=>{
            if(curElem.id===action.payload){
                if(curElem.quantity > 1){

                    return{...curElem,
                        quantity:curElem.quantity-1}}
                        else {
                            return{...curElem,
                                quantity:curElem.quantity

                            }
                        }
                    }

            return curElem;
        })
        return {
            ...state,data:updateCart
        }
    }
return state
}