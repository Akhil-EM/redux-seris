const redux=require('redux');
const createStore=redux.createStore;

const BUY_CAKE='BUY_CAKE';

// action
function buyCake(){
   return {
    type:BUY_CAKE,
    info:'first redux action'
   }
}

//state
const initialState={
    numOfCakes:10
}

//reducer
const reducer=(state=initialState,action)=>{
   switch(action.type){
       case BUY_CAKE:return{
           ...state,///keep copy of state so that other state values don't get updated
           numOfCakes:state.numOfCakes - 1
       }
       default:return state;
             
   }
}
const store=createStore(reducer);
console.log('initial state',store.getState());

const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
//createStore,getState,dispatch subscribe and unsubscribe are redux functions.