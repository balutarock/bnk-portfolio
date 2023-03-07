const Card = (props: any) => {
  const { childElements } = props;
  return (
    <div className="flex flex-col justify-center items-center pr-5 pl-5 pt-4 pb-4 mr-4 mb-4 border-2 rounded-md border-slate-300 border-solid max-w-md">
      {childElements}
    </div>
  );
};

export default Card;
