const jsContainer = document.getElementById('js');
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
  </div>
`;

const reactContainer = document.getElementById('react');

ReactDOM.render(
  React.createElement('div', { className: 'demo' }, 'hello react'),
  reactContainer
);

//The only major difference between the ways we are building these two nodes in the browser is that in the JS version we used a string to represent the content, while in the React version we used pure JavaScript calls and represented the content with an object instead of a string. No matter how complicated the HTML User Interface is going to get, when using React, every HTML element will be represented with a JavaScript object using a React.createElement call.
