
(function(){
 const ORDER_KEY='edzakh_meeting_hub_order_v1';
 const hubId='meeting-main-hub';
 function saveOrder(hub){try{localStorage.setItem(ORDER_KEY,JSON.stringify([...hub.querySelectorAll('[data-meeting-tile]')].map(x=>x.dataset.meetingTile)));}catch(e){}}
 function restoreOrder(hub){try{const order=JSON.parse(localStorage.getItem(ORDER_KEY)||'[]');order.forEach(k=>{const el=hub.querySelector('[data-meeting-tile="'+k+'"]');if(el)hub.appendChild(el);});}catch(e){}}
 function setupTouchSort(){const hub=document.getElementById(hubId);if(!hub||hub.dataset.touchSortV16)return;hub.dataset.touchSortV16='1';restoreOrder(hub);let moving=null,startX=0,startY=0,active=false,suppressClick=false;
  hub.querySelectorAll('.meeting-drag-handle').forEach(handle=>{handle.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;moving=handle.closest('[data-meeting-tile]');if(!moving)return;startX=e.clientX;startY=e.clientY;active=false;});handle.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopPropagation();suppressClick=false;}},{capture:true});});
  document.addEventListener('pointermove',e=>{if(!moving)return;const dx=e.clientX-startX,dy=e.clientY-startY;if(!active&&Math.hypot(dx,dy)<8)return;active=true;moving.classList.add('is-reordering');const target=document.elementFromPoint(e.clientX,e.clientY)?.closest('#'+hubId+' [data-meeting-tile]');hub.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'));if(target&&target!==moving){target.classList.add('drop-target');const r=target.getBoundingClientRect();hub.insertBefore(moving,(e.clientY<r.top+r.height/2||e.clientX<r.left+r.width/2)?target:target.nextSibling);}});
  document.addEventListener('pointerup',()=>{if(!moving)return;moving.classList.remove('is-reordering');hub.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'));if(active){saveOrder(hub);suppressClick=true;setTimeout(()=>{suppressClick=false;},350);}moving=null;active=false;});
  hub.querySelectorAll('[data-meeting-tile]').forEach(tile=>{tile.addEventListener('dragend',()=>saveOrder(hub));tile.addEventListener('drop',()=>setTimeout(()=>saveOrder(hub),0));});
 }
 function hideAllPanels(){const sec=document.getElementById('sec-meetings');if(!sec)return;sec.querySelectorAll('.meeting-accordion-body').forEach(b=>{b.classList.add('hidden');});sec.querySelectorAll('.meeting-accordion-head').forEach(h=>{h.setAttribute('aria-expanded','false');const i=h.querySelector('i');if(i)i.className='fa-solid fa-chevron-down';});}
 function ensurePanels(){if(typeof window.meetingShowAll==='function')window.meetingShowAll();hideAllPanels();setupTouchSort();}
 // Tile buttons are the sole entry point: tapping anywhere on title/icon opens its matching panel.
 const original=window.meetingGoTo;
 window.meetingGoTo=function(id){if(typeof original==='function')return original(id);};
 const oldShow=window.meetingShowAll;
 window.meetingShowAll=function(){if(typeof oldShow==='function')oldShow();hideAllPanels();};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ensurePanels);else ensurePanels();
})();
