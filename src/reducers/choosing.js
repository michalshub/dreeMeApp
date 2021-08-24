import { produce } from 'immer';

const initialState = {
    choosing: {
        results: [],
        shoes: false,
        shirt: false,
        pants: false,
        finish: false,
        timer: 0,
        sumOfSets: 0
    }
};

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            state.choosing.results = action.payload;
            break;
        case 'SET_SHOES_SELECTED':
            state.choosing.shoes = action.payload;
            break;
        case 'SET_SHIRT_SELECTED':
            state.choosing.shirt = action.payload;
            break;
        case 'SET_PANTS_SELECTED':
            state.choosing.pants = action.payload;
            break;
        case 'SET_FINISH':
            state.choosing.finish = action.payload;
            break;
        case 'SET_TIMER':
            state.choosing.timer = action.payload;
            break;
        case 'SET_SUM_OF_SETS':
            state.choosing.sumOfSets = action.payload;
            break;
    }
}, initialState)