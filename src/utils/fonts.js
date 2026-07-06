import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "../fonts/Poppins-Black.ttf",
      style: "normal",
      weight: "900",
    },

    {
      path: "../fonts/Poppins-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../fonts/Poppins-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../fonts/Poppins-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../fonts/Poppins-Regular.ttf",
      style: "normal",
      weight: "400",
    },
  ],
});

// path: "..../../public/fonts/Poppins-Black.ttf",

export default fonts;
