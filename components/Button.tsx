import Link from "@/node_modules/next/link";

const Button = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => (
  <Link href="/products">
    <button
      className={`border-black bg-black rounded-3xl hover:bg-[#1E88E5] ${className} pb-[2rem]`}
    >
      <span className="p-4 text-white">{children}</span>
    </button>
  </Link>
);

export default Button;
