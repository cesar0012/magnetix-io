export const dictionaries = {
  es: {
    // App nav
    "nav.inbox": "Bandeja",
    "nav.pipeline": "Pipeline",
    "nav.contacts": "Contactos",
    "nav.agent": "Agente",
    "nav.lab": "Laboratorio",
    "nav.settings": "Ajustes",
    "nav.crm whatsapp": "CRM · WhatsApp",
    "nav.owner": "Propietario",
    "nav.team": "Equipo",
    "nav.online": "En línea",
    "nav.signout": "Cerrar sesión",

    // Settings nav
    "settings.whatsapp": "WhatsApp",
    "settings.branding": "Marca",
    "settings.templates": "Plantillas",
    "settings.team": "Equipo",
    "settings.title": "Configuración",

    // Auth layout
    "auth.subtitle": "CRM de WhatsApp con agente de IA",

    // Login
    "login.title": "Iniciar sesión",
    "login.email": "Correo",
    "login.password": "Contraseña",
    "login.rate limit": "Demasiados intentos. Espera unos minutos.",
    "login.invalid": "Correo o contraseña incorrectos.",
    "login.submitting": "Entrando…",
    "login.submit": "Entrar",
    "login.first time": "¿Primera vez aquí?",
    "login.create account": "Crear la cuenta inicial",

    // Register
    "register.title": "Crear cuenta",
    "register.description":
      "El primer registro crea la organización de esta instancia y queda como propietario.",
    "register.name": "Tu nombre",
    "register.email": "Correo",
    "register.password": "Contraseña",
    "register.closed":
      "El registro está cerrado: esta instancia ya tiene su organización. Pide acceso al propietario.",
    "register.rate limit": "Demasiados intentos. Espera unos minutos.",
    "register.failed": "No se pudo crear la cuenta.",
    "register.submitting": "Creando…",
    "register.submit": "Crear cuenta",
    "register.has account": "¿Ya tienes cuenta?",
    "register.signin": "Inicia sesión",

    // Conversation list
    "conv.empty title": "Sin conversaciones todavía",
    "conv.empty desc":
      "Cuando alguien escriba a tu número de WhatsApp, su conversación aparecerá aquí en tiempo real.",
    "conv.demo loading": "Cargando demo…",
    "conv.demo button": "Cargar datos de demostración",
    "conv.title": "Bandeja",
    "conv.search": "Buscar conversación…",
    "conv.all": "Todas",
    "conv.unread": "No leídas",
    "conv.loading": "Cargando…",
    "conv.no results": "Sin resultados para este filtro.",
    "conv.human handoff": "Atención humana",

    // Contact panel
    "panel.details": "Detalles",
    "panel.hide": "Ocultar panel",
    "panel.handoff.client": "El cliente pidió un humano",
    "panel.handoff.model": "El agente decidió escalar",
    "panel.handoff.error": "Error del proveedor de IA",
    "panel.handoff.window": "Ventana de 24h cerrada",
    "panel.handoff paused": "La IA está en pausa en esta conversación.",
    "panel.reactivate ai": "Reactivar IA",
    "panel.ai in conv": "IA en esta conversación",
    "panel.ai not ready": "Agente sin activar",
    "panel.ai paused human": "En pausa · atención humana",
    "panel.ai responding": "Respondiendo",
    "panel.ai paused": "En pausa",
    "panel.ai configure hint":
      "La IA todavía no responde por su cuenta. Configura lo básico del agente y enciéndelo.",
    "panel.ai missing key":
      "Falta la clave de IA de la instancia (OPENROUTER_API_TOKEN) para que el agente pueda responder.",
    "panel.configure agent": "Configurar agente →",
    "panel.stage": "Etapa del pipeline",
    "panel.move to": "Mover a",
    "panel.notes": "Notas",
    "panel.notes placeholder": "Notas internas sobre este contacto…",
    "panel.saving": "Guardando…",
    "panel.save notes": "Guardar notas",

    // Template sender
    "tpl.loading": "Cargando plantillas…",
    "tpl.empty": "Aún no hay plantillas aprobadas. Créalas en",
    "tpl.empty link": "Configuración → Plantillas",
    "tpl.empty wait": "y espera la aprobación de Meta.",
    "tpl.send error": "No se pudo enviar la plantilla",
    "tpl.label": "Plantilla aprobada",
    "tpl.choose": "Elige una plantilla…",
    "tpl.variable": "Valor de la variable {{1}}",
    "tpl.variable placeholder": "p. ej. el nombre del cliente",
    "tpl.sending": "Enviando…",
    "tpl.send": "Enviar plantilla",

    // Composer
    "composer.window closed": "La ventana de 24 horas está cerrada.",
    "composer.window closed desc":
      "WhatsApp solo permite texto libre dentro de las 24 horas siguientes al último mensaje del cliente. Para retomar la conversación, envía una plantilla aprobada.",
    "composer.placeholder": "Escribe una respuesta…",
    "composer.send": "Enviar",
    "composer.window open": "Ventana abierta · quedan",

    // Inbox client
    "inbox.no conv selected": "Sin conversación seleccionada",
    "inbox.no server": "Sin conexión con el servidor",
    "inbox.send error": "No se pudo enviar el mensaje",
    "inbox.show details": "Mostrar detalles",
    "inbox.window open short": "ventana abierta",
    "inbox.pick conv": "Elige una conversación para ver el hilo",

    // Message thread
    "thread.today": "Hoy",
    "thread.yesterday": "Ayer",
    "thread.ai tooltip": "Respuesta generada por IA",
    "thread.ai badge": "IA",

    // Media labels
    "media.image": "Imagen",
    "media.audio": "Audio",
    "media.video": "Video",
    "media.document": "Documento",
    "media.sticker": "Sticker",
    "media.location": "Ubicación",
    "media.contacts": "Contacto compartido",
    "media.template": "Plantilla",
    "media.unknown": "Contenido",

    // Contacts
    "contacts.title": "Contactos",
    "contacts.show archived": "Ver archivados",
    "contacts.search": "Buscar por nombre o teléfono…",
    "contacts.empty title": "Sin contactos",
    "contacts.empty desc":
      "Cada persona que escriba a tu WhatsApp quedará registrada aquí automáticamente.",
    "contacts.archived": "Archivado",
    "contacts.edit": "Editar",
    "contacts.open conv": "Abrir conversación",
    "contacts.unarchive": "Desarchivar",
    "contacts.archive": "Archivar",
    "contacts.edit title": "Editar contacto",
    "contacts.name": "Nombre",
    "contacts.notes": "Notas",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.loading": "Cargando…",
    "common.saving": "Guardando…",

    // Lab
    "lab.type hallucination": "Alucinación",
    "lab.type out of kb": "Fuera del conocimiento",
    "lab.type should escalate": "Debió escalar",
    "lab.type tone": "Tono",
    "lab.configure ai": "Configura tu proveedor de IA para usar el Laboratorio",
    "lab.needs agent":
      "El Laboratorio necesita el agente activo: agrega OPENROUTER_API_TOKEN a la instancia y vuelve aquí.",
    "lab.evaluating": "Evaluando personas…",
    "lab.first run":
      "Corre tu primera evaluación: 6 clientes simulados conversarán con tu agente y un juez calificará cada conversación.",
    "lab.choose run": "Elige una corrida del historial.",
    "lab.title": "Laboratorio",
    "lab.sandbox": "Sandbox interno — no envía mensajes reales",
    "lab.running": "Corrida en curso…",
    "lab.run": "Correr evaluación",
    "lab.history": "Historial",
    "lab.no runs": "Sin corridas todavía.",
    "lab.in progress": "En curso…",
    "lab.failed": "Fallida",
    "lab.score": "Score",
    "lab.report": "Reporte",
    "lab.run failed prefix": "La corrida falló:",
    "lab.unknown error": "error desconocido",
    "lab.retry": "Vuelve a intentarlo.",
    "lab.judge failed":
      "caso(s) sin veredicto (el juez no respondió válido); excluidos del score.",
    "lab.no verdict": "sin veredicto",
    "lab.verdict green": "Verdes",
    "lab.verdict yellow": "Amarillos",
    "lab.verdict red": "Rojos",
    "lab.findings": "hallazgo(s)",
    "lab.transcript": "Transcript",
    "lab.client": "Cliente",
    "lab.agent": "Agente",
    "lab.add to kb": "Agregar al conocimiento",
    "lab.added to kb": "Agregado al conocimiento ✓",
    "lab.evidence": "Evidencia:",
    "lab.question": "Pregunta",
    "lab.answer": "Respuesta",
    "lab.save to kb": "Guardar en el KB",
    "lab.launch error": "No se pudo lanzar la corrida",

    // Agent
    "agent.title": "Agente de IA",
    "agent.saved": "Guardado ✓",
    "agent.on": "Encendido",
    "agent.off": "Apagado",
    "agent.toggle label": "Agente encendido",
    "agent.configure ai": "Configura tu proveedor de IA para activar el agente",
    "agent.configure hint":
      "Agrega OPENROUTER_API_TOKEN y OPENROUTER_MODEL a las variables de entorno de la instancia y reiníciala. Mientras tanto puedes dejar listo el comportamiento y el conocimiento aquí abajo.",
    "agent.behavior": "Comportamiento",
    "agent.behavior desc":
      "Cómo se presenta y actúa el agente al responder a tus clientes.",
    "agent.name label": "Nombre del agente",
    "agent.tone": "Tono",
    "agent.tone placeholder": "p. ej. cercano y directo, con usted",
    "agent.instructions": "Instrucciones",
    "agent.instructions placeholder": "Qué debe y no debe hacer el agente…",
    "agent.escalation": "Reglas de escalado",
    "agent.escalation placeholder": "Cuándo pasar la conversación a un humano…",
    "agent.greeting": "Saludo",
    "agent.greeting placeholder": "Saludo para conversaciones nuevas",
    "agent.save behavior": "Guardar comportamiento",
    "agent.kb title": "Knowledge base",
    "agent.kb desc":
      "La única fuente de verdad del agente: lo que no está aquí, no lo afirma.",
    "agent.chars": "caracteres",
    "agent.kb warning":
      "El conocimiento se acerca al límite del contexto del modelo (v1 lo inyecta completo en cada turno). Considera depurar entradas.",
    "agent.new qa": "Nueva pregunta / respuesta",
    "agent.qa placeholder": "Pregunta (p. ej. ¿Hacen envíos?)",
    "agent.answer placeholder": "Respuesta",
    "agent.add qa": "Agregar P/R",
    "agent.new block": "Nuevo bloque de texto libre",
    "agent.block placeholder": "Horarios, direcciones, políticas…",
    "agent.add block": "Agregar bloque",
    "agent.delete entry": "Eliminar entrada",
    "agent.kb empty": "Sin entradas todavía: agrega lo que el agente debe saber.",

    // Branding
    "branding.title": "Marca del CRM",
    "branding.desc":
      "Este CRM es tuyo: ponle el nombre de tu negocio y tu color. Se reflejan en toda la interfaz y en la pantalla de inicio de sesión.",
    "branding.name": "Nombre",
    "branding.accent": "Color de acento",
    "branding.custom": "Personalizado",
    "branding.custom desc":
      "Con un color personalizado, los tonos derivados (hover, fondos suaves) se calculan solos y se ajusta el contraste.",
    "branding.sample button": "Botón de ejemplo",
    "branding.save error": "No se pudo guardar",
    "branding.saved": "Marca guardada ✓",
    "branding.save": "Guardar marca",

    // WhatsApp wizard
    "wa.loading": "Cargando…",
    "wa.token expired": "El token de WhatsApp expiró o fue revocado.",
    "wa.token expired desc":
      "Los envíos están pausados. Pega un token nuevo abajo y prueba la conexión para reconectar.",
    "wa.number connected": "Número conectado:",
    "wa.connected": "Conectado",
    "wa.reconnect": "Reconectar / actualizar el número",
    "wa.connect": "Conectar tu número de WhatsApp",
    "wa.credentials desc":
      "Pega las credenciales de WhatsApp Cloud API. El token se valida contra Meta ANTES de guardarse y se almacena cifrado.",
    "wa.token source": "¿De dónde sale el token?",
    "wa.direct mode": "Modo directo",
    "wa.agency mode": "Modo agencia (Tech Provider)",
    "wa.direct mode desc":
      "El negocio tiene su propia app en developers.facebook.com: usa un token de usuario del sistema (no expira) con permisos de WhatsApp. En este modo conviene configurar también el App Secret para la firma del webhook.",
    "wa.agency mode desc":
      "Tu agencia hace el Embedded Signup en SU plataforma y su backend obtiene el token del cliente; te lo entrega para pegarlo aquí. El webhook se conecta con el override por WABA (checklist de 5 pasos en el README).",
    "wa.waba id": "WABA ID",
    "wa.waba placeholder": "ID de la cuenta de WhatsApp Business",
    "wa.phone id": "Phone Number ID",
    "wa.phone placeholder": "ID del número de teléfono",
    "wa.token": "Token de acceso",
    "wa.token placeholder saved": "Guardado (…",
    "wa.token placeholder new": ") — pega uno nuevo para cambiarlo",
    "wa.token valid": "✓ Token válido para",
    "wa.token can save": "Ya puedes guardar.",
    "wa.no server": "Sin conexión con el servidor",
    "wa.validation failed": "La validación falló",
    "wa.save error": "No se pudo guardar la conexión",
    "wa.testing": "Probando…",
    "wa.test": "Probar conexión",
    "wa.save": "Guardar conexión",
    "wa.webhook title": "Webhook de WhatsApp",
    "wa.webhook desc":
      "Pega estos valores en el panel de Meta (modo directo) o úsalos en el override de tu backend de agencia (a nivel WABA).",
    "wa.webhook save first":
      "Guarda la conexión ANTES de configurar el webhook:",
    "wa.webhook save first desc":
      "la verificación (handshake) funciona sin guardar, pero los mensajes solo se reciben si la conexión está guardada — se enrutan por tu Phone Number ID.",
    "wa.webhook url": "URL del webhook (callback URL)",
    "wa.copy url": "Copiar URL",
    "wa.copied": "Copiada ✓",
    "wa.verify token": "Verify token",
    "wa.copy verify": "Copiar verify token",
    "wa.copied m": "Copiado ✓",
    "wa.url secret":
      "La URL contiene el token secreto en la ruta: trátala como una contraseña.",
    "wa.signature active":
      "Verificación de firma activa (META_APP_SECRET configurado): cada evento se valida con x-hub-signature-256.",
    "wa.no signature":
      "Sin App Secret configurado: el webhook queda protegido por la URL secreta (normal en modo agencia). Para la capa extra de firma, agrega META_APP_SECRET a la instancia.",
    "wa.not https":
      "La URL configurada no es https: Meta exige https para los webhooks. Ajusta APP_BASE_URL con tu dominio público.",

    // Team
    "team.title": "Crear cuenta de equipo",
    "team.desc":
      "Sin correos ni invitaciones: comparte tú mismo la contraseña temporal con tu compañero (se muestra UNA sola vez).",
    "team.name": "Nombre",
    "team.email": "Correo",
    "team.temp password": "Contraseña temporal",
    "team.password placeholder": "mínimo 8 caracteres",
    "team.generate": "Generar",
    "team.created": "Cuenta creada ✓",
    "team.share data": "Comparte estos datos ahora (no se volverán a mostrar):",
    "team.password": "contraseña",
    "team.create error": "No se pudo crear la cuenta",
    "team.members": "Miembros",
    "team.member owner": "Propietario",
    "team.member": "Miembro",
    "team.create": "Crear cuenta",
    "team.creating": "Creando…",

    // Pipeline
    "pipeline.title": "Pipeline",
    "pipeline.manage stages": "Gestionar etapas",
    "pipeline.activity": "Actividad:",
    "pipeline.no activity": "Sin actividad",
    "pipeline.open conv": "Abrir conversación",
    "pipeline.stages title": "Etapas del pipeline",
    "pipeline.won": "ganado",
    "pipeline.lost": "perdido",
    "pipeline.delete stage": "Eliminar etapa",
    "pipeline.move up": "Subir",
    "pipeline.move down": "Bajar",
    "pipeline.has cards": "tiene tarjetas. Elige a dónde moverlas:",
    "pipeline.target stage": "Etapa destino…",
    "pipeline.move delete": "Mover y eliminar",
    "pipeline.delete error": "No se pudo eliminar",
    "pipeline.new stage": "Nueva etapa…",
    "pipeline.add": "Agregar",
    "pipeline.close": "Cerrar",

    // Language selector
    "lang.label": "Idioma",
    "lang.es": "Español",
    "lang.en": "English",
  },
  en: {
    // App nav
    "nav.inbox": "Inbox",
    "nav.pipeline": "Pipeline",
    "nav.contacts": "Contacts",
    "nav.agent": "Agent",
    "nav.lab": "Lab",
    "nav.settings": "Settings",
    "nav.crm whatsapp": "CRM · WhatsApp",
    "nav.owner": "Owner",
    "nav.team": "Team",
    "nav.online": "Online",
    "nav.signout": "Sign out",

    // Settings nav
    "settings.whatsapp": "WhatsApp",
    "settings.branding": "Branding",
    "settings.templates": "Templates",
    "settings.team": "Team",
    "settings.title": "Settings",

    // Auth layout
    "auth.subtitle": "WhatsApp CRM with AI agent",

    // Login
    "login.title": "Sign in",
    "login.email": "Email",
    "login.password": "Password",
    "login.rate limit": "Too many attempts. Please wait a few minutes.",
    "login.invalid": "Incorrect email or password.",
    "login.submitting": "Signing in…",
    "login.submit": "Sign in",
    "login.first time": "First time here?",
    "login.create account": "Create initial account",

    // Register
    "register.title": "Create account",
    "register.description":
      "The first registration creates the organization for this instance and becomes the owner.",
    "register.name": "Your name",
    "register.email": "Email",
    "register.password": "Password",
    "register.closed":
      "Registration is closed: this instance already has its organization. Ask the owner for access.",
    "register.rate limit": "Too many attempts. Please wait a few minutes.",
    "register.failed": "Could not create the account.",
    "register.submitting": "Creating…",
    "register.submit": "Create account",
    "register.has account": "Already have an account?",
    "register.signin": "Sign in",

    // Conversation list
    "conv.empty title": "No conversations yet",
    "conv.empty desc":
      "When someone messages your WhatsApp number, their conversation will appear here in real time.",
    "conv.demo loading": "Loading demo…",
    "conv.demo button": "Load demo data",
    "conv.title": "Inbox",
    "conv.search": "Search conversation…",
    "conv.all": "All",
    "conv.unread": "Unread",
    "conv.loading": "Loading…",
    "conv.no results": "No results for this filter.",
    "conv.human handoff": "Human handoff",

    // Contact panel
    "panel.details": "Details",
    "panel.hide": "Hide panel",
    "panel.handoff.client": "Customer requested a human",
    "panel.handoff.model": "Agent decided to escalate",
    "panel.handoff.error": "AI provider error",
    "panel.handoff.window": "24h window closed",
    "panel.handoff paused": "AI is paused in this conversation.",
    "panel.reactivate ai": "Reactivate AI",
    "panel.ai in conv": "AI in this conversation",
    "panel.ai not ready": "Agent not activated",
    "panel.ai paused human": "Paused · human handoff",
    "panel.ai responding": "Responding",
    "panel.ai paused": "Paused",
    "panel.ai configure hint":
      "The AI doesn't respond on its own yet. Configure the agent basics and turn it on.",
    "panel.ai missing key":
      "Missing instance AI key (OPENROUTER_API_TOKEN) for the agent to respond.",
    "panel.configure agent": "Configure agent →",
    "panel.stage": "Pipeline stage",
    "panel.move to": "Move to",
    "panel.notes": "Notes",
    "panel.notes placeholder": "Internal notes about this contact…",
    "panel.saving": "Saving…",
    "panel.save notes": "Save notes",

    // Template sender
    "tpl.loading": "Loading templates…",
    "tpl.empty": "No approved templates yet. Create them in",
    "tpl.empty link": "Settings → Templates",
    "tpl.empty wait": "and wait for Meta approval.",
    "tpl.send error": "Could not send the template",
    "tpl.label": "Approved template",
    "tpl.choose": "Choose a template…",
    "tpl.variable": "Variable value {{1}}",
    "tpl.variable placeholder": "e.g. the customer's name",
    "tpl.sending": "Sending…",
    "tpl.send": "Send template",

    // Composer
    "composer.window closed": "The 24-hour window is closed.",
    "composer.window closed desc":
      "WhatsApp only allows free text within 24 hours of the customer's last message. To resume the conversation, send an approved template.",
    "composer.placeholder": "Type a reply…",
    "composer.send": "Send",
    "composer.window open": "Window open ·",

    // Inbox client
    "inbox.no conv selected": "No conversation selected",
    "inbox.no server": "No server connection",
    "inbox.send error": "Could not send the message",
    "inbox.show details": "Show details",
    "inbox.window open short": "window open",
    "inbox.pick conv": "Pick a conversation to see the thread",

    // Message thread
    "thread.today": "Today",
    "thread.yesterday": "Yesterday",
    "thread.ai tooltip": "AI-generated reply",
    "thread.ai badge": "AI",

    // Media labels
    "media.image": "Image",
    "media.audio": "Audio",
    "media.video": "Video",
    "media.document": "Document",
    "media.sticker": "Sticker",
    "media.location": "Location",
    "media.contacts": "Shared contact",
    "media.template": "Template",
    "media.unknown": "Content",

    // Contacts
    "contacts.title": "Contacts",
    "contacts.show archived": "Show archived",
    "contacts.search": "Search by name or phone…",
    "contacts.empty title": "No contacts",
    "contacts.empty desc":
      "Everyone who messages your WhatsApp will be automatically registered here.",
    "contacts.archived": "Archived",
    "contacts.edit": "Edit",
    "contacts.open conv": "Open conversation",
    "contacts.unarchive": "Unarchive",
    "contacts.archive": "Archive",
    "contacts.edit title": "Edit contact",
    "contacts.name": "Name",
    "contacts.notes": "Notes",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.loading": "Loading…",
    "common.saving": "Saving…",

    // Lab
    "lab.type hallucination": "Hallucination",
    "lab.type out of kb": "Outside knowledge",
    "lab.type should escalate": "Should have escalated",
    "lab.type tone": "Tone",
    "lab.configure ai": "Configure your AI provider to use the Lab",
    "lab.needs agent":
      "The Lab needs the agent active: add OPENROUTER_API_TOKEN to the instance and come back here.",
    "lab.evaluating": "Evaluating personas…",
    "lab.first run":
      "Run your first evaluation: 6 simulated customers will converse with your agent and a judge will score each conversation.",
    "lab.choose run": "Choose a run from the history.",
    "lab.title": "Lab",
    "lab.sandbox": "Internal sandbox — no real messages sent",
    "lab.running": "Run in progress…",
    "lab.run": "Run evaluation",
    "lab.history": "History",
    "lab.no runs": "No runs yet.",
    "lab.in progress": "In progress…",
    "lab.failed": "Failed",
    "lab.score": "Score",
    "lab.report": "Report",
    "lab.run failed prefix": "The run failed:",
    "lab.unknown error": "unknown error",
    "lab.retry": "Try again.",
    "lab.judge failed":
      "case(s) without verdict (judge didn't respond valid); excluded from score.",
    "lab.no verdict": "no verdict",
    "lab.verdict green": "Green",
    "lab.verdict yellow": "Yellow",
    "lab.verdict red": "Red",
    "lab.findings": "finding(s)",
    "lab.transcript": "Transcript",
    "lab.client": "Customer",
    "lab.agent": "Agent",
    "lab.add to kb": "Add to knowledge",
    "lab.added to kb": "Added to knowledge ✓",
    "lab.evidence": "Evidence:",
    "lab.question": "Question",
    "lab.answer": "Answer",
    "lab.save to kb": "Save to KB",
    "lab.launch error": "Could not launch the run",

    // Agent
    "agent.title": "AI Agent",
    "agent.saved": "Saved ✓",
    "agent.on": "On",
    "agent.off": "Off",
    "agent.toggle label": "Agent on",
    "agent.configure ai": "Configure your AI provider to activate the agent",
    "agent.configure hint":
      "Add OPENROUTER_API_TOKEN and OPENROUTER_MODEL to the instance environment variables and restart it. Meanwhile, you can set up the behavior and knowledge below.",
    "agent.behavior": "Behavior",
    "agent.behavior desc":
      "How the agent presents itself and acts when responding to your customers.",
    "agent.name label": "Agent name",
    "agent.tone": "Tone",
    "agent.tone placeholder": "e.g. friendly and direct",
    "agent.instructions": "Instructions",
    "agent.instructions placeholder": "What the agent should and shouldn't do…",
    "agent.escalation": "Escalation rules",
    "agent.escalation placeholder": "When to hand off to a human…",
    "agent.greeting": "Greeting",
    "agent.greeting placeholder": "Greeting for new conversations",
    "agent.save behavior": "Save behavior",
    "agent.kb title": "Knowledge base",
    "agent.kb desc":
      "The agent's single source of truth: if it's not here, it doesn't claim it.",
    "agent.chars": "characters",
    "agent.kb warning":
      "Knowledge is approaching the model's context limit (v1 injects it fully each turn). Consider pruning entries.",
    "agent.new qa": "New question / answer",
    "agent.qa placeholder": "Question (e.g. Do you offer delivery?)",
    "agent.answer placeholder": "Answer",
    "agent.add qa": "Add Q/A",
    "agent.new block": "New free text block",
    "agent.block placeholder": "Hours, addresses, policies…",
    "agent.add block": "Add block",
    "agent.delete entry": "Delete entry",
    "agent.kb empty": "No entries yet: add what the agent should know.",

    // Branding
    "branding.title": "CRM Branding",
    "branding.desc":
      "This CRM is yours: set your business name and color. They appear across the interface and on the login screen.",
    "branding.name": "Name",
    "branding.accent": "Accent color",
    "branding.custom": "Custom",
    "branding.custom desc":
      "With a custom color, derived tones (hover, soft backgrounds) are calculated automatically with adjusted contrast.",
    "branding.sample button": "Sample button",
    "branding.save error": "Could not save",
    "branding.saved": "Brand saved ✓",
    "branding.save": "Save brand",

    // WhatsApp wizard
    "wa.loading": "Loading…",
    "wa.token expired": "The WhatsApp token expired or was revoked.",
    "wa.token expired desc":
      "Sending is paused. Paste a new token below and test the connection to reconnect.",
    "wa.number connected": "Connected number:",
    "wa.connected": "Connected",
    "wa.reconnect": "Reconnect / update number",
    "wa.connect": "Connect your WhatsApp number",
    "wa.credentials desc":
      "Paste your WhatsApp Cloud API credentials. The token is validated against Meta BEFORE being saved and stored encrypted.",
    "wa.token source": "Where does the token come from?",
    "wa.direct mode": "Direct mode",
    "wa.agency mode": "Agency mode (Tech Provider)",
    "wa.direct mode desc":
      "The business has its own app on developers.facebook.com: use a system user token (non-expiring) with WhatsApp permissions. In this mode, configuring the App Secret for webhook signature is recommended.",
    "wa.agency mode desc":
      "Your agency does the Embedded Signup on ITS platform and its backend obtains the client's token; it hands it to you to paste here. The webhook connects via WABA override (5-step checklist in the README).",
    "wa.waba id": "WABA ID",
    "wa.waba placeholder": "WhatsApp Business account ID",
    "wa.phone id": "Phone Number ID",
    "wa.phone placeholder": "Phone number ID",
    "wa.token": "Access token",
    "wa.token placeholder saved": "Saved (…",
    "wa.token placeholder new": ") — paste a new one to change it",
    "wa.token valid": "✓ Valid token for",
    "wa.token can save": "You can save now.",
    "wa.no server": "No server connection",
    "wa.validation failed": "Validation failed",
    "wa.save error": "Could not save the connection",
    "wa.testing": "Testing…",
    "wa.test": "Test connection",
    "wa.save": "Save connection",
    "wa.webhook title": "WhatsApp Webhook",
    "wa.webhook desc":
      "Paste these values in the Meta panel (direct mode) or use them in your agency backend override (WABA level).",
    "wa.webhook save first":
      "Save the connection BEFORE configuring the webhook:",
    "wa.webhook save first desc":
      "verification (handshake) works without saving, but messages are only received if the connection is saved — they're routed by your Phone Number ID.",
    "wa.webhook url": "Webhook URL (callback URL)",
    "wa.copy url": "Copy URL",
    "wa.copied": "Copied ✓",
    "wa.verify token": "Verify token",
    "wa.copy verify": "Copy verify token",
    "wa.copied m": "Copied ✓",
    "wa.url secret":
      "The URL contains the secret token in the path: treat it like a password.",
    "wa.signature active":
      "Signature verification active (META_APP_SECRET configured): each event is validated with x-hub-signature-256.",
    "wa.no signature":
      "No App Secret configured: the webhook is protected by the secret URL (normal in agency mode). For the extra signature layer, add META_APP_SECRET to the instance.",
    "wa.not https":
      "The configured URL is not https: Meta requires https for webhooks. Adjust APP_BASE_URL with your public domain.",

    // Team
    "team.title": "Create team account",
    "team.desc":
      "No emails or invitations: share the temporary password with your teammate yourself (shown ONCE).",
    "team.name": "Name",
    "team.email": "Email",
    "team.temp password": "Temporary password",
    "team.password placeholder": "minimum 8 characters",
    "team.generate": "Generate",
    "team.created": "Account created ✓",
    "team.share data": "Share this data now (it won't be shown again):",
    "team.password": "password",
    "team.create error": "Could not create the account",
    "team.members": "Members",
    "team.member owner": "Owner",
    "team.member": "Member",
    "team.create": "Create account",
    "team.creating": "Creating…",

    // Pipeline
    "pipeline.title": "Pipeline",
    "pipeline.manage stages": "Manage stages",
    "pipeline.activity": "Activity:",
    "pipeline.no activity": "No activity",
    "pipeline.open conv": "Open conversation",
    "pipeline.stages title": "Pipeline stages",
    "pipeline.won": "won",
    "pipeline.lost": "lost",
    "pipeline.delete stage": "Delete stage",
    "pipeline.move up": "Move up",
    "pipeline.move down": "Move down",
    "pipeline.has cards": "has cards. Choose where to move them:",
    "pipeline.target stage": "Target stage…",
    "pipeline.move delete": "Move and delete",
    "pipeline.delete error": "Could not delete",
    "pipeline.new stage": "New stage…",
    "pipeline.add": "Add",
    "pipeline.close": "Close",

    // Language selector
    "lang.label": "Language",
    "lang.es": "Español",
    "lang.en": "English",
  },
};

export type Dictionary = (typeof dictionaries)["es"];
export type DictKey = keyof Dictionary;