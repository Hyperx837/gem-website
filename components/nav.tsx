import Icon from "@/components/icon";
import Link from "@/node_modules/next/link";

const Nav: React.FC<Props> = () => (
  <div className="flex px-[1rem]">
    <NavComponent cls="flex mr-auto" href="/">
      <span className="pr-2 my-auto font-bold">GemsLk</span>
      <div className="boder-2 border-black inline-block p-1">
        <Icon width="50" height="50" />
      </div>
      {/* <Image src={Next} alt="http" className="w-20 " /> */}
    </NavComponent>
    <NavComponent href="/gems">Products</NavComponent>
    <NavComponent href="/about">About Us</NavComponent>
  </div>
);

const NavComponent = ({
  cls,
  children,
  href,
}: Readonly<{
  cls?: string;
  children: React.ReactNode;
  href: string;
}>) => {
  return (
    <Link href={href} className={`my-auto p-7 montserrat font-semibold ${cls}`}>
      {children}
    </Link>
  );
};

export default Nav;
