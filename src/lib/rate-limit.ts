export function rateLimit({ interval }: { interval: number }) {
  const tokenCache = new Map();
  let lastInterval = Date.now();

  return {
    check: (limit: number, key: string) =>
      new Promise((resolve, reject) => {
        const now = Date.now();
        const currentInterval = Math.floor(now / interval);

        if (currentInterval > lastInterval) {
          lastInterval = currentInterval;
          tokenCache.clear();
        }

        const promptCount = (tokenCache.get(key) || 0) + 1;

        if (promptCount > limit) {
          reject("Rate limit exceeded");
          return;
        }

        tokenCache.set(key, promptCount);
        resolve(null);
      }),
  };
}
