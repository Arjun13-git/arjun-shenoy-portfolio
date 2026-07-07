import { GradientBackground } from "./gradient";
import { GridBackground } from "./grid";

/**
 * Background system for the hero section.
 * Simplified — neural network dots/lines removed as they don't adapt to light mode.
 * The gradient and grid provide sufficient visual interest.
 */
export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <GradientBackground />
      <GridBackground />
    </div>
  );
}