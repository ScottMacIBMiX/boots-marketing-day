import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/boots-logo.png";
import EventLogo from "../../assets/ibm-logo.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="diageo-soi-header">
      <Link href="/">
        <div className="diageo-soi-header__secondary-logo">
          <Image
            src={EventLogo}
            width={80}
            height={30}
            alt="Spirit of Innovation Logo"
          />
        </div>
      </Link>
      <div className="diageo-soi-header__logo">
        <Image src={Logo} width={80} height={30} alt="Diageo & IBM Logo" />
      </div>
    </div>
  );
};

export default Header;
