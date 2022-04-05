import { Close, CloseFix, Hamburger, Logo, Map } from "../../utils/icon";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(true);
  const openMenu = () => {
    setMenu(!menu);
  };

  const [city, setCity] = useState("Волгоград");
  const changeCity1 = () => {
    setCity("Волгоград");
    setOpen(false);
  };
  const changeCity2 = () => {
    setCity("Грозный");
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const changeMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button onClick={openMenu} className="w-9 h-9 lg:hidden">
            {Hamburger}
          </button>
          <Link href={"/"}>
            <a className="flex items-center justify-center">{Logo}</a>
          </Link>
          <ul className="relative hidden lg:flex items-center uppercase text-green-400  font-bold text-sm space-x-20">
            <Pages page={"/user"} text={"Личный кабинет"} />
            <div className="group">
              <Pages page={"/"} text={"О нас"} />
              <div className="absolute z-50 rounded-lg space-y-5 border-2 shadow-xl font-serif opacity-100 bg-white px-6 py-4  hidden group-hover:flex top-10  flex-col text-black">
                <Link href={"/service"}>
                  <a className="opacity-60 hover:opacity-100 transition-all duration-500">
                    Услуги и цены
                  </a>
                </Link>
                <Link href={"/collective"}>
                  <a className=" opacity-60 hover:opacity-100 transition-all duration-500">
                    Коллектив
                  </a>
                </Link>
                <Link href={"/history"}>
                  <a className="opacity-60 hover:opacity-100 transition-all duration-500">
                    История компании
                  </a>
                </Link>
              </div>
            </div>
            <Pages page={"/contact"} text={"Контакты"} />
          </ul>

          <button
            className="flex p-2 items-center opacity-70 hover:opacity-100  duration-500 transition-all"
            onClick={changeMenu}
          >
            {Map}
            <p className="text-green-400  uppercase font-bold">{city}</p>
          </button>
          <div
            className={`fixed flex items-center z-50  justify-center  inset-0  bg-black bg-opacity-50 ${
              open ? "visibility" : "invisible"
            }`}
          >
            <div className="bg-white p-4 rounded-2xl">
              <div className="flex justify-end ">
                <button onClick={changeMenu}>{CloseFix}</button>
              </div>
              <div className="flex flex-col justify-center space-y-10 py-6 lg:py-12 px-16 lg:px-28">
                <p className="text-xl lg:text-4xl font-semibold tracking-wide font-serif">
                  Ваш город
                </p>
                <button
                  className="font-medium p-2 lg:text-lg hover:bg-green-300 hover:rounded-xl "
                  onClick={changeCity1}
                >
                  Волгоград
                </button>
                <button
                  className="font-medium p-2 lg:text-lg hover:bg-green-300 hover:rounded-xl "
                  onClick={changeCity2}
                >
                  Грозный
                </button>
              </div>
            </div>
          </div>

          <MobileMenu closeM={openMenu} menu={menu} />
        </div>
      </header>
    </>
  );
}

function Pages(props) {
  return (
    <>
      <li className="transform duration-500 transition-all hover:text-green-900  py-3">
        <Link href={props.page}>
          <a>{props.text}</a>
        </Link>
      </li>
    </>
  );
}

function MobileMenu(props) {
  return (
    <>
      <div
        className={`lg:hidden fixed inset-y-0 z-50 shadow-xl bg-white  p-4 flex space-x-14 justify-center items-start transition-all duration-500 ${
          !props.menu ? "translate-x-0 shadow-xl" : "-translate-x-full"
        }`}
      >
        <ul className="uppercase text-green-600  font-bold text-md  space-y-14 mt-2">
          <Pages page={"/user"} text={"Личный кабинет"} />
          <Pages page={"/history"} text={"О нас"} />
          <Pages page={"/contact"} text={"Контакты"} />
        </ul>
        <button onClick={props.closeM}>{Close}</button>
      </div>
    </>
  );
}
export default Header;
