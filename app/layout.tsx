import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHAOS Library",
  description: "The library is a repository of information and techniques that are used in robotics, explained in a step by step \"lesson plan\" style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <p>The library is a repository of information and techniques that are used in robotics, explained in a step by step "lesson plan" style.</p>

          <ul>
            <li><a href="/library/math/">Math: General</a></li>
            <p>Contains early high school mathematics topics. Only touches on the topics that relate to robotics.</p>
            <li><a href="/library/math2/">Math: Intermediate</a></li>
            <p>The next step, applied mathematics at a high school level. Should be manageable by the upper class.</p>
            <li><a href="/library/math3/">Math: Advanced</a></li>
            <p>Material taught in college. Topics are still walked through step by step, but require a strong understanding of all prior material.</p>

            <li><a href="/library/swerve-drive/">Swerve Drive</a></li>
            <li><a href="/library/dynamic-crop/">Procedural Crop w/ Limelight</a></li>
            <li><a href="/library/launcher-models/">Launcher Models</a></li>
            <li><a href="#">Robot Localization</a></li>
            <li><a href="#">Transfer Alignment</a></li>
            <li><a href="#">Autonomous Pathing</a></li>
          </ul>
        </section>
        {children}
      </body>
    </html>
  );
}
