"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Brain, Check, WifiOff, X } from "lucide-react";

// A scripted preview of the AI tutor. The real tutor runs a local model
// inside the desktop app, so the website can't call it — these are
// pre-written sample answers, labelled as such in the card footer.

type Quiz = {
  options: string[];
  correct: number;
  right: string;
  wrong: string;
};

type Prompt = {
  chip: string;
  ask: string;
  answer: string[];
  formula?: string;
  quiz?: Quiz;
};

const prompts: Prompt[] = [
  {
    chip: "Photosynthesis · SS2",
    ask: "Explain photosynthesis for my SS2 Biology class.",
    answer: [
      "Photosynthesis is how green plants make their own food. Chlorophyll in the leaves traps energy from sunlight.",
      "The plant uses that energy to turn carbon dioxide from the air and water from the soil into glucose — and it releases oxygen.",
      "Think of a cassava leaf as a tiny kitchen: sunlight is the fire, water and CO₂ are the ingredients, and glucose is the meal.",
    ],
    formula: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
  },
  {
    chip: "Quiz me · Fractions",
    ask: "Give my JSS1 class a quick fractions question.",
    answer: [
      "Ada ate 2/8 of a pizza and Musa ate 3/8. What fraction of the pizza did they eat altogether?",
    ],
    quiz: {
      options: ["5/16", "5/8", "1/8", "6/8"],
      correct: 1,
      right:
        "Correct! The denominators are the same, so add the numerators: 2 + 3 = 5. They ate 5/8.",
      wrong:
        "Not quite. When the denominators match, keep the denominator and add only the numerators. Try again!",
    },
  },
  {
    chip: "Inflation · SS1",
    ask: "Explain inflation simply for SS1 Economics.",
    answer: [
      "Inflation is when the prices of goods and services keep rising over time, so the same amount of money buys less.",
      "Example: if a bag of rice costs ₦50,000 this year and ₦65,000 next year, your ₦50,000 can no longer buy a full bag.",
      "Two common causes: too much money chasing too few goods, and higher costs of production, like fuel and transport.",
    ],
  },
];

const CHARS_PER_TICK = 3;
const TICK_MS = 22;

export default function TutorDemo() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  // The first answer is fully shown on load (and in the server HTML), so the
  // card is never empty; typing only plays after the visitor picks a prompt.
  const [shown, setShown] = useState(Infinity);
  const [picked, setPicked] = useState<number | null>(null);

  const prompt = prompts[active];
  const fullText = useMemo(() => prompt.answer.join("\n"), [prompt]);
  const done = shown >= fullText.length;

  useEffect(() => {
    if (done) return;
    const id = setInterval(() => setShown((n) => n + CHARS_PER_TICK), TICK_MS);
    return () => clearInterval(id);
  }, [done, active]);

  const choose = (i: number) => {
    setActive(i);
    setPicked(null);
    setShown(reduceMotion ? Infinity : 0);
  };

  // Slice the joined text back into paragraphs for display.
  const visible = fullText.slice(0, shown).split("\n");

  return (
    <div className="sticker-card relative w-full max-w-[520px] overflow-hidden bg-white">
      {/* Window bar */}
      <div className="flex items-center justify-between border-b-2 border-ink bg-secondary-50 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-ink bg-primary text-white">
            <Brain size={16} strokeWidth={2.5} />
          </span>
          <span className="text-[15px] font-extrabold tracking-tight text-ink">
            SkoolBox AI Tutor
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-sun px-2.5 py-1 text-[12px] font-extrabold text-ink">
          <WifiOff size={12} strokeWidth={2.8} />
          Offline
        </span>
      </div>

      {/* Conversation */}
      {/* Grows with the answer on phones (no scroll-inside-scroll); fixed
          height from sm up so typing doesn't push the hero around. */}
      <div className="flex min-h-[300px] flex-col gap-3 px-4 py-4 sm:h-[340px] sm:overflow-y-auto">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md border-2 border-ink bg-secondary px-4 py-2.5 text-[14px] font-semibold leading-snug text-white">
          {prompt.ask}
        </div>

        <div className="max-w-[92%] rounded-2xl rounded-bl-md border-2 border-ink/15 bg-cream-50 px-4 py-3 text-[14px] leading-relaxed text-ink/85">
          {/* Typed text is decorative; screen readers get the full answer below. */}
          <div aria-hidden="true" className="space-y-2">
            {visible.map((p, i) => (
              <p key={i}>
                {p}
                {!done && i === visible.length - 1 && (
                  <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-ink" />
                )}
              </p>
            ))}
            {done && prompt.formula && (
              <p className="rounded-lg border-2 border-dashed border-primary/40 bg-white px-3 py-2 text-center font-mono text-[13px] font-bold text-primary-dark">
                {prompt.formula}
              </p>
            )}
          </div>
          <div className="sr-only" aria-live="polite">
            {prompt.answer.join(" ")} {prompt.formula}
          </div>

          {done && prompt.quiz && (
            <div className="mt-3">
              <div className="grid grid-cols-2 gap-2">
                {prompt.quiz.options.map((o, i) => {
                  const isPicked = picked === i;
                  const isRight = i === prompt.quiz!.correct;
                  const state =
                    isPicked && isRight
                      ? "border-primary bg-primary text-white"
                      : isPicked
                        ? "border-coral bg-coral/15 text-ink"
                        : "border-ink bg-white text-ink hover:bg-sun";
                  return (
                    <button
                      key={o}
                      type="button"
                      onClick={() => setPicked(i)}
                      aria-pressed={isPicked}
                      className={`flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border-2 px-3 text-[15px] font-extrabold transition-colors ${state}`}
                    >
                      {isPicked && isRight && <Check size={16} strokeWidth={3} />}
                      {isPicked && !isRight && <X size={16} strokeWidth={3} />}
                      {String.fromCharCode(65 + i)}) {o}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2.5 min-h-[2.5em] text-[13px] font-semibold text-ink/75" aria-live="polite">
                {picked === null
                  ? "Tap an answer."
                  : picked === prompt.quiz.correct
                    ? prompt.quiz.right
                    : prompt.quiz.wrong}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Prompt chips */}
      <div className="border-t-2 border-ink/10 px-4 pb-4 pt-3">
        <p className="mb-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-ink/55">
          Try asking
        </p>
        <div className="flex flex-wrap gap-2">
          {prompts.map((p, i) => (
            <button
              key={p.chip}
              type="button"
              onClick={() => choose(i)}
              aria-pressed={active === i}
              className={`inline-flex min-h-[40px] items-center gap-1.5 rounded-full border-2 border-ink px-3.5 text-[13px] font-bold transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] ${
                active === i
                  ? "bg-ink text-white"
                  : "bg-white text-ink shadow-sticker-sm hover:-translate-y-0.5 hover:bg-sun"
              }`}
            >
              {p.chip}
            </button>
          ))}
        </div>
        <p className="mt-3 text-[12px] font-semibold text-ink/55">
          Sample answers. In the app, the tutor runs on your computer — no
          internet needed.
        </p>
      </div>
    </div>
  );
}
