import Layout from "../components/layout";
import Link from "next/link";
import { Before } from "../utils/icon";

function History() {
  return (
    <>
      <Layout>
        <section>
          <div className="max-w-6xl mx-auto lg:flex lg:space-x-40 p-3">
            <div className="space-y-10 mt-12 lg:mt-24">
              <p className="text-7xl font-serif lg:max-w-xs">
                История компании
              </p>
              <div className=" hidden lg:flex flex-col  text-sm text-blue-500 font-bold  space-y-5">
                <div>
                  <Link href={"#1"}>
                    <a className=" opacity-60 hover:opacity-100">
                      ПОЗДАГОЛОВОК 1
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"#2"}>
                    <a className=" opacity-60 hover:opacity-100">
                      ПОЗДАГОЛОВОК 2
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href={"#3"}>
                    <a className=" opacity-60 hover:opacity-100">
                      ПОДЗАГОЛОВОК 3
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:flex-1 my-8 text-sm space-y-14">
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
              <img src="/img/cat1.png" className="mt-20" />
              <Subtitle1 />
              <Subtitle2 />
              <Subtitle3 />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function Subtitle1() {
  return (
    <>
      <section id="1">
        <div className=" space-y-6">
          <p className="text-xl font-serif font-semibold">Подзаголовок 1</p>
          <p>
            Терапия - область гуманной и ветеринарной медицины, занимающаяся
            непосредственно лечением патологий, облегчением состояния больного и
            устранением симптомов заболеваний.
          </p>
          <div>
            <p>
              Терапевтическое отделение клиники Айболит занимается диагностикой
              и лечением следующих болезней:
            </p>
            <ul>
              <Benefits text={"органов пищеварения"} />
              <Benefits text={"органов сердечно-сосудистой системы"} />
              <Benefits text={"органов дыхательной системы"} />
              <Benefits text={"нервной системы"} />
              <Benefits text={"органов мочевыделительной системы"} />
              <Benefits text={"эндокринной системы"} />
              <Benefits text={"нарушения обмена веществ"} />
              <Benefits text={"кожи и ее производных"} />
              <Benefits text={"органов чувств"} />
              <Benefits text={"репродуктивной области"} />
              <Benefits text={"инфекционной и инвазионной природы"} />
              <Benefits text={"токсикологической природы"} />
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
      <section id="2">
        <div className="space-y-6">
          <p className="text-xl font-serif font-semibold">Подзаголовок 2</p>
          <p>
            В нашей клинике имеются как врачи-терапевты общей практики, так и
            узкие специалисты по ряду перечисленных областей, что дает
            возможность излечивать тяжелые и редкие случаи патологий.
          </p>
          <div
            className="lg:flex max-w-fit mx-auto lg:mx-0 space-y-4 lg:space-y-0 lg:space-x-10"
            style={{ width: "300px" }}
          >
            <img src="/img/cat2.png" />
            <img src="/img/dog1.png" />
          </div>
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
          <div className="space-y-2">
            <p>
              Некоторую диагностику можно провести тут же на месте в течение
              буквально нескольких минут, что немаловажно для экстренных случаев
              и значительно экономят время владельцам:
            </p>
            <ul>
              <Benefits
                text={"гематологический и биохимический анализы крови"}
              />
              <Benefits text={"исследование Т4 и кортизол"} />
              <Benefits text={"анализ газов крови"} />
              <Benefits text={"рентген"} />
              <Benefits
                text={"ультразвуковое исследование брюшной полости и сердца"}
              />
              <Benefits text={"микроскопия мазков и соскобов"} />
              <Benefits text={"люминесцентный тест на лишай"} />
              <Benefits
                text={"экспресс-анализы на основные вирусные заболевания."}
              />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Subtitle3() {
  return (
    <>
      <section id="3">
        <div className="space-y-6">
          <p className="text-xl font-serif font-semibold">Подзаголовок 3</p>
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
function Benefits(props) {
  return (
    <>
      <li>- {props.text};</li>
    </>
  );
}
export default History;
