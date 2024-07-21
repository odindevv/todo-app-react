export const Aside = ({ handleFilterChange, filter }) => {
  return (
    <aside className="aside">
      <ul className="aside__ul">
        <li className="aside__list">
          <span className="circle__color circle__color--work"></span>
          <p>work</p>
        </li>
        <li className="aside__list">
          <span className="circle__color circle__color--study"></span>
          <p>study</p>
        </li>
        <li className="aside__list">
          <span className="circle__color circle__color--entertainment"></span>
          <p>entertainment</p>
        </li>
        <li className="aside__list">
          <span className="circle__color circle__color--family"></span>
          <p>family</p>
        </li>
      </ul>
      <div className="aside__task">
        <button
          className={`btn__aside__filter ${
            filter === "all" && "btn__aside__filter--selected"
          }`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`btn__aside__filter ${
            filter === "completed" && "btn__aside__filter--selected"
          }`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
        <button
          className={`btn__aside__filter ${
            filter === "pending" && "btn__aside__filter--selected"
          }`}
          onClick={() => handleFilterChange("pending")}
        >
          Pending
        </button>
      </div>
    </aside>
  );
};
