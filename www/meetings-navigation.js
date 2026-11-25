
function meetingOpenSection(id,button){
 const sec=document.getElementById('sec-meetings');if(!sec)return;
 if(typeof renderMeetingOverview==='function')renderMeetingOverview();
 ['meetings-registry-pane','member-registry-card','meeting-minutes-card','meeting-create-card'].forEach(pid=>{const pane=document.getElementById(pid);if(pane){pane.classList.add('hidden');pane.classList.add('meeting-panel-hidden');}});
 const target=document.getElementById(id);if(target){target.classList.remove('hidden');target.classList.remove('meeting-panel-hidden');}
 sec.querySelectorAll('#meeting-main-hub .meeting-square-tile').forEach(el=>el.classList.remove('active'));
 if(button)button.classList.add('active');
 const hint=document.getElementById('meeting-pane-hint');if(hint)hint.textContent=({
 'meetings-registry-pane':'الاجتماعات المنشأة سابقاً؛ افتح الاجتماع المطلوب لإدارة الحضور والمناقشات والمحضر.',
 'member-registry-card':'السجل المركزي للمنخرطين.',
 'meeting-minutes-card':'المحاضر المحفوظة؛ التحرير والاعتماد من داخل الاجتماع.',
 'meeting-create-card':'إنشاء اجتماع جديد واختيار المدعوين وطباعة الاستدعاءات.'})[id]||'';
 if(id==='meeting-minutes-card')renderMeetingMinutesRegistry();
 if(id==='member-registry-card')renderCentralMembers();
}
function meetingGoTo(id){meetingOpenSection(id,document.querySelector('#meeting-main-hub .meeting-square-tile[onclick*="'+id+'"]'));}
