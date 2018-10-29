const jsContainer = document.getElementById('js');
const reactContainer = document.getElementById('react');

const render = () => {
  jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
    <p>${new Date()}</p>
  </div>
`;

  ReactDOM.render(
    React.createElement(
      'div',
      { className: 'demo' },
      'Hello React',
      React.createElement('input'),
      React.createElement('p', null, new Date().toString())
    ),
    reactContainer
  );
};

setInterval(render, 1000);
//We now have two nodes, one being controlled with the DOM Web API directly, and another being controlled with the React API (which in turn uses the DOM Web API). The only major difference between the ways we are building these two nodes in the browser is that in the JS version we used a string to represent the content, while in the React version we used pure JavaScript calls and represented the content with an object instead of a string. No matter how complicated the HTML User Interface is going to get, when using React, every HTML element will be represented with a JavaScript object using a React.createElement call.
