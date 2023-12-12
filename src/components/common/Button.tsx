interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      className="font-bold rounded-sm border border-gray-500 text-sm text-gray-500 w-[100px] hover:border-secondary hover:text-secondary transition"
      {...rest}
    >
      {text}
    </button>
  );
}
