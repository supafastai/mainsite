import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "When is SupaFast launching?",
    answer:
      "We&apos;re almost live. SupaFast is currently onboarding early access users — sign up to skip the queue and move faster than competitors waiting on the sidelines",
  },
  {
    question: "How much will SupaFast cost?",
    answer:
      "Early access → free trial. Pricing → coming soon (but trust us, it'll be worth it).",
  },
  {
    question: "How do I get started?",
    answer:
      'Simple. Hit "Get me in early," join the waitlist, and we\'ll handle the rest',
  },
];

const Faq = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm "
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-center mb-12 text-foreground"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-medium hover:no-underline group">
                    <div className="flex flex-col w-full">
                      <span>{item.question}</span>
                      <div className="h-0.5 w-0 bg-gradient-to-r from-[--imperial-red-primary] via-[--ut-orange-primary] to-[--triadic-blue] transition-all duration-300 group-hover:w-full group-data-[state=open]:w-full" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
