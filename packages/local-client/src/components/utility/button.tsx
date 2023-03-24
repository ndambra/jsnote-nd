import classname from 'classnames';

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  const classes = classname(className, 'button');

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
