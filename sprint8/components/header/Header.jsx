export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="#" alt="logo" />
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search" />
          <button type="button">
            <img src="#" alt="search" />
          </button>
        </div>
        <div className="header__menu">
          <button type="button">
            <img src="#" alt="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
