import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact } from "./operations";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },

  extraReducers: builder => 
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false; 
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, () => { })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact =>
          contact.id !== action.payload.id)
       })
      .addCase(deleteContact.rejected, () => { })
});

export const contactsReducer = contactsSlice.reducer;