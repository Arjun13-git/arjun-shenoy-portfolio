import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Button size="lg">
        Explore Projects

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="lg"
      >
        <Download className="mr-2 h-4 w-4" />

        Resume
      </Button>

    </div>
  );
}