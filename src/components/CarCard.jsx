import { Button } from "../components";

const CarCard = ({ id, title, description, imageUrl, logoImgUrl, webUrl }) => {
  return (
    <section id={id} className="relative w-full h-[100svb]">
      <img src={imageUrl} alt={id} className="w-full h-full object-cover" />

      <div className="overlay-content"></div>

      <div className="padding-x padding-y w-full h-full absolute top-0 z-40">
        <div className="h-full flex flex-col text-center">
          <div className="flex flex-col items-center">
            <img
              src={logoImgUrl}
              alt="Car Logo"
              className={`w-14 h-14 object-contain`}
            />

            <h2 className="h2 pt-2 md:pt-1 text-primary">{title}</h2>
          </div>

          <div className="lg:max-w-[45rem] sm:max-w-[40rem] max-w-[24rem] mx-auto">
            <p className="sub-text pt-3 lg:pt-2 text-primary">{description}</p>
          </div>

          <div className="mt-auto flex sm:gap-5 gap-2 items-center sm:justify-center justify-between">
            <Button
              href={webUrl}
              className="bg-thunder-blue text-[0.825rem] sm:text-sm max-[378px]:text-xs hover:bg-hover-thunder-blue transition-[background-color] duration-300"
              textButton="text-button !text-primary"
              px="md:px-10 sm:px-5 px-4"
              py="py-[10px]"
            >
              Visit Homepage
            </Button>

            <Button
              className="text-button bg-slate-white text-[0.825rem] sm:text-sm max-[378px]:text-xs hover:bg-hover-slate-white transition-[background-color] duration-300"
              textButton="text-button"
              px="md:px-10 sm:px-5 px-4"
              py="py-[10px]"
            >
              Demo Drive
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCard;
