import Display from "../Display/Display.js";

var x = 0,
  y = 0,
  flag = 0,
  action = "",
  total = 0,
  showVal = 0;
export default function calculator(state, a) {
  if ($.isNumeric(a)) {
    //alert(a);

    if (flag == 0) {
      a = parseInt(a);
      x = x * 10;
      x = x + a;
      showVal = x;
      total = x;
    } else {
      a = parseInt(a);
      y = y * 10;
      y = y + a;
      showVal = y;
    }
  } else {
    flag = 1;
    if (a == "C") {
      //action = "plus";
      showVal = 0;
      total = 0;
      x = 0;
      y = 0;
      flag = 0;
      action = "";
    } else if (a == "/") {
      action = "divide";
    } else if (a == "X") {
      action = "product";
    } else if (a == "-") {
      action = "substract";
    } else if (a == "+") {
      action = "plus";
    } else if (a == "=") {
      if (action == "plus") {
        total = total + y;
        showVal = total;
        y = 0;
      } else if (action == "substract") {
        total = total - y;
        showVal = total;
        y = 0;
      } else if (action == "product") {
        total = total * y;
        showVal = total;
        y = 0;
      } else if (action == "divide") {
        total = total / y;
        showVal = total;
        y = 0;
      }
    }
  }

  return {
    total: showVal,
    next: null,
    operation: null
  };
}
