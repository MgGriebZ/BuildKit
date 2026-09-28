// Storage is invoked only for semantic actions. This module owns no gameplay.
export function read(key) {
    try { return { available: true, json: window.localStorage.getItem(key) }; }
    catch { return { available: false, json: null }; }
}

export function write(key, json) {
    try { window.localStorage.setItem(key, json); return true; }
    catch { return false; }
}
