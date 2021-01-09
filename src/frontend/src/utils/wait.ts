export const wait = async (ms: number): Promise<undefined> => {
  return new Promise((resolve) => setTimeout(() => resolve(undefined), ms));
};
