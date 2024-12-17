import fs from 'fs';

let list;

let col1: number[] = [];
let col2: number[] = [];
let total: number = 0;

function sort() {
    fs.readFile("src/data.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        list = data.split("\n");
        for (let i = 0; i < list.length; i++) {
            let temp = list[i].replace("   ", "\n").split("\n");
            col1.push(parseInt(temp[0]));
            col2.push(parseInt(temp[1]));
        }
        col1 = col1.sort()
        col2 = col2.sort()

        for (let i = 0; i < col1.length; i++) {
            total += Math.abs(col1[i] - col2[i]);
        }

        console.log(total);

    });
}

sort()