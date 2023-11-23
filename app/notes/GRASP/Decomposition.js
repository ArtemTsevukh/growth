//  https://youtu.be/4AMVQ2-2DcM

let arr = ["Ilya", "Kantor"]

// firstName=arr[0], surname=arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

// 2

function f() {
    let v1 = "dsfsdf";
    let v2 = 5;
    return {v1, v2};
}

// При одинакових іменах полів об`єкта и змінних
let {v1, v2} = f();

// при різних
let {v1:valueA, v2:valueB} = f();

