export default function Update( {params} : {params:{username: string}} ){
    return (
    <center>
        <table>
            <tr><h1>Update {params.username} Information</h1></tr>
            <tr><td>Name:</td><td><input type="text" name="name"></input></td></tr>
            <tr><td>Company Name:</td><td><input type="text" name="compname"></input></td></tr>
            <tr><td>Contact:</td><td><input type="text" name="contact"></input></td></tr>
            <tr><td>Password:</td><td><input type="password" name="name"></input></td></tr>
        </table>
    </center>
    );
}