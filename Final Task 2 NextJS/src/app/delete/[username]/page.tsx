export default function Delete( {params} : {params:{username: string}} ){
    return (
    <center>
        <table>
            <tr><h1>Delete {params.username}?</h1></tr>
            <h2>Are you sure you want to delete this user?</h2>
        </table>
    </center>
    );
}