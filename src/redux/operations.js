import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://65d7b6b027d9a3bc1d7bad9b.mockapi.io'

export const fetchContacts = createAsyncThunk('fetch/contacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  });

export const deleteContact = createAsyncThunk('contacs/delete',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  });

export const addContact = createAsyncThunk('contacs/add',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts/`, newContact);
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
})