const toast=(text)=>{let el=document.querySelector('.toast');if(!el){el=document.createElement('div');el.className='toast';document.body.appendChild(el)}el.textContent=text;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),2400)};
document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>toast(b.dataset.toast)));
document.querySelectorAll('[data-modal]').forEach(b=>b.addEventListener('click',()=>document.querySelector(b.dataset.modal).classList.add('open')));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.querySelector(b.dataset.close).classList.remove('open')));
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));
const q=document.querySelector('[data-search]');if(q){const rows=[...document.querySelectorAll('[data-row]')];q.addEventListener('input',()=>{const value=q.value.trim().toLowerCase();rows.forEach(r=>r.style.display=r.textContent.toLowerCase().includes(value)?'grid':'none')})}
const select=document.querySelector('[data-filter]');if(select){const rows=[...document.querySelectorAll('[data-row]')];select.addEventListener('change',()=>rows.forEach(r=>r.style.display=select.value==='all'||r.dataset.status===select.value?'grid':'none'))}
const complete=document.querySelector('[data-complete]');if(complete)complete.addEventListener('click',()=>{complete.textContent='تم حفظ الإثبات ✓';complete.style.background='var(--teal)';complete.style.color='#09202b';toast('تم حفظ إثبات الإنجاز محليًا وسيتم إرساله عند عودة الاتصال.')});
const mobileMenu=document.querySelector('.mobile-menu');
const sidebar=document.querySelector('.sidebar');
if(mobileMenu&&sidebar){mobileMenu.addEventListener('click',()=>sidebar.classList.toggle('open'));sidebar.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>sidebar.classList.remove('open')))}
