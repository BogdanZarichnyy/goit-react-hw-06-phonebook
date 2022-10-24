import { configureStore } from '@reduxjs/toolkit'
import { reducerContacts } from './slices/contactsSlice';
import { reducerFilter } from './slices/filterSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
    key: 'phonebook',
    storage,
    whitelist: ['contacts'],
}

const persistedContactsReducer = persistReducer(persistConfig, reducerContacts);
const persistedFilterReducer = persistReducer(persistConfig, reducerFilter);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: persistedFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);










































// import { createStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';

// const initialState = {
//     contacts: [],
//     filter: '',
// }

// // const rootReducer = (state, action) => {
// const rootReducer = (state = initialState, action) => {
//     // console.log(state, action);
//     switch (action.type) {
//         case 'search':
//             return { ...state, filter: action.payload };
//         case 'add':
//             return { ...state, contacts: [...state.contacts, action.payload] };
//         case 'delete':
//             return { ...state, contacts: [...state.contacts.filter(contact => contact.id !== action.payload)] };
//         case 'download':
//             return { ...state, contacts: action.payload };
//         default: return state;
//     }
// }

// export const store = createStore(rootReducer, { contacts: [], filter: '' });
// export const store = createStore(rootReducer);


// console.log(store);
// store.dispatch({ type: 'test' });
// console.log(store.getState());
// store.dispatch({ type: 'search', payload: 'sweet' });
// console.log(store.getState());
// store.dispatch({ type: 'add', payload: { id: 1, name: 'iuwhebf', tel: '654-89-65' } });
// console.log(store.getState());
// store.dispatch({ type: 'delete', payload: 1 });
// console.log(store.getState());
// store.dispatch({ type: 'searchClear', payload: "" });
// console.log(store.getState());