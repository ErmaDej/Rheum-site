import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};

// ContainerPage renders a container div - use as a regular component
export function ContainerPage(props: {
  children: React.ReactNode;
}) {
  const { children } = props;
  return React.createElement("div", { className: "container-page" }, children);
}

export type ContainerPageProps = {
  children: React.ReactNode;
};