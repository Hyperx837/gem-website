import Icon from "@/components/icon";
import Image from "next/image";

const Card = ({
  children,
  bg,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  bg?: string;
}>) => (
  <div
    className={`border-4 border-black rounded-lg w-auto mx-auto hover:bg-black hover:text-white ${className}`}
  >
    <Icon />
    <Image src={Icon} className="" />
    <div></div>
  </div>
);

export default Card;
