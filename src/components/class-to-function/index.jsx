import classImage from "../../assests/classFunction.JPG";
import hooksImage from "../../assests/hooks.jpg";
import styles from "../styles.module.scss";

const ClassToFunc = () => {
  return (
    <section>
      <p className="colorBlue">
        ***** Class and Functional components in React *****
      </p>
      <div className={styles.inlineItems}>
        <div className={styles.wid50}>
          <h3 className={styles.subTitle}>Class Components:-</h3>
          <ul>
            <li>
              React Class Components are JavaScript classes that extend
              React.Component. They define the UI, manage state, and handle
              events within your application
            </li>
          </ul>

          <h3 className={styles.subTitle}>Functional Components:-</h3>
          <ul>
            <li>
              Functional components are JavaScript functions that return HTML.
              They are a simpler way to write components in React compared to
              class components
            </li>
          </ul>
          <h3 className={styles.subTitle}>State Management:-</h3>
          <ul>
            <li>Class components managed state using `this.state`.</li>
            <li>
              Functional components use the `useState` hook for state
              management.
            </li>
          </ul>
        </div>
        <div className={styles.wid50}>
          <figure>
            <img src={classImage} alt="class component" />
          </figure>
        </div>
      </div>
      <p className="colorBlue">
        ***** The Rise of Functional Components: Superpowers Unlocked *****
      </p>
      <ul>
        <li>Simpler Syntax</li>
        <li>Hooks</li>
        <li>Readability and Maintainability</li>
        <li>Performance</li>
      </ul>
      <p className="colorBlue">***** Hooks *****</p>
      <ul>
        <li>
          React used to be tricky to use, but it got much easier in 2018 with a
          new feature called "Hooks". Hooks made React simpler and faster, so
          more people started using it.
        </li>
        <li>
          <strong> State Management: </strong> Functional components can use the
          useState hook to manage state, whereas class components use this.state
          and this.setState.
        </li>
        <li>
          <strong> Side Effects: </strong> Functional components use the
          useEffect hook to handle side effects like data fetching,
          subscriptions, or manually changing the DOM, replacing lifecycle
          methods like componentDidMount, componentDidUpdate, and
          componentWillUnmount.
        </li>
        <li>
          <strong>Custom Hooks: </strong> You can create custom hooks to
          encapsulate and reuse logic in functional components, promoting
          cleaner and more modular code.
        </li>
      </ul>
      <p className="colorBlue"> ***** Common Hooks *****</p>
      <div className={styles.inlineItems}>
        <ol className={styles.wid60}>
          <li>
            <strong> useState: </strong> Manages component state.
          </li>
          <li>
            <strong>useEffect: </strong> Handles side effects like data
            fetching, subscriptions, and DOM manipulations.
          </li>
          <li>
            <strong> useContext: </strong>Accesses global context values.
          </li>
          <li>
            <strong> useRef: </strong> Creates mutable references to DOM
            elements or values.
          </li>
          <li>
            <strong>useCallback: </strong>
            Memoizes callback functions to optimize performance.
          </li>
          <li>
            <strong>useMemo: </strong>
            Memoizes expensive calculations to avoid unnecessary
            re-computations.
          </li>
        </ol>
        <figure className={styles.wid40}>
          <img src={hooksImage} alt="hooks" />
        </figure>
      </div>
    </section>
  );
};

export default ClassToFunc;
