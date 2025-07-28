import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { projectsData } from "@/lib/data";
import { StaticImageData } from "next/image";

import { SiFlutter } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";

type ProjectProps = (typeof projectsData)[number];

export function ProjectCard({ project }: { project: ProjectProps }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const IconComponent =
    project.icon === "flutter"
      ? SiFlutter
      : project.icon === "firebase"
      ? SiFirebase
      : MdAdminPanelSettings;

  const StatusIndicators = () => (
    <div className="absolute top-4 right-4 flex space-x-2">
      <div className="h-2 w-2 rounded-full bg-red-500" />
      <div className="h-2 w-2 rounded-full bg-yellow-500" />
      <div className="h-2 w-2 rounded-full bg-green-500" />
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group bg-gray-900/40 border border-white/20 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Removed image section */}

      <div className="p-4 sm:p-6">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-lg sm:text-xl font-bold text-white font-mono">
            {project.title}
          </h4>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed font-mono">
          {project.description}
        </p>

        <div className="flex flex-wrap mt-4 gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={cn(
                "text-xs font-semibold px-2.5 py-0.5 rounded-md border border-white/20",
                tag.color
              )}
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-blue-400 hover:underline"
          >
            Visit project →
          </Link>
          <IconComponent className={project.iconColor} size={20} />
        </div>
      </div>
    </motion.div>
  );
}
