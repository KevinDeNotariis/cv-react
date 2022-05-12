const Logo = ({ name, alt, width, height }) => {
  return <img width={width} height={height} src={`logos/${name}.png`} alt={alt} />;
};

export default Logo;
