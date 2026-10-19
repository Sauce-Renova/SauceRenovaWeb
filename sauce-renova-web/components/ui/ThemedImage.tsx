import Image, { type ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "src"> {
  light: ImageProps["src"];
  dark: ImageProps["src"];
}

export default function ThemedImage({ light, dark, alt, className, ...rest }: Props) {
  return (
    <>
      <Image src={light} alt={alt} className={`theme-fade-light ${className ?? ""}`} {...rest} />
      <Image src={dark} alt="" aria-hidden="true" className={`theme-fade-dark ${className ?? ""}`} {...rest} />
    </>
  );
}