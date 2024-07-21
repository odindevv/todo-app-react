import add from "../assets/add.svg";
import adjustLeft from "../assets/adjust-left.svg";
import adjustRight from "../assets/adjust-right.svg";

export const Header = ({ openModal, toggle }) => {
  return (
    <header className="header">
      <div className="header-right">
        <h1 className="header__logo">todo</h1>
      </div>
      <div className="header__left">
        <img
          src={add}
          alt=""
          onClick={openModal}
          className="header__icon header__icon--add"
        />
        <img
          src={adjustLeft}
          alt=""
          onClick={toggle}
          className="header__icon header__icon-adjust"
        />
      </div>
    </header>
  );
};
