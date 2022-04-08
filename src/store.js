import { configureStore } from '@reduxjs/toolkit'
import {switchPlayerReducer} from './reducers';

export default configureStore({
  reducer: {
    switchPlayer: switchPlayerReducer,
  },
})