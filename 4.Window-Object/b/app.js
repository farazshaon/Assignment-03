
function openNewWindow() {
    const url = 'https://www.example.com';
    const width = 800;
    const height = 600;
   
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    const options = `width=${width},height=${height},left=${left},top=${top}`;
   
    window.open(url, '_blank', options);
    }
   
    openNewWindow();
   