import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return filteredCars.reduce((accum, car) => accum += car.cost, 0);
  });
  return <div>Total Cost: ₹{totalCost}</div>;
}

export default CarValue;
