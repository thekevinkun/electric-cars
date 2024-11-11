import { Button } from "../components";

const CarCard = ({ id, title, description, imageUrl, logoImgUrl, webUrl }) => {
  return (
    <section id={id} className="relative w-full h-[100svb]">
      <img src={imageUrl} alt={id} className="w-full h-full object-cover" />

      <div className="overlay-content"></div>

      <div className="padding-x padding-y w-full h-full absolute top-0 z-40">
        <div className="h-full flex flex-col lg:max-w-[50rem] sm:max-w-[40rem] max-w-[24rem] mx-auto text-center">
          <div className="flex flex-col items-center">
            <img
              src={logoImgUrl}
              alt="Car Logo"
              className={`w-14 h-14 object-contain`}
            />

            <h2 className="h2 pt-1 text-primary">{title}</h2>
          </div>

          <p className="sub-text pt-3 lg:pt-2 text-primary">{description}</p>

          <div className="mt-auto flex gap-5 items-center justify-center">
            <Button
              href={webUrl}
              className="bg-blue-thunder text-sm"
              textButton="text-button !text-primary"
              px="md:px-10 px-5"
              py="py-2"
            >
              Visit Homepage
            </Button>

            <Button
              className="text-button bg-primary text-sm"
              textButton="text-button"
              px="md:px-10 px-5"
              py="py-2"
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
