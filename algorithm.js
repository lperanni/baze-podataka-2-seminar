let executionLog = "";

const checkIfInThirdNF = (R, keys, Fmin) => {

  let valid = true;
  flatten(Fmin).forEach(element => {
    const left = element.split("->")[0];
    const right = element.split("->")[1];

    //FIRST RULE (Trivijalna FO)
    for (var i = 0; i < right.length; i++) {
      if (!left.includes(right.charAt(i))) {
        valid = false;
      }
    }
    if (valid) {
      console.log("First rule has been confirmed for: " + element);
      return true;
    }
    //SECOND RULE (x->a, X je nadkljuc)
    flatten(keys).every(k => {
      valid = true;
      for (var i = 0; i < k.length; i++) {
        if (!left.includes(k.charAt(i))) {
          valid = false;
        }
      }
      if (valid) {
        return false;
      }
    })

    if (valid) {
      console.log("Second rule has been confirmed for: " + element);
      return true;
    }

    //THIRD RULE (A je osnovni atribut)
    flatten(keys).every(k => {
      valid = true;
      for (var i = 0; i < right.length; i++) {
        if (!k.includes(right.charAt(i))) {
          valid = false;
        }
      }
      if (valid) {
        return false;
      }
    })
    if (!valid) {
      console.log("No rule has been confirmed for: " + element);
      return false;
    }


    console.log("Third rule has been confirmed for: " + element);
    return true;
  });
  return valid;
}

const decomposeToThirdNF = (R, K, Fmin) => {
  const result = [];
  if(checkIfInThirdNF(R, K, Fmin)){
    executionLog += "Already in 3rd normal form";
    return result;
  };
  flatten(Fmin).forEach(item => {
    const original = item;
    item = mergeUnique(item);
    let valid = false;
    result.every(Ri => {
      valid = true;
      console.log("RI: " + Ri);
      for (let i = 0; i < item.length; i++) {
        if (!Ri.includes(item.charAt(i))) {
          valid = false;
        }
      }
      if (valid) {
        console.log(original + " is element of Ri");
        executionLog += String(original) + " is element of Ri\n";
        return false;
      }
    })
    if (!valid && item.length > 1) {
      console.log(original + " not present. Adding to Ro");
      executionLog += String(original) + " not present. Adding to Ro\n\n";
      result.push(item);
    }
  })
  console.log("Result is: " + result);
  executionLog += "Result is: " + String(result)+ "\n\n\n";
  return result;
}

const flatten = (objectArray) => {
  const data = [];
  for (let i in objectArray) {
    data.push(objectArray[i][Object.keys(objectArray[i])[0]])
  }
  return data;
}

const mergeUnique = (item) => {
  item = [...item.split("->")[0], ...item.split("->")[1]];
  return item.filter(function (i, pos) {
    return item.indexOf(i) == pos;
  }).join("");
}

const getLog = () => {
  const returnVal = executionLog;
  executionLog = "";
  return returnVal;
}

module.exports = {
  checkIfInThirdNF,
  decomposeToThirdNF,
  getLog
}   
