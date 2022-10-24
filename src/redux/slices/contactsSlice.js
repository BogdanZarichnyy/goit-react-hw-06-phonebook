import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contactsSlice",
    initialState: {
        contacts: [],
    },
    reducers: {

        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }
                }
            }
        },

        deleteContact: {
            reducer(state, action) {
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            },
            prepare(id) {
                return {
                    payload: id,
                }
            }
        },

    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const reducerContacts = contactsSlice.reducer;