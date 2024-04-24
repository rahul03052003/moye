let todolist=[
    {
    item:'Buy Milk',
    dueDate:'2023-10-04'
},
{
    item:'Go to collage',
    dueDate:'2023-10-04'

}
];
displayItems();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todolist.push({
        item:todoItem,
        dueDate:todoDate
    });
    inputElement.value='';
    dateElement.value='';
    displayItems();
}   
function displayItems(){
    let container=document.querySelector(`.todo-container`);
    let newHtml='';
    for(let i=0;i<todolist.length;i++){
        let{item,dueDate}=todolist[i];
        newHtml+=`
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todolist.splice(${i},1);
        displayItems();">Delete</button>
        `;
    }
    container.innerHTML=newHtml;
}
