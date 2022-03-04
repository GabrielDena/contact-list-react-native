/*
   Deixa a primeira letra de cada palavra de uma string em maiúsculo
*/
export default function capitalizeFirstLetter(string) {
   return string.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase());
}
