import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header/header";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainLayout({ children, className }: Props) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
