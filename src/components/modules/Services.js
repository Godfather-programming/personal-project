import styles from "@/src/components/modules/Services.module.scss";
import SectionIntroduction from "@/src/components/modules/SectionIntroduction";
import ServicesCard from "./ServicesCard";
import servicesIcons from "@/src/constants/ServicesIcons";

function Services() {
  return (
    <section className={styles.services} id="Services">
      <div className={styles.container}>
        <SectionIntroduction title="Services" text="What We Provide You?" />
        <div className={`${styles.row} ${styles.wrapper}`}>
          {servicesIcons.map((item) => (
            <div className={`${styles.col_lg_4} ${styles.col_md_6} ${styles.col_12}`} key={item.key}>
              <ServicesCard
                svg={item.svg}
                title={item.title}
                text={item.text}
                bgcolor={item.bgColor}
                shapeColor={item.shapeColor}
                shadowColor={item.shadowColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
