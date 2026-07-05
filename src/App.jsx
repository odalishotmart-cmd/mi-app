import { useState } from "react";

const COLORS = {
  bg: "#FDFAF5",
  primary: "#4CAF82",
  primaryDark: "#3a9068",
  primaryLight: "#E8F5EE",
  accent: "#FF7043",
  accentLight: "#FFF3EF",
  warn: "#FFC107",
  warnLight: "#FFF8E1",
  text: "#2D2D2D",
  textSecondary: "#6B6B6B",
  textLight: "#9E9E9E",
  white: "#FFFFFF",
  border: "#EDE9E0",
  cardBg: "#FFFFFF",
  navBg: "#FFFFFF",
  low: "#4CAF82",
  medium: "#FFC107",
  high: "#FF7043",
};

const FONTS = {
  heading: "'Quicksand', sans-serif",
  body: "'Nunito', sans-serif",
};

const recetas = [
  {
    id: 1,
    nombre: "Bowl de Avena con Frutos Rojos",
    categoria: "Desayuno",
    ig: 42,
    igNivel: "bajo",
    calorias: 285,
    tiempo: "10 min",
    porciones: 1,
    imagen: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&q=80",
    ingredientes: ["1 taza avena integral", "1 taza leche de almendra", "1/2 taza frutos rojos", "1 cdta miel de abeja", "Semillas de chía"],
    pasos: ["Calentar la leche de almendra en una olla pequeña.", "Agregar la avena y cocinar 5 min revolviendo.", "Servir en un bowl y agregar los frutos rojos.", "Espolvorear semillas de chía y añadir la miel."],
    tags: ["Sin gluten", "Vegano", "Alto en fibra"],
    descripcion: "Un desayuno nutritivo que mantiene estables tus niveles de azúcar toda la mañana.",
  },
  {
    id: 2,
    nombre: "Ensalada Mediterránea con Quinoa",
    categoria: "Almuerzo",
    ig: 35,
    igNivel: "bajo",
    calorias: 320,
    tiempo: "20 min",
    porciones: 2,
    imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    ingredientes: ["1 taza quinoa cocida", "1/2 pepino", "1 tomate", "Aceitunas negras", "Queso feta light", "Aceite de oliva", "Limón"],
    pasos: ["Cocinar la quinoa según instrucciones.", "Picar el pepino y el tomate en cubos.", "Mezclar todos los ingredientes en un bowl.", "Aliñar con aceite de oliva y jugo de limón.", "Añadir el queso feta desmenuzado."],
    tags: ["Sin gluten", "Vegetariano", "Proteína"],
    descripcion: "Rica en proteínas y fibra, perfecta para mantener la saciedad sin elevar el azúcar.",
  },
  {
    id: 3,
    nombre: "Salmón al Horno con Espárragos",
    categoria: "Cena",
    ig: 10,
    igNivel: "bajo",
    calorias: 390,
    tiempo: "30 min",
    porciones: 2,
    imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    ingredientes: ["2 filetes de salmón", "1 manojo espárragos", "2 cdas aceite de oliva", "Ajo en polvo", "Limón", "Eneldo fresco", "Sal y pimienta"],
    pasos: ["Precalentar el horno a 200°C.", "Colocar el salmón y espárragos en una bandeja.", "Aliñar con aceite, ajo, sal y pimienta.", "Hornear 20 minutos.", "Servir con gajos de limón y eneldo."],
    tags: ["Sin carbohidratos", "Omega-3", "Keto"],
    descripcion: "Alto en omega-3 y proteínas, prácticamente sin impacto glucémico.",
  },
  {
    id: 4,
    nombre: "Smoothie Verde Detox",
    categoria: "Snack",
    ig: 30,
    igNivel: "bajo",
    calorias: 145,
    tiempo: "5 min",
    porciones: 1,
    imagen: "https://images.unsplash.com/photo-1638176067048-3c82f96a6a61?w=400&q=80",
    ingredientes: ["1 taza espinacas", "1/2 pepino", "1 manzana verde", "Jengibre fresco", "Jugo de limón", "Agua de coco"],
    pasos: ["Lavar bien todos los ingredientes.", "Cortar en trozos la manzana y el pepino.", "Licuar todo junto hasta obtener textura suave.", "Servir inmediatamente con hielo."],
    tags: ["Vegano", "Detox", "Sin azúcar añadida"],
    descripcion: "Refrescante y lleno de nutrientes que apoyan el metabolismo de la glucosa.",
  },
  {
    id: 5,
    nombre: "Tortilla de Espinacas y Champiñones",
    categoria: "Desayuno",
    ig: 15,
    igNivel: "bajo",
    calorias: 220,
    tiempo: "15 min",
    porciones: 1,
    imagen: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
    ingredientes: ["3 huevos", "1 taza espinacas", "1/2 taza champiñones", "1 cda aceite de oliva", "Sal y pimienta", "Queso rallado light"],
    pasos: ["Saltear los champiñones en aceite de oliva.", "Agregar las espinacas hasta que se marchiten.", "Batir los huevos con sal y pimienta.", "Verter los huevos sobre las verduras.", "Cocinar a fuego medio hasta cuajar."],
    tags: ["Sin carbohidratos", "Proteína", "Vegetariano"],
    descripcion: "Proteica y sin carbohidratos refinados, ideal para empezar el día con energía estable.",
  },
  {
    id: 6,
    nombre: "Pollo al Curry con Coliflor",
    categoria: "Cena",
    ig: 20,
    igNivel: "bajo",
    calorias: 350,
    tiempo: "35 min",
    porciones: 3,
    imagen: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80",
    ingredientes: ["500g pechuga de pollo", "1/2 coliflor", "1 lata leche de coco light", "2 cdas pasta de curry", "Cebolla", "Ajo", "Cilantro"],
    pasos: ["Cortar el pollo en cubos y sellar en la sartén.", "Agregar la cebolla y el ajo picado.", "Incorporar la pasta de curry y la leche de coco.", "Añadir la coliflor en floretes.", "Cocinar 20 min a fuego medio."],
    tags: ["Sin gluten", "Bajo IG", "Alta proteína"],
    descripcion: "Sabor intenso con especias antiinflamatorias que ayudan al control glucémico.",
  },
];

const glucometria = [
  { hora: "07:00", valor: 95, estado: "normal" },
  { hora: "09:00", valor: 120, estado: "normal" },
  { hora: "12:00", valor: 145, estado: "atencion" },
  { hora: "15:00", valor: 110, estado: "normal" },
  { hora: "18:00", valor: 132, estado: "normal" },
  { hora: "21:00", valor: 98, estado: "normal" },
];

const categorias = ["Todos", "Desayuno", "Almuerzo", "Cena", "Snack"];

const igColor = (nivel) => {
  if (nivel === "bajo") return COLORS.low;
  if (nivel === "medio") return COLORS.medium;
  return COLORS.high;
};

const igLabel = (ig) => {
  if (ig <= 55) return "IG Bajo";
  if (ig <= 69) return "IG Medio";
  return "IG Alto";
};

const igNivelCalc = (ig) => {
  if (ig <= 55) return "bajo";
  if (ig <= 69) return "medio";
  return "alto";
};

function IGBadge({ ig }) {
  const nivel = igNivelCalc(ig);
  const color = igColor(nivel);
  return (
    <span style={{
      background: color + "22",
      color: color,
      borderRadius: 20,
      padding: "3px 10px",
      fontSize: 12,
      fontWeight: 700,
      fontFamily: FONTS.body,
      border: `1px solid ${color}44`,
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
    }}>
      <span style={{ fontSize: 10 }}>●</span> {igLabel(ig)} {ig}
    </span>
  );
}

function TagChip({ tag }) {
  return (
    <span style={{
      background: COLORS.primaryLight,
      color: COLORS.primaryDark,
      borderRadius: 20,
      padding: "2px 10px",
      fontSize: 11,
      fontWeight: 700,
      fontFamily: FONTS.body,
    }}>{tag}</span>
  );
}

function RecetaCard({ receta, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onClick(receta)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.cardBg,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: hovered ? "0 8px 32px rgba(76,175,130,0.18)" : "0 2px 12px rgba(0,0,0,0.07)",
        cursor: "pointer",
        transform: hovered ? "translateY(-4px) scale(1.01)" : "none",
        transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
        border: `1.5px solid ${hovered ? COLORS.primary : COLORS.border}`,
        marginBottom: 0,
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={receta.imagen}
          alt={receta.nombre}
          style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: "rgba(255,255,255,0.95)",
          borderRadius: 12,
          padding: "4px 10px",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: FONTS.body,
          color: COLORS.textSecondary,
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        }}>⏱ {receta.tiempo}</div>
        <div style={{
          position: "absolute", top: 10, left: 10,
          background: COLORS.primary,
          borderRadius: 12,
          padding: "4px 10px",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: FONTS.body,
          color: COLORS.white,
        }}>{receta.categoria}</div>
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 16, color: COLORS.text, marginBottom: 6, lineHeight: 1.3 }}>
          {receta.nombre}
        </div>
        <div style={{ marginBottom: 10 }}>
          <IGBadge ig={receta.ig} />
        </div>
        <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 800, fontFamily: FONTS.heading, color: COLORS.primary }}>{receta.calorias}</div>
            <div style={{ fontSize: 10, color: COLORS.textLight, fontFamily: FONTS.body }}>kcal</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 800, fontFamily: FONTS.heading, color: COLORS.accent }}>{receta.porciones}</div>
            <div style={{ fontSize: 10, color: COLORS.textLight, fontFamily: FONTS.body }}>porciones</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {receta.tags.slice(0, 2).map(t => <TagChip key={t} tag={t} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecetaDetalle({ receta, onClose }) {
  const [tabActivo, setTabActivo] = useState("ingredientes");
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(0,0,0,0.45)",
      display: "flex", alignItems: "flex-end",
      animation: "fadeIn 0.2s ease",
    }}>
      <div style={{
        background: COLORS.bg,
        borderRadius: "24px 24px 0 0",
        width: "100%",
        maxHeight: "92vh",
        overflowY: "auto",
        animation: "slideUp 0.3s cubic-bezier(.4,0,.2,1)",
      }}>
        <div style={{ position: "relative" }}>
          <img src={receta.imagen} alt={receta.nombre} style={{ width: "100%", height: 220, objectFit: "cover", display: "block", borderRadius: "24px 24px 0 0" }} />
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 14, right: 14,
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: 38, height: 38,
              fontSize: 20,
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >✕</button>
          <div style={{ position: "absolute", top: 14, left: 14 }}>
            <span style={{ background: COLORS.primary, color: "#fff", borderRadius: 12, padding: "4px 12px", fontSize: 12, fontWeight: 700, fontFamily: FONTS.body }}>{receta.categoria}</span>
          </div>
        </div>
        <div style={{ padding: "20px 20px 0" }}>
          <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 22, color: COLORS.text, marginBottom: 8 }}>{receta.nombre}</div>
          <div style={{ marginBottom: 10 }}><IGBadge ig={receta.ig} /></div>
          <div style={{ color: COLORS.textSecondary, fontFamily: FONTS.body, fontSize: 14, marginBottom: 16, lineHeight: 1.5 }}>{receta.descripcion}</div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            {[
              { label: "kcal", val: receta.calorias, color: COLORS.accent },
              { label: "min", val: receta.tiempo.replace(" min",""), color: COLORS.primary },
              { label: "porciones", val: receta.porciones, color: COLORS.warn },
            ].map(item => (
              <div key={item.label} style={{ flex: 1, background: COLORS.cardBg, borderRadius: 14, padding: "10px 8px", textAlign: "center", border: `1.5px solid ${COLORS.border}` }}>
                <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 20, color: item.color }}>{item.val}</div>
                <div style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.textLight }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 4, marginBottom: 18, background: COLORS.border + "55", borderRadius: 14, padding: 4 }}>
            {["ingredientes", "preparación"].map(tab => (
              <button
                key={tab}
                onClick={() => setTabActivo(tab)}
                style={{
                  flex: 1,
                  background: tabActivo === tab ? COLORS.primary : "transparent",
                  color: tabActivo === tab ? "#fff" : COLORS.textSecondary,
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 0",
                  fontFamily: FONTS.body,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textTransform: "capitalize",
                }}
              >{tab}</button>
            ))}
          </div>
          {tabActivo === "ingredientes" ? (
            <ul style={{ listStyle: "none", margin: 0, padding: 0, marginBottom: 24 }}>
              {receta.ingredientes.map((ing, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 0",
                  borderBottom: i < receta.ingredientes.length - 1 ? `1px solid ${COLORS.border}` : "none",
                  fontFamily: FONTS.body, fontSize: 14, color: COLORS.text,
                }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: COLORS.primaryLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 13, color: COLORS.primary, fontWeight: 700 }}>✓</span>
                  {ing}
                </li>
              ))}
            </ul>
          ) : (
            <ol style={{ margin: 0, padding: 0, listStyle: "none", marginBottom: 24 }}>
              {receta.pasos.map((paso, i) => (
                <li key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  padding: "10px 0",
                  borderBottom: i < receta.pasos.length - 1 ? `1px solid ${COLORS.border}` : "none",
                  fontFamily: FONTS.body, fontSize: 14, color: COLORS.text, lineHeight: 1.5,
                }}>
                  <span style={{ width: 28, height: 28, borderRadius: "50%", background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 13, color: "#fff", fontWeight: 800 }}>{i + 1}</span>
                  {paso}
                </li>
              ))}
            </ol>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 30 }}>
            {receta.tags.map(t => <TagChip key={t} tag={t} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function GlucometriaBar({ dato }) {
  const max = 200;
  const pct = Math.min((dato.valor / max) * 100, 100);
  const color = dato.estado === "normal" ? COLORS.low : dato.estado === "atencion" ? COLORS.medium : COLORS.high;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <div style={{ width: 42, fontFamily: FONTS.body, fontSize: 12, color: COLORS.textLight, flexShrink: 0, textAlign: "right" }}>{dato.hora}</div>
      <div style={{ flex: 1, background: COLORS.border, borderRadius: 8, height: 10, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, background: color, height: "100%", borderRadius: 8, transition: "width 0.6s ease" }} />
      </div>
      <div style={{ width: 36, fontFamily: FONTS.body, fontSize: 13, fontWeight: 700, color: color, flexShrink: 0 }}>{dato.valor}</div>
    </div>
  );
}

function PantallaRecetas({ onVerReceta }) {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const filtradas = recetas.filter(r => {
    const matchCat = categoriaActiva === "Todos" || r.categoria === categoriaActiva;
    const matchBus = r.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(busqueda.toLowerCase()));
    return matchCat && matchBus;
  });

  return (
    <div>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`, borderRadius: 24, margin: "0 0 20px", padding: "24px 20px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -30, top: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
        <div style={{ position: "absolute", right: 20, bottom: -40, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
        <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 6 }}>🥗 Recetas Cero-Azúcar</div>
        <div style={{ fontFamily: FONTS.body, fontSize: 14, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>Todas con índice glucémico bajo o controlado</div>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "Recetas", val: recetas.length, icon: "📋" },
            { label: "Avg IG", val: Math.round(recetas.reduce((a,r)=>a+r.ig,0)/recetas.length), icon: "📊" },
            { label: "Bajo IG", val: recetas.filter(r=>r.ig<=55).length, icon: "✅" },
          ].map(item => (
            <div key={item.label} style={{ background: "rgba(255,255,255,0.18)", borderRadius: 14, padding: "10px 14px", flex: 1, textAlign: "center" }}>
              <div style={{ fontSize: 18 }}>{item.icon}</div>
              <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 18, color: "#fff" }}>{item.val}</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 10, color: "rgba(255,255,255,0.8)" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Buscador */}
      <div style={{ position: "relative", marginBottom: 16 }}>
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
        <input
          type="text"
          placeholder="Buscar recetas o etiquetas..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "13px 14px 13px 42px",
            borderRadius: 16,
            border: `1.5px solid ${COLORS.border}`,
            background: COLORS.cardBg,
            fontFamily: FONTS.body,
            fontSize: 14,
            color: COLORS.text,
            outline: "none",
          }}
        />
      </div>

      {/* Categorías */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 20, scrollbarWidth: "none" }}>
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            style={{
              background: categoriaActiva === cat ? COLORS.primary : COLORS.cardBg,
              color: categoriaActiva === cat ? "#fff" : COLORS.textSecondary,
              border: `1.5px solid ${categoriaActiva === cat ? COLORS.primary : COLORS.border}`,
              borderRadius: 20,
              padding: "8px 18px",
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 13,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
              flexShrink: 0,
            }}
          >{cat}</button>
        ))}
      </div>

      {/* Grid de recetas */}
      {filtradas.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 20px", color: COLORS.textLight, fontFamily: FONTS.body }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🥦</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>No se encontraron recetas</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>Intenta con otra búsqueda o categoría</div>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {filtradas.map(r => <RecetaCard key={r.id} receta={r} onClick={onVerReceta} />)}
        </div>
      )}
    </div>
  );
}

function PantallaControl() {
  const [nuevaLectura, setNuevaLectura] = useState("");
  const promedio = Math.round(glucometria.reduce((a,g)=>a+g.valor,0)/glucometria.length);
  const max = Math.max(...glucometria.map(g=>g.valor));
  const min = Math.min(...glucometria.map(g=>g.valor));

  return (
    <div>
      {/* Card estado actual */}
      <div style={{ background: `linear-gradient(135deg, #4C6EAF 0%, #2D4F8C 100%)`, borderRadius: 24, padding: "24px 20px", marginBottom: 20, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -20, top: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
        <div style={{ fontFamily: FONTS.body, fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>📅 Hoy — Control Glicémico</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 16 }}>
          <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 52, color: "#fff", lineHeight: 1 }}>{promedio}</div>
          <div style={{ fontFamily: FONTS.body, fontSize: 16, color: "rgba(255,255,255,0.7)", paddingBottom: 8 }}>mg/dL</div>
        </div>
        <div style={{ fontFamily: FONTS.body, fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>Promedio del día · Rango objetivo: 70–140 mg/dL</div>
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { label: "Mínimo", val: min, color: COLORS.low },
            { label: "Máximo", val: max, color: COLORS.high },
            { label: "Lecturas", val: glucometria.length, color: COLORS.warn },
          ].map(item => (
            <div key={item.label} style={{ flex: 1, background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "8px", textAlign: "center" }}>
              <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 18, color: item.color }}>{item.val}</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 10, color: "rgba(255,255,255,0.75)" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Registrar lectura */}
      <div style={{ background: COLORS.cardBg, borderRadius: 20, padding: "18px", marginBottom: 20, border: `1.5px solid ${COLORS.border}` }}>
        <div style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 16, color: COLORS.text, marginBottom: 12 }}>➕ Registrar nueva lectura</div>
        <div style={{ display: "flex", gap: 10 }}>
          <input
            type="number"
            placeholder="mg/dL"
            value={nuevaLectura}
            onChange={e => setNuevaLectura(e.target.value)}
            style={{
              flex: 1,
              padding: "12px 14px",
              borderRadius: 14,
              border: `1.5px solid ${COLORS.border}`,
              background: COLORS.bg,
              fontFamily: FONTS.body,
              fontSize: 16,
              color: COLORS.text,
              outline: "none",
            }}
          />
          <button
            onClick={() => {
              // TODO: guardar lectura en estado/API
              setNuevaLectura("");
            }}
            style={{
              background: COLORS.primary,
              color: "#fff",
              border: "none",
              borderRadius: 14,
              padding: "12px 20px",
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >Guardar</button>
        </div>
      </div>

      {/* Historial del día */}
      <div style={{ background: COLORS.cardBg, borderRadius: 20, padding: "18px", marginBottom: 20, border: `1.5px solid ${COLORS.border}` }}>
        <div style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 16, color: COLORS.text, marginBottom: 16 }}>📊 Lecturas de hoy</div>
        {glucometria.map((d, i) => <GlucometriaBar key={i} dato={d} />)}
        <div style={{ display: "flex", gap: 16, marginTop: 14, paddingTop: 14, borderTop: `1px solid ${COLORS.border}` }}>
          {[
            { label: "Normal (70–140)", color: COLORS.low },
            { label: "Atención", color: COLORS.medium },
            { label: "Alto", color: COLORS.high },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color }} />
              <span style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.textSecondary }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Consejos */}
      <div style={{ background: COLORS.primaryLight, borderRadius: 20, padding: "18px", border: `1.5px solid ${COLORS.primary}33` }}>
        <div style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 16, color: COLORS.primaryDark, marginBottom: 12 }}>💡 Consejos de hoy</div>
        {[
          "Camina 10 minutos después de cada comida para reducir el pico glucémico.",
          "Prefiere alimentos con fibra antes de los carbohidratos en cada plato.",
          "Mantén tu hidratación: 8 vasos de agua al día apoyan el control del azúcar.",
        ].map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < 2 ? 10 : 0, alignItems: "flex-start" }}>
            <span style={{ flexShrink: 0, fontSize: 14, color: COLORS.primary, fontWeight: 800, paddingTop: 1 }}>{i + 1}.</span>
            <span style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.primaryDark, lineHeight: 1.5 }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PantallaPerfil() {
  // TODO: cargar datos reales del usuario desde API/auth
  const perfil = { nombre: "María González", edad: 38, tipo: "Diabetes tipo 2", objetivo: "Control glucémico", streak: 14 };
  return (
    <div>
      {/* Avatar y nombre */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>👩</div>
        <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 22, color: COLORS.text }}>{perfil.nombre}</div>
        <div style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.textSecondary, marginTop: 2 }}>{perfil.tipo}</div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Días racha", val: `${perfil.streak}🔥`, color: COLORS.accent },
          { label: "Recetas guardadas", val: "8", color: COLORS.primary },
          { label: "Lecturas esta semana", val: "12", color: "#4C6EAF" },
        ].map(item => (
          <div key={item.label} style={{ background: COLORS.cardBg, borderRadius: 16, padding: "14px 8px", textAlign: "center", border: `1.5px solid ${COLORS.border}` }}>
            <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 20, color: item.color }}>{item.val}</div>
            <div style={{ fontFamily: FONTS.body, fontSize: 10, color: COLORS.textLight, marginTop: 2 }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Info personal */}
      <div style={{ background: COLORS.cardBg, borderRadius: 20, padding: "18px", marginBottom: 16, border: `1.5px solid ${COLORS.border}` }}>
        <div style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 16, color: COLORS.text, marginBottom: 14 }}>👤 Información personal</div>
        {[
          { label: "Edad", val: `${perfil.edad} años` },
          { label: "Condición", val: perfil.tipo },
          { label: "Objetivo", val: perfil.objetivo },
          { label: "Restricciones", val: "Sin lactosa" },
        ].map((item, i, arr) => (
          <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < arr.length - 1 ? `1px solid ${COLORS.border}` : "none" }}>
            <span style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.textSecondary }}>{item.label}</span>
            <span style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, color: COLORS.text }}>{item.val}</span>
          </div>
        ))}
      </div>

      {/* Metas glucémicas */}
      <div style={{ background: COLORS.cardBg, borderRadius: 20, padding: "18px", marginBottom: 16, border: `1.5px solid ${COLORS.border}` }}>
        <div style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 16, color: COLORS.text, marginBottom: 14 }}>🎯 Metas glucémicas</div>
        {[
          { label: "Glucosa en ayunas", objetivo: "< 100 mg/dL", actual: "95 mg/dL", ok: true },
          { label: "Glucosa posprandial", objetivo: "< 140 mg/dL", actual: "132 mg/dL", ok: true },
          { label: "HbA1c", objetivo: "< 7%", actual: "7.2%", ok: false },
        ].map((meta, i, arr) => (
          <div key={meta.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < arr.length - 1 ? `1px solid ${COLORS.border}` : "none" }}>
            <div>
              <div style={{ fontFamily: FONTS.body, fontSize: 13, color: COLORS.textSecondary }}>{meta.label}</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 12, color: COLORS.textLight }}>Objetivo: {meta.objetivo}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 700, color: meta.ok ? COLORS.low : COLORS.high }}>{meta.actual}</span>
              <span style={{ fontSize: 16 }}>{meta.ok ? "✅" : "⚠️"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Botón editar */}
      <button style={{
        width: "100%",
        background: COLORS.primary,
        color: "#fff",
        border: "none",
        borderRadius: 16,
        padding: "16px",
        fontFamily: FONTS.body,
        fontWeight: 700,
        fontSize: 15,
        cursor: "pointer",
        marginBottom: 8,
      }}>✏️ Editar perfil</button>
      <button style={{
        width: "100%",
        background: COLORS.cardBg,
        color: COLORS.accent,
        border: `1.5px solid ${COLORS.accent}44`,
        borderRadius: 16,
        padding: "14px",
        fontFamily: FONTS.body,
        fontWeight: 700,
        fontSize: 15,
        cursor: "pointer",
      }}>🚪 Cerrar sesión</button>
    </div>
  );
}

const TABS = [
  { id: "recetas", label: "Recetas", icon: "🥗" },
  { id: "control", label: "Control", icon: "📊" },
  { id: "perfil", label: "Perfil", icon: "👤" },
];

export default function App() {
  const [tabActivo, setTabActivo] = useState("recetas");
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      maxWidth: 430,
      margin: "0 auto",
      position: "relative",
      fontFamily: FONTS.body,
    }}>
      {/* Header */}
      <div style={{
        background: COLORS.bg,
        padding: "16px 20px 12px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: `1px solid ${COLORS.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🌿</div>
          <div>
            <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: 18, color: COLORS.text, lineHeight: 1 }}>Cero-Azúcar</div>
            <div style={{ fontFamily: FONTS.body, fontSize: 11, color: COLORS.textLight }}>Recetas & Control Glicémico</div>
          </div>
        </div>
        <div style={{
          background: COLORS.primaryLight,
          borderRadius: 20,
          padding: "5px 12px",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}>
          <span style={{ fontSize: 14 }}>🔥</span>
          <span style={{ fontFamily: FONTS.body, fontWeight: 700, fontSize: 13, color: COLORS.primaryDark }}>14 días</span>
        </div>
      </div>

      {/* Contenido principal */}
      <div style={{ padding: "20px 16px", paddingBottom: 90 }}>
        {tabActivo === "recetas" && <PantallaRecetas onVerReceta={setRecetaSeleccionada} />}
        {tabActivo === "control" && <PantallaControl />}
        {tabActivo === "perfil" && <PantallaPerfil />}
      </div>

      {/* Bottom nav */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: 430,
        background: COLORS.navBg,
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex",
        padding: "8px 0 16px",
        zIndex: 100,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
      }}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setTabActivo(tab.id)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              padding: "6px 0",
              transition: "all 0.2s",
            }}
          >
            <div style={{
              fontSize: 22,
              filter: tabActivo === tab.id ? "none" : "grayscale(0.5) opacity(0.6)",
              transform: tabActivo === tab.id ? "scale(1.15)" : "scale(1)",
              transition: "all 0.2s",
            }}>{tab.icon}</div>
            <span style={{
              fontFamily: FONTS.body,
              fontSize: 11,
              fontWeight: 700,
              color: tabActivo === tab.id ? COLORS.primary : COLORS.textLight,
              transition: "color 0.2s",
            }}>{tab.label}</span>
            {tabActivo === tab.id && (
              <div style={{ width: 18, height: 3, background: COLORS.primary, borderRadius: 2, marginTop: 1 }} />
            )}
          </button>
        ))}
      </div>

      {/* Modal detalle receta */}
      {recetaSeleccionada && (
        <RecetaDetalle receta={recetaSeleccionada} onClose={() => setRecetaSeleccionada(null)} />
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(60px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { display: none; }
        input:focus { border-color: ${COLORS.primary} !important; box-shadow: 0 0 0 3px ${COLORS.primary}22 !important; }
      `}</style>
    </div>
  );
}