const Button = ({ className, textButton, href, onClick, children, px, py }) => {
  const classes = `button relative inline-flex items-center justify-center text-center rounded-sm
  ${px || "px-7"} ${py || "py-1"} ${className || ""}`;
  const spanClasses = `relative z-10 ${textButton || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} target="_blank" className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
