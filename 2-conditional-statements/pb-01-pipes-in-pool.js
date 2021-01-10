//PB-01. Pipes In Pool

function pipesInPool(vol, p1, p2, h) {
    vol = Number(vol);
    p1 = Number(p1);
    p2 = Number(p2);
    h = Number(h);
    pool = (100 * (p1 * h + p2 * h)) / vol;
    pipe1 = (p1 * h * 100) / (p1 * h + p2 * h);
    pipe2 = (p2 * h * 100) / (p1 * h + p2 * h);
    overflow = p1 * h + p2 * h - vol;

    if (vol >= p1 * h + p2 * h) {
        console.log(
            `The pool is ${pool.toFixed(2)}% full. Pipe 1: ${pipe1.toFixed(
                2
            )}%. Pipe 2: ${pipe2.toFixed(2)}%.`
        );
    } else {
        console.log(
            `For ${h.toFixed(2)} hours the pool overflows with ${overflow.toFixed(
                2
            )} liters.`
        );
    }
}

pipesInPool("1000", "100", "120", "3");
pipesInPool("100", "100", "100", "2.5");
