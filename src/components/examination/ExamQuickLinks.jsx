import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ClipboardList, LineChart, Archive } from 'lucide-react';

const links = [
  { title: "Exam Schedule", icon: CalendarDays, desc: "View current timelines", color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
  { title: "New Exam Schedule", icon: ClipboardList, desc: "Recently updated timetables", color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
  { title: "Examination Results", icon: LineChart, desc: "Check your latest scores", color: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200" },
  { title: "Old Results", icon: Archive, desc: "Access archived result records", color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" }
];

export default function ExamQuickLinks() {
  return (
    <section className="py-20 bg-ksv-light border-b border-ksv-border/40">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a 
                href="#"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center gap-4 p-6 bg-ksv-white rounded-radius-md border ${item.border} shadow-sm hover:shadow-hover hover:-translate-y-1 transition-all group`}
              >
                <div className={`${item.bg} ${item.color} p-4 rounded-radius-sm group-hover:bg-ksv-primary group-hover:text-ksv-white transition-colors`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-ksv-dark leading-tight group-hover:text-ksv-primary transition-colors">{item.title}</h3>
                  <p className="font-body text-xs text-ksv-dark/60 mt-1">{item.desc}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
