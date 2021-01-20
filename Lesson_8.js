//2. Не выполняя код, ответить, что выведет браузер и почему:

// a.

if (!("a" in window)) {
  var a = 1;
}
alert(a);

// Ключевое слово var создает переменную 'a' в глобальной области window. 
// Но условие в if не срабатывает и переменная 'a' имеет значение по умолчанию undefined.
// Окно браузера выведет окно 'alert' с текстовым значением переменной 'a' равное undefined.

// b.

var b = function a(x) {
  x && a(--x);
};
alert(a);

// Ключевое слово var создает переменную 'b' в глобальной области window.  
// Переменной 'b' присваивается в качестве значения функция 'a'. 
// Функция 'alert' запрашивает значение переменой 'a' которая не где не задана.
// Окно браузера ничего невыведет.

// c.

function a(x) {
  return x * 2;
}
var a;
console.log(window)
alert(a);

// Ключевое слово function создает переменную 'a' в глобальной области window.  Переменной 'a' присваивается функция 'a'. 
// Окно браузера выведет окно 'alert' с тектовым значением функции 'a'.

// d.

function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}
b(1, 2, 3);

// Ключевое слово function создает переменную 'b' в глобальной области window.  Переменной 'b' присваивается функция 'b' с тремя аргументами.
// Происходит выполнение функции 'b' с указанием всех трех аргументов.
// Ключевое слово arguments[2] изменяет значение 3-го аргумента функции 'b' на 10. 
// Окно браузера выведет окно 'alert' с тектовым значением 3-го аргумента функции 'b'.

// e.*

function a() {
  alert(this);
}
a.call(null);

// Ключевое слово function создает переменную 'a' в глобальной области window.  Переменной 'a' присваивается функция 'a'.
// Ключевое слово call выполнет вызов функции 'a' с указанием значения this для выполнения функции. 
// Окно браузера выведет окно 'alert' с тектовым значением глобального объекта window [object window], 
// так как значение null при вызове функции чере call заменяется на глобальный объект window.