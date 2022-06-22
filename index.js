exports.encode=function(e,r){
    if(e&&r){
        var t=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            n={};
        if(Number(e)&&e<=26&&e>=0){
            for(let r=0;r<26;r++)n[""+t[r]]=r+e<26?t[r+e]:t[r+e-26];
            for(let r=26;r<52;r++)n[""+t[r]]=r+e<52?t[r+e]:t[r+e-26];
            var o="";
            return r.split("").slice(0).forEach((e=>{
                n[""+e]?o+=n[""+e]:o+=e
            })),o
        }
        return "the key must be between 0 and 26."
    }
    return "An error has occurred."
};