export function NeuralNetwork() {
  return (
    <>
      <div className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-cyan-400" />

      <div className="absolute left-[32%] top-[42%] h-2 w-2 rounded-full bg-cyan-400" />

      <div className="absolute left-[74%] top-[26%] h-2 w-2 rounded-full bg-cyan-400" />

      <div className="absolute left-[82%] top-[58%] h-2 w-2 rounded-full bg-cyan-400" />

      <div className="absolute left-[54%] top-[70%] h-2 w-2 rounded-full bg-cyan-400" />

      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        preserveAspectRatio="none"
      >
        <line
          x1="18%"
          y1="22%"
          x2="32%"
          y2="42%"
          stroke="rgb(34 211 238)"
          strokeWidth="1"
        />

        <line
          x1="32%"
          y1="42%"
          x2="54%"
          y2="70%"
          stroke="rgb(34 211 238)"
          strokeWidth="1"
        />

        <line
          x1="54%"
          y1="70%"
          x2="82%"
          y2="58%"
          stroke="rgb(34 211 238)"
          strokeWidth="1"
        />

        <line
          x1="74%"
          y1="26%"
          x2="82%"
          y2="58%"
          stroke="rgb(34 211 238)"
          strokeWidth="1"
        />
      </svg>
    </>
  );
}