import {produce} from 'immer';

const initialState={
   myShoes:{
      id:'' ,
      type:'',
      name:'',
      color:"",
      size:'',
      brand:''
   }
};

export default produce((state, action) => {
    switch (action.type) {
            case 'SET_SHOES_ID':
            state.myShoes.id = action.payload;
            break;
            case 'SET_SHOES_TYPE':
            state.myShoes.type = action.payload;
            break;
            case 'SET_SHOES_NAME':
            state.myShoes.name = action.payload;
            break;
            case 'SET_SHOES_COLOR':
            state.myShoes.color = action.payload;
            break;
            case 'SET_SHOES_SIZE':
            state.myShoes.size = action.payload;
            break;
            case 'SET_SHOES_BRAND':
            state.myShoes.brand = action.payload;
            break;
    }
}, initialState)