import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  title: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#356e97] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
