
import { useRouter } from "next/router";
import Button from "../Button";
import Link from "next/link";

const Navbar = () => {
  
    return (
    <nav className="shadow  h-[50px] w-full items-center flex flex-row px-6 justify-between">
    <Link href="/homepage">
         <h2  className="text-2xl font-bold cursor-pointer">Hello</h2>
    </Link>
    <Button>Add a new todo</Button>
    </nav> 
    );
}
 
export default Navbar;