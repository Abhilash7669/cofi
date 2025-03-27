import ThemeSwitcher from "@/components/layout/header/theme-switcher";

type Props = object;

export default function Header({ }: Props) {
    
  return (
    <header className="w-full flex items-center justify-between p-6 bg-secondary drop-shadow-lg">
      Header here
      <ThemeSwitcher />
    </header>
  )
}