const LABEL={atun:'atún',platano:'plátano',jamon:'jamón',limon:'limón',frijol:'frijoles',tomate:'tomate'};
const ALIAS={jitomate:'tomate',patata:'papa',res:'carne','carne de res':'carne',banano:'platano',frijoles:'frijol','queso fresco':'queso',pechuga:'pollo','pechuga de pollo':'pollo',espagueti:'pasta',spaghetti:'pasta',fideos:'pasta',palta:'aguacate'};
const R=[
{n:'Arroz con pollo',t:40,i:['pollo','arroz','cebolla','zanahoria','ajo'],s:['Dora el pollo en trozos con ajo y cebolla.','Agrega el arroz y la zanahoria picada, y cubre con agua o caldo.','Cocina tapado a fuego bajo unos 20 minutos.']},
{n:'Huevos rancheros',t:20,i:['huevo','tomate','cebolla','tortilla'],s:['Licúa o pica el tomate y cocínalo con cebolla hasta hacer una salsa.','Fríe los huevos y calienta las tortillas.','Sirve los huevos sobre la tortilla con la salsa encima.']},
{n:'Frijoles volteados con huevo',t:20,i:['frijol','cebolla','huevo','tortilla'],s:['Sofríe la cebolla y agrega los frijoles machacados.','Cocina hasta que espese y se forme un volteado.','Acompaña con huevo frito y tortillas calientes.']},
{n:'Tostadas de guacamole',t:10,i:['tortilla','aguacate','limon','tomate'],s:['Tuesta las tortillas hasta que queden crujientes.','Machaca el aguacate con limón y sal, y mezcla el tomate picado.','Unta sobre las tostadas y sirve.']},
{n:'Caldo de pollo',t:50,i:['pollo','papa','zanahoria','cebolla','cilantro'],s:['Hierve el pollo con cebolla en agua con sal.','Agrega papa y zanahoria en trozos.','Cocina hasta que todo esté suave y termina con cilantro.']},
{n:'Pasta al pomodoro',t:25,i:['pasta','tomate','ajo','cebolla'],s:['Cuece la pasta en agua con sal.','Sofríe ajo y cebolla, agrega tomate picado y cocina 10 minutos.','Mezcla la pasta con la salsa.']},
{n:'Pasta con atún',t:20,i:['pasta','atun','tomate','cebolla'],s:['Cuece la pasta.','Sofríe cebolla y tomate, agrega el atún escurrido.','Mezcla con la pasta y sirve.']},
{n:'Tortilla de papa',t:30,i:['huevo','papa','cebolla'],s:['Fríe la papa y la cebolla en rodajas finas hasta que estén blandas.','Mezcla con los huevos batidos.','Cuaja en sartén por ambos lados.']},
{n:'Quesadillas',t:10,i:['tortilla','queso'],s:['Pon queso sobre una tortilla y dóblala.','Dora en sartén por ambos lados hasta que el queso se derrita.']},
{n:'Arroz frito con huevo',t:20,i:['arroz','huevo','zanahoria','cebolla','ajo'],s:['Saltea ajo, cebolla y zanahoria picada.','Agrega el arroz ya cocido y mezcla a fuego alto.','Haz un hueco, revuelve los huevos y combínalos con el arroz.']},
{n:'Omelette de jamón y queso',t:10,i:['huevo','jamon','queso'],s:['Bate los huevos con una pizca de sal.','Viértelos en la sartén y agrega jamón y queso.','Dobla cuando cuaje y sirve.']},
{n:'Panqueques',t:20,i:['harina','huevo','leche','mantequilla'],s:['Mezcla harina, huevo y leche hasta obtener una masa lisa.','Derrite mantequilla en la sartén.','Cocina porciones hasta que doren por ambos lados.']},
{n:'Pollo al horno con papas',t:60,i:['pollo','papa','ajo','limon'],s:['Marina el pollo con ajo, limón y sal.','Coloca papas en trozos alrededor en una bandeja.','Hornea a 200 °C por 45 minutos.']},
{n:'Ensalada de atún',t:10,i:['atun','lechuga','tomate','limon'],s:['Pica la lechuga y el tomate.','Agrega el atún escurrido.','Aliña con limón y sal.']},
{n:'Carne guisada',t:60,i:['carne','papa','tomate','cebolla','zanahoria'],s:['Sella la carne en trozos con cebolla.','Agrega tomate, papa y zanahoria con un poco de agua.','Cocina tapado a fuego bajo hasta que la carne esté tierna.']},
{n:'Sándwich de jamón y queso',t:5,i:['pan','jamon','queso'],s:['Arma el sándwich con jamón y queso.','Tuéstalo en sartén hasta que dore y el queso se derrita.']},
{n:'Sopa de tomate',t:30,i:['tomate','cebolla','ajo','pan'],s:['Sofríe cebolla y ajo, agrega tomate picado y agua.','Cocina 15 minutos y licúa.','Sirve con cubos de pan tostado.']},
{n:'Plátanos fritos con frijoles',t:15,i:['platano','frijol'],s:['Corta el plátano maduro en rodajas y fríelo hasta que dore.','Calienta los frijoles y sirve juntos.']},
{n:'Pollo en salsa de tomate',t:40,i:['pollo','tomate','cebolla','ajo'],s:['Dora el pollo en trozos.','Prepara una salsa con tomate, cebolla y ajo.','Cocina el pollo en la salsa hasta que esté tierno.']},
{n:'Tacos de carne',t:25,i:['carne','tortilla','cebolla','cilantro','limon'],s:['Corta la carne en tiras y saltéala con sal.','Calienta las tortillas.','Sirve con cebolla, cilantro y limón.']},
{n:'Arroz con vegetales',t:30,i:['arroz','zanahoria','pimiento','cebolla'],s:['Sofríe cebolla, pimiento y zanahoria picados.','Agrega el arroz y el doble de agua.','Cocina tapado a fuego bajo 18 minutos.']}
];
const KNOWN=new Set(R.flatMap(r=>r.i));
const QUICK=['pollo','carne','huevo','tomate','cebolla','ajo','arroz','papa','zanahoria','pasta','atun','queso','tortilla','frijol','aguacate','limon','jamon','pan'];
const have=new Set();
const $=id=>document.getElementById(id);
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lab=k=>LABEL[k]||k;
function norm(s){
  let w=s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().replace(/\s+/g,' ');
  if(ALIAS[w])return ALIAS[w];
  for(const c of [w,w.replace(/es$/,''),w.replace(/s$/,'')]){if(ALIAS[c])return ALIAS[c];if(KNOWN.has(c))return c;}
  return w;
}
function add(raw){
  raw.split(/[,;\n]+/).forEach(p=>{const k=norm(p);if(k)have.add(k);});
  render();
}
function toggle(k){have.has(k)?have.delete(k):have.add(k);render();}
function render(){
  $('mine').innerHTML=have.size?[...have].map(k=>`<button class="chip on" data-rm="${esc(k)}" aria-label="Quitar ${esc(lab(k))}">${esc(lab(k))} ×</button>`).join(''):'<span style="color:var(--muted)">Aún no agregas nada.</span>';
  $('quick').innerHTML=QUICK.map(k=>`<button class="chip${have.has(k)?' on':''}" data-q="${k}" aria-pressed="${have.has(k)}">${lab(k)}</button>`).join('');
  const onlyReady=$('onlyReady').checked;
  if(!have.size){$('count').textContent='Recetas';$('results').innerHTML='<div class="empty">Agrega al menos un ingrediente para ver qué puedes cocinar.</div>';return;}
  let list=R.map(r=>{const h=r.i.filter(x=>have.has(x));const m=r.i.filter(x=>!have.has(x));return{r,h,m};}).filter(x=>x.h.length);
  if(onlyReady)list=list.filter(x=>!x.m.length);
  list.sort((a,b)=>a.m.length-b.m.length||b.h.length/b.r.i.length-a.h.length/a.r.i.length||a.r.t-b.r.t);
  const ready=list.filter(x=>!x.m.length).length;
  $('count').textContent=list.length?`${ready} lista${ready===1?'':'s'} para cocinar, ${list.length-ready} casi`:'Sin resultados';
  if(!list.length){$('results').innerHTML='<div class="empty">No encontramos recetas con esos ingredientes. Prueba agregando otros más comunes, como huevo, cebolla o tomate.</div>';return;}
  $('results').innerHTML=list.map(({r,h,m})=>{
    const pct=Math.round(h.length/r.i.length*100);
    return `<article class="card${m.length?'':' ready'}">
      <div class="top"><h3>${r.n}</h3><span class="meta">${r.t} min</span></div>
      <div class="meter" role="img" aria-label="Tienes ${h.length} de ${r.i.length} ingredientes"><i style="width:${pct}%"></i></div>
      <div class="status${m.length?'':' ok'}">${m.length?`Tienes ${h.length} de ${r.i.length}. Te ${m.length===1?'falta':'faltan'} ${m.length}`:'Tienes todo lo necesario'}</div>
      <div class="chips">${h.map(x=>`<span class="chip have">${lab(x)}</span>`).join('')}${m.map(x=>`<span class="chip miss">falta ${lab(x)}</span>`).join('')}</div>
      <details><summary>Ver preparación</summary><ol>${r.s.map(x=>`<li>${x}</li>`).join('')}</ol></details>
    </article>`;}).join('');
}
$('addBtn').onclick=()=>{add($('inp').value);$('inp').value='';$('inp').focus();};
$('inp').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('addBtn').click();}});
$('onlyReady').onchange=render;
document.addEventListener('click',e=>{
  const q=e.target.closest('[data-q]');if(q)return toggle(q.dataset.q);
  const rm=e.target.closest('[data-rm]');if(rm)return toggle(rm.dataset.rm);
});
render();