import clsx from "clsx";
interface ButtonProps{
    children: React.ReactNode;
    onClick?:() => void;
    type?: "button" |"submit" |"reset"| undefined;
    outline?: boolean;
    secondary?: boolean;
    danger?: boolean
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type,
    outline,
    secondary,
    danger,
}) => {
    return (
    <button 
    className={clsx(`
       flex justify-center px-8 py-1 rounded-md
    `,
         outline && "bg-transparent border border-1 border-black text-black",
         danger && "bg-red-500 hover:bg-red-600 text-white", 
         secondary && "bg-orange-500 hover:bg-orange-600 text-white",
         !secondary && !danger  && " bg-sky-500 hover:bg-sky-600 text-white"
    )}
    onClick={onClick} 
    type={type}
    >
        {children}
    </button>
    );
}
 
export default Button;