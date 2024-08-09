import styles from "./styles.module.scss";

const Skeleton = ({ height = "300px", marginBlock = "20px" }) => {
  return (
    <div
      className={styles.skeleton}
      style={{ height: `${height}`, marginBlock: `${marginBlock}` }}
    />
  );
};

export default Skeleton;
