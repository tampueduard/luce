autowatch = 1;

outlets = 6;

var a, b, c, d, e, f;

function bridge(x, i) {

     if(i == 1) {
        a = x;
    } if(i == 2) {
        b = x;
    } if(i == 3) {
        c = x;
    } if(i == 4) {
        d = x;
    } if(i == 5) {
        e = x;
    } if(i == 6) {
        f = x;
    }  
    if(i == -1) {
        a = x;
        b = x;
        c = x;
        d = x;
        e = x;
        f = x;
    }

outlet(0, a);
outlet(1, b);
outlet(2, c);
outlet(3, d);
outlet(4, e);
outlet(5, f);
}


















