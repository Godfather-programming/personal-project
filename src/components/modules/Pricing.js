import styles from "@/src/components/modules/Pricing.module.scss";
import SectionIntroduction from "@/src/components/modules/SectionIntroduction";
import pricingSpecifications from "@/src/constants/PricingSpecifications";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <section className={styles.pricingSection} id="Pricing">
      <div className={styles.container}>
        <SectionIntroduction
          title="Pricing"
          text="Check Our Services Package"
        />

        <div className={`${styles.cardsWrapper}`}>
          {pricingSpecifications.map((item) => (
            <PricingCard item={item} key={item.key} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
