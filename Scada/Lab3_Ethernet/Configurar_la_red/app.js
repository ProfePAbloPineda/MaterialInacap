document.querySelectorAll('[data-save]').forEach(el=>{const key='red-scada-check-'+el.dataset.save;try{el.checked=localStorage.getItem(key)==='1'}catch{}el.addEventListener('change',()=>{try{localStorage.setItem(key,el.checked?'1':'0')}catch{const s=document.getElementById('saveState');if(s)s.textContent='Este navegador no permite conservar las casillas.'}})});
(function(){
 const host=document.getElementById('generalVideoPlayer');if(!host)return;
 const value=window.SCADA_VIDEO_GENERAL;if(typeof value!=='string'||!value.trim())return;
 let id='';try{const u=new URL(value.trim());const h=u.hostname.toLowerCase().replace(/^www\./,'');
 if(!['https:','http:'].includes(u.protocol))return;
 if(h==='youtu.be')id=u.pathname.split('/')[1]||'';
 else if(['youtube.com','m.youtube.com','youtube-nocookie.com'].includes(h)){const parts=u.pathname.split('/').filter(Boolean);id=u.searchParams.get('v')||(['embed','shorts','live'].includes(parts[0])?parts[1]:'');}
 }catch{return}if(!/^[A-Za-z0-9_-]{11}$/.test(id||''))return;
 const frame=document.createElement('iframe');frame.className='video';frame.title='Explicación completa de la red SCADA';frame.src='https://www.youtube-nocookie.com/embed/'+id;frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allow='encrypted-media; picture-in-picture';frame.allowFullscreen=true;host.replaceChildren(frame);
 const line=document.getElementById('generalVideoExternal');const a=document.createElement('a');a.href='https://www.youtube.com/watch?v='+id;a.textContent='Abrir video en YouTube ↗';a.className='textlink';a.target='_blank';a.rel='noopener noreferrer';line.append(a);line.hidden=false;
})();
