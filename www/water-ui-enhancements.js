
(function(){
  const WATER_KEY='edzakh_water_ui_order_v4';
  const SECTOR_KEY='edzakh_sector_ui_order_v4';
  function readOrder(key){try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return []}}
  function saveOrder(key,items){try{localStorage.setItem(key,JSON.stringify(items))}catch(e){}}
  function applyOrder(container,selector,key,attr){
    if(!container)return;
    const nodes=[...container.querySelectorAll(':scope > '+selector)];
    const order=readOrder(key);
    order.forEach(id=>{const node=nodes.find(n=>n.getAttribute(attr)===id);if(node)container.appendChild(node)});
  }
  function enableDrag(container,selector,key,attr){
    if(!container || container.dataset.dragReady==='1')return;
    container.dataset.dragReady='1';let dragged=null;
    // Pointer-based sorting supports Android touch as well as mouse/pen.
    container.addEventListener('pointerdown',e=>{
      const handle=e.target.closest('.water-drag-handle,.sector-drag-handle');
      if(!handle || !container.contains(handle))return;
      const item=handle.closest(selector);if(!item)return;
      e.preventDefault();e.stopPropagation();dragged=item;item.classList.add('dragging');
    });
    document.addEventListener('pointermove',e=>{
      if(!dragged)return;
      const hit=document.elementFromPoint(e.clientX,e.clientY);
      const target=hit&&hit.closest(selector);
      container.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
      if(!target||target===dragged||!container.contains(target))return;
      target.classList.add('drag-over');
      const r=target.getBoundingClientRect();
      let after;
      if(r.width>r.height*1.35 && Math.abs(e.clientY-(r.top+r.height/2))<r.height*.42) after=e.clientX>(r.left+r.width/2);
      else after=e.clientY>(r.top+r.height/2);
      container.insertBefore(dragged,after?target.nextSibling:target);
    },{passive:true});
    function finish(){
      if(!dragged)return;
      dragged.classList.remove('dragging');dragged=null;
      container.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
      const ids=[...container.querySelectorAll(':scope > '+selector)].map(n=>n.getAttribute(attr));
      saveOrder(key,ids);
    }
    document.addEventListener('pointerup',finish);
    document.addEventListener('pointercancel',finish);
    // Native desktop drag fallback.
    container.addEventListener('dragstart',e=>{
      const handle=e.target.closest('.water-drag-handle,.sector-drag-handle');
      const item=handle&&handle.closest(selector);if(!item){e.preventDefault();return;}
      dragged=item;item.classList.add('dragging');
      if(e.dataTransfer){e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',item.getAttribute(attr)||'');}
    });
    container.addEventListener('dragover',e=>{
      if(!dragged)return;e.preventDefault();
      const target=e.target.closest(selector);container.querySelectorAll('.drag-over').forEach(x=>x.classList.remove('drag-over'));
      if(target&&target!==dragged){target.classList.add('drag-over');const r=target.getBoundingClientRect();const after=e.clientY>(r.top+r.height/2);container.insertBefore(dragged,after?target.nextSibling:target);}
    });
    container.addEventListener('drop',e=>{if(!dragged)return;e.preventDefault();finish()});
    container.addEventListener('dragend',finish);
  }
  function init(){
    const water=document.getElementById('sec-water');
    if(water){applyOrder(water,'.water-sortable',WATER_KEY,'data-water-id');enableDrag(water,'.water-sortable',WATER_KEY,'data-water-id');}
    const primary=document.getElementById('water-primary-actions');
    if(primary){applyOrder(primary,'.water-primary-sortable',WATER_KEY+'_primary','data-water-primary-id');enableDrag(primary,'.water-primary-sortable',WATER_KEY+'_primary','data-water-primary-id');}
    document.querySelectorAll('.sector-sortable').forEach(b=>{const m=(b.getAttribute('onclick')||'').match(/enterSector\('([^']+)'\)/);if(m)b.setAttribute('data-sector-id',m[1]);});
    ['sector-chooser-grid','sector-switcher-buttons'].forEach(id=>{const parent=document.getElementById(id);if(parent){const key=SECTOR_KEY+'_'+id;applyOrder(parent,'.sector-sortable',key,'data-sector-id');enableDrag(parent,'.sector-sortable',key,'data-sector-id');}});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
