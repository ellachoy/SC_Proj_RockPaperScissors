console.log("proj");



function get_results(){
    // console.log(document.getElementById('btn').checked).value;
    // c_box= Number(document.querySelector('input[type=button]').checked.value);

    com_cal= Math.floor(Math.random()*3);
    console.log(`com : ${com_cal}`);
    str_Input= ['Rock', 'Paper', 'Scissors'];
    str_Out= (` user:  ${str_Input[user]}  VS  computer : ${str_Input[com_cal]} =`);

    if(user== com_cal){
        str_Out = str_Out + "draw!"
    }else if ((user == 0 && com_cal == 1) || (user == 1 && com_cal == 2)|| (user == 2 && com_cal == 0)){
        str_Out = str_Out + "Computer win!"
    }else{
        str_Out = str_Out + "User win"
    }
     document.getElementById('result').innerHTML =str_Out;   
        
}

// user
let user=0;

function do_rock(){
    user=0;
    
}

function do_scissor(){
    user=1;
    
}
function do_paper(){
    user=2;
    
}











// let computer= random() %3;
// let user= 
// 0=rock
// 1=Scissors
// 2=Paper


// if(computer == 0 && user ==0);{
//     document.getElementById('result').innerHTML='unentschieden'
// }else if (computer == 0 && user == ){
//     document.getElementById('result').innerHTML='computer win'
// }