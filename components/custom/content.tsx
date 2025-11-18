import { Colors } from "@/lib/colors";
import { useSidebarStore } from "@/lib/hooks/useSidebarStore";
import { Profile } from "../content/profile";
import { Experience } from "../content/experience";

export const Content = () => {
  const { selected } = useSidebarStore();

  const CONTENT: Record<string, React.ReactElement> = {
    profile: <Profile />,
    experience: <Experience />,
  };

  return (
    <div
      className={`${Colors.background} flex-1 transition-all duration-300 pb-10`}
    >
      {selected && CONTENT[selected.toLowerCase()]}
    </div>
  );
};
