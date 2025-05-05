import Icon from "@/components/icon";

const Card = ({
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

    <div></div>
  </div>
);

export default Card;
