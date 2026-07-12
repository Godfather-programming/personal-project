import styles from "@/src/layouts/Layout.module.scss";
import Header from "@/src/layouts/Header";
import Footer from "@/src/layouts/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={styles.main}> {children} </main>
      <Footer />
    </div>
  );
}

export default Layout;
