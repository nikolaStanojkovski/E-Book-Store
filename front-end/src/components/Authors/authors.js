import React from "react";

const authors = (props) => {
    return (
        <div className={"container"}>
            <div>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Surname</th>
                            <th scope={"col"}>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authorsDto.map((term) => {
                            return (
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.surname}</td>
                                    <td>{term.country.name}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default authors;