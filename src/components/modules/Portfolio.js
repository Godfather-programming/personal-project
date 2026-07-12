"use client";

import React, { use, useEffect, useState } from "react";
import styles from "@/src/components/modules/Portfolio.module.scss";
import SectionIntroduction from "./SectionIntroduction";
import { portfolioList, portfolioImages } from "@/src/constants/PortfolioPart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

function Portfolio() {
  const [list, setList] = useState(portfolioList);
  const [images, setImages] = useState(portfolioImages);
  // const [title, setTitle] = useState(false);

const selectHandler = (desiredItem) => {
  // ابتدا Fade Out
  setVisible(false);

  // بعد از پایان انیمیشن
  setTimeout(() => {
    // تغییر منوی انتخاب‌شده
    const newList = list.map((item) => ({
      ...item,
      selected: item.key === desiredItem.key,
    }));
    setList(newList);

    // تغییر تصاویر
    if (desiredItem.option === "All Work") {
      setImages(portfolioImages);
    } else {
      const newImages = portfolioImages.filter(
        (image) => image.title === desiredItem.option
      );

      setImages(newImages);
    }

    // شروع Fade In
    setVisible(true);
  }, 1000); // برابر با مدت transition در CSS
};

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 10); // it is 10ms

    return () => clearTimeout(timer);
  }, [images]);

  return (
    <section id="Portfolio">
      <div className={styles.container}>
        <SectionIntroduction
          title="Portfolio"
          text="Check In Our Latest Works"
        />

        <ul className={styles.menu}>
          {list.map((item) => (
            <Link key={item.key} href="#" className={styles.menu__link}>
              <li
                className={
                  item.selected === true
                    ? `${styles.menu__item} ${styles.menu__item_selected}`
                    : styles.menu__item
                }
                onClick={() => selectHandler(item)}
              >
                {" "}
                {item.option}{" "}
              </li>
            </Link>
          ))}
        </ul>

<Swiper
  key={list.find(item => item.selected)?.option}
  className={styles.swiper}
  modules={[Pagination]}
  spaceBetween={10}
  pagination={{ clickable: true }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }}
>
  {images.map((item) => (
    <SwiperSlide key={item.key}>
      <div
        style={{ backgroundImage: `url(${item.src})` }}
        className={`${styles.wrapper__image} ${visible ? styles.show : ""} `}
      />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
}

export default Portfolio;