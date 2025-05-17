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
    title: "The Future of Fast Development",
    insight:
      "Traditional development cycles are slow and expensive. SupaFast is revolutionizing this space by enabling rapid prototyping and deployment, helping teams move from idea to production in days, not months.",
  },
  {
    title: "Why Speed Matters",
    insight:
      "In today's competitive landscape, development speed directly impacts market success. Teams using SupaFast can iterate faster, respond to market changes quicker, and maintain a significant competitive advantage.",
  },
  {
    title: "The Power of Early Access",
    insight:
      "Early adopters of SupaFast gain exclusive access to cutting-edge features, direct influence on product development, and the opportunity to shape the future of rapid development tools.",
  },
];

const DomainAwareness = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="py-24 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm"
    >
      <div className="container  px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-center mb-16 text-foreground"
        >
          Understanding the Landscape
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          <div className="">
            <Accordion
              type="single"
              collapsible
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6"
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
                    className="border border-border rounded-xl px-6 py-2 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-colors"
                  >
                    <AccordionTrigger className="text-xl font-semibold hover:no-underline group">
                      <div className="flex flex-col w-full">
                        <span>{item.title}</span>
                        <div className="h-0.5 w-0 bg-gradient-to-r from-[--imperial-red-primary] via-[--ut-orange-primary] to-[--triadic-blue] transition-all duration-300 group-hover:w-full group-data-[state=open]:w-full" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-muted-foreground pt-2">
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
