import { bgHero } from "../assets";

const Hero = () => {
  return (
    <section className="relative h-svh">
      <img src={bgHero} alt="Hero" className="w-full h-full object-cover" />

      <div className="overlay"></div>

      <div className="padding-x lg:w-full absolute top-0 h-full flex items-center justify-center z-40">
        <h1 className="h1 lg:hidden text-primary">
          Suit Yourself With A Modern Electric Cars
        </h1>

        <h1 className="h1 max-lg:hidden text-center text-primary">
          Suit Yourself With A Modern
          <br />
          Electric Cars
        </h1>
      </div>
    </section>
  );
};

export default Hero;
