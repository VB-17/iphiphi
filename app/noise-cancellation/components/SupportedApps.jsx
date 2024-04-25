import Image from "next/image";

const SupportedApps = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex md:justify-between md:items-center">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="supported-app-heading font-bold pb-7">
            IPHIPI works <br /> with any app
          </h1>
          {/* <p className="font-light mb-2 learn_more_text md:max-w-xl">
            Krisp works with communication apps such as Zoom, Meet, Teams and
            others. It functions as a "smart" layer between your device and any
            online communication platform, eliminating all background noise,
            recording and capturing transcriptions and meeting notes.
          </p> */}
        </div>
        <div className="supported_apps">
          <Image
            src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_apps_new.svg"
            alt=""
            width={658}
            height={394}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportedApps;
