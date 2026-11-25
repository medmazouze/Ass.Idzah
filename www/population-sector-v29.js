
(function(){
  function mountPopulationSector(){
    const host=document.getElementById('population-central-host');
    const card=document.getElementById('member-registry-card');
    const sec=document.getElementById('sec-population');
    if(!host||!card||!sec)return;
    if(card.parentElement!==host)host.appendChild(card);
    card.classList.remove('hidden','meeting-content-pane','meeting-panel-hidden');
    card.style.display='block';
    const oldTitle=card.querySelector('h3');
    if(oldTitle && /المنخرطون|سجل المنخرطين/.test(oldTitle.textContent))oldTitle.textContent='لائحة الساكنة';
    const oldMeetTile=document.querySelector('#meeting-main-hub [onclick*="member-registry-card"]');
    if(oldMeetTile)oldMeetTile.remove();
    const oldNav=document.getElementById('tab-residents');
    if(oldNav){oldNav.setAttribute('aria-label','الواجبات الجماعية');const span=oldNav.querySelector('span');if(span)span.textContent='الواجبات';}
    const popNav=document.getElementById('tab-population');
    if(popNav)popNav.setAttribute('aria-label','الساكنة');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mountPopulationSector,{once:true});else mountPopulationSector();
  document.addEventListener('click',function(e){const b=e.target.closest('#tab-population');if(b){mountPopulationSector();if(typeof renderCentralMembers==='function')renderCentralMembers();}});
})();
