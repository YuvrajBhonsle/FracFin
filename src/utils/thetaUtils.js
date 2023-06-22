export const calculateThetaFunction = (
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
  const T = maturityTime / 365;
  const t = currentTime / 365;

  const d1 =
    (Math.log(S / K) +
      r * (T - t) +
      0.5 * sig * sig * (Math.pow(T, 2 * H) - Math.pow(t, 2 * H))) /
    (sig * Math.sqrt(Math.pow(T, 2 * H) - Math.pow(t, 2 * H)));

  const Ndd1 = Math.exp((-d1 * d1) / 2) / Math.sqrt(2 * Math.PI);
  const d2 = d1 - sig * Math.sqrt(Math.pow(T, 2 * H) - Math.pow(t, 2 * H));
  const Nd2 = normcdf(d2);
  const Nmd2 = 1 - Nd2;

  const theta1 =
    (-S * Ndd1 * sig * H * Math.pow(t, 2 * H - 1)) /
      Math.sqrt(Math.pow(T, 2 * H) - Math.pow(t, 2 * H)) -
    K * r * Math.exp(-r * (T - t)) * Nd2;

  const theta2 =
    (-S * Ndd1 * sig * H * Math.pow(t, 2 * H - 1)) /
      Math.sqrt(Math.pow(T, 2 * H) - Math.pow(t, 2 * H)) +
    K * r * Math.exp(-r * (T - t)) * Nmd2;

  return {
    thetaCall: (theta1 / 365).toFixed(4),
    thetaPut: (theta2 / 365).toFixed(4),
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
