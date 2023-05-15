/* eslint-disable react/prop-types */

const SearchBox = ({ className, placeholder, onChangeHandler, isChecked, setIsChecked }) => {
    return (
        <div className="w-6/12 flex justify-between ">
            <label className="mt-4">
                <input 
                    className="mr-3"
                    type='checkbox'
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
            Filter City</label>
            <input
                id="searchInput"
                className={className}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default SearchBox;





