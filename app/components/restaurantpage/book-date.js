import "../../style/book-date.css";
const BookDate = () => {
  return (
    <div className="book-container">
      <h5 className="text-center">احجز موعد</h5>
      <hr />
      <div className="d-flex flex-column text-center">
        <select className="form-select">
          <option selected>اليوم</option>
          <option value="1">السبت</option>
          <option value="2">الأحد</option>
          <option value="3">الأثنين</option>
        </select>
        <hr />
        {/*  date input and time*/}
        <div className="d-flex">
          <input type="date" className="form-control me-1" />
          <input type="time" className="form-control" />
        </div>
        {/*  button red for booking*/}
        <button className="btn btn-danger mt-3 py-2">احجز الآن</button>
      </div>
    </div>
  );
};

export default BookDate;
