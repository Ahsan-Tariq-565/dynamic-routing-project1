import { NavbarLiProp } from "@/data_types/types";
import Link from "next/link";

const NavbarLi: React.FC<NavbarLiProp> = ({name, href}) => {
    return (
        <div>
         <ul>
          <li className="text-red bg-transparent hover:bg-lime-400 rounded hover:text-black p-2">
            <Link href={href}>{name}</Link>
          </li>
        </ul>
        </div>
    );
}
export default NavbarLi;