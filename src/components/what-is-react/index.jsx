import styles from "../styles.module.scss";
import logo from "../../assests/logo.png";
import plainJsImage from "../../assests/plainJs.png";
import jsxImage from "../../assests/jsx.png";
import outPutImage from "../../assests/outPut.png";
import indexImage from "../../assests/indexFile.png";
import componentsImage from "../../assests/componentBased.png";

const WhatIsReact = () => {
  return (
    <>
      <section className={styles.inlineItems}>
        <div>
          <h2 className={styles.subHeading}>What is React ?</h2>
          <ul className={styles.wid60}>
            <li>
              React.js is an open-source JavaScript library, crafted with
              precision by Facebook.
            </li>
            <li>
              React is a Declarative, Component-based, Javascript library for
              building user interfaces.
            </li>
            <li>
              It "reacts" quickly to changes without reloading the whole page.
            </li>
            <li>
              User interface built with React as a collection of components,
              each responsible for outputting a small, reusable piece of HTML
              code.
            </li>
          </ul>
        </div>
        <figure className={styles.wid40}>
          <img src={logo} alt="logo" />
        </figure>
      </section>
      <section className={styles.inlineImages}>
        <figure>
          <figcaption>Pure Javascript Written Code( index.js file )</figcaption>
          <img src={plainJsImage} alt="" />
        </figure>
        <figure>
          <figcaption>index.html file</figcaption>
          <img src={indexImage} alt="" />
        </figure>
        <figure>
          <figcaption>Code Written In React Using Jsx</figcaption>
          <img src={jsxImage} alt="" />
        </figure>
        <figure>
          <figcaption>Same Output with both the codes</figcaption>
          <img src={outPutImage} alt="" />
        </figure>
        <figure>
          <figcaption>Component Based UI</figcaption>
          <img src={componentsImage} alt="" />
        </figure>
      </section>
    </>
  );
};

export default WhatIsReact;
