function submitLead(){
  const phone = document.getElementById('leadPhone').value.trim();
  const status = document.getElementById('leadStatus');
  if(!phone){ status.textContent = 'Вкажіть номер телефону'; return; }
  const payload = { type:'lead', phone, ts:new Date().toISOString() };
  localStorage.setItem('miya-lead', JSON.stringify(payload));
  status.textContent = 'Дякуємо! Ми зв’яжемось з вами.';
}
function submitContact(){
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const status = document.getElementById('contactStatus');
  if(!phone){ status.textContent = 'Вкажіть номер телефону'; return; }
  const payload = { type:'contact', name, phone, msg, ts:new Date().toISOString() };
  localStorage.setItem('miya-contact', JSON.stringify(payload));
  status.textContent = 'Дякуємо! Заявку надіслано.';
}