import { Colors } from "@/lib/colors";
import { useSidebarStore } from "@/lib/hooks/useSidebarStore";
import { Profile } from "../content/profile";

export const Content = () => {
  const { selected } = useSidebarStore();

  const CONTENT: Record<string, React.ReactElement> = {
    profile: <Profile />,
  };

  return (
    <div className={`${Colors.background} flex-1 transition-all duration-300`}>
      {selected && CONTENT[selected.toLowerCase()]}
    </div>
  );
};
