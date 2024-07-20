/* eslint-disable react/prop-types */
import { ImSearch } from "react-icons/im";

const CityInputForm = ({ handleSubmit, city, setCity, error, inputRef }) => {
  return (
    <div className="text-[#e1e2e4]">
      <form onSubmit={handleSubmit}>
        <div className="border border-slate-500 rounded-xl">
          <label className="flex justify-between rounded-xl">
            <input
              type="text"
              value={city}
              ref={inputRef}
              placeholder="Enter city or country name"
              className="border border-y-0 border-s-0 border-slate-500 w-[90%] placeholder-slate-500 ps-1 py-1 rounded-xl text-sm outline-none"
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="flex text-center w-[10%]">
              <ImSearch className="m-auto" />
            </button>
          </label>
        </div>
      </form>
      {error && (
        <span className="text-[9px] ps-3 text-red-500">
          Enter valid city or country name
        </span>
      )}
    </div>
  );
};
export default CityInputForm;
