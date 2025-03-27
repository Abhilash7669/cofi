"use client"

type Props = object;

export default function ThemeSwitcher({ }: Props) {

    function handleTheme(e: React.MouseEvent<HTMLButtonElement>): void {

        e.preventDefault();

        if (typeof window !== "undefined") {

            const themeAttribute = document.body.getAttribute("data-theme");

            if (themeAttribute === "light") {
                document.body.setAttribute("data-theme", "dark");
            } else {
                document.body.setAttribute("data-theme", "light");
            }

        }

    }   

    return <button className="text-primary cursor-pointer" type="button" onClick={handleTheme}>Toggle Theme</button>
}