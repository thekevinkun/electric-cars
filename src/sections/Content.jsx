import { CarCard } from "../components";
import { cars } from "../constants";

const Content = () => {
  return (
    <main className="flex flex-col">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          id={car.id}
          title={car.title}
          description={car.description}
          imageUrl={car.imageUrl}
          logoImgUrl={car.logoImgUrl}
          webUrl={car.webUrl}
          demoUrl={car.demoUrl}
          className={car.className}
        />
      ))}
    </main>
  );
};

export default Content;
