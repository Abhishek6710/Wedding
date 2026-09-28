const target=new Date("2026-12-09T11:00:00+05:30").getTime();const ids=["d","h","m"];function tick(){let x=Math.max(0,target-Date.now());let v=[Math.floor(x/86400000),Math.floor(x/3600000)%24,Math.floor(x/60000)%60];v.forEach((n,i)=>document.getElementById(ids[i]).textContent=String(n).padStart(2,"0"))}tick();setInterval(tick,1000);
document.addEventListener('DOMContentLoaded',()=>{const hero=document.querySelector('.hero');if(!hero)return;const down=document.querySelector('.down');hero.addEventListener('mousemove',e=>{const x=(e.clientX/innerWidth-.5)*8,y=(e.clientY/innerHeight-.5)*6;hero.style.setProperty('--mx',x+'px');hero.style.setProperty('--my',y+'px')});if(down)down.addEventListener('click',()=>hero.classList.add('leaving'));});

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".event").forEach(el=>el.classList.add("reveal"));
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}});
  },{threshold:.16});
  document.querySelectorAll(".event.reveal").forEach(el=>observer.observe(el));
});
