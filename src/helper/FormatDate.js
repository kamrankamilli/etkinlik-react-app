export const formatDate = (date) => {
  let d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();
  let hours = "" + d.getHours();
  let minutes = "" + d.getMinutes();
  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;
  switch (month) {
    case "1":
      month = "Ocak";
      break;
    case "2":
      month = "Şubat";
      break;
    case "3":
      month = "Mart";
      break;
    case "4":
      month = "Nisan";
      break;
    case "5":
      month = "May";
      break;
    case "6":
      month = "Hazıran";
      break;
    case "7":
      month = "Temmuz";
      break;
    case "8":
      month = "Ağustos";
      break;
    case "9":
      month = "Eylül";
      break;
    case "10":
      month = "Ekim";
      break;
    case "11":
      month = "Kasım";
      break;
    case "12":
      month = "Aralık";
      break;
    default:
      month = "unknown";
  }
  let formatedDate = [day, month, year].join(" ");
  let formatedTime = [hours, minutes].join(":");
  return [formatedDate, formatedTime].join(" - ");
};
