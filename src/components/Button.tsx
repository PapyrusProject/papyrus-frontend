import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold",
  variants: {
    color: {
      primary: "",
      secondary: "",
    },
    size: {
      xs: "px-3 py-1.5 text-xs",
      sm: "px-3 py-2 text-sm",
      base: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-base",
    },
    variant: {
      text: "",
      outlined: "",
      contained: "",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "text",
      class: "text-blue-700 hover:bg-blue-200",
    },
    {
      color: "primary",
      variant: "outlined",
      class: "border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
    },
    {
      color: "primary",
      variant: "contained",
      class: "bg-blue-700 text-white hover:bg-blue-800",
    },
    {
      color: "secondary",
      variant: "text",
      class: "text-gray-900 hover:bg-gray-200",
    },
    {
      color: "secondary",
      variant: "outlined",
      class: "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white",
    },
    {
      color: "secondary",
      variant: "contained",
      class: "bg-gray-800 text-white hover:bg-gray-900",
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "base",
    variant: "contained",
  },
});

export const Button = ({
  color,
  size,
  variant,
  ...props
}: VariantProps<typeof button> & React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={button({ color, size, variant, class: props.className })}
    >
      {props.children}
    </button>
  );
};
