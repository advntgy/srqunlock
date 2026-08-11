# Unlock SRQ - Locksmith Website

A modern, responsive Next.js website for Unlock SRQ LLC, a 24/7 emergency locksmith service in North Port, FL serving Sarasota and Charlotte Counties.

## Features

- 🎨 **Modern Dark Theme** - Professional design with a sleek dark color scheme
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal loading speeds
- 🔍 **SEO Optimized** - Configured for local search visibility
- 📞 **Click-to-Call** - Easy phone access for emergency services

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: React

## Sections

1. **Header** - Navigation with mobile menu and call-to-action
2. **Hero** - Main landing section with emergency contact
3. **Services** - Automotive, Residential, Commercial, Emergency Response
4. **About** - Company information and trust indicators (NASTF Certified, Licensed & Insured)
5. **Service Areas** - Coverage area with response times for North Port, Port Charlotte, Venice, etc.
6. **Testimonials** - Customer reviews
7. **Contact** - Contact form and business info
8. **Footer** - Links, owner info, and company details

## Business Information

- **Phone**: (941) 587-5050
- **Email**: info@srqunlock.com
- **Location**: North Port, FL 34291
- **Owner**: Maksim Yepikhin
- **Hours**: 24/7/365 Emergency Service
- **Service Areas**: Sarasota County & Charlotte County

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

The development server runs at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles and Tailwind
│   ├── layout.tsx     # Root layout with metadata
│   └── page.tsx       # Homepage
├── components/
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services grid
│   ├── About.tsx      # About section
│   ├── ServiceAreas.tsx # Service areas
│   ├── Testimonials.tsx # Customer reviews
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Site footer
```

## Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Update component files in `src/components/`
- **SEO**: Modify metadata in `src/app/layout.tsx`

## License

© 2025 SRQ Unlock. All rights reserved.
