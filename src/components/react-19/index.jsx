import styles from "../styles.module.scss";

const ReactUpdates = () => {
  return (
    <>
      <p className="colorBlue">***** React 19: Faster, Smarter, Better *****</p>
      <section className={styles.column2}>
        <div>
          <h3 className={styles.subTitle}>React Compiler:-</h3>
          <ul>
            <li>
              React doesn't automatically optimize re-renders on state change.
              To optimize these re-renders, you can manually use useMemo(),
              useCallback(), and memo APIs
            </li>
            <li>
              The new React compiler optimizes re-renders automatically,
              reducing the need for manual memoization and ensuring more
              efficient updates based on state changes
            </li>
            <li>
              The React compiler will now manage these re-renders. React will
              decide automatically how and when to change the state and update
              the UI.
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.subTitle}>Server components:-</h3>
          <ul>
            <li>
              They enable you to render UI components on the server, separate
              from your client-side application or traditional server-side
              rendering (SSR) setup.
            </li>
            <li>
              By pre-rendering components on the server, RSCs can significantly
              improve initial page load times. Users see content faster,
              especially for complex UIs. RSCs can be run either at build time
              or for each request, offering flexibility for different use cases.
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.subTitle}>Background Asset Loading:-</h3>
          <ul>
            <li>
              React 19, images and other files will load in the background as
              users explore the current page. This improvement should help
              improve page load times and reduce waiting periods.
            </li>
            <li>
              Also, React is introducing lifecycle Suspense for assets loading,
              including scripts, stylesheets, and fonts. This feature enables
              React to determine when the content is ready to be displayed,
              eliminating any "unstyled" flickering.
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.subTitle}>New React Hooks:-</h3>
          <ul>
            <li>
              This hook provides a straightforward way to consume promises or
              contexts directly within a render function, eliminating the need
              for useEffect and other state management logic .
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ReactUpdates;
