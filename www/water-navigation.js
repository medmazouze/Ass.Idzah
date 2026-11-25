
function openWaterFold(id){
  const fold=document.querySelector('#sec-water .water-fold[data-water-id="'+id+'"]');
  if(!fold)return;
  fold.open=true;
  setTimeout(()=>fold.scrollIntoView({behavior:'smooth',block:'start'}),30);
}
