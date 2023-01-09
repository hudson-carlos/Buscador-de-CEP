export function checkCEP(cep) {
   if (!cep || cep.length < 3) return false
   return true;
}