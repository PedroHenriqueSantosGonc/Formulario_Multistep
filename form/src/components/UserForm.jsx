
const UserForm = ({ data, updateFiledHandler }) => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="name">Nome: </label>
            <input type="text" 
            name="name" 
            id="name" 
            placeholder="Digite seu nome" 
            required 
            value={data.name || ''}
            onChange={(e) => updateFiledHandler('name', e.target.value)}/>
        </div>

        <div className="form-control">
            <label htmlFor="name">E-mail: </label>
            <input type="email" 
            name="email" 
            id="email" 
            placeholder="Digite seu email" 
            required 
            value={data.email || ''}
            onChange={(e) => updateFiledHandler('email', e.target.value)}/>
        </div>
    </div>
  )
}

export default UserForm