import type { SkillGroup } from "@/types";

// Grouped by how I use them. Only tools that appear in my projects,
// research or internship work are listed here.
export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C / C++", "SQL"],
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "OpenCV", "YOLOv8", "NumPy", "Pandas"],
  },
  {
    category: "LLMs & Agents",
    skills: ["LangChain", "LangGraph", "LangFlow", "Gemini API", "Amazon Bedrock", "ChromaDB"],
  },
  {
    category: "Web & Backend",
    skills: ["FastAPI", "Node.js", "Express", "Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Data & Cloud",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "AWS", "Docker"],
  },
  {
    category: "Research & Tools",
    skills: ["Qiskit", "PennyLane", "LaTeX", "Git", "Linux", "CadQuery / Build123d"],
  },
];
