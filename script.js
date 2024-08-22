
const btn = document.getElementById("button");

btn.addEventListener("click", async e => {
    e.preventDefault();
    

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const username = firstName.value + " " + lastName.value;
    const emailBox = document.getElementById("email")
    const email = emailBox.value;
    const messageBox = document.getElementById("message")
    const message = messageBox.value;
    const successMessage = document.getElementById("success_message")

    const data = {
        service_id: "service_irnqv2v",
        template_id: "template_aoqownt",
        user_id: "HKMD6HR6SSJ_a-gRM",
        template_params: {
            'from_name': username,
            'to_name': 'Kushal Sharma',
            'email': email,
            'message': message,
        }
    }

   
    try {
        const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
            
        })
        successMessage.style.display= 'inline';
        setTimeout(()=>{
            successMessage.style.display = 'none';
        },5000)
        
        
        firstName.value="";
        lastName.value="";
        emailBox.value="";
        messageBox.value=""
    } catch (error) {
        console.log(error);
        
    }

})






