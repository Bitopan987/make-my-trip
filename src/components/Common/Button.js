function Button({ title, size = 'large', ...props }) {
  return (
    <button {...props} className={`btn btn-${size}`}>
      {title}
    </button>
  );
}

export default Button;
