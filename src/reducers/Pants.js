import {produce} from 'immer';

const initialState={
   myPants:{
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
            case 'SET_PANTS_ID':
            state.myPants.id = action.payload;
            break;
            case 'SET_PANTS_TYPE':
            state.myPants.type = action.payload;
            break;
            case 'SET_PANTS_NAME':
            state.myPants.name = action.payload;
            break;
            case 'SET_PANTS_COLOR':
            state.myPants.color = action.payload;
            break;
            case 'SET_PANTS_SIZE':
            state.myPants.size = action.payload;
            break;
            case 'SET_PANTS_BRAND':
            state.myPants.brand = action.payload;
            break;
    }
}, initialState)