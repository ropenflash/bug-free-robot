import React from 'react';

export default function About() {
  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Founder & Lead Architect',
      bio: 'Pioneering clean automation and robot-level software reliability.',
      avatar: '👨‍💻',
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Engineering',
      bio: 'Specialist in distributed systems, developer tooling, and zero-defect QA.',
      avatar: '👩‍💻',
    },
    {
      name: 'Marcus Chen',
      role: 'Product Designer',
      bio: 'Crafting intuitive user experiences that empower developers worldwide.',
      avatar: '🎨',
    },
  ];

  const milestones = [
    { year: '2023', title: 'The Inception', description: 'Started as an experimental open-source project to squash tricky bugs automatically.' },
    { year: '2024', title: 'Version 1.0 Launch', description: 'Reached 10,000+ active developers and released our core modern toolkit.' },
    { year: '2025', title: 'Global Scale', description: 'Expanding to continuous cloud testing, fast deployment pipelines, and intelligent diagnostics.' },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="about-title">About BugFreeRobot</h1>
        <p className="about-subtitle">
          Building resilient, automated, and frictionless software solutions for modern development teams.
        </p>
      </section>

      <section className="about-mission">
        <div className="section-card">
          <h2>Our Mission</h2>
          <p>
            At BugFreeRobot, our mission is to eliminate bugs before they even touch production.
            We believe that developers should spend their time inventing and shipping features,
            not chasing elusive regressions in the dark.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>What We Stand For</h2>
        <div className="values-grid">
          <div className="value-card">
            <span className="value-icon">⚡</span>
            <h3>Speed & Agility</h3>
            <p>Rapid feedback loops and lightning-fast iteration without sacrificing quality.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🛡️</span>
            <h3>Bulletproof Reliability</h3>
            <p>High testing standards and automated verifications at every stage of the lifecycle.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🌱</span>
            <h3>Developer First</h3>
            <p>Clean abstractions, sensible defaults, and tooling designed with empathy for engineers.</p>
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <h2>Our Journey</h2>
        <div className="timeline-grid">
          {milestones.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="member-avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <span className="member-role">{member.role}</span>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
