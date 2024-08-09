import styles from "../styles.module.scss";
import domImage from "../../assests/virtualDom.webp";
import componentImage from "../../assests/components.png";

const MagicalReact = () => {
  return (
    <section>
      <p className="colorBlue">
        ***** You all might wonder why react works so fast and what's the magic
        react does behind the scene ? *****
      </p>
      <ol>
        <li>Virtual DOM</li>
        <li>Reconciliation</li>
        <li>Fiber Architecture</li>
        <li>Babel</li>
        <li>Component-based Architecture</li>
      </ol>
      <div className={styles.inlineItems}>
        <div className={styles.wid60}>
          <h3 className={styles.subTitle}>Virtual DOM:-</h3>
          <ul>
            <li>
              React creates a virtual representation of the actual DOM. When a
              component's state or props change, React updates the virtual DOM
              first.
            </li>
            <li>
              The virtual DOM is a lightweight copy of the actual DOM, and
              changes to it are computed very quickly.
            </li>
          </ul>

          <h3 className={styles.subTitle}>Reconciliation:-</h3>
          <ul>
            <li>
              React uses a process called reconciliation to update the actual
              DOM. It compares the virtual DOM with the actual DOM (also known
              as "diffing") and computes the minimum number of changes needed.
            </li>
            <li>
              This way, React only updates parts of the actual DOM that have
              changed, rather than re-rendering the entire DOM.
            </li>
          </ul>

          <h3 className={styles.subTitle}>Fiber Architecture:-</h3>
          <ul>
            <li>
              Fiber is the new reconciliation algorithm introduced in React 16.
              It breaks down the rendering work into smaller units, called
              fibers, which can be paused, stopped, or resumed as needed. This
              makes the rendering process more flexible and efficient.
            </li>
            <li>
              Fiber allows React to be more responsive by working on the
              rendering in small, manageable chunks, prioritizing tasks to
              maintain a smooth and efficient user interface.
            </li>
          </ul>
          <h3 className={styles.subTitle}>Babel:-</h3>
          <ul>
            <li>
              Babel is like a translator for your React code, making it
              understandable to different browsers and ensuring smooth
              performance.
            </li>
            <li>
              Babel converts JSX syntax (which looks like HTML inside
              JavaScript) into regular JavaScript function calls that browsers
              can understand.
            </li>
          </ul>
          <h3 className={styles.subTitle}>Component-based Architecture:-</h3>
          <ul>
            <li>
              This architecture allows developers to break down complex UIs into
              smaller, reusable pieces called components.
            </li>
          </ul>
        </div>
        <div className={styles.wid40}>
          <figure>
            <img src={domImage} alt="virtual dom" />
          </figure>
          <figure>
            <img src={componentImage} alt="component based architecture" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MagicalReact;
