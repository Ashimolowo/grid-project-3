// Disable right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
  
  // Disable specific key combinations
  document.addEventListener('keydown', function (event) {
    // Block F12 (inspect), Ctrl+Shift+I (inspect), Ctrl+Shift+J (console), Ctrl+Shift+C (inspect element)
    if (
      event.key === 'F12' || 
      (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J')) || 
      (event.ctrlKey && event.key === 'U') // Ctrl+U (view source)
    ) {
      event.preventDefault();
    }
  
    // Block Ctrl+C (copy), Ctrl+V (paste), Ctrl+X (cut), Ctrl+S (save), Ctrl+A (select all)
    if (
      (event.ctrlKey && (event.key === 'C' || event.key === 'V' || event.key === 'X' || event.key === 'S' || event.key === 'A'))
    ) {
      event.preventDefault();
    }
  
    // Block screenshot key combinations: PrtScn, Ctrl+PrtScn, Alt+PrtScn, Cmd+Shift+3 (Mac), Cmd+Shift+4 (Mac)
    if (
      event.key === 'PrintScreen' || // Windows PrtScn
      (event.ctrlKey && event.key === 'PrintScreen') || // Windows Ctrl + PrtScn
      (event.altKey && event.key === 'PrintScreen') || // Windows Alt + PrtScn
      (event.metaKey && event.shiftKey && (event.key === '3' || event.key === '4')) // Mac Cmd + Shift + 3 or 4
    ) {
      event.preventDefault();
      alert('Screenshots are disabled!');
    }
  });
  
  // Detect console opening in Chrome/Firefox
  (function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
      get: function() {
        // This code runs when the console is opened
        alert('Console is open! Action blocked.');
        throw new Error('Console detected!');
      }
    });
    console.log(element);
  })();
  


 