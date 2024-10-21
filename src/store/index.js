import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSearchTerm, addCars, removeCars } from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";


const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store, changeName, changeCost, changeSearchTerm, addCars, removeCars  };