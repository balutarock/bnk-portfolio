const H1Name = (props: any) => {
  const { name } = props;
  return (
    <h1 className="text-lg text-black text-2xl md:text-3xl lg:text-4xl font-bold m-2">
      {name}
    </h1>
  );
};

export default H1Name;
