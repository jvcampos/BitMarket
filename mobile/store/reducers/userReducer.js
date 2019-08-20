const userReducer = (state = {
  name: '',
  email: '',
  password: '',
  cpf: '',
  address: '',
  role: 2,
  mobile: 1,
  redirect: false
}, action) => {
  switch (action.type) {
    case 'REGISTER':
      state = {
        ...state,
        redirect: action.payload.redirect,
        message: action.payload.message
      }
    case 'GET_USER':
      state = {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        cpf: action.payload.cpf,
        address: action.payload.address,
        role: action.payload.role,
        mobile: action.payload.mobile
      }
    case 'LOGIN':
      state = {
        ...state,
        login: action.payload.login,
        message: action.payload.message
      }
    default:
      return state
  }
}

export default userReducer