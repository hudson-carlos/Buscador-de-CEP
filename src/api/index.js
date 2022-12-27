const myInint = {
  method: "GET",
  headers: {"Accept": "application/json"}
};

export default async function apiCep(cep) {
  const result = fetch(`http://cep.la/${cep}`, myInint)
    .then(res => res.json())
    .then(res => res)
    .catch(error => alert(error.mesange));
  
  return result;
}
