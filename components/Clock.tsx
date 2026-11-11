"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

const subscribe = (notify: () => void) => {
  const id = setInterval(notify, 1000);
  return () => clearInterval(id);
};
const now = () => formatter.format(new Date());
const blank = () => " ";

export default function Clock() {
  const time = useSyncExternalStore(subscribe, now, blank);
  return <time className="num">{time}</time>;
}
