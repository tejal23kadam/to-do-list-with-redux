import {configureStore} from '@reduxjs/toolkit';
import ToDoReducer from './component/toDosSlice';
export const store = configureStore (
    {
        reducer : {
            todos : ToDoReducer
        }

    }
)