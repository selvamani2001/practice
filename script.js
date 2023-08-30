// // // // console.log(document);


// // // // const divElement = document.createElement("div");


// // // // document.body.appendChild(divElement);

// // // // const pElement = document.createElement("P")

// // // // pElement.innerText = "Hello All This Is Aji."

// // // // divElement.appendChild(pElement)

// // // // const headindElement = document.createElement("h1")
// // // // headindElement.innerText= "ajith"
// // // // document.body.appendChild(headindElement)


// // // const divElement = document.createElement("div")
// // // document.getElementById("mydiv")
// // // divElement.style.border="5px solid red"
// // // document.body.appendChild(divElement)

// // // const pElement = document.createElement("p")
// // // document.getElementsByClassName("paragraph")
// // // pElement.innerText = "my name is aji"
// // // pElement.style.fontSize="x-large"
// // // divElement.appendChild(pElement)



// // setInterval(()=>{


// // }, intervel)




// // // https://iq.opengenus.org/roll-the-dice-game/



















//  let currentPlayer = 1;
//         let player1Score = 0;
//         let player2Score = 0;
//         let isGameDisabled = false;

//         function rollDice() {
//             if (!isGameDisabled) {
//                 const roll = Math.floor(Math.random() * 6) + 1;
//                 const diceImage = document.getElementById('diceImage');
//                 diceImage.src = `dice${roll}.png`;

//                 if (currentPlayer === 1) {
//                     player1Score += roll;
//                     document.getElementById('player1Score').textContent = player1Score;
//                     currentPlayer = 2;
//                 } else {
//                     player2Score += roll;
//                     document.getElementById('player2Score').textContent = player2Score;
//                     currentPlayer = 1;
//                 }

//                 document.getElementById('rollButton').disabled = true;
//                 setTimeout(() => {
//                     document.getElementById('rollButton').disabled = false;
//                 }, 1000); // Enable roll button after 1 second

//                 checkWinner();
//             }
//         }

//         function checkWinner() {
//             if (player1Score >= 30) {
//                 announceWinner(1);
//             } else if (player2Score >= 30) {
//                 announceWinner(2);
//             }
//         }

//         function announceWinner(player) {
//             isGameDisabled = true;
//             document.getElementById('rollButton').disabled = true;
//             alert(`Player ${player} wins!`);
//         }

//         function resetGame() {
//             currentPlayer = 1;
//             player1Score = 0;
//             player2Score = 0;
//             isGameDisabled = false;
//             document.getElementById('player1Score').textContent = '0';
//             document.getElementById('player2Score').textContent = '0';
//             document.getElementById('diceImage').src = 'dice1.png';
//             document.getElementById('rollButton').disabled = false;
//         }




// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     toArray() {
//         let nodes = [];
//         let thead = this.head;

//         while (thead != null) {
//             nodes.push(thead.data);
//             thead = thead.next;
//         }

//         return nodes;
//     }

//     insertAtTail(data) {
//         let newNode = new Node(data);

//         // if list is empty
//         if (this.head == null) {
//             this.head = newNode;
//         } else {
//             // if list is non-empty
//             // find the tail node
//             let tail = this.head;

//             while (tail.next != null) {
//                 tail = tail.next;
//             }

//             // tail.next = null
//             tail.next = newNode;
//         }
//     }

//     deleteAtTail() {
//         if (this.head != null && this.head.next == null) {
//             // list has only one node
//             this.head = null;
//         } else if(this.head != null) {
//             let tail = this.head;

//             while (tail.next.next != null) {
//                 tail = tail.next;
//             }

//             // tail.next.next = null
//             tail.next = null;
//         }
//     }

//     insertAtHead(data) {
//         let newNode = new Node(data);

//         newNode.next = this.head;

//         this.head = newNode;
//     }

//     deleteAtHead() {
//         if (this.head != null) {
//             this.head = this.head.next;
//         }
//     }

//     // return the number of nodes in the linked list
//     length() {
        
//     }
// }

// let list = new LinkedList();

// list.insertAtTail(3);
// list.insertAtTail(4);
// list.insertAtTail(5);
// list.insertAtTail(6);
// list.insertAtTail(10);
// list.insertAtTail(11);

// list.deleteAtTail();
// list.deleteAtTail();

// list.insertAtHead(2);
// list.insertAtHead(10);
// list.deleteAtHead();

// console.log(list.toArray());
// console.log('length: ', list.length());

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: null
            }
        }
*/


arr = [2, 373, 3844, 4774, 19, 1832, 3774, 288, 991, 1, 199, 943, 847, 292, 3273,]

console.log(arr.sort((a, b) =>{
    console.log(a, b)
    if (b > a) {
       return -1
    } else {
        return 1;
   }
}));









