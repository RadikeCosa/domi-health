# Domi Health 🏥

> **Healthcare Management System**
> Bridging the gap between traditional healthcare and modern technology

**Domi Health** es una plataforma integral de gestión sanitaria diseñada para optimizar la administración de pacientes y los flujos de trabajo en salud. Nace de más de 20 años de experiencia en kinesiología y una pasión por el desarrollo web moderno.

---

## 🌟 Historia del Proyecto

Este proyecto representa una transición única: de la práctica clínica a la programación. Tras más de dos décadas como kinesiólogo, decidí reinventarme como programador sin perder el vínculo con la salud. Domi Health une experiencia real en el ámbito médico con tecnologías web de vanguardia para resolver problemas cotidianos en centros de salud.

---

## ✨ Funcionalidades

### Funcionalidades Actuales

- **📋 Gestión de Pacientes**: Alta, visualización y manejo de fichas.
- **🏥 Panel de Administración**: Control centralizado para administradores.
- **📱 Diseño Responsivo**: Experiencia fluida en cualquier dispositivo.
- **🔍 Búsqueda de Pacientes**: Acceso rápido a la información.
- **🎨 Interfaz Moderna**: UI intuitiva pensada para flujos de trabajo en salud.

### Próximamente

- **📅 Turnos y Agenda**: Calendario integrado.
- **📊 Historia Clínica**: Seguimiento completo de pacientes.
- **📈 Analíticas**: Métricas e insights de gestión.
- **🔐 Accesos por Rol**: Seguridad multinivel.
- **📄 Reportes**: Generación automática de informes.

---

## 🚀 Stack Tecnológico

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: Supabase (PostgreSQL)
- **Validación**: Zod
- **Íconos**: Heroicons \& Lucide React
- **Deploy**: Vercel (recomendado)

---

## 🛠️ Primeros Pasos

### Requisitos

- Node.js 18.17 o superior
- npm, yarn, pnpm o bun
- Cuenta en Supabase

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/yourusername/domi-health.git
cd domi-health
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**

```bash
cp .env.local.example .env.local
```

Agrega tus credenciales de Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Configurar la base de datos**

Ejecuta este SQL en el editor de Supabase:

```sql
CREATE TABLE patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

5. **Levantar el servidor de desarrollo**

```bash
npm run dev
```

6. **Abre [http://localhost:3000](http://localhost:3000) en tu navegador**

---

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # Rutas de dashboard
│   │   ├── admin/          # Panel de administración
│   │   ├── patient/        # Gestión de pacientes
│   │   └── layout.tsx      # Layout con sidebar
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout raíz
│   └── page.tsx            # Home
├── components/             # Componentes reutilizables
│   ├── addPatientForm.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── dashboardLayout.tsx
│   ├── inputField.tsx
│   ├── pageHeader.tsx
│   ├── patientList.tsx
│   └── sidebar.tsx
├── lib/                    # Utilidades y config
│   ├── actions.ts
│   └── supabase.ts
└── schemas/
    └── patientSchema.ts
```

---

## 🎯 Uso

### Agregar un Paciente

1. Ve al **Panel de Administración**
2. Completa el nombre completo del paciente
3. Haz clic en **Agregar Paciente**
4. El sistema validará y guardará los datos

### Ver Pacientes

1. Ingresa a la sección **Pacientes**
2. Explora la lista de pacientes registrados
3. Haz clic en un paciente para ver su detalle

### Navegación

- **Inicio**: Resumen y accesos rápidos
- **Pacientes**: Listado y fichas individuales
- **Admin**: Funciones administrativas y registro

---

## 🏥 Contexto Sanitario

- **Conciencia HIPAA**: Privacidad y seguridad como prioridad
- **Terminología Médica**: Uso de términos estándar
- **Optimización de Flujos**: Agiliza tareas administrativas
- **Escalabilidad**: Crece junto a tu práctica

---

## 🚧 Estado de Desarrollo

**Fase actual:** MVP (Producto Mínimo Viable)

- ✅ Gestión básica de pacientes
- ✅ Diseño responsivo
- ✅ Integración con base de datos
- 🔄 Historia clínica ampliada (en desarrollo)
- 🔄 Sistema de turnos (planificado)

---

## 🤝 Contribuciones

¡Proyecto de portfolio abierto a sugerencias!

1. Haz fork del repo
2. Crea una rama (`git checkout -b feature/NuevaFuncionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agrega NuevaFuncionalidad'`)
4. Sube la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

---

## 📈 Roadmap

- [ ] **Autenticación**: Login y gestión de roles
- [ ] **Historia Clínica**: Seguimiento completo
- [ ] **Turnos**: Agenda y recordatorios
- [ ] **Reportes**: Informes y analíticas
- [ ] **App móvil**: Companion React Native
- [ ] **Integraciones**: Compatibilidad EMR/EHR

---

## 📄 Licencia

Licencia MIT – ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍⚕️ Sobre el Desarrollador

**De la Kinesiología a la Programación**

Tras más de 20 años como kinesiólogo, me reinventé como desarrollador de software con pasión por resolver problemas reales en salud. Este proyecto fusiona mi experiencia clínica con las mejores prácticas del desarrollo web.

**Conectá conmigo:**

- [LinkedIn](https://www.linkedin.com/in/ramicosa/)
- [Portfolio](https://ramirocosa.is-a.dev/)
- [Email](mailto:ramirocosa@gmail.com)

---
