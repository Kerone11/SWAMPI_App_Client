import {gql, useQuery} from "@apollo/client";
import {Link, useParams} from "react-router-dom";

const allPeople_ = gql
    `
    query getPage($page: String){
	findByPage(page: $page)
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

function AllPeople() {
    const {pageNumber} = useParams()
    const {loading, error, data} = useQuery(allPeople_, {variables: {page: pageNumber}})
    if (loading) return  <p> loading </p>
    if (error) return  <p> error </p>
    return <table class = "TableClass">
        {
            data.findByPage.results.map((d)=>(
                <tr key = {d.name}>
                    <td> <Link to={`/details/${d.name}`}>{d.name}</Link> </td>
                </tr>
            ))
        }
    </table>
}

export default AllPeople