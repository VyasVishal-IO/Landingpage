import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, FileText, Share2, BarChart3, Code, Database, Lock, Sparkles, Check, Github } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const hoverScale = {
  hover: { 
    scale: 1,
    transition: { duration: 0.3 }
  }
};

// Helper Components
const Section = ({ children, className = "" }) => (
  <section className={`py-20 px-6 ${className}`}>
    <div className="container mx-auto">
      {children}
    </div>
  </section>
);

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children }) => (
  <motion.h2 
    className="text-4xl font-bold text-center mb-12"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-white bg-clip-text text-transparent">
      {children}
    </span>
  </motion.h2>
);

// Custom Button Component
const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center";
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:opacity-90",
    ghost: "text-white hover:bg-white/10",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Badge Component
const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${className}`}>
    {children}
  </span>
);

// Card Component
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg ${className}`}>
    {children}
  </div>
);

// Accordion Components
const Accordion = ({ children, className = "" }) => (
  <div className={`space-y-4 ${className}`}>
    {children}
  </div>
);

const AccordionItem = ({ trigger, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-white/10 rounded-lg ${className}`}>
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:text-purple-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
};

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/50 border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            FormLab
          </span>
          <Badge className="bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Open Source
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Vyas106/FormLab">
            <Button variant="ghost">
              <Github className="w-5 h-5 mr-2" />
              Star on GitHub
            </Button>
          </a>
          <a href="https://my-form-lab-by-vyas-vishal.vercel.app/">
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.header>
  );
}

// Hero Component
function Hero() {
  return (
    <Section className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Badge className="mb-8 bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            100% Free and Open Source Forever
          </Badge>
          
          <FloatingElement>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
                Professional Forms.
              </span>
              <br />
              <span className="text-white">
                Zero Cost.
              </span>
            </h1>
          </FloatingElement>

          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Create beautiful, powerful forms with our open-source platform.
            No hidden fees, no limitations, just pure form-building freedom.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button className="px-8 py-6 text-lg rounded-full">
              Start Building Forms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {["No credit card required", "Self-hosted option available", "MIT License"].map((text) => (
              <div key={text} className="flex items-center gap-2 text-gray-300">
                <Check className="w-5 h-5 text-purple-400" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// Features Component
function Features() {
  const features = [
    {
      title: "Seamless Form Creation",
      description: "Create professional forms with our intuitive drag-and-drop interface.",
      icon: FileText
    },
    {
      title: "Authentication & Security",
      description: "Enterprise-grade security with advanced authentication options.",
      icon: Shield
    },
    {
      title: "Dashboard for Data Management",
      description: "Powerful analytics and data management tools at your fingertips.",
      icon: BarChart3
    },
    {
      title: "Sharable Form Links",
      description: "Share your forms instantly with customizable access controls.",
      icon: Share2
    }
  ];

  return (
    <Section>
      <SectionTitle>Why Choose FormLab?</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border border-white/10 p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={hoverScale.hover}
              >
                <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// Technology Stack Component
function TechnologyStack() {
  const technologies = [
    { name: "Next.js", icon: Code, role: "Frontend Framework" },
    { name: "Prisma", icon: Database, role: "ORM" },
    { name: "PostgreSQL", icon: Database, role: "Database" },
    { name: "Auth", icon: Lock, role: "Authentication" }
  ];

  return (
    <Section className="bg-purple-900/10">
      <SectionTitle>Powered by Modern Tech</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border border-white/10 p-6 text-center backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group">
              <motion.div
                whileHover={hoverScale.hover}
                className="flex flex-col items-center gap-4"
              >
                <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20">
                  <tech.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.role}</p>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// FAQ Component
function FAQ() {
  const faqs = [
    {
      question: "Why should I use FormLab?",
      answer: "FormLab provides an intuitive, secure, and powerful platform for creating and managing forms. With features like drag-and-drop building and advanced analytics, you can streamline your form creation process.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we implement enterprise-grade security measures and follow industry best practices to ensure your data is protected at all times.",
    },
    {
      question: "How can I get started?",
      answer: "Simply click the 'Get Started' button, create an account, and you can begin creating forms immediately with our user-friendly interface.",
    },
  ];

  return (
    <Section>
      <SectionTitle>Common Questions</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <Accordion>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AccordionItem 
                trigger={faq.question}
                className="px-6"
              >
                {faq.answer}
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, a form solution that's both powerful and truly free. Game changer!",
      author: "Sarah Chen",
      role: "Frontend Developer"
    },
    {
      quote: "The ability to self-host and customize has made this our go-to form solution.",
      author: "Marcus Rodriguez",
      role: "Tech Lead"
    },
    {
      quote: "Beautiful UI, great documentation, and amazing community support.",
      author: "Jessica Kim",
      role: "Product Manager"
    }
  ];

  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Loved by Developers
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 border border-white/10 p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// CTA Component (continued)
function CTA() {
  return (
    <Section className="bg-purple-900/10">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Badge className="mb-8 bg-purple-500/10 text-purple-400 border border-purple-500/20">
          Get Started Today
        </Badge>
        <h2 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
            Join the Open Source Form Revolution
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Start creating beautiful forms today. No credit card, no commitments.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://my-form-lab-by-vyas-vishal.vercel.app/">
            <Button className="px-8 py-6 text-lg rounded-full">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
            View Documentation
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
              FormLab
            </span>
            <Badge className="bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Open Source
            </Badge>
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FormLab. Open source under Vishal Vyas.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-950/95 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Features />
        <TechnologyStack />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}