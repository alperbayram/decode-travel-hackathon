import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Secure & Private Identity Verification",
    description:
      "With TIV, you can now use your wallet to verify your identity securely and privately. You can store essential travel information in your wallet (like age, nationality, etc.) and use it to verify specific details without revealing unnecessary personal data.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Get Control of Your Data",
    description:
      "TIV ensures that you are in full control of your personal data and can complete transactions without compromising your privacy.",
    icon: LockClosedIcon,
  },
  {
    name: "Self-Sovereign Identity (SSI)",
    description:
      "SSI gives you full control over your personal data. Your identity and credentials are stored securely in your digital wallet and can be shared selectively, without disclosing unnecessary details. Blockchain ensures your information is secure, private, and under your control.SSI is built on decentralized technologies such as blockchain. This ensures that no central entity controls or stores your identity, reducing the risk of data breaches or misuse.",
    icon: ArrowPathIcon,
  },
  {
    name: "Easy Access to Your ID",
    description:
      "With TIV, accessing your verified identity is quick and simple. Your travel information is securely stored in your digital wallet, allowing you to instantly verify your identity whenever needed—whether it's for booking a trip or proving your age—without any hassle. Just a few clicks, and you're ready to go!",
    icon: FingerPrintIcon,
  },
];
export default function SectionComponent() {
  return (
    <div className="bg-transparent py-8 sm:py-8 mx-auto max-w-7xl px-6 lg:px-8 h-full">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">
          tiv
        </h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          How to create a Metamask Wallet for TIV .
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          
          
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
