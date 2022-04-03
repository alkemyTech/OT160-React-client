import {get} from '../Services/privateApiService'

const GetOrganization =async()=>{
        let value = await get('https://ongapi.alkemy.org/api/organization')
        return value
  }

  export default GetOrganization;