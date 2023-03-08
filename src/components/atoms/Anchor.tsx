import Link from "next/link";

const Anchor = (props: any) => {
  const { data } = props;
  const { title, link } = data;
  return (
    <Link href={`${link}`} className="font-sans text-base font-medium">
      {title}
    </Link>
  );
};

export default Anchor;
