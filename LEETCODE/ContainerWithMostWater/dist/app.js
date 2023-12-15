import { Graph } from './models/graph-model.js';
console.log('App is running!');
$(function () {
    $('#show').on('click', function () {
        let graph = new Graph([1, 8, 6, 2, 5, 4, 8, 3, 7]);
        console.log(graph.state);
        const canvas = document.getElementById("myCanvas");
        if (typeof canvas === "object") {
            const ctx = canvas.getContext("2d");
            if (ctx !== null) {
                ctx.beginPath();
                ctx.moveTo(100, 500);
                ctx.lineTo(700, 500);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(160, 480);
                ctx.lineTo(160, 500);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(220, 340);
                ctx.lineTo(220, 500);
                ctx.stroke();
            }
        }
    });
});
//# sourceMappingURL=app.js.map