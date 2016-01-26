const defaultState = {

    onClick: (button, dataStore) => {
        dataStore.dispatch({ type: "MENU_CLICK", selectedOption: button });
    },

    options: []

}

const setActive = (menuItem, active) => {
    if ( menuItem.active === active ) {
        return menuItem;
    }
    return Object.assign({}, menuItem, { active });
};


const menuSelect = (options, selectedOption) => {
    return options.map(function (option) {
        if ( option.options && option.options.length ) {
            return Object.assign({}, option, { options: menuSelect(option.options, selectedOption) });
        }
        return setActive(option, option === selectedOption);
    });
};


export default (state = defaultState, action) => {
    if ( "MENU_CLICK" === action.type ) {
        return Object.assign({}, state, { options: menuSelect(state.options, action.selectedOption) });
    }
    return state;
};


