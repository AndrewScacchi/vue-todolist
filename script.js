// script for Exercise

const mytoDoList = new Vue({
    el:"#root",
    data : {
        newToDo : "",
        toDos : [
            {
                "text"   : "Ehi prof che cosa vuoi fare stasera?",
                "done" : true 
            },
            {
                "text"   : "Quello che facciamo tutte le sere Mignolo..",
                "done" : false 
            },
            {
                "text"   : "Tentare di conquistare il mondo!",
                "done" : true 
            },
            {
                "text"   : "(cantante) Il mignolo col prof! il mignolo col prof!",
                "done" : false
            },           
        ]

    },
    methods : {
        // delete an element on click of another
        deleteToDo(index) {
            this.toDos.splice(index,1);
        },
        // add an element from an input field on click of button
        addToDo(){
            const newLi = {
                text : this.newToDo,
                done : false
            }
            if(this.newToDo !== "") {
                this.toDos.push(newLi);
                this.newToDo = "";
            }
        },
    }
});