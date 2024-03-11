import React, { useEffect, useState } from "react";

export default function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const date = dateTime.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const time = dateTime.toLocaleString("en-GB", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return `${date + " " + time}`;
}
