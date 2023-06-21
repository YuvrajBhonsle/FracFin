export const calculateDelta2Function = (S, K, R, H, sigma, T1, t1) => {
  const r = R / 100;
  const sig = sigma / 100;
  const T = T1 / 365;
  const t = t1 / 365;

  const d1 =
    (Math.log(S / K) +
      r * (T - t) +
      (0.5 * sig * sig * ((Math.pow(T, 2 * H)) - (Math.pow(t, 2 * H))))) /
    (sig * Math.sqrt((Math.pow(T, 2 * H)) - (Math.pow(t, 2 * H))));

  const Nd1 = normcdf(d1);
  const delta3 = Nd1;
  const delta4 = Nd1 - 1;

  return {
    delta3: delta3.toFixed(4),
    delta4: delta4.toFixed(4),
  };;
};

const normcdf = (x) => {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d =
    0.3989423 *
    Math.exp((-x * x) / 2) *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (x > 0) {
    return 1 - d;
  } else {
    return d;
  }
};
