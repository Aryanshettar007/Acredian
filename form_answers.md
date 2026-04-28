# Assignment Form Answers

Here are the precise answers you can copy and paste into your submission form:

---

**Which AI tools did you use?**
☑ Antigravity

**Where did AI help you the most?**
Antigravity helped the most in rapidly translating the provided design screenshots into complex, fully responsive Tailwind CSS layouts (like the 'Domain Expertise' 7-card grid and the 'Accredian Edge' timeline). It was also extremely helpful in generating custom, high-fidelity SVG paths to match the specific icons in the reference, saving me hours of searching for icon libraries.

**What did you modify or improve manually (beyond AI output)?**
I actively guided the AI through the component architecture to ensure maximum reusability (e.g., creating the `SectionWrapper` component). I manually uploaded, managed, and specified the exact local `.png` and `.jpeg` assets from the design team, feeding them to the AI to ensure accurate implementation. I also iteratively reviewed the AI's Tailwind output, manually tweaking arbitrary values (like specific padding, drop-shadows, and hex colors) to perfectly match the enterprise feel of the reference site.

**Did you face any incorrect AI-generated code? How did you handle it?**
Yes, the AI occasionally struggled with perfectly calculating the responsive breakpoints for complex horizontal layouts (like the 7-card grid wrapping). I handled this by prompting the AI specifically to use standard Flexbox with precise `calc()` widths or CSS Grid, and I provided immediate visual feedback (e.g., "The blue edge bars are rounded on the wrong side, make them flat on the outside") until it generated the correct CSS properties.

**Explain your component structure and approach**
I leveraged Next.js 14+ App Router to build a modern, component-driven architecture. The landing page (`app/page.tsx`) acts as the central hub, composing isolated, highly modular functional components (`HeroSection.tsx`, `FAQSection.tsx`, `Testimonials.tsx`, etc.). To ensure consistent UI and reduce boilerplate, I created a `SectionWrapper.tsx` component that handles standard padding, backgrounds, and `max-w` constraints. I prioritized Tailwind CSS for styling to keep styles scoped locally and responsive, and utilized React `useState` hooks for interactive elements like the FAQ accordion and the lead capture form. 

**If given 1 more day, what improvements would you make?**
1. Backend Database Integration: I would connect the API routes to a PostgreSQL database (using Prisma ORM) to securely store lead capture submissions rather than just simulating the API response.
2. Content Management System (CMS): I would integrate Sanity or Strapi so the Accredian team could dynamically edit FAQs, Testimonials, and Domain Expertise cards without touching the source code.
3. Scroll Animations: I would implement Framer Motion for highly polished, scroll-triggered reveal animations as the user navigates down the landing page.

**What challenges did you face during this assignment?**
The biggest challenge was achieving pixel-perfect fidelity and layout structures based purely on screenshots without access to the original Figma file or CSS variables. Recreating the specific SVGs and engineering the complex horizontal components (like the alternating "Accredian Edge" timeline and the "How We Deliver Results" edge bars) required extensive experimentation with Tailwind's arbitrary values and CSS absolute positioning.

**Did you implement any of the following?**
☑ Lead capture form
☑ API integration
☑ SEO improvements
☑ Animations / advanced UI

**If yes, briefly explain**
- **Lead Capture Form & API Integration**: I transformed the bottom "Contact Us" CTA banner into a functional React form with loading/success states. When submitted, it hits a custom Next.js API route (`app/api/contact/route.ts`) which validates the data and simulates a secure backend submission.
- **SEO Improvements**: I updated the Next.js `layout.tsx` metadata with specific titles, descriptions, and keywords optimized for enterprise training and workforce upskilling search terms.
- **Animations / Advanced UI**: I utilized CSS transitions and Tailwind's `group-hover` utilities to build interactive hover states (e.g., expanding blue edge bars and scaling icons in the "How It Works" section) and a fully interactive, smooth-animating FAQ accordion.

**I confirm that this is my own work and I understand the code I submitted**
☑ Yes
