function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(16);
}

function saveCookies(count){
    const salt = "SecretSalt";
    const data = count.toString();
    const hash = simpleHash(data + salt);
    const saveString = btoa(`${data}|${hash}`);
    localStorage.setItem('cookies', saveString);
}

function loadCookies(){
    const salt = "SecretSalt";
    const saved = localStorage.getItem('cookies');
    if (!saved) {
        return 0;
    }

    try {
        const decoded = atob(saved);
        const [data, hash] = decoded.split('|');
        const expectedHash = simpleHash(data + salt);

        if (hash === expectedHash) {
            return parseInt(data) || 0;
        } else {
            console.warn("Data integrity check failed. Resetting cookies.");
            localStorage.removeItem('cookies');
            return 0;
        }
    } catch (e) {
        console.warn("Invalid save data, resetting");
        resetCookies;
        return 0
    }
}

function resetCookies(){
    localStorage.removeItem('cookies');
}
