const Image = (props: any) => {
  const { src } = props;
  return (
    <img src={src} alt="img" className="shadow-xl w-48 md:w-80 rounded-full" />
  );
};

export default Image;
