import Image from "next/image";
import {
  CpuChipIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const data = {
  productList: [
    {
      icon: <CircleStackIcon className="h-6 w-6" />,
      title: "Data Collection",
      description:
        "We specialize in diverse data collection services encompassing multilingual speech, conversational speech, music classification, speaker identification, sound classification, emotional speech, wake word detection, and noise data.",
    },

    {
      icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
      title: "Data Augmentation",
      description:
        "We offer comprehensive data augmentation services, covering everything from transforming parts of speech to injecting spelling and context-specific noise. Our expertise extends to creative augmentation, audio scene simulation, and precise timing adjustments, ensuring your dataset reflects real-world scenarios accurately for optimized model performance.",
    },

    {
      icon: <CpuChipIcon className="h-6 w-6" />,
      title: "Data Labelling",
      description:
        "We excel in data annotation, labeling, and validation services covering a wide range of areas. This includes noise labeling, speech transcript correction, intent-sentiment-emotion annotation, speaker diarization annotation, voice/unvoiced region labeling with precise time stamping, phoneme labeling, and named entity annotation.",
    },
  ],
  features: [
    "Cutting-Edge AI Technology",
    "Intelligent Mics for TWS Earphones",
    "Hearing Enhancements for Better Communication",
    "Customizable Audio Settings",
    "Ongoing Support",
  ],
  benifits: [
    "Enhanced Audio Experience",
    "Improved Communication",
    "Customizable Sound Settings",
    "Affordable Technology",
    "Sustained Partnership",
  ],
};

function ListItem({ content }) {
  return (
    <li className="flex items-center max-w-sm">
      <span className="block outline outline-2 mx-2 mr-4 outline-green-600 outline-offset-4 h-1 w-1 rounded-full bg-green-600"></span>
      <span className="text-gray-600">{content}</span>
    </li>
  );
}

function Services() {
  return (
    <div className="bg-blue-50" id="future">
      <div className="mx-auto max-w-screen-lx py-20 pb-48">
        <div className="p-6">
          <h2 className="text-3xl font-medium  pb-10">Our Services</h2>
          <div className="space-y-16 md:space-y-0 md:grid md:gap-x-6 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {data.productList.map((item) => (
              <ProductCard
                key={item.img}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ icon, title, description }) {
  return (
    <div className="space-y-4 bg-white p-8 rounded-md">
      <div className=" inline-block p-4 rounded-full bg-blue-700 text-white">
        {icon}
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm leading-relaxed font-light text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Services;
