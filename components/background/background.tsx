import { GradientBackground } from "./gradient";
import { GridBackground } from "./grid";
import { NeuralNetwork } from "./neural-network";
import { Ocean } from "./ocean";
import { Noise } from "./noise";

export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <GradientBackground />

      <GridBackground />

      <NeuralNetwork />

      <Ocean />

      <Noise />

    </div>
  );
}