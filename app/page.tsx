import { Sidebar } from "@/components/custom/sidebar";
import { Content } from "@/components/custom/content";

export default function Page() {
  return (
    <div className="flex max-h-screen max-w-screen p-4">
      <Sidebar />
      <Content />
    </div>
  );
}
