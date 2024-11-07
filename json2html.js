export default function json2html(data) {
  // Get all unique keys from the objects
  const keys = [...new Set(data.flatMap(Object.keys))];

  // Create the table header
  const header = `
    <thead>
      <tr>${keys.map(key => `<th>${key}</th>`).join('')}</tr>
    </thead>
  `;

  // Create the table body
  const body = `
    <tbody>
      ${data.map(obj => `
        <tr>${keys.map(key => `<td>${obj[key] || ''}</td>`).join('')}</tr>
      `).join('')}
    </tbody>
  `;

  // Combine everything into the final table
  return `
    <table data-user="bhavithachinthalagari@gmail.com">
      ${header}
      ${body}
    </table>
  `;
}
