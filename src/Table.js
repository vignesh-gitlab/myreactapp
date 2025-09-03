import { Component } from "react";

const TableHeader = ()=>{
    return (
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
    )
}
const TableBody = ()=>{
    return(
                <tbody>
                    <tr>
                        <td>Vignesh</td>
                        <td>Developer</td>
                    </tr>
                    <tr>
                        <td>Vengadesh</td>
                        <td>Finance</td>
                    </tr>
                </tbody>
    )
}
class Table extends Component{
    render() {
        return(
            <table>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}

export default Table;