import useTheme from "../hooks/useTheme";
import ContactButton from "./ContactButton";
import {
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react"

export default function Contact() {
  const { theme }= useTheme();
  
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-full flex-col max-w-5xl px-10 pt-28 pb-36 gap-16">
        <div className="flex flex-col gap-2 mb4:text-left text-center">
          <h1 className="text-blue-500 font-bold text-[26px]">
            Contact
          </h1>
          <h2 className={`${ theme == "light"? "text-zinc-700" : "text-darkmode-maintext" } font-semibold text-xl`}>
            Sinta-se a vontade para entrar em contato! 🤠
          </h2>
        </div>
        <div className="grid mb4:grid-cols-2 grid-cols-1 flex-col gap-y-8 gap-x-0">
          <ContactButton
            theme={theme}
            content="jpdsdev@gmail.com"
            title="Email"
            href="mailto:jpdsdev@gmail.com"
            component={<EnvelopeSimple size={32} color="#3b82f6" />}
          />
          <ContactButton
            theme={theme}
            content="Pernambuco, Recife"
            title="Localização"
            component={<MapPin size={32} color="#3b82f6" />}
          />
        </div>
      </div>
    </div>
  );
}
