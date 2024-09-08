import "./contact.css";
import Image from "next/image";

import linkedInIcon from "../../../public/icons/linkedin.svg";
import githubIcon from "../../../public/icons/github.svg";
import phoneIcon from "../../../public/icons/phone.svg";
import emailIcon from "../../../public/icons/email.svg";
import randoImage from "../../../public/rando.jpeg";

const Contact = () => {
  return (
    <div className="contactSection">
      <Image src={randoImage} width={150} alt="rando" className="randoImage" />
      <div className="contactLinks">
        <div className="contactLinksSection">
          <Image src={emailIcon} alt="email" width={50} className="emailIcon" />
          <div className="contactLinksSectionLinks">
            <a href="mailto:christian@veiby.com">christian@veiby.com</a>
            <br />
            <a href="mailto:christian@veiby.com">chriveib@stud.ntnu.no</a>
          </div>
        </div>
        <div className="contactLinksSection">
          <Image src={phoneIcon} alt="phone" width={50} className="emailIcon" />
          <div className="contactLinksSectionLinks">
            <a href="tel:+4796904420">+47 969 04 420</a>
            <br />
            <a href="tel:+18053251557">+1 805 325 1557</a>
          </div>
        </div>
        <div className="contactLinksProfiles">
          <div>
            <a
              className="contactProfileLink"
              href="https://www.linkedin.com/in/christian-veiby-2084a0211"
              target="_blank"
            >
              <Image src={linkedInIcon} width={50} alt="linkedIn" />
            </a>
          </div>
          <div>
            <a
              className="contactProfileLink"
              href="https://github.com/chrvei00"
              target="_blank"
            >
              <Image src={githubIcon} width={50} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
