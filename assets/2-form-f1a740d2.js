const e=document.querySelector(".feedback-form"),a="feedback-form-state",l=e.elements.message,o=e.elements.email;l.value=localStorage.getItem(a)??"";o.value=localStorage.getItem(a)??"";e.addEventListener("input",t=>{localStorage.setItem(a,t.target.value)});e.addEventListener("submit",t=>{t.preventDefault(),console.log({message:t.target.elements.message.value,email:t.target.elements.email.value}),m()?e.submit():alert("Please fill in all the form fields in order to submit it!"),localStorage.removeItem(a),e.reset()});function m(){return l.value.trim()!==""&&o.value.trim()!==""}
//# sourceMappingURL=2-form-f1a740d2.js.map
