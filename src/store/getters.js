const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  notebooks: state => state.notebook.notebooks,
  notes: state => state.note.notes,
  notebook: state => state.notebook.notebook
}
export default getters
