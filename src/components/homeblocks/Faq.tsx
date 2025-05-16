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
          Understanding the Landscape
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
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
                  className="border border-border rounded-lg px-4 bg-background/50 backdrop-blur-sm hover:bg-accent/5 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-medium hover:no-underline group">
                    <div className="flex flex-col w-full">
                      <span>{item.title}</span>
                      <div className="h-0.5 w-0 bg-gradient-to-r from-[--imperial-red-primary] via-[--ut-orange-primary] to-[--triadic-blue] transition-all duration-300 group-hover:w-full group-data-[state=open]:w-full" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.insight}
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

export default DomainAwareness;
