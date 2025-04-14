import CofiLogo from "@/components/logo-svg/cofi-logo";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

type Props = object;

export default function Footer({}: Props) {
  return (
    <footer className="py-14 bg-footer sticky left-0 w-full bottom-0 -z-10">
      <div className="w-[92%] mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-8 md:space-y-0">
          <div>
            <CofiLogo accent="fill-[#F5F5F5]" className="h-auto w-28" />
            <p className="font-lora text-footer-foreground text-3xl max-w-[16ch]">
              Brewing happiness, one cup at a time.
            </p>
          </div>
          <div className="flex items-start gap-12">
            <div>
              <h2 className="text-footer-list-title">Shop</h2>
              <ul>
                <li className="text-footer-list-items">Category A</li>
                <li className="text-footer-list-items">Category B</li>
                <li className="text-footer-list-items">Category C</li>
              </ul>
            </div>
            <div>
              <h2 className="text-footer-list-title">Latest Brews</h2>
              <ul>
                <li className="text-footer-list-items">Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-footer-list-items">Socials</p>
          <ul className="flex items-center space-x-4">
            <li>
              <FaInstagram className="text-[#F5F5F5]" size={32} />
            </li>
            <li>
              <FaLinkedin className="text-[#F5F5F5]" size={32} />
            </li>
            <li>
              <FaYoutube className="text-[#F5F5F5]" size={32} />
            </li>
          </ul>
          <div className="border border-white !mt-6 w-full"></div>
        </div>
      </div>
    </footer>
  );
}
