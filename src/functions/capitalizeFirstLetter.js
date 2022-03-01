/*
   Deixa a primeira letra de cada palavra de uma string em maiúsculo
*/
export default function capitalizeFirstLetter(string) {
   return string.replace(/(\b[a-z](?!\s))/g, function (string) { return string.charAt(0).toUpperCase() })
}

