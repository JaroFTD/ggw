'use strict';

let d, e, f, g, H, i, j, k, l, m, n, o;

let x;
let Lo;
let Aop;
let Vo;
let Tx;
let Kn;
let Ap;
let tireA;
let tireX;
let Ks;
let vqx;
let tringleTx;
let sH;
let P;
let Vv;
let Rpr

let sumX = document.querySelector('[data-sum-x]');
let sumLo = document.querySelector('[data-sumLo]');
let sumAop = document.querySelector('[data-sumAop]');
let sumVo = document.querySelector('[data-sumVo]');
let sumTx = document.querySelector('[data-sumTx]');
let sumKn = document.querySelector('[data-sumKn]');
let sumAp = document.querySelector('[data-sumAp]');
let sumtireA = document.querySelector('[data-tireA]');
let sumtireX = document.querySelector('[data-tireX]');
let sumKs = document.querySelector('[data-Ks]');
let sumvqx = document.querySelector('[data-vqx]');
let sumTringleTx = document.querySelector('[data-sumTringleTx]');
let sumH = document.querySelector('[data-sumH]');
let sumH2 = document.querySelector('[data-sumH2]');
let sumP = document.querySelector('[data-sumP]');
let sumVv = document.querySelector('[data-sumVv]');
let sumRpr = document.querySelector('[data-sumRpr]');

// window.addEventListener('dblclick', function (e) {
//    const target = e.target;
//    const copy = target.innerHTML;
//    const titleTwo = document.createElement('h2');
//    target.parentElement.append(input);

// });

let inputs = document.querySelectorAll('input');

for (let elem = 0; elem < inputs.length; elem++){
   inputs[elem].addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
         const target = event.target;
         if (target.parentElement.tagName == 'P' || target.parentElement.tagName == 'LABEL') {
            let p = target.parentElement.textContent;
            p += this.value;
            target.parentElement.textContent = p;
            this.remove();
         } else {
            const titleTwo = document.createElement('h2');
            titleTwo.textContent = this.value;
            this.parentElement.append(titleTwo);
            this.remove();
         }
         if (this.hasAttribute('data-length-room')) {
            d = this.value;
            allValue('[data-length-room]', d);
         }
         if (this.hasAttribute('data-width-room')) {
            e = this.value;
            allValue('[data-width-room]', e);
         }
         if (this.hasAttribute('data-height-room')) {
            f = this.value;
            allValue('[data-height-room]', f);
         }
         if (this.hasAttribute('data-сalculated-air')) {
            g = this.value;
            allValue('[data-сalculated-air]', g);
         }
         if (this.hasAttribute('data-degree-internal')) {
            H = this.value;
         }
         if (this.hasAttribute('data-height-working')) {
            i = this.value;
            allValue('[data-height-working]', i);
         }
         if (this.hasAttribute('data-afact')) {
            j = this.value;
            allValue('[data-afact]', j);
         }
         if (this.hasAttribute('data-speed-coefficient')) {
            k = this.value;
            allValue('[data-speed-coefficient]', k);
         }
         if (this.hasAttribute('data-temperature-coefficient')) {
            l = this.value;
            allValue('[data-temperature-coefficient]', l);
         }
         if (this.hasAttribute('data-temperature-m')) {
            m = this.value;
            allValue('[data-temperature-m]', m);
         }
         if (this.hasAttribute('data-system-control')) {
            n = this.value;
            allValue('[data-system-control]', n);
         }
         if (this.hasAttribute('data-plotSp')) {
            o = this.value;
            allValue('[data-plotSp]', o);
         }

         if (e && f && i) {
            e = e.split(',').join('.');
            f = f.split(',').join('.');
            i = i.split(',').join('.');
            x = Number(e) + Number(f) - Number(i);
            sumX.textContent = Number.isInteger(x) ? x : x.toFixed(2);
         }

         if (g) {
            g = g.split(',').join('.');

            Lo = Number(g) / 1;
            sumLo.textContent = Number.isInteger(Lo) ? Lo : Lo.toFixed(2);

            Aop = g / (1.5 * 3600);
            sumAop.textContent = Number.isInteger(Aop) ? Aop : Aop.toFixed(2);
         }

         if (g && j) {
            g = g.split(',').join('.');
            j = j.split(',').join('.');
            Vo = Number(g) / (3600 * Number(j));
            sumVo.textContent = Number.isInteger(Vo) ? Vo : Vo.toFixed(2);
         }

         if (m) {
            m = m.split(',').join('.');
            Tx = Number(m) - 18;
            sumTx.textContent = Number.isInteger(Tx) ? Tx : Tx.toFixed(2);
         }

         if (x && f) {
            f = f.split(',').join('.');
            allValue('[data-sumX]', x);
            Kn = Math.cbrt(1 + Math.pow(Number(sumX.textContent) / Number(f), 2));
            sumKn.textContent = Number.isInteger(Kn) ? Kn : Kn.toFixed(2);
         }

         if (d && f) {
            d = d.split(',').join('.');
            f = f.split(',').join('.');
            Ap = (Number(d) * Number(f)) / 1;
            sumAp.textContent = Number.isInteger(Ap) ? Ap : Ap.toFixed(2);
         }

         if (Ap) {
            allValue('[data-sumAp]', Ap);
         }

         if (Vo) {
            allValue('[data-sumVo]', Vo.toFixed(2));
         }

         if (j && Ap) {
            j = j.split(',').join('.');
            Ap = String(Ap).split(',').join('.');
            tireA = Number(j) / Number(Ap);
            sumtireA.textContent = Number.isInteger(tireA) ? tireA : tireA.toFixed(4);
         }

         if (x && k && Ap) {
            x = String(x).split(',').join('.');
            k = String(k).split(',').join('.');
            Ap = String(Ap).split(',').join('.');
            tireX = Number(x) / (Number(k) * Math.sqrt(Number(Ap)));
            sumtireX.textContent = Number.isInteger(tireX) ? tireX : tireX.toFixed(2);
         }

         if (g && k && j && Ap) {
            g = String(g).split(',').join('.');
            j = String(j).split(',').join('.');
            k = String(k).split(',').join('.');
            Ap = String(Ap).split(',').join('.');
            Ks = 0.9 + ((0.9 * Number(g)) / (Number(k) * Number(g))) * (5.4 / Math.sqrt(Number(Ap))) * Math.sqrt(Number(j)/Number(Ap));
            sumKs.textContent = Number.isInteger(Ks) ? Ks : Ks.toFixed(3);
         }

         if (k && Vo && j) {
            k = String(k).split(',').join('.');
            Vo = String(Vo).split(',').join('.');
            j = String(j).split(',').join('.');
            vqx = ((Number(k) * Number(Vo) * Math.sqrt(Number(j))) / 5.4) * 1.1 * 0.9;
            sumvqx.textContent = Number.isInteger(vqx) ? vqx : vqx.toFixed(2);
         }

         if (j && l) {
            l = String(l).split(',').join('.');
            j = String(j).split(',').join('.');
            tringleTx = ((Number(l) * 2 * Math.sqrt(Number(j))) / 5.4) * (1 / (1.1 * 0.9));
            sumTringleTx.textContent = Number.isInteger(tringleTx) ? tringleTx : tringleTx.toFixed(2);
         }

         if (k && j && l && Vo) {
            k = String(k).split(',').join('.');
            l = String(l).split(',').join('.');
            j = String(j).split(',').join('.');
            Vo = String(Vo).split(',').join('.');
            sH = ((5.45 * Number(k) * Number(Vo) * Math.pow(Number(j), 1/4)) / Math.sqrt(Number(l) * 2));
            sumH.textContent = Number.isInteger(sH) ? sH : sH.toFixed(2);
         }

         if (sH) {
            let num = sH / 2;
            sumH2.textContent = Number.isInteger(num) ? num : num.toFixed(2);
         }
         
         if (o) {
            o = String(o).split(',').join('.');
            P = (353 / (273 + (Number(o))));
            sumP.textContent = Number.isInteger(P) ? P : P.toFixed(2);
         }

         if (n) {
            n = String(n).split(',').join('.');
            Vv = (Number(n) / (0.21 * 3600));
            sumVv.textContent = Number.isInteger(Vv) ? Vv : Vv.toFixed(2);
         }

         if (P) {
            allValue('[data-sumP]', Number.isInteger(P) ? P : P.toFixed(2));
         }
         
         if (Vv) {
            allValue('[data-sumVv]',  Number.isInteger(Vv) ? Vv : Vv.toFixed(2));
         }

         if (P && Vv) {
            P = String(P).split(',').join('.');
            Vv = String(Vv).split(',').join('.');
            Rpr = (2.6 * Number(P) * Math.pow(Number(Vv), 2)) / 2;
            sumRpr.textContent = Number.isInteger(Rpr) ? Rpr : Rpr.toFixed(2);
         }
      }
   });
}

function allValue(item, value) {
   let items = document.querySelectorAll(item);
   for (let i = 0; i < items.length; i++){
      const span = document.createElement('span');
      span.textContent = value;
      items[i].parentElement.append(span);
      items[i].remove();
   }
}


// window.addEventListener('load', function (e) {
//    let arr = document.querySelectorAll('.mjx-n');

//    for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i].textContent);
//    }
// });