import { type ReactNode, useEffect, useState } from "react";

const INITIAL_GRID_SIZES = [8, 16, 24, 32, 40, 48, 56, 64];

function ResponsiveOverlay() {
  const [dimensions, setDimensions] = useState(() => getViewportDimensions());
  const [visible, setVisible] = useState(false);
  const [gridSizes, setGridSizes] = useState(INITIAL_GRID_SIZES);

  useEffect(() => {
    function updateDimensions() {
      setDimensions(getViewportDimensions());
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (!event.ctrlKey) return;

      if (event.key === "Enter") {
        setVisible((current) => !current);
        return;
      }

      if (event.key === "ArrowUp") {
        setGridSizes((current) => {
          const nextSize =
            current.length === 0 ? 8 : current[current.length - 1] + 8;

          return [...current, nextSize];
        });
        return;
      }

      if (event.key === "ArrowDown") {
        setGridSizes((current) => current.slice(0, -1));
      }
    }

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 bg-purple-200/30 font-medium text-black sm:bg-blue-200/30 md:bg-green-200/30 lg:bg-orange-200/30 xl:bg-red-200/30 2xl:bg-pink-200/30"
        >
          {gridSizes.reduceRight<ReactNode>(
            (child, size) => (
              <div
                key={size}
                className="absolute inset-0 m-8 flex border border-purple-500 text-sm sm:border-blue-500 md:border-green-500 lg:border-orange-500 xl:border-red-500 2xl:border-pink-500"
              >
                <span className="ml-2 mt-2 text-xs font-normal text-purple-500 sm:text-blue-500 md:text-green-500 lg:text-orange-500 xl:text-red-500 2xl:text-pink-500">
                  {size}
                </span>
                {child}
              </div>
            ),
            null,
          )}
        </div>
      )}

      <button
        type="button"
        aria-label="Toggle responsive overlay"
        aria-pressed={visible}
        className="fixed left-1 top-1 z-50 cursor-pointer rounded bg-black/50 px-2 py-1 text-xs text-white"
        onClick={() => setVisible((current) => !current)}
      >
        <span className="block sm:hidden">xs</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block">2xl</span>
      </button>

      <div className="fixed bottom-1 left-1 z-50 rounded bg-black/50 px-2 py-1 text-xs text-white">
        <span className="block portrait:block landscape:hidden">portrait</span>
        <span className="block portrait:hidden landscape:block">landscape</span>
      </div>

      <div className="fixed bottom-1 right-1 z-50 rounded bg-black/50 px-2 py-1 text-xs text-white">
        {dimensions.width} x {dimensions.height}
      </div>
    </>
  );
}

function getViewportDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default ResponsiveOverlay;
