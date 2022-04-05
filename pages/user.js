import Layout from "../components/layout";
import Link from "next/link";
import { AddPet, Cat, Photo } from "../utils/icon";

function User() {
  return (
    <>
      <Layout>
        <section className="max-w-6xl mx-auto p-3">
          <div className="lg:flex max-w-fit mx-auto lg:space-x-28">
            <div className="flex flex-col space-y-14 mt-12 ">
              <p className="text-5xl font-semibold font-serif">Виктория</p>
              <div className="hidden lg:flex flex-col  text-sm text-blue-500 font-bold  space-y-5   ">
                <div>
                  <Link href={"#user"}>
                    <a className="opacity-60 hover:opacity-100">
                      ЛИЧНЫЕ ДАННЫЕ
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"#pet"}>
                    <a className=" opacity-60 hover:opacity-100">МОИ ПИТОМЦЫ</a>
                  </Link>
                </div>
                <div>
                  <Link href={"#reception"}>
                    <a className=" opacity-60 hover:opacity-100">
                      ЗАПИСЬ НА ПРИЕМ
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"/"}>
                    <a className=" opacity-60 hover:opacity-100">ВЫЙТИ</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 my-14">
              <p className="text-xl font-serif font-medium">Личные данные</p>
              <div className="mt-6">
                <div
                  className="flex border shadow-xl rounded-xl py-10 px-2 space-x-5"
                  id="user"
                >
                  <div className="flex flex-col items-center space-y-4">
                    {Photo}
                    <button className="text-lg text-green-600 opacity-60 hover:opacity-100 font-semibold">
                      изменить
                    </button>
                  </div>
                  <div className="flex flex-col  space-y-4">
                    <div className="space-y-1">
                      <Spans span={"имя"} />
                      <TextInform text={"Виктория"} />
                    </div>
                    <div className="space-y-1">
                      <Spans span={"фамилия"} />
                      <TextInform text={"Иванова"} />
                    </div>
                    <div className="space-y-1">
                      <Spans span={"отчетсво"} />
                      <TextInform text={"Александровна"} />
                    </div>
                    <div className="space-y-1">
                      <Spans span={"телефон"} />
                      <TextInform text={"+7 999 598-12"} />
                    </div>
                  </div>
                  <div>
                    <Spans span={"О себе"} />
                    <p className="text-md max-w-md ">
                      Живу в Волгограде, очень люблю животных! Мечтаю завести
                      много зверей и построить приют. Пока что у меня собака,
                      кошка и рыбки :)
                    </p>
                  </div>
                </div>
              </div>

              <Add />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function Add() {
  return (
    <>
      <section className=" mt-12" id="pet">
        <div className="space-y-6">
          <p className="text-xl font-serif">Мои питомцы</p>
          <button className="flex items-center py-1 px-4 bg-orange-999 bg-opacity-80 hover:bg-opacity-100  w-full rounded-2xl">
            {AddPet}
            <p className="text-white font-bold">ДОБАВИТЬ НОВОГО ПИТОМЦА</p>
          </button>
        </div>
        <MyPet />
      </section>
    </>
  );
}

function MyPet() {
  return (
    <>
      <section className=" mt-8">
        <div>
          <div className="flex space-x-12 border shadow-xl rounded-xl py-10 px-3 ">
            <div className="flex space-x-6">
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/img/cat.png"
                  style={{ width: "90px", height: "90px" }}
                  alt="photo"
                />
                <button className="text-lg text-green-600 opacity-60 hover:opacity-100 font-semibold">
                  изменить
                </button>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Spans span={"тип"} />
                  <TextInform text={"Кошка"} />
                </div>
                <div className="space-y-1">
                  <Spans span={"пол"} />
                  <TextInform text={"Женский"} />
                </div>
                <div className="space-y-1">
                  <Spans span={"порода"} />
                  <TextInform text={"Русская голубая"} />
                </div>
                <div className="space-y-1">
                  <Spans span={"возраст"} />
                  <TextInform text={"4месяца"} />
                </div>
              </div>
            </div>
            <div className=" space-y-4 hidden lg:block">
              <div>
                <Spans span={"медицинская карта"} />
                <p className="max-w-md">
                  Медицинскую карту заводят при первом посещении клиники и
                  обновляют при каждом обращении. Здесь вы сможете посмотреть и
                  скачать актуальную карту в формате pdf
                </p>
              </div>
              <div>
                <Spans span={"результаты анализов"} />
                <TextInform text={"Пока нет готовых анализов"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reception />
    </>
  );
}

function Reception() {
  return (
    <>
      <section className=" mt-24 space-y-4" id="reception">
        <p className="text-xl font-serif font-medium">Запись на прием</p>
        <div className="border shadow-xl rounded-xl py-10 px-3">
          <div className="flex space-x-10">
            <div className="flex space-x-5">
              <div className="flex flex-col items-center space-y-4 ">
                <img
                  style={{ width: "90px", height: "90px" }}
                  src="/img/reception.png"
                  alt="photo"
                />
                <button className="text-green-600 opacity-60 hover:opacity-100 font-bold">
                  отменить <br></br> прием
                </button>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Spans span={"врач"} />
                  <p className="font-serif max-w-s">
                    Иванова <br></br> Ирина Владимировна
                  </p>
                </div>
                <div>
                  <Spans span={"ветклиника"} />
                  <p className="font-serif max-w-s">
                    Айболит на Краснополянской
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <Spans span={"питомец"} />
                <TextInform text={"Громопетр"} />
              </div>
              <div>
                <Spans span={"дата"} />
                <TextInform text={"15.10.19"} />
              </div>
              <div>
                <Spans span={"время"} />
                <TextInform text={"15:45"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Spans(props) {
  return (
    <>
      <span className=" text-xs opacity-60 font-serif">{props.span}</span>
    </>
  );
}

function TextInform(props) {
  return (
    <>
      <p className="text-xs">{props.text}</p>
    </>
  );
}

export default User;
