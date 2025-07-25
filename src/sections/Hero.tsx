import whiteQueen from "../assets/images/assets_task_01jyr7gzhfevt8h0gdjz56gzmm_1751012596_img_1 1.svg";
import blackQueen from "../assets/images/assets_task_01jyr7gzhfevt8h0gdjz56gzmm_1751012596_img_1 2.svg";
import blurImg from "../assets/images/Rectangle 5 full.svg";

import Button from "../components/Button";

const getDemoClick = () => {};

const Hero = () => {
  return (
    <section className="mx-auto flex h-full w-full overflow-hidden bg-[url('/src/assets/images/heroBgDesktop.svg')] bg-cover bg-no-repeat md:bg-[url('/src/assets/images/heroBgDesktop.svg')] md:bg-center">
      <div className="relative flex h-full w-full flex-col">
        {/* Mobile */}
        <div className="flex flex-col px-[16px] pt-[107px] md:hidden md:px-0">
          <span className="font-dm-sans 3xl:text-[64px] 3xl:leading-[72px] pb-[24px] text-center text-[32px] leading-[40px] font-bold lg:text-[38px] lg:leading-[48px] xl:text-[44px] xl:leading-[52px] 2xl:text-[56px] 2xl:leading-[64px]">
            Empower your project with
            <span className="text-green"> KnightAI </span>— smarter moves and stronger results.
          </span>
          <span className="font-dm-sans font-700 3xl:text-[32px] 3xl:leading-[40px] pb-[19px] text-center text-[20px] leading-[24px] font-bold md:pb-[3.3%] lg:text-[22px] lg:leading-[28px] xl:text-[24px] xl:leading-[32px] 2xl:text-[28px] 2xl:leading-[36px]">
            KnightAI lets you plan smart, move fast, and stay ahead with AI power.
          </span>
        </div>
        <div className="relative flex">
          <div className="absolute z-2 flex h-full w-full items-center justify-center md:hidden">
            <Button
              text="Get Demo"
              textClassName="text-[16px] leading-[24px] font-bold font-700"
              onClick={getDemoClick}
              divClassName="absolute md:static"
              buttonClassName="bg-btn-black text-white rounded-[24px] w-[182px] h-[56px]"
              disabled={false}
            />
          </div>
          {/* Desktop */}
          <div className="flex flex-125 md:flex-315">
            <img
              src={whiteQueen}
              alt="whiteQueen"
              className="z-1 max-h-[391px] object-contain md:max-h-full"
            />
          </div>
          <div className="flex flex-162 flex-col items-center md:flex-1245">
            <div className="flex flex-356"></div>
            <div className="hidden flex-col items-center md:flex md:w-[88%] md:flex-380">
              <span className="font-dm-sans 3xl:text-[64px] 3xl:leading-[72px] pb-[2.6%] text-center text-[32px] leading-[40px] font-bold lg:text-[38px] lg:leading-[48px] xl:text-[44px] xl:leading-[52px] 2xl:text-[56px] 2xl:leading-[64px]">
                Empower your project with
                <span className="text-green"> KnightAI </span>— smarter moves and stronger results.
              </span>
              <span className="font-dm-sans font-700 3xl:text-[32px] 3xl:leading-[40px] hidden pb-[3.3%] text-center text-[20px] leading-[24px] font-bold md:flex lg:text-[22px] lg:leading-[28px] xl:text-[24px] xl:leading-[32px] 2xl:text-[28px] 2xl:leading-[36px]">
                KnightAI lets you plan smart, move fast, and stay ahead with AI power.
              </span>

              <Button
                text="Get Demo"
                textClassName="text-[16px] leading-[24px] font-bold font-700"
                onClick={getDemoClick}
                divClassName="absolute md:static"
                buttonClassName="bg-btn-black text-white rounded-[24px] w-[182px] h-[56px]"
                disabled={false}
              />
            </div>
            <div className="flex w-full flex-243 flex-col items-center justify-end"></div>
          </div>
          <div className="flex flex-143 items-end justify-end self-end md:flex-360">
            <img
              src={blackQueen}
              alt="blackQueen"
              className="z-1 max-h-[391px] object-contain md:max-h-full"
            />
          </div>
        </div>
      </div>
      <img
        src={blurImg}
        alt="blur"
        className="absolute bottom-0 hidden w-full translate-y-1/2 border object-contain"
      />
    </section>
  );
};

export default Hero;
