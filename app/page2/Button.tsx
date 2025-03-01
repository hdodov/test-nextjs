"use client";

import { ReactNode } from "react";

export function Button(props: { icon: ReactNode }) {
  return <button>Click me! {props.icon}</button>;
}
