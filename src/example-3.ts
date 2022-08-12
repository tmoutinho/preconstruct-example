type Icons = "xs" | "md" | "lg";

type OmitedIcons = Omit<string, Icons>;

interface IconProps {
  iconSize: OmitedIcons;
} // { iconSize: "xs" | "md" | "lg" | string }

export const Icon = (props: IconProps) => {
  return null;
};
