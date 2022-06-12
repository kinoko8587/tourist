import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    city: null,
    keyWord: "",
    topic: "",
  },
  reducers: {
    setCity: (state, action: PayloadAction<any>) => {
      state.city = action.payload;
    },
    deleteCity: (state) => {
      state.city = null;
    },
    setKeyWord: (state, action: PayloadAction<string>) => {
      state.keyWord =action.payload;
    },
    deleteKeyWord: (state) => {
      state.keyWord = "";
    },
    setTopic: (state, action: PayloadAction<string>) => {
      state.topic = action.payload;
    },
    deleteTopic: (state) => {
      state.topic = "";
    },
  },
});

export const { setCity, deleteCity, setKeyWord,deleteKeyWord,setTopic,deleteTopic } = searchSlice.actions;

export default searchSlice.reducer;
