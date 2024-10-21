import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCars(state, action) {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: uuidv4()
            });
        },
        removeCars(state, action) {
           const updated = state.cars.filter((car) => car.id !== action.payload);
           state.cars = updated;
        }
    }
});

export const { changeSearchTerm, addCars, removeCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;