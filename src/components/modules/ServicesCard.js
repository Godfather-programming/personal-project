import styles from "@/src/components/modules/ServicesCard.module.scss";

function ServicesCard({ svg, title, text, bgcolor, shapeColor, shadowColor }) {
  return (
    <div
      className={`${styles.wrapper} `}
      style={{ backgroundColor: bgcolor, boxShadow: `0 0 4rem ${shadowColor}` }}
    >
      {svg}
      <h3 className={styles.wrapperTitle}> {title} </h3>
      <p className={styles.wrapperText}> {text} </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="369.92"
        // height="223.59"
        viewBox="0 0 369.92 223.59"
        className={styles.wrapperShape}
      >
        <path
          id="shape"
          d="M1249.08,2700.557s15.007-66.794,51.8-54.34,43.02,57.737,121.7,13.585,95.662-58.3,124.531-23.774S1619,2601.5,1619,2601.5v223.59H1249.08Z"
          transform="translate(-1249.08 -2601.498)"
          fill={shapeColor}
        />
      </svg>
    </div>
  );
}

export default ServicesCard;
