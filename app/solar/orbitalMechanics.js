// orbitalMechanics.js

const G = 6.6743e-11;

export const degToRad = (deg) => (deg * Math.PI) / 180;
export const radToDeg = (rad) => (rad * 180) / Math.PI;

export const meanMotion = (M1, M2, a) =>
  Math.sqrt((G * (M1 + M2)) / Math.pow(a, 3));

export const meanAnomaly = (M0, n, t) => M0 + n * t;

export const eccentricAnomaly = (
  M,
  e,
  tolerance = 1e-8,
  maxIterations = 100
) => {
  let E = M;
  let iter = 0;
  while (iter < maxIterations) {
    const deltaE = (M - E + e * Math.sin(E)) / (1 - e * Math.cos(E));
    E += deltaE;
    if (Math.abs(deltaE) < tolerance) break;
    iter++;
  }
  return E;
};

export const trueAnomaly = (E, e) =>
  2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));

export const radiusVector = (a, e, E) => a * (1 - e * Math.cos(E));

export const positionInOrbitalPlane = (r, ν, i, Ω) => {
  const x = r * Math.cos(ν);
  const y = r * Math.sin(ν);
  const cosI = Math.cos(i);
  const sinI = Math.sin(i);
  const cosΩ = Math.cos(Ω);
  const sinΩ = Math.sin(Ω);

  const xPrime = x * (cosΩ * Math.cos(ν) - sinΩ * Math.sin(ν));
  const yPrime = x * (sinΩ * Math.cos(ν) + cosΩ * Math.sin(ν));
  const zPrime = y * Math.sin(ν);

  const xDoublePrime = xPrime * cosI - zPrime * sinI;
  const yDoublePrime = yPrime;
  const zDoublePrime = xPrime * sinI + zPrime * cosI;

  return {
    x: xDoublePrime,
    y: yDoublePrime,
    z: zDoublePrime,
  };
};

export const positionIn3DSpace = (x, y, i, Ω, ω) => {
  const cosI = Math.cos(i);
  const sinI = Math.sin(i);
  const cosΩ = Math.cos(Ω);
  const sinΩ = Math.sin(Ω);
  const cosω = Math.cos(ω);
  const sinω = Math.sin(ω);

  return {
    x:
      x * (cosω * cosΩ - sinω * sinΩ * cosI) -
      y * (sinω * cosΩ + cosω * sinΩ * cosI),
    y:
      x * (cosω * sinΩ + sinω * cosΩ * cosI) +
      y * (cosω * cosΩ * cosI - sinω * sinΩ),
    z: x * (sinω * sinI) + y * (cosω * sinI),
  };
};
