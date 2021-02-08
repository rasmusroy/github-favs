import { configureStore } from '@reduxjs/toolkit';
import list from './reducers';

export default configureStore({
  reducer: {
    list
  },
});
