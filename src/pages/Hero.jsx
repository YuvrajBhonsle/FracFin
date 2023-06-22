import React, { useState } from "react";
// import { calculateDeltaFunction } from "../utils/deltaUtils";
import { calculateDelta2Function } from "../utils/delta2Utils";
import { calculateGammaFunction } from "../utils/gammaUtils";
import { calculateVegaFunction } from "../utils/vegaUtils";
import { calculateThetaFunction } from "../utils/thetaUtils";

const Hero = () => {
  const [S, setS] = useState("");
  const [K, setK] = useState("");
  const [R, setR] = useState("");
  const [H, setH] = useState("");
  const [sigma, setSigma] = useState("");
  const [maturityTime, setMaturityTime] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  // const [callOption, setCallOption] = useState("");
  // const [putOption, setPutOption] = useState("");
  const [callOption2, setCallOption2] = useState("");
  const [putOption2, setPutOption2] = useState("");
  const [gamma, setGamma] = useState("");
  const [vega, setVega] = useState("");
  const [thetaCall, setThetaCall] = useState("");
  const [thetaPut, setThetaPut] = useState("");

  const calculateFractionalDelta = (event) => {
    event.preventDefault();

    // const { delta1, delta2 } = calculateDeltaFunction(
    //   S,
    //   K,
    //   R,
    //   H,
    //   sigma,
    //   maturityTime,
    //   currentTime
    // );

    const { delta3, delta4 } = calculateDelta2Function(
      S,
      K,
      R,
      H,
      sigma,
      maturityTime,
      currentTime
    );

    const gamma = calculateGammaFunction(
      S,
      K,
      R,
      H,
      sigma,
      maturityTime,
      currentTime
    );

    const vega = calculateVegaFunction(
      S,
      K,
      R,
      H,
      sigma,
      maturityTime,
      currentTime
    );

    const { thetaCall, thetaPut } = calculateThetaFunction(
      S,
      K,
      R,
      H,
      sigma,
      maturityTime,
      currentTime
    );

    // console.log("The fractional delta for call option is", delta1);
    // setCallOption(delta1);
    // console.log("The fractional delta for put option is", delta2);
    // setPutOption(delta2);

    // console.log("The fractional delta2 for call option is", delta3);
    setCallOption2(delta3);
    // console.log("The fractional delta2 for put option is", delta4);
    setPutOption2(delta4);

    // console.log("The fractional thetaCall for call option is", thetaCall);
    setThetaCall(thetaCall);
    // console.log("The fractional thetaPut for put option is", thetaPut);
    setThetaPut(thetaPut);

    // console.log("The fractional gamma for both the options is", gamma);
    setGamma(gamma);

    // console.log("The vega for both the options is", vega);
    setVega(vega);
  };

  const isAnyFieldEmpty = () => {
    return !(S && K && R && H && sigma && maturityTime && currentTime);
  };

  // const calculateFractionalDelta = (event) => {
  //   event.preventDefault();

  //   const r = R / 100;
  //   const sig = sigma / 100;
  //   const d1 =
  //     (Math.log(S / K) +
  //       r * (maturityTime - currentTime) +
  //       0.5 *
  //         sig *
  //         sig *
  //         (Math.pow(maturityTime, 2 * H) - Math.pow(currentTime, 2 * H))) /
  //     (sig *
  //       Math.sqrt(
  //         Math.pow(maturityTime, 2 * H) - Math.pow(currentTime, 2 * H)
  //       ));

  //   const Nd1 = normcdf(d1) - 0.5;
  //   const delta1 = Nd1;
  //   const delta2 = Nd1 - 1;

  //   console.log("The fractional delta for call option is", delta1.toFixed(4));
  //   setCallOption(delta1.toFixed(4));
  //   console.log("The fractional delta for put option is", delta2.toFixed(4));
  //   setPutOption(delta2.toFixed(4));
  // };

  // const normcdf = (x) => {
  //   const t = 1 / (1 + 0.2316419 * Math.abs(x));
  //   const d =
  //     0.3989423 *
  //     Math.exp((-x * x) / 2) *
  //     t *
  //     (0.3193815 +
  //       t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  //   if (x > 0) {
  //     return 1 - d;
  //   } else {
  //     return d;
  //   }
  // };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="md:text-center p-5 my-8 w-[80%] border-b border-black">
        <h1 className="text-center text-4xl font-semibold">
          Fractional Order Option Greeks Calculator
        </h1>
      </div>

      <form className="max-w-full w-[80%] text-base mb-2">
        <div className="md:grid grid-cols-4 gap-6 mb-4">
          <div className="flex flex-col my-2">
            <label htmlFor="stock-price" className="mb-1 font-medium">
              Stock Price
            </label>
            <input
              type="number"
              required
              className="border border-gray-700 rounded px-2 py-1 focus:outline-yellow-600"
              id="stock-price"
              value={S}
              onChange={(e) => setS(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="strike-price" className="mb-1 font-medium">
              Strike Price
            </label>
            <input
              type="number"
              className="border border-gray-700 rounded px-2 py-1 focus:outline-yellow-600"
              required
              id="strike-price"
              value={K}
              onChange={(e) => setK(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="interest-rate" className="mb-1 font-medium">
              Interest Rate
            </label>
            <input
              type="number"
              className="border border-gray-700 rounded px-2 py-1 focus:outline-yellow-600"
              required
              id="interest-rate"
              value={R}
              onChange={(e) => setR(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="hurst-parameter" className="mb-1 font-medium">
              Hurst Parameter
            </label>
            <input
              type="number"
              className="border border-gray-700 rounded px-2 py-1 focus:outline-yellow-600"
              required
              id="hurst-parameter"
              value={H}
              onChange={(e) => setH(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="volatility" className="mb-1 font-medium">
              Volatility
            </label>
            <input
              type="number"
              className="border border-gray-700 rounded px-2 py-1 focus:outline-yellow-600"
              required
              id="volatility"
              value={sigma}
              onChange={(e) => setSigma(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="maturity-time" className="mb-1 font-medium">
              Maturity Time (in days)
            </label>
            <input
              type="number"
              className="border border-gray-700 rounded px-2 py-1 focus:outline-yellow-600"
              required
              id="maturity-time"
              value={maturityTime}
              onChange={(e) => setMaturityTime(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="current-time" className="mb-1 font-medium">
              Current Time (in days)
            </label>
            <input
              type="number"
              className="border border-gray-700 rounded px-2 py-1 focus:outline-yellow-600"
              required
              id="current-time"
              value={currentTime}
              onChange={(e) => setCurrentTime(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center items-center sm:justify-start">
          <button
            type="submit"
            disabled={isAnyFieldEmpty()}
            className={`px-5 py-1.5 rounded text-lg font-medium ${
              isAnyFieldEmpty()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#fe9801] text-white hover:bg-gray-600 hover:transition-all hover:ease-in-out hover:duration-500"
            }`}
            onClick={calculateFractionalDelta}
          >
            Calculate
          </button>
        </div>
      </form>

      {callOption2 && putOption2 && (
        <>
          {/* <div className="w-[80%] flex flex-col mt-4 mb-6 items-center gap-4 lg:flex-row lg:justify-center lg:items-stretch border-b border-black p-4">
            <h1 className="flex justify-center items-center font-semibold text-2xl">
              Fractional Delta:{" "}
            </h1>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Call Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  callOption < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {callOption}
              </p>
            </section>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Put Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  putOption < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {putOption}
              </p>
            </section>
          </div> */}
          <div className="w-[80%] flex flex-col mt-4 mb-6 items-center gap-4 lg:flex-row lg:justify-center lg:items-stretch border-b border-black p-4">
            <h1 className="flex justify-center items-center font-semibold text-2xl">
              Fractional Delta: {" "}
            </h1>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Call Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  callOption2 < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {callOption2}
              </p>
            </section>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Put Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  putOption2 < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {putOption2}
              </p>
            </section>
          </div>
          <div className="w-[80%] flex flex-col mt-4 mb-6 items-center gap-4 lg:flex-row lg:justify-center lg:items-stretch border-b border-black p-4">
            <h1 className="flex justify-center items-center font-semibold text-2xl">
              Fractional Gamma:{" "}
            </h1>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Call Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  gamma < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {gamma}
              </p>
            </section>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Put Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  gamma < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {gamma}
              </p>
            </section>
          </div>
          <div className="w-[80%] flex flex-col mt-4 mb-6 items-center gap-4 lg:flex-row lg:justify-center lg:items-stretch border-b border-black p-4">
            <h1 className="flex justify-center items-center font-semibold text-2xl">
              Fractional Vega:{" "}
            </h1>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Call Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  vega < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {vega}
              </p>
            </section>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Put Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  vega < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {vega}
              </p>
            </section>
          </div>
          <div className="w-[80%] flex flex-col mt-4 mb-6 items-center gap-4 lg:flex-row lg:justify-center lg:items-stretch border-b border-black p-4">
            <h1 className="flex justify-center items-center font-semibold text-2xl">
              Fractional Theta:{" "}
            </h1>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Call Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  thetaCall < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {thetaCall}
              </p>
            </section>
            <section className="p-4 flex flex-col justify-center items-center bg-gray-100 text-black rounded-md w-full lg:w-[50%]">
              <h1 className="mb-2 font-bold text-lg">Put Option</h1>
              <p
                className={`text-2xl font-semibold ${
                  thetaPut < 0 ? "text-red-800" : "text-green-800"
                }`}
              >
                {thetaPut}
              </p>
            </section>
          </div>
         
        </>
      )}
    </section>
  );
};

export default Hero;
