import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  calInputs :Array<any> = new Array();
  expression : string = "0";
  result : string = "0";
  inputArr:Array<any> = new Array();
  constructor() { }

  ngOnInit(): void {
    // this.calInputs.push("1");
    // this.calInputs.push("2");
    // this.calInputs.push("3");
     // this.calInputs.push("4");
    // this.calInputs.push("5");
    // this.calInputs.push("6");
    // this.calInputs.push("7");
    // this.calInputs.push("8");
    // this.calInputs.push("9");
    // this.calInputs.push("0");

    this.calInputs.push({ type:'number', value: "1"});
    this.calInputs.push({ type:'number', value: "2"});
    this.calInputs.push({ type:'number', value: "3"});
    this.calInputs.push({ type:'number', value: "4"});
    this.calInputs.push({ type:'number', value: "5"});
    this.calInputs.push({ type:'number', value: "6"});
    this.calInputs.push({ type:'number', value: "7"});
    this.calInputs.push({ type:'number', value: "8"});
    this.calInputs.push({ type:'number', value: "9"});
    this.calInputs.push({ type:'number', value: "0"});
   
    this.calInputs.push({ type:'operator', value: "+"});
    this.calInputs.push({ type:'operator', value: "-"});
    this.calInputs.push({ type:'operator', value: "*"});
    this.calInputs.push({ type:'operator', value: "/"});
    //this.calInputs.push({ type:'operator', value: "="});

    this.calInputs.push({ type:'special', value: "X"});
    this.calInputs.push({ type:'special', value: "C"});
    this.calInputs.push({ type:'special', value: "x2"});
    // this.calInputs.push("+");    
    // this.calInputs.push("-");
    // this.calInputs.push("*");
    // this.calInputs.push("/");
    // this.calInputs.push("=");
  }

  inputClicked(input:any){
    switch (input.type) {
      case "special":
        this.handleSpecialOperation(input);
        break;

        case "operator":
        this.handleOperator(input);
        break;

        case "number":
          this.inputArr.push(input);
        break;
    }
    this.evaluateExpression();

  }

  private handleSpecialOperation(input:any){
    switch (input.value) {
      case "X":
        this.inputArr.pop();
        break;
        case "C":
          this.inputArr = new Array(); // find better way to do this
          break;
          case "x2":
            let lastItem = this.inputArr[this.inputArr.length-1];
            if (lastItem.type != "operator") {
              this.inputArr.pop();
              lastItem.value = "sqr("+lastItem.value+")";
              this.inputArr.push(lastItem);
            }
          break;
          
      default:
        break;
    }
  }

  private handleOperator(input:any){
    let lastItem = this.inputArr[this.inputArr.length-1];
      if (lastItem.type == "operator") {
        this.inputArr.pop();
      }
      this.inputArr.push(input);
  }

  private evaluateExpression(){
    this.expression= this.inputArr.map(x=>x.value).join("");
    this.result = eval(this.expression); // Are we allowed to use eval ?
    if (this.result == "" || this.result == undefined){
      this.result = "0";
      this.expression = "0";
    }
  }

}
