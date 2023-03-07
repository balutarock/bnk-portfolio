const Label = (props: any) => {
  const { name, styles } = props;
  return <p className={`${styles} mt-2`}>{name}</p>;
};

export default Label;
