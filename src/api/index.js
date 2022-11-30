const myInint = {
  method: "GET",
  headers: {"Accept": "application/json"}
};

export default async function api() {
  const result = fetch("http://cep.la/", myInint)
    .then(res => res.json())
    .then(res => res)
    .catch(error => console.log(error))
  
  return result;
}