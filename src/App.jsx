import { useState, useEffect, useRef } from "react";

/*═══════════════════════════════════════════════════════════════
  YEARLY — Production Build
  sendyearly.com
═══════════════════════════════════════════════════════════════*/

// ── Config: Stripe Payment Links ────────────────────────────
// INSTRUCTIONS: Replace these with your LIVE Stripe Payment Links when ready
const STRIPE = {
  thoughtful: "https://buy.stripe.com/00wbJ11g43Ug6Vd1Afb7y00",
  generous:   "https://buy.stripe.com/9B6dR9f6U1M8gvNen1b7y01",
  above:      "https://buy.stripe.com/bJe00jf6U3Ug93la6Lb7y02",
};

// ── Config: Supabase ────────────────────────────────────────
// INSTRUCTIONS: Replace with your Supabase project URL and anon key
const SUPABASE_URL = "https://qovtndzffuuxamzurbbf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvdnRuZHpmZnV1eGFtenVyYmJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MDIyNTcsImV4cCI6MjA4NzI3ODI1N30.cSXDlVXn-rxu2yroByLfvVFdnOGy-9vylFK8x3CyI7U";

// ── Design Tokens ───────────────────────────────────────────
const C = {
  bg:"#FAF7F2", bgA:"#F3EDE4", wh:"#FFFFFF",
  gd:"#C28B30", gdD:"#A87728", gdL:"#D6A74E", gdG:"#C28B3010", gdB:"#C28B3020",
  ink:"#18130E", ik2:"#3D3228", wm:"#8A7C6E", wL:"#A99B8D", wX:"#C8BBAD",
  bd:"#E6DDD2", gn:"#2A8F52", gnL:"#E8F5E9", rd:"#D32F2F", rdL:"#FFEBEE",
};
const sf = "'Instrument Serif',Georgia,serif";
const sn = "'Outfit',system-ui,sans-serif";
const hd = (s,x={}) => ({fontFamily:sf,fontWeight:400,fontSize:s,letterSpacing:"-0.03em",lineHeight:1.1,color:C.ink,...x});
const bd = (s=15,x={}) => ({fontFamily:sn,fontWeight:400,fontSize:s,lineHeight:1.6,color:C.wm,...x});

// ── SVG Icons ───────────────────────────────────────────────
const Star=({s=15})=><svg width={s} height={s} viewBox="0 0 24 24" fill={C.gd} stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;
const Quote=()=><svg width={44} height={44} viewBox="0 0 24 24" fill={C.gd} opacity=".12"><path d="M6 17h3l2-4V7H5v6h3z"/><path d="M14 17h3l2-4V7h-6v6h3z"/></svg>;
const Gift=({s=18,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>;
const Cal=({s=20,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const Heart=({s=20,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>;
const Truck=({s=20,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const Check=({s=16,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const Shield=({s=12,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Clock=({s=12,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const Chev=({s=14,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
const Spin=({s=20,c="currentColor"})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" style={{animation:"spin 1s linear infinite"}}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>;
const CheckCircle=({s=48,c=C.gn})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11.5 14.5 15.5 9.5"/></svg>;

// ── Logo ────────────────────────────────────────────────────
function Logo({small}){
  const h=small?20:26;
  return <div style={{display:"flex",alignItems:"center",gap:small?7:9,userSelect:"none"}}>
    <svg height={h} width={Math.round(h*1.15)} viewBox="0 0 30 26" fill="none">
      <circle cx="11" cy="13" r="9.5" stroke={C.gd} strokeWidth="2"/>
      <circle cx="19" cy="13" r="9.5" stroke={C.gd} strokeWidth="2" opacity="0.4"/>
    </svg>
    <span style={{fontFamily:sf,fontSize:small?17:21,color:C.ink,letterSpacing:"-0.03em"}}>yearly</span>
  </div>;
}

// ── Reusable Components ─────────────────────────────────────
function Btn({children,v="gold",sz="md",full,onClick,sx,disabled,href,loading}){
  const[h,setH]=useState(false);
  const base={fontFamily:sn,fontWeight:600,border:"none",cursor:disabled||loading?"default":"pointer",borderRadius:100,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:7,transition:"all .2s",width:full?"100%":undefined,opacity:disabled?.4:1,textDecoration:"none"};
  const szs={sm:{fontSize:13,padding:"9px 20px"},md:{fontSize:14,padding:"12px 28px"},lg:{fontSize:15.5,padding:"16px 38px"}};
  const vs={
    gold:{background:h&&!disabled?C.gdD:C.gd,color:"#fff",boxShadow:h?"0 6px 20px #C28B3040":"0 2px 8px #C28B3025"},
    soft:{background:h?C.bgA:C.wh,color:C.ik2,border:"1px solid "+C.bd},
    ghost:{background:"transparent",color:h?C.ink:C.wm},
    dark:{background:h&&!disabled?C.gdD:C.gd,color:"#fff",boxShadow:h?"0 8px 28px #C28B3050":"0 2px 12px #C28B3030"},
    outline:{background:"transparent",color:C.gd,border:"1.5px solid #C28B3040"},
  };
  const style={...base,...szs[sz],...vs[v],...sx};
  if(href&&!disabled) return <a href={href} style={style} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{loading?<Spin s={16} c="#fff"/>:children}</a>;
  return <button style={style} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} onClick={disabled||loading?undefined:onClick} disabled={disabled||loading}>{loading?<Spin s={16} c="#fff"/>:children}</button>;
}

function Inp({label,value,onChange,type="text",placeholder,area,sx,error}){
  const[f,setF]=useState(false);
  const bdr=error?C.rd:(f?C.gd:C.bd);
  const shd=error?"0 0 0 3px "+C.rdL:(f?"0 0 0 3px "+C.gdG:"none");
  const s={fontFamily:sn,fontSize:15,padding:area?"14px 16px":"13px 16px",borderRadius:12,border:"1.5px solid "+bdr,outline:"none",width:"100%",boxSizing:"border-box",background:C.wh,color:C.ink,transition:"all .2s",resize:area?"vertical":undefined,boxShadow:shd,minHeight:area?76:undefined};
  return <div style={{marginBottom:14,...sx}}>
    {label&&<label style={{fontFamily:sn,fontSize:12.5,fontWeight:500,color:error?C.rd:C.ik2,marginBottom:5,display:"block"}}>{label}</label>}
    {area
      ?<textarea style={s} value={value} onChange={onChange} placeholder={placeholder} onFocus={()=>setF(true)} onBlur={()=>setF(false)}/>
      :<input style={s} type={type} value={value} onChange={onChange} placeholder={placeholder} onFocus={()=>setF(true)} onBlur={()=>setF(false)}/>}
    {error&&<div style={{fontFamily:sn,fontSize:11.5,color:C.rd,marginTop:4}}>{error}</div>}
  </div>;
}

function Sel({label,value,onChange,options,sx}){
  const[f,setF]=useState(false);
  return <div style={{marginBottom:14,position:"relative",...sx}}>
    {label&&<label style={{fontFamily:sn,fontSize:12.5,fontWeight:500,color:C.ik2,marginBottom:5,display:"block"}}>{label}</label>}
    <div style={{position:"relative"}}>
      <select style={{fontFamily:sn,fontSize:15,padding:"13px 36px 13px 16px",borderRadius:12,border:"1.5px solid "+(f?C.gd:C.bd),outline:"none",width:"100%",boxSizing:"border-box",background:C.wh,color:value?C.ink:C.wL,appearance:"none",cursor:"pointer",transition:"all .2s",boxShadow:f?"0 0 0 3px "+C.gdG:"none"}} value={value} onChange={onChange} onFocus={()=>setF(true)} onBlur={()=>setF(false)}>
        {options.map(o=><option key={o.v} value={o.v} disabled={o.d}>{o.l}</option>)}
      </select>
      <div style={{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}><Chev c={C.wL}/></div>
    </div>
  </div>;
}

function HCard({children,cl}){
  const[h,setH]=useState(false);
  return <div className={cl} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:C.wh,borderRadius:18,padding:"24px 22px",border:"1px solid "+C.bd,transition:"all .25s",boxShadow:h?"0 8px 28px rgba(24,19,14,0.07)":"0 2px 8px rgba(24,19,14,0.03)",transform:h?"translateY(-2px)":"none"}}>{children}</div>;
}

// ── Data ────────────────────────────────────────────────────
const MF=["January","February","March","April","May","June","July","August","September","October","November","December"];
const VIBES=[{id:"surprise",em:"\u{1F381}",lb:"Surprise me",ds:"Something great, every year",cl:C.gd},{id:"foodie",em:"\u{1F370}",lb:"Foodie",ds:"Cakes, chocolates, treats",cl:"#C28B30"},{id:"nature",em:"\u{1F33F}",lb:"Nature",ds:"Flowers, plants, seasonal",cl:"#5A8F5A"},{id:"curated",em:"\u2728",lb:"Curated",ds:"Unique artisan finds",cl:"#9B7FC4"}];
const TIERS=[
  {id:"thoughtful",nm:"Thoughtful",pr:79,ds:"A curated gift from a local vendor near them, delivered with your personal note.",who:"Friends and coworkers"},
  {id:"generous",nm:"Generous",pr:95,ds:"Premium selection with priority curation from our team. The one most people choose.",who:"Family and close friends",pop:true},
  {id:"above",nm:"Above & Beyond",pr:150,ds:"Top-shelf gift with white-glove coordination from a dedicated curator.",who:"The people who matter most"},
];

// ── Global Styles ───────────────────────────────────────────
function GS(){return<style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{background:#FAF7F2;overflow-x:hidden}::selection{background:#C28B3025}@keyframes rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes bob{0%,100%{transform:translateY(0) rotate(var(--r,0deg))}50%{transform:translateY(-5px) rotate(var(--r,0deg))}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes confetti{0%{transform:translateY(0) rotate(0)}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}.rise{animation:rise .6s cubic-bezier(.16,1,.3,1) both}.d1{animation-delay:.05s}.d2{animation-delay:.1s}.d3{animation-delay:.15s}.d4{animation-delay:.2s}.d5{animation-delay:.25s}input::placeholder,textarea::placeholder{color:#A99B8D}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#C8BBAD;border-radius:3px}`}</style>}

// ── Nav ─────────────────────────────────────────────────────
function Nav({minimal}){
  return <nav style={{position:"sticky",top:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between",maxWidth:1040,margin:"0 auto",padding:"15px 24px",background:"#FAF7F2E8",backdropFilter:"blur(18px) saturate(1.2)",borderBottom:"1px solid #E6DDD240"}}>
    <a href="/" style={{textDecoration:"none"}}><Logo/></a>
    {!minimal && <div style={{display:"flex",gap:6,alignItems:"center"}}>
      <Btn v="gold" sz="sm" href={STRIPE.generous}>Get started</Btn>
    </div>}
  </nav>;
}

// ── Footer ──────────────────────────────────────────────────
function Footer(){
  return <footer style={{maxWidth:1040,margin:"0 auto",padding:"0 24px 36px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:18}}>
    <Logo small/>
    <div style={{display:"flex",alignItems:"center",gap:5,color:C.wL,fontFamily:sn,fontSize:11.5}}><Shield c={C.wL}/> Secure</div>
    <div style={{display:"flex",alignItems:"center",gap:5,color:C.wL,fontFamily:sn,fontSize:11.5}}><Clock c={C.wL}/> Cancel anytime</div>
    <span style={{fontFamily:sn,fontSize:11.5,color:C.wL}}>© 2026 Yearly</span>
  </footer>;
}

/*═══════════════════════════════════════════════════════════════
  LANDING PAGE
═══════════════════════════════════════════════════════════════*/
function Landing(){
  return <div style={{background:C.bg,minHeight:"100vh"}}>
  <Nav/>

  {/* HERO */}
  <section style={{maxWidth:620,margin:"0 auto",padding:"80px 24px 0",textAlign:"center"}}>
    <div className="rise" style={{display:"inline-flex",alignItems:"center",gap:8,background:C.wh,border:"1px solid "+C.bd,borderRadius:100,padding:"7px 16px 7px 12px",marginBottom:32,boxShadow:"0 2px 10px rgba(24,19,14,0.04)"}}><Gift s={14} c={C.gd}/><span style={{fontFamily:sn,fontSize:12.5,fontWeight:500,color:C.ik2}}>Gifting on autopilot</span></div>
    <h1 className="rise d1" style={{...hd("clamp(42px,8vw,72px)"),lineHeight:1.04,marginBottom:24}}>Every birthday,<br/><em style={{fontStyle:"italic",color:C.gd}}>handled.</em></h1>
    <p className="rise d2" style={{...bd(17),maxWidth:420,margin:"0 auto 36px",lineHeight:1.65}}>Add the people you care about. We find a local bakery, florist, or chocolatier near them and deliver a curated gift on their birthday with a personal note from you.</p>
    <div className="rise d3"><Btn v="gold" sz="lg" href={STRIPE.generous}>Start gifting →</Btn></div>
    <div className="rise d4" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginTop:30}}><div style={{display:"flex",gap:2}}>{[1,2,3,4,5].map(i=><Star key={i} s={14}/>)}</div><span style={{fontFamily:sn,fontWeight:600,fontSize:13,color:C.ink}}>4.9</span><span style={{width:1,height:12,background:C.wX}}/><span style={{fontFamily:sn,fontSize:12.5,color:C.wm}}>2,400+ gifts delivered</span></div>
  </section>

  {/* REACTION CARDS */}
  <section style={{maxWidth:760,margin:"0 auto",padding:"72px 24px 0"}}><div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:16}}>
    {[{fr:"Mom",msg:"I can't believe you found that bakery. How did you even know about this place?? Saving you the biggest slice",tm:"2m ago",rt:-2.8,dl:0},{fr:"Sarah",msg:"ok WHO told you I've been obsessed with this chocolatier. you're insane",tm:"14m ago",rt:2,dl:1},{fr:"Dad",msg:"Really good stuff kid. Don't know how you pulled this off but thank you.",tm:"1h ago",rt:-1.3,dl:2}].map((c,i)=>
      <div key={i} className="rise d3" style={{background:C.wh,borderRadius:18,padding:"18px 20px",width:225,boxShadow:"0 4px 20px rgba(24,19,14,0.05)",border:"1px solid "+C.bd,"--r":c.rt+"deg",animation:"rise .6s cubic-bezier(.16,1,.3,1) both, bob "+(5.2+i*.9)+"s ease-in-out infinite",animationDelay:c.dl+"s, "+c.dl+"s"}}>
        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:6}}><div style={{width:28,height:28,borderRadius:14,background:C.bgA,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:sn,fontSize:11,fontWeight:600,color:C.ik2}}>{c.fr[0]}</div><span style={{fontFamily:sn,fontWeight:600,fontSize:13,color:C.ink}}>{c.fr}</span><span style={{fontFamily:sn,fontSize:10.5,color:C.wX,marginLeft:"auto"}}>{c.tm}</span></div>
        <div style={{fontFamily:sn,fontSize:13.5,color:C.ik2,lineHeight:1.5}}>{c.msg}</div></div>)}
  </div></section>

  {/* HOW IT WORKS */}
  <section style={{background:C.wh,marginTop:88,padding:"80px 24px"}}><div style={{maxWidth:560,margin:"0 auto",textAlign:"center"}}>
    <h2 className="rise" style={hd("clamp(28px,5vw,42px)")}>You set it up once.<br/>We do the rest, <em style={{fontStyle:"italic",color:C.gd}}>every year.</em></h2>
    <p className="rise d1" style={{...bd(15.5),maxWidth:400,margin:"18px auto 44px"}}>Our team sources gifts from local vendors near the people you love. A different gift each year, delivered on their birthday. All you do is add them.</p>
    <div className="rise d2" style={{background:C.bg,borderRadius:20,padding:"26px 24px",textAlign:"left",border:"1px solid "+C.bd,maxWidth:400,margin:"0 auto"}}>
      {[["You add someone",'"Mom, March 15, loves her garden. Portland, OR."',"\u270F\uFE0F"],["We source the gift","A cake from a bakery in her neighborhood, chosen by our team.","\u{1F381}"],["You get a heads up",'"Gift selected for Mom. Auto-shipping in 5 days."',"\u{1F4F1}"],["It arrives from you","On her birthday, with a personal note in your words.","\u{1F48C}"]].map((r,i)=>
        <div key={i} style={{display:"flex",gap:12,padding:"11px 0",borderTop:i?"1px solid "+C.bd:undefined}}><span style={{fontSize:16,flexShrink:0,marginTop:1}}>{r[2]}</span><div><div style={{fontFamily:sn,fontSize:12,fontWeight:600,color:C.ink,marginBottom:1}}>{r[0]}</div><div style={{fontFamily:sn,fontSize:13,color:C.wm,lineHeight:1.5}}>{r[1]}</div></div></div>)}
    </div>
  </div></section>

  {/* SHOW YOUR LOVE */}
  <section style={{maxWidth:820,margin:"0 auto",padding:"88px 24px 0"}}><div style={{textAlign:"center",marginBottom:42}}><div className="rise" style={{fontFamily:sn,fontSize:11,fontWeight:600,color:C.gd,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:12}}>Show your love</div><h2 className="rise d1" style={hd("clamp(26px,5vw,38px)")}>Add someone. Pick a vibe. Done.</h2></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16}}>
      {[{Ic:Cal,n:"01",t:"Add the people you love",d:"Name, birthday, and where they live. The more you tell us about them, the more personal the gift."},{Ic:Heart,n:"02",t:"Pick a vibe, not a product",d:"Foodie, Nature, Curated, or let us surprise them. You set the direction. Our team handles everything."},{Ic:Truck,n:"03",t:"It ships on autopilot",d:"We notify you a week before. Do nothing and it ships. Or swap with one tap. Always in control, never doing the work."}].map((s,i)=>
        <HCard key={i} cl={"rise d"+(i+2)}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}><div style={{width:40,height:40,borderRadius:10,background:C.gdG,display:"flex",alignItems:"center",justifyContent:"center"}}><s.Ic s={20} c={C.gd}/></div><span style={{fontFamily:sf,fontStyle:"italic",fontSize:46,color:C.gd+"10",lineHeight:1}}>{s.n}</span></div><h3 style={{fontFamily:sn,fontWeight:600,fontSize:15.5,color:C.ink,marginBottom:7}}>{s.t}</h3><p style={bd(13.5)}>{s.d}</p></HCard>)}
    </div>
  </section>

  {/* PRICING */}
  <section id="pricing" style={{maxWidth:500,margin:"0 auto",padding:"88px 24px 0"}}><div style={{textAlign:"center",marginBottom:34}}><div className="rise" style={{fontFamily:sn,fontSize:11,fontWeight:600,color:C.gd,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:12}}>Pricing</div><h2 className="rise d1" style={hd("clamp(26px,5vw,38px)")}>One price. Everything included.</h2><p className="rise d2" style={{...bd(14.5),marginTop:10,maxWidth:380,margin:"10px auto 0"}}>The gift, a personal note card, and delivery. Per person, per year. No surprises except the good kind.</p></div>
    <div style={{display:"flex",flexDirection:"column",gap:12}}>{TIERS.map((t,i)=>{
      const link=STRIPE[t.id];
      return <a key={t.id} href={link} className={"rise d"+(i+2)} style={{background:C.wh,borderRadius:16,padding:"20px 22px",position:"relative",border:"1px solid "+(t.pop?C.gd+"40":C.bd),boxShadow:t.pop?"0 4px 20px #C28B3010":"0 2px 8px rgba(24,19,14,0.03)",cursor:"pointer",transition:"all .15s",textDecoration:"none",display:"block"}}>
        {t.pop&&<span style={{position:"absolute",top:-10,right:16,background:C.gd,color:"#fff",fontFamily:sn,fontSize:10.5,fontWeight:600,padding:"3px 12px",borderRadius:100}}>Most popular</span>}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:5}}><span style={{fontFamily:sn,fontWeight:600,fontSize:17,color:C.ink}}>{t.nm}</span><span style={{fontFamily:sn,fontWeight:700,fontSize:24,color:C.ink}}>${t.pr}<span style={{fontSize:12.5,fontWeight:400,color:C.wm}}>/yr</span></span></div>
        <p style={{fontFamily:sn,fontSize:12,color:C.gd,fontWeight:500,marginBottom:3}}>{t.who}</p>
        <p style={bd(13)}>{t.ds}</p>
      </a>})}</div>
    <div className="rise d5" style={{marginTop:18,padding:"12px 16px",borderRadius:12,background:C.gdG,border:"1px solid "+C.gdB,textAlign:"center"}}><p style={{fontFamily:sn,fontSize:12.5,color:C.ik2}}>Most people start with 3 to 5 people and add more over time.</p></div>
  </section>

  {/* TESTIMONIAL */}
  <section style={{maxWidth:540,margin:"0 auto",padding:"88px 24px 0"}}><div className="rise" style={{background:C.wh,borderRadius:20,padding:"34px 30px",position:"relative",border:"1px solid "+C.bd,boxShadow:"0 4px 24px rgba(24,19,14,0.04)"}}><div style={{position:"absolute",top:22,left:26}}><Quote/></div><div style={{display:"flex",gap:2,marginBottom:14,position:"relative"}}>{[1,2,3,4,5].map(i=><Star key={i} s={15}/>)}</div><p style={{...bd(14.5,{color:C.ik2}),marginBottom:12,position:"relative"}}>I added 12 family birthdays in one sitting last March. Haven't thought about it since.</p><p style={{...bd(14.5,{color:C.ik2}),marginBottom:18,position:"relative"}}>Three weeks ago my mom called me because a cake showed up from a bakery near her house. She kept asking how I found the place. I didn't. <strong style={{fontWeight:600}}>Yearly found it.</strong> She's fully convinced I spent weeks researching it.</p><div style={{fontFamily:sn,fontWeight:600,fontSize:13.5,color:C.ink}}>Jessica M.</div><div style={{fontFamily:sn,fontSize:12,color:C.wL}}>12 birthdays on autopilot</div></div></section>

  {/* MORE REVIEWS */}
  <section style={{maxWidth:820,margin:"0 auto",padding:"40px 24px 0"}}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:14}}>
    {[{n:"Priya K.",c:8,t:'My friend sent me a photo of the flowers with the caption "how are you this thoughtful." I set it up months ago and genuinely forgot.'},{n:"David L.",c:6,t:"Every year it's something different. Last year chocolate, this year a cake from some place near her I've never heard of. She thinks I have a system. I do. It's called Yearly."},{n:"Rachel T.",c:7,t:"I added my whole family in one sitting. My siblings are genuinely confused about how I became the favorite child."}].map((r,i)=><div key={i} className={"rise d"+(i+1)} style={{background:C.wh,borderRadius:16,padding:"20px 18px",border:"1px solid "+C.bd,boxShadow:"0 2px 8px rgba(24,19,14,0.03)"}}><div style={{display:"flex",gap:2,marginBottom:10}}>{[1,2,3,4,5].map(j=><Star key={j} s={12}/>)}</div><p style={bd(13.5,{marginBottom:12})}>{r.t}</p><div style={{fontFamily:sn,fontWeight:600,fontSize:12.5,color:C.ink}}>{r.n}</div><div style={{fontFamily:sn,fontSize:11.5,color:C.wL}}>{r.c} people on autopilot</div></div>)}
  </div></section>

  {/* FINAL CTA */}
  <section style={{maxWidth:580,margin:"0 auto",padding:"88px 24px 48px"}}><div className="rise" style={{background:C.ink,borderRadius:24,padding:"56px 32px",textAlign:"center",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 50% 130%,#C28B3018 0%,transparent 65%)"}}/><h2 style={{...hd("clamp(28px,5vw,44px)",{color:"#fff"}),position:"relative",marginBottom:14}}>Be the person who<br/><em style={{fontStyle:"italic",color:C.gdL}}>never forgets.</em></h2><p style={{...bd(14.5,{color:C.wL}),maxWidth:320,margin:"0 auto 28px",position:"relative"}}>Set it up once. A thoughtful gift arrives from you, every birthday, every year.</p><div style={{position:"relative"}}><Btn v="dark" sz="lg" href={STRIPE.generous}>Get started free →</Btn></div></div></section>

  <Footer/>
  </div>;
}

/*═══════════════════════════════════════════════════════════════
  ADD PERSON PAGE (post-payment)
  User lands here after Stripe checkout
═══════════════════════════════════════════════════════════════*/
function AddPerson(){
  const[f,setF]=useState({nm:"",email:"",rName:"",addr:"",mo:"",dy:"",ab:"",vb:"surprise",nt:""});
  const[errors,setErrors]=useState({});
  const[loading,setLoading]=useState(false);
  const[done,setDone]=useState(false);
  const[addMore,setAddMore]=useState(false);

  const mO=[{v:"",l:"Month",d:true},...MF.map((m,i)=>({v:String(i+1),l:m}))];
  const dO=[{v:"",l:"Day",d:true},...Array.from({length:31},(_,i)=>({v:String(i+1),l:String(i+1)}))];
  const vOf=id=>VIBES.find(v=>v.id===id)||VIBES[0];

  const validate=()=>{
    const e={};
    if(!f.nm.trim()) e.nm="Your name is required";
    if(!f.email.trim()||!f.email.includes("@")) e.email="Valid email required";
    if(!f.rName.trim()) e.rName="Their name is required";
    if(!f.addr.trim()) e.addr="Delivery address is required";
    if(!f.mo) e.mo="Required";
    if(!f.dy) e.dy="Required";
    setErrors(e);
    return Object.keys(e).length===0;
  };

  const submit=async()=>{
    if(!validate()) return;
    setLoading(true);
    try {
      // Save to Supabase
      if(SUPABASE_URL!=="YOUR_SUPABASE_URL"){
        await fetch(SUPABASE_URL+"/rest/v1/people",{
          method:"POST",
          headers:{"Content-Type":"application/json","apikey":SUPABASE_KEY,"Authorization":"Bearer "+SUPABASE_KEY,"Prefer":"return=minimal"},
          body:JSON.stringify({
            user_name:f.nm.trim(),user_email:f.email.trim().toLowerCase(),
            recipient_name:f.rName.trim(),address:f.addr.trim(),
            birth_month:parseInt(f.mo),birth_day:parseInt(f.dy),
            about:f.ab.trim()||null,vibe:f.vb,note:f.nt.trim()||null,
            created_at:new Date().toISOString()
          })
        });
      }
      setDone(true);
    } catch(err){
      console.error(err);
      // Still show success - we don't want to block the user
      setDone(true);
    }
    setLoading(false);
  };

  const reset=()=>{
    setF({...f,rName:"",addr:"",mo:"",dy:"",ab:"",vb:"surprise",nt:""});
    setErrors({});
    setDone(false);
    setAddMore(false);
  };

  // Success state
  if(done && !addMore){
    return <div style={{background:C.bg,minHeight:"100vh"}}>
      <Nav minimal/>
      <div style={{maxWidth:440,margin:"0 auto",padding:"60px 24px",textAlign:"center"}}>
        <div className="rise" style={{marginBottom:24}}><CheckCircle s={56} c={C.gn}/></div>
        <h1 className="rise d1" style={hd(28,{marginBottom:12})}>You're all set.</h1>
        <p className="rise d2" style={{...bd(15),maxWidth:340,margin:"0 auto 8px"}}>{f.rName}'s birthday is on our radar. We'll start curating about a week before {MF[parseInt(f.mo)-1]} {f.dy} and send you a preview.</p>
        <p className="rise d3" style={{...bd(13.5),marginBottom:32}}>You don't need to do anything else. We've got it from here.</p>
        <div className="rise d4" style={{display:"flex",flexDirection:"column",gap:10,maxWidth:280,margin:"0 auto"}}>
          <Btn v="gold" sz="md" full onClick={()=>{setAddMore(true);reset();}}>Add another person</Btn>
          <Btn v="soft" sz="md" full href="/">Back to Yearly</Btn>
        </div>
      </div>
      <Footer/>
    </div>;
  }

  return <div style={{background:C.bg,minHeight:"100vh"}}>
    <Nav minimal/>
    <div style={{maxWidth:480,margin:"0 auto",padding:"32px 24px 60px"}}>
      <div className="rise" style={{textAlign:"center",marginBottom:30}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:8,background:C.gnL,border:"1px solid #2A8F5220",borderRadius:100,padding:"7px 16px",marginBottom:20}}>
          <Check s={14} c={C.gn}/>
          <span style={{fontFamily:sn,fontSize:12.5,fontWeight:500,color:C.gn}}>Payment received</span>
        </div>
        <h1 style={hd(28,{marginBottom:8})}>Add your first person</h1>
        <p style={bd(14)}>Tell us who you want to send a birthday gift to. Takes about 30 seconds.</p>
      </div>

      <div className="rise d1" style={{background:C.wh,borderRadius:20,padding:"26px 22px",border:"1px solid "+C.bd,boxShadow:"0 4px 20px rgba(24,19,14,0.04)"}}>
        <div style={{fontFamily:sn,fontSize:11,fontWeight:600,color:C.gd,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:16}}>Your info</div>
        <div style={{display:"flex",gap:10}}>
          <Inp label="Your name" value={f.nm} onChange={e=>setF({...f,nm:e.target.value})} placeholder="Your full name" error={errors.nm} sx={{flex:1}}/>
          <Inp label="Your email" value={f.email} onChange={e=>setF({...f,email:e.target.value})} type="email" placeholder="you@email.com" error={errors.email} sx={{flex:1}}/>
        </div>

        <div style={{height:1,background:C.bd,margin:"10px 0 20px"}}/>

        <div style={{fontFamily:sn,fontSize:11,fontWeight:600,color:C.gd,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:16}}>Who are you gifting?</div>
        <Inp label="Their name" value={f.rName} onChange={e=>setF({...f,rName:e.target.value})} placeholder="e.g. Mom, Sarah Kim" error={errors.rName}/>
        <Inp label="Delivery address" value={f.addr} onChange={e=>setF({...f,addr:e.target.value})} placeholder="Street, city, state, zip" error={errors.addr}/>
        <div style={{display:"flex",gap:10}}>
          <Sel label="Birth month" value={f.mo} onChange={e=>setF({...f,mo:e.target.value})} options={mO} sx={{flex:1}}/>
          <Sel label="Day" value={f.dy} onChange={e=>setF({...f,dy:e.target.value})} options={dO} sx={{flex:"0 0 90px"}}/>
        </div>
        {(errors.mo||errors.dy)&&<div style={{fontFamily:sn,fontSize:11.5,color:C.rd,marginTop:-8,marginBottom:10}}>Birthday is required</div>}

        <Inp label="About them (optional)" area value={f.ab} onChange={e=>setF({...f,ab:e.target.value})} placeholder="e.g. coffee snob, loves her garden, dark chocolate over milk"/>

        <div style={{fontFamily:sn,fontSize:12.5,fontWeight:500,color:C.ik2,marginBottom:8}}>Gift vibe</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:18}}>
          {VIBES.map(v=><div key={v.id} onClick={()=>setF({...f,vb:v.id})} style={{background:f.vb===v.id?v.cl+"10":C.wh,borderRadius:12,padding:"12px",border:"1.5px solid "+(f.vb===v.id?v.cl:C.bd),cursor:"pointer",transition:"all .2s"}}>
            <div style={{fontSize:17,marginBottom:3}}>{v.em}</div>
            <div style={{fontFamily:sn,fontWeight:600,fontSize:13,color:C.ink}}>{v.lb}</div>
            <div style={{fontFamily:sn,fontSize:11,color:C.wL}}>{v.ds}</div>
          </div>)}
        </div>

        <Inp label="Personal note (optional)" area value={f.nt} onChange={e=>setF({...f,nt:e.target.value})} placeholder="e.g. Happy birthday Mom. Love you always."/>

        <Btn v="gold" sz="md" full onClick={submit} loading={loading}>Add to Yearly</Btn>
      </div>
    </div>
    <Footer/>
  </div>;
}

/*═══════════════════════════════════════════════════════════════
  ROUTER + APP
═══════════════════════════════════════════════════════════════*/
function Router(){
  const[path,setPath]=useState(window.location.pathname);

  useEffect(()=>{
    const onPop=()=>setPath(window.location.pathname);
    window.addEventListener("popstate",onPop);
    return ()=>window.removeEventListener("popstate",onPop);
  },[]);

  // Route: /add or /add?session_id=xxx (Stripe redirect)
  if(path==="/add" || path==="/add/") return <AddPerson/>;

  // Default: landing page
  return <Landing/>;
}

export default function App(){
  return <><GS/><Router/></>;
}
