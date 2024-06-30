import Footer from "@/component/Footer";
import Navigation from "@/component/Navigation";

function Layouts({ children, social }) {
  return (
    <>
      <Navigation />
      <main className="relative bg-dark-background text-white z-10">
        {children}
      </main>
    </>
  );
}

export default Layouts;
