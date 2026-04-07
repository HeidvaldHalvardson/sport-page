interface GuaranteeProps {
  className?: string;
}

export const Guarantee = (props: GuaranteeProps) => {
  const { className = '' } = props;

  return (
    <div className={`${className} border border-[#484d4e] rounded-[20px] p-3`}>
      <p className="py-3 px-4 text-[clamp(14px,4vw,28px)] text-[#81fe95] font-[500] border border-[#81fe95] rounded-[30px] bg-[#2d3233] w-fit mb-2 lg:mb-8">
        гарантия возврата 30 дней
      </p>
      <p className="text-[clamp(13px,4vw,24px)] text-[#dcdcdc]">
        Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4
        недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки,
        если ты не получишь видимых результатов.
      </p>
    </div>
  );
};
