/* eslint-disable react/prop-types */

const YearSpan = ({ startDate }) => {
  const calculateTotalMonths = (start) => {
    const startDate = new Date(start);
    const now = new Date();

    // Total difference in months
    const totalMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    if (Math.round((totalMonths / 12) * 10) / 10 < 1) {
      if (totalMonths <= 0) {
        return;
      } else {
        return `(${totalMonths} months)`;
      }
    } else {
      return `(${Math.round((totalMonths / 12) * 10) / 10} years)`;
    }
  };

  return <span>{calculateTotalMonths(startDate)}</span>;
};

export default YearSpan;