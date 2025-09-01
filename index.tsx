import React from "react";
import { motion } from "framer-motion";
import {
  Baby,
  School,
  GraduationCap,
  Mail,
  Phone,
  FileText,
  Calendar,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Helper components
const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-muted-foreground max-w-3xl">{subtitle}</p>
        )}
      </div>
      {children}
    </motion.div>
  </section>
);

const Pill = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm mr-2 mb-2">
    {children}
  </span>
);

export default function SpeechbridgeSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          $1
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <a href='#home' className='hover:underline underline-offset-4'>Home</a>
            <a href='#about' className='hover:underline underline-offset-4'>About</a>
            <a href='#services' className='hover:underline underline-offset-4'>Services</a>
            <a href='#families' className='hover:underline underline-offset-4'>Families</a>
            <a href='#schools' className='hover:underline underline-offset-4'>Schools</a>
            <a href='#professionals' className='hover:underline underline-offset-4'>Professionals</a>
            <a href='#dubai' className='hover:underline underline-offset-4'>Dubai</a>
            <a href='#resources' className='hover:underline underline-offset-4'>Resources</a>
            <a href='#contact' className='hover:underline underline-offset-4'>Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild>
              <a href="mailto:hello@speechbridge.co.uk" aria-label="Email Speechbridge">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-background" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Warm, practical speech and language therapy
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Support for families, schools, and fellow therapists. Twenty years of experience with dysphagia, profound and multiple learning difficulties, AAC, and complex needs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge>Babies to young adults</Badge>
                <Badge>Eating and drinking</Badge>
                <Badge>AAC</Badge>
                <Badge>Wheelchair users</Badge>
              </div>
              <div className="mt-8 flex gap-3">
                <Button asChild size="lg">
                  <a href="#services">View services</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact">Check availability</a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523246192378-5694088703b5?q=80&w=1200&auto=format&fit=crop"
                alt="Friendly therapy session with parent and child"
                className="w-full h-80 md:h-96 object-cover rounded-2xl shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three column overview */}
      <Section id="services" title="Three simple paths" subtitle="Choose the route that fits you best and find clear next steps.">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Baby className="h-5 w-5" /> Families
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground">
                Assessment, therapy, and coaching for speech, language, communication, and eating and drinking. Calm, friendly support that fits home life.
              </p>
              <div className="mt-4">
                <Pill>Speech and language</Pill>
                <Pill>Dysphagia</Pill>
                <Pill>AAC</Pill>
              </div>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href="#families" aria-label="Read more about support for families">View details</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <School className="h-5 w-5" /> Schools and nurseries
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground">
                On site clinics, screening, staff training, and AAC support. Practical programmes that fit your timetable and budget.
              </p>
              <div className="mt-4">
                <Pill>In class support</Pill>
                <Pill>Communication friendly settings</Pill>
                <Pill>Coffee mornings</Pill>
              </div>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href="#schools" aria-label="Read more about support for schools">View details</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <GraduationCap className="h-5 w-5" /> Professionals
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground">
                Supervision, interview prep, and mentoring for newly qualified and experienced therapists. Practical, reflective, and supportive.
              </p>
              <div className="mt-4">
                <Pill>NQP support</Pill>
                <Pill>HCPC standards</Pill>
                <Pill>Masters prep</Pill>
              </div>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href="#professionals" aria-label="Read more about support for professionals">View details</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About" subtitle="Twenty years of practice across homes, clinics, and schools.">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <p>
              I am a qualified speech and language therapist with two decades of experience. I work with babies, children, teenagers, and young adults. I specialise in dysphagia and eating and drinking, profound and multiple learning difficulties, wheelchair users, and AAC.
            </p>
            <ul className="space-y-2">
              {[
                "Calm, friendly approach that helps families feel at ease",
                "Clear plans with measurable goals",
                "Close work with schools, teachers, and support staff",
                "Training that builds confidence and practical skills",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1200&auto=format&fit=crop"
              alt="About Speechbridge"
              className="w-full h-64 object-cover rounded-2xl shadow"
            />
          </div>
        </div>
      </Section>

      {/* Families detail */}
      <Section
        id="families"
        title="Families"
        subtitle="Home based and clinic based assessment and therapy."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How I can help</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Speech sound, language, and communication</li>
                <li>Dysphagia, eating and drinking plans, safe swallow strategies</li>
                <li>AAC assessment and set up, parent coaching, device use</li>
                <li>Support for profound and multiple learning difficulties</li>
                <li>Wheelchair user positioning and feeding considerations</li>
              </ul>
              <div className="pt-3">
                <Button asChild>
                  <a href="#contact">Check availability</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publications and handouts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                A few useful guides. Replace the links with your own files.
              </p>
              <div className="space-y-2">
                {[
                  { label: "Mealtime posture checklist (PDF)", href: "#" },
                  { label: "Early communication tips (PDF)", href: "#" },
                  { label: "AAC first steps for families (PDF)", href: "#" },
                ].map((d) => (
                  <a key={d.label} href={d.href} className="flex items-center gap-2 underline">
                    <FileText className="h-4 w-4" /> {d.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Schools detail */}
      <Section
        id="schools"
        title="Schools and nurseries"
        subtitle="Practical programmes that fit your setting."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>What I offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>On site clinics and casework</li>
                <li>Screening, target setting, and outcome tracking</li>
                <li>Staff training and in class coaching</li>
                <li>AAC assessment, device trials, and training</li>
                <li>Parent coffee mornings and workshops</li>
              </ul>
              <div className="pt-3 flex gap-3">
                <Button asChild>
                  <a href="#contact">Request a call</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#resources">View sample agenda</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Example packages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border p-4">
                  <div className="font-medium">Starter clinic</div>
                  <p className="text-sm text-muted-foreground">Half day per week for block based casework and advice.</p>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="font-medium">Training day</div>
                  <p className="text-sm text-muted-foreground">Communication friendly classrooms, AAC basics, and safe mealtimes.</p>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="font-medium">Whole school plan</div>
                  <p className="text-sm text-muted-foreground">Screening, targets, staff CPD, and impact review.</p>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="font-medium">Parent hub</div>
                  <p className="text-sm text-muted-foreground">Coffee mornings and workshop series across the term.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Professionals detail */}
      <Section
        id="professionals"
        title="Professionals"
        subtitle="Support for newly qualified and experienced therapists."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Supervision and mentoring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Structured supervision that aligns with HCPC and RCSLT guidance</li>
                <li>Case discussion and clinical reflection</li>
                <li>Interview prep and Masters application coaching</li>
                <li>Goal setting and CPD planning</li>
              </ul>
              <div className="pt-3 flex gap-3">
                <Button asChild>
                  <a href="#contact">Enquire</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#resources">Download supervision outline</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How sessions work</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Online or in person, clear notes and outcomes after each session</li>
                <li>Confidential, supportive space with practical next steps</li>
                <li>Flexible blocks or ad hoc sessions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Dubai */}
      <Section
        id="dubai"
        title="Dubai"
        subtitle="Support for families and clinics in the UAE."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>How I can help in Dubai</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Assessment and therapy for speech, language, and communication</li>
                <li>Eating and drinking assessment with clear mealtime plans</li>
                <li>AAC assessment, set up, and parent or staff coaching</li>
                <li>Short intensive blocks during planned Dubai visits</li>
                <li>Online follow up between visits</li>
              </ul>
              <div className="pt-3">
                <Button asChild>
                  <a href="#contact">Request Dubai availability</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Working with clinics and schools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Partnerships with clinics and schools for casework and screening</li>
                <li>Staff training on safe feeding, communication friendly settings, and AAC</li>
                <li>Plain English reports for families, schools, and medical teams</li>
                <li>Secure online sessions where appropriate</li>
              </ul>
              <div className="pt-3 flex gap-3">
                <Button asChild>
                  <a href="mailto:hello@speechbridge.co.uk?subject=Dubai%20enquiry">Email about Dubai</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#">Join the Dubai list</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Dubai */}
      

      {/* Resources */}
      <Section id='resources' title="Resources" subtitle="Quick links to helpful documents and templates.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Communication friendly classroom checklist (PDF)", href: "#" },
            { label: "Safe swallow plan example (PDF)", href: "#" },
            { label: "Supervision agreement template (DOCX)", href: "#" },
          ].map((r) => (
            <a key={r.label} href={r.href} className="rounded-2xl border p-4 flex items-center gap-3 hover:bg-muted/40">
              <FileText className="h-5 w-5" />
              <div>
                <div className="font-medium">{r.label}</div>
                <div className="text-xs text-muted-foreground">Replace with your file</div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="Testimonials" subtitle="Shared with permission. Names can be added once confirmed.">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Our child felt comfortable right away. We saw clear progress and felt supported at every step.",
              role: "Parent of 6 year old",
            },
            {
              quote:
                "The training was practical and easy to put in place. Staff confidence improved across the term.",
              role: "SENCo, primary school",
            },
            {
              quote:
                "Supportive supervision with concrete actions after each session. Very helpful for interview prep.",
              role: "Newly qualified therapist",
            },
          ].map((t) => (
            <Card key={t.quote}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="italic">“{t.quote}”</p>
                <div className="mt-3 text-sm text-muted-foreground">{t.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Email is the fastest way to check current availability.">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Send a short note with your name, your setting, and a brief summary of what you need. I will reply with available times and next steps.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="mailto:hello@speechbridge.co.uk?subject=Enquiry%20from%20Speechbridge%20website">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#" title="Add your booking link here">
                    <Calendar className="mr-2 h-4 w-4" /> Book a call
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <a href="tel:+44XXXXXXXXXX" title="Replace with your phone number">
                    <Phone className="mr-2 h-4 w-4" /> Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>Based in the UK, working with local and online clients</div>
              <div>Fully qualified and registered</div>
              <div>Enhanced DBS, safeguarding training, insurance</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="font-medium text-foreground">Speechbridge</div>
              <div>© 2025 Speechbridge. All rights reserved.</div>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="hover:underline">About</a>
              <a href="#resources" className="hover:underline">Resources</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-4 right-4">
        <Button asChild size="lg" className="shadow-lg">
          <a href="mailto:hello@speechbridge.co.uk?subject=Enquiry%20from%20Speechbridge%20website">
            <Mail className="mr-2 h-4 w-4" /> Email now
          </a>
        </Button>
      </div>
    </div>
  );
}
