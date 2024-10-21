import { useDispatch, useSelector } from "react-redux";
import { removeCars } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, searchTerm } = useSelector((state) => state.cars);

  const handleRemove = (id) => {
    dispatch(removeCars(id));
  };

  return (
    <div>
      {cars.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase())).map((car) => {
        let bold = false;
        if (searchTerm) {
          bold = car.name.includes(searchTerm);
        }
        return (
          <>
            <hr />
            <div key={car.id} className="flex justify-between py-3">
              <div><span className={bold ? 'bg-cyan-400': ''}>{car.name}</span> - ₹{car.cost}</div>
              <button
                className="px-2 py-2 bg-red-400 rounded-md"
                onClick={() => handleRemove(car.id)}
              >
                Delete
              </button>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default CarList;
