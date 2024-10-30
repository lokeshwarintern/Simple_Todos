import './index.css'

const TodoItem = props => {
  const {todoItem, deleteItem} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-ele">
      <p className="para-ele">{title}</p>
      <button type="button" className="btn-ele" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
