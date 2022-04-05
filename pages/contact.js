import Layout from "../components/layout";
import { Alarm, FacebookMap, Phone } from "../utils/icon";

function Contacts() {
  return (
    <>
      <Layout>
        <section className=" my-12 lg:my-24">
          <div className="max-w-6xl  mx-auto grid lg:grid-cols-2 p-3">
            <div>
              <p className="text-3xl flex items-center justify-center  lg:justify-start font-bold font-serif tracking-wider">
                Контакты
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center lg:items-start lg:flex-col  md:space-x-4 lg:space-x-0">
                <Contact
                  mtext={"Айболит на Краснополянской"}
                  text1={"Дзержинский район, ул. Краснополянская, 30"}
                  text2={"96 22 92"}
                  text3={"Круглосуточно"}
                />
                <Contact
                  mtext={"Айболит на Тулака"}
                  text1={"Советский район, ул. Карла Маркса, 7"}
                  text2={"96 22 92"}
                  text3={"Круглосуточно"}
                />
              </div>
            </div>
            <div>
              <iframe
                className="hidden lg:block"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577336.764106847!2d36.82512728226206!3d55.580748067851246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1648444955458!5m2!1sru!2s"
                width="600"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function Contact(props) {
  return (
    <>
      <div className="space-y-9 mt-10">
        <p className="font-semibold text-2xl">{props.mtext}</p>
        <div className="space-y-9 ml-6">
          <div className="flex items-center space-x-5">
            {FacebookMap}
            <p className=" max-w-s">{props.text1}</p>
          </div>
          <div className="flex items-center space-x-5">
            {Phone}
            <p>{props.text2}</p>
          </div>
          <div className="flex items-center space-x-5">
            {Alarm}
            <p>{props.text3}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;
