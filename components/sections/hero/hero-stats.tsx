export function HeroStats() {
  const stats = [
    {
      label: "AI Projects",
      value: "10+",
    },
    {
      label: "Research",
      value: "2",
    },
    {
      label: "Hackathons",
      value: "6+",
    },
    {
      label: "Technologies",
      value: "30+",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h2 className="text-3xl font-bold">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}