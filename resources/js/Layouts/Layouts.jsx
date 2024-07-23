import Loader from "@/component/Loader";
import Navigation from "@/component/Navigation";
import React, { useEffect, useState } from "react";
// import {LoaderName}
function Layouts({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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
