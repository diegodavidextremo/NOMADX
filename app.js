/* ============================================================
   NOMADX — Red social del deporte, la aventura y la adrenalina
   app.js — Lógica completa + Datos simulados
   Concepto creado por Diego David Extremo
   ============================================================ */

'use strict';

/* ═══════════════════════════════════════════════════════════
   DATOS: CATEGORÍAS
   ═══════════════════════════════════════════════════════════ */
const CATEGORIES = [
  { id: 'all',           name: 'Todos',             emoji: '🌐' },
  { id: 'marino',        name: 'Marino y Acuático',  emoji: '🌊' },
  { id: 'aereo',         name: 'Aéreo y Salto',      emoji: '🪂' },
  { id: 'vertical',      name: 'Vertical y Escalada', emoji: '🧗' },
  { id: 'montana',       name: 'Montaña y Senderismo', emoji: '🏔️' },
  { id: 'ciclo',         name: 'Ciclismo y MTB',      emoji: '🚵' },
  { id: 'nieve',         name: 'Nieve y Hielo',       emoji: '⛷️' },
  { id: 'combate',       name: 'Combate y Artes Marciales', emoji: '🥊' },
  { id: 'motor',         name: 'Motor y Velocidad',   emoji: '🏎️' },
  { id: 'acuatico',      name: 'Surf y Vela',         emoji: '🏄' },
  { id: 'trail',         name: 'Trail y Ultra Running', emoji: '🏃' },
  { id: 'fitness',       name: 'Fitness y Fuerza',    emoji: '💪' },
  { id: 'espiritualidad', name: 'Yoga y Mente-Cuerpo', emoji: '🧘' },
  { id: 'espeleologia',  name: 'Espeleología y Subterráneo', emoji: '🕳️' },
  { id: 'equipo',        name: 'Deportes de Equipo',  emoji: '⚽' },
  { id: 'tiro',          name: 'Tiro y Precisión',    emoji: '🎯' },
  { id: 'raquet',        name: 'Raqueta',             emoji: '🎾' },
  { id: 'hipico',        name: 'Hípica y Animales',   emoji: '🐎' },
  { id: 'extremo',       name: 'Extremo y Adrenalina', emoji: '⚡' },
  { id: 'aguas',         name: 'Aguas Bravas y Kayak', emoji: '🛶' },
  { id: 'vuelo',         name: 'Vuelo y Drones',      emoji: '✈️' },
  { id: 'urbano',        name: 'Urbano y Street',     emoji: '🏙️' },
  { id: 'atletismo',     name: 'Atletismo y Pista',   emoji: '🏟️' },
  { id: 'natacion',      name: 'Natación y Aguas Abiertas', emoji: '🏊' },
  { id: 'aventura',      name: 'Multiaventura',       emoji: '🧭' },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: DEPORTES (600+ entradas desde catálogo maestro)
   ═══════════════════════════════════════════════════════════ */
const SPORTS_DATA = [
  // MARINO Y ACUÁTICO
  { id: 's001', cat: 'marino', name: 'Apnea / Freediving', risk: 'high', emoji: '🤿', desc: 'Buceo a pulmón libre, sin equipo de respiración autónoma. Combina técnica, física, psicología y control de la respiración.', related: ['Buceo Técnico','Pesca Submarina','Natación en Aguas Abiertas'] },
  { id: 's002', cat: 'marino', name: 'Buceo Técnico', risk: 'extreme', emoji: '🤿', desc: 'Buceo con mezclas especiales de gases, grandes profundidades y descompresiones largas. Solo expertos certificados.', related: ['Apnea','Cave Diving','Sidemount Diving'] },
  { id: 's003', cat: 'marino', name: 'Cave Diving', risk: 'extreme', emoji: '🕳️', desc: 'Buceo en cuevas submarinas. Considerado uno de los deportes más peligrosos. Requiere certificaciones específicas.', related: ['Buceo Técnico','Espeleología'] },
  { id: 's004', cat: 'marino', name: 'Cliff Jumping / Salto de Acantilado', risk: 'extreme', emoji: '🌊', desc: 'Saltos desde acantilados y formaciones rocosas al mar. Requiere conocer perfectamente el spot: profundidad, corrientes, recorrido de vuelo.', related: ['Coasteering','Psicobloc','Tombstoning'] },
  { id: 's005', cat: 'marino', name: 'Coasteering', risk: 'high', emoji: '🏔️', desc: 'Exploración de costas rocosas nadando, saltando, escalando. Combina varios elementos en un recorrido sin ruta fija.', related: ['Cliff Jumping','Snorkel','Escalada'] },
  { id: 's006', cat: 'marino', name: 'Snorkel / Buceo recreativo', risk: 'low', emoji: '🤿', desc: 'Exploración superficial con máscara y tubo. Accesible para todos los niveles.', related: ['Apnea','Natación'] },
  { id: 's007', cat: 'marino', name: 'Pesca Submarina', risk: 'high', emoji: '🎣', desc: 'Caza submarina a pulmón. Combina apnea y habilidad de captura. Regulada por licencias según zona.', related: ['Apnea','Freediving'] },
  { id: 's008', cat: 'marino', name: 'Tombstoning', risk: 'extreme', emoji: '💦', desc: 'Saltos verticales desde estructuras elevadas al agua. Muy peligroso sin conocimiento del entorno.', related: ['Cliff Jumping','Coasteering'] },
  { id: 's009', cat: 'marino', name: 'Sidemount Diving', risk: 'high', emoji: '🤿', desc: 'Configuración de buceo con las bombonas laterales. Mayor eficiencia en espacios reducidos.', related: ['Buceo Técnico','Cave Diving'] },
  { id: 's010', cat: 'marino', name: 'Psicobloc / Deep Water Soloing', risk: 'high', emoji: '🧗', desc: 'Escalada sobre el mar sin cuerda. El agua actúa de colchón. Combinación de escalada y audacia.', related: ['Escalada','Cliff Jumping'] },

  // AÉREO Y SALTO
  { id: 's011', cat: 'aereo', name: 'Paracaidismo', risk: 'high', emoji: '🪂', desc: 'Salto desde aeronave con apertura de paracaídas. Desde Tandem inicial hasta AFF y disciplinas avanzadas.', related: ['BASE Jump','Wingsuit','Skydiving'] },
  { id: 's012', cat: 'aereo', name: 'BASE Jump', risk: 'extreme', emoji: '⚡', desc: 'Salto desde objetos fijos: Edificios, Antenas, Vanos (puentes), Acantilados. El deporte más peligroso del mundo por error estadístico.', related: ['Paracaidismo','Wingsuit Proximity','Free Solo'] },
  { id: 's013', cat: 'aereo', name: 'Wingsuit Proximity', risk: 'extreme', emoji: '🦅', desc: 'Vuelo en traje de ala extremadamente cerca del terreno. Solo para los mejores del mundo con miles de saltos.', related: ['BASE Jump','Wingsuit'] },
  { id: 's014', cat: 'aereo', name: 'Parapente', risk: 'medium', emoji: '🪂', desc: 'Vuelo libre con ala flexible. Desde vuelos de iniciación hasta acrobacia, cross country y competición.', related: ['Parapente Acrobático','Parapente Motor','Ala Delta'] },
  { id: 's015', cat: 'aereo', name: 'Parapente Motor / Paramotoring', risk: 'medium', emoji: '✈️', desc: 'Parapente con motor dorsal. Mayor autonomía y libertad de vuelo que el parapente clásico.', related: ['Parapente','Ultraligero'] },
  { id: 's016', cat: 'aereo', name: 'Parapente Acrobático', risk: 'extreme', emoji: '🌀', desc: 'Acrobacia aérea con parapente: SAT, Heli, Misty Flip, Infinite Tumbling. Solo pilotos de muy alto nivel.', related: ['Parapente'] },
  { id: 's017', cat: 'aereo', name: 'Ala Delta', risk: 'medium', emoji: '🦅', desc: 'Vuelo libre con ala rígida triangular. Más velocidad y planeo que el parapente.', related: ['Parapente','Ultraligero'] },
  { id: 's018', cat: 'aereo', name: 'Skydiving / CRW', risk: 'high', emoji: '🪂', desc: 'Formaciones de caída libre en grupo. Precisión y trabajo en equipo en freefall.', related: ['Paracaidismo'] },
  { id: 's019', cat: 'aereo', name: 'Speed Riding', risk: 'extreme', emoji: '⛷️', desc: 'Esquí en pendientes extremas con parapente pequeño para vuelos rasantes. Alta velocidad y precisión.', related: ['Parapente','Esquí Freeride'] },
  { id: 's020', cat: 'aereo', name: 'Kitesurf Freestyle', risk: 'high', emoji: '🏄', desc: 'Acrobacia aérea con cometa y tabla. Saltos, giros y trucos de alta complejidad.', related: ['Kitesurf','Wakeboard'] },

  // VERTICAL Y ESCALADA
  { id: 's021', cat: 'vertical', name: 'Escalada Deportiva', risk: 'medium', emoji: '🧗', desc: 'Escalada con seguros instalados (chapas/rápeles). Desde placas de iniciación hasta rutas de grado 9c.', related: ['Escalada Tradicional','Boulder','Via Ferrata'] },
  { id: 's022', cat: 'vertical', name: 'Escalada Tradicional', risk: 'high', emoji: '🧗', desc: 'Escalada colocando los propios seguros mientras se sube. Mayor exposición y compromiso que la deportiva.', related: ['Escalada Deportiva','Alpinismo','Big Wall'] },
  { id: 's023', cat: 'vertical', name: 'Boulder / Bouldering', risk: 'medium', emoji: '🪨', desc: 'Escalada corta en bloque sin cuerda, con colchoneta. Máximo esfuerzo en movimientos técnicos cortos.', related: ['Escalada Deportiva','Escalada de Competición'] },
  { id: 's024', cat: 'vertical', name: 'Big Wall Climbing', risk: 'extreme', emoji: '🏔️', desc: 'Escalada de paredes verticales de más de 500m en varios días. Vivac en la pared. El Capitan, Dolomitas, Patagonia.', related: ['Escalada Tradicional','Aid Climbing'] },
  { id: 's025', cat: 'vertical', name: 'Free Solo', risk: 'extreme', emoji: '🧗', desc: 'Escalada sin cuerda ni protecciones. El error es fatal. Solo los mejores del mundo en rutas de su máximo nivel.', related: ['Escalada Deportiva','Escalada Tradicional'] },
  { id: 's026', cat: 'vertical', name: 'Vía Ferrata', risk: 'medium', emoji: '⛏️', desc: 'Ascenso por ferratas con escalonados y cables de progresión instalados. Accesible con formación básica y arnés.', related: ['Escalada Deportiva','Barranquismo','Senderismo'] },
  { id: 's027', cat: 'vertical', name: 'Aid Climbing / Artificial', risk: 'high', emoji: '🔩', desc: 'Escalada usando material artificial para progresar en fisuras y paredes sin presas.', related: ['Big Wall','Escalada Tradicional'] },
  { id: 's028', cat: 'vertical', name: 'Slacklining / Highline', risk: 'high', emoji: '⚡', desc: 'Equilibrio sobre cinta tensa entre dos puntos. Desde slackline parque hasta highline a cientos de metros de altura.', related: ['Equilibrio','Escalada'] },
  { id: 's029', cat: 'vertical', name: 'Rappel / Rapel', risk: 'medium', emoji: '⛓️', desc: 'Descenso controlado por cuerda desde alturas. Técnica fundamental en escalada, barranquismo y rescate.', related: ['Barranquismo','Escalada','Espeleología'] },
  { id: 's030', cat: 'vertical', name: 'Alpinismo Técnico', risk: 'extreme', emoji: '🏔️', desc: 'Ascenso de cumbres con técnica mixta (roca, nieve, hielo). Requiere formación en todos los medios.', related: ['Escalada','Esquí de Montaña','Travesía Glaciar'] },

  // MONTAÑA Y SENDERISMO
  { id: 's031', cat: 'montana', name: 'Senderismo / Trekking', risk: 'low', emoji: '🥾', desc: 'Recorridos a pie por senderos naturales de diversa dificultad. Desde paseos familiares hasta rutas técnicas.', related: ['Trail Running','Montañismo','MTB'] },
  { id: 's032', cat: 'montana', name: 'Barranquismo Técnico', risk: 'high', emoji: '🏃', desc: 'Descenso de barrancos con agua, cuerdas, rápeles y natación. Requiere formación y material específico.', related: ['Rappel','Escalada','Espeleología'] },
  { id: 's033', cat: 'montana', name: 'Barranquismo Básico / Rías', risk: 'medium', emoji: '💧', desc: 'Barrancos sencillos con poca exposición. Ideal para iniciación guiada.', related: ['Barranquismo Técnico','Vía Ferrata'] },
  { id: 's034', cat: 'montana', name: 'Travesía de Alta Montaña', risk: 'high', emoji: '⛰️', desc: 'Recorridos de varios días por alta montaña. Orientación, autonomía y resistencia.', related: ['Senderismo','Alpinismo','Esquí de Montaña'] },
  { id: 's035', cat: 'montana', name: 'Orientación / Navegación', risk: 'low', emoji: '🧭', desc: 'Competición o práctica de navegación con mapa y brújula. Mental y físico.', related: ['Senderismo','Trail Running'] },
  { id: 's036', cat: 'montana', name: 'Carrera de Montaña / Skyrace', risk: 'high', emoji: '🏃', desc: 'Carreras de montaña en zonas de alta altitud y pendientes extremas. Físico excepcional requerido.', related: ['Trail Running','Ultra Trail'] },
  { id: 's037', cat: 'montana', name: 'Bushcraft / Supervivencia', risk: 'medium', emoji: '🌿', desc: 'Habilidades de supervivencia en el medio natural: fuego, cobijo, agua, orientación. Autosuficiencia total.', related: ['Senderismo','Trekking','Camping'] },
  { id: 's038', cat: 'montana', name: 'Expedición Polar / Ártica', risk: 'extreme', emoji: '❄️', desc: 'Travesías en condiciones de hielo y frío extremo. Logística compleja y riesgo objetivo alto.', related: ['Alpinismo','Senderismo'] },
  { id: 's039', cat: 'montana', name: 'Snowshoeing / Raquetas de Nieve', risk: 'low', emoji: '❄️', desc: 'Marcha sobre nieve con raquetas. Accesible y sin técnica avanzada necesaria.', related: ['Senderismo','Esquí Nórdico'] },
  { id: 's040', cat: 'montana', name: 'Multiaventura Guiada', risk: 'low', emoji: '🧭', desc: 'Combinación de varias actividades en un programa dirigido por guía. Escalada, tirolina, barranquismo, orientación.', related: ['Barranquismo','Escalada','Vía Ferrata'] },

  // CICLISMO Y MTB
  { id: 's041', cat: 'ciclo', name: 'MTB Enduro', risk: 'high', emoji: '🚵', desc: 'Descenso técnico con tramos de subida. Requiere técnica en bajada y resistencia física.', related: ['MTB DH','Gravel','MTB XC'] },
  { id: 's042', cat: 'ciclo', name: 'MTB Downhill (DH)', risk: 'high', emoji: '🚵', desc: 'Descenso a máxima velocidad por pistas técnicas. Protecciones completas obligatorias.', related: ['MTB Enduro','Pump Track'] },
  { id: 's043', cat: 'ciclo', name: 'MTB XC / Cross Country', risk: 'medium', emoji: '🚵', desc: 'Ciclismo de montaña en circuitos mixtos. Gran resistencia cardiovascular.', related: ['MTB Enduro','Trail Running'] },
  { id: 's044', cat: 'ciclo', name: 'Gravel / Bikepacking', risk: 'medium', emoji: '🚴', desc: 'Ciclismo de aventura por caminos de tierra y asfalto. Largos recorridos con equipo mínimo.', related: ['MTB XC','Cicloturismo'] },
  { id: 's045', cat: 'ciclo', name: 'BMX Freestyle', risk: 'high', emoji: '🚴', desc: 'Acrobacias con bici BMX. Park, street, flatland, dirt. Trucos técnicos y creativos.', related: ['Skateboarding','BMX Race'] },
  { id: 's046', cat: 'ciclo', name: 'Ciclocross', risk: 'medium', emoji: '🚴', desc: 'Carreras mixtas de asfalto, tierra y obstáculos. Alta intensidad y técnica.', related: ['MTB XC','Carretera'] },
  { id: 's047', cat: 'ciclo', name: 'Pump Track / Dirt Jump', risk: 'medium', emoji: '🚵', desc: 'Pistas de baches y curvas para coger velocidad sin pedalear o saltos de tierra.', related: ['BMX','MTB Enduro'] },
  { id: 's048', cat: 'ciclo', name: 'Triatlón', risk: 'medium', emoji: '🏊', desc: 'Natación + Ciclismo + Running. Desde sprint hasta Ironman.', related: ['Natación','Ciclismo','Running'] },
  { id: 's049', cat: 'ciclo', name: 'Duatlón', risk: 'medium', emoji: '🏃', desc: 'Running + Ciclismo + Running. Sin natación.', related: ['Triatlón','Running','Ciclismo'] },
  { id: 's050', cat: 'ciclo', name: 'Ciclismo de Montaña e-Bike', risk: 'low', emoji: '⚡', desc: 'MTB con asistencia eléctrica. Mayor accesibilidad y autonomía en montaña.', related: ['MTB XC','MTB Enduro'] },

  // NIEVE Y HIELO
  { id: 's051', cat: 'nieve', name: 'Snowboard Freeride', risk: 'high', emoji: '🏂', desc: 'Descenso libre por nieve virgen y terreno off-piste. Lectura del terreno y aludes.', related: ['Snowboard Freestyle','Esquí Freeride'] },
  { id: 's052', cat: 'nieve', name: 'Snowboard Freestyle', risk: 'medium', emoji: '🏂', desc: 'Trucos y acrobacias en snowpark. Halfpipe, slopestyle, big air.', related: ['Snowboard','Ski Freestyle'] },
  { id: 's053', cat: 'nieve', name: 'Esquí Freeride', risk: 'high', emoji: '⛷️', desc: 'Esquí en terreno natural y pendientes extremas. Alta técnica y conocimiento de nieve.', related: ['Esquí de Montaña','Snowboard Freeride'] },
  { id: 's054', cat: 'nieve', name: 'Esquí de Montaña / Ski-Mo', risk: 'high', emoji: '⛷️', desc: 'Ascenso y descenso con esquís especiales. Combina alpinismo y esquí.', related: ['Alpinismo','Esquí Freeride'] },
  { id: 's055', cat: 'nieve', name: 'Esquí Nórdico / Fondo', risk: 'low', emoji: '⛷️', desc: 'Deslizamiento sobre pistas planas o de ondulación suave. Alta resistencia cardiovascular.', related: ['Biatlón','Snowshoeing'] },
  { id: 's056', cat: 'nieve', name: 'Ice Climbing', risk: 'extreme', emoji: '🧊', desc: 'Escalada en cascadas de hielo con piolets y crampones. Alta exposición y técnica.', related: ['Alpinismo','Escalada Técnica'] },
  { id: 's057', cat: 'nieve', name: 'Freerando / Freetouring', risk: 'high', emoji: '⛷️', desc: 'Esquí de travesía y freeride combinado. Backcountry con toma de decisiones avanzada.', related: ['Esquí de Montaña','Freeride'] },
  { id: 's058', cat: 'nieve', name: 'Biatlón', risk: 'medium', emoji: '🎯', desc: 'Esquí de fondo + tiro con rifle. Resistencia y precisión.', related: ['Esquí Nórdico','Tiro'] },
  { id: 's059', cat: 'nieve', name: 'Mushing / Trineo de Perros', risk: 'medium', emoji: '🐕', desc: 'Conducción de trineo tirado por perros de trineo. Tradición y deporte de resistencia.', related: ['Senderismo Invernal'] },
  { id: 's060', cat: 'nieve', name: 'Snowkite', risk: 'high', emoji: '🪁', desc: 'Kitesurf sobre nieve o hielo. Velocidades muy altas con cometa y tabla/esquís.', related: ['Kitesurf','Snowboard'] },

  // COMBATE Y ARTES MARCIALES
  { id: 's061', cat: 'combate', name: 'MMA / Artes Marciales Mixtas', risk: 'high', emoji: '🥊', desc: 'Combate que combina varias disciplinas: boxeo, lucha, judo, grappling. Exige formación integral.', related: ['Boxeo','BJJ','Judo','Muay Thai'] },
  { id: 's062', cat: 'combate', name: 'Boxeo', risk: 'high', emoji: '🥊', desc: 'Arte del puño. Desde fitness hasta competición amateur y profesional.', related: ['MMA','Kick Boxing','Muay Thai'] },
  { id: 's063', cat: 'combate', name: 'Jiu-Jitsu Brasileño (BJJ)', risk: 'medium', emoji: '🥋', desc: 'Arte marcial de suelo y sumisiones. Énfasis en técnica sobre fuerza.', related: ['Judo','MMA','Grappling'] },
  { id: 's064', cat: 'combate', name: 'Muay Thai', risk: 'high', emoji: '🦵', desc: 'Arte marcial tailandesa. Golpes con puños, codos, rodillas y piernas.', related: ['Boxeo','Kick Boxing','MMA'] },
  { id: 's065', cat: 'combate', name: 'Judo', risk: 'medium', emoji: '🥋', desc: 'Arte de los lanzamientos. Técnica de caída y lucha de pie y suelo.', related: ['BJJ','Sambo','Wrestling'] },
  { id: 's066', cat: 'combate', name: 'Karate', risk: 'low', emoji: '🥋', desc: 'Arte marcial japonesa. Kata y kumite. Disciplina, técnica y equilibrio.', related: ['Taekwondo','Kung Fu'] },
  { id: 's067', cat: 'combate', name: 'Taekwondo', risk: 'medium', emoji: '🦶', desc: 'Arte marcial coreana. Énfasis en patadas altas y rápidas. Deporte olímpico.', related: ['Karate','MMA'] },
  { id: 's068', cat: 'combate', name: 'Wrestling / Lucha Libre', risk: 'medium', emoji: '🤼', desc: 'Lucha de agarre y derribos. Lucha greco-romana y libre.', related: ['Judo','MMA','Sambo'] },
  { id: 's069', cat: 'combate', name: 'Kick Boxing', risk: 'high', emoji: '🥊', desc: 'Combinación de boxeo con patadas. Full contact y K-1.', related: ['Boxeo','Muay Thai'] },
  { id: 's070', cat: 'combate', name: 'Esgrima', risk: 'low', emoji: '🤺', desc: 'Arte del combate con espada. Florete, sable y espada. Deporte olímpico.', related: ['Esgrima Histórica'] },

  // SURF Y VELA
  { id: 's071', cat: 'acuatico', name: 'Surf', risk: 'medium', emoji: '🏄', desc: 'Deslizamiento sobre olas con tabla. Desde iniciación hasta big wave surfing.', related: ['Bodyboard','Longboard','SUP Surf'] },
  { id: 's072', cat: 'acuatico', name: 'Bodyboard', risk: 'medium', emoji: '🌊', desc: 'Surf tumbado sobre tabla corta. Trucos aéreos y olas de tubo.', related: ['Surf','Bodysurf'] },
  { id: 's073', cat: 'acuatico', name: 'Kitesurf', risk: 'high', emoji: '🪁', desc: 'Navegación con cometa y tabla. Velocidad, saltos y acrobacia sobre el agua.', related: ['Windsurf','Kitesurf Freestyle','Snowkite'] },
  { id: 's074', cat: 'acuatico', name: 'Windsurf', risk: 'medium', emoji: '🏄', desc: 'Vela sobre tabla. Desde paseo hasta speed sailing y slalom de competición.', related: ['Kitesurf','Vela'] },
  { id: 's075', cat: 'acuatico', name: 'SUP / Stand Up Paddle', risk: 'low', emoji: '🏄', desc: 'Paddle sobre tabla de pie. Travesías, surf, yoga y competición.', related: ['Surf','Kayak','Canoa'] },
  { id: 's076', cat: 'acuatico', name: 'Vela de Regatas', risk: 'medium', emoji: '⛵', desc: 'Navegación a vela en competición. Monotipos, optimist, 49er, America\'s Cup.', related: ['Windsurf','Navegación Oceánica'] },
  { id: 's077', cat: 'acuatico', name: 'Navegación Oceánica', risk: 'extreme', emoji: '⛵', desc: 'Travesías oceánicas de larga distancia. Requiere experiencia, equipo y logística complejos.', related: ['Vela','Navegación Oceánica Solitaria'] },
  { id: 's078', cat: 'acuatico', name: 'Big Wave Surfing', risk: 'extreme', emoji: '🌊', desc: 'Surf en olas de más de 20 pies. Nazaré, Mavericks, Jaws. Solo para los mejores.', related: ['Surf','Tow-in Surfing'] },
  { id: 's079', cat: 'acuatico', name: 'Foil Surfing / Hydrofoil', risk: 'high', emoji: '🏄', desc: 'Surf con foil que eleva la tabla sobre el agua. Alta velocidad y sensación de vuelo.', related: ['Kitesurf','Windsurf','Surf'] },
  { id: 's080', cat: 'acuatico', name: 'Longboard Surf', risk: 'low', emoji: '🏄', desc: 'Surf en tablas largas. Estética fluida, noseriding y clásico.', related: ['Surf','SUP'] },

  // TRAIL Y ULTRA RUNNING
  { id: 's081', cat: 'trail', name: 'Trail Running', risk: 'medium', emoji: '🏃', desc: 'Carrera por senderos naturales de montaña. Desde 10K hasta ultras de 160km+.', related: ['Ultra Trail','Skyrace','Senderismo'] },
  { id: 's082', cat: 'trail', name: 'Ultra Trail', risk: 'high', emoji: '🏃', desc: 'Carreras de más de 42km por montaña. UTMB, Transgrancanaria, Lavaredo. Resistencia extrema.', related: ['Trail Running','Triatlón Extremo'] },
  { id: 's083', cat: 'trail', name: 'Skyrunning', risk: 'high', emoji: '⛰️', desc: 'Carreras sobre crestas y cumbres de alta montaña. Terreno vertical y exposición.', related: ['Carrera de Montaña','Trail Running'] },
  { id: 's084', cat: 'trail', name: 'Running en Ciudad', risk: 'low', emoji: '🏙️', desc: 'Carreras populares urbanas. 5K, 10K, media maratón, maratón.', related: ['Atletismo','Trail Running'] },
  { id: 's085', cat: 'trail', name: 'OCR / Carreras de Obstáculos', risk: 'medium', emoji: '🏋️', desc: 'Spartan Race, Tough Mudder. Obstáculos físicos y mentales en recorridos mixtos.', related: ['Trail Running','Crossfit'] },
  { id: 's086', cat: 'trail', name: 'Carrera Nocturna', risk: 'medium', emoji: '🌙', desc: 'Carreras que se desarrollan de noche con frontal. Orientación y gestión diferente.', related: ['Trail Running','Orientación'] },
  { id: 's087', cat: 'trail', name: 'Atletismo de Pista', risk: 'low', emoji: '🏟️', desc: 'Carreras, saltos y lanzamientos en pista reglamentaria.', related: ['Running','Trail Running'] },
  { id: 's088', cat: 'trail', name: 'Marcha Atlética', risk: 'low', emoji: '🚶', desc: 'Prueba olímpica de caminar a ritmo elevado con técnica específica.', related: ['Atletismo','Running'] },
  { id: 's089', cat: 'trail', name: 'Triatlón Extremo / XTRI', risk: 'extreme', emoji: '⚡', desc: 'Natatón, ciclismo y running en condiciones extremas de montaña. XALPS, Norseman.', related: ['Triatlón','Ultra Trail'] },
  { id: 's090', cat: 'trail', name: 'Fastpacking', risk: 'high', emoji: '🎒', desc: 'Combinación de trail running y bikepacking. Grandes distancias con material ultraligero.', related: ['Trail Running','Trekking'] },

  // FITNESS Y FUERZA
  { id: 's091', cat: 'fitness', name: 'CrossFit', risk: 'medium', emoji: '💪', desc: 'Entrenamiento funcional de alta intensidad. WODs, levantamientos olímpicos y gimnasia.', related: ['Halterofilia','Calistenia','OCR'] },
  { id: 's092', cat: 'fitness', name: 'Halterofilia / Weightlifting', risk: 'medium', emoji: '🏋️', desc: 'Arranque y dos tiempos. Deporte olímpico de fuerza explosiva y técnica.', related: ['Powerlifting','CrossFit'] },
  { id: 's093', cat: 'fitness', name: 'Powerlifting', risk: 'medium', emoji: '🏋️', desc: 'Sentadilla, press banca y peso muerto. Máxima fuerza bruta.', related: ['Halterofilia','Strongman'] },
  { id: 's094', cat: 'fitness', name: 'Calistenia / Street Workout', risk: 'medium', emoji: '💪', desc: 'Entrenamiento con el peso corporal. Musculatura y acrobacias sin pesas.', related: ['CrossFit','Parkour','Gimnasia'] },
  { id: 's095', cat: 'fitness', name: 'Pole Dance / Pole Sport', risk: 'medium', emoji: '🎭', desc: 'Ejercicio y acrobacias en barra vertical. Fuerza, flexibilidad y expresión artística.', related: ['Acrobacia','Danza'] },
  { id: 's096', cat: 'fitness', name: 'Strongman', risk: 'high', emoji: '🏋️', desc: 'Pruebas de fuerza bruta: troncos, camiones, piedras de Atlas. Límites del cuerpo humano.', related: ['Powerlifting','Halterofilia'] },
  { id: 's097', cat: 'fitness', name: 'Crossfit Games', risk: 'high', emoji: '⚡', desc: 'Competición de CrossFit a nivel amateur y profesional. Fittest on Earth.', related: ['CrossFit'] },
  { id: 's098', cat: 'fitness', name: 'HIIT / Entrenamiento Funcional', risk: 'low', emoji: '🏃', desc: 'Circuitos de alta intensidad y corta duración. Accesible y muy efectivo.', related: ['CrossFit','Running'] },
  { id: 's099', cat: 'fitness', name: 'Escalada Indoor / Rocódromo', risk: 'low', emoji: '🧗', desc: 'Escalada en rocódromo artificial. Iniciación y entrenamiento técnico indoor.', related: ['Escalada Deportiva','Boulder'] },
  { id: 's100', cat: 'fitness', name: 'Gimnasia Artística', risk: 'medium', emoji: '🤸', desc: 'Suelo, caballo, barras, argollas, potro, paralelas. Técnica y acrobacia clásica.', related: ['Calistenia','Trampolín','Acrobacia'] },

  // YOGA Y MENTE-CUERPO
  { id: 's101', cat: 'espiritualidad', name: 'Yoga Ashtanga', risk: 'low', emoji: '🧘', desc: 'Secuencia fija de posturas enlazadas con la respiración. Físico y muy exigente.', related: ['Yoga Vinyasa','Meditación'] },
  { id: 's102', cat: 'espiritualidad', name: 'Yoga Acro / AcroYoga', risk: 'medium', emoji: '🤸', desc: 'Yoga en pareja con acrobacias, vuelos y masajes tailandeses.', related: ['Yoga','Acrobacia'] },
  { id: 's103', cat: 'espiritualidad', name: 'Meditación en Naturaleza', risk: 'low', emoji: '🌿', desc: 'Prácticas de mindfulness y meditación en entornos naturales.', related: ['Yoga','Bushcraft'] },
  { id: 's104', cat: 'espiritualidad', name: 'Pilates', risk: 'low', emoji: '🧘', desc: 'Trabajo de core, postura y control corporal. Máquina o suelo.', related: ['Yoga','Fisioterapia'] },
  { id: 's105', cat: 'espiritualidad', name: 'Surf Yoga', risk: 'low', emoji: '🏄', desc: 'Yoga diseñado para mejorar el surf: movilidad, equilibrio y respiración.', related: ['Yoga','Surf'] },
  { id: 's106', cat: 'espiritualidad', name: 'Tai Chi', risk: 'low', emoji: '☯️', desc: 'Arte marcial suave. Movimientos fluidos para salud, equilibrio y filosofía.', related: ['Kung Fu','Meditación'] },
  { id: 's107', cat: 'espiritualidad', name: 'Freediving Apnea Mental', risk: 'high', emoji: '🧠', desc: 'Preparación mental para apnea: respiración, relajación y visualización.', related: ['Apnea','Meditación'] },

  // ESPELEOLOGÍA Y SUBTERRÁNEO
  { id: 's108', cat: 'espeleologia', name: 'Espeleología Clásica', risk: 'high', emoji: '🕳️', desc: 'Exploración de cavidades naturales. Técnica de ascenso y descenso en verticales.', related: ['Barranquismo','Cave Diving','Canyoning'] },
  { id: 's109', cat: 'espeleologia', name: 'Espeleología Acuática', risk: 'extreme', emoji: '💧', desc: 'Exploración de cuevas inundadas parcial o totalmente. Alto riesgo y formación específica.', related: ['Cave Diving','Espeleología'] },
  { id: 's110', cat: 'espeleologia', name: 'Mine Exploring / Urbex Subterráneo', risk: 'high', emoji: '⛏️', desc: 'Exploración de minas y túneles abandonados. Riesgos de gases, derrumbes y orientación.', related: ['Espeleología','Urbex'] },
  { id: 's111', cat: 'espeleologia', name: 'Cuevas Marinas', risk: 'high', emoji: '🌊', desc: 'Exploración de cuevas costeras accesibles por mar. Combinación de buceo, apnea y escalada.', related: ['Coasteering','Espeleología','Buceo'] },

  // DEPORTES DE EQUIPO
  { id: 's112', cat: 'equipo', name: 'Fútbol', risk: 'low', emoji: '⚽', desc: 'El deporte más popular del planeta. De barrio a competición profesional.', related: ['Fútbol Sala','Fútbol Playa'] },
  { id: 's113', cat: 'equipo', name: 'Baloncesto', risk: 'low', emoji: '🏀', desc: 'Juego de canasta en pista. Streetball, 3x3 y competición.', related: ['Voleibol','Balonmano'] },
  { id: 's114', cat: 'equipo', name: 'Voleibol de Playa', risk: 'low', emoji: '🏐', desc: 'Voleibol en arena. Ideal en entornos costeros mediterráneos.', related: ['Baloncesto','Fútbol Playa'] },
  { id: 's115', cat: 'equipo', name: 'Rugby', risk: 'high', emoji: '🏉', desc: 'Deporte de contacto intenso. Union, League, Sevens y Tag.', related: ['Fútbol Americano','Balonmano'] },
  { id: 's116', cat: 'equipo', name: 'Ultimate Frisbee', risk: 'low', emoji: '🥏', desc: 'Deporte de disco volador. No-contact. Muy activo y con gran cultura comunitaria.', related: ['Voleibol','Fútbol'] },
  { id: 's117', cat: 'equipo', name: 'Handball / Balonmano Playa', risk: 'low', emoji: '🤾', desc: 'Balonmano en arena. Gran dinamismo y festividad en eventos.', related: ['Voleibol Playa','Fútbol Playa'] },

  // TIRO Y PRECISIÓN
  { id: 's118', cat: 'tiro', name: 'Tiro con Arco', risk: 'low', emoji: '🏹', desc: 'Tiro con arco olímpico, recurvo y compuesto. Precisión y concentración.', related: ['Biatlón','Airsoft'] },
  { id: 's119', cat: 'tiro', name: 'Tiro Olímpico', risk: 'low', emoji: '🎯', desc: 'Tiro con pistola y rifle en distancias reglamentadas. Precisión absoluta.', related: ['Biatlón'] },
  { id: 's120', cat: 'tiro', name: 'Paintball / Airsoft', risk: 'medium', emoji: '🔫', desc: 'Juegos tácticos de equipo. Comunicación, estrategia y trabajo grupal.', related: ['Laser Tag','Military Simulation'] },
  { id: 's121', cat: 'tiro', name: 'Golf', risk: 'low', emoji: '⛳', desc: 'Deporte de precisión en campo. Technique, paisaje y estrategia.', related: ['Disco Golf','Minigolf'] },
  { id: 's122', cat: 'tiro', name: 'Disco Golf', risk: 'low', emoji: '🥏', desc: 'Golf con discos de frisbee. Espacios naturales y accesible.', related: ['Golf','Frisbee'] },

  // RAQUETA
  { id: 's123', cat: 'raquet', name: 'Pádel', risk: 'low', emoji: '🎾', desc: 'El deporte de más rápido crecimiento en España. Técnica, táctica y diversión social.', related: ['Tenis','Squash'] },
  { id: 's124', cat: 'raquet', name: 'Tenis', risk: 'low', emoji: '🎾', desc: 'Deporte olímpico de raqueta. Individual o dobles en diversas superficies.', related: ['Pádel','Squash','Bádminton'] },
  { id: 's125', cat: 'raquet', name: 'Squash', risk: 'medium', emoji: '🎾', desc: 'Raqueta en sala cerrada. Alta intensidad cardiovascular en espacio pequeño.', related: ['Pádel','Tenis','Racquetball'] },
  { id: 's126', cat: 'raquet', name: 'Bádminton', risk: 'low', emoji: '🏸', desc: 'Red y volante. Rapidez de reacción y potencia.', related: ['Tenis','Squash'] },
  { id: 's127', cat: 'raquet', name: 'Pickleball', risk: 'low', emoji: '🎾', desc: 'Deporte de raqueta híbrido entre pádel y tenis. Tendencia mundial.', related: ['Pádel','Tenis'] },

  // HÍPICA
  { id: 's128', cat: 'hipico', name: 'Equitación de Salto', risk: 'high', emoji: '🐎', desc: 'Salto de obstáculos con caballo. Sincronía y técnica entre jinete y animal.', related: ['Doma','Trec'] },
  { id: 's129', cat: 'hipico', name: 'Doma Clásica', risk: 'low', emoji: '🐴', desc: 'Trabajo de movimientos del caballo con máxima precisión. Arte ecuestre.', related: ['Equitación','Horse Dancing'] },
  { id: 's130', cat: 'hipico', name: 'Endurance / Raid Ecuestre', risk: 'high', emoji: '🏇', desc: 'Carreras de largo recorrido a caballo. Resistencia y manejo del animal.', related: ['Trekking a Caballo','Equitación'] },

  // EXTREMO Y ADRENALINA
  { id: 's131', cat: 'extremo', name: 'Puenting / Bridge Jumping', risk: 'high', emoji: '🌉', desc: 'Salto desde puentes con cuerda elástica o estática. Mucha adrenalina.', related: ['Bungee Jumping','Cliff Jumping'] },
  { id: 's132', cat: 'extremo', name: 'Bungee Jumping', risk: 'medium', emoji: '⚡', desc: 'Salto con goma elástica. Experiencia de adrenalina con alto margen de seguridad.', related: ['Puenting','Salto Base'] },
  { id: 's133', cat: 'extremo', name: 'Tyrolesa / Tirolina', risk: 'low', emoji: '🧗', desc: 'Deslizamiento colgado de cable entre dos puntos. Velocidad y paisaje.', related: ['Via Ferrata','Rappel'] },
  { id: 's134', cat: 'extremo', name: 'Zorb / Rolling Ball', risk: 'low', emoji: '🔵', desc: 'Rodar cuesta abajo dentro de una gran esfera. Diversión y adrenalina controlada.', related: ['Actividades Extremo'] },
  { id: 's135', cat: 'extremo', name: 'Longboard Downhill', risk: 'high', emoji: '🛹', desc: 'Descenso en longboard por carreteras a velocidades altas. Curvas y frenadas técnicas.', related: ['Skateboard','MTB Downhill'] },
  { id: 's136', cat: 'extremo', name: 'Moto de Trial', risk: 'high', emoji: '🏍️', desc: 'Moto sin asiento con obstáculos técnicos. Equilibrio y precisión extremas.', related: ['Enduro','Motocross'] },

  // AGUAS BRAVAS Y KAYAK
  { id: 's137', cat: 'aguas', name: 'Kayak de Río / Aguas Bravas', risk: 'high', emoji: '🛶', desc: 'Rápidos y cataratas en kayak. Técnica de pala, lectura del agua y rescate.', related: ['Canoa','Rafting','Kayak Mar'] },
  { id: 's138', cat: 'aguas', name: 'Rafting', risk: 'medium', emoji: '🛶', desc: 'Descenso de rápidos en balsa grupal. Accesible con guía experimentado.', related: ['Kayak de Río','Canoa'] },
  { id: 's139', cat: 'aguas', name: 'Kayak de Mar', risk: 'medium', emoji: '🌊', desc: 'Navegación costera o de travesía en mar. Cuevas, corrientes y paisaje costero.', related: ['Kayak Río','Canoa','SUP'] },
  { id: 's140', cat: 'aguas', name: 'Canoa Polo', risk: 'medium', emoji: '🤽', desc: 'Waterpolo en canoa. Deporte de equipo en aguas tranquilas.', related: ['Kayak','Water Polo'] },
  { id: 's141', cat: 'aguas', name: 'Hidrospeed / Riverboogie', risk: 'high', emoji: '💨', desc: 'Descenso de rápidos con trineo y aletas. Muy cercano al agua y muy emocionante.', related: ['Rafting','Kayak Río'] },
  { id: 's142', cat: 'aguas', name: 'Gateball / Stand Up Paddle Aguas Bravas', risk: 'high', emoji: '🏄', desc: 'SUP en río y rápidos. Equilibrio extremo en aguas turbulentas.', related: ['SUP','Kayak Río'] },

  // VUELO Y DRONES
  { id: 's143', cat: 'vuelo', name: 'FPV Drone Racing', risk: 'medium', emoji: '🚁', desc: 'Pilotaje de drones de carreras con gafas FPV. Agilidad, velocidad y habilidad de piloto.', related: ['RC Planes','FPV Freestyle'] },
  { id: 's144', cat: 'vuelo', name: 'FPV Freestyle', risk: 'medium', emoji: '🎬', desc: 'Acrobacia con drones FPV para creación de contenido visual. Arte y habilidad.', related: ['FPV Racing','Fotografía Aérea'] },
  { id: 's145', cat: 'vuelo', name: 'Ultraligero / Autogiro', risk: 'high', emoji: '✈️', desc: 'Aviación ultraligera recreativa. Licencia específica y formación aeronáutica.', related: ['Parapente Motor','Avioneta'] },
  { id: 's146', cat: 'vuelo', name: 'Globo Aerostático', risk: 'medium', emoji: '🎈', desc: 'Vuelo en globo de aire caliente. Experiencia única de altitud y paisaje.', related: ['Parapente','Paracaidismo'] },

  // URBANO Y STREET
  { id: 's147', cat: 'urbano', name: 'Skateboarding', risk: 'medium', emoji: '🛹', desc: 'Trucos en tabla con ruedas. Street, park, vert, cruising. Cultura y libertad.', related: ['Longboard','BMX','Scooter'] },
  { id: 's148', cat: 'urbano', name: 'Parkour / Freerunning', risk: 'high', emoji: '🏙️', desc: 'Arte del movimiento por entorno urbano. Saltos, trepa y fluidez. Freerunning añade acrobacia.', related: ['Calistenia','Escalada','Atletismo'] },
  { id: 's149', cat: 'urbano', name: 'Scooter Freestyle', risk: 'medium', emoji: '🛵', desc: 'Trucos en patinete freestyle. Parques y street. Popular entre jóvenes.', related: ['Skateboard','BMX'] },
  { id: 's150', cat: 'urbano', name: 'Patinaje en Línea / Rollerblade', risk: 'medium', emoji: '⛸️', desc: 'Patinaje urbano, slalom y freestyle. Velocidad y estilo.', related: ['Skateboard','Hockey Línea'] },
  { id: 's151', cat: 'urbano', name: 'Street Dance / Breaking', risk: 'low', emoji: '🕺', desc: 'Danza urbana. Breaking, popping, locking. Deporte olímpico desde Paris 2024.', related: ['Danza','Calistenia'] },
  { id: 's152', cat: 'urbano', name: 'Urbex / Exploración Urbana', risk: 'high', emoji: '🏚️', desc: 'Exploración de espacios abandonados y zonas restringidas. Riesgos estructurales y legales.', related: ['Fotografía Urbana','Mine Exploring'] },

  // NATACIÓN Y AGUAS ABIERTAS
  { id: 's153', cat: 'natacion', name: 'Natación en Aguas Abiertas', risk: 'medium', emoji: '🏊', desc: 'Natación en mar, lago o río. Desde travesías cortas hasta maratones acuáticos de 10km+.', related: ['Triatlón','Apnea','Aguas Abiertas'] },
  { id: 's154', cat: 'natacion', name: 'Natación Sincronizada / Artística', risk: 'low', emoji: '🤽', desc: 'Trabajo coreografiado en agua. Arte, fuerza y coordinación.', related: ['Natación'] },
  { id: 's155', cat: 'natacion', name: 'Water Polo', risk: 'medium', emoji: '🤽', desc: 'Deporte de equipo en piscina. Alta intensidad y técnica nadando.', related: ['Natación','Canoa Polo'] },
  { id: 's156', cat: 'natacion', name: 'Salvamento y Socorrismo', risk: 'medium', emoji: '🛟', desc: 'Técnicas y competición de rescate acuático. Útil y apasionante.', related: ['Natación','Surf','Apnea'] },

  // MULTIAVENTURA
  { id: 's157', cat: 'aventura', name: 'Raid de Aventura', risk: 'high', emoji: '🧭', desc: 'Carreras multidisciplinares por equipos: orientación, kayak, MTB, senderismo. Varios días.', related: ['Trail Running','Kayak','MTB','Orientación'] },
  { id: 's158', cat: 'aventura', name: 'Expedición Fotográfica Extrema', risk: 'high', emoji: '📸', desc: 'Documentación visual de entornos extremos: cuevas, acantilados, altas cumbres.', related: ['FPV Drone','Espeleología','Alpinismo'] },
  { id: 's159', cat: 'aventura', name: 'Geocaching', risk: 'low', emoji: '📍', desc: 'Búsqueda de tesoros escondidos con GPS. Familiar y social.', related: ['Senderismo','Orientación'] },
  { id: 's160', cat: 'aventura', name: 'Escape Outdoor / Real Life Games', risk: 'low', emoji: '🎮', desc: 'Juegos de aventura en la naturaleza. Dinámicas de equipo y resolución de pruebas.', related: ['Orientación','Multiaventura'] },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: MATCH CARDS
   ═══════════════════════════════════════════════════════════ */
const MATCH_CARDS = [
  {
    id: 'm1', name: 'Marina Acantilado', role: 'Exploradora Marina · Costa Med',
    emoji: '🌊', gradient: 'linear-gradient(135deg,#0d1f3c,#1a0d2e)',
    sports: ['Cliff Jumping','Apnea','Coasteering','Psicobloc'],
    level: 'Avanzado', env: 'Mar y Costa Rocosa', dist: '45 km',
    objective: 'Compañera de spots', badges: ['🌊 Marino','✅ Verificada','⚡ Extrema'],
    compat: 94
  },
  {
    id: 'm2', name: 'Iker Barranco', role: 'Instructor de Barranquismo · Sierra Nevada',
    emoji: '🏔️', gradient: 'linear-gradient(135deg,#1a2830,#0d1f1a)',
    sports: ['Barranquismo Técnico','Rappel','Escalada','Senderismo'],
    level: 'Experto', env: 'Montaña, Cañones', dist: '120 km',
    objective: 'Compartir salidas', badges: ['📋 Certificado','✅ Instructor','🧗 Vertical'],
    compat: 87
  },
  {
    id: 'm3', name: 'Lola Vuelo Libre', role: 'Piloto parapente · Air Sports Crew',
    emoji: '🪂', gradient: 'linear-gradient(135deg,#1a1030,#0d1828)',
    sports: ['Parapente','Parapente Motor','Speed Riding','Paracaidismo'],
    level: 'Avanzado', env: 'Cielo, Montaña, Costa',  dist: '30 km',
    objective: 'Vuelos conjuntos', badges: ['✈️ Piloto','🌟 Instructora','🪂 Aéreo'],
    compat: 91
  },
  {
    id: 'm4', name: 'Tomás Profundidad', role: 'Instructor Apnea · Almería',
    emoji: '🤿', gradient: 'linear-gradient(135deg,#071830,#0d1025)',
    sports: ['Apnea','Freediving','Pesca Submarina','Buceo Técnico'],
    level: 'Experto', env: 'Mar, Cuevas Submarinas', dist: '60 km',
    objective: 'Sesiones de apnea', badges: ['🤿 Apneísta','📋 Instructor','🏆 Record Regional'],
    compat: 96
  },
  {
    id: 'm5', name: 'Ana Vertical', role: 'Escaladora Deportiva · Alicante',
    emoji: '🧗', gradient: 'linear-gradient(135deg,#201010,#1a0d20)',
    sports: ['Escalada Deportiva','Boulder','Via Ferrata','Psicobloc'],
    level: 'Alto', env: 'Roca, Indoor, Playa', dist: '55 km',
    objective: 'Quedadas en roca', badges: ['🧗 Escaladora','⚡ Deportiva','🏆 Competidora'],
    compat: 89
  },
  {
    id: 'm6', name: 'Sergio Trail', role: 'Ultra Corredor · Andalucía',
    emoji: '🏃', gradient: 'linear-gradient(135deg,#0d1f10,#101d0d)',
    sports: ['Ultra Trail','Trail Running','Skyrunning','Carrera de Montaña'],
    level: 'Elite', env: 'Montaña, Sierra, Bosque', dist: '200 km',
    objective: 'Entrenamientos y carreras', badges: ['🏃 Corredor','🏔️ Skyrunner','🏅 Finisher 100M'],
    compat: 82
  },
  {
    id: 'm7', name: 'Rafa Cueva', role: 'Espeleólogo · Cave Explorers',
    emoji: '🕳️', gradient: 'linear-gradient(135deg,#0d0d1f,#100d20)',
    sports: ['Espeleología','Barranquismo','Cave Diving','Rappel'],
    level: 'Técnico', env: 'Cuevas, Subterráneo, Agua', dist: '40 km',
    objective: 'Explorar sistemas nuevos', badges: ['🕳️ Espeleólogo','🏔️ Explorador','📋 Certificado'],
    compat: 93
  },
  {
    id: 'm8', name: 'Paula Kitesur', role: 'Instructora Kitesurf · Tarifa',
    emoji: '🪁', gradient: 'linear-gradient(135deg,#0d1f3c,#1f1a0d)',
    sports: ['Kitesurf','Kitesurf Freestyle','Snowkite','Windsurf'],
    level: 'Expert', env: 'Mar, Viento, Playa', dist: '180 km',
    objective: 'Viajes kite y clases', badges: ['🪁 Kitesurfista','✅ Instructora','🌊 Watersports'],
    compat: 85
  },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: FEED POSTS
   ═══════════════════════════════════════════════════════════ */
const FEED_POSTS = [
  {
    id: 'p1', user: 'Usuario NOMADX Demo', role: 'Perfil demo · Plataforma', emoji: '🧭',
    time: 'hace 2h', mediaEmoji: '🌅', mediaBg: 'linear-gradient(135deg,#ff5e1a22,#00d4ff22)',
    location: '📍 Spot costero demo', type: 'aventura',
    text: 'Salida de amanecer en la Cala Cerrada. Aguas completamente planas, visibilidad excepcional. 3 horas de apnea y después cliff jumping desde el Rincón del Fraile. Esto es lo que busco cada mañana. 🌊',
    sports: ['Apnea','Cliff Jumping'], likes: 287, comments: 34
  },
  {
    id: 'p2', user: 'Marina Acantilado', role: 'Exploradora Marina', emoji: '🌊',
    time: 'hace 4h', mediaEmoji: '🧗', mediaBg: 'linear-gradient(135deg,#0d1f3c,#1a0d2e)',
    location: '📍 Cap Norfeu, Costa Brava', type: 'tecnica',
    text: 'Técnica de entrada al agua desde acantilado: siempre chequear profundidad desde el agua misma, no desde arriba. Ver el fondo no garantiza nada. Hoy hemos tenido susto por corriente inesperada. La seguridad siempre primero. 🔴 Nivel semáforo rojo hoy.',
    sports: ['Coasteering','Cliff Jumping'], likes: 412, comments: 89
  },
  {
    id: 'p3', user: 'Iker Barranco', role: 'Instructor Barranquismo · FEDME', emoji: '🏔️',
    time: 'hace 6h', mediaEmoji: '💧', mediaBg: 'linear-gradient(135deg,#1a2830,#0a1520)',
    location: '📍 Barranco del Poqueira, Granada', type: 'spot',
    text: '¡Barranco del Poqueira en condiciones perfectas! Nivel medio-alto, requiere conocer rappels bajo chorro de agua. Lo hicimos con grupo de 6 y fue espectacular. Os dejo las condiciones: flujo normal, sin crecidas previstas. Verde.',
    sports: ['Barranquismo Técnico','Rappel'], likes: 156, comments: 21
  },
  {
    id: 'p4', user: 'Lola Vuelo Libre', role: 'Piloto Parapente', emoji: '🪂',
    time: 'hace 8h', mediaEmoji: '🌄', mediaBg: 'linear-gradient(135deg,#1a0d30,#0d0820)',
    location: '📍 Piedra Paloma, Tarifa', type: 'aventura',
    text: 'Cross country de Tarifa a Zahara: 47km volando. Térmica brutal desde las 12h. Conecté 4 termales seguidas a más de 2000m. Sensación de libertad absoluta. Parapente es terapia, es meditación y adrenalina al mismo tiempo. 🪂',
    sports: ['Parapente'], likes: 334, comments: 67
  },
  {
    id: 'p5', user: 'Tomás Profundidad', role: 'Instructor Apnea AIDA4', emoji: '🤿',
    time: 'hace 12h', mediaEmoji: '🐟', mediaBg: 'linear-gradient(135deg,#071830,#040d20)',
    location: '📍 Cabo de Gata, Almería', type: 'tecnica',
    text: 'Hoy hemos trabajado la curva de disociación en CWT a 30m. Cuatro apneístas con apneas limpias y sin contracciones prematuras gracias al trabajo de CO2. Si quieres bajar profundo, tienes que entrenar la tolerancia al CO2 antes que la apnea estática.',
    sports: ['Apnea','Freediving'], likes: 198, comments: 43
  },
  {
    id: 'p6', user: 'Sergio Trail', role: 'Ultra Corredor', emoji: '🏃',
    time: 'hace 15h', mediaEmoji: '⛰️', mediaBg: 'linear-gradient(135deg,#0d1f10,#080d08)',
    location: '📍 Sierra de Gredos', type: 'reto',
    text: 'RETO COMPLETADO: Travesía completa de Gredos en 18h22min. 65km, 4800m D+. Solo. Nocturna desde las 3am. El cuerpo aguantó pero la mente tuvo momentos de crisis en el km 50. Ahí es donde ganas o pierdes los ultras. 💪',
    sports: ['Ultra Trail','Skyrunning'], likes: 567, comments: 112
  },
  {
    id: 'p7', user: 'Ana Vertical', role: 'Escaladora · RFEDI', emoji: '🧗',
    time: 'hace 1d', mediaEmoji: '🪨', mediaBg: 'linear-gradient(135deg,#200010,#100010)',
    location: '📍 Peñon de Ifach, Calpe', type: 'spot',
    text: 'El Peñón de Ifach es imprescindible en el Mediterráneo. Ruta normal en 3h, multitud de vías de todos los grados. Hoy abrimos una variante en el sector Este con exposición al mar preciosa. Temperatura de la roca: perfecta en esta época.',
    sports: ['Escalada Deportiva','Escalada Tradicional'], likes: 241, comments: 38
  },
  {
    id: 'p8', user: 'Paula Kitesur', role: 'Instructora Kitesurf · IKO', emoji: '🪁',
    time: 'hace 1d', mediaEmoji: '💨', mediaBg: 'linear-gradient(135deg,#0d1f3c,#1f1508)',
    location: '📍 Playa de Los Lances, Tarifa', type: 'evento',
    text: '¡Próximo sábado taller avanzado de kitesurf freestyle! Plazas limitadas a 8 personas. Requisito: nivel medio-avanzado, capaz de waterstart y control básico. 6 horas de sesión con vídeo análisis. Si te interesa comenta o escríbeme directamente. 🪁',
    sports: ['Kitesurf','Kitesurf Freestyle'], likes: 189, comments: 56
  },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: TRIBUS
   ═══════════════════════════════════════════════════════════ */
const TRIBUS = [
  {
    id: 't1', name: 'Mar Salvaje', icon: '🌊', bgColor: '#00d4ff20',
    desc: 'La tribu de quienes viven entre el agua y la roca. Cliff jumping, apnea, coasteering, psicobloc, buceo. El Mediterráneo como hogar.',
    sports: ['Cliff Jumping','Apnea','Coasteering','Psicobloc'],
    members: 2847, level: 'Avanzado-Extremo',
    nextEvent: 'Exploración Cuevas Marinas · 3 mayo'
  },
  {
    id: 't2', name: 'Escaladores del Sur', icon: '🧗', bgColor: '#ff5e1a20',
    desc: 'Escalada en todas sus formas por el mediterráneo. Roca caliza, conglomerado, granito. Deportiva, tradicional, boulder, psicobloc.',
    sports: ['Escalada Deportiva','Boulder','Psicobloc','Via Ferrata'],
    members: 1923, level: 'Todos los niveles',
    nextEvent: 'Proyecto Multipitch · Peñon de Ifach · 10 mayo'
  },
  {
    id: 't3', name: 'Aire y Parapente', icon: '🪂', bgColor: '#7c3aed20',
    desc: 'Comunidad del vuelo libre. Parapente, ala delta, speedriding, paramotoring. Del vuelo tranquilo al acrobático.',
    sports: ['Parapente','Parapente Motor','Ala Delta','Speed Riding'],
    members: 1156, level: 'Iniciación a Experto',
    nextEvent: 'Weekend Air Sports · 17 mayo'
  },
  {
    id: 't4', name: 'Barrancos y Cuevas', icon: '🕳️', bgColor: '#1aff8c15',
    desc: 'Los que buscan lo que no se ve. Barranquismo técnico, espeleología, canyoning. La montaña por dentro.',
    sports: ['Barranquismo','Espeleología','Rappel','Cave Diving'],
    members: 892, level: 'Técnico',
    nextEvent: 'Barrancos Inéditos Sierra Espuña · 24 mayo'
  },
  {
    id: 't5', name: 'Ultra Runners', icon: '🏃', bgColor: '#1aff8c20',
    desc: 'Los que corren más lejos y más alto. Trail, ultra, skyrunning, fastpacking. La montaña como deporte.',
    sports: ['Ultra Trail','Trail Running','Skyrunning','Fastpacking'],
    members: 3421, level: 'Competitivo',
    nextEvent: 'Salida Sierra Bermeja · 4 mayo'
  },
  {
    id: 't6', name: 'Tribu del Viento', icon: '💨', bgColor: '#00d4ff15',
    desc: 'Kitesurf, windsurf, kite nieve. Donde hay viento, hay tribu. Tarifa, el Mediterráneo y más allá.',
    sports: ['Kitesurf','Windsurf','Snowkite','Kitesurf Freestyle'],
    members: 1678, level: 'Medio-Avanzado',
    nextEvent: 'Sesión Kitesurf La Manga · 8 mayo'
  },
  {
    id: 't7', name: 'Apneístas Mediterráneo', icon: '🤿', bgColor: '#071830cc',
    desc: 'La comunidad del pulmón libre del mediterráneo. Apnea, freediving, pesca submarina, natación en aguas abiertas.',
    sports: ['Apnea','Freediving','Pesca Submarina','Natación Aguas Abiertas'],
    members: 1234, level: 'Técnico',
    nextEvent: 'Clinic Apnea Cabo de Gata · 15 mayo'
  },
  {
    id: 't8', name: 'MTB Riders', icon: '🚵', bgColor: '#ff5e1a15',
    desc: 'Bicicleta de montaña en todas sus disciplinas. Enduro, DH, XC, gravel. Senderos, tierra y adrenalina rodante.',
    sports: ['MTB Enduro','MTB Downhill','Gravel','MTB XC'],
    members: 2156, level: 'Todos los niveles',
    nextEvent: 'Ruta Enduro Sierra de la Pila · 11 mayo'
  },
  {
    id: 't9', name: 'BASE & Extremos', icon: '⚡', bgColor: '#ef444420',
    desc: 'Solo para los que ya han cruzado el umbral. BASE, wingsuit, free solo. Comunidad cerrada y responsable.',
    sports: ['BASE Jump','Wingsuit','Free Solo','Alpinismo Técnico'],
    members: 234, level: 'Solo expertos verificados',
    nextEvent: 'Sólo acceso verificado'
  },
  {
    id: 't10', name: 'Surfers del Atlántico', icon: '🏄', bgColor: '#00d4ff18',
    desc: 'Surf, bodyboard, longboard, foil. Las olas como estilo de vida. Galicia al Algarve.',
    sports: ['Surf','Bodyboard','Longboard','Foil Surfing'],
    members: 4123, level: 'Todos los niveles',
    nextEvent: 'Swell Cantábrico · 5 mayo'
  },
  {
    id: 't11', name: 'Multiaventura Global', icon: '🧭', bgColor: '#ff5e1a18',
    desc: 'Comunidad demo para deportistas multiactividad: mar, roca, montaña, aire y exploración responsable.',
    sports: ['Multiaventura','Cliff Jumping','Apnea','Parapente','Espeleología'],
    members: 567, level: 'Todos bienvenidos',
    nextEvent: 'Expedición multiaventura demo · 22 mayo'
  },
  {
    id: 't12', name: 'Escalada en Hielo', icon: '🧊', bgColor: '#00d4ff10',
    desc: 'Ice climbing, alpinismo técnico, esquí de montaña extremo. La verticalidad helada.',
    sports: ['Ice Climbing','Alpinismo Técnico','Esquí de Montaña','Mixed Climbing'],
    members: 389, level: 'Técnico avanzado',
    nextEvent: 'Cascadas de Hielo Pirineos · 20 mayo'
  },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: SPOTS
   ═══════════════════════════════════════════════════════════ */
const SPOTS = [
  {
    id: 'sp1', name: 'Cala Cerrada', icon: '🌊', env: 'Costa Rocosa · Mar',
    sports: ['Cliff Jumping','Apnea','Coasteering','Snorkel'],
    level: 'Avanzado', risk: 'rojo', season: 'Mayo–Octubre',
    requirements: 'Conocimiento del spot, buen nado, evaluar condiciones',
    desc: 'Acantilados demo con zonas de salto, cuevas marinas y acceso variable según condiciones. Requiere evaluación del spot y respeto ambiental.'
  },
  {
    id: 'sp2', name: 'Barranco del Poqueira', icon: '💧', env: 'Montaña · Cañón',
    sports: ['Barranquismo Técnico','Rappel','Natación'],
    level: 'Técnico', risk: 'rojo', season: 'Junio–Septiembre',
    requirements: 'Formación en barranquismo, material técnico, guía recomendado',
    desc: 'Uno de los barrancos más espectaculares de Sierra Nevada. Cascadas, pozas y rappeles en paredes de granito. Acceso desde Capileira.'
  },
  {
    id: 'sp3', name: 'Peñon de Ifach', icon: '🧗', env: 'Roca · Costa',
    sports: ['Escalada Deportiva','Escalada Tradicional','Senderismo'],
    level: 'Todos los niveles', risk: 'amarillo', season: 'Todo el año',
    requirements: 'Equipo de escalada o guía para rutas técnicas',
    desc: 'Monolito calizo de 332m sobre el Mediterráneo. Vías de escalada desde iniciación hasta grado 8b. Ruta de senderismo accesible al summiter.'
  },
  {
    id: 'sp4', name: 'Piedra Paloma, Tarifa', icon: '🪂', env: 'Costa · Viento',
    sports: ['Kitesurf','Kitesurf Freestyle','Windsurf','Parapente'],
    level: 'Medio-Avanzado', risk: 'amarillo', season: 'Octubre–Junio',
    requirements: 'Control básico de cometa, conocimiento de corrientes',
    desc: 'Spot de viento legendario del Estrecho de Gibraltar. Levante y Poniente constante. Aguas planas y ondas según condiciones. Escuelas certificadas disponibles.'
  },
  {
    id: 'sp5', name: 'Parque de Escalada Chulilla', icon: '🪨', env: 'Roca · Río',
    sports: ['Escalada Deportiva','Boulder','Rapel'],
    level: 'Todos', risk: 'verde', season: 'Todo el año',
    requirements: 'Equipo personal o alquiler en zona',
    desc: 'Más de 500 vías de escalada en tufas y conglomerado junto al río Turia. Destino europeo de referencia. Camping y alojamientos cercanos.'
  },
  {
    id: 'sp6', name: 'Cueva marina técnica', icon: '🕳️', env: 'Subterráneo · Mar',
    sports: ['Espeleología','Buceo','Apnea'],
    level: 'Técnico', risk: 'negro', season: 'Todo el año',
    requirements: 'Formación espeleología acuática, certificado de buceo en cuevas',
    desc: 'Sistema de cuevas inundadas en costa rocosa. Acceso únicamente con certificación cave diving o espeleología subacuática.'
  },
  {
    id: 'sp7', name: 'Sierra de Gredos', icon: '⛰️', env: 'Alta Montaña',
    sports: ['Alpinismo','Trail Running','Escalada Tradicional','Senderismo'],
    level: 'Medio-Avanzado', risk: 'amarillo', season: 'Junio–Octubre',
    requirements: 'Orientación, autosuficiencia, equipo de montaña',
    desc: 'Macizo granítico del Sistema Central. Circos glaciares, lagunas de alta montaña y rutas de escalada clásica. Refugio CAI disponible.'
  },
  {
    id: 'sp8', name: 'Playa Los Lances, Tarifa', icon: '💨', env: 'Playa · Viento',
    sports: ['Kitesurf','Windsurf','Surf','Parapente'],
    level: 'Todos', risk: 'verde', season: 'Todo el año',
    requirements: 'Precaución con zonas de bañistas',
    desc: 'Playa de 7km con viento constante. Zona de práctica oficial con separación de usuarios. Escuelas certificadas en temporada.'
  },
  {
    id: 'sp9', name: 'Valle de Tena, Pirineos', icon: '⛷️', env: 'Nieve · Alta Montaña',
    sports: ['Esquí Freeride','Snowboard','Alpinismo'],
    level: 'Avanzado', risk: 'rojo', season: 'Diciembre–Abril',
    requirements: 'Formación en gestión de aludes, ARVA recomendado',
    desc: 'Zona off-piste de referencia del Pirineo Aragonés. Canales y couloirs de alta exposición. Temporada variable según innivación.'
  },
  {
    id: 'sp10', name: 'Costa de Los Cobatillas', icon: '🤿', env: 'Mar · Fondo',
    sports: ['Apnea','Snorkel','Pesca Submarina','Natación Aguas Abiertas'],
    level: 'Todos', risk: 'verde', season: 'Abril–Octubre',
    requirements: 'Buen nado básico',
    desc: 'Costa rocosa demo con aguas claras, fauna marina y profundidades variables. Ideal como ejemplo de spot para apnea y buceo recreativo.'
  },
  {
    id: 'sp11', name: 'Cataratas de Ordesa', icon: '🌊', env: 'Río · Cañón',
    sports: ['Barranquismo','Senderismo','Fotografía Natural'],
    level: 'Medio', risk: 'amarillo', season: 'Junio–Septiembre',
    requirements: 'Equipo de barranquismo para descenso técnico',
    desc: 'El Cañon de Ordesa alberga barrancos técnicos espectaculares. La Garganta del Sorrosal y la Faixa del Mallo son imprescindibles.'
  },
  {
    id: 'sp12', name: 'Nazaré, Portugal', icon: '🌊', env: 'Océano · Big Wave',
    sports: ['Big Wave Surfing','Bodyboard','Fotografía Marina'],
    level: 'Solo Expertos', risk: 'negro', season: 'Octubre–Marzo',
    requirements: 'Solo surfistas de big wave profesionales, equipos de seguridad acuática',
    desc: 'La ola más grande del mundo documentada. 28m. Solo para surfistas de élite mundial con jet ski de apoyo y equipos de rescate.'
  },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: EVENTOS
   ═══════════════════════════════════════════════════════════ */
const EVENTS = [
  {
    id: 'e1', title: 'Salida Cliff Jumping · Cala Cerrada',
    type: 'aventura', date: '4 Mayo · 9:00', location: 'Spot costero demo',
    sports: ['Cliff Jumping','Apnea','Coasteering'],
    level: 'Avanzado', cupo: '8 personas · 3 libres',
    price: 'Gratis', organizer: 'Comunidad NOMADX',
    verified: true, semaforo: 'verde'
  },
  {
    id: 'e2', title: 'Curso Barranquismo Iniciación',
    type: 'formacion', date: '10-11 Mayo · Fin de semana',
    location: 'Sierra de Aracena, Huelva',
    sports: ['Barranquismo','Rappel'],
    level: 'Iniciación', cupo: '12 personas · 4 libres',
    price: '85€', organizer: 'Iker Barranco',
    verified: true, semaforo: 'amarillo'
  },
  {
    id: 'e3', title: 'Expedición Fotográfica Submarina',
    type: 'expedicion', date: '15 Mayo · 8:00',
    location: 'Cabo de Gata, Almería',
    sports: ['Apnea','Fotografía Submarina','Snorkel'],
    level: 'Medio', cupo: '6 personas · 2 libres',
    price: '40€', organizer: 'Tomás Profundidad',
    verified: true, semaforo: 'verde'
  },
  {
    id: 'e4', title: 'Taller Avanzado Kitesurf Freestyle',
    type: 'taller', date: '17 Mayo · 10:00',
    location: 'Tarifa, Cádiz',
    sports: ['Kitesurf','Kitesurf Freestyle'],
    level: 'Avanzado', cupo: '8 personas · 5 libres',
    price: '120€', organizer: 'Paula Kitesur',
    verified: true, semaforo: 'amarillo'
  },
  {
    id: 'e5', title: 'NOMADX Trail · Costa natural demo',
    type: 'carrera', date: '22 Mayo · 7:30',
    location: 'Costa rocosa verificada',
    sports: ['Trail Running','Senderismo'],
    level: 'Todos los niveles', cupo: '50 personas · 18 libres',
    price: '15€', organizer: 'Comunidad NOMADX',
    verified: true, semaforo: 'verde'
  },
  {
    id: 'e6', title: 'Clínica de Apnea Estática y Dinámica',
    type: 'clinica', date: '25 Mayo · 9:00',
    location: 'Centro acuático demo',
    sports: ['Apnea','Freediving'],
    level: 'Básico-Intermedio', cupo: '10 personas · 6 libres',
    price: '65€', organizer: 'Tomás Profundidad',
    verified: true, semaforo: 'amarillo'
  },
  {
    id: 'e7', title: 'Multi-Aventura Integral · 2 días',
    type: 'expedicion', date: '31 Mayo–1 Junio',
    location: 'Costa y montaña · demo',
    sports: ['Cliff Jumping','Barranquismo','Escalada','Trail Running'],
    level: 'Avanzado', cupo: '10 personas · 3 libres',
    price: '95€', organizer: 'Comunidad NOMADX',
    verified: true, semaforo: 'amarillo'
  },
  {
    id: 'e8', title: 'Proyecto Big Wall · Peñon de Ifach',
    type: 'proyecto', date: '7-8 Junio',
    location: 'Calpe, Alicante',
    sports: ['Escalada Tradicional','Big Wall','Rappel'],
    level: 'Experto', cupo: '4 personas · 1 libre',
    price: '50€', organizer: 'Ana Vertical',
    verified: true, semaforo: 'rojo'
  },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: INSIGNIAS Y VERIFICACIONES
   ═══════════════════════════════════════════════════════════ */
const VERIFICACIONES = [
  { num: '01', name: 'Identidad Verificada', desc: 'Documento de identidad confirmado por el equipo NOMADX.' },
  { num: '02', name: 'Deportista Real', desc: 'Actividad deportiva verificada por la comunidad con al menos 10 avales.' },
  { num: '03', name: 'Instructor Certificado', desc: 'Titulación docente oficial acreditada para su disciplina.' },
  { num: '04', name: 'Guía de Naturaleza', desc: 'Titulación oficial de guía en el medio natural reconocida.' },
  { num: '05', name: 'Formación en Seguridad', desc: 'Primeros auxilios, rescate o formación técnica de seguridad acreditada.' },
  { num: '06', name: 'Centro Certificado', desc: 'Empresa o escuela con licencias y seguros verificados.' },
  { num: '07', name: 'Embajador NOMADX', desc: 'Representante oficial de la comunidad en su región.' },
  { num: '08', name: 'Spot Verificado', desc: 'Spot comprobado in situ por miembros verificados.' },
  { num: '09', name: 'Experiencia Documentada', desc: '+5 años de práctica activa con historial en la plataforma.' },
  { num: '10', name: 'Creador de Contenido', desc: 'Productor de contenido de calidad para la comunidad NOMADX.' },
];

const BADGES_DATA = [
  { cat: 'rol', icon: '🧭', name: 'Explorador Original', desc: 'Miembro impulsor de la comunidad' },
  { cat: 'rol', icon: '🏆', name: 'Fundador', desc: 'Miembro fundador NOMADX' },
  { cat: 'rol', icon: '🎬', name: 'Creador Extremo', desc: 'Creador de contenido activo' },
  { cat: 'rol', icon: '📋', name: 'Instructor Activo', desc: 'Más de 50 formaciones impartidas' },
  { cat: 'rol', icon: '🌟', name: 'Guía Certificado', desc: 'Guía del Medio Natural Titulado' },
  { cat: 'entorno', icon: '🌊', name: 'Explorador Marino', desc: 'Especialista en entorno costero y marino' },
  { cat: 'entorno', icon: '🏔️', name: 'Verticalista', desc: 'Maestro de entornos verticales' },
  { cat: 'entorno', icon: '🕳️', name: 'Subterráneo', desc: 'Explorador de cuevas y subterráneo' },
  { cat: 'entorno', icon: '🌄', name: 'Montañero', desc: 'Especialista en alta montaña' },
  { cat: 'entorno', icon: '✈️', name: 'Piloto', desc: 'Deportes aéreos y vuelo libre' },
  { cat: 'experiencia', icon: '🔥', name: 'Extremo Verificado', desc: '+10 actividades de nivel negro completadas' },
  { cat: 'experiencia', icon: '🔄', name: 'Multiactividad', desc: 'Practica más de 10 deportes distintos' },
  { cat: 'experiencia', icon: '📍', name: 'Explorador de Spots', desc: '+20 spots documentados' },
  { cat: 'experiencia', icon: '🤝', name: 'Conexiones', desc: '+100 matches realizados' },
  { cat: 'seguridad', icon: '🛡️', name: 'Safety First', desc: 'Formación en seguridad y rescate' },
  { cat: 'seguridad', icon: '🚑', name: 'Primeros Auxilios', desc: 'Titulación en primeros auxilios activa' },
  { cat: 'progresion', icon: '📈', name: 'En Progreso', desc: 'Mejora continua documentada' },
  { cat: 'progresion', icon: '🎯', name: 'Reto Completado', desc: 'Objetivos superados en NOMADX' },
  { cat: 'hitos', icon: '⭐', name: 'Primera Vez', desc: 'Primera actividad registrada en NOMADX' },
  { cat: 'hitos', icon: '💯', name: '100 Aventuras', desc: '100 salidas registradas en la plataforma' },
];

const REPUTACION_BARS = [
  { label: 'Fiabilidad', val: 92 },
  { label: 'Seguridad', val: 88 },
  { label: 'Compañerismo', val: 95 },
  { label: 'Nivel técnico', val: 90 },
  { label: 'Contenido', val: 84 },
  { label: 'Comunidad', val: 87 },
];

/* ═══════════════════════════════════════════════════════════
   DATOS: PRO TYPES
   ═══════════════════════════════════════════════════════════ */
const PRO_TYPES = [
  { icon: '🧭', name: 'Guía del Medio Natural', desc: 'Profesionales titulados que ofrecen guiados, expediciones y actividades en entornos naturales con certificación oficial.' },
  { icon: '📋', name: 'Instructor / Monitor Deportivo', desc: 'Titulados en sus disciplinas para impartir clases, cursos y formaciones regladas.' },
  { icon: '🏋️', name: 'Entrenador Personal', desc: 'Preparadores físicos especializados en deportes de aventura, resistencia y fuerza.' },
  { icon: '🏢', name: 'Centro Deportivo / Escuela', desc: 'Empresas de actividades, escuelas de surf, escalada, buceo y multiaventura.' },
  { icon: '🎬', name: 'Creador de Contenido Extremo', desc: 'Fotógrafos, videógrafos y creadores de contenido especializados en deportes de aventura.' },
  { icon: '🏥', name: 'Especialista en Rescate', desc: 'Técnicos de rescate en montaña, agua o altura. Profesionales de seguridad en actividades extremas.' },
];

/* ═══════════════════════════════════════════════════════════
   ESTADO GLOBAL
   ═══════════════════════════════════════════════════════════ */
const STATE = {
  currentMatchIdx: 0,
  counters: { vistos: 24, matches: 8, guardados: 5 },
  savedMatchIds: new Set(JSON.parse(localStorage.getItem('nmx_matches_saved') || '[]')),
  connectedMatchIds: new Set(JSON.parse(localStorage.getItem('nmx_matches_connected') || '[]')),
  generatedMatchCount: Number(localStorage.getItem('nmx_generated_match_count') || '0'),
  savedSports: new Set(JSON.parse(localStorage.getItem('nmx_sports_saved') || '[]')),
  savedSpots: new Set(JSON.parse(localStorage.getItem('nmx_spots_saved') || '[]')),
  savedPosts: new Set(JSON.parse(localStorage.getItem('nmx_posts_saved') || '[]')),
  savedPlans: new Set(JSON.parse(localStorage.getItem('nmx_plans_saved') || '[]')),
  joinedTribus: new Set(JSON.parse(localStorage.getItem('nmx_tribus_joined') || '[]')),
  joinedEvents: new Set(JSON.parse(localStorage.getItem('nmx_events_joined') || '[]')),
  feedFilter: 'all',
  catalogFilter: 'all',
  catalogSearch: '',
  catalogEnvironment: 'all',
  catalogRisk: 'all',
  catalogType: 'all',
  catalogCapability: 'all',
  catalogVisible: 36,
  catalogFull: false,
  currentSpot: null,
};

/* ═══════════════════════════════════════════════════════════
   UTILIDADES
   ═══════════════════════════════════════════════════════════ */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

function closeSportModal() {
  const modal = document.getElementById('sport-modal');
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function saveState(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

function setStoredNumber(key, value) {
  localStorage.setItem(key, String(value));
}

function escapeHTML(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function badgeList(items = [], className = 'badge-white') {
  return items.filter(Boolean).map(item => `<span class="badge ${className}">${escapeHTML(item)}</span>`).join('');
}

function openDemoPanel(title, bodyHTML, actionsHTML = '') {
  const modal = document.getElementById('sport-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;
  content.innerHTML = `
    <div class="modal-sport-name">${title}</div>
    <div class="modal-demo-body">${bodyHTML}</div>
    ${actionsHTML ? `<div class="modal-action-row">${actionsHTML}</div>` : ''}
  `;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close')?.focus();
}

const MATCH_SEED_PROFILES = [
  ['Marina Trail','Deportista outdoor','Apnea|Coasteering|Trail running','Psicobloc|Snorkel costero','Mar y costa','Avanzado','rojo','Fines de semana','Costa mediterránea','Safety First|Sea Explorer','Sea Tribe|Coasteering World','Plan de coasteering','Busca gente constante para planes de costa, agua y roca.'],
  ['Vertical Crew','Grupo deportivo','Escalada|Via ferrata|Rappel','Highline|Boulder','Roca y vertical','Avanzado','rojo','Tardes y sábados','Modo global','Vertical Mind|Team Builder','Vertical Zone|Pro Guides Network','Sesión de escalada','Crew para roca, ferratas y planes con checklist claro.'],
  ['MTB Flow','Comunidad MTB','MTB|Enduro MTB|Gravel','Bikepacking|Downhill','Montaña y ruedas','Medio-alto','amarillo','Domingos','Radio 80 km','Mountain Soul|Endurance Beast','MTB Riders|Trail & Mountain','Quedada MTB','Ruedas, senderos y flow sin postureo.'],
  ['Outdoor Runner','Perfil runner','Trail running|Fast hiking|Senderismo','Orientación|Fotografía de naturaleza','Montaña','Intermedio','amarillo','Mañanas','Modo global','Trail Starter|Nature Respect','Trail & Mountain|Trail Night Club','Salida trail costera','Perfil para entrenos progresivos y rutas con buen ritmo.'],
  ['Freedive Club','Club deportivo','Apnea|Freediving|Snorkel costero','Buceo recreativo|Fotografía submarina','Mar','Técnico','rojo','Viernes y domingo','Costa','Water Spirit|Safety First','Freediving Circle|Sea Tribe','Clinic de apnea','Club pequeño para apnea recreativa y cultura de compañero.'],
  ['Climbing Partner','Partner deportivo','Escalada|Búlder|Via ferrata','Rápel|Psicobloc','Roca','Intermedio','rojo','Entre semana','Modo global','Vertical Mind|Technical Progress','Vertical Zone','Sesión indoor + roca','Busca compañero para progresar sin saltarse pasos.'],
  ['Adventure Family','Grupo familiar','Senderismo|Kayak recreativo|Snorkel','Geocaching|Yoga outdoor','Naturaleza','Iniciación','verde','Fines de semana','Radio 40 km','First Adventure|Nature Respect','Adventure Families|Beginner Friendly Outdoor','Multiaventura familiar','Familias que quieren planes bonitos, seguros y sencillos.'],
  ['Pro Guide Verified','Profesional verificado','Barranquismo|Via ferrata|Senderismo','Rápel|Seguridad outdoor','Montaña y barranco','Profesional','rojo','Calendario público','Modo global','Pro verificado|Safety First','Pro Guides Network|Vertical Rescue Mindset','Plan de vía ferrata','Guía con enfoque técnico, requisitos claros y reputación visible.'],
  ['Air Sports Crew','Crew aéreo','Parapente|Paramotor|Ala delta','Speed flying|Túnel de viento','Aire','Avanzado','rojo','Ventanas de meteo','Modo global','Air Explorer|Safety First','Air Sports|Paragliding Network','Ventana de vuelo','Comunidad de vuelo libre con meteo y cultura de seguridad.'],
  ['Sea Adventure Partner','Partner acuático','Kayak de mar|SUP|Snorkel','Coasteering|Surf','Mar y costa','Intermedio','amarillo','Amaneceres','Costa','Sea Explorer|Water Spirit','Sea Tribe|Kayak Explorers','Kayak sunrise','Planes de mar temprano, ritmo tranquilo y buen criterio.'],
  ['Snow & Ice Rider','Rider nieve','Snowboard|Splitboard|Esquí de montaña','Raquetas|Freeride','Nieve','Avanzado','rojo','Temporada invierno','Pirineos / global','Cold Warrior|Mountain Soul','Snow & Ice','Snow trip','Busca crew para nieve, frío y partes revisados.'],
  ['Urban Parkour Team','Equipo urbano','Parkour|Freerunning|Calistenia','OCR urbana|Tricking','Urbano','Medio','amarillo','Tardes','Ciudad','Team Builder|Technical Progress','Urban Action','Evento de parkour','Equipo urbano con progresión, movilidad y respeto del espacio.'],
  ['Functional Athlete','Atleta funcional','Crossfit|HYROX|Entrenamiento funcional','OCR|Movilidad','Fitness','Medio-alto','amarillo','Entre semana','Modo global','Endurance Beast|Technical Progress','Functional Athletes|OCR / HYROX Lab','Reto HYROX','Rendimiento medible sin perder movilidad ni recuperación.'],
  ['Cave Explorer','Explorador técnico','Espeleología|Rápel|Barranquismo','Cave diving|Orientación','Cueva y cuerda','Técnico','rojo','Planificado','Modo global','Vertical Mind|Safety First','Cave Explorers|Vertical Rescue Mindset','Salida de espeleología','Exploración subterránea con permisos, equipo y paciencia.'],
  ['Endurance Beast','Perfil resistencia','Ultratrail|Triatlón|Gravel','Everesting|Fastpacking','Resistencia','Avanzado','rojo','Madrugadas','Modo global','Endurance Beast|Global Nomad','Trail & Mountain|OCR / HYROX Lab','Reto de resistencia','Para quien acumula horas, desnivel y cabeza.'],
  ['Kayak Explorer','Explorador kayak','Kayak de mar|Packraft|Travesía en kayak','Snorkel|Fotografía marina','Agua','Intermedio','amarillo','Amanecer','Costa / lagos','Sea Explorer|Nature Respect','Kayak Explorers|Sea Tribe','Kayak sunrise','Travesías limpias, costa tranquila y lectura del viento.'],
  ['Paragliding Mate','Compañero de vuelo','Parapente|Paramotor|Vuelo de montaña','Ala delta|Speed flying','Aire','Avanzado','rojo','Según meteo','Modo global','Air Explorer|Global Nomad','Paragliding Network|Air Sports','Ventana de vuelo','Busca compañeros para analizar meteo y volar con cabeza.'],
  ['Coasteering Squad','Squad costa','Coasteering|Cliff Jumping|Snorkel','Psicobloc|Kayak de mar','Costa y roca','Avanzado','rojo','Fines de semana','Costa','Sea Explorer|Extreme Mindset','Coasteering World|Cliff & Coast','Plan de coasteering','Roca, agua, sal y checklist antes de entrar.'],
  ['Trail Night Runner','Runner nocturno','Trail nocturno|Orientación|Fast hiking','Senderismo|Fotografía nocturna','Montaña','Intermedio','amarillo','Noches','Modo global','Night Explorer|Safety First','Trail Night Club','Trail nocturno','Frontal, ritmo de grupo y navegación sin prisas.'],
  ['Wild Photo Explorer','Creador outdoor','Fotografía de naturaleza|Senderismo|Observación de fauna','Kayak|Trail','Naturaleza','Todos','verde','Flexible','Modo global','Creador outdoor|Nature Respect','Nature Photographers|Outdoor Creators','Quedada fotográfica','Busca historias de naturaleza sin revelar spots sensibles.'],
  ['HYROX Partner','Partner fitness','HYROX|Crossfit|OCR','Running|Movilidad','Fitness','Medio-alto','amarillo','Entre semana','Modo global','Endurance Beast|Technical Progress','OCR / HYROX Lab|Functional Athletes','Reto HYROX','Entrenos híbridos con fuerza, carrera y control.'],
  ['Rope Jump Crew','Crew salto','Rope jumping|Puenting|Canyon swing','Highline|Rápel','Vacío y cuerda','Experto','negro','Convocatorias','Modo global','Extreme Mindset|Safety First','Extreme Jumpers|Rope Jump Crew','Plan de cuerda','Solo cultura experta, autorización y entorno controlado.'],
  ['Surfari Nomad','Viajero surf','Surf|Longboard surf|Surfari','Bodyboard|Fotografía marina','Océano','Medio','amarillo','Temporadas','Global','Sea Explorer|Global Nomad','Surfari Tribe|Sea Tribe','Surfari weekend','Olas, viajes deportivos y comunidad sin spam.'],
  ['Multiaventura Circle','Círculo híbrido','Senderismo|Kayak|Escalada','MTB|Coasteering','Híbrido','Todos','amarillo','Fines de semana','Modo global','Multiaventura|Team Builder','Multiaventura NOMADX|Adventure Families','Ruta combinada','Para quienes mezclan mar, montaña, roca y grupo.'],
  ['Vertical Rescue Team','Equipo técnico','Rescate vertical|Rápel|Espeleología','Primeros auxilios|Via ferrata','Vertical','Profesional','rojo','Formaciones','Modo global','Safety First|Pro verificado','Vertical Rescue Mindset|Pro Guides Network','Taller de rescate','Cultura de prevención y respuesta, sin improvisar.'],
  ['Gravel Explorer','Rider gravel','Gravel|Bikepacking|Orientación','Trail running|Fotografía','Ruedas','Medio','amarillo','Domingos','Radio 120 km','Mountain Soul|Global Nomad','MTB Riders|Trail & Mountain','Ruta gravel','Tracks largos, autonomía y paradas bonitas.'],
  ['Wingfoil Rider','Rider foil','Wingfoil|E-foil|SUP','Kitesurf|Windfoil','Mar y viento','Avanzado','rojo','Según viento','Costa','Water Spirit|Sea Explorer','Sea Tribe|Surfari Tribe','Sesión de wingfoil','Viento, foil y progreso con condiciones favorables.'],
  ['Apnea Buddy','Compañero apnea','Apnea|Freediving|Snorkel costero','Natación en aguas abiertas|Buceo recreativo','Subacuático','Intermedio','rojo','Mañanas','Costa','Water Spirit|Safety First','Freediving Circle|Sea Tribe','Sesión de apnea','Compañero mínimo, calma y progresión sin ego.'],
  ['Barranco Crew','Crew barranco','Barranquismo|Canyoning|Rápel en cascada','Toboganes naturales|Orientación','Barranco','Técnico','rojo','Temporada caudal','Modo global','Vertical Mind|Safety First','Cave Explorers|Vertical Zone','Jornada de barranquismo','Grupo técnico para caudal, material y permisos revisados.'],
  ['Snowboard Nomad','Rider nieve','Snowboard|Splitboard|Freeride','Snowkite|Raquetas','Nieve','Medio-alto','rojo','Invierno','Montaña','Cold Warrior|Mountain Soul','Snow & Ice','Snow trip','Nieve, frío, partes y respeto por la montaña.'],
  ['Climbing Mentor','Mentor escalada','Escalada|Búlder|Escalada deportiva','Via ferrata|Técnica de cuerda','Roca','Avanzado','rojo','Tardes','Modo global','Technical Progress|Vertical Mind','Vertical Zone|Pro Guides Network','Mentoría de escalada','Ayuda a progresar con técnica, no con prisa.'],
  ['Trail Beginner Friendly','Perfil iniciación','Senderismo|Trail suave|Marcha nórdica','Movilidad|Fotografía','Montaña','Iniciación','verde','Fines de semana','Radio 30 km','First Adventure|Trail Starter','Beginner Friendly Outdoor|Trail & Mountain','Ruta verde','Primeras rutas con grupo amable y ritmo humano.'],
  ['Extreme Jump Partner','Partner extremo','Puenting|Rope jumping|Cliff diving','BASE jump|Highline','Vacío','Experto','negro','Convocatorias','Modo global','Extreme Mindset|Safety First','Extreme Jumpers|Rope Jump Crew','Plan técnico validado','Alta exposición solo con expertos, permisos y supervisión.'],
  ['Nature Filmmaker','Creador audiovisual','Fotografía de naturaleza|Vídeo outdoor|Senderismo','Kayak|Trail running','Naturaleza','Todos','verde','Flexible','Modo global','Creador outdoor|Nature Respect','Outdoor Creators|Nature Photographers','Cobertura de plan','Cuenta aventuras sin convertir spots en escaparate.'],
  ['Family Outdoor Group','Grupo familiar','Kayak recreativo|Senderismo familiar|Snorkel','Geocaching|Yoga','Familia','Iniciación','verde','Domingos','Local / global','First Adventure|Team Builder','Adventure Families|Family Adventure Club','Multiaventura familiar','Aventura tranquila para familias y primeras veces.'],
  ['Cave & Rope Team','Equipo cueva-cuerda','Espeleología|Rápel|Barranquismo seco','Orientación|Rescate vertical','Cueva y vertical','Técnico','rojo','Planificado','Modo global','Vertical Mind|Safety First','Cave Explorers|Vertical Rescue Mindset','Técnica de cuerda','Cuerda, cueva y criterio antes de entrar.'],
  ['Paramotor Mate','Compañero paramotor','Paramotor|Paratrike|Vuelo de montaña','Parapente|Fotografía aérea','Aire','Avanzado','rojo','Según meteo','Modo global','Air Explorer|Global Nomad','Air Sports|Paragliding Network','Vuelo panorámico','Busca ventanas buenas y compañeros con checklist.'],
  ['Kayak Sunrise Club','Club amanecer','Kayak de mar|SUP|Snorkel','Fotografía marina|Natación suave','Mar','Iniciación-media','amarillo','Amanecer','Costa','Sea Explorer|Nature Respect','Kayak Explorers|Sea Tribe','Kayak sunrise','Madrugar, remar suave y volver con calma.'],
  ['OCR Beast Mode','Equipo OCR','OCR|HYROX|Cross training','Trail running|Fuerza funcional','Fitness','Medio-alto','amarillo','Entre semana','Modo global','Endurance Beast|Team Builder','OCR / HYROX Lab|Functional Athletes','Entreno OCR','Obstáculos, fuerza y resistencia con cabeza.'],
  ['Coastal Adventure Crew','Crew costa','Coasteering|Kayak de mar|Cliff jumping','Snorkel|Surf','Costa','Avanzado','rojo','Fines de semana','Costa','Sea Explorer|Extreme Mindset','Cliff & Coast|Coasteering World','Aventura costera','Costa, sal y planes con condiciones revisadas.']
];

const MATCH_RANDOM_NAMES = ['Marina','Alex','Nora','Leo','Vega','Bruno','Lara','Hugo','Aitana','Nil','Kai','Alma','Eric','Noa','Adrian','Zoe','Gael','Carla','Iker','Luna'];
const MATCH_RANDOM_STYLES = ['Trail','Flow','Vertical','Ocean','Wild','Air','Mountain','Rope','Cave','Coast','Runner','Rider','Explorer','Nomad','Peak','Wave','Endurance'];
const MATCH_RANDOM_DISCIPLINES = ['Apnea','Coasteering','Trail running','MTB','Escalada','Barranquismo','Espeleología','Surf','Wingfoil','Kayak','Parapente','Paramotor','Crossfit','HYROX','Snowboard','Senderismo','Vía ferrata','Rope jumping','Fotografía de naturaleza','Buceo recreativo'];
const MATCH_RANDOM_TRIBES = ['Sea Tribe','Vertical Zone','Trail & Mountain','MTB Riders','Air Sports','Cave Explorers','Outdoor Creators','Adventure Families','Extreme Jumpers','Freediving Circle'];
const MATCH_RANDOM_BADGES = ['Safety First','Sea Explorer','Mountain Soul','Vertical Mind','Endurance Beast','Nature Respect','Air Explorer','Team Builder','First Adventure','Global Nomad'];

function makeMatchProfile(seed, index) {
  const [name, profileType, sports, secondary, env, level, risk, availability, dist, badges, tribes, planActive, bio] = seed;
  const sportsList = sports.split('|');
  const riskGradient = risk === 'negro' ? '#26080f,#050506' : risk === 'rojo' ? '#2a0f12,#10121d' : risk === 'verde' ? '#0d2a1a,#09131f' : '#1f1a0d,#0c1824';
  return {
    id: `mx${index + 1}`,
    name,
    role: `${profileType} · ${tribes.split('|')[0]}`,
    profileType,
    emoji: env.includes('Aire') ? '🪂' : env.includes('Mar') || env.includes('Agua') || env.includes('Costa') ? '🌊' : env.includes('Fitness') ? '💪' : env.includes('Nieve') ? '❄️' : env.includes('Familia') ? '👥' : '🧭',
    gradient: `linear-gradient(135deg,${riskGradient})`,
    sports: sportsList,
    secondary: secondary.split('|'),
    level,
    env,
    risk,
    availability,
    dist,
    objective: planActive,
    planActive,
    badges: badges.split('|'),
    tribes: tribes.split('|'),
    bio,
    compat: Math.min(99, 72 + ((index * 7) % 28))
  };
}

function ensureMatchPoolMinimum() {
  const existing = new Set(MATCH_CARDS.map(m => normalizeText(m.name)));
  MATCH_SEED_PROFILES.forEach((seed, index) => {
    if (!existing.has(normalizeText(seed[0]))) {
      MATCH_CARDS.push(makeMatchProfile(seed, index));
      existing.add(normalizeText(seed[0]));
    }
  });
}

function generateRandomMatch() {
  const i = STATE.generatedMatchCount++;
  setStoredNumber('nmx_generated_match_count', STATE.generatedMatchCount);
  const name = `${MATCH_RANDOM_NAMES[i % MATCH_RANDOM_NAMES.length]} ${MATCH_RANDOM_STYLES[(i * 3) % MATCH_RANDOM_STYLES.length]}`;
  const primary = [
    MATCH_RANDOM_DISCIPLINES[(i * 2) % MATCH_RANDOM_DISCIPLINES.length],
    MATCH_RANDOM_DISCIPLINES[(i * 2 + 5) % MATCH_RANDOM_DISCIPLINES.length],
    MATCH_RANDOM_DISCIPLINES[(i * 2 + 9) % MATCH_RANDOM_DISCIPLINES.length]
  ];
  const secondary = [
    MATCH_RANDOM_DISCIPLINES[(i * 4 + 1) % MATCH_RANDOM_DISCIPLINES.length],
    MATCH_RANDOM_DISCIPLINES[(i * 4 + 7) % MATCH_RANDOM_DISCIPLINES.length]
  ];
  const tribes = [MATCH_RANDOM_TRIBES[i % MATCH_RANDOM_TRIBES.length], MATCH_RANDOM_TRIBES[(i + 3) % MATCH_RANDOM_TRIBES.length]];
  const badges = [MATCH_RANDOM_BADGES[i % MATCH_RANDOM_BADGES.length], MATCH_RANDOM_BADGES[(i + 4) % MATCH_RANDOM_BADGES.length]];
  const risks = ['verde','amarillo','rojo','negro'];
  const risk = risks[(i + primary.join('').length) % risks.length];
  return {
    id: `gen-${Date.now()}-${i}`,
    name,
    role: `Perfil generado · ${tribes[0]}`,
    profileType: i % 5 === 0 ? 'Crew deportivo' : i % 3 === 0 ? 'Partner de entrenamiento' : 'Perfil deportivo',
    emoji: primary.some(s => /parapente|paramotor/i.test(s)) ? '🪂' : primary.some(s => /apnea|surf|kayak|buceo|wingfoil/i.test(s)) ? '🌊' : primary.some(s => /crossfit|hyrox/i.test(s)) ? '💪' : '🧭',
    gradient: `linear-gradient(135deg,${risk === 'negro' ? '#25040a,#050506' : risk === 'rojo' ? '#2a0f12,#0b1020' : '#0d1f2d,#101826'})`,
    sports: primary,
    secondary,
    level: i % 4 === 0 ? 'Avanzado' : i % 4 === 1 ? 'Intermedio' : i % 4 === 2 ? 'Técnico' : 'Iniciación-media',
    env: primary.some(s => /apnea|surf|kayak|buceo|wingfoil/i.test(s)) ? 'Mar y agua' : primary.some(s => /parapente|paramotor/i.test(s)) ? 'Aire' : primary.some(s => /crossfit|hyrox/i.test(s)) ? 'Fitness' : 'Montaña y outdoor',
    risk,
    availability: ['Fines de semana','Entre semana','Amaneceres','Según meteo','Flexible'][i % 5],
    dist: ['Modo global','Radio 40 km','Radio 80 km','Costa / montaña','Plan remoto'][i % 5],
    objective: ['Crear plan','Entrenar juntos','Explorar spots','Progresar con seguridad','Unirse a tribu'][i % 5],
    planActive: ['Plan compatible esta semana','Quedada abierta','Entreno técnico','Salida de comunidad','Plan por confirmar'][i % 5],
    badges,
    tribes,
    bio: `Perfil generado por NOMADX a partir de afinidad entre ${primary[0]}, ${primary[1]} y ${tribes[0]}.`,
    compat: 72 + ((i * 11) % 28)
  };
}

function generateMoreMatches(count = 8) {
  for (let i = 0; i < count; i++) MATCH_CARDS.push(generateRandomMatch());
  showToast(`${count} perfiles compatibles generados`);
  renderMatchCard();
  renderSavedMatches();
}

function getMatchById(profileId) {
  return MATCH_CARDS.find(m => m.id === profileId) || MATCH_CARDS[STATE.currentMatchIdx] || MATCH_CARDS[0];
}

function slugify(value) {
  return value.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function normalizeText(value = '') {
  return String(value).toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function buildMasterCatalog() {
  const categoryMeta = {
    agua: { name: 'Agua y costa', emoji: '🌊', env: ['mar','costa','agua'], material: 'neopreno o ropa técnica, elemento de flotación cuando proceda, conocimiento del spot', type: ['deporte','actividad','experiencia'] },
    montana: { name: 'Montaña y senderismo', emoji: '🏔️', env: ['montaña','sendero','naturaleza'], material: 'calzado de montaña, agua, navegación, ropa por capas', type: ['deporte','actividad'] },
    roca: { name: 'Roca y vertical', emoji: '🧗', env: ['roca','vertical','montaña'], material: 'casco, arnés, cuerda o crash pad según modalidad, material homologado', type: ['deporte','actividad','experiencia'] },
    aire: { name: 'Aire', emoji: '🪂', env: ['aire','montaña','costa'], material: 'equipo certificado, formación específica, meteorología favorable', type: ['deporte','experiencia'] },
    nieve: { name: 'Nieve y hielo', emoji: '❄️', env: ['nieve','hielo','montaña'], material: 'ropa térmica, equipo técnico, ARVA cuando proceda, formación invernal', type: ['deporte','actividad','experiencia'] },
    ruedas: { name: 'Ruedas', emoji: '🚵', env: ['ruedas','montaña','urbano'], material: 'casco, protecciones, bicicleta o tabla revisada', type: ['deporte','actividad'] },
    fitness: { name: 'Fitness y entrenamiento', emoji: '💪', env: ['gimnasio','urbano','outdoor'], material: 'ropa deportiva, hidratación, técnica adaptada al nivel', type: ['deporte','actividad'] },
    urbano: { name: 'Urbano', emoji: '🏙️', env: ['urbano','park','calle'], material: 'protecciones, calzado técnico, espacio permitido', type: ['deporte','actividad'] },
    motor: { name: 'Motor y velocidad', emoji: '🏎️', env: ['motor','tierra','agua'], material: 'casco, protecciones, licencia o circuito cuando proceda', type: ['deporte','experiencia'] },
    expedicion: { name: 'Expedición y supervivencia', emoji: '🧭', env: ['expedición','naturaleza','montaña'], material: 'mochila, navegación, refugio, botiquín, autonomía', type: ['actividad','experiencia'] },
    multiaventura: { name: 'Multiaventura', emoji: '⚡', env: ['multiaventura','naturaleza','agua'], material: 'material específico por actividad, guía o briefing si procede', type: ['actividad','experiencia'] },
    naturaleza: { name: 'Naturaleza y exploración', emoji: '🌿', env: ['naturaleza','exploración','sendero'], material: 'calzado cómodo, prismáticos o cámara, respeto ambiental', type: ['actividad','experiencia'] },
    tecnicos: { name: 'Técnicos y extremos', emoji: '🔴', env: ['técnico','alto riesgo','vertical'], material: 'formación avanzada, equipo certificado, plan de emergencia', type: ['deporte','experiencia'] },
    familia: { name: 'Familia y recreativo', emoji: '👥', env: ['familia','naturaleza','urbano'], material: 'material básico, hidratación, protección solar, ruta adaptada', type: ['actividad','experiencia'] },
    profesional: { name: 'Profesional / formación', emoji: '📋', env: ['formación','profesional','outdoor'], material: 'documentación, equipo homologado, seguro y requisitos del curso', type: ['actividad','experiencia'] }
  };

  const seeds = {
    agua: ['Surf','Bodyboard','Paddle surf','SUP race','Kayak de mar','Kayak de río','Kayak touring','Kayak polo','Kayak fishing','Rafting','Hidrospeed','Snorkel','Apnea','Freediving','Apnea estática','Apnea dinámica','Apnea peso constante','Buceo recreativo','Buceo técnico','Buceo profundo','Buceo en pecios','Cave diving','Night diving','Sidemount diving','Fotografía submarina','Pesca deportiva','Pesca submarina','Coasteering','Cliff Jumping','Psicobloc','Natación en aguas abiertas','Travesía a nado','Windsurf','Kitesurf','Kitesurf freestyle','Wingfoil','E-foil','Vela ligera','Catamarán deportivo','Skimboard','Wakeboard','Wakesurf','Esquí acuático','Motos de agua','Big wave surfing','Longboard surf','Surfskate','Foil surf','Ocean swimming','Packrafting costero'],
    montana: ['Senderismo','Trekking','Fast hiking','High mountain trekking','Montañismo','Alpinismo','Orientación','Orientación nocturna','Rogaining','Marcha nórdica','Trail running','Trail nocturno','Ultra trail','Skyrunning','Carreras por montaña','Vertical kilometer','Fastpacking','Vivac','Bushcraft','Supervivencia','Expedición autosuficiente','Expedición alpina','Raquetas de nieve','Nordic walking trail','Travesía de crestas','Trekking glaciar','Senderismo interpretativo','Ruta circular de montaña','Ascenso a cumbre','Travesía de refugios','Marcha de resistencia','Trekking de desierto','Trekking tropical','Ruta de volcanes','Senderismo invernal','Orientación con brújula'],
    roca: ['Escalada deportiva','Escalada clásica','Escalada tradicional','Escalada artificial','Escalada alpina','Escalada en bloque','Boulder','Boulder psicobloc','Escalada indoor','Escalada multipitch','Big wall','Vía ferrata','Rápel','Rápel técnico','Barranquismo','Barranquismo seco','Barranquismo acuático','Canyoning técnico','Barranquismo invernal','Espeleología','Espeleo vertical','Espeleología acuática','Highline','Slackline','Dry tooling','Urban climbing','Escalada de fisura','Escalada de adherencia','Escalada de velocidad','Escalada de competición','Deep water soloing','Descenso de cañones','Técnicas de cuerda','Progresión vertical'],
    aire: ['Parapente','Paramotor','Paratrike','Ala delta','Paracaidismo','Salto tándem','AFF','Wingsuit','Speedflying','Speedriding','Globo aerostático','Parasailing','Rope jumping','Bungee jumping','Puenting','BASE jump','Túnel de viento','Parapente biplaza','Acrobacia en parapente','Vuelo de ladera','Cross country parapente','Wingwalking','Paracaidismo precisión','Canopy piloting','Vuelo ultraligero','Paramotor travesía','Dron racing outdoor','Cometa de tracción'],
    nieve: ['Snowboard','Freeride snowboard','Freestyle snowboard','Splitboard','Splitboard touring','Esquí alpino','Esquí de travesía','Skimo','Freeride ski','Freestyle ski','Esquí de fondo','Esquí nórdico','Snowkite','Escalada en hielo','Ice climbing','Alpinismo invernal','Dry tooling invernal','Trineo','Mushing','Raquetas de nieve','Snowshoe running','Telemark','Ski cross','Boardercross','Curling outdoor','Ice swimming','Escalada mixta','Expedición polar','Construcción de iglú','Rescate en nieve'],
    ruedas: ['MTB','BTT','Enduro MTB','Downhill MTB','MTB cross country','MTB maratón','Bikepacking','Gravel','Ciclismo de carretera','Cicloturismo','BMX','BMX race','BMX freestyle','Skate','Skate street','Skate bowl','Longboard','Longboard downhill','Roller','Patinaje','Patinaje agresivo','Scooter freestyle','Pump track','Dirt jump','Bikejoring','Canicross bike','Fixed gear','Ciclismo urbano','Trial bike','E-bike mountain','Monopatín eléctrico','Inline downhill'],
    fitness: ['Crossfit','Calistenia','Entrenamiento funcional','OCR','OCR endurance','Spartan Race','Hyrox','Parkour','Freerunning','Gimnasio','Halterofilia','Powerlifting','Strongman','Yoga','Pilates','Movilidad','HIIT','TRX','Kettlebell training','Entrenamiento de fuerza','Entrenamiento de resistencia','Animal flow','Bootcamp outdoor','Running urbano','Natación fitness','Core training','Entrenamiento militar','Preparación física outdoor','Stretching activo','Mobility flow'],
    urbano: ['Parkour speed','Freerunning urbano','Street workout','Skate urbano','Roller urbano','BMX street','Scooter park','Calistenia urbana','Escalada urbana controlada','Orientación urbana','Carrera urbana','Rooftop training seguro','Slackline urbano','Tricking','Breakletics','Baloncesto 3x3','Fútbol freestyle','Street handball','Urban hiking','Carrera de obstáculos urbana','Patinaje nocturno','Ruta fotográfica urbana','Geocaching urbano','Pump track urbano','Skim urbano'],
    motor: ['Motocross','Enduro moto','Trial moto','Karting','Rally amateur','4x4','Buggy','Quad','Jet ski','Moto de agua touring','Moto trail','Moto aventura','Off-road 4x4','Sand buggy','Drift amateur','Sim racing físico','Minimoto','Supermotard','Raid amateur','Ruta overland 4x4','Conducción en circuito','Karting endurance','Moto nieve','ATV trail','UTV aventura'],
    expedicion: ['Expedición polar','Expedición desértica','Expedición selvática','Expedición autosuficiente','Travesía de varios días','Travesía en kayak','Travesía en bicicleta','Travesía a pie','Bikepacking remoto','Packrafting','Campamento outdoor','Vivac técnico','Orientación avanzada','Supervivencia básica','Supervivencia avanzada','Bushcraft avanzado','Construcción de refugio','Fuego primitivo','Navegación con mapa','Navegación GPS','Rogaining 24h','Expedición fotográfica','Expedición científica ciudadana','Cruce de cordillera','Ruta de larga distancia','Backpacking','Thru-hiking','Microexpedición','Overlanding'],
    multiaventura: ['Coasteering combinado','Multiaventura familiar','Raid de aventura','Circuito de cuerdas','Tirolina','Puente tibetano','Orientación multiaventura','Kayak + trekking','MTB + trail','Escalada + rappel','Barranco + vía ferrata','Gymkhana outdoor','Reto de supervivencia','Adventure race','Team building outdoor','Campamento aventura','Ruta anfibia','Descenso de barranco recreativo','Aventura nocturna','Aventura con brújula','Expedición multiaventura','Ruta costa y montaña','Outdoor challenge','Circuito de aventura','Puente mono','Vía cordata'],
    naturaleza: ['Fotografía de naturaleza','Fotografía de aventura','Observación de aves','Birdwatching','Geocaching','Interpretación ambiental','Rutas geológicas','Astronomía outdoor','Astrofotografía','Exploración de cuevas','Rutas familiares','Camping','Acampada controlada','Bivouac recreativo','Observación de fauna','Rastreo de huellas','Baños de bosque','Forest bathing','Botánica de campo','Micología responsable','Ruta de cascadas','Ruta de miradores','Ruta de estrellas','Observación marina','Limpieza de playa comunitaria','Voluntariado ambiental','Fotografía submarina recreativa','Ruta paleontológica','Naturalismo urbano','Exploración costera'],
    tecnicos: ['BASE jump','Free solo','Cave diving técnico','Wingsuit proximity','Big wave surfing','Alpinismo técnico','Escalada en hielo extrema','Barranquismo técnico','Canyoning avanzado','Buceo de descompresión','Buceo con trimix','Espeleobuceo','Highline larga distancia','Rope access deportivo','Rescate vertical deportivo','Descenso técnico de cañones','Expedición de alta altitud','Snowboard big mountain','Ski freeride extremo','Speedriding técnico','Rope jumping técnico','Puenting técnico','Dry canyoning','Ultra distancia autosuficiente','Ocean crossing kayak'],
    familia: ['Senderismo familiar','Ruta costera familiar','Snorkel familiar','Kayak recreativo','Paddle surf recreativo','Camping familiar','Geocaching familiar','Orientación familiar','Ruta de naturaleza infantil','Bici familiar','Vía verde en bicicleta','Patinaje recreativo','Juegos outdoor','Gymkhana familiar','Observación de estrellas','Fotografía familiar de naturaleza','Ruta de miradores fácil','Marcha nórdica suave','Yoga outdoor familiar','Aventura escolar','Campamento juvenil','Multiaventura infantil','Ruta interpretativa','Día de playa activo','Mini trekking'],
    profesional: ['Curso de primeros auxilios','Curso de orientación','Curso de seguridad en montaña','Curso de autorrescate','Curso de nudos','Curso de rápel','Curso de escalada deportiva','Curso de vía ferrata','Curso de barranquismo','Curso de apnea básica','Curso de buceo open water','Curso de navegación marina','Curso de meteorología outdoor','Curso de avalanchas','Formación ARVA','Curso de guía outdoor','Clínic de técnica MTB','Clínic de trail running','Taller de movilidad','Taller de fuerza outdoor','Curso de rescate acuático','Curso de fotografía outdoor','Curso de Leave No Trace','Formación de organizador de planes','Certificación de instructor','Evaluación de nivel deportivo','Jornada de seguridad comunitaria','Seminario de reputación deportiva']
  };

  const riskByName = (name, cat) => {
    const n = name.toLowerCase();
    if (/(base|free solo|wingsuit|big wave|trimix|cave diving|espeleobuceo|proximity|alta altitud|ice climbing|escalada en hielo extrema|ocean crossing)/.test(n)) return 'negro';
    if (/(técnic|tecnico|avanzad|barranquismo|coasteering|cliff|multipitch|big wall|highline|rope|puenting|freeride|speed|alpinismo|buceo|apnea|paracaidismo|motocross|rally|quad|jet ski|downhill|enduro)/.test(n) || ['aire','tecnicos'].includes(cat)) return 'rojo';
    if (/(familiar|recreativo|suave|infantil|interpretativa|observación|fotografía|camping|yoga|pilates|movilidad|geocaching)/.test(n) || cat === 'familia') return 'verde';
    return 'amarillo';
  };
  const intensityByRisk = { verde: 'baja', amarillo: 'media', rojo: 'alta', negro: 'extrema' };
  const catalog = [];
  const used = new Set();

  Object.entries(seeds).forEach(([cat, names]) => {
    const meta = categoryMeta[cat];
    names.forEach((name) => {
      const id = slugify(name);
      if (used.has(id)) return;
      used.add(id);
      const riskLevel = riskByName(name, cat);
      catalog.push({
        id,
        name,
        category: meta.name,
        cat,
        environment: meta.env,
        riskLevel,
        risk: riskLevel === 'verde' ? 'low' : riskLevel === 'amarillo' ? 'medium' : riskLevel === 'rojo' ? 'high' : 'extreme',
        type: meta.type,
        intensity: intensityByRisk[riskLevel],
        material: meta.material,
        matchable: true,
        logbook: true,
        plans: !['negro'].includes(riskLevel),
        emoji: meta.emoji,
        desc: `${name} dentro del catálogo NOMADX, clasificado por entorno, riesgo y tipo de práctica para matching, planes y Logbook.`,
        related: names.filter(other => other !== name).slice(0, 3)
      });
    });
  });

  return catalog.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
}

function normalizeNomadxDemoData() {
  CATEGORIES.splice(0, CATEGORIES.length,
    { id: 'all', name: 'Todas', emoji: '🌐' },
    { id: 'agua', name: 'Agua y costa', emoji: '🌊' },
    { id: 'montana', name: 'Montaña y senderismo', emoji: '🏔️' },
    { id: 'roca', name: 'Roca y vertical', emoji: '🧗' },
    { id: 'aire', name: 'Aire', emoji: '🪂' },
    { id: 'nieve', name: 'Nieve y hielo', emoji: '❄️' },
    { id: 'ruedas', name: 'Ruedas', emoji: '🚵' },
    { id: 'fitness', name: 'Fitness y entrenamiento', emoji: '💪' },
    { id: 'urbano', name: 'Urbano', emoji: '🏙️' },
    { id: 'motor', name: 'Motor y velocidad', emoji: '🏎️' },
    { id: 'expedicion', name: 'Expedición y supervivencia', emoji: '🧭' },
    { id: 'multiaventura', name: 'Multiaventura', emoji: '⚡' },
    { id: 'naturaleza', name: 'Naturaleza y exploración', emoji: '🌿' },
    { id: 'tecnicos', name: 'Técnicos y extremos', emoji: '🔴' },
    { id: 'familia', name: 'Familia y recreativo', emoji: '👥' },
    { id: 'profesional', name: 'Profesional / formación', emoji: '📋' }
  );

  if (Array.isArray(window.SPORTS_CATALOG_CATEGORIES) && window.SPORTS_CATALOG_CATEGORIES.length) {
    CATEGORIES.splice(0, CATEGORIES.length, ...window.SPORTS_CATALOG_CATEGORIES);
  }

  const catalogSource = Array.isArray(window.SPORTS_CATALOG) && window.SPORTS_CATALOG.length
    ? window.SPORTS_CATALOG
    : buildMasterCatalog();
  SPORTS_DATA.splice(0, SPORTS_DATA.length, ...catalogSource);

  MATCH_CARDS.splice(0, MATCH_CARDS.length,
    { id: 'm1', name: 'Marina Trail', role: 'Trail & costa · Demo NOMADX', emoji: '🌊', gradient: 'linear-gradient(135deg,#0d1f3c,#1a0d2e)', sports: ['Trail Running','Coasteering','Apnea'], level: 'Avanzado', env: 'Costa y montaña', dist: '12 km', objective: 'Planes de fin de semana', badges: ['Safety First','Logbook activo','Sea Tribe'], compat: 94 },
    { id: 'm2', name: 'Vertical Crew', role: 'Grupo de escalada · Comunidad', emoji: '🧗', gradient: 'linear-gradient(135deg,#201010,#1a0d20)', sports: ['Escalada','Boulder','Vía Ferrata'], level: 'Medio-alto', env: 'Roca y rocódromo', dist: '28 km', objective: 'Compañeros de cordada', badges: ['Spotter responsable','Comunidad positiva'], compat: 91 },
    { id: 'm3', name: 'MTB Flow', role: 'Riders enduro · Demo interactiva', emoji: '🚵', gradient: 'linear-gradient(135deg,#0d1f10,#101d0d)', sports: ['MTB Enduro','Gravel','Bikepacking'], level: 'Medio', env: 'Senderos y bike park', dist: '35 km', objective: 'Rutas técnicas', badges: ['Perfil activo','Logbook completo'], compat: 88 },
    { id: 'm4', name: 'Outdoor Runner', role: 'Running & montaña', emoji: '🏃', gradient: 'linear-gradient(135deg,#152414,#0d1828)', sports: ['Trail Running','Skyrunning','Funcional'], level: 'Intermedio', env: 'Montaña y urbano', dist: '8 km', objective: 'Entrenar en grupo', badges: ['Comunidad positiva','Perfil activo'], compat: 86 },
    { id: 'm5', name: 'Freedive Club', role: 'Club de apnea recreativa', emoji: '🤿', gradient: 'linear-gradient(135deg,#071830,#0d1025)', sports: ['Apnea','Buceo recreativo','Snorkel'], level: 'Medio', env: 'Agua y costa', dist: '42 km', objective: 'Sesiones seguras', badges: ['Instructor','Safety First'], compat: 93 },
    { id: 'm6', name: 'Climbing Partner', role: 'Compañero técnico', emoji: '🪨', gradient: 'linear-gradient(135deg,#24120c,#111827)', sports: ['Escalada Deportiva','Multipitch','Rappel'], level: 'Alto', env: 'Roca', dist: '55 km', objective: 'Proyectos de vía', badges: ['Identidad verificada','Verticalista'], compat: 89 },
    { id: 'm7', name: 'Adventure Family', role: 'Planes outdoor familiares', emoji: '👥', gradient: 'linear-gradient(135deg,#13251d,#0d1525)', sports: ['Senderismo','Kayak','Orientación'], level: 'Iniciación', env: 'Naturaleza accesible', dist: '18 km', objective: 'Planes seguros', badges: ['Comunidad positiva','Safety First'], compat: 82 },
    { id: 'm8', name: 'Pro Guide Verified', role: 'Guía verificado · NOMADX Pro', emoji: '✅', gradient: 'linear-gradient(135deg,#1d1a0d,#0d1f3c)', sports: ['Barranquismo','Escalada','Trekking'], level: 'Profesional', env: 'Montaña y roca', dist: '64 km', objective: 'Eventos y formación', badges: ['Guía verificado','Primeros auxilios','Pro'], compat: 97 }
  );

  FEED_POSTS.splice(0, FEED_POSTS.length,
    { id: 'p1', user: 'Marina Trail', role: 'Sea Tribe', emoji: '🌊', time: 'hace 2h', mediaEmoji: '📓', mediaBg: 'linear-gradient(135deg,#00d4ff22,#ff5e1a22)', location: 'Spot costero · demo', type: 'aventura', text: 'Nueva entrada de Logbook: ruta costera con revisión de condiciones, material y compañeros. Cada registro suma contexto real al ADN deportivo.', sports: ['Trail','Coasteering'], likes: 287, comments: 34 },
    { id: 'p2', user: 'Vertical Crew', role: 'Climbing Zone', emoji: '🧗', time: 'hace 4h', mediaEmoji: '🪨', mediaBg: 'linear-gradient(135deg,#201010,#1a0d20)', location: 'Zona de escalada · demo', type: 'tecnica', text: 'Consejo de seguridad: revisión cruzada de nudo, casco y comunicación antes de cada pegue. La técnica empieza antes de tocar la roca.', sports: ['Escalada','Safety'], likes: 412, comments: 89 },
    { id: 'p3', user: 'MTB Flow', role: 'MTB Riders', emoji: '🚵', time: 'hace 6h', mediaEmoji: '🚵', mediaBg: 'linear-gradient(135deg,#0d1f10,#101d0d)', location: 'Bike park · demo', type: 'spot', text: 'Spot recomendado por la comunidad: sendero con variantes verde, amarilla y roja. Buen ejemplo de mapa con niveles y reportes de estado.', sports: ['MTB','Spot'], likes: 156, comments: 21 },
    { id: 'p4', user: 'Outdoor Runner', role: 'Trail & Mountain', emoji: '🏃', time: 'hace 8h', mediaEmoji: '⛰️', mediaBg: 'linear-gradient(135deg,#1a2830,#0d1f1a)', location: 'Sendero de montaña · demo', type: 'reto', text: 'Reto deportivo desbloqueado: 30 días de entrenamientos outdoor registrados. Progresión saludable, no competición vacía.', sports: ['Trail','Funcional'], likes: 334, comments: 67 },
    { id: 'p5', user: 'Freedive Club', role: 'Agua', emoji: '🤿', time: 'hace 12h', mediaEmoji: '🛡️', mediaBg: 'linear-gradient(135deg,#071830,#040d20)', location: 'Playa deportiva · demo', type: 'seguridad', text: 'Safety Radar activado: compañero mínimo, boya visible, comunicación externa y salida marcada antes de entrar al agua.', sports: ['Apnea','Safety Radar'], likes: 198, comments: 43 },
    { id: 'p6', user: 'Pro Guide Verified', role: 'NOMADX Pro', emoji: '✅', time: 'hace 1d', mediaEmoji: '📅', mediaBg: 'linear-gradient(135deg,#1d1a0d,#0d1f3c)', location: 'Evento demo', type: 'evento', text: 'Quedada publicada con cupos, nivel, requisitos y semáforo de seguridad. NOMADX Pro como capa profesional, no como catálogo de servicios.', sports: ['Evento','Pro'], likes: 189, comments: 56 }
  );

  TRIBUS.splice(0, TRIBUS.length,
    { id: 't1', name: 'Trail & Mountain', icon: '🏔️', bgColor: '#1aff8c18', desc: 'Comunidad para trail, trekking, skyrunning y montaña responsable.', sports: ['Trail','Trekking','Skyrunning'], members: 2847, level: 'Todos los niveles', nextEvent: 'Plan activo · amanecer de montaña' },
    { id: 't2', name: 'Sea Tribe', icon: '🌊', bgColor: '#00d4ff20', desc: 'Agua, costa, apnea, snorkel, surf y coasteering con cultura de seguridad.', sports: ['Apnea','Surf','Coasteering'], members: 1923, level: 'Iniciación a avanzado', nextEvent: 'Spot reportado · condiciones favorables' },
    { id: 't3', name: 'Climbing Zone', icon: '🧗', bgColor: '#ff5e1a20', desc: 'Escalada, boulder, vía ferrata y entrenamiento vertical.', sports: ['Escalada','Boulder','Vía Ferrata'], members: 1650, level: 'Medio', nextEvent: 'Sesión técnica · rocódromo' },
    { id: 't4', name: 'MTB Riders', icon: '🚵', bgColor: '#ff5e1a15', desc: 'Enduro, gravel, XC, DH y bikepacking.', sports: ['MTB','Gravel','Bikepacking'], members: 2156, level: 'Todos los niveles', nextEvent: 'Ruta flow · plazas abiertas' },
    { id: 't5', name: 'Air Sports', icon: '🪂', bgColor: '#7c3aed20', desc: 'Vuelo libre, parapente, paramotor y deportes aéreos con criterio técnico.', sports: ['Parapente','Paramotor','Ala Delta'], members: 934, level: 'Verificado', nextEvent: 'Ventana meteorológica · revisión' },
    { id: 't6', name: 'Cave Explorers', icon: '🕳️', bgColor: '#1aff8c15', desc: 'Espeleología, cuevas, orientación y exploración subterránea.', sports: ['Espeleología','Rappel','Orientación'], members: 768, level: 'Técnico', nextEvent: 'Acceso solo con formación' },
    { id: 't7', name: 'Outdoor Creators', icon: '🎬', bgColor: '#00d4ff15', desc: 'Creadores outdoor que documentan deporte, aprendizaje y seguridad.', sports: ['Fotografía','Vídeo','Aventura'], members: 1234, level: 'Comunidad', nextEvent: 'Reto de Logbook visual' },
    { id: 't8', name: 'Functional Athletes', icon: '💪', bgColor: '#1aff8c20', desc: 'Entrenamiento funcional, movilidad y preparación física para deportes outdoor.', sports: ['Cross training','Movilidad','Resistencia'], members: 3421, level: 'Todos', nextEvent: 'Entreno base · domingo' },
    { id: 't9', name: 'Adventure Families', icon: '👥', bgColor: '#00d4ff18', desc: 'Planes outdoor familiares, progresivos y con seguridad clara.', sports: ['Senderismo','Kayak','Orientación'], members: 1120, level: 'Iniciación', nextEvent: 'Plan familiar · ruta verde' },
    { id: 't10', name: 'Extreme Sports', icon: '⚡', bgColor: '#ef444420', desc: 'Disciplinas de alto compromiso con acceso responsable y verificación.', sports: ['BASE','Free Solo','Big Wave'], members: 234, level: 'Solo expertos verificados', nextEvent: 'Contenido educativo · sin quedada abierta' }
  );

  SPOTS.splice(0, SPOTS.length,
    { id: 'sp1', name: 'Acantilado costero', icon: '🌊', env: 'Costa · Agua', sports: ['Coasteering','Apnea'], level: 'Avanzado', risk: 'rojo', season: 'Primavera-Verano', requirements: 'Formación, buen nado, revisión de mar y salidas', desc: 'Spot demo para evaluar acceso, profundidad, corrientes, salidas y respeto ambiental.' },
    { id: 'sp2', name: 'Zona de escalada', icon: '🧗', env: 'Roca · Vertical', sports: ['Escalada','Boulder'], level: 'Todos', risk: 'amarillo', season: 'Todo el año', requirements: 'Material homologado y técnica adecuada', desc: 'Sector demo con vías por nivel, reportes de estado y recomendaciones de comunidad.' },
    { id: 'sp3', name: 'Sendero de montaña', icon: '⛰️', env: 'Montaña', sports: ['Trail','Trekking'], level: 'Medio', risk: 'amarillo', season: 'Todo el año', requirements: 'Orientación, agua y meteorología revisada', desc: 'Ruta demo para planes, entrenamientos y entradas de Logbook.' },
    { id: 'sp4', name: 'Playa deportiva', icon: '🏄', env: 'Agua · Viento', sports: ['Surf','Kitesurf','SUP'], level: 'Todos', risk: 'verde', season: 'Todo el año', requirements: 'Respeto de zonas y condiciones', desc: 'Playa demo con filtros por viento, oleaje, temporada y comunidad.' },
    { id: 'sp5', name: 'Cueva visitable', icon: '🕳️', env: 'Subterráneo', sports: ['Espeleología','Orientación'], level: 'Técnico', risk: 'rojo', season: 'Todo el año', requirements: 'Permisos si procede, guía o formación', desc: 'Spot demo para diferenciar visita recreativa de actividad técnica.' },
    { id: 'sp6', name: 'Bike park', icon: '🚵', env: 'Ruedas', sports: ['MTB','DH','Enduro'], level: 'Medio', risk: 'amarillo', season: 'Todo el año', requirements: 'Casco, protecciones y lectura de línea', desc: 'Zona demo con líneas por nivel, estado y actividad reciente.' },
    { id: 'sp7', name: 'Lago / pantano', icon: '🛶', env: 'Agua interior', sports: ['Kayak','SUP','Natación'], level: 'Iniciación', risk: 'verde', season: 'Primavera-Verano', requirements: 'Chaleco y normativa local', desc: 'Spot demo para deportes acuáticos no motorizados.' },
    { id: 'sp8', name: 'Zona de despegue', icon: '🪂', env: 'Aire', sports: ['Parapente','Paramotor'], level: 'Verificado', risk: 'rojo', season: 'Según viento', requirements: 'Licencia, meteo y zona autorizada', desc: 'Punto demo para deportes aéreos con fuerte dependencia de condiciones.' }
  );

  EVENTS.splice(0, EVENTS.length,
    { id: 'e1', title: 'Salida coasteering nivel medio', type: 'aventura', date: 'Mayo 2026 · demo', location: 'Spot costero genérico', sports: ['Coasteering','Apnea'], level: 'Medio', cupo: '8 plazas · 3 libres', price: 'Plan comunitario', organizer: 'Sea Tribe', verified: true, semaforo: 'amarillo' },
    { id: 'e2', title: 'Ruta MTB técnica', type: 'aventura', date: 'Mayo 2026 · demo', location: 'Bike park demo', sports: ['MTB','Enduro'], level: 'Medio-alto', cupo: '10 plazas · 4 libres', price: 'Plan comunitario', organizer: 'MTB Flow', verified: true, semaforo: 'amarillo' },
    { id: 'e3', title: 'Entrenamiento outdoor', type: 'taller', date: 'Mayo 2026 · demo', location: 'Parque urbano', sports: ['Funcional','Trail'], level: 'Todos', cupo: '20 plazas · 12 libres', price: 'Gratis', organizer: 'Functional Athletes', verified: true, semaforo: 'verde' },
    { id: 'e4', title: 'Quedada de apnea recreativa', type: 'clinica', date: 'Mayo 2026 · demo', location: 'Playa deportiva', sports: ['Apnea','Snorkel'], level: 'Básico-intermedio', cupo: '6 plazas · 2 libres', price: 'Plan comunitario', organizer: 'Freedive Club', verified: true, semaforo: 'amarillo' },
    { id: 'e5', title: 'Jornada de escalada', type: 'formacion', date: 'Junio 2026 · demo', location: 'Zona de escalada', sports: ['Escalada','Boulder'], level: 'Medio', cupo: '12 plazas · 5 libres', price: 'Según organizador', organizer: 'Vertical Crew', verified: true, semaforo: 'rojo' },
    { id: 'e6', title: 'Expedición multiaventura', type: 'expedicion', date: 'Junio 2026 · demo', location: 'Entorno natural', sports: ['Trail','Kayak','Orientación'], level: 'Avanzado', cupo: '8 plazas · 1 libre', price: 'Según organizador', organizer: 'Pro Guide Verified', verified: true, semaforo: 'rojo' }
  );

  BADGES_DATA.splice(0, BADGES_DATA.length,
    { cat: 'rol', icon: '✅', name: 'Identidad verificada', desc: 'Perfil confirmado dentro de la plataforma' },
    { cat: 'rol', icon: '📡', name: 'Perfil activo', desc: 'Actividad reciente y participación real' },
    { cat: 'seguridad', icon: '🛡️', name: 'Safety First', desc: 'Cultura de seguridad demostrada' },
    { cat: 'experiencia', icon: '🧭', name: 'Explorador', desc: 'Spots y rutas registradas con criterio' },
    { cat: 'rol', icon: '🎬', name: 'Creador outdoor', desc: 'Contenido útil para la comunidad' },
    { cat: 'rol', icon: '🌟', name: 'Guía verificado', desc: 'Perfil profesional validado' },
    { cat: 'rol', icon: '📋', name: 'Instructor', desc: 'Formación acreditada en su disciplina' },
    { cat: 'experiencia', icon: '📅', name: 'Organizador de planes', desc: 'Crea eventos con requisitos claros' },
    { cat: 'seguridad', icon: '📍', name: 'Spotter responsable', desc: 'Reporta spots con información útil y prudente' },
    { cat: 'progresion', icon: '📓', name: 'Logbook completo', desc: 'Registros detallados de experiencia deportiva' },
    { cat: 'hitos', icon: '🤝', name: 'Comunidad positiva', desc: 'Buenas valoraciones de otros usuarios' },
    { cat: 'rol', icon: '💼', name: 'Pro verificado', desc: 'Profesional, club, centro o marca validada' }
  );

  PRO_TYPES.splice(0, PRO_TYPES.length,
    { icon: '🧭', name: 'Guías e instructores', desc: 'Perfil profesional verificado, calendario, eventos, documentación y reputación visible.' },
    { icon: '🏋️', name: 'Entrenadores', desc: 'Programas, grupos, seguimiento y planes de preparación para deportes outdoor.' },
    { icon: '🏢', name: 'Clubs y escuelas', desc: 'Gestión de grupos, cursos, cupos, requisitos y comunidad propia dentro de NOMADX.' },
    { icon: '🎬', name: 'Creadores outdoor', desc: 'Publicaciones, Logbook visual, colaboraciones y reputación saludable.' },
    { icon: '🛒', name: 'Marcas outdoor', desc: 'Marketplace futuro, partners, campañas y visibilidad basada en actividad y confianza.' },
    { icon: '📊', name: 'Centros deportivos', desc: 'Analíticas, eventos, reservas futuras y perfiles verificados para comunidades activas.' }
  );

  MATCH_CARDS.push(
    { id: 'm9', name: 'Air Sports Crew', role: 'Crew aéreo · perfiles verificados', profileType: 'Crew deportivo', emoji: '🪂', gradient: 'linear-gradient(135deg,#1a1030,#0d1828)', sports: ['Paracaidismo','Wingsuit','Parapente'], secondary: ['Tracking','Ala delta'], level: 'Avanzado', env: 'Aire y montaña', dist: 'Modo global', objective: 'Vuelos y progresión', risk: 'rojo', availability: 'Fines de semana', locationMode: 'Zonas de vuelo verificadas', badges: ['Air Explorer','Safety First','Verificado'], tribes: ['Air Sports','Extreme Jumpers'], planActive: 'Ventana de vuelo demo', compat: 95 },
    { id: 'm10', name: 'Sea Adventure Partner', role: 'Partner agua · Sea Tribe', profileType: 'Partner deportivo', emoji: '🌊', gradient: 'linear-gradient(135deg,#071830,#0d1025)', sports: ['Kayak de mar','Snorkel costero','SUP'], secondary: ['Apnea','Surf'], level: 'Medio', env: 'Mar y costa', dist: '18 km', objective: 'Planes de agua', risk: 'amarillo', availability: 'Tardes y domingos', locationMode: 'Costa cercana', badges: ['Sea Explorer','Comunidad positiva'], tribes: ['Sea Tribe','Kayak Explorers'], planActive: 'Kayak sunrise', compat: 90 },
    { id: 'm11', name: 'Snow & Ice Rider', role: 'Nieve · riders de temporada', profileType: 'Tribu de temporada', emoji: '❄️', gradient: 'linear-gradient(135deg,#0d1f3c,#14243d)', sports: ['Snowboard','Esquí de montaña','Splitboard'], secondary: ['Raquetas de nieve','Freeride'], level: 'Medio-alto', env: 'Nieve y frío', dist: 'Modo global', objective: 'Snow trips', risk: 'rojo', availability: 'Puentes y temporada', locationMode: 'Estaciones y montaña', badges: ['Cold Warrior','Mountain Soul'], tribes: ['Snow & Ice'], planActive: 'Snow trip', compat: 87 },
    { id: 'm12', name: 'Urban Parkour Team', role: 'Equipo urbano · acción', profileType: 'Equipo', emoji: '🏙️', gradient: 'linear-gradient(135deg,#101827,#1f1328)', sports: ['Parkour','Freerunning','Tricking'], secondary: ['Calistenia','Street workout'], level: 'Intermedio', env: 'Urbano', dist: '6 km', objective: 'Sesiones técnicas', risk: 'amarillo', availability: 'Entre semana', locationMode: 'Parques urbanos', badges: ['Urban Action','Perfil activo'], tribes: ['Urban Action'], planActive: 'Evento de parkour', compat: 84 },
    { id: 'm13', name: 'Functional Athlete', role: 'Rendimiento · preparación física', profileType: 'Atleta individual', emoji: '💪', gradient: 'linear-gradient(135deg,#1f1a0d,#0d1f10)', sports: ['Crossfit','HYROX','Entrenamiento funcional'], secondary: ['Movilidad','OCR'], level: 'Medio', env: 'Fitness y resistencia', dist: '4 km', objective: 'Entrenar con constancia', risk: 'amarillo', availability: 'Mañanas', locationMode: 'Box y outdoor', badges: ['Technical Progress','Perfil activo'], tribes: ['Functional Athletes','OCR / HYROX Lab'], planActive: 'Reto HYROX', compat: 92 },
    { id: 'm14', name: 'Cave Explorer', role: 'Exploración subterránea', profileType: 'Explorador técnico', emoji: '🕳️', gradient: 'linear-gradient(135deg,#0d0d1f,#100d20)', sports: ['Espeleología','Cave diving','Barranquismo'], secondary: ['Rápel','Orientación'], level: 'Técnico', env: 'Cueva y roca-agua', dist: 'Modo global', objective: 'Exploración responsable', risk: 'rojo', availability: 'Salidas planificadas', locationMode: 'Cuevas verificadas', badges: ['Safety First','Vertical Mind'], tribes: ['Cave Explorers','Vertical Rescue Mindset'], planActive: 'Salida técnica cerrada', compat: 89 },
    { id: 'm15', name: 'Endurance Beast', role: 'Ultraresistencia · demo', profileType: 'Atleta endurance', emoji: '🔥', gradient: 'linear-gradient(135deg,#2a140d,#101d0d)', sports: ['Triatlón','Ultratrail','Everesting'], secondary: ['Ironman','Bikepacking'], level: 'Avanzado', env: 'Resistencia', dist: '30 km', objective: 'Retos largos', risk: 'amarillo', availability: 'Bloques de entrenamiento', locationMode: 'Global', badges: ['Endurance Beast','Logbook completo'], tribes: ['Trail & Mountain'], planActive: 'Salida de orientación', compat: 88 },
    { id: 'm16', name: 'Kayak Explorer', role: 'Kayak · travesía', profileType: 'Partner acuático', emoji: '🛶', gradient: 'linear-gradient(135deg,#0d1f3c,#0a1520)', sports: ['Kayak de mar','Packraft','Travesías por calas'], secondary: ['SUP touring','Snorkel'], level: 'Medio', env: 'Mar, lago y río', dist: '22 km', objective: 'Travesías seguras', risk: 'amarillo', availability: 'Amaneceres', locationMode: 'Costa y pantanos', badges: ['Sea Explorer','Nature Respect'], tribes: ['Kayak Explorers','Sea Tribe'], planActive: 'Kayak sunrise', compat: 91 },
    { id: 'm17', name: 'Paragliding Mate', role: 'Vuelo libre · compañero', profileType: 'Compañero', emoji: '🪂', gradient: 'linear-gradient(135deg,#1a1030,#071830)', sports: ['Parapente','Paramotor','Ala delta'], secondary: ['Speed flying','Vuelo de montaña'], level: 'Avanzado', env: 'Aire', dist: 'Modo global', objective: 'Compartir ventanas buenas', risk: 'rojo', availability: 'Según meteo', locationMode: 'Zonas de despegue', badges: ['Air Explorer','Safety First'], tribes: ['Paragliding Network','Air Sports'], planActive: 'Revisión meteo demo', compat: 93 },
    { id: 'm18', name: 'Coasteering Squad', role: 'Costa, roca y agua', profileType: 'Squad', emoji: '🌊', gradient: 'linear-gradient(135deg,#0d1f3c,#201010)', sports: ['Coasteering','Cliff jumping','Psicobloc'], secondary: ['Snorkel','Kayak entre cuevas'], level: 'Avanzado', env: 'Costa y acantilado', dist: '26 km', objective: 'Planes con evaluación previa', risk: 'rojo', availability: 'Fines de semana', locationMode: 'Spots costeros', badges: ['Sea Explorer','Extreme Mindset'], tribes: ['Coasteering World','Cliff & Coast'], planActive: 'Plan de coasteering', compat: 94 },
    { id: 'm19', name: 'Trail Night Runner', role: 'Trail nocturno · seguridad', profileType: 'Runner', emoji: '🌙', gradient: 'linear-gradient(135deg,#0b1020,#142414)', sports: ['Trail running','Orientación','Fast hiking'], secondary: ['Marcha nórdica','Fotografía de tormentas'], level: 'Intermedio', env: 'Montaña', dist: '14 km', objective: 'Nocturnas planificadas', risk: 'amarillo', availability: 'Noches entre semana', locationMode: 'Senderos cercanos', badges: ['Night Explorer','Safety First'], tribes: ['Trail Night Club'], planActive: 'Trail nocturno', compat: 86 },
    { id: 'm20', name: 'Wild Photo Explorer', role: 'Creador outdoor · naturaleza', profileType: 'Creador', emoji: '📷', gradient: 'linear-gradient(135deg,#13251d,#0d1525)', sports: ['Fotografía de naturaleza','Senderismo','Expedición fotográfica'], secondary: ['Observación de fauna','Geocaching'], level: 'Todos', env: 'Naturaleza', dist: 'Modo global', objective: 'Documentar spots sin impacto', risk: 'verde', availability: 'Flexible', locationMode: 'Entornos naturales', badges: ['Nature Respect','Creador outdoor'], tribes: ['Nature Photographers','Outdoor Creators'], planActive: 'Quedada de fotografía', compat: 85 },
    { id: 'm21', name: 'HYROX Partner', role: 'Fitness competición', profileType: 'Partner de entrenamiento', emoji: '🏋️', gradient: 'linear-gradient(135deg,#1d1a0d,#24120c)', sports: ['HYROX','OCR','Cross training'], secondary: ['Running','Fuerza funcional'], level: 'Medio-alto', env: 'Fitness y urbano', dist: '3 km', objective: 'Preparar evento', risk: 'amarillo', availability: 'Lunes y jueves', locationMode: 'Box local', badges: ['Functional Athlete','Team Builder'], tribes: ['OCR / HYROX Lab','Functional Athletes'], planActive: 'Reto HYROX', compat: 96 },
    { id: 'm22', name: 'Rope Jump Crew', role: 'Saltos y cuerda · acceso responsable', profileType: 'Crew verificado', emoji: '⚡', gradient: 'linear-gradient(135deg,#2a0d0d,#100d20)', sports: ['Rope jumping','Puenting','Pendulum jump'], secondary: ['Highline','Rápel volado'], level: 'Solo expertos', env: 'Vacío y cuerda', dist: 'Modo global', objective: 'Cultura técnica y seguridad', risk: 'negro', availability: 'Eventos cerrados', locationMode: 'Entorno controlado', badges: ['Extreme Mindset','Safety First','Verificado'], tribes: ['Rope Jump Crew','Extreme Jumpers'], planActive: 'Contenido educativo', compat: 83 },
    { id: 'm23', name: 'Surfari Nomad', role: 'Surfari · viaje deportivo', profileType: 'Viajero deportivo', emoji: '🏄', gradient: 'linear-gradient(135deg,#0d1f3c,#1f1a0d)', sports: ['Surf','Longboard surf','Surfari'], secondary: ['Downwind foil','Kitesurf'], level: 'Medio', env: 'Mar y océano', dist: 'Modo global', objective: 'Escapadas por swell', risk: 'amarillo', availability: 'Ventanas de oleaje', locationMode: 'Costa global', badges: ['Sea Explorer','Global Nomad'], tribes: ['Surfari Tribe','Sea Tribe'], planActive: 'Surfari weekend', compat: 87 },
    { id: 'm24', name: 'Multiaventura Circle', role: 'Círculo multiaventura', profileType: 'Comunidad mixta', emoji: '🧭', gradient: 'linear-gradient(135deg,#0d1f10,#0d1f3c)', sports: ['Senderismo','Kayak','Escalada'], secondary: ['Orientación','Multiaventura familiar'], level: 'Iniciación a medio', env: 'Mixto', dist: '20 km', objective: 'Planes progresivos', risk: 'amarillo', availability: 'Domingos', locationMode: 'Entornos accesibles', badges: ['Multiaventura','Comunidad positiva'], tribes: ['Multiaventura NOMADX','Beginner Friendly Outdoor'], planActive: 'Multiaventura familiar', compat: 90 }
  );

  FEED_POSTS.push(
    { id: 'p7', user: 'Adventure Family', role: 'Adventure Families', emoji: '👥', time: 'hace 1d', mediaEmoji: '🧭', mediaBg: 'linear-gradient(135deg,#13251d,#0d1525)', location: 'Ruta familiar · demo', type: 'evento', text: 'Plan de tribu publicado: multiaventura familiar con ruta corta, orientación básica y descanso largo. El objetivo es progresar sin prisa.', sports: ['Senderismo','Orientación'], likes: 142, comments: 18, saves: 39, risk: 'verde', tribe: 'Adventure Families' },
    { id: 'p8', user: 'Air Sports Crew', role: 'Air Sports', emoji: '🪂', time: 'hace 1d', mediaEmoji: '🛡️', mediaBg: 'linear-gradient(135deg,#1a1030,#0d1828)', location: 'Zona de despegue · demo', type: 'seguridad', text: 'Reporte de condiciones: viento variable, plan aplazado. En deportes aéreos el mejor plan también puede ser no salir.', sports: ['Parapente','Safety Radar'], likes: 308, comments: 44, saves: 81, risk: 'rojo', tribe: 'Air Sports' },
    { id: 'p9', user: 'HYROX Partner', role: 'OCR / HYROX Lab', emoji: '🏋️', time: 'hace 2d', mediaEmoji: '📈', mediaBg: 'linear-gradient(135deg,#1d1a0d,#24120c)', location: 'Box urbano · demo', type: 'reto', text: 'Progreso semanal: carrera, trineo, wall balls y movilidad. La plataforma cruza entrenamiento con objetivos reales.', sports: ['HYROX','Cross training'], likes: 221, comments: 31, saves: 54, risk: 'amarillo', tribe: 'OCR / HYROX Lab' },
    { id: 'p10', user: 'Wild Photo Explorer', role: 'Outdoor Creators', emoji: '📷', time: 'hace 2d', mediaEmoji: '🌿', mediaBg: 'linear-gradient(135deg,#13251d,#0d1525)', location: 'Reserva natural · demo', type: 'aventura', text: 'Mini historia: 12 km, cero residuos, tres especies observadas y una entrada de Logbook centrada en respeto ambiental.', sports: ['Fotografía de naturaleza','Senderismo'], likes: 198, comments: 22, saves: 76, risk: 'verde', tribe: 'Nature Photographers' },
    { id: 'p11', user: 'Rope Jump Crew', role: 'Extreme Jumpers', emoji: '⚡', time: 'hace 2d', mediaEmoji: '⚫', mediaBg: 'linear-gradient(135deg,#2a0d0d,#100d20)', location: 'Entorno controlado · demo', type: 'seguridad', text: 'Recordatorio cultural: las disciplinas negras no son retos virales. Son actividad técnica, autorización, equipo, formación y supervisión.', sports: ['Rope jumping','Safety'], likes: 512, comments: 96, saves: 144, risk: 'negro', tribe: 'Extreme Jumpers' },
    { id: 'p12', user: 'Kayak Explorer', role: 'Kayak Explorers', emoji: '🛶', time: 'hace 3d', mediaEmoji: '🌅', mediaBg: 'linear-gradient(135deg,#0d1f3c,#0a1520)', location: 'Lago demo', type: 'aventura', text: 'Travesía sunrise registrada: 9 km, viento suave, chaleco, comunicación externa y parada de snorkel en zona segura.', sports: ['Kayak','Snorkel'], likes: 176, comments: 19, saves: 47, risk: 'amarillo', tribe: 'Kayak Explorers' },
    { id: 'p13', user: 'Coasteering Squad', role: 'Coasteering World', emoji: '🌊', time: 'hace 3d', mediaEmoji: '🧩', mediaBg: 'linear-gradient(135deg,#0d1f3c,#201010)', location: 'Acantilado costero · demo', type: 'tecnica', text: 'Comparativa de material general: calzado adherente, protección térmica y casco cambian mucho la experiencia. Sin material adecuado, no hay plan.', sports: ['Coasteering','Material'], likes: 269, comments: 41, saves: 118, risk: 'rojo', tribe: 'Coasteering World' },
    { id: 'p14', user: 'Surfari Nomad', role: 'Surfari Tribe', emoji: '🏄', time: 'hace 4d', mediaEmoji: '🌊', mediaBg: 'linear-gradient(135deg,#0d1f3c,#1f1a0d)', location: 'Costa atlántica · demo', type: 'spot', text: 'Reporte de condiciones: ola ordenada para nivel medio, viento lateral suave y dos planes compatibles para el fin de semana.', sports: ['Surf','Surfari'], likes: 303, comments: 52, saves: 91, risk: 'amarillo', tribe: 'Surfari Tribe' },
    { id: 'p15', user: 'Cave Explorer', role: 'Cave Explorers', emoji: '🕳️', time: 'hace 4d', mediaEmoji: '📋', mediaBg: 'linear-gradient(135deg,#0d0d1f,#100d20)', location: 'Cueva visitable · demo', type: 'seguridad', text: 'Checklist comunitario antes de entrar: permisos, compañero mínimo, comunicación externa, hora límite y plan de salida.', sports: ['Espeleología','Safety'], likes: 244, comments: 37, saves: 102, risk: 'rojo', tribe: 'Cave Explorers' },
    { id: 'p16', user: 'Trail Night Runner', role: 'Trail Night Club', emoji: '🌙', time: 'hace 5d', mediaEmoji: '🔦', mediaBg: 'linear-gradient(135deg,#0b1020,#142414)', location: 'Sendero nocturno · demo', type: 'evento', text: 'Invitación a plan: trail nocturno de 11 km, frontal obligatorio, ritmo conversacional y punto de corte definido.', sports: ['Trail running','Orientación'], likes: 167, comments: 24, saves: 58, risk: 'amarillo', tribe: 'Trail Night Club' },
    { id: 'p17', user: 'Paragliding Mate', role: 'Paragliding Network', emoji: '🪂', time: 'hace 5d', mediaEmoji: '☁️', mediaBg: 'linear-gradient(135deg,#1a1030,#071830)', location: 'Zona de vuelo · demo', type: 'spot', text: 'Spot guardado con aviso: revisar normativa, viento, acceso, zona de aterrizaje y ventana de vuelo antes de proponer plan.', sports: ['Parapente','Spot'], likes: 187, comments: 29, saves: 83, risk: 'rojo', tribe: 'Paragliding Network' },
    { id: 'p18', user: 'Snow & Ice Rider', role: 'Snow & Ice', emoji: '❄️', time: 'hace 6d', mediaEmoji: '🏔️', mediaBg: 'linear-gradient(135deg,#0d1f3c,#14243d)', location: 'Estación de nieve · demo', type: 'seguridad', text: 'Alerta de temporada: visibilidad irregular y fatiga acumulada. Safety Radar recomienda plan corto, comunicación y margen de retirada.', sports: ['Snowboard','Esquí de montaña'], likes: 216, comments: 35, saves: 72, risk: 'rojo', tribe: 'Snow & Ice' },
    { id: 'p19', user: 'Multiaventura Circle', role: 'Multiaventura NOMADX', emoji: '🧭', time: 'hace 6d', mediaEmoji: '🎯', mediaBg: 'linear-gradient(135deg,#0d1f10,#0d1f3c)', location: 'Entorno natural · demo', type: 'reto', text: 'Reto de variedad: agua, montaña, fitness y recuperación en el mismo mes. No todo progreso es ir más fuerte.', sports: ['Multiaventura','Logbook'], likes: 253, comments: 33, saves: 69, risk: 'amarillo', tribe: 'Multiaventura NOMADX' },
    { id: 'p20', user: 'Climbing Partner', role: 'Vertical Zone', emoji: '🪨', time: 'hace 1 sem', mediaEmoji: '🧗', mediaBg: 'linear-gradient(135deg,#24120c,#111827)', location: 'Rocódromo · demo', type: 'tecnica', text: 'Recomendación de disciplina: si vienes de fuerza funcional, el búlder puede ser una puerta brutal hacia la roca con progresión medible.', sports: ['Búlder','Escalada'], likes: 301, comments: 48, saves: 88, risk: 'amarillo', tribe: 'Vertical Zone' }
  );

  TRIBUS.push(
    { id: 't11', name: 'Snow & Ice', icon: '❄️', bgColor: '#00d4ff18', desc: 'Esquí, snowboard, splitboard, frío y cultura de seguridad invernal.', sports: ['Snowboard','Esquí de montaña','Splitboard'], members: 1480, level: 'Medio-avanzado', risk: 'rojo', plans: 7, badges: ['Cold Warrior'], nextEvent: 'Snow trip · demo' },
    { id: 't12', name: 'Motor Off-Road', icon: '🏍️', bgColor: '#ff5e1a18', desc: 'Enduro, motocross, 4x4 y conducción fuera de asfalto con respeto ambiental.', sports: ['Motocross','Enduro','4x4'], members: 930, level: 'Medio', risk: 'rojo', plans: 5, badges: ['Motor'], nextEvent: 'Circuito demo · cupos abiertos' },
    { id: 't13', name: 'Urban Action', icon: '🏙️', bgColor: '#7c3aed20', desc: 'Parkour, freerunning, calistenia urbana y acción técnica en ciudad.', sports: ['Parkour','Freerunning','Street workout'], members: 2411, level: 'Todos', risk: 'amarillo', plans: 9, badges: ['Urban Action'], nextEvent: 'Evento de parkour · demo' },
    { id: 't14', name: 'Extreme Jumpers', icon: '⚡', bgColor: '#ef444420', desc: 'Saltos, vacío y cuerda tratados como cultura técnica y no como espectáculo vacío.', sports: ['Rope jumping','Puenting','Bungee jumping'], members: 512, level: 'Expertos verificados', risk: 'negro', plans: 2, badges: ['Extreme Mindset','Safety First'], nextEvent: 'Acceso responsable · cerrado' },
    { id: 't15', name: 'Freediving Circle', icon: '🤿', bgColor: '#071830cc', desc: 'Apnea, freediving, respiración, calma y progresión segura en agua.', sports: ['Apnea','Freediving','Snorkel'], members: 1740, level: 'Iniciación a técnico', risk: 'rojo', plans: 8, badges: ['Water Spirit'], nextEvent: 'Clinic de apnea · demo' },
    { id: 't16', name: 'Multiaventura NOMADX', icon: '🧭', bgColor: '#1aff8c18', desc: 'Planes híbridos para quienes mezclan mar, montaña, roca, fitness y exploración.', sports: ['Multiaventura','Kayak','Senderismo'], members: 3020, level: 'Todos', risk: 'amarillo', plans: 12, badges: ['Multiaventura'], nextEvent: 'Multiaventura familiar · demo' },
    { id: 't17', name: 'Rope Jump Crew', icon: '🪢', bgColor: '#ef444415', desc: 'Cuerda, péndulo, vacío y revisión técnica estricta.', sports: ['Rope jumping','Pendulum jump','Highline'], members: 420, level: 'Solo expertos', risk: 'negro', plans: 1, badges: ['Rope Mindset'], nextEvent: 'Contenido educativo' },
    { id: 't18', name: 'Coasteering World', icon: '🌊', bgColor: '#00d4ff20', desc: 'Costa, roca, agua, saltos opcionales y lectura del mar.', sports: ['Coasteering','Cliff jumping','Psicobloc'], members: 1366, level: 'Medio-avanzado', risk: 'rojo', plans: 6, badges: ['Sea Explorer'], nextEvent: 'Plan de coasteering · demo' },
    { id: 't19', name: 'Paragliding Network', icon: '🪂', bgColor: '#7c3aed18', desc: 'Vuelo libre, meteorología, progresión y comunidad aérea responsable.', sports: ['Parapente','Paramotor','Ala delta'], members: 1088, level: 'Verificado', risk: 'rojo', plans: 4, badges: ['Air Explorer'], nextEvent: 'Ventana de vuelo · demo' },
    { id: 't20', name: 'Surfari Tribe', icon: '🏄', bgColor: '#00d4ff18', desc: 'Viajes de surf, olas, foil, viento y cultura de mar.', sports: ['Surf','Surfari','Wingfoil'], members: 2640, level: 'Todos', risk: 'amarillo', plans: 10, badges: ['Global Nomad'], nextEvent: 'Surfari weekend' },
    { id: 't21', name: 'Kayak Explorers', icon: '🛶', bgColor: '#0ea5e920', desc: 'Travesía, packraft, kayak de mar y agua interior.', sports: ['Kayak de mar','Packraft','SUP touring'], members: 1560, level: 'Iniciación a medio', risk: 'amarillo', plans: 8, badges: ['Water Spirit'], nextEvent: 'Kayak sunrise' },
    { id: 't22', name: 'Cliff & Coast', icon: '🪨', bgColor: '#ff5e1a16', desc: 'Acantilados, costa rocosa, fotografía y actividades híbridas mar-roca.', sports: ['Cliff diving','Psicobloc','Fotografía marina'], members: 990, level: 'Avanzado', risk: 'rojo', plans: 5, badges: ['Vertical Mind'], nextEvent: 'Reporte de spot' },
    { id: 't23', name: 'OCR / HYROX Lab', icon: '🏋️', bgColor: '#1aff8c20', desc: 'Rendimiento funcional, OCR, HYROX y preparación física medible.', sports: ['HYROX','OCR','Cross training'], members: 3210, level: 'Todos', risk: 'amarillo', plans: 14, badges: ['Technical Progress'], nextEvent: 'Reto HYROX' },
    { id: 't24', name: 'Wild Camping', icon: '🏕️', bgColor: '#1aff8c14', desc: 'Vivac, acampada, bushcraft y autosuficiencia responsable.', sports: ['Vivac','Bushcraft','Trekking'], members: 1180, level: 'Medio', risk: 'amarillo', plans: 6, badges: ['Nature Respect'], nextEvent: 'Retiro salvaje · demo' },
    { id: 't25', name: 'Nature Photographers', icon: '📷', bgColor: '#00d4ff12', desc: 'Fotografía de naturaleza, tormentas, fauna y documentación de spots.', sports: ['Fotografía de naturaleza','Observación de fauna','Senderismo'], members: 1777, level: 'Todos', risk: 'verde', plans: 9, badges: ['Creador outdoor'], nextEvent: 'Quedada fotográfica' },
    { id: 't26', name: 'Trail Night Club', icon: '🌙', bgColor: '#7c3aed14', desc: 'Trail nocturno, orientación, frontal, ritmo controlado y seguridad de grupo.', sports: ['Trail running','Orientación','Fast hiking'], members: 840, level: 'Intermedio', risk: 'amarillo', plans: 5, badges: ['Night Explorer'], nextEvent: 'Trail nocturno' },
    { id: 't27', name: 'Vertical Rescue Mindset', icon: '🛟', bgColor: '#ef444418', desc: 'Cultura de rescate, cuerda, primeros auxilios y criterio técnico.', sports: ['Rescate vertical','Rápel','Espeleología'], members: 520, level: 'Profesional', risk: 'rojo', plans: 3, badges: ['Safety First'], nextEvent: 'Formación demo' },
    { id: 't28', name: 'Women Outdoor Crew', icon: '✨', bgColor: '#7c3aed18', desc: 'Comunidad outdoor para mujeres con planes progresivos, seguros y acompañados.', sports: ['Trail','Escalada','Kayak'], members: 2050, level: 'Todos', risk: 'amarillo', plans: 11, badges: ['Team Builder'], nextEvent: 'Salida de iniciación' },
    { id: 't29', name: 'Beginner Friendly Outdoor', icon: '🌱', bgColor: '#1aff8c18', desc: 'Primeras aventuras, progresión suave, lenguaje claro y cero presión.', sports: ['Senderismo','Yoga','Kayak'], members: 2860, level: 'Principiantes', risk: 'verde', plans: 16, badges: ['First Adventure'], nextEvent: 'Ruta verde · demo' },
    { id: 't30', name: 'Pro Guides Network', icon: '✅', bgColor: '#1d1a0d', desc: 'Guías, instructores y perfiles profesionales verificados dentro de la plataforma.', sports: ['Formación','Eventos','Seguridad'], members: 680, level: 'Profesional', risk: 'variable', plans: 18, badges: ['Pro verificado'], nextEvent: 'Calendario Pro · demo' }
  );

  SPOTS.push(
    { id: 'sp9', name: 'Rocódromo', icon: '🧗', env: 'Urbano · roca indoor', sports: ['Escalada','Búlder'], level: 'Todos', risk: 'verde', season: 'Todo el año', requirements: 'Normas del centro, compañero o autobelay', permissions: 'Centro autorizado', access: 'Fácil', plans: 6, conditions: 'Interior estable', desc: 'Spot demo para sesiones técnicas, progresión y matches de escalada sin depender de meteorología.' },
    { id: 'sp10', name: 'Parque urbano', icon: '🏙️', env: 'Urbano · fitness', sports: ['Parkour','Calistenia','OCR urbana'], level: 'Todos', risk: 'amarillo', season: 'Todo el año', requirements: 'Calentamiento, progresión y respeto de uso público', permissions: 'Uso comunitario', access: 'Fácil', plans: 8, conditions: 'Revisar humedad y afluencia', desc: 'Zona demo para entrenamiento funcional, parkour progresivo y quedadas urbanas.' },
    { id: 'sp11', name: 'Río de aguas bravas', icon: '💧', env: 'Río · agua', sports: ['Rafting','Kayak de río','Hydrospeed'], level: 'Medio', risk: 'rojo', season: 'Según caudal', requirements: 'Caudal revisado, chaleco, casco y guía si procede', permissions: 'Revisar normativa', access: 'Medio', plans: 4, conditions: 'Caudal demo estable', desc: 'Spot demo para actividades de río con fuerte dependencia de caudal y experiencia.' },
    { id: 'sp12', name: 'Estación de nieve', icon: '❄️', env: 'Nieve · frío', sports: ['Snowboard','Esquí alpino','Splitboard'], level: 'Todos', risk: 'amarillo', season: 'Invierno', requirements: 'Equipo adecuado, estado físico y partes de nieve', permissions: 'Forfait o autorización', access: 'Medio', plans: 7, conditions: 'Visibilidad variable', desc: 'Spot demo de nieve con filtros por temporada, nivel, accesos y reporte de condiciones.' },
    { id: 'sp13', name: 'Zona de buceo', icon: '🤿', env: 'Subacuático · mar', sports: ['Buceo recreativo','Snorkel','Apnea'], level: 'Medio', risk: 'rojo', season: 'Primavera-Verano', requirements: 'Certificación cuando proceda, compañero y plan de salida', permissions: 'Centro o normativa local', access: 'Medio', plans: 5, conditions: 'Visibilidad media', desc: 'Spot demo para diferenciar snorkeling, apnea, buceo recreativo y prácticas técnicas.' },
    { id: 'sp14', name: 'Zona de parapente', icon: '🪂', env: 'Aire · montaña', sports: ['Parapente','Ala delta','Paramotor'], level: 'Verificado', risk: 'rojo', season: 'Según viento', requirements: 'Licencia, meteorología y zona autorizada', permissions: 'Zona regulada', access: 'Medio', plans: 3, conditions: 'Viento demo revisable', desc: 'Spot demo de deportes aéreos donde Safety Radar prioriza meteo, acceso y aterrizaje.' },
    { id: 'sp15', name: 'Circuito de motor', icon: '🏁', env: 'Motor · velocidad', sports: ['Motocross','Karting','Track day'], level: 'Medio', risk: 'rojo', season: 'Todo el año', requirements: 'Protecciones, briefing y normas del circuito', permissions: 'Instalación autorizada', access: 'Fácil', plans: 5, conditions: 'Pista seca demo', desc: 'Spot demo para motor con control de acceso y requisitos visibles.' },
    { id: 'sp16', name: 'Barranco técnico', icon: '🪢', env: 'Barranco · roca-agua', sports: ['Barranquismo','Rápel en cascada','Canyoning'], level: 'Técnico', risk: 'rojo', season: 'Según caudal', requirements: 'Formación, material técnico, caudal y grupo adecuado', permissions: 'Revisar permisos', access: 'Difícil', plans: 2, conditions: 'Caudal demo moderado', desc: 'Spot demo de barranco para explicar nivel técnico, exposición y permisos sin instrucciones operativas.' },
    { id: 'sp17', name: 'Ruta gravel', icon: '🚲', env: 'Ruedas · resistencia', sports: ['Gravel','Bikepacking','Orientación'], level: 'Medio', risk: 'amarillo', season: 'Todo el año', requirements: 'Autonomía, agua, luces y track revisado', permissions: 'Vías permitidas', access: 'Fácil', plans: 8, conditions: 'Terreno seco', desc: 'Ruta demo para planes de resistencia, navegación y Logbook con distancia y desnivel.' },
    { id: 'sp18', name: 'Sector de highline', icon: '🪢', env: 'Vacío · roca', sports: ['Highline','Slackline en altura','Rodeo line'], level: 'Solo expertos', risk: 'negro', season: 'Según viento', requirements: 'Equipo específico, autorización y equipo experto', permissions: 'Autorización necesaria', access: 'Difícil', plans: 1, conditions: 'Solo demo educativo', desc: 'Spot demo de alto compromiso para cultura de riesgo negro y acceso responsable.' },
    { id: 'sp19', name: 'Spot de surf', icon: '🏄', env: 'Mar · océano', sports: ['Surf','Longboard surf','Bodyboard'], level: 'Todos', risk: 'amarillo', season: 'Según swell', requirements: 'Lectura de olas, corrientes y convivencia en el pico', permissions: 'Uso comunitario', access: 'Fácil', plans: 9, conditions: 'Swell demo ordenado', desc: 'Spot demo para filtrar por olas, viento, nivel y actividad de tribu.' },
    { id: 'sp20', name: 'Zona de orientación', icon: '🧭', env: 'Naturaleza · exploración', sports: ['Orientación','Senderismo','Geocaching'], level: 'Iniciación', risk: 'verde', season: 'Todo el año', requirements: 'Mapa, brújula o dispositivo y límites del recorrido', permissions: 'Uso público responsable', access: 'Fácil', plans: 10, conditions: 'Terreno accesible', desc: 'Spot demo para planes beginner friendly, familias y retos de navegación.' }
  );

  EVENTS.push(
    { id: 'e7', title: 'Salida trail costera', type: 'aventura', date: 'Junio 2026 · demo', location: 'Sendero costero', sports: ['Trail running'], level: 'Medio', cupo: '14 plazas · 6 libres', price: 'Plan comunitario', organizer: 'Trail & Mountain', tribe: 'Trail & Mountain', spot: 'Sendero de montaña', requirements: 'Agua, calzado adecuado y ritmo conversacional', material: 'Frontal opcional, móvil cargado', verified: true, semaforo: 'amarillo' },
    { id: 'e8', title: 'Quedada MTB', type: 'aventura', date: 'Junio 2026 · demo', location: 'Bike park demo', sports: ['MTB','Enduro MTB'], level: 'Medio', cupo: '10 plazas · 4 libres', price: 'Plan comunitario', organizer: 'MTB Riders', tribe: 'MTB Riders', spot: 'Bike park', requirements: 'Casco y protecciones', material: 'Bici revisada y agua', verified: true, semaforo: 'amarillo' },
    { id: 'e9', title: 'Sesión de escalada', type: 'formacion', date: 'Junio 2026 · demo', location: 'Rocódromo', sports: ['Escalada','Búlder'], level: 'Todos', cupo: '16 plazas · 9 libres', price: 'Plan comunitario', organizer: 'Vertical Crew', tribe: 'Vertical Zone', spot: 'Rocódromo', requirements: 'Normas del centro', material: 'Pies de gato y magnesio si procede', verified: true, semaforo: 'verde' },
    { id: 'e10', title: 'Jornada de snorkel', type: 'aventura', date: 'Julio 2026 · demo', location: 'Playa deportiva', sports: ['Snorkel costero'], level: 'Iniciación', cupo: '12 plazas · 5 libres', price: 'Plan comunitario', organizer: 'Sea Tribe', tribe: 'Sea Tribe', spot: 'Zona de buceo', requirements: 'Buen nado básico', material: 'Máscara, tubo, aletas y boya si procede', verified: true, semaforo: 'verde' },
    { id: 'e11', title: 'Plan de coasteering', type: 'aventura', date: 'Julio 2026 · demo', location: 'Acantilado costero', sports: ['Coasteering'], level: 'Avanzado', cupo: '8 plazas · 2 libres', price: 'Plan comunitario', organizer: 'Coasteering Squad', tribe: 'Coasteering World', spot: 'Acantilado costero', requirements: 'Experiencia previa y condiciones favorables', material: 'Neopreno, casco y calzado adherente', verified: true, semaforo: 'rojo' },
    { id: 'e12', title: 'Ruta senderista', type: 'aventura', date: 'Julio 2026 · demo', location: 'Sendero de montaña', sports: ['Senderismo'], level: 'Iniciación', cupo: '20 plazas · 12 libres', price: 'Plan comunitario', organizer: 'Beginner Friendly Outdoor', tribe: 'Beginner Friendly Outdoor', spot: 'Sendero de montaña', requirements: 'Agua, protección solar y ritmo suave', material: 'Calzado cómodo', verified: true, semaforo: 'verde' },
    { id: 'e13', title: 'Clinic de apnea', type: 'clinica', date: 'Julio 2026 · demo', location: 'Piscina / costa', sports: ['Apnea','Freediving'], level: 'Básico-intermedio', cupo: '8 plazas · 3 libres', price: 'Plan comunitario', organizer: 'Freediving Circle', tribe: 'Freediving Circle', spot: 'Zona de buceo', requirements: 'Compañero mínimo y entorno controlado', material: 'Máscara, aletas y boya si procede', verified: true, semaforo: 'amarillo' },
    { id: 'e14', title: 'Evento de parkour', type: 'taller', date: 'Agosto 2026 · demo', location: 'Parque urbano', sports: ['Parkour'], level: 'Todos', cupo: '18 plazas · 10 libres', price: 'Plan comunitario', organizer: 'Urban Parkour Team', tribe: 'Urban Action', spot: 'Parque urbano', requirements: 'Calentamiento y progresión', material: 'Zapatilla estable', verified: true, semaforo: 'amarillo' },
    { id: 'e15', title: 'Reto HYROX', type: 'carrera', date: 'Agosto 2026 · demo', location: 'Box urbano', sports: ['HYROX','Cross training'], level: 'Medio', cupo: '24 plazas · 13 libres', price: 'Plan comunitario', organizer: 'HYROX Partner', tribe: 'OCR / HYROX Lab', spot: 'Parque urbano', requirements: 'Base de fuerza y carrera', material: 'Zapatillas y ropa técnica', verified: true, semaforo: 'amarillo' },
    { id: 'e16', title: 'Plan de vía ferrata', type: 'aventura', date: 'Septiembre 2026 · demo', location: 'Zona vertical', sports: ['Vía ferrata'], level: 'Medio', cupo: '6 plazas · 2 libres', price: 'Plan comunitario', organizer: 'Pro Guides Network', tribe: 'Vertical Zone', spot: 'Zona de escalada', requirements: 'Material homologado y guía si procede', material: 'Casco, arnés y disipador', verified: true, semaforo: 'rojo' },
    { id: 'e17', title: 'Quedada de fotografía de naturaleza', type: 'taller', date: 'Septiembre 2026 · demo', location: 'Reserva natural', sports: ['Fotografía de naturaleza','Senderismo'], level: 'Todos', cupo: '15 plazas · 8 libres', price: 'Plan comunitario', organizer: 'Wild Photo Explorer', tribe: 'Nature Photographers', spot: 'Zona de orientación', requirements: 'Respeto ambiental', material: 'Cámara o móvil y agua', verified: true, semaforo: 'verde' },
    { id: 'e18', title: 'Surfari weekend', type: 'expedicion', date: 'Octubre 2026 · demo', location: 'Costa atlántica', sports: ['Surf','Surfari'], level: 'Medio', cupo: '10 plazas · 5 libres', price: 'Plan comunitario', organizer: 'Surfari Tribe', tribe: 'Surfari Tribe', spot: 'Spot de surf', requirements: 'Nivel acorde al swell', material: 'Tabla, leash y neopreno si procede', verified: true, semaforo: 'amarillo' },
    { id: 'e19', title: 'Trail nocturno', type: 'aventura', date: 'Octubre 2026 · demo', location: 'Sendero nocturno', sports: ['Trail running','Orientación'], level: 'Intermedio', cupo: '12 plazas · 4 libres', price: 'Plan comunitario', organizer: 'Trail Night Runner', tribe: 'Trail Night Club', spot: 'Zona de orientación', requirements: 'Frontal, teléfono y ritmo controlado', material: 'Frontal, manta térmica y agua', verified: true, semaforo: 'amarillo' },
    { id: 'e20', title: 'Ruta gravel', type: 'aventura', date: 'Noviembre 2026 · demo', location: 'Ruta gravel', sports: ['Gravel','Bikepacking'], level: 'Medio', cupo: '16 plazas · 7 libres', price: 'Plan comunitario', organizer: 'Multiaventura Circle', tribe: 'Multiaventura NOMADX', spot: 'Ruta gravel', requirements: 'Autonomía, luces y track revisado', material: 'Kit reparación y agua', verified: true, semaforo: 'amarillo' }
  );

  BADGES_DATA.push(
    { cat: 'entorno', icon: '🪂', name: 'Air Explorer', desc: 'Actividad registrada en disciplinas de aire', req: 'Registrar deportes aéreos con Safety Radar', benefit: 'Señal de afinidad aérea' },
    { cat: 'entorno', icon: '🌊', name: 'Sea Explorer', desc: 'Historial activo en mar, costa o agua', req: 'Completar entradas de agua en Logbook', benefit: 'Mejora matching acuático' },
    { cat: 'entorno', icon: '🏔️', name: 'Mountain Soul', desc: 'Perfil fuerte en montaña y trail', req: 'Registrar rutas y desnivel', benefit: 'Afinidad con tribus de montaña' },
    { cat: 'entorno', icon: '🧗', name: 'Vertical Mind', desc: 'Progresión en roca, cuerda o verticalidad', req: 'Entradas de escalada, ferrata o cuerda', benefit: 'Contexto para partners técnicos' },
    { cat: 'experiencia', icon: '🔥', name: 'Endurance Beast', desc: 'Constancia en resistencia y larga distancia', req: 'Retos de trail, triatlón o ultra', benefit: 'Recomendaciones endurance' },
    { cat: 'experiencia', icon: '🧭', name: 'Multiaventura', desc: 'Variedad real entre varias familias deportivas', req: 'Registrar 5 entornos distintos', benefit: 'Matching híbrido más rico' },
    { cat: 'hitos', icon: '🌱', name: 'First Adventure', desc: 'Primera aventura registrada', req: 'Crear la primera entrada de Logbook', benefit: 'Desbloquea onboarding social' },
    { cat: 'seguridad', icon: '⚡', name: 'Extreme Mindset', desc: 'Respeto por actividades de alta exposición', req: 'Completar avisos de riesgo en planes rojos o negros', benefit: 'Cultura de seguridad visible' },
    { cat: 'seguridad', icon: '🌿', name: 'Nature Respect', desc: 'Comportamiento responsable en naturaleza', req: 'Reportes de mínimo impacto', benefit: 'Mejora reputación comunitaria' },
    { cat: 'progresion', icon: '🥾', name: 'Trail Starter', desc: 'Inicio sólido en senderismo o trail', req: '3 rutas registradas', benefit: 'Recomendaciones beginner friendly' },
    { cat: 'entorno', icon: '💧', name: 'Water Spirit', desc: 'Vínculo con agua, snorkel, kayak o natación', req: 'Registrar actividad acuática', benefit: 'Afinidad con Sea Tribe' },
    { cat: 'seguridad', icon: '🪢', name: 'Rope Mindset', desc: 'Criterio en cuerda y exposición', req: 'Planes de cuerda con checklist', benefit: 'Señal técnica para partners' },
    { cat: 'entorno', icon: '🧊', name: 'Cold Warrior', desc: 'Nieve, frío o inmersión fría', req: 'Registrar actividad de frío', benefit: 'Acceso a recomendaciones de temporada' },
    { cat: 'hitos', icon: '🌙', name: 'Night Explorer', desc: 'Aventuras nocturnas planificadas', req: 'Registrar una salida nocturna', benefit: 'Matching con planes nocturnos' },
    { cat: 'rol', icon: '🤝', name: 'Team Builder', desc: 'Crea comunidad y planes recurrentes', req: 'Organizar planes con buena valoración', benefit: 'Más confianza en quedadas' },
    { cat: 'progresion', icon: '📈', name: 'Technical Progress', desc: 'Mejora técnica documentada', req: 'Registrar aprendizajes concretos', benefit: 'Historial de progresión claro' },
    { cat: 'experiencia', icon: '📍', name: 'Local Spotter', desc: 'Documenta spots de forma útil y prudente', req: 'Reportar condiciones sin revelar accesos sensibles', benefit: 'Confianza de mapa comunitario' },
    { cat: 'hitos', icon: '🌍', name: 'Global Nomad', desc: 'Actividad en varias zonas o países', req: 'Logbook en 3 regiones distintas', benefit: 'Afinidad con comunidad global' }
  );

  STATE.counters = { vistos: 24, matches: 18, guardados: 8 };
}

function pushUniqueByName(target, items) {
  const existing = new Set(target.map(item => normalizeText(item.name || item.title || item.id)));
  items.forEach(item => {
    const key = normalizeText(item.name || item.title || item.id);
    if (!existing.has(key)) {
      target.push(item);
      existing.add(key);
    }
  });
}

function ensureNomadxDepthData() {
  ensureMatchPoolMinimum();
  pushUniqueByName(SPOTS, [
    { id: 'sp21', name: 'Cala para snorkel', icon: '🤿', env: 'Mar · costa', sports: ['Snorkel costero','Apnea','Fotografía marina'], level: 'Iniciación-media', risk: 'amarillo', season: 'Verano y días de mar estable', requirements: 'Buen nado, boya visible y respeto del fondo', permissions: 'Normativa local y zona de baño', access: 'Medio', plans: 6, conditions: 'Visibilidad demo media', desc: 'Spot genérico para snorkel responsable, registro de condiciones y planes suaves de agua.' },
    { id: 'sp22', name: 'Mirador de trail', icon: '🌄', env: 'Montaña · trail', sports: ['Trail running','Senderismo','Fotografía de naturaleza'], level: 'Medio', risk: 'amarillo', season: 'Todo el año', requirements: 'Agua, calzado y meteo revisada', permissions: 'Sendero público responsable', access: 'Medio', plans: 9, conditions: 'Terreno seco demo', desc: 'Punto de paso para rutas, retos de desnivel, fotografía y entradas de Logbook.' },
    { id: 'sp23', name: 'Zona de SUP', icon: '🏄', env: 'Agua tranquila', sports: ['Paddle surf','SUP yoga','Natación suave'], level: 'Iniciación', risk: 'verde', season: 'Primavera-Verano', requirements: 'Chaleco si procede, viento revisado y zona segura', permissions: 'Revisar normativa local', access: 'Fácil', plans: 7, conditions: 'Agua tranquila demo', desc: 'Spot genérico para planes de agua accesible, recuperación y comunidad beginner friendly.' },
    { id: 'sp24', name: 'Área de entrenamiento funcional outdoor', icon: '💪', env: 'Fitness · urbano', sports: ['Entrenamiento funcional','Calistenia','HYROX'], level: 'Todos', risk: 'verde', season: 'Todo el año', requirements: 'Calentamiento, progresión y convivencia de uso', permissions: 'Uso comunitario', access: 'Fácil', plans: 12, conditions: 'Zona seca demo', desc: 'Área demo para entrenos, preparación física y retos funcionales conectados al ADN deportivo.' }
  ]);
  pushUniqueByName(EVENTS, [
    { id: 'e21', title: 'Entreno OCR', type: 'taller', date: 'Noviembre 2026 · demo', location: 'Parque urbano', sports: ['OCR','Cross training'], level: 'Medio', cupo: '18 plazas · 8 libres', price: 'Plan comunitario', organizer: 'OCR Beast Mode', tribe: 'OCR / HYROX Lab', spot: 'Área de entrenamiento funcional outdoor', requirements: 'Base física general y movilidad', material: 'Zapatillas, guantes opcionales y agua', verified: true, semaforo: 'amarillo' },
    { id: 'e22', title: 'Jornada de barranquismo', type: 'aventura', date: 'Noviembre 2026 · demo', location: 'Barranco técnico', sports: ['Barranquismo','Canyoning'], level: 'Técnico', cupo: '6 plazas · 1 libre', price: 'Plan comunitario', organizer: 'Barranco Crew', tribe: 'Cave Explorers', spot: 'Barranco técnico', requirements: 'Experiencia previa, caudal revisado y material adecuado', material: 'Neopreno, casco, arnés y cuerda según organización', verified: true, semaforo: 'rojo' },
    { id: 'e23', title: 'Sesión de wingfoil', type: 'aventura', date: 'Diciembre 2026 · demo', location: 'Playa deportiva', sports: ['Wingfoil','Windfoil'], level: 'Avanzado', cupo: '8 plazas · 3 libres', price: 'Plan comunitario', organizer: 'Wingfoil Rider', tribe: 'Sea Tribe', spot: 'Playa deportiva', requirements: 'Viento favorable, material revisado y zona autorizada', material: 'Tabla, wing, leash, chaleco y neopreno si procede', verified: true, semaforo: 'rojo' },
    { id: 'e24', title: 'Quedada de movilidad y recuperación', type: 'taller', date: 'Diciembre 2026 · demo', location: 'Área outdoor', sports: ['Movilidad','Yoga','Recuperación activa'], level: 'Todos', cupo: '22 plazas · 15 libres', price: 'Plan comunitario', organizer: 'Functional Athletes', tribe: 'Functional Athletes', spot: 'Área de entrenamiento funcional outdoor', requirements: 'Esterilla opcional y ropa cómoda', material: 'Esterilla, agua y ropa cómoda', verified: true, semaforo: 'verde' }
  ]);
  pushUniqueByName(PRO_TYPES, [
    { icon: '📋', name: 'Gestión de eventos Pro', desc: 'Fichas técnicas, requisitos, documentación previa, cupos, lista de espera y check-in de participantes.' },
    { icon: '🛡️', name: 'Plantillas Safety Radar', desc: 'Briefings, permisos, material general, comunicación, plan de emergencia e informes post-actividad.' },
    { icon: '📣', name: 'Promoción por afinidad', desc: 'Eventos destacados según reputación, actividad y verificación, no por spam ni promesas absolutas.' },
    { icon: '📸', name: 'Profesionales de contenido', desc: 'Galería profesional, packs de contenido, colaboración con planes y página pública verificada.' }
  ]);
}

function getHeroMatchId() {
  ensureMatchPoolMinimum();
  return (MATCH_CARDS[STATE.currentMatchIdx] || MATCH_CARDS[0])?.id;
}

function initHeroLiveCards() {
  const card = document.querySelector('.match-phone-card');
  if (!card) return;
  ensureMatchPoolMinimum();
  const heroProfiles = MATCH_CARDS.filter(m => ['Marina Trail','Vertical Crew','MTB Flow','Air Sports Crew','Freedive Club'].includes(m.name));
  let idx = 0;
  const paint = () => {
    const m = heroProfiles[idx % heroProfiles.length] || MATCH_CARDS[0];
    if (!m) return;
    card.dataset.profileId = m.id;
    const avatar = card.querySelector('.match-phone-avatar');
    const name = card.querySelector('.match-phone-name');
    const role = card.querySelector('.match-phone-role');
    const tags = card.querySelector('.match-phone-tags');
    const compat = card.querySelector('.match-compat-num');
    if (avatar) avatar.textContent = m.emoji;
    if (name) name.textContent = m.name;
    if (role) role.textContent = `${(m.tribes || [m.role])[0]} · ${m.level}`;
    if (tags) tags.innerHTML = [...m.sports.slice(0, 2), ...(m.secondary || []).slice(0, 2)].map(s => `<span>${escapeHTML(s)}</span>`).join('');
    if (compat) compat.textContent = `${m.compat}%`;
    idx++;
  };
  paint();
  if (!document.querySelector('.hero-live-microcards')) {
    card.insertAdjacentHTML('afterend', `
      <div class="hero-live-microcards">
        <button onclick="openConnectModal(getHeroMatchId())"><strong>Match recomendado</strong><span>Perfil compatible ahora</span></button>
        <button onclick="openEventRequirements('e21')"><strong>Plan activo</strong><span>Entreno OCR · plazas abiertas</span></button>
        <button onclick="openDemoPanel('Safety Radar', '<p class=&quot;modal-demo-text&quot;>Radar verde/amarillo activo: revisa meteo, material, permisos y compañero mínimo antes de un plan técnico.</p>', '<button class=&quot;btn btn-primary&quot; onclick=&quot;closeSportModal()&quot;>Entendido</button>')"><strong>Safety Radar</strong><span>Señales de seguridad listas</span></button>
      </div>
    `);
  }
  window.setInterval(paint, 4200);
}

/* ═══════════════════════════════════════════════════════════
   HEADER: SCROLL + HAMBURGER
   ═══════════════════════════════════════════════════════════ */
function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  const setMenuOpen = (open) => {
    if (!hamburger || !mobileMenu) return;
    mobileMenu.classList.toggle('open', open);
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  };

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
    if (mobileMenu?.classList.contains('open')) setMenuOpen(false);
  }, { passive: true });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      setMenuOpen(!mobileMenu.classList.contains('open'));
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) setMenuOpen(false);
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   CATÁLOGO MAESTRO
   ═══════════════════════════════════════════════════════════ */
function initCatalog() {
  renderCatalogCategories();
  renderCatalogFilters();
  renderCatalog();

  const searchInput = document.getElementById('catalog-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.catalogSearch = normalizeText(e.target.value);
      STATE.catalogFilter = 'all';
      STATE.catalogVisible = 36;
      STATE.catalogFull = false;
      document.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
      document.querySelector('.cat-filter[data-cat="all"]')?.classList.add('active');
      renderCatalog();
    });
  }

  document.getElementById('catalog-more-btn')?.addEventListener('click', () => {
    STATE.catalogVisible += 36;
    renderCatalog();
  });
  document.getElementById('catalog-all-btn')?.addEventListener('click', () => {
    STATE.catalogFull = !STATE.catalogFull;
    renderCatalog();
  });
  document.getElementById('catalog-clear-btn')?.addEventListener('click', () => {
    resetCatalogFilters();
  });
}

function resetCatalogFilters() {
  STATE.catalogFilter = 'all';
  STATE.catalogSearch = '';
  STATE.catalogEnvironment = 'all';
  STATE.catalogRisk = 'all';
  STATE.catalogType = 'all';
  STATE.catalogCapability = 'all';
  STATE.catalogVisible = 36;
  STATE.catalogFull = false;
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.cat-filter,.catalog-pill').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.cat-filter[data-cat="all"]')?.classList.add('active');
  document.querySelectorAll('.catalog-pill[data-value="all"]').forEach(btn => btn.classList.add('active'));
  renderCatalog();
}

function renderCatalogCategories() {
  const el = document.getElementById('catalog-categories');
  if (!el) return;
  el.innerHTML = CATEGORIES.map(cat =>
    `<button class="cat-filter${cat.id === 'all' ? ' active' : ''}" data-cat="${cat.id}" role="listitem">
      ${cat.emoji} ${cat.name}
    </button>`
  ).join('');

  el.querySelectorAll('.cat-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      STATE.catalogFilter = btn.dataset.cat;
      STATE.catalogSearch = '';
      STATE.catalogVisible = 36;
      STATE.catalogFull = false;
      const searchInput = document.getElementById('catalog-search');
      if (searchInput) searchInput.value = '';
      el.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCatalog();
    });
  });
}

function renderCatalogFilters() {
  const quickEl = document.getElementById('catalog-quick-filters');
  if (quickEl) {
    const quickFilters = [
      ['catalogRisk', 'negro', 'Extremo'],
      ['catalogEnvironment', 'agua', 'Agua'],
      ['catalogEnvironment', 'aire', 'Aire'],
      ['catalogEnvironment', 'montaña', 'Montaña'],
      ['catalogCapability', 'matchable', 'Matching'],
      ['catalogCapability', 'logbook', 'Logbook'],
      ['catalogCapability', 'plans', 'Planes']
    ];
    quickEl.innerHTML = quickFilters.map(([state, value, label]) =>
      `<button class="catalog-pill quick-pill" type="button" data-state="${state}" data-value="${value}">${label}</button>`
    ).join('');
    quickEl.querySelectorAll('.catalog-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        STATE[btn.dataset.state] = btn.dataset.value;
        STATE.catalogVisible = 36;
        STATE.catalogFull = false;
        document.querySelectorAll(`.catalog-pill[data-state="${btn.dataset.state}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCatalog();
      });
    });
  }

  const filters = [
    {
      id: 'catalog-env-filters',
      state: 'catalogEnvironment',
      items: [
        ['all','Todos'], ['mar','Mar'], ['costa','Costa'], ['montaña','Montaña'], ['roca','Roca'], ['aire','Aire'],
        ['nieve','Nieve'], ['ruedas','Ruedas'], ['urbano','Urbano'], ['motor','Motor'], ['naturaleza','Naturaleza'], ['formación','Formación']
      ]
    },
    {
      id: 'catalog-risk-filters',
      state: 'catalogRisk',
      items: [['all','Todos'], ['verde','Verde'], ['amarillo','Amarillo'], ['rojo','Rojo'], ['negro','Negro']]
    },
    {
      id: 'catalog-type-filters',
      state: 'catalogType',
      items: [['all','Todos'], ['deporte','Deporte'], ['actividad','Actividad'], ['experiencia','Experiencia']]
    }
  ];

  filters[0].items = [
    ['all','Todos'], ['agua','Agua'], ['mar','Mar'], ['costa','Costa'], ['océano','Océano'], ['río','Río'], ['subacuático','Subacuático'],
    ['montaña','Montaña'], ['roca','Roca'], ['vertical','Vertical'], ['cueva','Cueva'], ['barranco','Barranco'], ['aire','Aire'],
    ['nieve','Nieve'], ['hielo','Hielo'], ['urbano','Urbano'], ['motor','Motor'], ['fitness','Fitness'], ['naturaleza','Naturaleza']
  ];
  filters[2].items = [
    ['all','Todos'], ['deporte','Deporte'], ['modalidad','Modalidad'], ['actividad','Actividad'], ['experiencia','Experiencia'],
    ['vivencia','Vivencia'], ['competición','Competición'], ['técnica','Técnica'], ['híbrida','Híbrida'], ['bienestar','Bienestar'], ['extremo','Extremo']
  ];

  filters.forEach(group => {
    const el = document.getElementById(group.id);
    if (!el) return;
    el.innerHTML = group.items.map(([value, label]) =>
      `<button class="catalog-pill${value === 'all' ? ' active' : ''}" type="button" data-state="${group.state}" data-value="${value}">${label}</button>`
    ).join('');
    el.querySelectorAll('.catalog-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        STATE[btn.dataset.state] = btn.dataset.value;
        STATE.catalogVisible = 36;
        STATE.catalogFull = false;
        el.querySelectorAll('.catalog-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCatalog();
      });
    });
  });
}

function renderCatalog() {
  const container = document.getElementById('catalog-container');
  const countEl = document.getElementById('catalog-count');
  if (!container) return;

  let filtered = SPORTS_DATA;
  if (STATE.catalogFilter !== 'all') {
    filtered = filtered.filter(s => s.cat === STATE.catalogFilter);
  }
  if (STATE.catalogSearch) {
    filtered = filtered.filter(s => {
      const haystack = normalizeText([s.name, ...(s.aliases || []), s.category, ...(s.secondaryCategories || []), s.material, s.description || s.desc, ...(s.environment || []), ...(s.type || [])].join(' '));
      return haystack.includes(STATE.catalogSearch);
    });
  }
  if (STATE.catalogEnvironment !== 'all') {
    filtered = filtered.filter(s => (s.environment || []).includes(STATE.catalogEnvironment));
  }
  if (STATE.catalogRisk !== 'all') {
    filtered = filtered.filter(s => s.riskLevel === STATE.catalogRisk);
  }
  if (STATE.catalogType !== 'all') {
    filtered = filtered.filter(s => (s.type || []).includes(STATE.catalogType));
  }
  if (STATE.catalogCapability !== 'all') {
    filtered = filtered.filter(s => Boolean(s[STATE.catalogCapability]));
  }

  const visibleLimit = STATE.catalogFull ? filtered.length : STATE.catalogVisible;
  const shown = filtered.slice(0, visibleLimit);

  document.querySelectorAll('[data-total-disciplines-claim]').forEach(el => {
    el.textContent = SPORTS_DATA.length >= 600 ? '600+' : `${SPORTS_DATA.length}`;
  });

  if (countEl) countEl.textContent = `Mostrando ${shown.length} de ${filtered.length} disciplinas · Catálogo NOMADX: ${SPORTS_DATA.length} entradas reales`;

  if (countEl) {
    countEl.textContent = `Mostrando ${shown.length} de ${filtered.length} disciplinas · Catálogo NOMADX: ${SPORTS_DATA.length} entradas reales desde lista maestra`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div class="catalog-empty">No se encontraron disciplinas para los filtros actuales. Ajusta búsqueda, entorno, riesgo o tipo.</div>`;
    return;
  }

  container.innerHTML = `<div class="catalog-card-grid">${shown.map(renderDisciplineCard).join('')}</div>`;

  container.querySelectorAll('[data-open-discipline]').forEach(btn => {
    btn.addEventListener('click', () => openSportModal(btn.dataset.openDiscipline));
  });
  container.querySelectorAll('[data-save-discipline]').forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleSaveSport(btn.dataset.saveDiscipline);
    });
  });

  const moreBtn = document.getElementById('catalog-more-btn');
  const allBtn = document.getElementById('catalog-all-btn');
  if (moreBtn) moreBtn.style.display = STATE.catalogFull || shown.length >= filtered.length ? 'none' : 'inline-flex';
  if (allBtn) allBtn.textContent = STATE.catalogFull ? 'Volver a vista resumida' : 'Ver catálogo completo';
}

function renderDisciplineCard(s) {
  const saved = STATE.savedSports.has(s.id);
  const typeLabel = (s.type || []).map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' · ');
  return `
    <article class="discipline-card" data-open-discipline="${s.id}">
      <div class="discipline-head">
        <div>
          <div class="discipline-name">${s.name}</div>
          <div class="discipline-meta" style="margin-top:.55rem">
            <span>${s.emoji} ${s.category}</span>
            <span><i class="risk-dot risk-${s.riskLevel}"></i> Riesgo ${s.riskLevel}</span>
          </div>
        </div>
        <div class="discipline-icon">${s.emoji}</div>
      </div>
      <p class="discipline-desc">${s.environment.slice(0, 3).join(' · ')} · ${typeLabel}. Intensidad ${s.intensity}.</p>
      <div class="discipline-capabilities">
        ${s.matchable ? '<span>Matching</span>' : ''}
        ${s.logbook ? '<span>Logbook</span>' : ''}
        ${s.plans ? '<span>Planes</span>' : '<span>Solo expertos</span>'}
      </div>
      <div class="discipline-actions">
        <button class="btn btn-ghost" type="button" data-save-discipline="${s.id}">${saved ? 'Guardado' : 'Guardar'}</button>
        <button class="btn btn-secondary" type="button" data-open-discipline="${s.id}">Ver detalles</button>
      </div>
    </article>
  `;
}

function openSportModal(sportId) {
  const sport = SPORTS_DATA.find(s => s.id === sportId);
  if (!sport) return;

  const saved = STATE.savedSports.has(sport.id);
  const catInfo = CATEGORIES.find(c => c.id === sport.cat) || { name: sport.category, emoji: sport.emoji };

  const riskLabels = { low: 'Bajo', medium: 'Medio', high: 'Alto', extreme: 'Extremo', verde: 'Verde', amarillo: 'Amarillo', rojo: 'Rojo', negro: 'Negro' };
  const riskColors = { low: 'var(--green)', medium: 'var(--yellow)', high: 'var(--orange)', extreme: 'var(--red)', verde: 'var(--green)', amarillo: 'var(--yellow)', rojo: 'var(--orange)', negro: 'var(--red)' };
  const riskKey = sport.riskLevel || sport.risk;
  const riskBarClass = sport.risk || (riskKey === 'verde' ? 'low' : riskKey === 'amarillo' ? 'medium' : riskKey === 'rojo' ? 'high' : 'extreme');
  const safetyNote = ['rojo','negro','high','extreme'].includes(riskKey)
    ? `<div class="safety-notice-text" style="margin-top:1rem;color:var(--yellow)">Actividad técnica o de riesgo. Requiere formación, experiencia, material adecuado y condiciones favorables.</div>`
    : '';

  const safetyNoteFull = riskKey === 'negro' || riskKey === 'extreme'
    ? `<div class="safety-notice-text" style="margin-top:1rem;color:var(--red)">Actividad extrema. No debe realizarse sin formación específica, autorización cuando proceda, planificación, supervisión y entorno controlado.</div>`
    : (riskKey === 'rojo' || riskKey === 'high'
      ? `<div class="safety-notice-text" style="margin-top:1rem;color:var(--yellow)">Actividad técnica o de riesgo. Requiere formación, experiencia, material adecuado, condiciones favorables y, cuando corresponda, profesionales cualificados.</div>`
      : safetyNote);
  const aliases = (sport.aliases || []).filter(Boolean);
  const secondaryCategories = (sport.secondaryCategories || []).filter(Boolean);
  const related = (sport.related || []).filter(Boolean);
  const tribes = (sport.tribes || []).filter(Boolean);

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-sport-name">${sport.emoji || ''} ${sport.name}</div>
    <div class="modal-badges">
      <span class="badge badge-white">${catInfo.emoji || ''} ${catInfo.name || ''}</span>
      <span class="badge badge-${riskBarClass === 'low' ? 'green' : riskBarClass === 'medium' ? 'gold' : riskBarClass === 'high' ? 'orange' : 'red'}">Riesgo ${riskLabels[riskKey] || riskKey}</span>
    </div>
    <p class="modal-desc">${sport.description || sport.desc}</p>
    ${aliases.length ? `<div class="modal-section-title">Aliases</div><div class="modal-related">${aliases.map(r => `<span>${r}</span>`).join('')}</div>` : ''}
    <div class="modal-section-title">Ficha NOMADX</div>
    <div class="sdp-grid" style="margin-bottom:1rem">
      <div><div class="sdp-item-key">Categoría principal</div><div class="sdp-item-val">${sport.category}</div></div>
      <div><div class="sdp-item-key">Categorías secundarias</div><div class="sdp-item-val">${secondaryCategories.length ? secondaryCategories.join(', ') : 'Sin secundarias'}</div></div>
      <div><div class="sdp-item-key">Entorno</div><div class="sdp-item-val">${(sport.environment || []).join(', ')}</div></div>
      <div><div class="sdp-item-key">Tipo</div><div class="sdp-item-val">${(sport.type || []).join(', ')}</div></div>
      <div><div class="sdp-item-key">Intensidad</div><div class="sdp-item-val">${sport.intensity || 'media'}</div></div>
      <div><div class="sdp-item-key">Nivel técnico</div><div class="sdp-item-val">${sport.technicalLevel || 'intermedio'}</div></div>
      <div><div class="sdp-item-key">Material</div><div class="sdp-item-val">${sport.material || 'Material específico según modalidad'}</div></div>
    </div>
    <div class="discipline-capabilities" style="margin-bottom:1rem">
      ${sport.matchable ? '<span>Matching</span>' : ''}
      ${sport.logbook ? '<span>Logbook</span>' : ''}
      ${sport.plans ? '<span>Planes</span>' : '<span>Plan solo con verificación</span>'}
    </div>
    <div class="modal-section-title">Deportes relacionados</div>
    <div class="modal-related">${related.map(r => `<span>${r}</span>`).join('')}</div>
    <div class="modal-section-title">Tribus recomendadas</div>
    <div class="modal-related">${tribes.map(r => `<span>${r}</span>`).join('') || '<span>Multiaventura NOMADX</span>'}</div>
    <div class="modal-section-title">Nivel de riesgo</div>
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:.5rem">
      <span style="font-family:var(--font-heading);font-size:.9rem;font-weight:700;color:${riskColors[riskKey]}">${riskLabels[riskKey] || riskKey}</span>
    </div>
    <div class="risk-bar-track"><div class="risk-bar-fill ${riskBarClass}"></div></div>
    ${safetyNoteFull}
    <div style="margin-top:1.5rem;display:flex;gap:.75rem">
      <button class="btn btn-${saved ? 'primary' : 'secondary'}" style="flex:1" id="modal-save-btn" onclick="toggleSaveSport('${sport.id}')">
        ${saved ? '★ Guardado' : '☆ Guardar en mi ADN'}
      </button>
      <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
    </div>
  `;

  document.getElementById('sport-modal').classList.add('open');
  document.body.classList.add('modal-open');
}

function toggleSaveSport(sportId) {
  if (STATE.savedSports.has(sportId)) {
    STATE.savedSports.delete(sportId);
    showToast('Deporte eliminado de tu ADN');
  } else {
    STATE.savedSports.add(sportId);
    showToast('¡Deporte añadido a tu ADN deportivo! 🏅');
  }
  saveState('nmx_sports_saved', STATE.savedSports);
  renderCatalog();
  // Actualizar botón del modal si está abierto
  const btn = document.getElementById('modal-save-btn');
  const saved = STATE.savedSports.has(sportId);
  if (btn) {
    btn.className = `btn btn-${saved ? 'primary' : 'secondary'}`;
    btn.textContent = saved ? '★ Guardado' : '☆ Guardar en mi ADN';
  }
}

/* ═══════════════════════════════════════════════════════════
   MATCHING
   ═══════════════════════════════════════════════════════════ */
function initMatching() {
  ensureMatchPoolMinimum();
  updateCounters();
  renderMatchCard();
  renderSavedMatches();
}

function renderMatchCard() {
  const el = document.getElementById('match-card-display');
  if (!el) return;
  ensureMatchPoolMinimum();
  if (MATCH_CARDS.length - STATE.currentMatchIdx < 6) {
    for (let i = 0; i < 6; i++) MATCH_CARDS.push(generateRandomMatch());
  }

  const m = MATCH_CARDS[STATE.currentMatchIdx] || MATCH_CARDS[0];
  if (!m) return;
  const isSaved = STATE.savedMatchIds.has(m.id);
  const isConnected = STATE.connectedMatchIds.has(m.id);
  const badgesHTML = badgeList(m.badges, 'badge-white');
  const tagsHTML = badgeList(m.sports, 'badge-cyan');
  const secondaryHTML = badgeList(m.secondary || [], 'badge-white');
  const tribeHTML = badgeList(m.tribes || [], 'badge-green');
  const nextMatches = MATCH_CARDS.slice(STATE.currentMatchIdx + 1, STATE.currentMatchIdx + 5);
  const visibleMatches = MATCH_CARDS.slice(STATE.currentMatchIdx, STATE.currentMatchIdx + 7);

  el.innerHTML = `
    <div class="match-card-top" style="background:${m.gradient}">
      <div class="match-avatar-lg" style="background:${m.gradient}">${m.emoji}</div>
      <div class="match-name">${escapeHTML(m.name)}</div>
      <div class="match-role">${escapeHTML(m.role)}</div>
      <div class="match-tags-row">${badgesHTML}</div>
      <div class="match-compat-big">
        <div class="match-compat-pct">${m.compat}%</div>
        <div class="match-compat-sub">Compatibilidad deportiva</div>
      </div>
    </div>
    <div class="match-info-grid">
      <div><div class="match-info-key">Deportes</div><div class="match-info-val">${escapeHTML(m.sports.slice(0, 2).join(', '))}</div></div>
      <div><div class="match-info-key">Nivel</div><div class="match-info-val">${escapeHTML(m.level)}</div></div>
      <div><div class="match-info-key">Entorno</div><div class="match-info-val">${escapeHTML(m.env)}</div></div>
      <div><div class="match-info-key">Distancia</div><div class="match-info-val">${escapeHTML(m.dist)}</div></div>
      <div><div class="match-info-key">Tipo</div><div class="match-info-val">${escapeHTML(m.profileType || 'Perfil deportivo')}</div></div>
      <div><div class="match-info-key">Riesgo habitual</div><div class="match-info-val">${escapeHTML(m.risk || 'variable')}</div></div>
      <div><div class="match-info-key">Disponibilidad</div><div class="match-info-val">${escapeHTML(m.availability || 'Flexible')}</div></div>
      <div><div class="match-info-key">Plan activo</div><div class="match-info-val">${escapeHTML(m.planActive || m.objective || 'Plan compatible')}</div></div>
    </div>
    <p class="match-bio">${escapeHTML(m.bio || 'Perfil deportivo compatible con tu ADN NOMADX.')}</p>
    <div class="match-chip-cloud">${tagsHTML}${secondaryHTML}${tribeHTML}</div>
    <div class="next-match-strip" aria-label="Siguientes matches sugeridos">
      ${nextMatches.map(n => `
        <button class="next-match-pill" onclick="jumpToMatch('${n.id}')" aria-label="Ver match ${escapeHTML(n.name)}">
          <span>${n.emoji}</span><strong>${escapeHTML(n.name)}</strong><em>${n.compat}%</em>
        </button>
      `).join('')}
    </div>
    <div class="match-visible-grid" aria-label="Perfiles compatibles visibles">
      ${visibleMatches.map(profile => `
        <article class="match-mini-profile${profile.id === m.id ? ' is-active' : ''}">
          <button class="match-mini-main" onclick="jumpToMatch('${profile.id}')" aria-label="Abrir perfil ${escapeHTML(profile.name)}">
            <span class="match-mini-avatar" style="background:${profile.gradient}">${profile.emoji}</span>
            <span>
              <strong>${escapeHTML(profile.name)}</strong>
              <small>${escapeHTML(profile.env)} · ${profile.compat}%</small>
            </span>
          </button>
          <button class="match-mini-connect" onclick="openConnectModal('${profile.id}')" aria-label="Conectar con ${escapeHTML(profile.name)}">Conectar</button>
        </article>
      `).join('')}
    </div>
    <div class="match-actions">
      <button class="match-btn mb-skip" onclick="matchAction('skip', '${m.id}')">✕ Pasar</button>
      <button class="match-btn mb-save${isSaved ? ' is-saved' : ''}" onclick="toggleSaveMatch('${m.id}', this)">${isSaved ? '★ Guardado' : '★ Guardar'}</button>
      <button class="match-btn mb-save" onclick="openAdnModal('${m.id}')">Ver ADN</button>
      <button class="match-btn mb-connect${isConnected ? ' is-connected' : ''}" onclick="openConnectModal('${m.id}')">${isConnected ? '✓ Conectado' : '⚡ Conectar'}</button>
    </div>
    <button class="match-generate-btn" onclick="generateMoreMatches(8)">Generar más matches</button>
  `;
}

function jumpToMatch(profileId) {
  const index = MATCH_CARDS.findIndex(m => m.id === profileId);
  if (index >= 0) {
    STATE.currentMatchIdx = index;
    renderMatchCard();
    showToast('Perfil cargado en el matching');
  }
}

function matchAction(action, profileId) {
  const m = getMatchById(profileId);
  if (!m) return;
  if (action === 'connect') return openConnectModal(m.id);
  if (action === 'save') return toggleSaveMatch(m.id);

  STATE.counters.vistos = Math.max(STATE.counters.vistos + 1, STATE.currentMatchIdx + 1);
  updateCounters();
  showToast('Perfil descartado');
  const card = document.querySelector('.match-card');
  if (card) card.classList.add('removing');
  setTimeout(() => {
    STATE.currentMatchIdx++;
    renderMatchCard();
  }, 240);
}

function toggleSaveMatch(profileId, btn) {
  const m = getMatchById(profileId);
  if (!m) return;
  if (STATE.savedMatchIds.has(m.id)) {
    STATE.savedMatchIds.delete(m.id);
    showToast(`${m.name} eliminado de guardados`);
  } else {
    STATE.savedMatchIds.add(m.id);
    showToast(`${m.name} guardado en matches favoritos`);
  }
  saveState('nmx_matches_saved', STATE.savedMatchIds);
  updateCounters();
  renderSavedMatches();
  if (btn) {
    const saved = STATE.savedMatchIds.has(m.id);
    btn.classList.toggle('is-saved', saved);
    btn.textContent = saved ? '★ Guardado' : '★ Guardar';
  }
  renderMatchCard();
}

function openConnectModal(profileId) {
  const m = getMatchById(profileId);
  if (!m) return;
  const commonSports = m.sports.slice(0, 3);
  const commonTribes = (m.tribes || []).slice(0, 2);
  const body = `
    <div class="match-modal-hero" style="background:${m.gradient}">
      <div class="match-avatar-lg">${m.emoji}</div>
      <div>
        <div class="match-modal-name">${escapeHTML(m.name)}</div>
        <div class="match-modal-role">${escapeHTML(m.profileType || m.role)}</div>
      </div>
      <div class="match-modal-compat">${m.compat}%</div>
    </div>
    <div class="modal-info-grid">
      <div><strong>Por qué encaja</strong><span>Comparte entorno ${escapeHTML(m.env)}, nivel ${escapeHTML(m.level)} y plan activo compatible.</span></div>
      <div><strong>Plan sugerido</strong><span>${escapeHTML(m.planActive || m.objective || 'Crear plan conjunto')}</span></div>
      <div><strong>Deportes en común</strong><span>${escapeHTML(commonSports.join(', '))}</span></div>
      <div><strong>Tribus en común</strong><span>${escapeHTML(commonTribes.join(', ') || 'Multiaventura NOMADX')}</span></div>
    </div>
    <label class="match-message-label" for="match-message">Mensaje editable</label>
    <textarea id="match-message" class="match-message-box">Hola ${escapeHTML(m.name)}, tenemos buena afinidad en ${escapeHTML(commonSports[0] || 'aventura')}. ¿Te apetece revisar un plan compatible esta semana?</textarea>
  `;
  const actions = `
    <button class="btn btn-primary" onclick="sendMatchRequest('${m.id}')">Enviar solicitud</button>
    <button class="btn btn-secondary" onclick="toggleSaveMatch('${m.id}')">Guardar match</button>
    <button class="btn btn-ghost" onclick="openAdnModal('${m.id}')">Ver ADN</button>
    <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
  `;
  openDemoPanel(`Conectar con ${escapeHTML(m.name)}`, body, actions);
}

function sendMatchRequest(profileId) {
  const m = getMatchById(profileId);
  if (!m) return;
  STATE.connectedMatchIds.add(m.id);
  STATE.savedMatchIds.add(m.id);
  saveState('nmx_matches_connected', STATE.connectedMatchIds);
  saveState('nmx_matches_saved', STATE.savedMatchIds);
  STATE.counters.vistos = Math.max(STATE.counters.vistos + 1, STATE.currentMatchIdx + 1);
  updateCounters();
  renderSavedMatches();
  renderMatchCard();
  closeSportModal();
  showToast(`Solicitud enviada a ${m.name}`);
}

function openAdnModal(profileId) {
  const m = getMatchById(profileId);
  if (!m) return;
  const body = `
    <div class="modal-info-grid">
      <div><strong>Deportes principales</strong><span>${escapeHTML(m.sports.join(', '))}</span></div>
      <div><strong>Disciplinas secundarias</strong><span>${escapeHTML((m.secondary || []).join(', ') || 'Por descubrir')}</span></div>
      <div><strong>Estilo deportivo</strong><span>${escapeHTML(m.profileType || 'Perfil deportivo')}</span></div>
      <div><strong>Nivel técnico</strong><span>${escapeHTML(m.level)}</span></div>
      <div><strong>Entorno favorito</strong><span>${escapeHTML(m.env)}</span></div>
      <div><strong>Riesgo habitual</strong><span>${escapeHTML(m.risk || 'variable')}</span></div>
      <div><strong>Disponibilidad</strong><span>${escapeHTML(m.availability || 'Flexible')}</span></div>
      <div><strong>Compatibilidad contigo</strong><span>${m.compat}% por deporte, tribu, entorno y disponibilidad.</span></div>
    </div>
    <div class="modal-section-title">Insignias</div>
    <div class="modal-related">${badgeList(m.badges, 'badge-gold')}</div>
    <div class="modal-section-title">Posibles planes juntos</div>
    <div class="modal-related">${badgeList([m.planActive || m.objective, ...(m.tribes || []).slice(0, 2)], 'badge-cyan')}</div>
  `;
  const actions = `
    <button class="btn btn-primary" onclick="openConnectModal('${m.id}')">Conectar</button>
    <button class="btn btn-secondary" onclick="toggleSaveMatch('${m.id}')">Guardar</button>
    <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
  `;
  openDemoPanel(`ADN deportivo · ${escapeHTML(m.name)}`, body, actions);
}

function resetMatching() {
  STATE.currentMatchIdx = 0;
  renderMatchCard();
}

function updateCounters() {
  STATE.counters.guardados = Math.max(STATE.savedMatchIds.size, STATE.counters.guardados || 0);
  STATE.counters.matches = Math.max(STATE.connectedMatchIds.size, STATE.counters.matches || 0);
  ['vistos','matches','guardados'].forEach(key => {
    const el = document.getElementById(`counter-${key}`);
    if (el) el.textContent = STATE.counters[key];
  });
}

function renderSavedMatches() {
  const el = document.getElementById('saved-matches-list');
  if (!el) return;
  const saved = MATCH_CARDS.filter(m => STATE.savedMatchIds.has(m.id)).slice(0, 8);
  const list = saved.length ? saved : MATCH_CARDS.slice(0, 4);
  el.innerHTML = list.map(m => `
    <button class="saved-match-item" onclick="openAdnModal('${m.id}')" aria-label="Abrir ADN de ${escapeHTML(m.name)}">
      <div class="smi-avatar" style="background:${m.gradient}">${m.emoji}</div>
      <div>
        <div class="smi-name">${escapeHTML(m.name)}</div>
        <div style="font-size:.7rem;color:var(--text-muted)">${STATE.connectedMatchIds.has(m.id) ? 'Conectado' : STATE.savedMatchIds.has(m.id) ? 'Guardado' : 'Sugerido'}</div>
      </div>
      <div class="smi-compat">${m.compat}%</div>
    </button>
  `).join('');
}
/* ═══════════════════════════════════════════════════════════
   FEED
   ═══════════════════════════════════════════════════════════ */
function initFeed() {
  renderFeed();

  document.querySelectorAll('.feed-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      STATE.feedFilter = tab.dataset.filter;
      document.querySelectorAll('.feed-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', false);
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', true);
      renderFeed();
    });
  });
}

function renderFeed() {
  const el = document.getElementById('feed-container');
  if (!el) return;
  const posts = STATE.feedFilter === 'all' ? FEED_POSTS : FEED_POSTS.filter(p => p.type === STATE.feedFilter);
  if (posts.length === 0) {
    el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted);font-family:var(--font-heading)">No hay publicaciones de este tipo aún.</div>`;
    return;
  }
  const typeLabels = { aventura:'Aventura', tecnica:'Técnica', spot:'Spot', reto:'Reto', seguridad:'Seguridad', evento:'Evento' };
  const typeColors = { aventura:'orange', tecnica:'cyan', spot:'green', reto:'purple', seguridad:'red', evento:'gold' };

  el.innerHTML = posts.map(p => `
    <article class="feed-post" id="post-${p.id}">
      <div class="post-header">
        <div class="post-avatar" style="background:linear-gradient(135deg,var(--orange),#7c3aed)">${p.emoji}</div>
        <div>
          <div class="post-user-name">${p.user}</div>
          <div class="post-user-role">${p.role}</div>
        </div>
        <div class="post-time">${p.time}</div>
      </div>
      <div class="post-media">
        <div class="post-media-bg" style="background:${p.mediaBg}">${p.mediaEmoji}</div>
        <div class="post-type-badge"><span class="badge badge-${typeColors[p.type] || 'white'}">${typeLabels[p.type] || p.type}</span></div>
        <div class="post-location">${p.location}</div>
      </div>
      <div class="post-body">
        <p class="post-text">${p.text}</p>
        <div class="post-sport-tags">${p.sports.map(s => `<span class="post-sport-tag">${s}</span>`).join('')}</div>
        <div class="post-meta-row">
          <span>Riesgo: ${p.risk || 'variable'}</span>
          <span>Tribu: ${p.tribe || p.role}</span>
        </div>
      </div>
      <div class="post-footer">
        <button class="post-action-btn" onclick="toggleLike('${p.id}', this)" aria-label="Me gusta">
          ❤️ <span>${p.likes}</span>
        </button>
        <button class="post-action-btn" onclick="openPostModal('${p.id}')" aria-label="Comentar">
          💬 <span>${p.comments}</span>
        </button>
        <button class="post-action-btn" onclick="sharePost('${p.id}')" aria-label="Compartir">
          ↗️ Compartir
        </button>
        <button class="post-action-btn${STATE.savedPosts.has(p.id) ? ' saved' : ''}" onclick="togglePostSave('${p.id}', this)" aria-label="Guardar">
          🔖 <span>${p.saves || 0}</span>
        </button>
      </div>
    </article>
  `).join('');
}

function toggleLike(postId, btn) {
  btn.classList.toggle('liked');
  const countEl = btn.querySelector('span');
  const post = FEED_POSTS.find(p => p.id === postId);
  if (btn.classList.contains('liked')) {
    post.likes++;
    showToast('¡Like enviado! ❤️');
  } else {
    post.likes--;
  }
  if (countEl) countEl.textContent = post.likes;
}

function getPostById(postId) {
  return FEED_POSTS.find(p => p.id === postId);
}

function openPostModal(postId) {
  const post = getPostById(postId);
  if (!post) return;
  const body = `
    <div class="modal-info-grid">
      <div><strong>Usuario</strong><span>${escapeHTML(post.user)} · ${escapeHTML(post.role)}</span></div>
      <div><strong>Disciplina</strong><span>${escapeHTML(post.sports.join(', '))}</span></div>
      <div><strong>Tipo</strong><span>${escapeHTML(post.type)}</span></div>
      <div><strong>Tribu relacionada</strong><span>${escapeHTML(post.tribe || post.role)}</span></div>
      <div><strong>Riesgo</strong><span>${escapeHTML(post.risk || 'variable')}</span></div>
      <div><strong>Interacciones</strong><span>${post.likes} likes · ${post.comments} comentarios · ${post.saves || 0} guardados</span></div>
    </div>
    <p class="modal-demo-text">${escapeHTML(post.text)}</p>
    <div class="modal-related">${badgeList(post.sports, 'badge-cyan')}</div>
  `;
  const actions = `
    <button class="btn btn-primary" onclick="showToast('Comentario añadido al hilo demo')">Comentar</button>
    <button class="btn btn-secondary" onclick="togglePostSave('${post.id}')">Guardar</button>
    <button class="btn btn-ghost" onclick="sharePost('${post.id}')">Compartir</button>
    <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
  `;
  openDemoPanel(`Publicación · ${escapeHTML(post.user)}`, body, actions);
}

function sharePost(postId) {
  const post = getPostById(postId);
  showToast(`Publicación ${post ? `de ${post.user}` : ''} preparada para compartir`);
}

function togglePostSave(postId, btn) {
  const post = getPostById(postId);
  if (!post) return;
  if (STATE.savedPosts.has(postId)) {
    STATE.savedPosts.delete(postId);
    post.saves = Math.max(0, (post.saves || 0) - 1);
    showToast('Post eliminado de guardados');
  } else {
    STATE.savedPosts.add(postId);
    post.saves = (post.saves || 0) + 1;
    showToast('Post guardado en tu feed NOMADX');
  }
  saveState('nmx_posts_saved', STATE.savedPosts);
  if (btn) {
    btn.classList.toggle('saved', STATE.savedPosts.has(postId));
    const span = btn.querySelector('span');
    if (span) span.textContent = post.saves || 0;
  } else {
    renderFeed();
  }
}

/* ═══════════════════════════════════════════════════════════
   TRIBUS
   ═══════════════════════════════════════════════════════════ */
function initTribus() {
  const el = document.getElementById('tribus-container');
  if (!el) return;

  el.innerHTML = TRIBUS.map(t => {
    const joined = STATE.joinedTribus.has(t.id);
    return `
    <article class="tribu-card" id="tribu-${t.id}">
      <div class="tribu-header" style="border-color:${t.bgColor}">
        <div class="tribu-icon" style="background:${t.bgColor}">${t.icon}</div>
        <div>
          <div class="tribu-name">${t.name}</div>
          <div class="tribu-members">${t.members.toLocaleString('es')} miembros</div>
        </div>
      </div>
      <div class="tribu-body">
        <p class="tribu-desc">${t.desc}</p>
        <div class="tribu-sports">${t.sports.map(s => `<span class="badge badge-white">${s}</span>`).join('')}</div>
        <div class="tribu-mini-grid">
          <span>Riesgo: ${t.risk || 'variable'}</span>
          <span>Planes: ${t.plans || Math.max(1, Math.round(t.members / 480))}</span>
          <span>Actividad: ${t.activity || t.nextEvent}</span>
        </div>
        <div class="tribu-sports">${(t.badges || ['Comunidad activa']).map(s => `<span class="badge badge-green">${s}</span>`).join('')}</div>
        <div class="tribu-event">${t.nextEvent}</div>
        <div class="tribu-footer">
          <span class="tribu-level">${t.level}</span>
          <div class="tribu-actions">
            <button class="tribu-view-btn" onclick="openTribuModal('${t.id}')">Ver tribu</button>
            <button class="tribu-join-btn${joined ? ' joined' : ''}" onclick="toggleTribu('${t.id}', this)">
              ${joined ? '✓ Unido' : 'Unirme'}
            </button>
          </div>
        </div>
      </div>
    </article>`;
  }).join('');
}

function toggleTribu(tribuId, btn) {
  if (STATE.joinedTribus.has(tribuId)) return; // no desjoin en prototipo
  STATE.joinedTribus.add(tribuId);
  saveState('nmx_tribus_joined', STATE.joinedTribus);
  if (btn) {
    btn.classList.add('joined');
    btn.textContent = '✓ Unido';
  }
  const tribu = TRIBUS.find(t => t.id === tribuId);
  showToast(`¡Te has unido a ${tribu?.name}! 🎉`);
}

function openTribuModal(tribuId) {
  const tribu = TRIBUS.find(t => t.id === tribuId);
  if (!tribu) return;
  const relatedProfiles = MATCH_CARDS
    .filter(m => (m.tribes || []).includes(tribu.name) || m.sports.some(s => tribu.sports.includes(s)))
    .slice(0, 4);
  const relatedPlans = EVENTS
    .filter(e => e.tribe === tribu.name || e.sports.some(s => tribu.sports.includes(s)))
    .slice(0, 4);
  const relatedPosts = FEED_POSTS
    .filter(p => p.tribe === tribu.name || p.sports.some(s => tribu.sports.includes(s)))
    .slice(0, 3);

  const body = `
    <p class="modal-demo-text">${escapeHTML(tribu.desc)}</p>
    <div class="modal-info-grid">
      <div><strong>Miembros</strong><span>${tribu.members.toLocaleString('es')}</span></div>
      <div><strong>Nivel medio</strong><span>${escapeHTML(tribu.level)}</span></div>
      <div><strong>Riesgo medio</strong><span>${escapeHTML(tribu.risk || 'variable')}</span></div>
      <div><strong>Planes activos</strong><span>${tribu.plans || Math.max(1, Math.round(tribu.members / 480))}</span></div>
      <div><strong>Actividad reciente</strong><span>${escapeHTML(tribu.activity || tribu.nextEvent)}</span></div>
      <div><strong>Safety Radar</strong><span>Revisar nivel, meteorología, permisos y compañero mínimo según disciplina.</span></div>
    </div>
    <div class="modal-section-title">Deportes principales</div>
    <div class="modal-related">${badgeList(tribu.sports, 'badge-cyan')}</div>
    <div class="modal-section-title">Perfiles destacados</div>
    <div class="modal-related">${badgeList(relatedProfiles.map(p => `${p.name} · ${p.compat}%`), 'badge-white') || '<span>Perfiles afines pendientes de cargar</span>'}</div>
    <div class="modal-section-title">Planes activos</div>
    <div class="modal-related">${badgeList(relatedPlans.map(p => p.title), 'badge-green') || '<span>Sin planes activos ahora mismo</span>'}</div>
    <div class="modal-section-title">Últimos posts</div>
    <div class="modal-related">${badgeList(relatedPosts.map(p => p.type), 'badge-gold') || '<span>Actividad reciente de comunidad</span>'}</div>
    <p class="spot-safety-note">Normas básicas: respeto, nada de spam, no publicar ubicaciones sensibles y priorizar seguridad, permisos y cuidado del entorno.</p>
  `;
  const actions = `
    <button class="btn btn-primary" onclick="toggleTribu('${tribu.id}', document.querySelector('#tribu-${tribu.id} .tribu-join-btn'))">Unirme</button>
    <button class="btn btn-secondary" onclick="showToast('Tribu guardada en tu ADN social')">Guardar tribu</button>
    <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
  `;
  openDemoPanel(`Tribu · ${escapeHTML(tribu.name)}`, body, actions);
}

/* ═══════════════════════════════════════════════════════════
   MAPA DE SPOTS
   ═══════════════════════════════════════════════════════════ */
function initSpots() {
  renderSpotsList();
  renderMapPins();
}

function renderSpotsList() {
  const el = document.getElementById('spots-list');
  if (!el) return;
  el.innerHTML = SPOTS.map(s => `
    <div class="spot-item" data-id="${s.id}" onclick="selectSpot('${s.id}')">
      <div class="spot-icon">${s.icon}</div>
      <div>
        <div class="spot-name">${s.name}</div>
        <div class="spot-env">${s.env}</div>
      </div>
    </div>
  `).join('');
}

function renderMapPins() {
  const el = document.getElementById('map-pins');
  if (!el) return;
  el.innerHTML = SPOTS.map(s => `
    <div class="map-spot-pin" data-id="${s.id}" onclick="selectSpot('${s.id}')" title="${s.name}">
      <div class="map-spot-em">${s.icon}</div>
      <div class="map-spot-nm">${s.name}</div>
    </div>
  `).join('');
}

function selectSpot(spotId) {
  const spot = SPOTS.find(s => s.id === spotId);
  if (!spot) return;

  STATE.currentSpot = spotId;

  // Update active states
  document.querySelectorAll('.spot-item').forEach(el => el.classList.toggle('active', el.dataset.id === spotId));
  document.querySelectorAll('.map-spot-pin').forEach(el => el.classList.toggle('highlight', el.dataset.id === spotId));

  const detailEl = document.getElementById('spot-detail');
  if (!detailEl) return;

  const riskLabels = { verde: '🟢 Verde', amarillo: '🟡 Amarillo', rojo: '🔴 Rojo', negro: '⚫ Negro' };
  detailEl.className = 'spot-detail-panel';
  detailEl.innerHTML = `
    <div class="spot-detail-name">${spot.icon} ${spot.name}</div>
    <p style="font-size:.88rem;color:var(--text-secondary);margin-bottom:.5rem">${spot.desc}</p>
    <div class="sdp-grid">
      <div>
        <div class="sdp-item-key">Entorno</div>
        <div class="sdp-item-val">${spot.env}</div>
      </div>
      <div>
        <div class="sdp-item-key">Nivel</div>
        <div class="sdp-item-val">${spot.level}</div>
      </div>
      <div>
        <div class="sdp-item-key">Semáforo</div>
        <div class="sdp-item-val">${riskLabels[spot.risk] || spot.risk}</div>
      </div>
      <div>
        <div class="sdp-item-key">Temporada</div>
        <div class="sdp-item-val">${spot.season}</div>
      </div>
      <div style="grid-column:1/-1">
        <div class="sdp-item-key">Requisitos</div>
        <div class="sdp-item-val" style="font-weight:400;font-size:.85rem;color:var(--text-secondary)">${spot.requirements}</div>
      </div>
      <div>
        <div class="sdp-item-key">Permisos</div>
        <div class="sdp-item-val">${spot.permissions || 'Revisar normativa local'}</div>
      </div>
      <div>
        <div class="sdp-item-key">Acceso</div>
        <div class="sdp-item-val">${spot.access || 'Variable'}</div>
      </div>
      <div>
        <div class="sdp-item-key">Planes activos</div>
        <div class="sdp-item-val">${spot.plans || 0}</div>
      </div>
      <div>
        <div class="sdp-item-key">Condiciones demo</div>
        <div class="sdp-item-val">${spot.conditions || 'Pendiente de reporte comunitario'}</div>
      </div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.5rem">
      ${spot.sports.map(s => `<span class="badge badge-cyan">${s}</span>`).join('')}
    </div>
    <div style="margin-top:1rem">
      <button class="btn btn-primary btn-sm" onclick="toggleSaveMapSpot('${spot.id}', this)">${STATE.savedSpots.has(spot.id) ? 'Guardado' : 'Guardar spot'}</button>
      <button class="btn btn-ghost btn-sm" style="margin-left:.5rem" onclick="openSpotModal('${spot.id}')">Ver spot</button>
    </div>
    <p class="spot-safety-note">Los spots técnicos requieren formación, condiciones adecuadas, permisos cuando proceda y respeto ambiental.</p>
  `;
}

function openSpotModal(spotId) {
  const spot = SPOTS.find(s => s.id === spotId);
  if (!spot) return;
  const body = `
    <p class="modal-demo-text">${escapeHTML(spot.desc)}</p>
    <div class="modal-info-grid">
      <div><strong>Entorno</strong><span>${escapeHTML(spot.env)}</span></div>
      <div><strong>Disciplinas compatibles</strong><span>${escapeHTML(spot.sports.join(', '))}</span></div>
      <div><strong>Riesgo</strong><span>${escapeHTML(spot.risk)}</span></div>
      <div><strong>Temporada</strong><span>${escapeHTML(spot.season)}</span></div>
      <div><strong>Verificación</strong><span>${escapeHTML(spot.verified || 'Comunidad')}</span></div>
      <div><strong>Permisos</strong><span>${escapeHTML(spot.permissions || 'Revisar normativa local')}</span></div>
      <div><strong>Acceso</strong><span>${escapeHTML(spot.access || 'Variable')}</span></div>
      <div><strong>Nivel técnico</strong><span>${escapeHTML(spot.level)}</span></div>
      <div><strong>Planes activos</strong><span>${spot.plans || 0}</span></div>
      <div><strong>Condiciones</strong><span>${escapeHTML(spot.conditions || 'Pendiente de reporte comunitario')}</span></div>
    </div>
    <p class="spot-safety-note">Los spots técnicos requieren formación, condiciones adecuadas, permisos cuando proceda y respeto ambiental.</p>
  `;
  const actions = `
    <button class="btn btn-primary" onclick="toggleSaveMapSpot('${spot.id}')">Guardar spot</button>
    <button class="btn btn-secondary" onclick="showToast('Reporte de condiciones preparado')">Reportar condiciones</button>
    <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
  `;
  openDemoPanel(`Spot · ${escapeHTML(spot.name)}`, body, actions);
}

function toggleSaveMapSpot(spotId, btn) {
  const spot = SPOTS.find(s => s.id === spotId);
  if (!spot) return;
  if (STATE.savedSpots.has(spotId)) {
    STATE.savedSpots.delete(spotId);
    showToast('Spot eliminado de guardados');
  } else {
    STATE.savedSpots.add(spotId);
    showToast(`${spot.name} guardado en tu mapa NOMADX`);
  }
  saveState('nmx_spots_saved', STATE.savedSpots);
  if (btn) {
    const saved = STATE.savedSpots.has(spotId);
    btn.textContent = saved ? 'Guardado' : 'Guardar spot';
    btn.classList.toggle('saved', saved);
  }
}

/* ═══════════════════════════════════════════════════════════
   EVENTOS
   ═══════════════════════════════════════════════════════════ */
function initEvents() {
  const el = document.getElementById('events-container');
  if (!el) return;

  const typeLabels = { aventura:'Aventura', formacion:'Formación', expedicion:'Expedición', taller:'Taller', carrera:'Carrera', clinica:'Clínica', proyecto:'Proyecto' };
  const semaforoMap = { verde:'badge-green', amarillo:'badge-gold', rojo:'badge-red', negro:'badge-white' };

  el.innerHTML = EVENTS.map(e => {
    const joined = STATE.joinedEvents.has(e.id);
    return `
    <article class="event-card" id="event-${e.id}">
      <div class="event-top">
        <div class="event-type">
          <span class="badge badge-orange">${typeLabels[e.type] || e.type}</span>
          <span class="badge ${semaforoMap[e.semaforo] || 'badge-white'}" style="margin-left:.4rem">Semáforo ${e.semaforo}</span>
        </div>
        <div class="event-title">${e.title}</div>
        <div class="event-organizer">
          por ${e.organizer}${e.verified ? ' <span class="verified">Verificado</span>' : ''}
        </div>
      </div>
      <div class="event-body">
        <div class="event-meta">
          <div>
            <div class="em-key">Fecha</div>
            <div class="em-val">${e.date}</div>
          </div>
          <div>
            <div class="em-key">Lugar</div>
            <div class="em-val">${e.location}</div>
          </div>
          <div>
            <div class="em-key">Nivel</div>
            <div class="em-val">${e.level}</div>
          </div>
          <div>
            <div class="em-key">Plazas</div>
            <div class="em-val">${e.cupo}</div>
          </div>
        </div>
        <div class="event-sports">${e.sports.map(s => `<span class="badge badge-cyan">${s}</span>`).join('')}</div>
        <div class="event-demo-grid">
          <span>Tribu: ${e.tribe || e.organizer}</span>
          <span>Spot: ${e.spot || e.location}</span>
          <span>Requisitos: ${e.requirements || 'Nivel acorde y Safety Radar revisado'}</span>
          <span>Material: ${e.material || 'Material general de la disciplina'}</span>
        </div>
      </div>
      <div class="event-footer">
        <div>
          <div class="event-price${e.price === 'Gratis' ? ' free' : ''}">${e.price}</div>
        </div>
        <div class="event-actions">
          <button class="event-secondary-btn" onclick="openEventRequirements('${e.id}')">Ver requisitos</button>
          <button class="event-secondary-btn${STATE.savedPlans.has(e.id) ? ' saved' : ''}" onclick="togglePlanSave('${e.id}', this)">${STATE.savedPlans.has(e.id) ? 'Guardado' : 'Guardar'}</button>
          <button class="event-join-btn${joined ? ' joined' : ''}" onclick="toggleEvent('${e.id}', this)">
            ${joined ? '✓ Unido' : 'Unirme'}
          </button>
        </div>
      </div>
    </article>`;
  }).join('');
}

function toggleEvent(eventId, btn) {
  if (STATE.joinedEvents.has(eventId)) return;
  STATE.joinedEvents.add(eventId);
  saveState('nmx_events_joined', STATE.joinedEvents);
  if (btn) {
    btn.classList.add('joined');
    btn.textContent = '✓ Apuntado';
  }
  const ev = EVENTS.find(e => e.id === eventId);
  showToast(`¡Apuntado a "${ev?.title}"! Te avisaremos por email 📧`);
}

function openEventRequirements(eventId) {
  const event = EVENTS.find(e => e.id === eventId);
  if (!event) return;
  const body = `
    <p class="modal-demo-text">${escapeHTML(event.title)} es un plan comunitario dentro de NOMADX, no una reserva comercial.</p>
    <div class="modal-info-grid">
      <div><strong>Disciplina</strong><span>${escapeHTML(event.sports.join(', '))}</span></div>
      <div><strong>Fecha</strong><span>${escapeHTML(event.date)}</span></div>
      <div><strong>Cupos</strong><span>${escapeHTML(event.cupo)}</span></div>
      <div><strong>Nivel</strong><span>${escapeHTML(event.level)}</span></div>
      <div><strong>Riesgo</strong><span>${escapeHTML(event.semaforo)}</span></div>
      <div><strong>Organizador</strong><span>${escapeHTML(event.organizer)}</span></div>
      <div><strong>Requisitos</strong><span>${escapeHTML(event.requirements || 'Nivel acorde, material general y Safety Radar revisado')}</span></div>
      <div><strong>Estado de seguridad</strong><span>Safety Radar ${escapeHTML(event.semaforo)} · revisar condiciones antes de salir.</span></div>
      <div><strong>Tribu asociada</strong><span>${escapeHTML(event.tribe || event.organizer)}</span></div>
      <div><strong>Spot relacionado</strong><span>${escapeHTML(event.spot || event.location)}</span></div>
      <div><strong>Material general</strong><span>${escapeHTML(event.material || 'Material general de la disciplina')}</span></div>
    </div>
  `;
  const actions = `
    <button class="btn btn-primary" onclick="toggleEvent('${event.id}', document.querySelector('#event-${event.id} .event-join-btn'))">Unirme</button>
    <button class="btn btn-secondary" onclick="togglePlanSave('${event.id}')">Guardar</button>
    <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
  `;
  openDemoPanel(`Requisitos · ${escapeHTML(event.title)}`, body, actions);
}

function togglePlanSave(eventId, btn) {
  const event = EVENTS.find(e => e.id === eventId);
  if (!event) return;
  if (STATE.savedPlans.has(eventId)) {
    STATE.savedPlans.delete(eventId);
    showToast('Plan eliminado de guardados');
  } else {
    STATE.savedPlans.add(eventId);
    showToast(`${event.title} guardado en tus planes`);
  }
  saveState('nmx_plans_saved', STATE.savedPlans);
  if (btn) {
    const saved = STATE.savedPlans.has(eventId);
    btn.classList.toggle('saved', saved);
    btn.textContent = saved ? 'Guardado' : 'Guardar';
  } else {
    initEvents();
  }
}

/* ═══════════════════════════════════════════════════════════
   INSIGNIAS Y REPUTACIÓN
   ═══════════════════════════════════════════════════════════ */
function initInsignias() {
  const el = document.getElementById('insignias-container');
  if (!el) return;

  // Verificaciones
  const verifHTML = `
    <div>
      <div class="insignias-section-title">Verificaciones NOMADX</div>
      <div class="verif-grid">
        ${VERIFICACIONES.map(v => `
          <div class="verif-card">
            <div class="verif-num">${v.num}</div>
            <div>
              <div class="verif-name">${v.name}</div>
              <div class="verif-desc">${v.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Badges por categoría
  const catNames = { rol:'Rol y Profesión', entorno:'Entorno', experiencia:'Experiencia', seguridad:'Seguridad', progresion:'Progresión', hitos:'Hitos' };
  const badgeCats = {};
  BADGES_DATA.forEach(b => {
    if (!badgeCats[b.cat]) badgeCats[b.cat] = [];
    badgeCats[b.cat].push(b);
  });

  const badgesHTML = `
    <div>
      <div class="insignias-section-title">Insignias de la Comunidad</div>
      ${Object.entries(badgeCats).map(([cat, badges]) => `
        <div style="margin-bottom:1.5rem">
          <p style="font-family:var(--font-heading);font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--text-muted);margin-bottom:.75rem">${catNames[cat] || cat}</p>
          <div class="badges-grid">
            ${badges.map(b => `
              <div class="badge-card">
                <div class="badge-card-icon">${b.icon}</div>
                <div>
                  <div class="badge-card-name">${b.name}</div>
                  <div class="badge-card-desc">${b.desc}</div>
                  ${b.req ? `<div class="badge-card-extra"><strong>Requisito:</strong> ${b.req}</div>` : ''}
                  ${b.benefit ? `<div class="badge-card-extra"><strong>Beneficio:</strong> ${b.benefit}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Reputación
  const repHTML = `
    <div>
      <div class="insignias-section-title">Sistema de Reputación</div>
      <div class="rep-grid">
        ${REPUTACION_BARS.map(r => `
          <div class="rep-item">
            <div class="rep-item-label">${r.label}</div>
            <div class="rep-bar-wrap">
              <div class="rep-bar"><div class="rep-fill" style="width:${r.val}%"></div></div>
              <div class="rep-val">${r.val}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  el.innerHTML = verifHTML + badgesHTML + repHTML;
}

/* ═══════════════════════════════════════════════════════════
   NOMADX PRO
   ═══════════════════════════════════════════════════════════ */
function initPro() {
  const el = document.getElementById('pro-container');
  if (!el) return;
  el.innerHTML = PRO_TYPES.map(p => `
    <div class="pro-type-card">
      <div class="pro-type-icon">${p.icon}</div>
      <div class="pro-type-name">${p.name}</div>
      <div class="pro-type-desc">${p.desc}</div>
    </div>
  `).join('');
}

function initLogbookActions() {
  const grid = document.querySelector('.logbook-grid');
  if (grid && !document.querySelector('.logbook-toolbar')) {
    grid.insertAdjacentHTML('beforebegin', `
      <div class="logbook-toolbar">
        <div class="logbook-filters" aria-label="Filtros de Logbook">
          <button class="log-filter active" onclick="filterLogbook('all', this)">Todo</button>
          <button class="log-filter" onclick="filterLogbook('agua', this)">Agua</button>
          <button class="log-filter" onclick="filterLogbook('montana', this)">Montaña</button>
          <button class="log-filter" onclick="filterLogbook('rojo', this)">Riesgo alto</button>
          <button class="log-filter" onclick="filterLogbook('reciente', this)">Reciente</button>
        </div>
        <div class="logbook-stats">
          <span><strong>16</strong> actividades</span>
          <span><strong>42 h</strong> acumuladas</span>
          <span><strong>Montaña + agua</strong> dominante</span>
          <span><strong>9</strong> insignias</span>
          <span><strong>amarillo</strong> riesgo medio</span>
        </div>
      </div>
    `);
  }
  document.querySelectorAll('.log-entry-card').forEach((card) => {
    if (card.querySelector('.log-actions')) return;
    const title = card.querySelector('h3')?.textContent?.trim() || 'Registro NOMADX';
    const text = card.querySelector('p')?.textContent?.trim() || 'Entrada de Logbook';
    const meta = [...card.querySelectorAll('.log-meta span')].map(s => s.textContent.trim()).join(' · ');
    const key = normalizeText(`${title} ${text} ${meta}`);
    const env = /kayak|surf|buceo|snorkel|apnea|coasteering|baño/i.test(key) ? 'agua' :
      /mtb|gravel|trail|sender|ferrata|snow|escalada|fotografia/i.test(key) ? 'montana' : 'fitness';
    const risk = /rojo|negro|ferrata|buceo|coasteering|apnea/i.test(key) ? 'rojo' : /verde|yoga|funcional/i.test(key) ? 'verde' : 'amarillo';
    card.dataset.env = env;
    card.dataset.risk = risk;
    card.insertAdjacentHTML('beforeend', `
      <div class="log-actions">
        <button class="log-action-btn" onclick="openLogbookRecord('${escapeHTML(title)}', '${escapeHTML(text)}', '${escapeHTML(meta)}')">Ver registro</button>
        <button class="log-action-btn" onclick="shareLogbookEntry('${escapeHTML(title)}')">Compartir en feed</button>
        <button class="log-action-btn" onclick="duplicateLogTemplate('${escapeHTML(title)}')">Duplicar como plantilla</button>
      </div>
    `);
  });
}

function filterLogbook(filter, btn) {
  document.querySelectorAll('.log-filter').forEach(b => b.classList.remove('active'));
  btn?.classList.add('active');
  document.querySelectorAll('.log-entry-card').forEach(card => {
    const visible = filter === 'all' ||
      (filter === 'reciente' && [...card.parentElement.children].indexOf(card) < 6) ||
      card.dataset.env === filter ||
      card.dataset.risk === filter;
    card.style.display = visible ? '' : 'none';
  });
}

function openLogbookRecord(title, text, meta) {
  const body = `
    <p class="modal-demo-text">${text}</p>
    <div class="modal-info-grid">
      <div><strong>Disciplina</strong><span>${title}</span></div>
      <div><strong>Datos registrados</strong><span>${meta || 'duración, condiciones, material y aprendizaje'}</span></div>
      <div><strong>Compañeros</strong><span>2 perfiles NOMADX compatibles</span></div>
      <div><strong>Aprendizaje</strong><span>Se guarda como señal para ADN deportivo, reputación y futuras recomendaciones.</span></div>
    </div>
  `;
  openDemoPanel(`Logbook · ${title}`, body, `
    <button class="btn btn-primary" onclick="shareLogbookEntry('${title}')">Compartir en feed</button>
    <button class="btn btn-secondary" onclick="duplicateLogTemplate('${title}')">Duplicar plantilla</button>
    <button class="btn btn-ghost" onclick="closeSportModal()">Cerrar</button>
  `);
}

function shareLogbookEntry(title) {
  showToast(`"${title}" compartido en el feed de aventuras`);
}

function duplicateLogTemplate(title) {
  showToast(`Plantilla creada desde "${title}"`);
}

/* ═══════════════════════════════════════════════════════════
   REVEAL SCROLL ANIMATION
   ═══════════════════════════════════════════════════════════ */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   MODAL CLOSE ON BACKDROP
   ═══════════════════════════════════════════════════════════ */
function initModal() {
  const modal = document.getElementById('sport-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSportModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSportModal();
  });
}

/* ═══════════════════════════════════════════════════════════
   INIT: ARRANQUE DE LA APP
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  normalizeNomadxDemoData();
  ensureNomadxDepthData();
  initHeader();
  initCatalog();
  initMatching();
  initHeroLiveCards();
  initFeed();
  initTribus();
  initSpots();
  initEvents();
  initInsignias();
  initPro();
  initLogbookActions();
  initReveal();
  initModal();

  console.log('%c🧭 NOMADX — plataforma social deportiva independiente', 'font-size:14px;color:#ff5e1a;font-weight:bold;');
  console.log('%cPrototipo avanzado 2026 · concepto creado por Diego David Extremo', 'font-size:12px;color:#00d4ff;');
});
