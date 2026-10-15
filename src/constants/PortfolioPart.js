import { BASE_PATH } from "./siteUrl";

const portfolioList = [
  { key: 1, option: "All Work", selected: true },
  { key: 2, option: "Illustration", selected: false },
  { key: 3, option: "Animation", selected: false },
  { key: 4, option: "App UI", selected: false },
  { key: 5, option: "Web UI", selected: false },
  { key: 6, option: "Social Media", selected: false },
  { key: 7, option: "Print Design", selected: false },
];

const portfolioImages = [
  { key: 1, src: `${BASE_PATH}/images/portfolio-1.jpg`, title: "Illustration" },
  { key: 2, src: `${BASE_PATH}/images/portfolio-2.jpg`, title: "Illustration" },
  { key: 3, src: `${BASE_PATH}/images/portfolio-3.jpg`, title: "Illustration" },
  { key: 4, src: `${BASE_PATH}/images/portfolio-3.jpg`, title: "Animation" },
  { key: 5, src: `${BASE_PATH}/images/portfolio-2.jpg`, title: "Animation" },
  { key: 6, src: `${BASE_PATH}/images/portfolio-1.jpg`, title: "Animation" },
  { key: 7, src: `${BASE_PATH}/images/portfolio-2.jpg`, title: "App UI" },
  { key: 8, src: `${BASE_PATH}/images/portfolio-3.jpg`, title: "App UI" },
  { key: 9, src: `${BASE_PATH}/images/portfolio-1.jpg`, title: "App UI" },
  { key: 10, src: `${BASE_PATH}/images/portfolio-3.jpg`, title: "Web UI" },
  { key: 11, src: `${BASE_PATH}/images/portfolio-1.jpg`, title: "Web UI" },
  { key: 12, src: `${BASE_PATH}/images/portfolio-2.jpg`, title: "Web UI" },
  { key: 13, src: `${BASE_PATH}/images/portfolio-2.jpg`, title: "Social Media" },
  { key: 14, src: `${BASE_PATH}/images/portfolio-2.jpg`, title: "Social Media" },
  { key: 15, src: `${BASE_PATH}/images/portfolio-2.jpg`, title: "Social Media" },
  { key: 16, src: `${BASE_PATH}/images/portfolio-3.jpg`, title: "Print Design" },
  { key: 17, src: `${BASE_PATH}/images/portfolio-3.jpg`, title: "Print Design" },
  { key: 18, src: `${BASE_PATH}/images/portfolio-3.jpg`, title: "Print Design" },
];

export { portfolioList, portfolioImages };
