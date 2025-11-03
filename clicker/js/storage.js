function saveCookies(count){
    localStorage.setItem('cookies', count);
}

function loadCookies(){
    return parseInt(localStorage.getItem('cookies')) || 0;
}

function resetCookies(){
    localStorage.removeItem('cookies');
}