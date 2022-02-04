const formRef = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault()

    const object = {};
    for (let elem of [...formRef.elements]) {
        // elem.dataset
        if ((typeof elem) === object) {
            console.log(elem);
            const key = elem.ObjectKey();
            object[key] = formRef.elements[key];
        }
        console.log(object)

}
//     console.log(object)
    // console.log( refs.formRef.elements);
    // const emailInputRef = formRef.elements.email;
    // const passwordInputRef = formRef.elements.password;
    // if (!emailInputRef.value || !passwordInputRef.value) {
    //     alert("Все поля должны быть заполнены!!");
    //     return;
    // }
    
    // // console.log([...refs.formRef.elements]);
    // object.email = emailInputRef.value;
    // object.password = passwordInputRef.value;
    // console.log(object);
    formRef.reset();
}

// Добавляем слушателя на форму по событию submit
formRef.addEventListener('submit', onSubmit);

// у form.elements есть поля name и value. именно их и нужно использовать
// object[elements.name]=elements.value
// elements псевдомассив, перебираем его и из каждого элемента забираем element.name и element.value





