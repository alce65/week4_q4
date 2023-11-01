import { SyntheticEvent, useState } from 'react';
import './user.form.scss';
import { User } from '../../models/user';

export function UserForm() {
  const initialState: User = {
    userName: '',
    userSurname: '',
    comments: '',
    passwd: '',
    email: '',
    country: '',
    isOk: false,
    turn: '',
    course: '',
  };

  const [userState, setUserState] = useState(initialState);
  const isDisable =
    initialState.userName === userState.userName ||
    initialState.userSurname === userState.userSurname ||
    initialState.email === userState.email ||
    initialState.isOk === userState.isOk;

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // const formElement = event.target as HTMLFormElement;

    // for (const key in user) {
    //   const key2 = key as keyof typeof user;
    //   const value = (formElement.elements.namedItem(key) as HTMLFormElement)
    //     .value;
    //   user[key2] = value;
    // }

    console.log(userState);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setUserState({ ...userState, [name]: value });
  };

  return (
    <form className="user-form" role="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>User data</legend>
        <div className="form-control">
          <label htmlFor="user-name">User Name</label>
          <input
            type="text"
            name="userName"
            id="user-name"
            onChange={handleChange}
            placeholder="Dime tu nombre"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="user-surname">SurName</label>
          <input
            type="text"
            name="userSurname"
            id="user-surname"
            onChange={handleChange}
            required
          />
        </div>
      </fieldset>
      <div className="form-control">
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comments"
          cols={30}
          rows={10}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-control">
        <fieldset onChange={handleChange}>
          <legend>Selecciona un turno</legend>
          <label>
            <input type="radio" name="turn" value="M" required />
            Mañana
          </label>
          <input type="radio" name="turn" id="turn-2" value="T" />
          <label htmlFor="turn-2">Tarde</label>
          <input type="radio" name="turn" id="turn-3" value="N" />
          <label htmlFor="turn-3">Noche</label>
        </fieldset>
      </div>
      <div className="form-control">
        <label htmlFor="course">Selecciona un curso</label>
        <select name="course" id="course" onChange={handleChange} required>
          <option value=""></option>
          <option value="ng-01">Angular</option>
          <option value="rc-23">React</option>
          <option value="nd-02">Node</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="passwd">Passwd</label>
        <input
          type="password"
          name="passwd"
          id="passwd"
          required
          onChange={handleChange}
          minLength={4}
          maxLength={8}
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        />
      </div>

      <datalist id="countries">
        <option>España</option>
        <option>Portugal</option>
        <option>Francia</option>
      </datalist>

      <div className="form-control">
        <label htmlFor="country">País</label>
        <input
          type="text"
          name="country"
          id="country"
          onChange={handleChange}
          list="countries"
        />
      </div>

      <div className="form-control">
        <input
          type="checkbox"
          name="isOk"
          id="is-ok"
          onChange={handleChange}
          required
        />
        <label htmlFor="is-ok">Estas de acuerdo con .... </label>
      </div>

      <button type="submit" disabled={isDisable}>
        Enviar
      </button>
    </form>
  );
}
