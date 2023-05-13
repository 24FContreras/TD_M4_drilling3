"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log("🟢 Connected!");

var formulario = document.querySelector("#formulario");
var copies = document.querySelectorAll(".copies");
var destinatario = document.querySelector("#destinatario");
var titulo = document.querySelector("#titulo");
var mensaje = document.querySelector("#mensaje");
var remitente = document.querySelector("#remitente");

var mostrarMensaje = function mostrarMensaje(destinatario, remitente, titulo, mensaje) {
  for (var _len = arguments.length, copias = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    copias[_key - 4] = arguments[_key];
  }

  console.log("PARA: " + destinatario + "\nT\xCDTULO: " + titulo + "\nMENSAJE: " + mensaje + "\nFROM: " + remitente);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = copias[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.value) {
        console.log("CC: " + item.value);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!destinatario.value.trim()) {
    alert("Debes llenar el campo " + destinatario.name);
    destinatario.focus();
    return;
  }

  if (!titulo.value.trim()) {
    alert("Debes llenar el campo " + titulo.name);
    titulo.focus();
    return;
  }

  if (!mensaje.value.trim()) {
    alert("Debes llenar el campo " + mensaje.name);
    mensaje.focus();
    return;
  }

  if (!remitente.value.trim()) {
    alert("Debes llenar el campo " + remitente.name);
    remitente.focus();
    return;
  }

  mostrarMensaje.apply(undefined, [destinatario.value, remitente.value, titulo.value, mensaje.value].concat(_toConsumableArray(copies)));
});