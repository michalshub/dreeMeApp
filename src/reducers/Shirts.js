import {produce} from 'immer';

const initialState={
   myShirt:{
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
            case 'SET_SHIRT_ID':
            state.myShirt.id = action.payload;
            break;
            case 'SET_SHIRT_TYPE':
            state.myShirt.type = action.payload;
            break;
            case 'SET_SHIRT_NAME':
            state.myShirt.name = action.payload;
            break;
            case 'SET_SHIRT_COLOR':
            state.myShirt.color = action.payload;
            break;
            case 'SET_SHIRT_SIZE':
            state.myShirt.size = action.payload;
            break;
            case 'SET_SHIRT_BRAND':
            state.myShirt.brand = action.payload;
            break;
    }
}, initialState)