import classname from 'classnames';

interface IconProps {
  className?: string;
  icon: string;
  text?: string;
}

const Icon: React.FC<IconProps> = ({ className, icon, text }) => {
  const classes = classname(className, 'icon');

  const ifText = text ? <span>{text}</span> : null;

  return (
    <>
      <span className={classes}>
        <i className={icon} />
      </span>
      {ifText}
    </>
  );
};

export default Icon;
