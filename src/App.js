import { Form } from "./components/classes/Form";
import { Form as FormFunc } from './components/func/Form';
import { useState } from "react";


export const App = () => {
    const [toggle, setToggle] = useState(true)

    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6])
    return (
        <>
            <Form name="geekbrains" />
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>

            {toggle && <FormFunc name='javascript' />}
            <ul>
                {arr.map(item => <li>{item}</li>)}
            </ul>
        </>
    );
};