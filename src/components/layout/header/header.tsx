import ThemeSwitcher from "@/components/layout/header/theme-switcher";
import CofiLogo from "@/components/logo-svg/cofi-logo";
import { FaChevronDown } from "react-icons/fa";

type Props = object;

export default function Header({ }: Props) {
    
  return (
    <header className="w-full py-2 bg-secondary drop-shadow-lg">
      <div className="w-[92%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <CofiLogo className="h-auto w-28" />
          <ul className="flex items-center gap-4">
            <li className="text-accent flex items-center gap-1 cursor-pointer">
              Shop{" "}
              <FaChevronDown
                className="text-accent relative top-[0.1rem]"
                size={12}
              />
            </li>
            <li className="text-accent cursor-pointer">Blog</li>
            <li className="text-accent cursor-pointer">About</li>
          </ul>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}