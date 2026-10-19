// TODO(contenido): plantilla genérica, revisar con asesoría legal antes de publicar
export const privacidadCopy = {
  es: {
    title: "Política de privacidad",
    intro: "Esta política explica cómo trata Sauce Renova los datos personales de las personas que visitan este sitio web o se ponen en contacto con nosotros, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).",
    updated: "14 de octubre de 2026",
    sections: [
      {
        titulo: "Responsable del tratamiento",
        // TODO(contenido): completar razón social, CIF y domicilio
        parrafos: [
          "Responsable: [PENDIENTE: razón social]",
          "CIF: [PENDIENTE: CIF]",
          "Domicilio: [PENDIENTE: dirección completa]",
          "Correo electrónico de contacto: comercial@saucerenova.com",
          "Teléfono: 613 115 981",
        ],
      },
      {
        titulo: "Datos que tratamos",
        // TODO(contenido): revisar si se reactiva el envío por Resend (/api/contact) o se añade analítica
        parrafos: [
          "Este sitio web no almacena en sus servidores los datos que introduces en el cuestionario de contacto: el cuestionario prepara un correo electrónico en tu propio programa de correo, y eres tú quien decide enviarlo.",
          "Si nos escribes o nos llamas, tratamos los datos que nos facilites voluntariamente: nombre, teléfono, correo electrónico y la información sobre tu vivienda o instalación que decidas compartir.",
        ],
      },
      {
        titulo: "Finalidad",
        parrafos: [
          "Atender tus consultas, preparar presupuestos y, en su caso, gestionar la prestación de los servicios que nos solicites.",
        ],
      },
      {
        titulo: "Base jurídica",
        parrafos: [
          "La base jurídica es tu consentimiento al contactar con nosotros y la aplicación de medidas precontractuales a petición tuya. Si llegamos a contratar, la base será la ejecución del contrato.",
        ],
      },
      {
        titulo: "Plazo de conservación",
        // TODO(contenido): fijar los plazos reales
        parrafos: [
          "Conservaremos tus datos durante el tiempo necesario para atender tu solicitud y, después, durante los plazos legales aplicables. [PENDIENTE: plazos concretos]",
        ],
      },
      {
        titulo: "Destinatarios",
        // TODO(contenido): listar proveedores reales con acceso a datos (correo, hosting, gestoría)
        parrafos: [
          "No cedemos tus datos a terceros salvo obligación legal. Pueden acceder a ellos proveedores que nos prestan servicios necesarios para la actividad, con los que se firman los contratos de encargo de tratamiento exigidos. [PENDIENTE: listado de proveedores]",
        ],
      },
      {
        titulo: "Tus derechos",
        parrafos: [
          "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a comercial@saucerenova.com e indicando el derecho que quieres ejercer.",
          "Si consideras que tus datos no se tratan correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
      {
        titulo: "Seguridad",
        parrafos: [
          "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.",
        ],
      },
      {
        titulo: "Cambios en esta política",
        parrafos: [
          "Podemos actualizar esta política para adaptarla a cambios legales o del sitio web. La fecha de la última actualización figura al principio de esta página.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    intro: "This policy explains how Sauce Renova processes the personal data of people who visit this website or contact us, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018.",
    updated: "14 October 2026",
    sections: [
      {
        titulo: "Data controller",
        // TODO(contenido): completar razón social, CIF y domicilio
        parrafos: [
          "Controller: [PENDING: company name]",
          "Tax ID (CIF): [PENDING: tax ID]",
          "Address: [PENDING: full address]",
          "Contact email: comercial@saucerenova.com",
          "Phone: 613 115 981",
        ],
      },
      {
        titulo: "Data we process",
        // TODO(contenido): revisar si se reactiva el envío por Resend (/api/contact) o se añade analítica
        parrafos: [
          "This website does not store on its servers the data you enter in the contact questionnaire: the questionnaire prepares an email in your own email program, and you decide whether to send it.",
          "If you write to us or call us, we process the data you voluntarily provide: name, phone number, email address and any information about your home or installation that you choose to share.",
        ],
      },
      {
        titulo: "Purpose",
        parrafos: [
          "To answer your enquiries, prepare quotes and, where applicable, manage the services you request from us.",
        ],
      },
      {
        titulo: "Legal basis",
        parrafos: [
          "The legal basis is your consent when contacting us and the application of pre-contractual measures at your request. If we enter into a contract, the basis will be the performance of that contract.",
        ],
      },
      {
        titulo: "Retention period",
        // TODO(contenido): fijar los plazos reales
        parrafos: [
          "We will keep your data for as long as necessary to handle your request and, afterwards, for the applicable legal periods. [PENDING: specific periods]",
        ],
      },
      {
        titulo: "Recipients",
        // TODO(contenido): listar proveedores reales con acceso a datos (correo, hosting, gestoría)
        parrafos: [
          "We do not share your data with third parties except where legally required. Service providers necessary for our activity may access it, under the data processing agreements required by law. [PENDING: list of providers]",
        ],
      },
      {
        titulo: "Your rights",
        parrafos: [
          "You can exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to comercial@saucerenova.com and stating the right you wish to exercise.",
          "If you believe your data is not being processed properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
      {
        titulo: "Security",
        parrafos: [
          "We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss or alteration.",
        ],
      },
      {
        titulo: "Changes to this policy",
        parrafos: [
          "We may update this policy to reflect legal or website changes. The date of the last update is shown at the top of this page.",
        ],
      },
    ],
  },
} as const;