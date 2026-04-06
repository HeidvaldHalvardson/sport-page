import { TariffSelectionForm } from './TariffSelectionForm';

interface TariffSelectionProps {
  className?: string;
}

export const TariffSelection = (props: TariffSelectionProps) => {
  const { className = '' } = props;

  return (
    <div className={`${className} grid grid-cols-1 lg:grid-cols-[380px_1fr]`}>
      <div className="w-[100px] md:w-[200px] lg:w-[380px] mx-auto">
        <img
          className="w-full h-auto"
          src="/images/man.png"
          alt="."
        />
      </div>
      <TariffSelectionForm />
    </div>
  );
};
