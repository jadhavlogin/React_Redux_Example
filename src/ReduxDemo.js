import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
    render(){

        const reducer = function(state, action){
            if(action.type === 'ATTACK'){
                return action.payload;
            }
            if(action.type === "SLIENT"){
                return action.payload;
            }
             
            return state;
        }

        const store = createStore(reducer, "Demo");

        store.subscribe(function(){
            console.log("Store is now", store.getState());
        })

        store.dispatch({
            type : "ATTACK",
            payload : "Iron Man"
        });
        store.dispatch({
            type : "SLIENT",
            payload : "Slient Man"
        })

        return (
            <div>Test</div>
        )
    }
}

export default ReduxDemo