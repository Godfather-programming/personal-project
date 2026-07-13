import React from "react";
import styles from "@/src/components/modules/pricingCard.module.scss";
import Link from "next/link";

function PricingCard({ item }) {
  return (
    <div className={`${styles.pricingCard} ${styles.col_4}`}>
      <div
        className={styles.specification}
        style={{ backgroundColor: item.specificationColor }}
      >
        <h3 className={styles.specification__title}> {item.type} </h3>
        <p className={styles.specification__price}> {item.price} </p>
        <p> {item.method} </p>
      </div>

      <ul className={styles.priceList}>
        {item.features.map((item) => (
          <li key={item.key} className={styles.priceList__item}>
            {" "}
            {/* <span> */}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.058"
              height="11.773"
              viewBox="0 0 14.058 11.773"
            >
              <path
                id="Icon_material-done"
                data-name="Icon material-done"
                d="M1355.037,6029.945l-3.028-3.231-1.009,1.077,4.037,4.309,8.651-9.233-1.009-1.077Z"
                transform="translate(-1350.315 -6021.058)"
                fill="#333"
                stroke="#333"
                strokeWidth="1"
              />
            </svg>
            {/* </span>{" "} */}
            {item.text}{" "}
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className={styles.button}
        style={{
          backgroundColor: item.buttonColor
            ? item.buttonColor
            : item.specificationColor,
        }}
      >
        {" "}
        Choose Plan{" "}
      </Link>
    </div>
  );
}

export default PricingCard;
