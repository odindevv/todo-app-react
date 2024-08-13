export const Aside = ({ handleFilterChange, filter }) => {
  return (
    <aside className="aside">
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
