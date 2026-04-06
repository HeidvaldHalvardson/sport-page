import { TariffSelection } from '@/features/TariffSelection';

const MainPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-5 md:mt-12">
      <h1 className="font-bold text-[clamp(22px,6vw,40px)] text-white mb-5 md:mb-28">
        Выбери подходящий для себя <span className="text-gold-main">тариф</span>
      </h1>
      <TariffSelection />
    </div>
  );
};

export default MainPage;
