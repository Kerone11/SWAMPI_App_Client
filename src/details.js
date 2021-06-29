import {gql, useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";

const Person_ = gql
    `
    query getPerson($name: String){
	specificUser(name: $name)
  {
    count
    next 
    results {
      name
      height
      mass
      gender
      homeworld{
        name
        }
    }
  }
}
    `

function Details() {
    const {localname} = useParams()
    const {loading, error, data} = useQuery(Person_, {variables: {name: localname}})
    if (loading) return  <p> loading </p>
    if (error) return  <p> error </p>
    console.log(data)
    return <table class = "TableClass">
        {

            data.specificUser.results.map((d)=>(
            <tr key = {d.name}>
                <th> Name: </th>
            <tr> {d.name} </tr>
                <th> Gender: </th>
            <tr> {d.gender} </tr>
                <th> Height: </th>
            <tr> {d.height} </tr>
                <th> Mass: </th>
            <tr> {d.mass} </tr>
                <th> Homeworld: </th>
            <tr> {d.homeworld.name} </tr>
            </tr>
            ))
        }
    </table>
}

export default Details