import { useState } from "react";
import style from "./Pagination.module.css";
const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages] = useState(Math.round(data.length / dataLimit));
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
    window.scrollTo(0,0);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
    window.scrollTo(0,0);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    window.scrollTo(0,0);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <ul>
        {getPaginatedData().map((activity) => (
          <RenderComponent
            key={activity.id}
            id={activity.id}
            image={activity.poster_url}
            title={activity.name}
            date={activity.start}
            address={activity.venue.name}
          />
        ))}
      </ul>
      {/* show the pagiantion
          it consists of next and previous buttons
          along with page numbers, in our case, 5 page
          numbers at a time
      */}
      <div className={style.pagination}>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`${style.prev} ${currentPage === 1 ? style.disabled : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${style.paginationItem} ${
              currentPage === item ? style.active : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`${style.next} ${
            currentPage === pages ? style.disabled : ""
          }`}
        >
          next
        </button>
      </div>
    </>
  );
};
export default Pagination;
