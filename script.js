function temperatureConverter(){
    var obj = document.getElementById('inputTemp').value;
    var obj1 = parseFloat(obj);
    var c =/c/;
    var f =/f/;
    var k =/k/;
    if(c.test(obj) == true){
        document.getElementById("result1").innerHTML = (obj1*9/5)+32 + "F";
        document.getElementById("result2").innerHTML = obj1+273.15 + "K";
    }else if(f.test(obj) == true){
        document.getElementById("result1").innerHTML = (obj1-32)*5/9 + "C";
        document.getElementById("result2").innerHTML = (obj1-32)*5/9+273.15 + "K";
    }else if(k.test(obj) == true){
        document.getElementById("result1").innerHTML = obj1-273.15 + "C";
        document.getElementById("result2").innerHTML = (obj1-273.15)*9/5+32 + "K";
    }else{
        alert("Введите правильные данные");
    }

}

// задача 2
function moveNDisks() {
    var N = parseInt(document.getElementById('board').value);
    var a = "slot_a";
    var b = "slot_b";
    var c = "slot_c"
    moveNDisks1(N, a, b, c );
}
function moveNDisks1(N, a, b, c){

    if ( N == 1 )
        document.getElementById('result6').innerHTML += "Двигаем плиту " + a + " на " + b + "<br>" ;
    else {
        moveNDisks1(N-1, a, c, b );
        moveNDisks1(1, a, b, c );
        moveNDisks1(N-1, c, b, a );
    }
}
//задача 3
function getRandom() {
    var g = document.getElementById('pmove');
    if (g.checked == true){
        var r = getRandomplayer1();
        if (r>80)
          document.getElementById('pOnep').innerHTML += "попал";
        else if (r<=20)
        document.getElementById('pOnep').innerHTML += "не попал, надо сделать шаг в перед";
        else
        document.getElementById('pOnep').innerHTML += "мимо";
    }
    else{
        var k = getRandomplayer2();
         if (k>80)
           document.getElementById('pTwop').innerHTML += "попал";
         else if (k<=20)
         document.getElementById('pTwop').innerHTML += "не попал, надо сделать шаг в перед";
         else
         document.getElementById('pTwop').innerHTML += "мимо";
    }
}
function getRandomplayer1(min,max) {
    var min = +document.getElementById('player1').value;
    var max = 1;
    return (Math.random() * (max - min) + min)*100;
};
function getRandomplayer2(min,max) {
    var min = +document.getElementById('player2').value;
    var max = 1;
    return (Math.random() * (max - min) + min)*100;
};


//задача 4

// class Post {
//   constructor(arrCost) {
//     this.arrCost = arrCost || Array.from(Array(10).keys(),e=>Math.floor(Math.random() * 10) + 1);
//   }
//
//   sumCP () {
//     return this.arrCost.reduce((acc,v)=>acc+v);
//   }
// }
// // Класс водителей.
// // Конструктор сгенерирует  у экземпляра массив с ценностью монет
// class Driver {
//   constructor() {
//     this.arrCoin = Array.from(Array(10).keys(),e=>Math.floor(Math.random() * 10) + 1);
//   }
//   // функция выживаемости
//   // возвращает сумму всех целых в массиве из конструктора
//   fitnessF() {
//     return this.arrCoin.reduce((acc,v)=>acc+v);
//   }
// }
// // Класс популяция водителей
// // Конструктор принимает кол-во водителей в популяции
// class PopulationDriver {
//   constructor(countDrvr) {
//     this.arrDrvr = Array.from(Array(countDrvr).keys(),e=>new Driver());
//   }
// }
// // Далее идет собственно сам алгоритм,
// // но для данного примера, я несколько изменил его
// // Вместо того чтобы скрещивать водителей,
// // мы мутируем целую популяцию
// // То есть тупо будем создавать новую в начале цикла.
// // Из получившейся популяции,
// // мы отберем наиболее приспособленные экземпляры в результирующий массив
// // Делать это будем по условию, что значение выживаемости экземпляра водителей
// // равно или превышает сумму оплат на всем пути.
// // Дабы цикл не ушел в нирвану, мы ограничим длину результирующего массива.
// // Скажем 100.
// // Таким образом мы получим как минимум сотню возможных вариантов
// // прохождения трассы без финансовых потерь.
//
// let posts = new Post(),
//     resultArr = [];
// while (resultArr.length < 100) {
//   let drP = new PopulationDriver(10);
//   drP.arrDrvr.forEach(el=>{
//     if (el.fitnessF()>=posts.sumCP()) resultArr.push(el.arrCoin);
//   });
// }
//
// // выведем резултирующий массив с результатами и его длину
// document.writeln(`<b>вариантов: ${resultArr.length}</b>`);
// resultArr.forEach((e,i)=>document.writeln(`<br><b>${i+1}</b> => ${e}`));
