<!-- Allir -->
{{#each employees}}
    <p><b>{{name}}</b></p>
    <p>{{title}}</p>
    <p>{{email}}</p>
    <p>{{phone}}</p>
{{/each}}

<hr>

<!-- Full TIme -->
{{#each employees}}
  {{#if fulltime}}
  <b>Full Time</b>
  <p>{{name}}</p>
  {{else}}
  <b>Part Time</b>
  <p>{{name}}</p>
  {{/if}}
{{/each}}
