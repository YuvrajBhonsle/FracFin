export const calculateDeltaFunction = (
  S,
  K,
  R,
  H,
  sigma,
  maturityTime,
  currentTime
) => {
  const r = R / 100;
  const sig = sigma / 100;
  const d1 =
    (Math.log(S / K) +
      r * (maturityTime - currentTime) +
      0.5 *
        sig *
        sig *
        (Math.pow(maturityTime, 2 * H) - Math.pow(currentTime, 2 * H))) /
    (sig *
      Math.sqrt(
        Math.pow(maturityTime, 2 * H) - Math.pow(currentTime, 2 * H)
      ));

  const Nd1 = normcdf(d1) - 0.5;
  const delta1 = Nd1;
  const delta2 = Nd1 - 1;

  return {
    delta1: delta1.toFixed(4),
    delta2: delta2.toFixed(4),
  };
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