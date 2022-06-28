import { useQuery } from 'react-query'
import { useAppContext} from '../components/AppContext' 
import api from '../api'

export function useBeveragesGet(options) {
    const {isInitialized} = useAppContext ()

    return useQuery(
    ['beverages'],
    async () => {
        const result = await api.get(`/beverages/${options.id}`)
        return result.data
    },
    {
        ...options,
        enabled: isInitialized,
    },
    )
}