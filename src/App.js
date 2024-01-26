import "./App.css";
import Button from "./components/Button";
import CheckedText from "./components/CheckedText";

function App() {
  return (
    <div className="bg-gradient-to-br from-sky-800 to-teal-600 flex flex-col h-[150vh]">
      <div className=" w-full ">
        <div className="mt-[84px]">
          <p className="text-[#fff] text-[76px] font-semibold text-center ">
            Check your financial health
          </p>
          <p className="text-[#fff] text-[32px] font-thin text-center not-italic">
            Use WeathoMeter to get a free report <br /> card for your finances-
            within minutes!
          </p>
        </div>

        <div className="flex justify-center mt-[31px]">
          <Button text={"Get Started"} />
        </div>

        <div className="flex justify-between px-20">
          <div className="w-1/3 mt-20">
            <CheckedText text={"Expected Retirement Age"} />

            <CheckedText text={"Identify Mistakes"} />
          </div>
          <div className="w-1/3 flex justify-center overflow-hidden">
            <img src="mobile.png" alt="mobile-png" className="  ml-28" />
          </div>
          <div className="w-1/3 mt-20">
            <CheckedText text={"Personalized Road Map"} />

            <CheckedText text={"Tips To Improve"} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full absolute -mt-[12rem]">
          <img
            src="/Vector.png"
            alt="Vector"
            className="object-fill z-10 "
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="z-40 absolute w-full mt-16 ">
          <p className="text-[#fff] text-center text-[60px] font-bold">
            How it works?
          </p>
          <div className="h-32 px-56 mt-8">
            <img
              src="/bottom.png"
              alt="bottom"
              className="h-full w-full object-cover "
            />
          </div>
          <div className="flex justify-between  px-48">
            <p className=" text-center text-[27px] font-thin text-[#fff]">
              Answer few <br />
              questions
            </p>
            <p className=" text-center text-[27px] font-thin text-[#fff] pl-14">
              Register using <br />
              phone and OTP
            </p>
            <p className=" text-center text-[27px] font-thin text-[#fff]">
              Get report and <br />
              personal roadmap
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[31px] relative z-20 -bottom-[27rem]">
          <Button text={"Get Started"} />
        </div>
      </div>
    </div>
  );
}

export default App;
