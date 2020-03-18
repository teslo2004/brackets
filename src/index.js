module.exports = function check(str, bracketsConfig) {
while (str.length > 0) {
    var result = str.length;
    str = str.replace(/\(\)/g, "");
    str = str.replace(/\{\}/g, "");
    str = str.replace(/\|\|/g, "");
    str = str.replace(/\[\]/g, "");
    str = str.replace(/12/g, "");
    str = str.replace(/34/g, "");
    str = str.replace(/56/g, "");
    str = str.replace(/77/g, "");
    str = str.replace(/88/g, "");
    if (str.length === result) 
      {
        return false;
      }
    }
    return true;
}
