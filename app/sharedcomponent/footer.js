import "../style/footer.css";
import {
  BsFacebook,
  BsWhatsapp,
  BsMessenger,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column flex-lg-row">
          <ul className="list me-1">
            <li>الرئيسية</li>
            <li>المطاعم</li>
            <li>المناسبات</li>
            <li>المقالات</li>
          </ul>
          <ul className="list me-1">
            <li>الرئيسية</li>
            <li>المطاعم</li>
            <li>المناسبات</li>
            <li>المقالات</li>
          </ul>
          <ul className="list me-1">
            <li>الرئيسية</li>
            <li>المطاعم</li>
            <li>المناسبات</li>
            <li>المقالات</li>
          </ul>
          <ul className="list me-1">
            <li>الرئيسية</li>
            <li>المطاعم</li>
            <li>المناسبات</li>
            <li>المقالات</li>
          </ul>

          <ul className="list me-1 d-flex justify-content-center">
            <li className="icon-item">
              <BsFacebook />
            </li>
            <li className="icon-item">
              <BsWhatsapp />
            </li>
            <li className="icon-item">
              <BsMessenger />
            </li>
            <li className="icon-item">
              <BsTwitter />
            </li>
            <li className="icon-item">
              <BsYoutube />
            </li>
          </ul>
          <p className="ms-4 mt-1">+95178679867868</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
