window.PORTFOLIO_POSTS = [
  {
    slug: "nmap-enumeration-lab",
    title: "Nmap Enumeration Lab",
    type: "Writeup",
    date: "2026-03-20",
    readTime: "6 min read",
    excerpt:
      "A walkthrough of an introductory enumeration lab focused on open ports, service detection, and attack-surface analysis.",
    tags: ["Nmap", "Enumeration", "Linux", "Networking"],
    intro:
      "Objective: identify open ports, inspect running services, and build an initial attack-surface picture before any exploitation attempt.",
    sections: [
      {
        heading: "Tools Used",
        list: ["Nmap", "Kali Linux"]
      },
      {
        heading: "Step 1: Initial Scan",
        code: "nmap -sS -T4 192.168.x.x",
        paragraphs: [
          "A SYN scan is useful for getting a fast first-pass view of exposed ports.",
          "This step is about speed and orientation. It tells me which services deserve closer inspection next."
        ]
      },
      {
        heading: "Step 2: Service Detection",
        code: "nmap -sV 192.168.x.x",
        paragraphs: [
          "Version detection helps move from 'something is open' to 'this specific service is running.'",
          "That matters because vulnerability research depends on product and version details."
        ]
      },
      {
        heading: "Findings",
        list: ["Port 22 -> SSH", "Port 80 -> HTTP"]
      },
      {
        heading: "Analysis",
        paragraphs: [
          "The HTTP service suggests a web attack surface that should be examined with browser testing, directory discovery, and header inspection.",
          "SSH is often a lower-noise target for configuration review or credential testing, but it also needs careful restraint because it is easy to waste time there too early."
        ]
      },
      {
        heading: "What I Learned",
        paragraphs: [
          "Enumeration sets the pace for the rest of the assessment.",
          "If recon is weak, every later step becomes guesswork instead of evidence-driven testing."
        ]
      }
    ]
  },
  {
    slug: "building-this-portfolio",
    title: "Building This Portfolio With Better Structure",
    type: "Blog",
    date: "2026-03-22",
    readTime: "4 min read",
    excerpt:
      "Notes on why I am treating this site as a technical workspace instead of a generic personal homepage.",
    tags: ["Portfolio", "Frontend", "Learning", "Documentation"],
    intro:
      "This site is part of my learning process. I want it to show real technical progress, not just claims about what I know.",
    sections: [
      {
        heading: "Why This Matters",
        paragraphs: [
          "A portfolio becomes more credible when it shows artifacts: writeups, notes, experiments, and working improvements over time.",
          "That is more useful than a polished page that says very little about actual skill."
        ]
      },
      {
        heading: "What I Want From The Site",
        list: [
          "One place to publish writeups and technical posts",
          "A structure that stays easy to update",
          "Clear separation between blog-style reflection and evidence-heavy writeups"
        ]
      },
      {
        heading: "Current Direction",
        paragraphs: [
          "The site is moving toward a reusable posts system so new entries can be added from one data file instead of rebuilding full pages every time.",
          "That keeps the content workflow simpler and makes the portfolio easier to maintain."
        ]
      }
    ]
  }
];
