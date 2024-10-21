import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchInput = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="flex content-between">
      <div>my Cars</div>
      <div>
      <input
        type="text"
        className="px-2 py-2 border border-1 border-cyan-400 rounded-md"
        value={searchTerm}
        onChange={handleSearchInput}
      />
      </div>
    </div>
  );
}

export default CarSearch;
