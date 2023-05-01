export const getDifferenceInDays = (startDate: Date, endDate: Date) => {
  const date1utc = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  const date2utc = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );
  const day = 1000 * 60 * 60 * 24;
  return (date2utc - date1utc) / day;
};
