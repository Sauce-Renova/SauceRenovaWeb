export const tramitesCopy = {
  es: {
    hero: {
      titleLine1: "Trámites y",
      titleLine2: "Legalizaciones",
      intro: "Nos encargamos de toda la burocracia para que tú solo tengas que disfrutar del ahorro. Gestionamos permisos y legalizaciones en toda España.",
      btnInformacion: "Solicitar información",
    },
    tramites: {
      heading: "Qué Gestionamos",
      items: [
        {
          titulo: "Permiso de Obra",
          descripcion: "Gestionamos el permiso de obra necesario para tu sistema fotovoltaico, cumpliendo con todas las regulaciones locales.",
        },
        {
          titulo: "Legalización (Boletín)",
          descripcion: "Tramitamos la legalización técnica de la instalación fotovoltaica ante Industria de forma rápida y sin complicaciones.",
        },
        {
          titulo: "IBI",
          descripcion: "Tramitamos la deducción del IBI según el ayuntamiento correspondiente. En comunidades de propietarios el precio es por participante.",
        },
        {
          titulo: "Punto de Acceso y Conexión",
          descripcion: "Gestionamos el permiso de acceso y conexión con la distribuidora para que puedas inyectar el exceso de energía a la red eléctrica.",
        },
        {
          titulo: "Certificación Energética",
          descripcion: "Evaluamos y certificamos la eficiencia energética de tu vivienda, otorgándole una calificación de la A a la G.",
        },
      ],
    },
    precios: {
      heading: "Tarifas",
      items: [
        { rango: "Hasta 10 kW", precio: "950€", incluye: ["Permiso de Obra", "Boletín CIE", "IBI", "Punto de acceso y conexión", "Visita técnica"] },
        { rango: "10 - 25 kW", precio: "1.600€", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "IBI", "Punto de acceso y conexión", "Visitas de obra", "OCA"] },
        { rango: "25 - 50 kW", precio: "2.200€", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "IBI", "Punto de acceso y conexión", "Visitas de obra", "OCA"] },
        { rango: "50 - 75 kW", precio: "2.400€", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "IBI", "Punto de acceso y conexión", "Visita dirección de obra", "Visita final de obra", "OCA"] },
        { rango: "75 - 100 kW", precio: "2.650€", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "IBI", "Punto de acceso y conexión", "Visita dirección de obra", "Visita final de obra", "OCA"] },
        { rango: "+100 kW", precio: "2,5% presupuesto", incluye: ["Proyecto", "Permiso de Obra", "Boletín CIE", "IBI", "Punto de acceso y conexión", "Visitas de obra", "OCA"] },
      ],
    },
    ctaBanner: "¿Necesitas gestionar tus trámites?",
  },
  en: {
    hero: {
      titleLine1: "Permits &",
      titleLine2: "Legalization",
      intro: "We handle all the paperwork so you only have to enjoy the savings. We manage permits and legal procedures across Spain.",
      btnInformacion: "Request information",
    },
    tramites: {
      heading: "What We Manage",
      items: [
        {
          titulo: "Building Permit",
          descripcion: "We handle the required building permit for your photovoltaic system, in full compliance with local regulations.",
        },
        {
          titulo: "Legalization (CIE Certificate)",
          descripcion: "We process technical legalization of the photovoltaic installation with the Ministry of Industry quickly and hassle-free.",
        },
        {
          titulo: "Property Tax (IBI) Rebate",
          descripcion: "We process IBI tax reductions according to local city hall guidelines. In homeowners' associations, pricing is per participant.",
        },
        {
          titulo: "Grid Access & Connection Point",
          descripcion: "We manage access and connection permits with the grid distributor so you can feed surplus energy into the power grid.",
        },
        {
          titulo: "Energy Performance Certification",
          descripcion: "We evaluate and certify your home's energy efficiency, assigning a rating from A to G.",
        },
      ],
    },
    precios: {
      heading: "Rates & Pricing",
      items: [
        { rango: "Up to 10 kW", precio: "€995", incluye: ["Building Permit", "CIE Certificate", "Property Tax (IBI)", "Grid Access & Connection", "Technical Visit"] },
        { rango: "10 - 25 kW", precio: "€1,600", incluye: ["Technical Project", "Building Permit", "CIE Certificate", "Property Tax (IBI)", "Grid Access & Connection", "Site Visits"] },
        { rango: "25 - 50 kW", precio: "€2,200", incluye: ["Technical Project", "Building Permit", "CIE Certificate", "Property Tax (IBI)", "Grid Access & Connection", "Site Visits", "OCA Inspection"] },
        { rango: "50 - 75 kW", precio: "€2,400", incluye: ["Technical Project", "Building Permit", "CIE Certificate", "Property Tax (IBI)", "Grid Access & Connection", "Construction Management Visit", "Final Site Inspection", "OCA Inspection"] },
        { rango: "75 - 100 kW", precio: "€2,650", incluye: ["Technical Project", "Building Permit", "CIE Certificate", "Property Tax (IBI)", "Grid Access & Connection", "Construction Management Visit", "Final Site Inspection", "OCA Inspection"] },
        { rango: "+100 kW", precio: "2.5% of budget", incluye: ["Technical Project", "Building Permit", "CIE Certificate", "Property Tax (IBI)", "Grid Access & Connection", "Site Visits", "OCA Inspection"] },
      ],
    },
    ctaBanner: "Need help managing your legal permits?",
  },
} as const;