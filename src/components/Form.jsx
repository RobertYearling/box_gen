import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {

    const [formColor, setFormColor] = useState({
        color: "",
    })

    const [colorList, setColorList] = useState([])

    const changeHandler = (e) => {
        setFormColor({
            ...formColor,
            [e.target.name]: e.target.value
        })
    }

    const subHandler = (e) => {
        e.preventDefault()
        setColorList([...colorList, formColor]);
        setFormColor({
            color: "",
        })
    }

    return (
        <>
            <div>
                <form onSubmit={subHandler}>
                    <h3>Color: <input type="text" name="color" id="" onChange={changeHandler} value={formColor.color} /></h3>
                    <p><input type="submit" value="Add" /></p>
                </form>
            </div>
            <div>
            {
                colorList.map((box) => {
                    return <div className={styles.newBox} style={{backgroundColor: box.color}}></div>
                })
            }
            </div>
        </>
    );
};

export default Form;