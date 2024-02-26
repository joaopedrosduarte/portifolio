import ContactButton from "./ContactButton";
import {
  EnvelopeSimple,
  LinkedinLogo,
  MapPin,
} from "phosphor-react";

export default function Contact() {
  return (
    <div className="flex w-full justify-center items-center bg-darkbase">
      <div className="flex w-full flex-col max-w-5xl px-10 py-16">
        <div className="flex flex-col gap-2 mb4:text-left text-center pb-10">
          <h1 className="text-blue-500 font-bold text-[26px]">
            Contact
          </h1>
          <h2 className="font-medium text-xl text-darkmode-maintext">
            Sinta-se a vontade para entrar em contato! 🤠
          </h2>
        </div>
        <div className="grid mb4:grid-cols-2 grid-cols-1 flex-col gap-y-8 gap-x-0">
          <ContactButton
            content="jpdsdev@gmail.com"
            title="Email"
            component={<EnvelopeSimple size={32} color="#3b82f6" />}
          />
          <ContactButton
            content="Pernambuco, Recife"
            title="Localização"
            component={<MapPin size={32} color="#3b82f6" />}
          />
        </div>
      </div>
    </div>
  );
}
