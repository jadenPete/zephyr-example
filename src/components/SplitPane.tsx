import { type PropsWithChildren } from "react";

export function Pane(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`align-stretch bg-base-200 rounded-md ${props.className}`}>
      {props.children}
    </div>
  );
}

export function PaneSplit({
  className,
  children,
  orientation = "horizontal",
}: PropsWithChildren<{
  className?: string;
  orientation?: "horizontal" | "vertical";
}>) {
  return (
    <div
      className={`flex grow gap-2${orientation == "vertical" ? " flex-col" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
