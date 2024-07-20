import { CiHome } from "react-icons/ci";
import { RxGithubLogo } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="flex justify-between my-auto w-full text-[#e1e2e4] *:my-aut0 *:text-xl *:mt-3">
      <CiHome />
      <a href="https://linkedin.com/in/moses-annan">
        <LiaLinkedin />
      </a>
      <a href="https://mosesannan.pythonanywhere.com/moses-annan/portfolio/home/">
        <CgProfile />
      </a>
      <a href="https://github.com/akisupi">
        <RxGithubLogo />
      </a>
    </div>
  );
};
export default Footer;
