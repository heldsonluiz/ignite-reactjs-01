import styles from "./Header.module.css";
import taskLogo from "../assets/todo-logo.svg";
import brazilFlagfrom from "../assets/brazil-svgrepo-com.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={taskLogo} alt="Logotipo do desafio" />
      <div className={styles.badge}>
        <a href="https://www.google.com/search?sxsrf=ALiCzsaZReOYLo4E1UMnuxrVPybJhd6zOg:1670446377928&q=Copa+do+Mundo&si=AC1wQDBF6y_xDnTuq1dsk6wlPElP2pajpUO__mRNTFNooCLaOO2HcjSKEM0Cld_ikKkLzCoV8WEOIgz_SU-LvE9hzLgFPhDuOoc7Q3sWg1MKJJbioLCZJAlq05jdizdnH6f2i1Ywm0SB-aWYEgPzifn9se8esRHh8FSo_X-hocKDchk4S4h35vHO4lNVpxuUV-iPqPiPmGY6IGRQuxHbvWA1nk6GOuvbfUW3V18UtQH_p3j5ktPutcQ5D9-5LowBIfsWPoXR-RBN73fBDaHqd6YN9PnwFFcyhdtKagZ-LL_TheKAhVRrLUN90eh5M_yMZtry-XNEtLBmvdLoJaPH2KUOsNiumTqnxvzbv6GHDtXtjfUSUDU3lmH6dSUpNJ9fOTclFgJcY2nyrpm9LVTpJXxmt1R-qW_xPw%3D%3D&sa=X&ved=2ahUKEwjG4-PXsej7AhV1LbkGHfXLCokQ6RN6BAghEAE&biw=1920&bih=936&dpr=1#sie=lg;/m/0fp_8fm;2;/m/030q7;br;fp;1;;;">
          <img
            src={brazilFlagfrom}
            alt="Bandeira do Brasil"
            title="Vai Brasil"
          />
        </a>
      </div>
    </header>
  );
}
