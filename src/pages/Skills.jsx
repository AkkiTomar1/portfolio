import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { useScrollReveal } from "../utils/useScrollReveal";
import { skillGroups, techStack } from "../data/skillsData";
import { jobs, education } from "../data/experienceData";

export default function Skills() {
  const skillsRef = useScrollReveal();
  const timelineRef = useScrollReveal();

  return (
    <section className="px-6 sm:px-10 md:px-14">
      <SectionHeading
        eyebrow="What I know"
        title="My Skills &"
        highlight="Technologies"
        subtitle="The tools and technologies I use every day to design, build and ship products."
      />

      <div
        ref={skillsRef}
        className="reveal mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {skillGroups.map(({ icon: Icon, title, skills }) => (
          <div
            key={title}
            className="glass-strong group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-500/30 hover:shadow-[0_10px_40px_rgba(255,45,149,0.15)]"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-pink-600 via-purple-600 to-indigo-600 text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Icon />
            </span>
            <h3 className="font-display text-lg font-bold text-white">{title}</h3>
            <ul className="mt-5 space-y-4">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-xs font-semibold text-purple-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar h-1.5">
                    <span
                      className="skill-bar-fill"
                      style={{ "--level": `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div ref={timelineRef} className="reveal mx-auto mt-24 grid w-full max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 font-display text-2xl font-bold text-white">
            <span className="text-gradient">Experience</span>
          </h3>
          <ol className="relative space-y-8 border-l border-white/10 pl-6">
            {jobs.map((job) => (
              <li key={job.role} className="relative">
                <span
                  className={`absolute -left-[30px] top-1 h-3 w-3 rounded-full ring-4 ring-night ${
                    job.current
                      ? "bg-pink-500 shadow-[0_0_12px_rgba(255,45,149,0.8)]"
                      : "bg-indigo-500"
                  }`}
                />
                <div className="glass rounded-xl p-5 transition-all duration-300 hover:border-purple-500/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-display text-lg font-bold text-white">
                      {job.role}
                    </h4>
                    <span
                      className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                        job.current
                          ? "bg-pink-500/15 text-pink-300"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {job.current ? "Current" : "Completed"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-purple-300">{job.org}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{job.period}</p>
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-pink-500 to-indigo-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-8 flex items-center gap-2 font-display text-2xl font-bold text-white">
            <FaGraduationCap className="text-pink-400" />
            <span className="text-gradient">Education</span>
          </h3>
          <ol className="relative space-y-8 border-l border-white/10 pl-6">
            {education.map((item) => (
              <li key={item.degree} className="relative">
                <span className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-night" />
                <div className="glass rounded-xl p-5 transition-all duration-300 hover:border-purple-500/30">
                  <h4 className="font-display text-lg font-bold text-white">{item.degree}</h4>
                  <p className="mt-1 text-sm font-semibold text-purple-300">{item.school}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{item.period}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Full tech footprint
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-pink-500/40 hover:text-pink-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}