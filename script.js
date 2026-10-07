(()=>{
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
addEventListener('load',()=>setTimeout(()=>document.body.classList.add('ready'),700));
setTimeout(()=>document.body.classList.add('ready'),2500);
$$('#year').forEach(e=>e.textContent=new Date().getFullYear());
const nav=$('.navbar');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
// parallax on hero lines + sticky nav
const lines=$$('[data-speed]');
addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',scrollY>40);
  if(scrollY<innerHeight*1.2&&innerWidth>700)lines.forEach(l=>l.style.transform=`translateY(${scrollY*l.dataset.speed}px)`);
},{passive:true});
// cursor glow
const g=$('.glow');
if(g&&matchMedia('(hover:hover)').matches)addEventListener('pointermove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
// card spotlight
$$('.case-card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
// counters
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,n=+el.dataset.n,t=performance.now();
  (function f(now){const p=Math.min((now-t)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t)}),{threshold:.6});
$$('[data-n]').forEach(e=>co.observe(e));
// agent trace typewriter
const tr=$('#trace');
if(tr){const L=['<b>$</b> agent.run("analyse Q3 pipeline")','<b>thought</b> need CRM data first','<b>tool</b> crm.query(deals, stage=open)','<b>tool</b> rag.search("pricing policy")','<b>answer</b> 3 deals at risk. Draft sent.'];
  const rows=L.map(()=>{const p=document.createElement('p');tr.appendChild(p);return p});
  let i=0;(function next(){if(i>=L.length){setTimeout(()=>{rows.forEach(r=>r.innerHTML='');i=0;next()},4000);return}
    const r=rows[i],txt=L[i];r.innerHTML=txt;r.style.opacity=0;r.style.transition='opacity .5s';requestAnimationFrame(()=>r.style.opacity=1);i++;setTimeout(next,1100)})()}
// copy buttons
const toast=$('#toast');
$$('.copy-line').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy)}catch{}
  toast.textContent='Copied to clipboard';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}));
// contact form: opens the visitor's mail app (no backend needed on Vercel)
const f=$('#contact-form');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
  location.href=`mailto:jawadaliraja2022@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from '+d.get('name'))}&body=${encodeURIComponent(d.get('message')+'\n\n'+d.get('name')+' ('+d.get('email')+')')}`});
})();
