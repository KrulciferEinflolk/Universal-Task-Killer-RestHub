function calcularTeoremaDeTales() {
    const ab = parseFloat(document.getElementById("ab").value);
    const de = parseFloat(document.getElementById("de").value);
    const bc = parseFloat(document.getElementById("bc").value);
    const ef = parseFloat(document.getElementById("ef").value);
    const ca = parseFloat(document.getElementById("ca").value);
    const fd = parseFloat(document.getElementById("fd").value);
  
    if (isNaN(ab) || isNaN(de) || isNaN(bc) || isNaN(ef) || isNaN(ca) || isNaN(fd)) {
      document.getElementById("resultado").textContent = "Ingresa valores válidos.";
      return;
    }
  
    const prop1 = ab / de;
    const prop2 = bc / ef;
    const prop3 = ca / fd;
  
    if (prop1 === prop2 && prop2 === prop3) {
      document.getElementById("resultado").textContent = "¡Las proporciones son iguales! El teorema de Tales se cumple.";
      document.getElementById("procedimiento").textContent = "Procedimiento: AB/DE = BC/EF = CA/FD = " + prop1;
    } else {
      document.getElementById("resultado").textContent = "Las proporciones no son iguales. El teorema de Tales no se cumple.";
      document.getElementById("procedimiento").textContent = "Procedimiento: Las proporciones no son iguales.";
    }
  }
  