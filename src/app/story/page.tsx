"use client";

import { useState } from "react";
import CTABar from "@/components/sections/CTABar";
import { timeline } from "@/data";

export default function StoryPage() {
  const [selectedStop, setSelectedStop] = useState(timeline[timeline.length - 1]);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <header className="relative space-y-10 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--highlight)]/10 to-[var(--accent)]/10 border border-[var(--highlight)]/20 px-6 py-3 text-sm font-semibold text-[var(--highlight)] backdrop-blur-sm">
            🗺️ Journey of Adaptability
          </span>
        </div>

        <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl bg-gradient-to-br from-[var(--text)] to-[var(--text)]/60 bg-clip-text tracking-tight leading-tight">
            A Story of{' '}
            <span className="bg-gradient-to-r from-[var(--highlight)] to-[var(--accent)] bg-clip-text text-transparent">
              Movement & Growth
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-xl md:text-2xl leading-relaxed text-[var(--text)]/70 font-light">
            From military bases to tech hubs, each move shaped a unique perspective on adaptability,
            learning, and building systems that solve real problems.
          </p>
        </div>

        {/* Journey Stats */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--highlight)]">{timeline.length}</div>
            <div className="text-sm text-[var(--muted)]">Cities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--accent)]">25+</div>
            <div className="text-sm text-[var(--muted)]">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--secondary)]">3</div>
            <div className="text-sm text-[var(--muted)]">Countries</div>
          </div>
        </div>
      </header>

      {/* Core Philosophy */}
      <section className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Philosophy</h2>
          <p className="text-lg text-[var(--text)]/70 max-w-3xl mx-auto">
            Constant movement taught me that adaptability isn&apos;t just surviving change, it&apos;s thriving through transformation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-6 p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--highlight)]/30 transition-all duration-500 group">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--highlight)]/20 to-[var(--highlight)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🧭</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Navigate Uncertainty</h3>
              <p className="text-[var(--text)]/70">
                Every new city meant learning new systems, making new friends, and finding new opportunities
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--accent)]/30 transition-all duration-500 group">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🌱</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Embrace Beginnings</h3>
              <p className="text-[var(--text)]/70">
                Being the &ldquo;new kid&rdquo; repeatedly taught me to approach unfamiliar situations with curiosity, not fear
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 p-8 rounded-3xl bg-[var(--surface)]/50 border border-[var(--muted)]/10 backdrop-blur-sm hover:border-[var(--secondary)]/30 transition-all duration-500 group">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--secondary)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🔗</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">Build Bridges</h3>
              <p className="text-[var(--text)]/70">
                Learning to connect with people from vastly different backgrounds and perspectives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="relative animate-fade-in-up" style={{animationDelay: '0.4s'}}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Journey Map</h2>
          <p className="text-lg text-[var(--text)]/70 max-w-2xl mx-auto">
            Click on any city to explore the lessons learned during that chapter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Navigation */}
          <div className="space-y-4">
            {timeline.map((stop) => (
              <div
                key={`${stop.city}-${stop.years}`}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  selectedStop === stop
                    ? 'bg-[var(--accent)]/10 border-[var(--accent)]/30 shadow-lg shadow-[var(--accent)]/10'
                    : 'bg-[var(--surface)]/50 border-[var(--muted)]/10 hover:border-[var(--accent)]/20 hover:bg-[var(--accent)]/5'
                }`}
                onClick={() => setSelectedStop(stop)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      selectedStop === stop ? 'bg-[var(--accent)]' : 'bg-[var(--muted)]/40'
                    }`} />
                    <div>
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        selectedStop === stop ? 'text-[var(--accent)]' : 'text-[var(--text)]'
                      }`}>
                        {stop.city}
                      </h3>
                      <p className="text-sm text-[var(--muted)]">{stop.years}</p>
                    </div>
                  </div>

                  <svg
                    className={`w-5 h-5 transition-all duration-300 ${
                      selectedStop === stop
                        ? 'text-[var(--accent)] rotate-90'
                        : 'text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Stop Details */}
          <div className="sticky top-8">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--secondary)]/5 p-8 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--secondary)]/10" />

              <div className="relative space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
                      {selectedStop.city}
                    </h3>
                    <p className="text-lg text-[var(--accent)] font-semibold">
                      {selectedStop.years}
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h4 className="text-lg font-semibold text-[var(--text)]">Key Lesson</h4>
                  <p className="text-xl leading-relaxed text-[var(--text)]/80">
                    {selectedStop.lesson}
                  </p>
                </div>

                {/* Add some contextual details based on the city */}
                <div className="pt-6 border-t border-[var(--muted)]/20">
                  {selectedStop.city === "Bangalore" && (
                    <div className="space-y-2">
                      <h5 className="font-semibold text-[var(--text)]">Engineering Foundations</h5>
                      <p className="text-sm text-[var(--text)]/70">
                        Computer Science degree, first startup experiences, and discovering the power of technology to solve real problems.
                      </p>
                    </div>
                  )}
                  {selectedStop.city === "Syracuse, NY" && (
                    <div className="space-y-2">
                      <h5 className="font-semibold text-[var(--text)]">Research Mindset</h5>
                      <p className="text-sm text-[var(--text)]/70">
                        Master&apos;s in Data Science, diving deep into machine learning, and learning to ask better questions.
                      </p>
                    </div>
                  )}
                  {selectedStop.city === "Jersey City, NJ" && (
                    <div className="space-y-2">
                      <h5 className="font-semibold text-[var(--text)]">Current Chapter</h5>
                      <p className="text-sm text-[var(--text)]/70">
                        Building AI products, exploring financial markets, and creating systems that help people make better decisions.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="relative animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">What&apos;s Next?</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-[var(--text)]/80 leading-relaxed">
              The journey of movement shaped a unique perspective: that the best solutions come from understanding
              multiple contexts, embracing uncertainty, and building bridges between different worlds.
            </p>
            <p className="text-lg text-[var(--text)]/70">
              Today, I&apos;m focused on building AI systems that help people navigate complexity with confidence,
              whether that&apos;s financial markets, business decisions, or learning new skills.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
        <CTABar />
      </section>
    </div>
  );
}
