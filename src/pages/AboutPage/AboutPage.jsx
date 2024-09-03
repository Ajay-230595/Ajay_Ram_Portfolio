import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2011 - 2012"}
                  timeline_title={"High School "}
                  location={"Sai Holy Faith High School, Mumbai"}
                  details={
                    "Completed my High School from Maharashtra State Board with 66%."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2013 - 2014"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"Yashwant Rao Chavan, Mumbai"}
                  details={
                    "Completed my Secondary (10+2) from Maharashtra State Board with 47%."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2018 - 2019"}
                  timeline_title={"Bachelors in Computer Science "}
                  location={"Rajiv Gandhi College. Mumbai University"}
                  details={
                    "Completed my Bachelor degree in Computer Science from mumbai University with 7.50 Pointer."
                  }
                  img={
                    "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              ></div>
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2019 - 2021"}
                  timeline_title={"Customer relationship manager"}
                  location={"ICICI Lombard General Insurance"}
                  details={
                    "I have worked as a junior associate in ICICI Lombard. "
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2021 - 2023"}
                  timeline_title={"Process Associate "}
                  location={"Tata Consultancy Services"}
                  details={
                    "Worked as an Process Associate in Tata Neu application."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2024"}
                  timeline_title={"Process Associate"}
                  location={"One Point One Solution"}
                  details={
                    "I am working as an Process Associate in Tata Neu application."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
