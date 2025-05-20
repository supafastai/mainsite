import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

interface DomainInsight {
  title: string;
  insight: string;
}

const domainInsights: DomainInsight[] = [
  {
    title: "When is SupaFast Launching?",
    insight:
      "We're almost live. SupaFast is currently onboarding early access users — sign up to skip the queue and move faster than competitors waiting on the sidelines",
  },
  {
    title: "Why does competitor tracking even matter?",
    insight:
      "Because guessing is expensive.  If you don't know what your competitors are doing, you're making decisions in the dark. SupaFast helps you see what's working for them—so you can do it better or avoid their mistakes altogether.",
  },
  {
    title: "Can't I just do this manually?",
    insight:
      "You could—if you love spreadsheets and stress.  Manually checking ads, websites, and emails takes hours. SupaFast does it for you, all in one place, so you can spend your time on the highest impact initiatives.",
  },
  {
    title: "How does SupaFast help me make better decisions?",
    insight:
      "It gives you the “why” behind what's happening.  SupaFast shows you trends, patterns, and moves your competitors are making—so you can launch smarter, price better, or spot gaps before they do.",
  },
  {
    title: "Isn't this just spying on the competition?",
    insight:
      "Not at all.  We only track what's already public—ads, emails, posts, site changes. It's like reading the room… just digitally. Nothing shady—just smart.",
  },
  {
    title: "What kind of edge does SupaFast actually give me?",
    insight:
      "SupaFast shows you competitor moves as they happen—so you're not reacting late. You're responding fast, or even beating them to it. That's how you stay relevant and ahead.",
  },
];

const DomainAwareness = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="  py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm"
    >
      <div className=" w-full flex flex-col items-start px-0 sm:p-4 md:p-8 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 text-foreground"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="w-full">
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4 sm:gap-6"
            >
              {domainInsights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-colors"
                  >
                    <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:no-underline group">
                      <div className="flex flex-col w-full">
                        <span>{item.title}</span>
                        <div className="h-0.5 w-0 bg-gradient-to-r from-[--imperial-red-primary] via-[--ut-orange-primary] to-[--triadic-blue] transition-all duration-300 group-hover:w-full group-data-[state=open]:w-full" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base sm:text-lg text-muted-foreground pt-2">
                      {item.insight}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DomainAwareness;
