export const calculateGammaFunction = (S, K, R, H, sigma, maturityTime, currentTime) => {
  const r = R / 100;
  const sig = sigma / 100;
  const T = maturityTime / 365;
  const t = currentTime / 365;

  const d1 =
    (Math.log(S / K) +
      r * (T - t) +
      (0.5 * sig * sig * (Math.pow(T, 2 * H) - Math.pow(t, 2 * H)))) /
    (sig * Math.sqrt(Math.pow(T, 2 * H) - Math.pow(t, 2 * H)));

  const Ndd1 = Math.exp((-d1 * d1) / 2) / (Math.sqrt(2 * Math.PI));
  const gamma1 = Ndd1 / (S * sig * Math.sqrt(Math.pow(T, 2 * H) - Math.pow(t, 2 * H)));

  return gamma1.toFixed(4);
};