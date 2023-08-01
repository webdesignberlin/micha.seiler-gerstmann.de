export const writeCurrentDate = (target: string) => {
  const selectors = document.querySelectorAll(target);
  if (selectors) {
    selectors.forEach((item) => item
      .setAttribute('datetime', new Intl.DateTimeFormat("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(Date.now())));
  }
};
