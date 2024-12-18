const Register = () =>
{
    var iname = document.getElementById("idname").value;
    var rename = /^\w+$/;
    if (!rename.test(iname))
    {
        alert("Login name cannot left blank!");
        document.getElementById("idname").focus();
        return false;
    }
    var iemail = document.getElementById("idemail").value;
    var remail = /^\w+[@]\w+[.]\w{3}([.]\w{3})?$/;
    if (!remail.test(iemail))
    {
        alert("Email wrong please try agian!");
        document.getElementById("idemail").focus();
        return false;
    }
    var ipwd = document.getElementById("idpwd").value;
    var repwd =  /^\w{3,18}$/;
    if (!repwd.test(ipwd))
    {
        alert("Password cannot be blank!");
        document.getElementById("idpwd").focus();
        return false;
    }
    var irpwd = document.getElementById("idrpwd").value;
    if (irpwd != ipwd)
    {
        alert("Password don't match!");
        document.getElementById("idrpwd").focus();
        return false;
    }
    var mess = new String();
    mess = mess.concat("Information \n");
    mess = mess.concat("---------------------- \n");
    mess = mess.concat("Login name: ",iname);
    mess = mess.concat("\nEmail: ",iemail);
    alert(mess);
}