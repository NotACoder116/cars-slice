import { useDispatch, useSelector } from "react-redux";
import { addCars, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    event.preventDefault();
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    event.preventDefault();
    dispatch(changeCost(parseInt(event.target.value) || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger
    if (name && cost) {
      dispatch(
        addCars({
          name: name,
          cost: cost,
        })
      );
    }
  };

  return (
    <div className="shadow-md mt-4">
      <h4 className="subtitle is-3">Add Car</h4>
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="field">
            <label className="">Name</label>
            <input
              className="px-2 py-2 border border-1 border-cyan-400 rounded-md"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="">Cost</label>
            <input
              className="px-2 py-2 border border-1 border-cyan-400 rounded-md"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="px-2 py-2 bg-cyan-400 rounded-md">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
