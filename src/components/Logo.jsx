import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return <Link to="/" >
    <img src="/logo1.png" alt="WorldWise logo" className={styles.logo} />
    {/* TravelTales */}
    </Link>
}

export default Logo;
