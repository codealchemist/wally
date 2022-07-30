import { useContext } from 'react'
import { store } from 'store/index'

const useStore = () => useContext(store)

export default useStore
