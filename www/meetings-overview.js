
function renderMeetingOverview(){
 const meetings=Array.isArray(appData.meetings)?appData.meetings:[];
 const members=Array.isArray(appData.memberRegistry)?appData.memberRegistry:[];
 const today=new Date();today.setHours(0,0,0,0);
 const todayKey=[today.getFullYear(),String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
 const upcoming=meetings.filter(m=>m.date&&m.date>=todayKey&&!m.approval?.archived);
 const activeMembers=members.filter(m=>!['inactive','archived','deleted','removed'].includes(String(m.status||'active').toLowerCase()));
 const withMinutes=meetings.filter(m=>String(m.minutes||'').trim()||(m.decisions||[]).length>0);
 const put=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=String(value);};
 put('meeting-stat-total',meetings.length);
 put('meeting-stat-upcoming',upcoming.length);
 put('meeting-stat-members',activeMembers.length);
 put('meeting-stat-minutes',withMinutes.length);
 const latest=meetings.slice().sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')))[0];
 if(latest){
   const date=latest.date?new Date(latest.date+'T00:00:00').toLocaleDateString('ar-MA',{year:'numeric',month:'short',day:'numeric'}):'';
   put('meeting-stat-last','آخر اجتماع: '+(latest.title||'اجتماع')+(date?' · '+date:''));
 }else put('meeting-stat-last','لا يوجد اجتماع مسجل بعد');
}
