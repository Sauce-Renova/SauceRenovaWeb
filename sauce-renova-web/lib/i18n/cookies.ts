// TODO(contenido): plantilla genérica, revisar con asesoría legal antes de publicar
export const cookiesCopy = {
  es: {
    title: "Política de cookies",
    intro: "Esta política explica qué información almacena este sitio web en tu dispositivo y para qué.",
    updated: "14 de octubre de 2026",
    sections: [
      {
        titulo: "Qué son las cookies",
        parrafos: [
          "Las cookies y tecnologías similares son pequeños archivos o datos que un sitio web guarda en tu navegador para recordar información sobre tu visita.",
        ],
      },
      {
        titulo: "Qué almacena este sitio web",
        // TODO(contenido): revisar si se añade analítica, mapas, vídeos u otros servicios de terceros
        parrafos: [
          "Este sitio web no utiliza cookies propias ni de terceros. Solo guarda en el almacenamiento local de tu navegador dos preferencias que tú eliges: el tema claro u oscuro (clave «theme») y el idioma (clave «lang»).",
          "Estos datos se quedan en tu dispositivo, no se envían a nuestros servidores, no te identifican y sirven únicamente para recordar tu elección en la siguiente visita.",
        ],
      },
      {
        titulo: "Cookies de terceros",
        parrafos: [
          "Actualmente no empleamos cookies analíticas, publicitarias ni de redes sociales. Si esto cambia, actualizaremos esta política y, cuando sea necesario, solicitaremos tu consentimiento.",
        ],
      },
      {
        titulo: "Cómo borrar o bloquear estos datos",
        parrafos: [
          "Puedes eliminar los datos guardados desde la configuración de tu navegador, en el apartado de privacidad o datos de sitios. Si los borras, el sitio volverá al tema y al idioma por defecto.",
        ],
      },
      {
        titulo: "Cambios en esta política",
        parrafos: [
          "Podemos modificar esta política si cambia el funcionamiento del sitio web. La fecha de la última actualización figura al principio de esta página.",
        ],
      },
    ],
  },
  en: {
    title: "Cookie policy",
    intro: "This policy explains what information this website stores on your device and why.",
    updated: "14 October 2026",
    sections: [
      {
        titulo: "What cookies are",
        parrafos: [
          "Cookies and similar technologies are small files or pieces of data that a website saves in your browser to remember information about your visit.",
        ],
      },
      {
        titulo: "What this website stores",
        // TODO(contenido): revisar si se añade analítica, mapas, vídeos u otros servicios de terceros
        parrafos: [
          "This website does not use its own or third-party cookies. It only saves two preferences that you choose in your browser's local storage: the light or dark theme (key \"theme\") and the language (key \"lang\").",
          "This data stays on your device, is not sent to our servers, does not identify you, and is used only to remember your choice on your next visit.",
        ],
      },
      {
        titulo: "Third-party cookies",
        parrafos: [
          "We currently do not use analytics, advertising or social media cookies. If this changes, we will update this policy and, where necessary, ask for your consent.",
        ],
      },
      {
        titulo: "How to delete or block this data",
        parrafos: [
          "You can delete the stored data from your browser settings, in the privacy or site data section. If you delete it, the site will return to the default theme and language.",
        ],
      },
      {
        titulo: "Changes to this policy",
        parrafos: [
          "We may modify this policy if the way the website works changes. The date of the last update is shown at the top of this page.",
        ],
      },
    ],
  },
} as const;