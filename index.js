/**
 * 
 * @param {object} required The object containing the required typeof()s.
 * @param {object} check The object containing the object being checked.
 */

module.exports = (check = {}, required = {}) => {
    if (typeof check !== "object" || typeof required !== "object") {
        if (typeof check !== typeof required) return false;
        return true;
    }

    if (check === null && required === null) return true;
    if (check === null || required === null) return false;

    return !checkExistLoop(required, check);
}

function checkExistLoop(checkExist, json, value2 = checkExist) {
    if (json === null) return true;
    
    if (Array.isArray(checkExist)) {
        if (value2.length !== json.length) return true;

        let i = 0;
        for (const val of value2) {
            if (typeof val === "object") {
                const checked = checkExistObjectLoop(checkExist, json, i, val);
                if (checked) return checked;
            } else {
                if (typeof json[i] !== val) return true;
            }
            ++i;
        }
    } else {
        const checkExistArray = Object.entries(checkExist);
        if (checkExistArray.length !== Object.entries(json).length) return true;
    
        for (const [ key, value ] of checkExistArray) {
            if (typeof value === "object") {
                const checked = checkExistObjectLoop(checkExist, json, key, value);
                if (checked) return checked;
            } else {
                if (typeof json[key] !== value) return true;
            }
        }
    }
}
function checkExistObjectLoop(checkExist, json, key, value) {
    if (typeof json[key] !== "object" || json[key] === null) return true;
            
    if (Array.isArray(value)) {
        if (!Array.isArray(json[key])) return true;

        const checked = checkExistLoop(checkExist[key], json[key], value);
        if (checked) return checked;
    } else {
        if (Array.isArray(json[key])) return true;

        const checked = checkExistLoop(checkExist[key], json[key]);
        if (checked) return checked;
    }
}