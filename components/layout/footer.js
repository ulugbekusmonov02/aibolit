import {
  Apple,
  Facebook,
  Instagram,
  LogoF,
  VKontakt,
  YouTube,
} from "../../utils/icon";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className=" bg-brown-500 text-white px-6">
        <div className=" max-w-7xl mx-auto py-20 flex flex-col  lg:flex-row lg:justify-between">
          <div>
            <div className="flex items-center space-x-5">
              {LogoF}
              <div className="flex flex-col ">
                <span className="text-3xl font-semibold">Айболит</span>
                <span className=" uppercase text-xs tracking-widest">
                  ветеринарная клиника
                </span>
              </div>
            </div>
            <div className=" space-y-6 lg:space-y-0  flex flex-col lg:flex-row  lg:ml-20 lg:space-x-10 mt-11">
              <Link href={"#"}>
                <a className="max-w-xs hidden lg:block">
                  Политика конфиденциальности в отношении обработки персональных
                  данных
                </a>
              </Link>
              <div className="flex flex-col md:flex-row md:space-x-24 ">
                <LinkFooter
                  styleClass={"flex flex-col space-y-2  "}
                  links={[
                    "Главная",
                    "Услуги и цены",
                    "История компании",
                    "Наши специалисты",
                    "Вакансии",
                    "Реквизиты",
                    "Онлайн-оплата",
                  ]}
                />
                <LinkFooter
                  styleClass={"flex flex-col space-y-2 "}
                  links={[
                    "Отзывы",
                    "Контакты",
                    "Гроуминг-салон",
                    "Косметика",
                    "Новостии акции",
                    "Отзывы",
                  ]}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="hidden lg:flex space-x-5 ">
              <button className="flex items-center py-1 px-8 bg-black border-white border rounded-2xl space-x-3">
                {Apple}
                <div className="flex flex-col">
                  <span className="text-xs self-start">Загрузите в</span>
                  <span className="text-md font-medium">App Store</span>
                </div>
              </button>
              <button className="flex items-center py-2 px-8 bg-black border-white border rounded-2xl space-x-3">
                {Apple}
                <div className="flex flex-col">
                  <span className="text-xs self-start">Доступно в</span>
                  <span className="text-md font-medium">Google Play</span>
                </div>
              </button>
            </div>
            <div className=" mt-9 ml-2">
              <div className="flex space-x-6 lg:space-x-20">
                <Link href={"#"}>
                  <a>{Instagram}</a>
                </Link>
                <Link href={"#"}>
                  <a>{Facebook}</a>
                </Link>
                <Link href={"#"}>
                  <a> {VKontakt}</a>
                </Link>
                <Link href={"#"}>
                  <a> {YouTube}</a>
                </Link>
              </div>
              <div className="flex flex-col mt-5 lg:mt-10 text-lg">
                <Link href={"#"}>
                  <a>aibolit34.ru</a>
                </Link>
                <Link href={"#"}>
                  <a>aibolit34@gmail.com</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function LinkFooter(props) {
  return (
    <ul className={props.styleClass}>
      {props.links.map((link, index) => (
        <Link href={"#"} key={index}>
          <a className="hover:underline hover:opacity-60 duration-500 transition-all transform">
            <li>{link}</li>
          </a>
        </Link>
      ))}
    </ul>
  );
}

export default Footer;
