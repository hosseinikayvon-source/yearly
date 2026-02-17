import { useState } from "react";

const C = { bg:"#FAF7F2", bgA:"#F3EDE4", wh:"#FFFFFF", gd:"#C28B30", gdD:"#A87728", gdL:"#D6A74E", gdG:"#C28B3010", gdB:"#C28B3020", ink:"#18130E", ik2:"#3D3228", wm:"#8A7C6E", wL:"#A99B8D", wX:"#C8BBAD", bd:"#E6DDD2", gn:"#2A8F52", gnB:"#2A8F5210", am:"#D4870E", amB:"#D4870E10", amD:"#D4870E22" };
const sf = "'Instrument Serif',Georgia,serif";
const sn = "'Outfit',system-ui,sans-serif";
const hd = (s, x = {}) => ({ fontFamily: sf, fontWeight: 400, fontSize: s, letterSpacing: "-0.03em", lineHeight: 1.1, color: C.ink, ...x });
const bd = (s = 15, x = {}) => ({ fontFamily: sn, fontWeight: 400, fontSize: s, lineHeight: 1.6, color: C.wm, ...x });

const StarI = ({ s = 15 }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill={C.gd} stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> );
const QuoteI = () => ( <svg width={44} height={44} viewBox="0 0 24 24" fill={C.gd} opacity=".12"><path d="M6 17h3l2-4V7H5v6h3z" /><path d="M14 17h3l2-4V7h-6v6h3z" /></svg> );
const GiftI = ({ s = 18, c = "currentColor" }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" /></svg> );
const CalI = ({ s = 20, c = "currentColor" }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> );
const HeartI = ({ s = 20, c = "currentColor" }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg> );
const TruckI = ({ s = 20, c = "currentColor" }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg> );
const CheckI = ({ s = 16, c = "currentColor" }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> );
const ChevI = ({ s = 14, c = "currentColor" }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg> );
const BackI = () => ( <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg> );
const OutI = ({ c = "currentColor" }) => ( <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg> );
const RefreshI = ({ c = "currentColor" }) => ( <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg> );
const NoteI = ({ s = 13, c = "currentColor" }) => ( <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg> );
const PlusI = () => ( <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg> );
const ShieldI = ({ c }) => ( <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> );
const ClockI = ({ c }) => ( <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> );

function Logo({ small, onClick }) {
  const h = small ? 20 : 26;
  return (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: small ? 7 : 9, cursor: onClick ? "pointer" : "default", userSelect: "none" }}>
      <svg height={h} width={Math.round(h * 1.15)} viewBox="0 0 30 26" fill="none">
        <circle cx="11" cy="13" r="9.5" stroke={C.gd} strokeWidth="2" />
        <circle cx="19" cy="13" r="9.5" stroke={C.gd} strokeWidth="2" opacity="0.4" />
      </svg>
      <span style={{ fontFamily: sf, fontSize: small ? 17 : 21, color: C.ink, letterSpacing: "-0.03em" }}>yearly</span>
    </div>
  );
}

function Btn({ children, v = "gold", sz = "md", full, onClick, sx, disabled }) {
  const [h, setH] = useState(false);
  const base = { fontFamily: sn, fontWeight: 600, border: "none", cursor: disabled ? "default" : "pointer", borderRadius: 100, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, transition: "all .2s", width: full ? "100%" : undefined, opacity: disabled ? .4 : 1 };
  const szs = { sm: { fontSize: 13, padding: "9px 20px" }, md: { fontSize: 14, padding: "12px 28px" }, lg: { fontSize: 15.5, padding: "16px 38px" } };
  const vs = { gold: { background: h ? C.gdD : C.gd, color: "#fff", boxShadow: h ? "0 6px 20px #C28B3040" : "0 2px 8px #C28B3025" }, soft: { background: h ? C.bgA : C.wh, color: C.ik2, border: "1px solid " + C.bd }, ghost: { background: "transparent", color: h ? C.ink : C.wm }, dark: { background: h ? C.gdD : C.gd, color: "#fff", boxShadow: h ? "0 8px 28px #C28B3050" : "0 2px 12px #C28B3030" }, outline: { background: "transparent", color: C.gd, border: "1.5px solid #C28B3040", boxShadow: h ? "0 0 0 3px " + C.gdG : "none" } };
  return ( <button style={{ ...base, ...szs[sz], ...vs[v], ...sx }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick} disabled={disabled}>{children}</button> );
}

function Inp({ label, value, onChange, type = "text", placeholder, area, sx }) {
  const [f, setF] = useState(false);
  const s = { fontFamily: sn, fontSize: 15, padding: area ? "14px 16px" : "13px 16px", borderRadius: 12, border: "1.5px solid " + (f ? C.gd : C.bd), outline: "none", width: "100%", boxSizing: "border-box", background: C.wh, color: C.ink, transition: "all .2s", resize: area ? "vertical" : undefined, boxShadow: f ? "0 0 0 3px " + C.gdG : "none", minHeight: area ? 76 : undefined };
  return (
    <div style={{ marginBottom: 14, ...sx }}>
      {label && <label style={{ fontFamily: sn, fontSize: 12.5, fontWeight: 500, color: C.ik2, marginBottom: 5, display: "block" }}>{label}</label>}
      {area ? <textarea style={s} value={value} onChange={onChange} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} /> : <input style={s} type={type} value={value} onChange={onChange} placeholder={placeholder} onFocus={() => setF(true)} onBlur={() => setF(false)} />}
    </div>
  );
}

function Sel({ label, value, onChange, options, sx }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ marginBottom: 14, position: "relative", ...sx }}>
      {label && <label style={{ fontFamily: sn, fontSize: 12.5, fontWeight: 500, color: C.ik2, marginBottom: 5, display: "block" }}>{label}</label>}
      <div style={{ position: "relative" }}>
        <select style={{ fontFamily: sn, fontSize: 15, padding: "13px 36px 13px 16px", borderRadius: 12, border: "1.5px solid " + (f ? C.gd : C.bd), outline: "none", width: "100%", boxSizing: "border-box", background: C.wh, color: value ? C.ink : C.wL, appearance: "none", cursor: "pointer", transition: "all .2s", boxShadow: f ? "0 0 0 3px " + C.gdG : "none" }} value={value} onChange={onChange} onFocus={() => setF(true)} onBlur={() => setF(false)}>
          {options.map(o => <option key={o.v} value={o.v} disabled={o.d}>{o.l}</option>)}
        </select>
        <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}><ChevI c={C.wL} /></div>
      </div>
    </div>
  );
}

function Sheet({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(24,19,14,0.45)", backdropFilter: "blur(6px)", animation: "fadeIn .25s" }} />
      <div style={{ position: "relative", background: C.bg, borderRadius: "24px 24px 0 0", width: "100%", maxWidth: 460, maxHeight: "90vh", overflow: "auto", padding: "12px 24px 34px", animation: "sheetUp .35s cubic-bezier(.16,1,.3,1)", boxShadow: "0 -8px 40px rgba(24,19,14,0.15)" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: C.wX, margin: "0 auto 20px" }} />
        {children}
      </div>
    </div>
  );
}

function HC({ children, cl }) {
  const [h, setH] = useState(false);
  return ( <div className={cl} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: C.wh, borderRadius: 18, padding: "24px 22px", border: "1px solid " + C.bd, transition: "all .25s", boxShadow: h ? "0 8px 28px rgba(24,19,14,0.07)" : "0 2px 8px rgba(24,19,14,0.03)", transform: h ? "translateY(-2px)" : "none" }}>{children}</div> );
}

const MF = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function dU(m, d) { const t = new Date(2026, 2, 9), y = t.getFullYear(); let b = new Date(y, m - 1, d); if (b < t) b = new Date(y + 1, m - 1, d); return Math.ceil((b - t) / 864e5); }
function dFm(m, d) { return MF[m - 1] + " " + d; }

const VB = [{ id: "surprise", em: "\u{1F381}", lb: "Surprise me", ds: "Something great, every year", cl: C.gd }, { id: "foodie", em: "\u{1F370}", lb: "Foodie", ds: "Cakes, chocolates, treats", cl: "#C28B30" }, { id: "nature", em: "\u{1F33F}", lb: "Nature", ds: "Flowers, plants, seasonal", cl: "#5A8F5A" }, { id: "curated", em: "\u2728", lb: "Curated", ds: "Unique artisan finds", cl: "#9B7FC4" }];
const TR = [{ id: "thoughtful", nm: "Thoughtful", pr: 79, ds: "A curated gift from a local vendor near them, delivered with your personal note.", who: "Friends and coworkers" }, { id: "generous", nm: "Generous", pr: 95, ds: "Premium selection with priority curation from our team. The one most people choose.", who: "Family and close friends", pop: true }, { id: "above", nm: "Above & Beyond", pr: 150, ds: "Top-shelf gift with white-glove coordination from a dedicated curator.", who: "The people who matter most" }];
const PP = [{ id: 1, nm: "Mom", mo: 3, dy: 15, vb: "surprise", bg: "generous", st: "auto", ad: 2, cur: { it: "Lemon olive oil cake", vn: "Flour & Co. Bakery", ct: "Portland" }, nt: "Happy birthday Mom. Love you always." }, { id: 2, nm: "Alex Chen", mo: 4, dy: 2, vb: "nature", bg: "thoughtful", st: "curating", cur: { it: "Seasonal stem arrangement", vn: "Bloom Studio", ct: "Brooklyn" } }, { id: 3, nm: "Sarah Kim", mo: 5, dy: 19, vb: "foodie", bg: "above", st: "sched" }, { id: 4, nm: "Dad", mo: 7, dy: 8, vb: "surprise", bg: "generous", st: "sched" }, { id: 5, nm: "Priya", mo: 9, dy: 3, vb: "foodie", bg: "thoughtful", st: "sched" }, { id: 6, nm: "Jamie", mo: 1, dy: 22, vb: "curated", bg: "generous", st: "done", cur: { it: "Artisan chocolate collection", vn: "Kokoa Collective", ct: "Austin" } }];

function GS() {
  return ( <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{background:#FAF7F2;overflow-x:hidden}::selection{background:#C28B3025}@keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes bob{0%,100%{transform:translateY(0) rotate(var(--r,0deg))}50%{transform:translateY(-5px) rotate(var(--r,0deg))}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes sheetUp{from{transform:translateY(100%)}to{transform:translateY(0)}}.rise{animation:rise .6s cubic-bezier(.16,1,.3,1) both}.d1{animation-delay:.05s}.d2{animation-delay:.1s}.d3{animation-delay:.15s}.d4{animation-delay:.2s}.d5{animation-delay:.25s}input::placeholder,textarea::placeholder{color:#A99B8D}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#C8BBAD;border-radius:3px}`}</style> );
}

function SLabel({ l, c }) { return ( <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}><div style={{ fontFamily: sn, fontSize: 11.5, fontWeight: 600, color: c, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</div><div style={{ flex: 1, height: 1, background: C.bd }} /></div> ); }

function QCard({ p, vO, tO, idx }) {
  const [sw, setSw] = useState(false);
  const v = vO(p.vb), t = tO(p.bg), isA = p.st === "auto";
  return (
    <div className={"rise d" + (idx + 1)} style={{ background: C.wh, borderRadius: 18, padding: "18px 20px", marginBottom: 12, border: "1px solid " + (isA ? C.gd + "35" : C.bd), boxShadow: isA ? "0 4px 24px #C28B3010" : "0 2px 10px rgba(24,19,14,0.04)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}><span style={{ fontFamily: sn, fontWeight: 600, fontSize: 15.5, color: C.ink }}>{p.nm}</span><span style={{ fontSize: 14 }}>{v.em}</span></div>
          <div style={{ fontFamily: sn, fontSize: 12.5, color: C.wm, marginTop: 2 }}>{dFm(p.mo, p.dy)} · {p.da} day{p.da !== 1 ? "s" : ""} away</div>
        </div>
        <span style={{ fontFamily: sn, fontSize: 10.5, fontWeight: 600, padding: "3px 9px", borderRadius: 100, ...(isA ? { color: C.gd, background: C.gdG, border: "1px solid " + C.gdB } : { color: C.am, background: C.amB, border: "1px solid " + C.amD }) }}>{isA ? "Auto-shipping" : "Curating"}</span>
      </div>
      {p.cur && <div style={{ background: C.bg, borderRadius: 12, padding: "12px 14px", marginBottom: 12, border: "1px solid " + C.bd }}><div style={{ fontFamily: sn, fontSize: 10, fontWeight: 600, color: C.gd, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 5 }}>{sw ? "Alternative selected" : "Selected by our team"}</div><div style={{ fontFamily: sn, fontSize: 13.5, fontWeight: 500, color: C.ink }}>{sw ? "Seasonal wildflower arrangement" : p.cur.it}</div><div style={{ fontFamily: sn, fontSize: 12, color: C.wL, marginTop: 2 }}>{sw ? "Bloom & Stem, " + p.cur.ct : p.cur.vn + ", " + p.cur.ct} · ${t.pr}</div></div>}
      {p.nt && <div style={{ fontFamily: sn, fontSize: 12, color: C.wL, marginBottom: 12, display: "flex", alignItems: "flex-start", gap: 6 }}><NoteI s={13} c={C.wL} /><span style={{ fontStyle: "italic" }}>"{p.nt}"</span></div>}
      {isA && <div style={{ marginBottom: 12 }}><div style={{ fontFamily: sn, fontSize: 11.5, color: C.wm, marginBottom: 5 }}>Auto-shipping in {p.ad || 5} day{(p.ad || 5) !== 1 ? "s" : ""}. Do nothing — we've got it.</div><div style={{ height: 3, borderRadius: 2, background: C.bd, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 2, background: "linear-gradient(90deg,#C28B30,#D6A74E)", width: Math.max(10, 100 - ((p.ad || 5) / 7) * 100) + "%", transition: "width 1s" }} /></div></div>}
      <div style={{ display: "flex", gap: 8 }}>
        <Btn v="outline" sz="sm" onClick={() => setSw(!sw)} sx={{ flex: 1 }}><RefreshI c={C.gd} /> {sw ? "Undo" : "Swap gift"}</Btn>
        {isA && <Btn v="gold" sz="sm" sx={{ flex: 1 }}><CheckI s={12} c="#fff" /> Approve now</Btn>}
      </div>
    </div>
  );
}

function FAB({ onClick }) {
  const [h, setH] = useState(false);
  return ( <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: "fixed", bottom: 28, right: 28, width: 54, height: 54, borderRadius: 14, background: "linear-gradient(145deg,#C28B30,#A87728)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: h ? "0 8px 28px #C28B3050" : "0 4px 16px #C28B3035", transform: h ? "scale(1.08)" : "scale(1)", transition: "all .2s", zIndex: 50 }}><PlusI /></button> );
}

function Landing({ go }) {
  const reactions = [{ fr: "Mom", msg: "I can't believe you found that bakery. How did you even know about this place?? Saving you the biggest slice", tm: "2m ago", rt: -2.8, dl: 0 }, { fr: "Sarah", msg: "ok WHO told you I've been obsessed with this chocolatier. you're insane", tm: "14m ago", rt: 2, dl: 1 }, { fr: "Dad", msg: "Really good stuff kid. Don't know how you pulled this off but thank you.", tm: "1h ago", rt: -1.3, dl: 2 }];
  const steps = [["You add someone", '"Mom, March 15, loves her garden. Portland, OR."', "\u270F\uFE0F"], ["We source the gift", "A cake from a bakery in her neighborhood, chosen by our team.", "\u{1F381}"], ["You get a heads up", '"Gift selected for Mom. Auto-shipping in 5 days."', "\u{1F4F1}"], ["It arrives from you", "On her birthday, with a personal note in your words.", "\u{1F48C}"]];
  const reviews = [{ n: "Priya K.", c: 8, t: 'My friend sent me a photo of the flowers with the caption "how are you this thoughtful." I set it up months ago and genuinely forgot.' }, { n: "David L.", c: 6, t: "Every year it's something different. Last year chocolate, this year a cake from some place near her I've never heard of. She thinks I have a system. I do. It's called Yearly." }, { n: "Rachel T.", c: 7, t: "I added my whole family in one sitting. My siblings are genuinely confused about how I became the favorite child." }];
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1040, margin: "0 auto", padding: "15px 24px", background: "#FAF7F2E8", backdropFilter: "blur(18px) saturate(1.2)", borderBottom: "1px solid #E6DDD240" }}><Logo /><div style={{ display: "flex", gap: 6, alignItems: "center" }}><Btn v="ghost" sz="sm" onClick={() => go("login")}>Log in</Btn><Btn v="gold" sz="sm" onClick={() => go("signup")}>Get started</Btn></div></nav>
      <section style={{ maxWidth: 620, margin: "0 auto", padding: "80px 24px 0", textAlign: "center" }}>
        <div className="rise" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.wh, border: "1px solid " + C.bd, borderRadius: 100, padding: "7px 16px 7px 12px", marginBottom: 32, boxShadow: "0 2px 10px rgba(24,19,14,0.04)" }}><GiftI s={14} c={C.gd} /><span style={{ fontFamily: sn, fontSize: 12.5, fontWeight: 500, color: C.ik2 }}>Gifting on autopilot</span></div>
        <h1 className="rise d1" style={{ ...hd("clamp(42px,8vw,72px)"), lineHeight: 1.04, marginBottom: 24 }}>Every birthday,<br /><em style={{ fontStyle: "italic", color: C.gd }}>handled.</em></h1>
        <p className="rise d2" style={{ ...bd(17), maxWidth: 420, margin: "0 auto 36px", lineHeight: 1.65 }}>Add the people you care about. We find a local bakery, florist, or chocolatier near them and deliver a curated gift on their birthday with a personal note from you.</p>
        <div className="rise d3"><Btn v="gold" sz="lg" onClick={() => go("signup")}>Start gifting →</Btn></div>
        <div className="rise d4" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 30 }}><div style={{ display: "flex", gap: 2 }}>{[1, 2, 3, 4, 5].map(i => <StarI key={i} s={14} />)}</div><span style={{ fontFamily: sn, fontWeight: 600, fontSize: 13, color: C.ink }}>4.9</span><span style={{ width: 1, height: 12, background: C.wX }} /><span style={{ fontFamily: sn, fontSize: 12.5, color: C.wm }}>2,400+ gifts delivered</span></div>
      </section>
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px 0" }}><div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>{reactions.map((c, i) => <div key={i} className="rise d3" style={{ background: C.wh, borderRadius: 18, padding: "18px 20px", width: 225, boxShadow: "0 4px 20px rgba(24,19,14,0.05)", border: "1px solid " + C.bd, "--r": c.rt + "deg", animation: "rise .6s cubic-bezier(.16,1,.3,1) both, bob " + (5.2 + i * .9) + "s ease-in-out infinite", animationDelay: c.dl + "s, " + c.dl + "s" }}><div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}><div style={{ width: 28, height: 28, borderRadius: 14, background: C.bgA, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sn, fontSize: 11, fontWeight: 600, color: C.ik2 }}>{c.fr[0]}</div><span style={{ fontFamily: sn, fontWeight: 600, fontSize: 13, color: C.ink }}>{c.fr}</span><span style={{ fontFamily: sn, fontSize: 10.5, color: C.wX, marginLeft: "auto" }}>{c.tm}</span></div><div style={{ fontFamily: sn, fontSize: 13.5, color: C.ik2, lineHeight: 1.5 }}>{c.msg}</div></div>)}</div></section>
      <section style={{ background: C.wh, marginTop: 88, padding: "80px 24px" }}><div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}><h2 className="rise" style={hd("clamp(28px,5vw,42px)")}>You set it up once.<br />We do the rest, <em style={{ fontStyle: "italic", color: C.gd }}>every year.</em></h2><p className="rise d1" style={{ ...bd(15.5), maxWidth: 400, margin: "18px auto 44px" }}>Our team sources gifts from local vendors near the people you love. A different gift each year, delivered on their birthday. All you do is add them.</p><div className="rise d2" style={{ background: C.bg, borderRadius: 20, padding: "26px 24px", textAlign: "left", border: "1px solid " + C.bd, maxWidth: 400, margin: "0 auto" }}>{steps.map((r, i) => <div key={i} style={{ display: "flex", gap: 12, padding: "11px 0", borderTop: i ? "1px solid " + C.bd : undefined }}><span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{r[2]}</span><div><div style={{ fontFamily: sn, fontSize: 12, fontWeight: 600, color: C.ink, marginBottom: 1 }}>{r[0]}</div><div style={{ fontFamily: sn, fontSize: 13, color: C.wm, lineHeight: 1.5 }}>{r[1]}</div></div></div>)}</div></div></section>
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "88px 24px 0" }}><div style={{ textAlign: "center", marginBottom: 42 }}><div className="rise" style={{ fontFamily: sn, fontSize: 11, fontWeight: 600, color: C.gd, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Show your love</div><h2 className="rise d1" style={hd("clamp(26px,5vw,38px)")}>Add someone. Pick a vibe. Done.</h2></div><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}><HC cl="rise d2"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gdG, display: "flex", alignItems: "center", justifyContent: "center" }}><CalI s={20} c={C.gd} /></div><span style={{ fontFamily: sf, fontStyle: "italic", fontSize: 46, color: C.gd + "10", lineHeight: 1 }}>01</span></div><h3 style={{ fontFamily: sn, fontWeight: 600, fontSize: 15.5, color: C.ink, marginBottom: 7 }}>Add the people you love</h3><p style={bd(13.5)}>Name, birthday, and where they live. The more you tell us about them, the more personal the gift.</p></HC><HC cl="rise d3"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gdG, display: "flex", alignItems: "center", justifyContent: "center" }}><HeartI s={20} c={C.gd} /></div><span style={{ fontFamily: sf, fontStyle: "italic", fontSize: 46, color: C.gd + "10", lineHeight: 1 }}>02</span></div><h3 style={{ fontFamily: sn, fontWeight: 600, fontSize: 15.5, color: C.ink, marginBottom: 7 }}>Pick a vibe, not a product</h3><p style={bd(13.5)}>Foodie, Nature, Curated, or let us surprise them. You set the direction. Our team handles everything.</p></HC><HC cl="rise d4"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}><div style={{ width: 40, height: 40, borderRadius: 10, background: C.gdG, display: "flex", alignItems: "center", justifyContent: "center" }}><TruckI s={20} c={C.gd} /></div><span style={{ fontFamily: sf, fontStyle: "italic", fontSize: 46, color: C.gd + "10", lineHeight: 1 }}>03</span></div><h3 style={{ fontFamily: sn, fontWeight: 600, fontSize: 15.5, color: C.ink, marginBottom: 7 }}>It ships on autopilot</h3><p style={bd(13.5)}>We notify you a week before. Do nothing and it ships. Or swap with one tap. Always in control, never doing the work.</p></HC></div></section>
      <section style={{ maxWidth: 500, margin: "0 auto", padding: "88px 24px 0" }}><div style={{ textAlign: "center", marginBottom: 34 }}><div className="rise" style={{ fontFamily: sn, fontSize: 11, fontWeight: 600, color: C.gd, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Pricing</div><h2 className="rise d1" style={hd("clamp(26px,5vw,38px)")}>One price. Everything included.</h2><p className="rise d2" style={{ ...bd(14.5), marginTop: 10, maxWidth: 380, margin: "10px auto 0" }}>The gift, a personal note card, and delivery. Per person, per year. No surprises except the good kind.</p></div><div style={{ display: "flex", flexDirection: "column", gap: 12 }}>{TR.map((t, i) => <div key={t.id} className={"rise d" + (i + 2)} style={{ background: C.wh, borderRadius: 16, padding: "20px 22px", position: "relative", border: "1px solid " + (t.pop ? C.gd + "40" : C.bd), boxShadow: t.pop ? "0 4px 20px #C28B3010" : "0 2px 8px rgba(24,19,14,0.03)" }}>{t.pop && <span style={{ position: "absolute", top: -10, right: 16, background: C.gd, color: "#fff", fontFamily: sn, fontSize: 10.5, fontWeight: 600, padding: "3px 12px", borderRadius: 100 }}>Most popular</span>}<div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 5 }}><span style={{ fontFamily: sn, fontWeight: 600, fontSize: 17, color: C.ink }}>{t.nm}</span><span style={{ fontFamily: sn, fontWeight: 700, fontSize: 24, color: C.ink }}>${t.pr}<span style={{ fontSize: 12.5, fontWeight: 400, color: C.wm }}>/yr</span></span></div><p style={{ fontFamily: sn, fontSize: 12, color: C.gd, fontWeight: 500, marginBottom: 3 }}>{t.who}</p><p style={bd(13)}>{t.ds}</p></div>)}</div><div className="rise d5" style={{ marginTop: 18, padding: "12px 16px", borderRadius: 12, background: C.gdG, border: "1px solid " + C.gdB, textAlign: "center" }}><p style={{ fontFamily: sn, fontSize: 12.5, color: C.ik2 }}>Most people start with 3 to 5 people and add more over time.</p></div></section>
      <section style={{ maxWidth: 540, margin: "0 auto", padding: "88px 24px 0" }}><div className="rise" style={{ background: C.wh, borderRadius: 20, padding: "34px 30px", position: "relative", border: "1px solid " + C.bd, boxShadow: "0 4px 24px rgba(24,19,14,0.04)" }}><div style={{ position: "absolute", top: 22, left: 26 }}><QuoteI /></div><div style={{ display: "flex", gap: 2, marginBottom: 14, position: "relative" }}>{[1, 2, 3, 4, 5].map(i => <StarI key={i} s={15} />)}</div><p style={{ ...bd(14.5, { color: C.ik2 }), marginBottom: 12, position: "relative" }}>I added 12 family birthdays in one sitting last March. Haven't thought about it since.</p><p style={{ ...bd(14.5, { color: C.ik2 }), marginBottom: 18, position: "relative" }}>Three weeks ago my mom called me because a cake showed up from a bakery near her house. She kept asking how I found the place. I didn't. <strong style={{ fontWeight: 600 }}>Yearly found it.</strong> She's fully convinced I spent weeks researching it.</p><div style={{ fontFamily: sn, fontWeight: 600, fontSize: 13.5, color: C.ink }}>Jessica M.</div><div style={{ fontFamily: sn, fontSize: 12, color: C.wL }}>12 birthdays on autopilot</div></div></section>
      <section style={{ maxWidth: 820, margin: "0 auto", padding: "40px 24px 0" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 14 }}>{reviews.map((r, i) => <div key={i} className={"rise d" + (i + 1)} style={{ background: C.wh, borderRadius: 16, padding: "20px 18px", border: "1px solid " + C.bd, boxShadow: "0 2px 8px rgba(24,19,14,0.03)" }}><div style={{ display: "flex", gap: 2, marginBottom: 10 }}>{[1, 2, 3, 4, 5].map(j => <StarI key={j} s={12} />)}</div><p style={bd(13.5, { marginBottom: 12 })}>{r.t}</p><div style={{ fontFamily: sn, fontWeight: 600, fontSize: 12.5, color: C.ink }}>{r.n}</div><div style={{ fontFamily: sn, fontSize: 11.5, color: C.wL }}>{r.c} people on autopilot</div></div>)}</div></section>
      <section style={{ maxWidth: 580, margin: "0 auto", padding: "88px 24px 48px" }}><div className="rise" style={{ background: C.ink, borderRadius: 24, padding: "56px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 130%,#C28B3018 0%,transparent 65%)" }} /><h2 style={{ ...hd("clamp(28px,5vw,44px)", { color: "#fff" }), position: "relative", marginBottom: 14 }}>Be the person who<br /><em style={{ fontStyle: "italic", color: C.gdL }}>never forgets.</em></h2><p style={{ ...bd(14.5, { color: C.wL }), maxWidth: 320, margin: "0 auto 28px", position: "relative" }}>Set it up once. A thoughtful gift arrives from you, every birthday, every year.</p><div style={{ position: "relative" }}><Btn v="dark" sz="lg" onClick={() => go("signup")}>Get started free →</Btn></div></div></section>
      <footer style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px 36px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 18 }}><Logo small /><div style={{ display: "flex", alignItems: "center", gap: 5, color: C.wL, fontFamily: sn, fontSize: 11.5 }}><ShieldI c={C.wL} /> Secure</div><div style={{ display: "flex", alignItems: "center", gap: 5, color: C.wL, fontFamily: sn, fontSize: 11.5 }}><ClockI c={C.wL} /> Cancel anytime</div><span style={{ fontFamily: sn, fontSize: 11.5, color: C.wL }}>© 2026 Yearly</span></footer>
    </div>
  );
}

function Auth({ mode, go }) {
  const isL = mode === "login";
  const [nm, sN] = useState(""); const [em, sE] = useState(""); const [pw, sP] = useState("");
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 24px" }}>
      <div style={{ width: "100%", maxWidth: 400, paddingTop: 28 }}>
        <Btn v="soft" sz="sm" onClick={() => go("landing")} sx={{ marginBottom: 36 }}><BackI /> Back</Btn>
        <div className="rise" style={{ textAlign: "center", marginBottom: 30 }}><div style={{ marginBottom: 18, display: "flex", justifyContent: "center" }}><Logo /></div><h1 style={hd(28)}>{isL ? "Welcome back" : "Create your account"}</h1><p style={{ ...bd(13.5), marginTop: 7 }}>{isL ? "Log in to manage your people." : "Takes 30 seconds. No credit card yet."}</p></div>
        <div className="rise d2" style={{ background: C.wh, borderRadius: 20, padding: "26px 22px", border: "1px solid " + C.bd, boxShadow: "0 4px 20px rgba(24,19,14,0.04)" }}>
          {!isL && <Inp label="Full name" value={nm} onChange={e => sN(e.target.value)} placeholder="Your name" />}
          <Inp label="Email" value={em} onChange={e => sE(e.target.value)} type="email" placeholder="you@email.com" />
          <Inp label="Password" value={pw} onChange={e => sP(e.target.value)} type="password" placeholder={isL ? "Your password" : "Create a password"} />
          <Btn v="gold" sz="md" full onClick={() => go("dash")} sx={{ marginTop: 6 }}>{isL ? "Log in" : "Create account"}</Btn>
        </div>
        <p className="rise d3" style={{ ...bd(12.5), textAlign: "center", marginTop: 18 }}>{isL ? "Need an account? " : "Already have one? "}<span onClick={() => go(isL ? "signup" : "login")} style={{ color: C.gd, fontWeight: 500, cursor: "pointer" }}>{isL ? "Sign up" : "Log in"}</span></p>
      </div>
    </div>
  );
}

function Dash({ go }) {
  const [ppl, setPpl] = useState(PP); const [sheet, setSheet] = useState(false); const [step, setStep] = useState(1);
  const [f, setF] = useState({ nm: "", addr: "", mo: "", dy: "", ab: "", vb: "surprise", bg: "generous", nt: "" });
  const vO = id => VB.find(v => v.id === id) || VB[0]; const tO = id => TR.find(t => t.id === id) || TR[1];
  const all = ppl.map(p => ({ ...p, da: dU(p.mo, p.dy) }));
  const qu = all.filter(p => p.st === "auto" || p.st === "curating").sort((a, b) => a.da - b.da);
  const up = all.filter(p => p.st === "sched").sort((a, b) => a.da - b.da);
  const dn = all.filter(p => p.st === "done");
  const ac = all.filter(p => p.st !== "done").length;
  const mO = [{ v: "", l: "Month", d: true }, ...MF.map((m, i) => ({ v: String(i + 1), l: m }))];
  const dO = [{ v: "", l: "Day", d: true }, ...Array.from({ length: 31 }, (_, i) => ({ v: String(i + 1), l: String(i + 1) }))];
  const openSheet = () => { setStep(1); setF({ nm: "", addr: "", mo: "", dy: "", ab: "", vb: "surprise", bg: "generous", nt: "" }); setSheet(true); };
  const addPerson = () => { setPpl(prev => [...prev, { id: Date.now(), nm: f.nm, mo: +f.mo, dy: +f.dy, vb: f.vb, bg: f.bg, st: "sched", nt: f.nt || undefined }]); setSheet(false); };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", paddingBottom: 100 }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1040, margin: "0 auto", padding: "15px 24px", background: "#FAF7F2E8", backdropFilter: "blur(18px) saturate(1.2)", borderBottom: "1px solid #E6DDD240" }}><Logo small /><Btn v="ghost" sz="sm" onClick={() => go("landing")}><OutI c={C.wm} /> Sign out</Btn></nav>
      <div style={{ maxWidth: 520, margin: "0 auto", padding: "30px 24px 0" }}>
        <div className="rise" style={{ marginBottom: 30 }}><h1 style={hd(26)}>Your people</h1><p style={{ ...bd(13.5), marginTop: 4 }}>{ac} birthday{ac !== 1 ? "s" : ""} on autopilot</p></div>
        {qu.length > 0 && <div className="rise d1" style={{ marginBottom: 30 }}><SLabel l="Queued" c={C.gd} />{qu.map((p, i) => <QCard key={p.id} p={p} vO={vO} tO={tO} idx={i} />)}</div>}
        {up.length > 0 && <div className="rise d2" style={{ marginBottom: 30 }}><SLabel l="Upcoming" c={C.wm} /><div style={{ position: "relative", paddingLeft: 26 }}><div style={{ position: "absolute", left: 7, top: 6, bottom: 6, width: 1.5, background: C.bd, borderRadius: 1 }} />{up.map((p, i) => <div key={p.id} style={{ position: "relative", paddingBottom: i < up.length - 1 ? 14 : 0 }}><div style={{ position: "absolute", left: -22, top: 14, width: 9, height: 9, borderRadius: 5, background: C.wh, border: "2px solid " + C.bd }} /><div style={{ background: C.wh, borderRadius: 14, padding: "13px 16px", border: "1px solid " + C.bd }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ display: "flex", alignItems: "center", gap: 7 }}><span style={{ fontFamily: sn, fontWeight: 600, fontSize: 14, color: C.ink }}>{p.nm}</span><span style={{ fontSize: 13 }}>{vO(p.vb).em}</span></div><span style={{ fontFamily: sn, fontSize: 11, fontWeight: 500, color: C.gd, background: C.gdG, border: "1px solid " + C.gdB, padding: "2px 8px", borderRadius: 100 }}>{p.da}d</span></div><div style={{ fontFamily: sn, fontSize: 12, color: C.wL, marginTop: 3 }}>{dFm(p.mo, p.dy)} · {vO(p.vb).lb} · ${tO(p.bg).pr}/yr</div><div style={{ fontFamily: sn, fontSize: 11, color: C.wX, marginTop: 3 }}>We'll start curating ~7 days before</div></div></div>)}</div></div>}
        {dn.length > 0 && <div className="rise d3" style={{ marginBottom: 30 }}><SLabel l="Delivered" c={C.gn} />{dn.map(p => <div key={p.id} style={{ display: "flex", gap: 12, alignItems: "center", background: C.wh, borderRadius: 14, padding: "13px 15px", border: "1px solid " + C.bd, marginBottom: 8, opacity: .55 }}><div style={{ width: 38, height: 38, borderRadius: 10, background: C.gnB, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #2A8F5220" }}><CheckI s={16} c={C.gn} /></div><div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: sn, fontWeight: 600, fontSize: 13.5, color: C.ink }}>{p.nm}</div><div style={{ fontFamily: sn, fontSize: 11.5, color: C.wL, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.cur ? p.cur.it + " from " + p.cur.vn : "Gift delivered"}</div></div></div>)}</div>}
      </div>
      <FAB onClick={openSheet} />
      <Sheet open={sheet} onClose={() => setSheet(false)}>
        <div style={{ display: "flex", gap: 6, marginBottom: 26 }}>{[1, 2].map(s => <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: s <= step ? C.gd : C.bd, transition: "background .3s" }} />)}</div>
        {step === 1 && <div><h3 style={hd(21, { marginBottom: 16 })}>Who are you gifting?</h3><Inp label="Their name" value={f.nm} onChange={e => setF({ ...f, nm: e.target.value })} placeholder="e.g. Mom, Sarah Kim" /><Inp label="Delivery address" value={f.addr} onChange={e => setF({ ...f, addr: e.target.value })} placeholder="Street, city, state, zip" /><div style={{ display: "flex", gap: 10 }}><Sel label="Birth month" value={f.mo} onChange={e => setF({ ...f, mo: e.target.value })} options={mO} sx={{ flex: 1 }} /><Sel label="Day" value={f.dy} onChange={e => setF({ ...f, dy: e.target.value })} options={dO} sx={{ flex: "0 0 85px" }} /></div><Inp label="About them (optional)" area value={f.ab} onChange={e => setF({ ...f, ab: e.target.value })} placeholder="e.g. coffee snob, loves her garden, dark chocolate over milk" /><Btn v="gold" sz="md" full onClick={() => setStep(2)} disabled={!f.nm || !f.addr || !f.mo || !f.dy}>Continue →</Btn></div>}
        {step === 2 && <div><h3 style={hd(21, { marginBottom: 16 })}>Budget and preferences</h3><div style={{ fontFamily: sn, fontSize: 12.5, fontWeight: 500, color: C.ik2, marginBottom: 8 }}>How much do you want to spend?</div><div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 22 }}>{TR.map(t => <div key={t.id} onClick={() => setF({ ...f, bg: t.id })} style={{ background: f.bg === t.id ? C.gdG : C.wh, borderRadius: 12, padding: "14px 16px", border: "1.5px solid " + (f.bg === t.id ? C.gd : C.bd), cursor: "pointer", transition: "all .2s", display: "flex", justifyContent: "space-between", alignItems: "center" }}><div><span style={{ fontFamily: sn, fontWeight: 600, fontSize: 14, color: C.ink }}>{t.nm}</span><span style={{ fontFamily: sn, fontSize: 11.5, color: C.wL, marginLeft: 8 }}>{t.who}</span></div><span style={{ fontFamily: sn, fontWeight: 700, fontSize: 16, color: C.ink }}>${t.pr}</span></div>)}</div><div style={{ fontFamily: sn, fontSize: 12.5, fontWeight: 500, color: C.ik2, marginBottom: 8 }}>Gift vibe (optional)</div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 22 }}>{VB.map(v => <div key={v.id} onClick={() => setF({ ...f, vb: v.id })} style={{ background: f.vb === v.id ? v.cl + "10" : C.wh, borderRadius: 12, padding: "12px", border: "1.5px solid " + (f.vb === v.id ? v.cl : C.bd), cursor: "pointer", transition: "all .2s" }}><div style={{ fontSize: 17, marginBottom: 3 }}>{v.em}</div><div style={{ fontFamily: sn, fontWeight: 600, fontSize: 13, color: C.ink }}>{v.lb}</div><div style={{ fontFamily: sn, fontSize: 11, color: C.wL }}>{v.ds}</div></div>)}</div><Inp label="Personal note (optional)" area value={f.nt} onChange={e => setF({ ...f, nt: e.target.value })} placeholder="e.g. Happy birthday Mom. Love you always." /><div style={{ background: C.bgA, borderRadius: 12, padding: "14px 16px", marginBottom: 18, border: "1px solid " + C.bd }}><div style={{ fontFamily: sn, fontSize: 10, fontWeight: 600, color: C.gd, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Summary</div><div style={{ fontFamily: sn, fontSize: 14, fontWeight: 600, color: C.ink }}>{f.nm}</div><div style={{ fontFamily: sn, fontSize: 12.5, color: C.wm, marginTop: 2 }}>{f.mo && f.dy ? dFm(+f.mo, +f.dy) : ""} · {vO(f.vb).em} {vO(f.vb).lb} · ${tO(f.bg).pr}/yr</div>{f.ab && <div style={{ fontFamily: sn, fontSize: 12.5, fontStyle: "italic", color: C.wL, marginTop: 5 }}>"{f.ab}"</div>}{f.nt && <div style={{ fontFamily: sn, fontSize: 12, color: C.wL, marginTop: 4, display: "flex", alignItems: "center", gap: 4 }}><NoteI s={11} c={C.wL} /> {f.nt}</div>}</div><div style={{ display: "flex", gap: 10 }}><Btn v="soft" sz="md" onClick={() => setStep(1)} sx={{ flex: "0 0 auto" }}><BackI /> Back</Btn><Btn v="gold" sz="md" full onClick={addPerson}>Add to Yearly</Btn></div></div>}
      </Sheet>
    </div>
  );
}

export default function App() {
  const [s, setS] = useState("landing");
  const go = v => { setS(v); window.scrollTo(0, 0); };
  return (
    <>
      <GS />
      {s === "landing" && <Landing go={go} />}
      {s === "signup" && <Auth mode="signup" go={go} />}
      {s === "login" && <Auth mode="login" go={go} />}
      {s === "dash" && <Dash go={go} />}
    </>
  );
}
