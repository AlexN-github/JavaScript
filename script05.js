let app = {
    config: {
        rows: [8,7,6,5,4,3,2,1],
        cols: ['a','b','c','d','e','f','g','h']
    },
    
    run(){
        //генерим доску
        let board = this.generateBoard();
        //добавляем доску в документ
        document.body.innerHTML = board;
        
        //добавляем колонку с номерами строк
        this.insertRowsNumbers();
        //добавляем строку с названием колонок
        this.insertColsChars();
    },
    
    generateBoard(){
        let board = '';
        let rowStartWidthColor = 'white';
        for(let i = 0;i < this.config.rows.length; i++){
            let row = '';
            row = this.generateRow(rowStartWidthColor,this.config.rows[i]);
            if(rowStartWidthColor == 'white'){
                rowStartWidthColor = 'black';
            } else{
                rowStartWidthColor = 'white';
            }
            board += row;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
    
    generateRow(starWithColor, rowNum){
        let currentColorClass = starWithColor;
        let row = "";
        for(let i = 0; i < this.config.cols.length; i++){
            let field = "";
            if(currentColorClass === 'white'){
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },
    
    generateField(color, rowNum, colChar){
        return `<td data-rowNum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },
    
    insertRowsNumbers(){
        let trs =document.querySelectorAll('tr');
        for(let i = 0; i < trs.length; i++){
            let td = document.createElement('td');
            td.innerText = this.config.rows[i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },
    
    insertColsChars(){
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for(let i = 0; i < this.config.cols.length; i++){
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    }
};

app.run()