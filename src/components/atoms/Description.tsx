const Description = (props: any) => {
  const { description } = props;
  return (
    <p className="text-gray-500 font-normal md:text-md font-sans m-2 text-center max-w-lg">
      {description}
    </p>
  );
};

export default Description;
