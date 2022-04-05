import Layout from "../components/layout";
import Link from "next/link";
import { Before } from "../utils/icon";
function Registration() {
  return (
    <>
      <Layout>
        <section className="max-w-6xl mx-auto ">
          <div className="grid lg:grid-cols-2 mb-96 p-3 mt-6">
            <div className=" flex  items-center mt-8">
              <p className="text-7xl font-serif lg:max-w-xs">Запись на прием</p>
            </div>
            <div className="mt-10 lg:mt-0">
              <button className="flex space-x-3 items-center text-green-600 group">
                <div className=" group-hover:-translate-x-3 duration-500 transition-all">
                  {Before}
                </div>
                <Link href={"/"}>
                  <a className=" font-bold opacity-50 hover:opacity-100">
                    НАЗАД
                  </a>
                </Link>
              </button>
              <div className="space-y-4 mt-10">
                <div className="flex justify-between py-4 px-6 border shadow-lg rounded-xl select-none hover:scale-105 duration-500">
                  <p>Онлайн-консультация</p>
                  <p>2000 ₽</p>
                </div>
                <div className="flex justify-between py-4 px-6 border shadow-lg rounded-xl  select-none hover:scale-105 duration-500">
                  <p>Прием в клинике</p>
                  <p>Бесплатно</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Registration;
