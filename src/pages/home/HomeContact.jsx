import React from "react";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function HomeContact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-4">
      <div className="text-center max-w-2xl">
        <TextReveal>
          Magic UI will change the way you design.
        </TextReveal>
        <p className="mt-6 text-lg text-gray-300">
          Animate, enhance, and wow your users with interactive UI elements.
        </p>
      </div>
    </section>
  );
}
