const Container = ({ className = "", children }) => {
  return <div className={`m-auto max-w-295 ${className}`}>{children}</div>;
};

export default Container;
