import Section from "@/components/ui/Section";

export const metadata = {
  title: "Training | Cyber Campaign",
  description: "An overview of hands-on cyber security training: simulated environments, CTFs, labs, and practical experience.",
};

export default function TrainingPage() {
  return (
    <Section className="pb-16">
      <h1 className="text-2xl font-bold text-stone-100 mb-1">🎯 Training and Simulated Environments</h1>
      <p className="text-stone-500 text-sm mb-6 max-w-2xl">
        Practice in safe, simulated environments is often presented as important for developing practical skills. This section briefly discusses that role and points to further resources.
      </p>
      <div className="space-y-4 text-stone-500 text-sm leading-relaxed">
        <p>
          Hands-on training allows learners to experience realistic scenarios without putting real systems or data at risk. Simulated environments are often presented as a way to understand how attacks work and how defensive measures can be applied in practice.
        </p>
        <p>
          Common types include <strong className="text-stone-400">capture-the-flag (CTF)</strong> challenges, <strong className="text-stone-400">lab environments</strong> (e.g. vulnerable VMs and networks), and <strong className="text-stone-400">phishing simulations</strong>. Many platforms offer free or low-cost labs aligned with common certifications and roles.
        </p>
        <p>
          Work through the topic pages here to build a foundation, then use the quiz to test your understanding. From there, seek out external CTFs and labs to build practical skills in a safe setting.
        </p>
      </div>

      <h2 className="text-lg font-semibold text-stone-100 mt-10 mb-3">Useful resources</h2>
      <p className="text-stone-500 text-sm mb-4 max-w-2xl">
        Platforms and sites where you can practice in safe environments or follow structured learning paths.
      </p>
      <ul className="space-y-3 text-stone-500 text-sm">
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">TryHackMe</a>
          <span className="block mt-0.5">Guided rooms and paths for beginners to advanced; free tier available.</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://www.hackthebox.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">HackTheBox</a>
          <span className="block mt-0.5">Labs and CTFs; good for hands-on penetration testing practice.</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://overthewire.org/wargames/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">OverTheWire Wargames</a>
          <span className="block mt-0.5">Free command-line and security challenges (Bandit, Natas, etc.).</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://www.picoctf.org" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">picoCTF</a>
          <span className="block mt-0.5">Beginner-friendly CTF from Carnegie Mellon; free and often used in education.</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">PortSwigger Web Security Academy</a>
          <span className="block mt-0.5">Free web security labs and theory (SQL injection, XSS, etc.).</span>
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-stone-100 mt-10 mb-3">YouTube channels and videos</h2>
      <p className="text-stone-500 text-sm mb-4 max-w-2xl">
        Channels and playlists that explain concepts and walk through challenges. Always verify URLs and use official channels.
      </p>
      <ul className="space-y-3 text-stone-500 text-sm">
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://www.youtube.com/c/NetworkChuck" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">NetworkChuck</a>
          <span className="block mt-0.5">Cybersecurity and homelab tutorials; beginner-friendly and energetic.</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://www.youtube.com/@_JohnHammond" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">John Hammond</a>
          <span className="block mt-0.5">CTF writeups, malware analysis, and security topics.</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">LiveOverflow</a>
          <span className="block mt-0.5">Binary exploitation, web security, and CTF-style challenges.</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://www.youtube.com/c/thecybermentor" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">The Cyber Mentor</a>
          <span className="block mt-0.5">Ethical hacking and penetration testing; practical walkthroughs.</span>
        </li>
        <li className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3">
          <a href="https://www.youtube.com/channel/UCRnWD3BsY5Co2MMETB7lHQw" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">TryHackMe</a>
          <span className="block mt-0.5">Official TryHackMe channel: room walkthroughs and security tutorials.</span>
        </li>
      </ul>
    </Section>
  );
}
