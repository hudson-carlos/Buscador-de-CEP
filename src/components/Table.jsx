export default function Table({arr}) {
  return (
		<table>
        <thead>
          <tr>
            <th>Logradouro/Nome</th>
            <th>Bairro/Distrito</th>
            <th>Localidade/UF</th>
            <th>CEP</th>
          </tr>
        </thead>
        <tbody>
          {arr.map(({cep, uf, cidade, bairro, logradouro}) => (
            <tr key={cep}>
              <td>{logradouro}</td>
              <td>{bairro}</td>
              <td>{cidade}/{uf}</td>
              <td>
								{cep.split("").splice(0, 5).join("")}-{cep.split("").splice(-3).join("")}
							</td>
            </tr>
          ))}
        </tbody>
      </table>
	);
}