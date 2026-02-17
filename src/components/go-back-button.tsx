import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const GoBackButton = () => {
  return (
    <Button variant="outline" className="self-start" asChild>
      <Link to="/">
        <ChevronLeft />
      </Link>
    </Button>
  );
};
