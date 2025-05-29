# Domi Health 🏥

> **Healthcare Management System** - Bridging the gap between traditional healthcare and modern technology

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4)](https://tailwindcss.com/)

**Domi Health** is a comprehensive healthcare management platform designed to streamline patient data management and healthcare workflows. Born from 20+ years of physiotherapy experience and a passion for modern web development.

## 🌟 Project Story

This project represents a unique journey from healthcare practice to software development. After over two decades as a physiotherapist, I decided to transition into programming while maintaining my connection to healthcare. Domi Health combines real-world medical experience with modern web technologies to solve actual problems I've encountered in healthcare settings.

## ✨ Features

### Current Features

- **📋 Patient Management**: Add, view, and manage patient records
- **🏥 Admin Dashboard**: Centralized control panel for healthcare administrators
- **📱 Responsive Design**: Seamless experience across all devices
- **🔍 Patient Search**: Quick access to patient information
- **🎨 Modern UI**: Clean, intuitive interface built with healthcare workflows in mind

### Coming Soon

- **📅 Appointment Scheduling**: Integrated calendar system
- **📊 Medical Records**: Comprehensive patient history tracking
- **📈 Analytics Dashboard**: Healthcare metrics and insights
- **🔐 Role-based Access**: Multi-level security for different user types
- **📄 Report Generation**: Automated patient reports and summaries

## 🚀 Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript
- **Styling**: Tailwind CSS for rapid UI development
- **Database**: Supabase (PostgreSQL) for reliable data management
- **Validation**: Zod for type-safe form validation
- **Icons**: Heroicons & Lucide React for consistent iconography
- **Deployment**: Vercel (recommended)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- Supabase account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/domi-health.git
   cd domi-health
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Add your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up the database**

   Run this SQL in your Supabase SQL editor:

   ```sql
   CREATE TABLE patients (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Dashboard routes group
│   │   ├── admin/         # Admin dashboard
│   │   ├── patient/       # Patient management
│   │   └── layout.tsx     # Dashboard layout with sidebar
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable UI components
│   ├── addPatientForm.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── dashboardLayout.tsx
│   ├── inputField.tsx
│   ├── pageHeader.tsx
│   ├── patientList.tsx
│   └── sidebar.tsx
├── lib/                  # Utilities and configurations
│   ├── actions.ts        # Server actions
│   └── supabase.ts       # Database client
└── schemas/              # Validation schemas
    └── patientSchema.ts
```

## 🎯 Usage

### Adding a Patient

1. Navigate to the **Admin Dashboard**
2. Fill in the patient's full name
3. Click **Add Patient**
4. The system will validate and store the patient data

###Viewing Patients

1. Go to the **Patients** section
2. Browse the list of registered patients
3. Click on any patient to view detailed information

###Navigation

- **Home**: Overview and quick access to main features
- **Patients**: Patient list and individual patient pages
- **Admin**: Administrative functions and patient registration

## 🏥 Healthcare Context

This application is designed with real healthcare workflows in mind:

- **HIPAA Awareness**: Built with privacy and security considerations
- **Healthcare Terminology**: Uses industry-standard medical terminology
- **Workflow Optimization**: Streamlines common administrative tasks
- **Scalability**: Designed to grow with healthcare practice needs

## 🚧 Development Status

**Current Phase**: MVP (Minimum Viable Product)

- ✅ Basic patient management
- ✅ Responsive design
- ✅ Database integration
- 🔄 Enhanced patient records (in progress)
- 🔄 Appointment system (planned)

## 🤝 Contributing

This is primarily a portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 Roadmap

- [ ] **Authentication System**: User login and role management
- [ ] **Medical Records**: Comprehensive patient history
- [ ] **Appointment Scheduling**: Calendar integration
- [ ] **Reporting**: Patient reports and analytics
- [ ] **Mobile App**: React Native companion app
- [ ] **Integration**: EMR/EHR system compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍⚕️ About the Developer

** From Physiotherapy to Programming**

After 20+ years as a licensed physiotherapist, I've transitioned into software development with a passion for solving real-world healthcare problems. This project combines my deep understanding of healthcare workflows with modern web development practices.

**Connect with me:**

- LinkedIn: [https://www.linkedin.com/in/ramicosa/]
- Portfolio: [https://ramirocosa.is-a.dev/]
- Email: [ramirocosa@gmail.com]

---
