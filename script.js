function scrollToConsult(){
  document.getElementById('consult').scrollIntoView({behavior:'smooth'});
}
function submitLead(){
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const topic = document.getElementById('topic').value.trim();
  const el = document.getElementById('lead-status');
  if(!phone){
    el.textContent = "Будь ласка, вкажіть телефон.";
    return;
  }
  const payload = {name, phone, topic, ts: new Date().toISOString()};
  localStorage.setItem('datali-trans-lead', JSON.stringify(payload));
  el.textContent = "Дякуємо! Ми зв’яжемося з вами.";
}