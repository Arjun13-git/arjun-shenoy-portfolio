import {
  Brain,
  FlaskConical,
  FolderGit2,
  Trophy,
  Cpu,
} from "lucide-react";

const stats = [
  {
    icon: FolderGit2,
    value: "20+",
    label: "Projects",
  },
  {
    icon: Brain,
    value: "6+",
    label: "AI / ML",
  },
  {
    icon: FlaskConical,
    value: "3+",
    label: "Research",
  },
  {
    icon: Cpu,
    value: "30+",
    label: "Technologies",
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Achievements",
  },
];

export function HeroStats() {
  return (
    <section className="mt-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">

        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="
              group
              rounded-2xl
              border border-cyan-500/10
              bg-white/[0.03]
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:bg-cyan-400/5
              hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
            "
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
              <Icon className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
            </div>

            <h3 className="text-3xl font-bold tracking-tight">
              {value}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              {label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}