import { ModeToggle } from "@/components/mode-toggle";
import { RssButton } from "@/components/rss-button";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <main className="min-h-svh w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 flex flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 flex-1">
        <Outlet />
      </div>
      <footer className="flex justify-end pt-4 gap-2 items-center">
        <ModeToggle />

        <RssButton />
      </footer>
    </main>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
