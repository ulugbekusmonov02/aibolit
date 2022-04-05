import Layout from "../components/layout";
import Link from "next/link";
import { Before } from "../utils/icon";
import { useState } from "react";

function Services() {
  const [firstB, setFirstB] = useState(true);
  const [secondB, setSecondB] = useState(false);
  const [thirdB, setThirdB] = useState(false);
  const prices = [
    {
      first: "Прием",
      firstP: "320 ₽",
      second: "Прием повторный",
      secondP: "220 ₽",
      third: "Консультация без осмотра животного",
      thirdP: "350 ₽",
      fourth: "Вызов врача на дом",
      fourthP: "1000 ₽",
      fifth: "Полная выписка из истории болезни",
      fifthP: "500 ₽",
      six: "Консультация по медицинским документам",
      sixP: "500 ₽",
      seven: "Прием",
      sevenP: "320 ₽",
      eigth: "Прием повторный",
      eigthP: "220 ₽",
      nine: "Консультация без осмотра животного",
      nineP: "350 ₽",
      ten: "Вызов врача на дом",
      tenP: "1000 ₽",
      eleven: "Полная выписка из истории болезни",
      elevenP: "500 ₽",
      twelve: "Консультация по медицинским документам",
      twelveP: "500 ₽",
    },
    {
      first: "Прием",
      firstP: "500 ₽",
      second: "Прием",
      secondP: "220 ₽",
      third: "Консультация без осмотра животного",
      thirdP: "1000 ₽",
      fourth: "Консультация по медицинским документам",
      fourthP: "500 ₽",
      fifth: "Прием повторный",
      fifthP: "220 ₽",
      six: "Полная выписка из истории болезни",
      sixP: "500 ₽",
      seven: "Полная выписка из истории болезни",
      sevenP: "220 ₽",
      eigth: "",
      eigthP: "220 ₽",
      nine: "Вызов врача на дом",
      nineP: "1000 ₽",
      ten: "Прием",
      tenP: "320 ₽",
      eleven: "Прием",
      elevenP: "1000 ₽",
      twelve: "Полная выписка из истории болезни",
      twelveP: "320 ₽",
    },
    {
      first: "Консультация по медицинским документам",
      firstP: "500 ₽",
      second: "Вызов врача на дом",
      secondP: "320 ₽",
      third: "Прием",
      thirdP: "1000 ₽",
      fourth: "Консультация без осмотра животного",
      fourthP: "320 ₽",
      fifth: "Полная выписка из истории болезни",
      fifthP: "500 ₽",
      six: "Прием",
      sixP: "220 ₽",
      seven: "Полная выписка из истории болезни",
      sevenP: "500 ₽",
      eigth: "Прием повторный",
      eigthP: "320 ₽",
      nine: "Консультация по медицинским документам",
      nineP: "220 ₽",
      ten: "Полная выписка из истории болезни",
      tenP: "500 ₽",
      eleven: "Консультация по медицинским документам",
      elevenP: "320 ₽",
      twelve: "Консультация по медицинским документам",
      twelveP: "1000 ₽",
    },
  ];

  const [text1, setText1] = useState(prices[0].first);
  const [money1, setMoney1] = useState(prices[0].firstP);

  const [text2, setText2] = useState(prices[0].second);
  const [money2, setMoney2] = useState(prices.secondP);

  const [text3, setText3] = useState(prices[0].third);
  const [money3, setMoney3] = useState(prices[0].thirdP);

  const [text4, setText4] = useState(prices[0].fourth);
  const [money4, setMoney4] = useState(prices[0].fourthP);

  const [text5, setText5] = useState(prices[0].fifth);
  const [money5, setMoney5] = useState(prices[0].fifthP);

  const [text6, setText6] = useState(prices[0].six);
  const [money6, setMoney6] = useState(prices[0].sixP);

  const [text7, setText7] = useState(prices[0].seven);
  const [money7, setMoney7] = useState(prices[0].sevenP);

  const [text8, setText8] = useState(prices[0].eigth);
  const [money8, setMoney8] = useState(prices[0].eigthP);

  const [text9, setText9] = useState(prices[0].nine);
  const [money9, setMoney9] = useState(prices[0].nineP);

  const [text10, setText10] = useState(prices[0].ten);
  const [money10, setMoney10] = useState(prices[0].tenP);

  const [text11, setText11] = useState(prices[0].eleven);
  const [money11, setMoney11] = useState(prices[0].elevenP);

  const [text12, setText12] = useState(prices[0].twelve);
  const [money12, setMoney12] = useState(prices[0].twelveP);

  const changePrices = (i) => {
    setText1(prices[i].first);
    setMoney1(prices[i].firstP);

    setText2(prices[i].second);
    setMoney2(prices[i].secondP);

    setText3(prices[i].third);
    setMoney3(prices[i].thirdP);

    setText4(prices[i].fourth);
    setMoney4(prices[i].fourthP);

    setText5(prices[i].fifth);
    setMoney5(prices[i].fifthP);

    setText6(prices[i].six);
    setMoney6(prices[i].sixP);

    setText7(prices[i].seven);
    setMoney7(prices[i].sevenP);

    setText8(prices[i].eigth);
    setMoney8(prices[i].eigthP);

    setText9(prices[i].nine);
    setMoney9(prices[i].nineP);

    setText10(prices[i].ten);
    setMoney10(prices[i].tenP);

    setText11(prices[i].eleven);
    setMoney11(prices[i].elevenP);

    setText12(prices[i].twelve);
    setMoney12(prices[i].twelveP);
  };
  return (
    <>
      <Layout>
        <section className="max-w-5xl mx-auto p-3">
          <div className="lg:flex lg:space-x-40">
            <div className="flex  flex-col mt-24 space-y-14">
              <p className="text-5xl font-semibold font-serif">Терапия</p>
              <div className="hidden lg:flex flex-col  text-sm text-blue-500 font-bold  space-y-5   ">
                <div>
                  <Link href={"#"}>
                    <a className="opacity-60 hover:opacity-100">
                      ЗАПИСАТЬСЯ НА ПРИЕМ
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"#terapy"}>
                    <a className="opacity-60 hover:opacity-100">
                      ТЕРАПИЯ В НАШЕЙ КЛИНИКЕ
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"#subtitle1"}>
                    <a className="opacity-60 hover:opacity-100">
                      ПОЗДАГОЛОВОК 1
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"#subtitle2"}>
                    <a className="opacity-60 hover:opacity-100">
                      ПОЗДАГОЛОВОК 2
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"#price"}>
                    <a className="opacity-60 hover:opacity-100">ЦЕНЫ</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 mt-28 text-sm space-y-5">
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
              <div className="flex flex-col space-y-6" id="terapy">
                <p className="text-xl font-serif font-medium">
                  Терапия в нашей клинике
                </p>
                <p>
                  Терапия - область гуманной и ветеринарной медицины,
                  занимающаяся непосредственно лечением патологий, облегчением
                  состояния больного и устранением симптомов заболеваний.
                </p>
                <div>
                  <p>
                    Терапевтическое отделение клиники Айболит занимается
                    диагностикой и лечением следующих болезней:
                  </p>
                  <ul>
                    <Benefit text={"органов пищеварения"} />
                    <Benefit text={"органов сердечно-сосудистой системы"} />
                    <Benefit text={"органов дыхательной системы"} />
                    <Benefit text={"нервной системы"} />
                    <Benefit text={"органов мочевыделительной системы"} />
                    <Benefit text={"эндокринной системы"} />
                    <Benefit text={"нарушения обмена веществ"} />
                    <Benefit text={"кожи и ее производных"} />
                    <Benefit text={"органов чувств"} />
                    <Benefit text={"репродуктивной области"} />
                    <Benefit text={"инфекционной и инвазионной природы"} />
                    <Benefit text={"токсикологической природы"} />
                  </ul>
                </div>
              </div>
              <Subtitle />
              <Subtitle2 />
              <Price
                slide={changePrices}
                btn1={firstB}
                btn2={secondB}
                btn3={thirdB}
                set1={setFirstB}
                set2={setSecondB}
                set3={setThirdB}
                txt1={text1}
                txt2={text2}
                txt3={text3}
                txt4={text4}
                txt5={text5}
                txt6={text6}
                txt7={text7}
                txt8={text8}
                txt9={text9}
                txt10={text10}
                txt11={text11}
                txt12={text12}
                prc1={money1}
                prc2={money2}
                prc3={money3}
                prc4={money4}
                prc5={money5}
                prc6={money6}
                prc7={money7}
                prc8={money8}
                prc9={money9}
                prc10={money10}
                prc11={money11}
                prc12={money12}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function Benefit(props) {
  return (
    <>
      <li>- {props.text};</li>
    </>
  );
}

function Subtitle() {
  return (
    <>
      <section id="subtitle1">
        <div className="space-y-5">
          <p className="text-xl font-serif font-medium">Подзаголовок 1</p>
          <p>
            В нашей клинике имеются как врачи-терапевты общей практики, так и
            узкие специалисты по ряду перечисленных областей, что дает
            возможность излечивать тяжелые и редкие случаи патологий.
          </p>
          <img src="/img/drug.png" alt="photo" />
          <p>
            Врач-терапевт подходит к лечению животного комплексно,
            предварительно изучив его анамнез, учитывая возраст, пол, породу,
            наличие хронических болезней, условия содержания, типа кормления,
            оценив общее состояние питомца, полностью осмотрев его и назначив
            необходимую диагностику и соответствующее лечение.
          </p>
          <p>
            Врачи клиники имеют широкий спектр диагностических возможностей, что
            является идеальным условием для постановки точного диагноза, а
            значит и назначения того лечения, которое наиболее эффективно
            справится с данным конкретным клиническим случаем.
          </p>
          <div>
            <p>
              Некоторую диагностику можно провести тут же на месте в течение
              буквально нескольких минут, что немаловажно для экстренных случаев
              и значительно экономят время владельцам:
            </p>
            <ul>
              <Benefit
                text={"гематологический и биохимический анализы крови"}
              />
              <Benefit text={"исследование Т4 и кортизол"} />
              <Benefit text={"анализ газов крови"} />
              <Benefit text={"рентген"} />
              <Benefit
                text={"ультразвуковое исследование брюшной полости и сердца"}
              />
              <Benefit text={"микроскопия мазков и соскобов"} />
              <Benefit text={"люминесцентный тест на лишай"} />
              <Benefit
                text={"экспресс-анализы на основные вирусные заболевания."}
              />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Subtitle2() {
  return (
    <>
      <section id="subtitle2">
        <div className="space-y-5">
          <p className="text-xl font-serif font-medium">Подзаголовок 2</p>
          <p>
            Большинство исследований, требующих седации (эндоскопия, МРТ,
            лапароскопия), так же доступны в течение суток. Более сложные
            анализы, такие как бактериологический посев, гормоны,
            гистологическое исследование мы направляем в дистанционную
            лабораторию.
          </p>
          <p>
            Получив результаты исследований врач приступает к анализу причин и
            механизмов развития болезни и назначает лечение. Оно может быть
            медикаментозным (домашним или стационарным) или оперативным
            (экстренным или плановым).
          </p>
          <p>
            Эффективность терапии в большой степени зависит и от владельца
            животного, ведь именно ему необходимо будет соблюдать предписания
            врача, вовремя давать препараты или ставить уколы, следить за
            развитием динамики и симптомов, чтобы вовремя оповестить врача о
            происходящих изменениях, для своевременной коррекции лечения.
          </p>
          <p>
            Кроме лечения терапевты занимаются и профилактикой заболеваний.
            Доктора с удовольствием расскажут вам основы выращивания, содержания
            и кормления питомца, графики дегельминтизаций и прививок. Оформят
            ветеринарный паспорт и чипируют ваше животное.
          </p>
        </div>
      </section>
    </>
  );
}

function Price(props) {
  return (
    <>
      <section id="price">
        <div className="space-y-7">
          <p className="text-xl font-serif font-medium">Цены</p>
          <div className="flex justify-between">
            <p className=" max-w-s lg:max-w-md">
              Цены указаны без учета расходоных материалов
            </p>
            <div className=" space-x-2 lg:space-x-8  select-none font-semibold">
              <button
                onClick={() => {
                  props.slide(0);
                  props.set1(true);
                  props.set2(false);
                  props.set3(false);
                }}
                className={`${props.btn1 ? "underline" : " "}`}
              >
                1
              </button>
              <button
                onClick={() => {
                  props.slide(1);
                  props.set1(false);
                  props.set2(true);
                  props.set3(false);
                }}
                className={`${props.btn2 ? "underline" : " "}`}
              >
                2
              </button>
              <button
                onClick={() => {
                  props.slide(2);
                  props.set1(false);
                  props.set2(false);
                  props.set3(true);
                }}
                className={`${props.btn3 ? "underline" : " "}`}
              >
                3
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <p>{props.txt1}</p>
              <span>{props.prc1}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt2}</p>
              <span>{props.prc2}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt3}</p>
              <span>{props.prc3}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt4}</p>
              <span>{props.prc4}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt5}</p>
              <span>{props.prc5}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt6}</p>
              <span>{props.prc6}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt7}</p>
              <span>{props.prc7}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt8}</p>
              <span>{props.prc8}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt9}</p>
              <span>{props.prc9}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt10}</p>
              <span>{props.prc10}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt11}</p>
              <span>{props.prc11}</span>
            </div>
            <div className="flex justify-between">
              <p>{props.txt12}</p>
              <span>{props.prc12}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
