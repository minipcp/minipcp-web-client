import { createStore } from "redux";
import menus from "./main_menu.js";
import menusFetch from "./main_menu_rest.js"


const defaultState = {
    menus: menus(undefined, {})
};


const appReducers = {

    "MENU_CLICK": (state, action) => {
        return Object.assign({}, state, { 
            menus: menus(state.menus, action)
        });
    },

    "MENU_SET": (state, action) => {
        console.log(action);
        return Object.assign({}, state,  { menus: Object.assign({}, state.menus, { options: action.options }) });
    }

};

const main = (state = defaultState, action) => {
    if ( appReducers[action.type] ) {
        return appReducers[action.type](state, action);
    }
    return state;
};

const dataStore = createStore(main);
menusFetch(options => dataStore.dispatch({ type: "MENU_SET", options }));
export default dataStore;

