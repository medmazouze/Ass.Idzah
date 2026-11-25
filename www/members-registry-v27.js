
(function(){
 const card=document.getElementById('member-registry-card');
 if(!card)return;
 card.innerHTML=`
 <div class="flex items-center justify-between gap-2 mb-3">
  <div><h3 class="font-extrabold text-base text-slate-800">المنخرطون</h3><p class="text-[10px] text-slate-500 mt-1">السجل المركزي للأعضاء وربطه بمشتركي الماء</p></div>
  <button type="button" class="m27-action m27-primary" onclick="m27OpenMember()">+ منخرط جديد</button>
 </div>
 <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3" id="m27-stats">
  <div class="m27-stat"><strong id="m27-total">0</strong><span>مجموع المسجلين</span></div>
  <div class="m27-stat"><strong id="m27-active">0</strong><span>منخرطون نشطون</span></div>
  <div class="m27-stat"><strong id="m27-paid">0</strong><span>واجب الانخراط مؤدى</span></div>
  <div class="m27-stat"><strong id="m27-linked">0</strong><span>مرتبطون بالماء</span></div>
 </div>
 <div class="flex flex-wrap gap-2 mb-3">
  <button type="button" class="m27-action" onclick="m27ToggleImport()">استيراد / إدخال جماعي</button>
  <button type="button" class="m27-action" onclick="m27ExportMembers()">تصدير CSV</button>
  <button type="button" class="m27-action" onclick="downloadMemberImportTemplate()">نموذج CSV</button>
 </div>
 <div id="m27-import-panel" class="hidden border border-slate-200 rounded-xl p-3 mb-3 bg-slate-50">
  <p class="text-xs font-extrabold mb-1">استيراد لائحة المنخرطين</p>
  <p class="text-[10px] text-slate-500 mb-2">الأعمدة: الاسم الكامل، الهاتف، رقم الانخراط، الصفات، رقم البطاقة الوطنية. يتم تجاوز السجلات المكررة.</p>
  <label class="m27-action inline-flex items-center gap-2">اختيار ملف CSV<input type="file" accept=".csv,text/csv" class="hidden" onchange="m27ImportCSV(this)"></label>
  <textarea id="member-reg-bulk" rows="3" class="m27-field mt-2" placeholder="أدخل كل منخرط في سطر مستقل: الاسم، الهاتف، رقم الانخراط، الصفات، رقم البطاقة"></textarea>
  <button type="button" class="m27-action m27-primary mt-2" onclick="m27BulkAdd()">إضافة الأسطر</button>
  <p id="member-reg-import-status" class="text-[10px] text-slate-500 mt-2"></p>
 </div>
 <div class="grid grid-cols-1 sm:grid-cols-[1fr_145px] gap-2 mb-2">
  <input id="member-reg-search" oninput="renderCentralMembers()" class="m27-field" placeholder="ابحث بالاسم أو رقم الانخراط أو الهاتف"/>
  <select id="m27-status-filter" class="m27-field" onchange="renderCentralMembers()"><option value="">كل الوضعيات</option><option value="active">نشط</option><option value="inactive">غير نشط</option><option value="paid">واجب مؤدى</option><option value="unpaid">واجب غير مؤدى</option></select>
 </div>
 <div id="member-reg-list" class="space-y-2"></div>
 <div id="m27-member-modal" class="m27-modal" role="dialog" aria-modal="true" aria-labelledby="m27-modal-title">
  <div class="m27-modal-panel" dir="rtl">
   <div class="flex items-center justify-between mb-3"><h3 id="m27-modal-title" class="font-extrabold text-slate-800">إضافة منخرط</h3><button type="button" class="text-xl text-slate-500 px-2" onclick="m27CloseMember()">×</button></div>
   <input type="hidden" id="m27-edit-id">
   <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <label><span class="m27-label">الاسم الكامل *</span><input id="member-reg-name" class="m27-field" placeholder="الاسم الكامل"></label>
    <label><span class="m27-label">رقم الانخراط</span><input id="member-reg-number" class="m27-field" placeholder="رقم الانخراط"></label>
    <label><span class="m27-label">رقم الهاتف</span><input id="member-reg-phone" class="m27-field" inputmode="tel" placeholder="رقم الهاتف"></label>
    <label><span class="m27-label">رقم البطاقة الوطنية</span><input id="member-reg-cin" class="m27-field" placeholder="رقم البطاقة الوطنية"></label>
    <label class="sm:col-span-2"><span class="m27-label">الصفة أو الصفات</span><input id="member-reg-roles" class="m27-field" placeholder="مثلاً: رئيس، أمين المال، منخرط"></label>
    <label><span class="m27-label">وضعية المنخرط</span><select id="m27-member-status" class="m27-field"><option value="active">نشط</option><option value="inactive">غير نشط</option></select></label>
    <label><span class="m27-label">واجب الانخراط</span><select id="m27-fee-status" class="m27-field"><option value="unknown">غير محدد</option><option value="paid">مؤدى</option><option value="unpaid">غير مؤدى</option></select></label>
    <label><span class="m27-label">مبلغ الواجب (درهم)</span><input id="m27-fee-amount" type="number" min="0" step="0.01" class="m27-field" placeholder="اختياري"></label>
    <label><span class="m27-label">تاريخ الأداء</span><input id="m27-fee-date" type="date" class="m27-field"></label>
    <label class="sm:col-span-2"><span class="m27-label">ربط بمشترك الماء (اختياري)</span><select id="m27-water-link" class="m27-field"><option value="">بدون ربط</option></select></label>
   </div>
   <p class="text-[10px] text-slate-500 mt-2">معلومات واجب الانخراط هنا للتتبع فقط؛ لا تُسجل تلقائياً كعملية مالية أو وصل.</p>
   <div class="flex gap-2 mt-4"><button type="button" class="m27-action m27-primary flex-1" onclick="m27SaveMember()">حفظ البيانات</button><button type="button" class="m27-action" onclick="m27CloseMember()">إلغاء</button></div>
  </div>
 </div>`;
 window.m27ToggleImport=()=>document.getElementById('m27-import-panel')?.classList.toggle('hidden');
 window.m27OpenMember=function(id){
  const m=(appData.memberRegistry||[]).find(x=>String(x.id)===String(id))||{};
  document.getElementById('m27-edit-id').value=id||'';
  document.getElementById('m27-modal-title').textContent=id?'تعديل بيانات المنخرط':'إضافة منخرط جديد';
  const vals={'member-reg-name':m.fullName||'','member-reg-number':m.membershipNo||'','member-reg-phone':m.phone||'','member-reg-cin':m.nationalId||m.cin||'','member-reg-roles':(m.roles||[]).join('، '),'m27-member-status':m.status||'active','m27-fee-status':m.membershipFeeStatus||'unknown','m27-fee-amount':m.membershipFeeAmount??'','m27-fee-date':m.membershipFeeDate||''};
  Object.entries(vals).forEach(([k,v])=>{const e=document.getElementById(k);if(e)e.value=v;});
  const sel=document.getElementById('m27-water-link');const subs=Array.isArray(appData.subscribers)?appData.subscribers:[];
  sel.innerHTML='<option value="">بدون ربط</option>'+subs.map(s=>`<option value="${m27Esc(s.id)}">${m27Esc(s.name||'مشترك')} · عداد ${m27Esc(s.meterNo||'—')}</option>`).join('');
  sel.value=m.waterSubscriberId||subs.find(s=>s.isMember&&String(s.name||'').trim().toLowerCase()===String(m.fullName||'').trim().toLowerCase())?.id||'';
  document.getElementById('m27-member-modal').classList.add('open');
 };
 window.m27CloseMember=()=>document.getElementById('m27-member-modal')?.classList.remove('open');
 window.m27SaveMember=function(){
  const name=(document.getElementById('member-reg-name').value||'').trim();if(!name){showToast('يرجى إدخال الاسم الكامل',true);return;}
  if(!Array.isArray(appData.memberRegistry))appData.memberRegistry=[];
  const id=document.getElementById('m27-edit-id').value;
  const old=appData.memberRegistry.find(x=>String(x.id)===String(id));
  const number=(document.getElementById('member-reg-number').value||'').trim();
  if(number&&appData.memberRegistry.some(x=>String(x.membershipNo||'').toLowerCase()===number.toLowerCase()&&String(x.id)!==String(id))){showToast('رقم الانخراط مستعمل من قبل',true);return;}
  const subscriberId=document.getElementById('m27-water-link').value||'';
  if(subscriberId&&(appData.memberRegistry||[]).some(x=>String(x.id)!==String(id)&&String(x.waterSubscriberId||'')===String(subscriberId))){showToast('هذا المشترك مرتبط بمنخرط آخر بالفعل',true);return;}
  const record={...(old||{}),id:old?.id||('MEM-'+Date.now().toString(36).toUpperCase()),fullName:name,phone:document.getElementById('member-reg-phone').value.trim(),nationalId:document.getElementById('member-reg-cin').value.trim(),membershipNo:number,roles:document.getElementById('member-reg-roles').value.split(/[،,]/).map(x=>x.trim()).filter(Boolean),status:document.getElementById('m27-member-status').value,membershipFeeStatus:document.getElementById('m27-fee-status').value,membershipFeeAmount:Number(document.getElementById('m27-fee-amount').value)||0,membershipFeeDate:document.getElementById('m27-fee-date').value,waterSubscriberId:subscriberId,updatedAt:new Date().toISOString(),createdAt:old?.createdAt||new Date().toISOString()};
  if(old)Object.assign(old,record);else appData.memberRegistry.push(record);
  (appData.subscribers||[]).forEach(s=>{if(s.id===old?.waterSubscriberId&&s.id!==subscriberId){const stillLinked=(appData.memberRegistry||[]).some(x=>String(x.id)!==String(record.id)&&String(x.waterSubscriberId||'')===String(s.id));if(!stillLinked)s.isMember=false;}if(s.id===subscriberId)s.isMember=true;});
  saveState();renderCentralMembers();if(typeof renderMeetingInvitees==='function')renderMeetingInvitees();if(typeof renderMeetingOverview==='function')renderMeetingOverview();m27CloseMember();showToast(old?'تم تحديث بيانات المنخرط':'تمت إضافة المنخرط بنجاح');
 };
 window.renderCentralMembers=function(){
  const box=document.getElementById('member-reg-list');if(!box)return;
  const members=Array.isArray(appData.memberRegistry)?appData.memberRegistry:[];
  const q=(document.getElementById('member-reg-search')?.value||'').trim().toLowerCase(),f=document.getElementById('m27-status-filter')?.value||'';
  const active=members.filter(m=>!['inactive','archived','deleted','removed'].includes(String(m.status||'active').toLowerCase()));
  const paid=members.filter(m=>m.membershipFeeStatus==='paid');
  const linked=members.filter(m=>m.waterSubscriberId||(appData.subscribers||[]).some(s=>s.isMember&&String(s.name||'').trim().toLowerCase()===String(m.fullName||'').trim().toLowerCase()));
  const put=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  put('m27-total',members.length);put('m27-active',active.length);put('m27-paid',paid.length);put('m27-linked',linked.length);
  const rows=members.filter(m=>{
   const hay=[m.fullName,m.membershipNo,m.phone,m.nationalId,(m.roles||[]).join(' ')].join(' ').toLowerCase();
   return hay.includes(q)&&(!f||(f==='active'? !['inactive','archived','deleted','removed'].includes(String(m.status||'active').toLowerCase()):f==='inactive'?['inactive','archived','deleted','removed'].includes(String(m.status||'').toLowerCase()):m.membershipFeeStatus===f));
  });
  box.innerHTML=rows.length?rows.map(m=>{
   const inactive=['inactive','archived','deleted','removed'].includes(String(m.status||'active').toLowerCase()),sub=(appData.subscribers||[]).find(s=>s.id===m.waterSubscriberId)|| (appData.subscribers||[]).find(s=>s.isMember&&String(s.name||'').trim().toLowerCase()===String(m.fullName||'').trim().toLowerCase());
   const fee=m.membershipFeeStatus==='paid'?'<span class="m27-pill paid">الواجب مؤدى</span>':m.membershipFeeStatus==='unpaid'?'<span class="m27-pill unpaid">الواجب غير مؤدى</span>':'';
   return `<div class="m27-member"><div class="m27-avatar">${m27Esc((m.fullName||'م').trim().slice(0,1))}</div><div class="m27-member-main"><div class="flex flex-wrap items-center gap-1"><b class="text-xs text-slate-800">${m27Esc(m.fullName||'')}</b><span class="m27-pill ${inactive?'inactive':'active'}">${inactive?'غير نشط':'نشط'}</span>${fee}</div><div class="text-[10px] text-slate-500 mt-1">${m27Esc(m.membershipNo||'دون رقم انخراط')} · ${m27Esc((m.roles||[]).join('، ')||'دون صفة')}</div><div class="text-[10px] text-slate-500">${m27Esc(m.phone||'لا هاتف')}${sub?' · مشترك ماء: '+m27Esc(sub.meterNo||sub.name||'مرتبط'):''}</div></div><div class="m27-member-actions"><button type="button" onclick="m27OpenMember('${m27Esc(m.id)}')">تعديل</button><button type="button" onclick="m27ToggleStatus('${m27Esc(m.id)}')">${inactive?'تفعيل':'إيقاف'}</button></div></div>`;
  }).join(''):'<p class="text-xs text-slate-500 text-center border border-dashed rounded-xl p-5">لا توجد نتائج مطابقة. يمكنك إضافة منخرط جديد أو تغيير فلتر البحث.</p>';
 };
 window.m27ToggleStatus=function(id){const m=(appData.memberRegistry||[]).find(x=>String(x.id)===String(id));if(!m)return;m.status=['inactive','archived','deleted','removed'].includes(String(m.status||'').toLowerCase())?'active':'inactive';saveState();renderCentralMembers();if(typeof renderMeetingInvitees==='function')renderMeetingInvitees();if(typeof renderMeetingOverview==='function')renderMeetingOverview();};

 function m27Esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 window.m27Esc=m27Esc;
 function parseCSV(text){
  const rows=[];let row=[],cell='',quoted=false;
  for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'&&quoted&&text[i+1]==='"'){cell+='"';i++;}else if(c==='"'){quoted=!quoted;}else if((c===','||c===';'||c==='\t')&&!quoted){row.push(cell.trim());cell='';}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell.trim());if(row.some(x=>x!==''))rows.push(row);row=[];cell='';}else cell+=c;}
  row.push(cell.trim());if(row.some(x=>x!==''))rows.push(row);return rows;
 }
 function addImported(row){
  const [name,phone='',number='',roles='',cin='']=row;if(!name)return 'skip';
  const list=appData.memberRegistry||(appData.memberRegistry=[]);
  if((number&&list.some(x=>String(x.membershipNo||'').toLowerCase()===number.toLowerCase()))||list.some(x=>String(x.fullName||'').trim().toLowerCase()===name.toLowerCase()&&String(x.phone||'').trim()===phone))return 'duplicate';
  list.push({id:'MEM-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,6),fullName:name,phone,nationalId:cin,membershipNo:number,roles:roles.split(/[،|]/).map(x=>x.trim()).filter(Boolean),createdAt:new Date().toISOString(),status:'active',membershipFeeStatus:'unknown'});return 'added';
 }
 function importRows(rows){
  let added=0,dup=0,skip=0;
  rows.forEach((r,i)=>{if(i===0&&/اسم|name/i.test(r[0]||''))return;const x=addImported(r);if(x==='added')added++;else if(x==='duplicate')dup++;else skip++;});
  if(added){saveState();renderCentralMembers();if(typeof renderMeetingInvitees==='function')renderMeetingInvitees();if(typeof renderMeetingOverview==='function')renderMeetingOverview();}
  const st=document.getElementById('member-reg-import-status');if(st)st.textContent=`النتيجة: ${added} مضاف، ${dup} مكرر، ${skip} متجاوز.`;
  showToast('تم استيراد '+added+' منخرط');
 }
 window.m27ImportCSV=function(input){const file=input?.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>importRows(parseCSV(String(reader.result||'').replace(/^\uFEFF/,'')));reader.readAsText(file,'UTF-8');input.value='';};
 window.m27BulkAdd=function(){const text=document.getElementById('member-reg-bulk')?.value||'';importRows(text.split(/\r?\n/).filter(x=>x.trim()).map(x=>parseCSV(x)[0]||[]));document.getElementById('member-reg-bulk').value='';};
 window.m27ExportMembers=function(){const rows=[['الاسم الكامل','الهاتف','رقم الانخراط','الصفات','رقم البطاقة الوطنية','الوضعية','واجب الانخراط','المبلغ','تاريخ الأداء']];(appData.memberRegistry||[]).forEach(m=>rows.push([m.fullName,m.phone,m.membershipNo,(m.roles||[]).join('، '),m.nationalId,m.status,m.membershipFeeStatus,m.membershipFeeAmount,m.membershipFeeDate]));const csv=rows.map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}));a.download='لائحة-المنخرطين.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
 window.downloadMemberImportTemplate=function(){const csv='الاسم الكامل,الهاتف,رقم الانخراط,الصفات,رقم البطاقة الوطنية\nمحمد أيت علي,0612345678,001,الرئيس,AB123456\nالحسين مازوز,0622334455,002,أمين المال,CD654321';const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}));a.download='نموذج-استيراد-المنخرطين.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
 window.bulkAddCentralMembers=window.m27BulkAdd;
 window.importCentralMembersFile=window.m27ImportCSV;
 document.addEventListener('DOMContentLoaded',()=>{renderCentralMembers();});
 if(document.readyState!=='loading')renderCentralMembers();
})();
