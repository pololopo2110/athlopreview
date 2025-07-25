// Athlo Assistant Widget
(function() {
  // Crear botón flotante
  const btn = document.createElement('button');
  btn.id = 'athlo-assistant-btn';
  btn.innerHTML = '🤖 Athlo Assistant';
  btn.style.position = 'fixed';
  btn.style.bottom = '32px';
  btn.style.right = '32px';
  btn.style.zIndex = '9999';
  btn.style.background = '#18181b';
  btn.style.color = '#fff';
  btn.style.fontWeight = 'bold';
  btn.style.fontFamily = "'Montserrat', Arial, sans-serif";
  btn.style.fontSize = '1.1rem';
  btn.style.padding = '16px 22px';
  btn.style.borderRadius = '32px';
  btn.style.border = '2px solid #fff';
  btn.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
  btn.style.cursor = 'pointer';
  btn.style.transition = 'background 0.2s, color 0.2s';
  btn.onmouseenter = () => { btn.style.background = '#fff'; btn.style.color = '#18181b'; };
  btn.onmouseleave = () => { btn.style.background = '#18181b'; btn.style.color = '#fff'; };

  // Crear ventana de chat (no overlay)
  const modal = document.createElement('div');
  modal.id = 'athlo-assistant-modal';
  modal.style.position = 'fixed';
  modal.style.bottom = '90px';
  modal.style.right = '32px';
  modal.style.width = '410px';
  modal.style.maxWidth = '98vw';
  modal.style.height = '72vh';
  modal.style.maxHeight = '90vh';
  modal.style.background = '#fff';
  modal.style.zIndex = '10000';
  modal.style.display = 'none';
  modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.28)';
  modal.style.borderRadius = '28px';
  modal.style.overflow = 'hidden';
  modal.style.border = '1.5px solid #e5e7eb';
  modal.style.padding = '0';
  modal.style.transition = 'opacity 0.18s, transform 0.18s';

  // Botón de cerrar
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '10px';
  closeBtn.style.right = '18px';
  closeBtn.style.fontSize = '2.7rem';
  closeBtn.style.background = 'rgba(255,255,255,0.95)';
  closeBtn.style.color = '#18181b';
  closeBtn.style.border = '2px solid #4faaff';
  closeBtn.style.borderRadius = '50%';
  closeBtn.style.width = '48px';
  closeBtn.style.height = '48px';
  closeBtn.style.display = 'flex';
  closeBtn.style.alignItems = 'center';
  closeBtn.style.justifyContent = 'center';
  closeBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.zIndex = '10001';
  closeBtn.style.transition = 'background 0.18s, color 0.18s, border 0.18s';
  closeBtn.onmouseenter = () => { closeBtn.style.background = '#4faaff'; closeBtn.style.color = '#fff'; closeBtn.style.border = '2px solid #18181b'; };
  closeBtn.onmouseleave = () => { closeBtn.style.background = 'rgba(255,255,255,0.95)'; closeBtn.style.color = '#18181b'; closeBtn.style.border = '2px solid #4faaff'; };
  closeBtn.onclick = function() { modal.style.display = 'none'; };

  // Iframe para el chat
  const iframe = document.createElement('iframe');
  iframe.src = 'bot%20copy%202.html';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '0 0 28px 28px';
  iframe.allow = 'clipboard-write; microphone;';

  modal.appendChild(closeBtn);
  modal.appendChild(iframe);

  // Mostrar modal al hacer click en el botón
  btn.onclick = function() {
    modal.style.display = 'block';
    modal.style.opacity = '1';
    modal.style.transform = 'translateY(0)';
  };

  // Animación de cierre
  closeBtn.onclick = function() {
    modal.style.opacity = '0';
    modal.style.transform = 'translateY(20px)';
    setTimeout(() => { modal.style.display = 'none'; }, 180);
  };

  document.body.appendChild(btn);
  document.body.appendChild(modal);
})(); 