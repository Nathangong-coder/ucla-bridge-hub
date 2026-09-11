import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BearMark from "@/components/BearMark";
import { ChunkyLink, SuitRule } from "@/components/Bits";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route for", location.pathname);
  }, [location.pathname]);

  return (
    <section className="suit-lattice flex min-h-[70vh] items-center bg-blue py-20 text-center text-cream">
      <div className="container">
        <BearMark className="mx-auto h-16 w-auto text-gold" />
        <p className="eyebrow mt-8 text-gold">Revoke</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,12vw,7rem)] leading-none text-gold text-stamp">
          404
        </h1>
        <p className="mx-auto mt-6 max-w-md font-body text-lg leading-relaxed text-cream/85">
          You have led a card that is not in your hand. There is no page at{" "}
          <code className="font-body text-gold">{location.pathname}</code>.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ChunkyLink to="/" variant="gold">
            Back to the table
          </ChunkyLink>
          <ChunkyLink to="/join" variant="cream">
            Join the club
          </ChunkyLink>
        </div>
        <SuitRule className="mt-12 text-cream opacity-30" />
      </div>
    </section>
  );
};

export default NotFound;
