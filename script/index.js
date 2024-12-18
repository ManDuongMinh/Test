const login =() => {
    let iname = document.getElementById("idname").value;
    var rename = /^\w+$/;
    if ((!rename.test(iname))){
    
        alert("Login name field can't left blanked!");
        document.getElementById("idName").focus(); 
        return false;
    } 
    let ipwd = document.getElementById("idpwd").value;
    var repwd = /^\w+$/;
    if (!repwd.test(ipwd)){
        alert("Password field can't left blanked!");
        document.getElementById("idpwd").focus();
        return false;
    }
    let logn = "aptech";
    let pwd = "123";
    let res = (ipwd == pwd);
    if ((logn==iname)&&(pwd==ipwd))
    {
        alert("Welcome Aptech, login successfull!");
    } else if (logn!=iname)
    {
        alert("Wrong username! Please try again!");
        
    }
    else 
    {
        alert("Wrong password! Please try again!");
        
    }
    
}