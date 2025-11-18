// src/components/ExperienceSection.tsx

import { EXPERIENCE } from "@/lib/values/experience";

export const Experience = () => {
  return (
    <section className="w-full flex justify-center mt-10 pb-10">
      <div className="w-full max-w-3xl px-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-[22px] font-semibold text-neutral-900">
            Experience
          </h2>
          <p className="text-[11px] tracking-[0.18em] uppercase text-neutral-400">
            Roles · Startups · Internships
          </p>
        </div>

        <div className={`bg-white/90 backdrop-blur-xl overflow-hidden`}>
          {EXPERIENCE.map((item, index) => (
            <div
              key={`${item.company}-${item.role}-${item.start}`}
              className={`px-5 md:px-6 py-4 md:py-5 flex flex-col gap-1.5
                ${index < EXPERIENCE.length - 1 ? "border-b border-neutral-200/70" : ""}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div>
                  <p className="text-[15px] md:text-[16px] font-medium text-neutral-900">
                    {item.role}
                  </p>
                  <p className="text-[13px] text-neutral-500">{item.company}</p>
                </div>
                <p className="text-[11px] text-neutral-500">
                  {item.start} – {item.end} · {item.duration}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <p className="text-[12px] text-neutral-500">{item.location}</p>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500">
                  <span className="px-2 py-[3px] rounded-full bg-neutral-100 text-neutral-700">
                    {item.type}
                  </span>
                  <span className="px-2 py-[3px] rounded-full bg-neutral-100 text-neutral-700">
                    {item.mode}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
