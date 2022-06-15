import React, { Component, Fragment } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Message } from './Message';
import { InputAuthor } from './InputAuthor';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      name: 'Нажми',
      value: '',
      messagesList: [],
      message: {
        author: '',
        text: '',
      },
      messages: [],
      visible: true,
    };
  }

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] });
    this.setState({ value: '' });
  };

  handleClickMessageList = () => {
    this.setState({
      messagesList: [...this.state.messagesList, this.state.message],
    });
    console.log(this.state.message.author, this.state.message.text);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleChangeAuthor = (event) => {
    this.setState({ message: event.target.value });
  };

  componentDidMount() {
    console.log('form did mount');
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            change={this.handleChange}
            value={this.state.value}
            ref={this.myRef}
          />
          <InputAuthor
            change={this.handleChangeAuthor}
            value={this.state.value}
            ref={this.myRef}
          />
        </div>
        <div>
          <button onClick={() => this.setState({ messages: [] })}>
            Очистить чат
          </button>

          <button
            onClick={() => this.setState({ visible: !this.state.visible })}
          >
            {this.state.visible ? 'Скрыть' : 'Отобразить'}
          </button>

          <Button
            name={this.state.name}
            click={this.handleClick}
            type="submit"
          />
        </div>

        {this.state.visible && <Message post={this.state.messages} />}
      </Fragment>
    );
  }
}
