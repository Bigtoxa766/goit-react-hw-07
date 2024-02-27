import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineSlices({
  filters: filtersReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
