import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "CategorizeQuestion",
  initialState: 
      {
        type: "category",
        Imgurl: "",
        description: "",
        categories: [],
        catagoriesAns:[],
        catagoriesWithAns:[]
        
      },
  reducers: {
    addDescription:(store,action)=>{
      store.description=action.payload
    },
    addImgurl:(store,action)=>{
      store.Imgurl=action.payload
    },
    addCatagories:(store,action)=>{
      if(Array.isArray(action.payload)){
        store.categories=action.payload
      }
      else{
      store.categories.push(action.payload)

      }
    },
    addCatagoriesAns:(store,action)=>{
      if(Array.isArray(action.payload)){
        store.catagoriesAns=action.payload
      }
      else{
      store.catagoriesAns.push(action.payload)

      }
    }, 
    addCatagorieWithsAns: (state, action) => {
      const { category, ans } = action.payload;
        state.catagoriesWithAns.push({ category, ans });
    },
    
    
  },
});
export const {addDescription,addCatagoriesAns,addCatagories,addImgurl,addCatagorieWithsAns} = formSlice.actions;

export default formSlice.reducer;
