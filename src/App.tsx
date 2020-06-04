import React from "react";
import CodeBox from "react-code-box/dist/index";

const App = () => {
  let code = `
  class TodoList extends Component {
      state = { todos: [], text: '' };
      updateText = e => {
          this.setState({ text: e.target.value });
      };
      addItem = () => {
          let { todos, text } = this.state;
          todos = todos.concat({ text });
          this.setState({ todos, text: '' });
      };
      render({ }, { todos, text }) {
          return (
              <div>
                  <form onSubmit={this.addItem} action="javascript:">
                      <input value={text} onInput={this.updateText} />
                      <input type="submit" value="Add" />
                  </form>
                  <ul>
                      { todos.map( todo => (
                          <li>{todo.text}</li>
                      )) }
                  </ul>
              </div>
          );
      }
  }
  
  render(<TodoList />);
  `;

  return (
      <CodeBox
        title="~code-box-dark.js"
        variant="dark"
        code={code}
        id="code-box-dark"
      />
  );
};

export default App;
