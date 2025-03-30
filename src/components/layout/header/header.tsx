import ThemeSwitcher from "@/components/layout/header/theme-switcher";
import CofiLogo from "@/components/logo-svg/cofi-logo";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";

type Props = object;

export default function Header({ }: Props) {
    
  return (
    <header className="w-full py-2 bg-secondary/50 backdrop-blur-lg drop-shadow-lg sticky top-0 z-50">
      <div className="w-[92%] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <CofiLogo className="h-auto w-28" />
          <ul className="hidden lg:flex lg:items-center lg:gap-4">
            <li>
              <Button
                variant="link"
                className="text-accent flex items-center gap-1 cursor-pointer"
              >
                Shop
                <FaChevronDown
                  className="relative top-[0.1rem]"
                />
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-accent decoration-accent">
                Blog
              </Button>
            </li>
            <li>
              <Button variant="link" className="text-accent decoration-accent">
                About
              </Button>
            </li>
          </ul>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}