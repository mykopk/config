export const dynamicPoolDefaultConfig = {
  min: 2,
  max: 10,
  idleTimeoutMillis: 30000,
  acquireTimeoutMillis: 10000,
  scaling: {
    enabled: true,
    scaleUpThreshold: 80,
    scaleDownThreshold: 20,
    scaleInterval: 30000,
    maxScale: 2,
  },
};
