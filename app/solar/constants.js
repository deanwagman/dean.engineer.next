import { degToRad } from "./orbitalMechanics";

export const sun = {
  name: "Sun",
  radius: 696340,
  texture: "/textures/sun-texture.jpg",
  emissiveTexture: "/textures/sun-texture.jpg",
  mass: 1.989 * Math.pow(10, 30), // in kg
};

export const mercury = {
  name: "Mercury",
  radius: 2439.7, // in kilometers
  mass: 3.3011 * Math.pow(10, 23), // in kg
  distanceFromSun: 57.91 * Math.pow(10, 6), // in kilometers (average distance)
  texture: "/textures/mercury-mid-journey.jpg",
  semiMajorAxis: 57909227, // kilometers
  eccentricity: 0.20563,
  inclination: degToRad(7.005),
  longitudeOfAscendingNode: degToRad(48.332),
  argumentOfPeriapsis: degToRad(29.124),
  meanAnomalyAtEpoch: degToRad(174.794),
};

export const venus = {
  name: "Venus",
  radius: 6051.8, // in kilometers
  mass: 4.8675 * Math.pow(10, 24), // in kg
  distanceFromSun: 108.21 * Math.pow(10, 6), // in kilometers (average distance)
  texture: "/textures/venus-texture.jpg",
  semiMajorAxis: 108208000,
  eccentricity: 0.006772,
  inclination: degToRad(3.3947),
  longitudeOfAscendingNode: degToRad(76.68),
  argumentOfPeriapsis: degToRad(54.852),
  meanAnomalyAtEpoch: degToRad(50.416),
};

export const earth = {
  name: "Earth",
  radius: 6371, // in kilometers
  mass: 5.9722 * Math.pow(10, 24), // in kg
  distanceFromSun: 149.6 * Math.pow(10, 6), // in kilometers (average distance)
  texture: "/textures/earth-texture.jpg",
  semiMajorAxis: 149598261, // kilometers
  eccentricity: 0.01671022,
  inclination: degToRad(0.00005),
  longitudeOfAscendingNode: degToRad(-11.26064),
  argumentOfPeriapsis: degToRad(114.20783),
  meanAnomalyAtEpoch: degToRad(358.617),
};

export const mars = {
  name: "Mars",
  radius: 3389.5, // in kilometers
  mass: 6.4171 * Math.pow(10, 23), // in kg
  distanceFromSun: 227.92 * Math.pow(10, 6), // in kilometers (average distance)
  texture: "/textures/mars-texture.jpg",
  semiMajorAxis: 227939200, // kilometers
  eccentricity: 0.0935,
  inclination: degToRad(1.85),
  longitudeOfAscendingNode: degToRad(49.558),
  argumentOfPeriapsis: degToRad(286.502),
  meanAnomalyAtEpoch: degToRad(19.373),
};
