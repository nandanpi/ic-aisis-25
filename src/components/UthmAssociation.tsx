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
          ? "flex flex-col gap-3 md:flex-row md:items-center"
          : "inline-flex flex-col gap-3 sm:flex-row sm:items-center"
      }
    >
      <a
        href="https://www.uthm.edu.my/en/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full"
      >
        {isHero ? (
          <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-2 text-center text-white backdrop-blur hover:bg-white/20 transition-colors">
            <span className="text-xs font-semibold tracking-wide uppercase text-blue-100">
              In association with
            </span>
            <Image
              src="/uthm_logo.png"
              alt="Universiti Tun Hussein Onn Malaysia (UTHM) logo"
              width={120}
              height={32}
              className="h-auto w-auto max-w-[9rem]"
            />
            <span className="text-xs md:text-sm font-medium">
              Universiti Tun Hussein Onn Malaysia (UTHM)
            </span>
          </div>
        ) : (
          <div className="inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-700 bg-gray-900/70 px-4 py-3 text-gray-100 hover:bg-gray-800 transition-colors">
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold tracking-wide uppercase text-gray-300">
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
                width={80}
                height={24}
                className="h-auto w-auto max-w-[7rem]"
              />
            </div>
          </div>
        )}
      </a>

      <a
        href="https://thehinweis.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full"
      >
        {isHero ? (
          <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-2 text-center text-white backdrop-blur">
            <span className="text-xs font-semibold tracking-wide uppercase text-gray-200">
              Publishing partner
            </span>
            <div className="rounded-xl bg-white px-3 py-2">
              <Image
                src="/hinweis_logo.png"
                alt="Hinweis Research logo"
                width={130}
                height={32}
                className="h-auto w-auto max-w-[9rem]"
              />
            </div>
            <span className="text-xs md:text-sm font-medium">Hinweis Research</span>
          </div>
        ) : (
          <div className="inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-700 bg-gray-900/70 px-4 py-3 text-gray-100">
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
                width={100}
                height={28}
                className="h-auto w-auto max-w-[8rem]"
              />
            </div>
          </div>
        )}
      </a>
    </div>
  );
};

export default UthmAssociation;


