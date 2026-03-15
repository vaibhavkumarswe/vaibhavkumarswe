import { ReactNode } from "react";
import StickyNav from "./StickyNav";
import CommandFooter from "./CommandFooter";
import { useState } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <main className="pt-14">{children}</main>
      <CommandFooter
        isOpen={commandOpen}
        onToggle={() => setCommandOpen((prev) => !prev)}
      />
    </div>
  );
};

export default PageLayout;
