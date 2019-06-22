export const Or = (target: any, correct: any, incorrect: any) => {
  if (target) {
    return correct;
  } else {
    return incorrect || '';
  }
};

export const sleep = (waitMillSeconds: number, someFunction: () => {}) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(someFunction());
    }, waitMillSeconds);
  });
};
