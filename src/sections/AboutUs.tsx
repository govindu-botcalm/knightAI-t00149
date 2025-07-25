import Button from "../components/Button";
import chessImage1 from "../assets/images/Frame 54.svg";
import chessImage2 from "../assets/images/Frame 55.svg";

import arrow from "../assets/icons/Alt Arrow Right.svg";

import chessQueenWhite from "../assets/images/assets_task_01jyrb6xzmegtr8xxy864qbw8j_1751016492_img_0 1.svg";

const AboutUsClick = () => {};
const getDemoClick = () => {};

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="3xl:mt-[149px] mt-[83px] mb-[100px] flex h-full w-full flex-col-reverse overflow-visible md:mt-[7.8%] md:mb-[32px] md:flex-row xl:aspect-[1920/757]"
    >
      <div className="relative mt-[67px] flex h-full w-full flex-1 flex-col items-center justify-center md:mt-0 md:ml-[3.4%] 2xl:ml-[66px]">
        <div className="z-50 h-full">
          <img
            src={chessQueenWhite}
            alt="chessQueenWhite"
            className="3xl:h-[757px] h-[374px] overflow-visible object-contain md:h-[520px] md:-translate-y-[2%] lg:h-[520px] xl:h-full"
          />
        </div>
        <img
          src={chessImage1}
          alt="chessPieces"
          className="absolute top-0 left-0 z-0 w-[159px] -translate-x-[15%] object-contain md:mt-[10%] md:translate-0 lg:mt-[7%]"
        />
        <div className="bg-gray absolute top-0 left-0 z-[-1] aspect-square w-[159px] -translate-x-[15%] rotate-45 rounded-[40px] md:mt-[10%] md:translate-0 lg:mt-[7%]"></div>

        <div className="bg-gray z-5 h-full w-full"></div>

        <div className="bg-gray 3xl:w-[558px] absolute z-[-1] flex aspect-square w-[294px] rotate-45 flex-col items-center justify-center rounded-[40px] md:w-[300px] lg:w-[60%] lg:min-w-[380px]"></div>
        <img
          src={chessImage2}
          alt="chessPieces"
          className="absolute right-0 bottom-0 z-[-1] w-[159px] translate-x-[15%] object-contain md:mb-[10%] md:translate-0 lg:mb-[7%]"
        />
        <div className="bg-gray absolute right-0 bottom-0 z-[-2] aspect-square w-[159px] -translate-x-[15%] rotate-45 rounded-[40px] md:mb-[10%] md:translate-0 lg:mb-[7%]"></div>
      </div>
      <div className="flex h-full w-full flex-1 flex-col">
        <div className="3xl:pl-[148px] 3xl:pr-[120px] flex w-full flex-col border px-[16px] md:px-0 md:pr-[12.5%] md:pl-[15.5%]">
          <div className="flex w-full flex-col items-center justify-center pb-[20px] lg:pb-[3.5%]">
            <Button
              text="About Us"
              textClassName="text-[16px] leading-[24px] font-bold font-700"
              onClick={AboutUsClick}
              divClassName="w-full"
              buttonClassName="bg-white border-[2px] text-black-text rounded-[24px] w-full h-[56px]"
              disabled={false}
            />
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span className="3xl:text-[52px] 3xl:leading-[60px] text-center text-[24px] leading-[32px] font-bold tracking-normal not-italic md:text-left lg:text-[28px] lg:leading-[36px] xl:text-[38px] xl:leading-[48px] 2xl:text-[45px] 2xl:leading-[56px]">
              Smart Strategy Powered by Chess Precision and AI Innovation
            </span>
          </div>
          <div className="3xl:mb-[36px] mb-[36px] flex h-full w-full flex-col items-center justify-center md:mb-[5.5%]">
            <span className="text-black-text flex h-full flex-col justify-between text-left text-[16px] leading-[24px] font-normal tracking-normal not-italic md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px] 2xl:text-[20px] 2xl:leading-[24px]">
              <br className="hidden xl:flex" /> KnightAI is more than just a utility token — it's a
              symbol of intelligent design and strategic impact. Inspired by the agility of the
              chess knight and the power of artificial intelligence, KnightAI fuels next-gen digital
              ecosystems with speed, security, and smart functionality.
              <br />
              <br className="hidden 2xl:flex" />
              <span>
                Whether powering NFT platforms, AI tools, or blockchain apps, KnightAI adapts like a
                knight on the board — fast, clever, and unpredictable.
              </span>
              <br className="3xl:flex hidden" />
            </span>
          </div>
          <Button
            text="More About Us"
            textClassName="text-[16px] leading-[24px] font-bold font-700"
            onClick={getDemoClick}
            iconSrc={arrow}
            iconClassName="w-[24px] h-[24px] ml-[10px]"
            buttonClassName="bg-btn-black text-white flex items-center justify-center rounded-[24px] w-full md:w-[182px] h-[56px]"
            disabled={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
