import { useState } from "react";
import Layout from "../components/layout";

function Blog() {
  const dogs = [
    {
      mText1: "Наружный отит и грибы Malassezia1",
      mText2: "Наружный отит и грибы Malassezia1",
      mText3: "Наружный отит и грибы Malassezia1",
      mText4: "Наружный отит и грибы Malassezia1",
      mText5: "Наружный отит и грибы Malassezia1",
      date1: "20 мая 2018",
      date2: "21 мая 2018",
      date3: "22 мая 2018",
      date4: "23 мая 2018",
      date5: "24 мая 2018",
      text1:
        "Данные клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text2:
        "Данные клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text3:
        "Данные клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text4:
        "Данные клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text5:
        "Данные клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
    },
    {
      mText1: "Наружный отит и грибы Malassezia2",
      mText2: "Наружный отит и грибы Malassezia2",
      mText3: "Наружный отит и грибы Malassezia2",
      mText4: "Наружный отит и грибы Malassezia2",
      mText5: "Наружный отит и грибы Malassezia2",
      date1: "1 мая 2018",
      date2: "2 мая 2018",
      date3: "3 мая 2018",
      date4: "4 мая 2018",
      date5: "5 мая 2018",
      text1:
        "Данные2 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text2:
        "Данные2 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text3:
        "Данные2 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text4:
        "Данные2 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text5:
        "Данные2 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
    },
    {
      mText1: "Наружный отит и грибы Malassezia3",
      mText2: "Наружный отит и грибы Malassezia3",
      mText3: "Наружный отит и грибы Malassezia3",
      mText4: "Наружный отит и грибы Malassezia3",
      mText5: "Наружный отит и грибы Malassezia3",
      date1: "10 мая 2018",
      date2: "11 мая 2018",
      date3: "12 мая 2018",
      date4: "13 мая 2018",
      date5: "14 мая 2018",
      text1:
        "Данные3 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text2:
        "Данные3 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text3:
        "Данные3 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text4:
        "Данные3 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
      text5:
        "Данные3 клинического осмотра, указывающие на наличие наружного отита, включают такие признаки, как отек и эритема ушной раковины, выделения из ушей, болезненная реакция и/или беспокойство при пальпации наружного слухового хода и потряхивание головой после т ...",
    },
  ];

  const [fBtn, setFBtn] = useState(true);
  const [sBtn, setSBtn] = useState(false);
  const [tBtn, setTBtn] = useState(false);

  const [mTxt1, setMTxt1] = useState(dogs[0].mText1);
  const [mTxt2, setMTxt2] = useState(dogs[0].mText2);
  const [mTxt3, setMTxt3] = useState(dogs[0].mText3);
  const [mTxt4, setMTxt4] = useState(dogs[0].mText4);
  const [mTxt5, setMTxt5] = useState(dogs[0].mText5);

  const [dt1, setDt1] = useState(dogs[0].date1);
  const [dt2, setDt2] = useState(dogs[0].date2);
  const [dt3, setDt3] = useState(dogs[0].date3);
  const [dt4, setDt4] = useState(dogs[0].date4);
  const [dt5, setDt5] = useState(dogs[0].date5);

  const [txt1, setTxt1] = useState(dogs[0].text1);
  const [txt2, setTxt2] = useState(dogs[0].text2);
  const [txt3, setTxt3] = useState(dogs[0].text3);
  const [txt4, setTxt4] = useState(dogs[0].text4);
  const [txt5, setTxt5] = useState(dogs[0].text5);

  const changeImg = (i) => {
    setMTxt1(dogs[i].mText1);
    setMTxt2(dogs[i].mText2);
    setMTxt3(dogs[i].mText3);
    setMTxt4(dogs[i].mText4);
    setMTxt5(dogs[i].mText5);

    setDt1(dogs[i].date1);
    setDt2(dogs[i].date2);
    setDt3(dogs[i].date3);
    setDt4(dogs[i].date4);
    setDt5(dogs[i].date5);

    setTxt1(dogs[i].text1);
    setTxt2(dogs[i].text2);
    setTxt3(dogs[i].text3);
    setTxt4(dogs[i].text4);
    setTxt5(dogs[i].text5);
  };

  return (
    <>
      <Layout>
        <section className="max-w-6xl mx-auto p-3">
          <div className="lg:flex lg:space-x-40  text-sm my-8 lg:my-16">
            <div>
              <p className="text-7xl font-serif lg:max-w-xs">Блог</p>
            </div>
            <div className="flex-1 space-y-20">
              <div className="flex  justify-end  space-x-5  select-none font-semibold text-lg">
                <button
                  onClick={() => {
                    changeImg(0);
                    setFBtn(true);
                    setSBtn(false);
                    setTBtn(false);
                  }}
                  className={`${fBtn ? " underline" : " "}`}
                >
                  1
                </button>
                <button
                  onClick={() => {
                    changeImg(1);
                    setFBtn(false);
                    setSBtn(true);
                    setTBtn(false);
                  }}
                  className={`${sBtn ? " underline" : ""}`}
                >
                  2
                </button>
                <button
                  onClick={() => {
                    changeImg(2);
                    setFBtn(false);
                    setSBtn(false);
                    setTBtn(true);
                  }}
                  className={`${tBtn ? "underline" : ""}`}
                >
                  3
                </button>
              </div>
              <div className="space-y-12">
                <Dog mTEXT={mTxt1} data={dt1} btx={txt1} />
                <Dog mTEXT={mTxt2} data={dt2} btx={txt2} />
                <Dog mTEXT={mTxt3} data={dt3} btx={txt3} />
                <Dog mTEXT={mTxt4} data={dt4} btx={txt4} />
                <Dog mTEXT={mTxt5} data={dt5} btx={txt5} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function Dog(props) {
  return (
    <>
      <div className="flex space-x-8 ">
        <div>
          <img className="lg:w-52 lg:h-52" src="/img/smalldog.png" />
        </div>
        <div className="flex flex-col justify-evenly">
          <p className=" font-serif text-xl font-semibold">{props.mTEXT}</p>
          <div className="space-y-3">
            <p className="text-xs opacity-60">{props.data}</p>
            <p className="max-w-xl opacity-80">{props.btx}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
