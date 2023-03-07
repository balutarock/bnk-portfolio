const Anchor = (props: any) => {
  const { data } = props;
  const { title } = data;
  return (
    <a href="#" className="font-sans text-base font-medium">
      {title}
    </a>
  );
};

export default Anchor;
