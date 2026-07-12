import styles from "@/src/components/modules/ContactUs.module.scss";
import SectionIntroduction from "@/src/components/modules/SectionIntroduction";
import FormInput from "../elements/FormInput";
import contactUsIcons from "@/src/constants/ContactUsIcons";

function ContactUs() {
  return (
    <section className={styles.sectionIntroduction} id="Contact">
      <SectionIntroduction title="Contact Us" text="Let's Keep In Touch" />
      <div className={styles.contactUsSection}>
        <div className={`${styles.container} ${styles.parent}`}>
          {/* <div className={styles.map}>


        </div> */}

          <form className={styles.specificationsForm}>
            <span className={styles.specificationsForm__title}>
              {" "}
              Get in Touch{" "}
            </span>

            <div className={styles.inputWrapper}>
              <FormInput placeholder="Your Name" />
              <FormInput placeholder="Your Email Address" />
              <FormInput placeholder="Subject" />
              <FormInput placeholder="Estimated Budget" />
            </div>

            <textarea
              placeholder="Enter Your Message"
              className={styles.specificationsForm__textarea}
              rows={11}
            />

            <button className={styles.specificationsForm__button}>
              {" "}
              Submit{" "}
            </button>
          </form>

          <div className={styles.mapIcon}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="35.999"
              viewBox="0 0 26 35.999"
            >
              <path
                id="map_pin"
                data-name="map pin"
                d="M634,7348a13.034,13.034,0,0,0-13,13.038c0,8.921,11.634,22.019,12.129,22.572a1.168,1.168,0,0,0,1.742,0c.5-.553,12.129-13.65,12.129-22.572A13.034,13.034,0,0,0,634,7348Zm0,19.6a6.559,6.559,0,1,1,6.541-6.559A6.557,6.557,0,0,1,634,7367.6Z"
                transform="translate(-621 -7348)"
                fill="#0abead"
              />
            </svg>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
