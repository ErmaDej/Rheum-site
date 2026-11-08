import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createElement, type ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ContainerPage renders a container div - use as a regular component
export function ContainerPage(props: { children: ReactNode }) {
  const { children } = props;
  return createElement("div", { className: "container-page" }, children);
}

export type ContainerPageProps = {
  children: ReactNode;
};
