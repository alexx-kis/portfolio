import clsx from 'clsx';
import { ChangeEvent } from 'react';
import s from './todo-item.module.scss';

// ^======================== TodoItem ========================^ //

type TodoItemProps = {
  id: string;
  value: string;
  checked: boolean;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRemoveButtonClick: () => void;
};

function TodoItem(todoItemProps: TodoItemProps): React.JSX.Element {

  const { id, value, checked, onCheckboxChange, onRemoveButtonClick } = todoItemProps;

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => { onCheckboxChange(e); };
  return (
    <div
      className={clsx(
        s['todo-item'],
        { '_checked': checked }
      )}
    >
      <label
        className={s.label}
        style={{
          backgroundImage: checked ? ('url(/img/icons/checkbox-checked.svg)') : '',
        }}
      >
        <input
          className={s.input}
          type='checkbox'
          name='todo-item-checkbox'
          id={id}
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </label>
      <p className={s.text}>{value}</p>
      <button
        className={s.button}
        onClick={onRemoveButtonClick}
      >
        <div className={s['button-cross']}>+</div>
      </button>
    </div>
  );
}
export default TodoItem;