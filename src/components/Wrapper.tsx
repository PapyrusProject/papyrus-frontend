import { twJoin } from "tailwind-merge";

export const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={twJoin(
        "max-w-screen-desktop desktop:px-0 mx-auto px-6",
        className,
      )}
    >
      {children}
    </div>
  );
};
