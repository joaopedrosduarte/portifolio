interface NavButtonProps {
  icon: React.ReactElement;
  doFunc?: () => void; // This is a basicaly a function to do a specific action provided by the father component
}

export default function NavButton({ icon, doFunc = () => {} }: NavButtonProps) {
  return (
    <button
      onClick={() => doFunc()}
      className="bg-lightbase bg-opacity-80 border-opacity-5 flex p-[6px] rounded-lg hover:shadow-shinny text-lightgray hover:text-blue-500 hover:shadow-blue-700 hover:border-blue-600 border-darkbase transition-all border-2 duration-200"
    >
      {icon}
    </button>
  );
}
