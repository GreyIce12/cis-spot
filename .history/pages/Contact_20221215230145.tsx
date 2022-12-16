import React,{ useState }  from 'react'



function Contact() {

  const [email,setEmail]=useState('')
  const SendMail = async (e:any)=>{

    e.preventDefault();

    const formData:any = {};

    Array.from(e.currentTarget.elements).forEach((field: any) => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
  
    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }
  

  return (
    <div className="grid-flow-col">
    <style jsx>{`
      form {
        font-size: 1.2em;
      }
  
      label {
        display: block;
        margin-bottom: .2em;
      }
  
      input,
      textarea {
        width: 100%;
        padding: .8em;
      }
  
      button {
        color: white;
        font-size: 1em;
        background-color: blueviolet;
        padding: .8em 1em;
        border: none;
        border-radius: .2em;
      }
    `}</style>
    <form method="post" onSubmit={SendMail}>
      <p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  </div>
  )
}

export default Contact
 