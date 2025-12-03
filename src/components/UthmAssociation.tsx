import Image from "next/image";
import type React from "react";

type UthmAssociationProps = {
  variant?: "hero" | "footer";
};

const UthmAssociation: React.FC<UthmAssociationProps> = ({ variant = "hero" }) => {
  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "flex flex-col gap-3"
          : "inline-flex flex-col gap-3 sm:flex-row sm:items-center"
      }
    >
      <a
        href="https://www.uthm.edu.my/en/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full"
      >
        <div
          className={`inline-flex w-full items-center justify-between gap-4 rounded-2xl border ${
            isHero
              ? "border-white/30 bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20"
              : "border-gray-700 bg-gray-900/70 px-4 py-3 text-gray-100 hover:bg-gray-800"
          } transition-colors`}
        >
          <div className="flex flex-col text-left">
            <span
              className={`text-xs font-semibold tracking-wide uppercase ${
                isHero ? "text-blue-100" : "text-gray-300"
              }`}
            >
              In association with
            </span>
            <span className="text-sm font-medium">
              Universiti Tun Hussein Onn Malaysia (UTHM)
            </span>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/uthm_logo.png"
              alt="Universiti Tun Hussein Onn Malaysia (UTHM) logo"
              width={isHero ? 90 : 80}
              height={isHero ? 26 : 22}
              className="h-auto w-auto max-w-[9rem]"
            />
          </div>
        </div>
      </a>

      <a
        href="https://thehinweis.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full"
      >
        <div
          className={`inline-flex w-full items-center justify-between gap-4 rounded-2xl border ${
            isHero
              ? "border-white/30 bg-white/10 px-5 py-3 text-white backdrop-blur"
              : "border-gray-700 bg-gray-900/70 px-4 py-3 text-gray-100"
          }`}
        >
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold tracking-wide uppercase text-gray-300">
              Publishing partner
            </span>
            <span className="text-sm font-medium">Hinweis Research</span>
          </div>

          <div className="flex-shrink-0 rounded-xl bg-white px-3 py-2">
            <Image
              src="/hinweis_logo.png"
              alt="Hinweis Research logo"
              width={isHero ? 110 : 100}
              height={isHero ? 28 : 24}
              className="h-auto w-auto max-w-[8rem]"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default UthmAssociation;


