import Button from "../Button";

const Navbar = () => {
    return ( <nav className="shadow  h-[50px] w-full items-center flex flex-row px-6 justify-between">
    <h2 className="text-2xl font-bold">Hello</h2>
    <Button>Add a new todo</Button>
    </nav> );
}
 
export default Navbar;