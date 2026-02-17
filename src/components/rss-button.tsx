import { Button } from "./ui/button";
import { RssIcon } from "lucide-react";

export const RssButton = () => {
  return (
    <Button asChild>
      <a href="rss.xml" target="_blank" rel="noopener noreferrer">
        <RssIcon className="size-4" />
        <span className="hidden sm:inline">Subscribe to RSS</span>
        <span className="sm:hidden">RSS</span>
      </a>
    </Button>
  );
};
