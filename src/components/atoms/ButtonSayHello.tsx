// import { FaPaperPlane } from "react-icons/Fa";
{
  /* <FaPaperPlane className="mr-2" /> */
}

const ButtonSayHello = (props: any) => {
  const { name } = props;
  return (
    <button
      className="flex justify-center items-center text-white bg-black pr-5 pl-5 pt-4 pb-4 rounded-md m-2"
      type="button"
    >
      {name}
    </button>
  );
};

export default ButtonSayHello;
