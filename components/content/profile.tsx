import { Colors } from "@/lib/colors";

export const Profile = () => {
  return (
    <div className="flex flex-col items-center p-20 w-full">
      <h1 className="text-4xl">
        <span className={`${Colors.premiumHeading} font-bold`}>Anirudh</span>{" "}
        <span className={Colors.premiumText}>Kuppili</span>
      </h1>
    </div>
  );
};
