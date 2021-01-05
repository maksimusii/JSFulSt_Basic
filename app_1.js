
// Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
//Доска должна быть верно разлинована на черные и белые ячейки. 
//Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
'use strict';
    
        let config = {
            rows: [8, 7, 6, 5, 4, 3, 2, 1],
            cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
        }
        
     
        function generateBoard() {
          let board = '';
          let rowColor = 'white';
          for (let i = 0; i < 8; i++) {
            let row = '';
            let rowNumber = '<div class="chessCell">' + config.rows[i] + '</div>';
            if (rowColor == 'white') {
                row = rowNumber + generateRow(rowColor);
                rowColor = 'black';
            } else {
                row = rowNumber + generateRow(rowColor);
                rowColor = 'white';
            }
            board += '<div class="chessRow">' + row + '</div>';
        }
        return board + generateColsChars();
        };
        function generateRow(startRowColor) {
          let row = '';
          let cell = '';
          for (let i = 0; i < 8; i++){
            if (startRowColor === 'white') {
              cell = '<div class="chessCell white"></div>';
              startRowColor = 'black';   
          } else {
              cell = '<div class="chessCell black"></div>';
              startRowColor = 'white'
          }
          row += cell;
          }
          return row;
        };
        function generateColsChars() {
          let rowChars = '';
          for (let i = 0; i < config.cols.length; i++){
            rowChars += '<div class="chessCell">' + config.cols[i] + '</div>';
          };
          return '<div class="chessRow">' + '<div class="chessCell"></div>' + rowChars + '</div>';
      };
        
      let board = generateBoard();
      let chessboard = document.querySelector('#chessBoard');
      chessboard.insertAdjacentHTML('afterBegin', board);