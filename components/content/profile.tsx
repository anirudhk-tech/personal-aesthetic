import { Colors } from "@/lib/colors";

export const Profile = () => {
  return (
    <div
      className={`min-h-screen w-full ${Colors.background} flex justify-center items-center`}
    >
      <div className={`w-full max-w-3xl px-8 py-10 ${Colors.card}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Name + Tagline */}
          <div>
            <p
              className={`uppercase tracking-[0.22em] text-xs ${Colors.subtleText}`}
            >
              Profile
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl leading-tight">
              <span className={`${Colors.premiumHeading} font-semibold`}>
                Anirudh
              </span>{" "}
              <span className={`${Colors.premiumText} font-medium`}>
                Kuppili
              </span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              I dream a lot of things, and luckily I can build all of them.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                className={`px-5 py-2.5 rounded-full text-sm font-medium text-white ${Colors.bgAccent} hover:brightness-110 transition`}
              >
                View work
              </button>
              <button className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200 transition">
                Schedule call
              </button>
            </div>
          </div>

          {/* Right: Simple stats */}
          <div className="flex flex-col gap-4 min-w-[220px]">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Focus
              </span>
              <span className="text-sm text-neutral-800">
                AI agents, full‑stack, systems
              </span>
            </div>
            <div className="h-px bg-neutral-200" />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                  Hacks Won
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">6</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                  Live Builds
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">4</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                  Posted Videos
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-900">
                  100+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
