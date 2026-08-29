function renderSpecs(specs) {
  const html = specs
    .map(function (spec) {
      return `
        <div class="spec-card">
            <p class="spec-card-label">${spec.label}</p>
            <p class="spec-card-value">${spec.value}</p>
          </div>   
          `;
    })
    .join("");
  return html;
}
