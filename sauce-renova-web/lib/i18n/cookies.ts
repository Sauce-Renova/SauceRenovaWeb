// TODO(contenido): plantilla genérica, revisar con asesoría legal antes de publicar
export const cookiesCopy = {
  es: {
    title: "Política de cookies",
    intro: "Esta política explica qué información almacena este sitio web en tu dispositivo y para qué.",
    updated: "21 de octubre de 2026",
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
          "Este sitio web solo guarda dos preferencias que tú eliges: el tema claro u oscuro y el idioma.",
          "El tema se guarda en el almacenamiento local de tu navegador (clave «theme») y no se envía a nuestros servidores.",
          "El idioma se guarda en una cookie propia llamada «lang», con una duración de un año. Se envía a nuestro servidor para mostrarte la página en tu idioma desde la primera carga. No contiene datos personales ni te identifica.",
          "Ambas son preferencias de personalización que solicitas tú al cambiar el tema o el idioma, y sirven únicamente para recordar tu elección en la siguiente visita.",
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
          "Puedes eliminar la cookie y los datos guardados desde la configuración de tu navegador, en el apartado de privacidad o datos de sitios. Si los borras, el sitio volverá al tema y al idioma por defecto.",
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
    updated: "21 October 2026",
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
          "This website only saves two preferences that you choose: the light or dark theme and the language.",
          "The theme is saved in your browser's local storage (key \"theme\") and is not sent to our servers.",
          "The language is saved in a first-party cookie called \"lang\", which lasts one year. It is sent to our server so the page can be shown in your language from the first load. It contains no personal data and does not identify you.",
          "Both are personalisation preferences that you request when you change the theme or the language, and they are used only to remember your choice on your next visit.",
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
          "You can delete the cookie and the stored data from your browser settings, in the privacy or site data section. If you delete them, the site will return to the default theme and language.",
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