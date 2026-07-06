"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/types";
import { fadeUp } from "@/lib/animations";
import { formatDate } from "@/utils/date";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 flex flex-col"
    >
      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 text-xs font-medium text-cyan-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-heading text-lg font-bold text-foreground leading-snug group-hover:text-cyan-400 transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <time dateTime={post.date}>{formatDate(post.date, "short")}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>

        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          aria-label={`Read ${post.title}`}
        >
          Read
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-border border-dashed p-16 text-center">
        <p className="text-muted-foreground">Articles coming soon.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thoughts on AI engineering, software architecture, and research.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <BlogCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}
