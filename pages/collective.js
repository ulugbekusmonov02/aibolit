import Layout from "../components/layout";
import Link from "next/link";
function Collective() {
  return (
    <>
      <Layout>
        <section className="my-12 p-3">
          <div className="max-w-6xl mx-auto ">
            <div className="lg:flex text-sm lg:space-x-32">
              <div className="space-y-10">
                <p className="text-7xl font-serif lg:max-w-xs">Коллектив</p>
                <div className=" hidden lg:flex flex-col  text-sm text-blue-500 font-bold  space-y-5">
                  <div>
                    <Link href={"#we"}>
                      <a className=" opacity-60 hover:opacity-100">О НАС</a>
                    </Link>
                  </div>
                  <div>
                    <Link href={"#spc"}>
                      <a className=" opacity-60 hover:opacity-100">
                        СПЕЦИАЛИСТЫ
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-10">
                <img src="/img/collective.png" alt="photo" />
                <div className="space-y-4" id="we">
                  <p className="text-xl font-serif font-semibold">О нас </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
                <Specialists />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function Specialists() {
  return (
    <>
      <section id="spc">
        <div className="space-y-4">
          <div>
            <p className="text-xl font-serif font-semibold">Специалисты</p>
          </div>
          <div className="grid max-w-fit mx-auto lg:grid-cols-2 gap-6">
            <Specialist
              image={"/img/ivanova.png"}
              practise={"стаж 10 лет"}
              name={"Иванова Анастасия Андреевна "}
            />
            <Specialist
              image={"/img/konst.png"}
              practise={"стаж 5 лет"}
              name={"Константинопольский Константин Константинович"}
            />
            <Specialist
              image={"/img/anast.png"}
              practise={"стаж 4 года"}
              name={"Иванова Анастасия Андреевна"}
            />
            <Specialist
              image={"/img/konsta.png"}
              practise={"стаж 8 месяцев"}
              name={"Константинопольский Константин Константинович"}
            />
            <Specialist
              image={"/img/glass.png"}
              practise={"стаж 1 год"}
              name={"Иванова Анастасия Андреевна "}
            />
            <Specialist
              image={"/img/konst2.png"}
              practise={"стаж 5 лет"}
              name={" Константинопольский Константин Константинович"}
            />
            <Specialist
              image={"/img/anast2.png"}
              practise={"стаж 4 года"}
              name={"Иванова Анастасия Андреевна "}
            />
            <Specialist
              image={"/img/anast3.png"}
              practise={"стаж 3 месяца"}
              name={" Константинопольский Константин Константинович"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Specialist(props) {
  return (
    <>
      <div className="flex border shadow-lg rounded-2xl py-6 px-4 space-x-4 transition-all hover:scale-105 select-none duration-500 cursor-pointer">
        <div className="space-y-8 flex flex-col items-center">
          <img
            src={props.image}
            style={{ width: "160px", height: "95px" }}
            alt="PHOTO"
          />
          <p className=" text-green-600 text-xs select-none font-bold">
            {props.practise}
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <span className=" text-xs opacity-60 font-serif">врач</span>
            <p className="font-semibold">{props.name} </p>
          </div>
          <div className="max-w-s space-y-2">
            <span className=" text-xs opacity-60 font-serif">
              специализация
            </span>
            <p className="font-semibold">
              Терапия, УЗИ-диагностика, хирургия, ортопедия, лаборатория
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Collective;
