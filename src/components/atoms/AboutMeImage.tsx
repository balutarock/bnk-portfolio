const AboutMeImage = (props: any) => {
  const { src } = props;
  return <img src={src} className="w-48 md:w-80 rounded-lg mt-2" />;
};

export default AboutMeImage;
