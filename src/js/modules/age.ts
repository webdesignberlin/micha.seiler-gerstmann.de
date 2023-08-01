const calculateAge = (birthDate: Date) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const birthYear = birthDate.getFullYear();
  let age = currentYear - birthYear;

  if (now < new Date(birthDate.setFullYear(currentYear))) {
    age = age - 1;
  }
  return age;
}

export const writeCurrentDate = (target: string) => {
  const selectors = document.querySelectorAll(target);

  if (selectors) {
    [...selectors].forEach((item) => {
      item.textContent = calculateAge(new Date(1984, 8, 11)).toString();
    });
  }
};
