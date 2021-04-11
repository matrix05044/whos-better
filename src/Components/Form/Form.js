import React from 'react';
import { useState } from 'react';
import styles from './Form.module.scss';

const Form = ({ addNew }) => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    addNew({ name, img });

    setName('');
    setImg('');
  };

  return (
    <div className={styles.formWrapper}>
      <form
        className={styles.form}
        onSubmit={(e) => onSubmit(e)}
        autoComplete='off'
      >
        <label className={styles.inputLabel} htmlFor='name'>
          {'name'}
        </label>
        <input
          className={styles.input}
          placeholder={'name'}
          id='name'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label className={styles.inputLabel} htmlFor='zdjecie'>
          {'zdjecie'}
        </label>
        <input
          className={styles.input}
          placeholder={'zdjecie'}
          id='zdjecie'
          value={img}
          required
          onChange={(e) => setImg(e.target.value)}
        />

        <button className={styles.formBtn}>dodaj osobę</button>
      </form>
    </div>
  );
};

export default Form;
