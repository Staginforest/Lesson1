import React, {
  useState,
  Fragment,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { InputAuthor } from './InputAuthor';
import { Chat } from './Chat';

export const Form = () => {
  const [name, setName] = useState('Отправить сообщение');

  const [defaultMessage] = useState('Ты получил свой ответ');
  const [defaultAuthor] = useState('Я не понял, объясни по-другому');

  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [time, setTime] = useState('');

  const [visible, setVisible] = useState(true);

  const createCurrentTime = () => {
    let time = new Date();
    return `${time.getHours()} : ${
      (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
    }`;
  };

  const handleClick = () => {
    setMessagesList([
      ...messagesList,
      { message, author, time, robotMessage: false },
    ]);
    setMessage('');
    setAuthor('');
    setTime('');
  };

  const changeM = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  const changeAu = useCallback((event) => {
    setAuthor(event.target.value);
    setTime(createCurrentTime());
  }, []);

  useEffect(() => {
    if (
      messagesList.length &&
      !messagesList[messagesList.length - 1].robotMessage
    ) {
      alert('Погодь сек, сейчас отвечу');
      const timeout = setTimeout(() => {
        setMessagesList([
          ...messagesList,
          {
            message: defaultMessage,
            author: defaultAuthor,
            time: `${createCurrentTime()}`,
            robotMessage: true,
          },
        ]);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messagesList]);

  return (
    <Fragment>
      <div>
        <Input change={changeM} message={message} />

        <InputAuthor change={changeAu} author={author} />
      </div>

      <div>
        <Button
          name={name}
          click={handleClick}
          type="submit"
          disabled={message && author ? false : true}
        />

        <button onClick={() => setVisible(!visible)}>
          {visible ? 'Скрыть' : 'Отобразить'}
        </button>

        <button onClick={() => setMessagesList([])}>Очистить чат</button>
      </div>

      {visible && <Chat post={messagesList} />}
    </Fragment>
  );
};
