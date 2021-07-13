import mostlyRainy from "../icon/mostlyRainy.svg";
import sunny from "../icon/sunny.svg";
import rainy from "../icon/rainy.svg";

const dailyForecasts = [
  {
    weekDay: "Monday",
    imgURL: mostlyRainy,
    temp: "36C",
  },
  {
    weekDay: "Tuesday",
    imgURL: sunny,
    temp: "32C",
  },
  {
    weekDay: "Wednesday",
    imgURL: rainy,
    temp: "35C",
  },
  {
    weekDay: "Thursday",
    imgURL: sunny,
    temp: "45C",
  },
  {
    weekDay: "Friday",
    imgURL: mostlyRainy,
    temp: "36C",
  },
  {
    weekDay: "Saturday",
    imgURL: sunny,
    temp: "37C",
  },
  {
    weekDay: "Sunday",
    imgURL: sunny,
    temp: "39C",
  },
];

export default dailyForecasts;
