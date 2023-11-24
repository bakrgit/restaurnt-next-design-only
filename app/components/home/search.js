import "../../style/search.css";
const Search = () => {
  return (
    <div className="margin-search search-container">
      <div className="container w-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="title">ابحث عن مطعمك</h1>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <button className="search-btn">ابحث</button>
          <input
            className="search-input w-75"
            type="text"
            placeholder="ابحث "
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
